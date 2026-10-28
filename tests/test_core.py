import json
import unittest

from claim_relay import notice
from claim_relay.badge import BadgeError, Desk
from claim_relay.config import ROOT, StopError
from claim_relay.evaluate import evaluate
from claim_relay.pipeline import run_case


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


if __name__ == "__main__":
    unittest.main()
