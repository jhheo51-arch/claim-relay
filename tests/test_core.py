import json
import unittest

from claim_relay import notice
from claim_relay.badge import BadgeError, Desk
from claim_relay.config import ROOT, StopError
from claim_relay.evaluate import evaluate
from claim_relay.pipeline import run_case
from claim_relay.scorecard import grade, leaked, scorecard


def case(cid):
    with open(ROOT / "data" / "testset" / f"{cid}.json", encoding="utf-8") as f:
        return json.load(f)


class BadgeTest(unittest.TestCase):
    def test_read_outside_badge_stops(self):
        desk = Desk({"raw": {}, "docs": {}}, "intake")
        with self.assertRaises(BadgeError):
            desk.get("docs")

    def test_write_outside_badge_stops(self):
        desk = Desk({"raw": {}}, "documents")
        with self.assertRaises(BadgeError):
            desk.put("route", {})

    def test_no_overwrite(self):
        desk = Desk({"raw": {}, "intake": {}}, "intake")
        with self.assertRaises(BadgeError):
            desk.put("intake", {})


class PipelineTest(unittest.TestCase):
    def test_pii_stops_at_intake(self):
        result, steps = run_case(case("C039"), ledger=False)
        self.assertEqual(result["status"], "멈춤")
        self.assertEqual(result["stop"]["agent"], "intake")
        self.assertIn("전화번호", result["stop"]["reason"])
        self.assertEqual(len(steps), 1)

    def test_quote_not_in_line_is_no_evidence(self):
        c = case("C003")
        gold = json.loads(json.dumps(c["expect"]["elements"]))
        gold["고객"]["other_move"]["quote"] = "끼어들었"  # 원문에 없는 인용
        result, _ = run_case(c, "fixture", gold=gold, ledger=False)
        self.assertIn("고객 상대 진행", result["unverified"])
        self.assertIn("R04", result["rules"])
        self.assertEqual(result["route"], "사람 심사")

    def test_value_outside_vocabulary_is_no_evidence(self):
        c = case("C003")
        gold = json.loads(json.dumps(c["expect"]["elements"]))
        gold["상대"]["place"]["value"] = "고속도로"
        result, _ = run_case(c, "fixture", gold=gold, ledger=False)
        self.assertIn("상대 장소", result["unverified"])

    def test_docs_beat_human_review(self):
        result, _ = run_case(case("C023"), ledger=False)
        self.assertEqual(result["route"], "서류 보완")
        self.assertEqual(result["rules"], ["R01", "R05", "R06"])

    def test_fault_shown_only_as_expectation(self):
        result, _ = run_case(case("C003"), ledger=False)
        text = result["notice"]["customer"]
        self.assertIn("확인 후 안내", text)
        self.assertNotIn("확정", text)

    def test_skill_without_file_stops(self):
        result, _ = run_case(case("C001"), "skill", ledger=False)
        if (ROOT / "data" / "extracted" / "C001.json").exists():
            self.skipTest("스킬 추출 결과가 있음")
        self.assertEqual(result["status"], "멈춤")
        self.assertEqual(result["stop"]["agent"], "fault")


class FakeClient:
    """messages.create만 흉내 낸다. 쪽마다 정해 둔 답을 차례로 돌려준다."""
    def __init__(self, answers, stop_reason="end_turn"):
        self.answers, self.stop_reason, self.calls = list(answers), stop_reason, []
        self.messages = self

    def create(self, **kw):
        self.calls.append(kw)
        text = json.dumps(self.answers.pop(0), ensure_ascii=False)
        block = type("Block", (), {"type": "text", "text": text})()
        return type("Msg", (), {"stop_reason": self.stop_reason, "content": [block]})()


class ModifierRefTest(unittest.TestCase):
    def test_ref_shown_but_route_unchanged(self):
        from claim_relay.__main__ import find_case
        result, _ = run_case(find_case("B016"), "skill", ledger=False)
        refs = result["notice"]["staff"]["modifier_refs"]
        self.assertEqual(result["route"], "사람 심사")
        self.assertEqual(refs[0]["against"], "상대")
        self.assertEqual(refs[0]["add"], [10])
        self.assertFalse(result["notice"]["staff"]["modifiers_confirmed"])
        self.assertNotIn("10%", result["notice"]["customer"])


class ReviewTest(unittest.TestCase):
    def test_review_disagreement_counted(self):
        import tempfile
        from pathlib import Path
        from claim_relay import review
        with tempfile.TemporaryDirectory() as d:
            review.save("C001", "사람 심사", note="블랙박스와 진술이 다름", folder=Path(d))
            reviews = review.load_all(Path(d))
        results = {"C001": run_case(case("C001"), ledger=False)[0]}
        rows = review.compare(reviews, results)
        self.assertEqual(results["C001"]["route"], "자동 처리 후보")
        self.assertEqual(rows[0]["unsafe"], True)
        self.assertIn("✗", review.report(rows))

    def test_bad_route_rejected(self):
        from claim_relay import review
        with self.assertRaises(ValueError):
            review.save("C001", "지급")


class ReadabilityTest(unittest.TestCase):
    def test_long_sentence_and_jargon_flagged(self):
        from claim_relay.notice import readability
        self.assertTrue(readability("접수되었습니다.\n서류를 보내 주세요.")["ok"])
        r = readability("구상 절차가 진행될 수 있습니다.")
        self.assertEqual(r["jargon"], ["구상"])
        self.assertFalse(r["ok"])
        self.assertFalse(readability("가" * 61 + ".")["ok"])


class FollowupTest(unittest.TestCase):
    def test_fault_objection_after_auto_reopens(self):
        import tempfile
        from pathlib import Path
        from claim_relay import followup
        with tempfile.TemporaryDirectory() as d:
            first = followup.check("C001", "언제 처리되나요?", "자동 처리 후보", Path(d))
            second = followup.check("C001", "과실이 이렇게 나온 건 납득이 안 됩니다", "자동 처리 후보", Path(d))
            s = followup.summary(Path(d))
        self.assertEqual(first["signal"]["id"], "진행 문의")
        self.assertFalse(first["reopen"])
        self.assertTrue(second["after_auto"])
        self.assertEqual(s["reopened_after_auto"], ["C001"])

    def test_complaint_wins_over_fault(self):
        from claim_relay import followup
        self.assertEqual(followup.signal("과실 때문에 금감원에 민원 넣겠습니다")["id"], "민원")


class ApiExtractorTest(unittest.TestCase):
    def test_api_answer_goes_through_same_checks(self):
        c = case("C003")
        gold = c["expect"]["elements"]
        fake = FakeClient([gold["고객"], gold["상대"]])
        result, _ = run_case(c, "api", ledger=False, client=fake)
        self.assertEqual(result["route"], c["expect"]["route"])
        self.assertEqual(result["chart"], c["expect"]["chart"])
        self.assertNotIn("temperature", fake.calls[0])
        self.assertIn("json_schema", json.dumps(fake.calls[0]["output_config"]))

    def test_api_made_up_quote_goes_to_human(self):
        c = case("C003")
        gold = json.loads(json.dumps(c["expect"]["elements"]))
        gold["고객"]["other_move"]["quote"] = "끼어들었"
        result, _ = run_case(c, "api", ledger=False, client=FakeClient([gold["고객"], gold["상대"]]))
        self.assertIn("고객 상대 진행", result["unverified"])
        self.assertEqual(result["route"], "사람 심사")

    def test_api_refusal_stops(self):
        c = case("C003")
        fake = FakeClient([{}, {}], stop_reason="refusal")
        result, _ = run_case(c, "api", ledger=False, client=fake)
        self.assertEqual(result["status"], "멈춤")
        self.assertIn("거절", result["stop"]["reason"])


class NoticeCheckTest(unittest.TestCase):
    def test_forbidden_phrase(self):
        with self.assertRaises(StopError):
            notice.check("과실이 확정되었습니다", [])

    def test_stray_number(self):
        with self.assertRaises(StopError):
            notice.check("보험금 300만 원", [])

    def test_numbers_from_facts_pass(self):
        notice.check("고객님 30%, 상대 70%", ["30", "70"])


class EvalTest(unittest.TestCase):
    def test_fixture_extractor_passes(self):
        ev = evaluate("fixture", repeat=2)
        self.assertTrue(ev["passed"], ev["metrics"])

    def test_cues_extractor_passes(self):
        ev = evaluate("cues", repeat=3)
        self.assertTrue(ev["passed"], ev["metrics"])

    def test_natural_expectations_match_rules(self):
        # 손으로 정한 자연어 기대값이 정답 요소를 넣었을 때 규칙 결과와 맞는지
        ev = evaluate("fixture", repeat=1, dataset="natural")
        self.assertTrue(ev["passed"], ev["metrics"])

    def test_natural_cues_never_unsafe(self):
        ev = evaluate("cues", repeat=1, dataset="natural")
        self.assertEqual(ev["metrics"]["unsafe_auto"], 0)


class ScorecardTest(unittest.TestCase):
    def test_grade_needs_zero_leak(self):
        self.assertEqual(grade(100, 0)["name"], "고급")
        self.assertEqual(grade(90, 0)["name"], "중급")
        self.assertEqual(grade(100, 1)["name"], "초급")

    def test_leak_blamed_on_stage_that_missed_rule(self):
        row = {"want": {"route": "사람 심사", "rules": ["R07"]},
               "got": {"route": "자동 처리 후보", "rules": []}}
        self.assertTrue(leaked("fault", row, ["R04", "R05", "R06", "R07"]))
        self.assertFalse(leaked("documents", row, ["R01", "R03", "R08"]))

    def test_fault_grade_follows_extractor(self):
        def fault_grade(extractor):
            sc = scorecard(evaluate(extractor, repeat=1, dataset="natural"))
            return next(c["grade"] for c in sc["cards"] if c["agent"] == "fault")
        self.assertEqual(fault_grade("cues"), "초급")
        self.assertEqual(fault_grade("skill"), "고급")


if __name__ == "__main__":
    unittest.main()
