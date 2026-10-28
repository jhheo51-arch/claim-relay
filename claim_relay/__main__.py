"""명령: run, eval, compare, scorecard, review, followup, export. bin/claim-relay가 부른다."""
import argparse
import json
import sys
from datetime import date

from .config import ROOT, load
from .evaluate import compare, evaluate, load_natural, load_testset, report
from .pipeline import run_case
from . import followup, review
from .scorecard import report as scorecard_report, scorecard


def find_case(arg):
    sets = {"N": "natural", "B": "blind"}
    if arg[:1] in sets and not (ROOT / arg).exists():
        return next(c for c in load_natural(sets[arg[0]]) if c["id"] == arg)
    path = ROOT / arg
    if not path.exists():
        path = ROOT / "data" / "testset" / f"{arg}.json"
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def cmd_run(args):
    case = find_case(args.case)
    result, steps = run_case(case, args.extractor, gold=case.get("expect", {}).get("elements"))
    for s in steps:
        print(f"{s['badge']} {s['agent']:<9} 읽음 {','.join(s['read']) or '-':<28} 씀 {','.join(s['wrote']) or '-'}")
    print()
    if result["status"] == "멈춤":
        print(f"멈춤: {result['stop']['reason']}")
    else:
        print(f"경로: {result['route']}  규칙: {', '.join(result['rules']) or '없음'}  도표: {result['chart'] or '없음'}")
        print()
        print(result["notice"]["customer"])
    print(f"\n이력: runs/{result['id']}.jsonl")


def cmd_eval(args):
    ev = evaluate(args.extractor, args.repeat, args.set)
    text = report(ev)
    name = f"eval-{args.extractor}" if args.set == "testset" else f"eval-{args.set}-{args.extractor}"
    out = ROOT / "reports" / f"{name}.md"
    out.parent.mkdir(exist_ok=True)
    out.write_text(text, encoding="utf-8")
    print(text)
    print(f"보고서: {out.relative_to(ROOT).as_posix()}")
    return 0 if ev["passed"] else 1


def cmd_compare(args):
    a, b = (evaluate(x, args.repeat, args.set) for x in ("cues", "skill"))
    text = compare(a, b)
    out = ROOT / "reports" / f"compare-{args.set}.md"
    out.parent.mkdir(exist_ok=True)
    out.write_text(text, encoding="utf-8")
    print(text)
    print(f"보고서: {out.relative_to(ROOT).as_posix()}")


def cmd_scorecard(args):
    runs = [("testset", "cues"), ("natural", "cues"), ("natural", "skill"), ("blind", "cues"), ("blind", "skill")]
    text = scorecard_report([scorecard(evaluate(x, args.repeat, d)) for d, x in runs])
    reviews = review.load_all()
    results = {rv["id"]: run_case(find_case(rv["id"]), rv["extractor"], ledger=False)[0] for rv in reviews}
    text += "\n" + review.report(review.compare(reviews, results))
    out = ROOT / "reports" / "scorecard.md"
    out.parent.mkdir(exist_ok=True)
    out.write_text(text, encoding="utf-8")
    print(text)
    print(f"보고서: {out.relative_to(ROOT).as_posix()}")


def cmd_review(args):
    case = find_case(args.case)
    path = review.save(case["id"], args.route, args.chart, args.base, args.reviewer, args.note, args.extractor)
    result = run_case(case, args.extractor, ledger=False)[0]
    same = "같음" if result["route"] == args.route else f"다름(파이프라인 {result['route']})"
    print(f"담당자 판정을 {path.relative_to(ROOT).as_posix()}에 남겼습니다. 경로 {same}")


def cmd_followup(args):
    case = find_case(args.case)
    route = run_case(case, args.extractor, ledger=False)[0]["route"]
    rec = followup.check(case["id"], args.message, route)
    sig = rec["signal"]
    print(f"{case['id']} 안내 경로 {route}, 같은 사고 문의 {rec['count']}번째")
    print(f"신호: {sig['id']}({sig['word']}), 조치: {sig['action']}" if sig else "신호: 없음")
    if rec["after_auto"]:
        print("자동 처리 후보로 나간 건이 다시 열렸습니다. 과실, 경로 단계 등급을 다시 봅니다.")
    elif rec["to_staff"]:
        print("담당자 대기열에 다시 올립니다.")


def cmd_export(args):
    cases = []
    for case in load_testset():
        result, steps = run_case(case, args.extractor, gold=case["expect"].get("elements"), ledger=False)
        raw = {k: v for k, v in case.items() if k != "expect"}
        cases.append({"case": raw, "expect": {k: v for k, v in case["expect"].items() if k != "elements"},
                      "result": result, "steps": steps})
    # 자연어 예시: 스킬 추출 결과가 있으면 스킬로 돌리고, 단서 추출기 결과를 나란히 둔다
    for path in sorted((ROOT / "data" / "samples").glob("*.json")):
        with open(path, encoding="utf-8") as f:
            raw = json.load(f)
        has_skill = (ROOT / "data" / "extracted" / path.name).exists()
        result, steps = run_case(raw, "skill" if has_skill else "cues", ledger=False)
        alt = run_case(raw, "cues", ledger=False)[0] if has_skill else None
        cases.append({"case": raw, "expect": None, "result": result, "steps": steps,
                      "extractor": "skill" if has_skill else "cues", "alt": alt})
    # 자연어 비교 사례와 블라인드 사례: 스킬 결과를 본 화면에, 단서 추출기 결과를 비교 카드에 둔다
    for case in load_natural() + load_natural("blind"):
        raw = {k: v for k, v in case.items() if k != "expect"}
        has_skill = (ROOT / "data" / "extracted" / f"{case['id']}.json").exists()
        result, steps = run_case(raw, "skill" if has_skill else "cues", ledger=False)
        alt = run_case(raw, "cues", ledger=False)[0] if has_skill else None
        cases.append({"case": raw, "expect": {k: v for k, v in case["expect"].items() if k != "elements"},
                      "result": result, "steps": steps,
                      "extractor": "skill" if has_skill else "cues", "alt": alt})
    data = {
        "generated": date.today().isoformat(),
        "extractor": args.extractor,
        "charts": load("rules/fault-charts.yaml"),
        "rules": load("rules/claim-rules.yaml")["rules"],
        "agents": load("agents.yaml")["agents"],
        "cases": cases,
    }
    out = ROOT / "web" / "data.js"
    out.write_text("window.DATA = " + json.dumps(data, ensure_ascii=False, indent=1, default=str) + ";\n",
                   encoding="utf-8")
    print(f"{len(cases)}건을 web/data.js에 썼습니다")


def main(argv=None):
    p = argparse.ArgumentParser(prog="claim-relay")
    sub = p.add_subparsers(dest="cmd", required=True)
    r = sub.add_parser("run", help="사고 한 건 처리")
    r.add_argument("case", help="사고 JSON 경로 또는 테스트셋 ID(C001)")
    e = sub.add_parser("eval", help="테스트셋 평가")
    e.add_argument("--repeat", type=int, default=3)
    c = sub.add_parser("compare", help="단서 추출기와 스킬 추출기 비교")
    c.add_argument("--repeat", type=int, default=3)
    s = sub.add_parser("scorecard", help="단계 에이전트별 성적표와 등급")
    s.add_argument("--repeat", type=int, default=3)
    v = sub.add_parser("review", help="담당자 판정 남기기(reviews/)")
    v.add_argument("case", help="사고 ID")
    v.add_argument("--route", required=True, choices=list(review.ROUTES))
    v.add_argument("--chart")
    v.add_argument("--base", type=int, help="담당자가 정한 고객 과실(%%)")
    v.add_argument("--reviewer", default="")
    v.add_argument("--note", default="")
    f = sub.add_parser("followup", help="안내 뒤 고객이 다시 보낸 말 점검(followups/)")
    f.add_argument("case", help="사고 ID")
    f.add_argument("message", help="고객이 다시 보낸 말")
    x = sub.add_parser("export", help="웹 화면용 web/data.js 만들기")
    for q in (r, e, x, v, f):
        q.add_argument("--extractor", choices=["cues", "skill", "api", "fixture"], default="cues")
    for q in (e, c):
        q.add_argument("--set", choices=["testset", "natural", "blind"], default="testset" if q is e else "natural")
    args = p.parse_args(argv)
    sys.stdout.reconfigure(encoding="utf-8")
    return {"run": cmd_run, "eval": cmd_eval, "compare": cmd_compare, "scorecard": cmd_scorecard, "review": cmd_review, "followup": cmd_followup, "export": cmd_export}[args.cmd](args) or 0


if __name__ == "__main__":
    sys.exit(main())
