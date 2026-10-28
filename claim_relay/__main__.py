"""명령: run, eval, export. bin/claim-relay가 부른다."""
import argparse
import json
import sys
from datetime import date

from .config import ROOT, load
from .evaluate import evaluate, load_testset, report
from .pipeline import run_case


def find_case(arg):
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
    ev = evaluate(args.extractor, args.repeat)
    text = report(ev)
    out = ROOT / "reports" / f"eval-{args.extractor}.md"
    out.parent.mkdir(exist_ok=True)
    out.write_text(text, encoding="utf-8")
    print(text)
    print(f"보고서: {out.relative_to(ROOT).as_posix()}")
    return 0 if ev["passed"] else 1


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
    x = sub.add_parser("export", help="웹 화면용 web/data.js 만들기")
    for q in (r, e, x):
        q.add_argument("--extractor", choices=["cues", "skill", "fixture"], default="cues")
    args = p.parse_args(argv)
    sys.stdout.reconfigure(encoding="utf-8")
    return {"run": cmd_run, "eval": cmd_eval, "export": cmd_export}[args.cmd](args) or 0


if __name__ == "__main__":
    sys.exit(main())
