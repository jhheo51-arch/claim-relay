"""테스트셋 평가. 사례마다 같은 추출기로 여러 번 돌려 기대값과 비교한다."""
import json
from datetime import date

from .config import ROOT, SIDES, load
from .extract import FIELDS
from .pipeline import run_case

TESTSET = ROOT / "data" / "testset"
CHECKS = ("route", "rules", "chart", "base", "schedule")


def load_testset():
    cases = []
    for path in sorted(TESTSET.glob("*.json")):
        with open(path, encoding="utf-8") as f:
            cases.append(json.load(f))
    return cases


def actual(result):
    sched = result["schedule"]
    return {
        "route": result["route"],
        "rules": sorted(result["rules"]),
        "chart": result["chart"],
        "base": result["base"]["고객"] if result["base"] else None,
        "schedule": [sched["limit_date"], sched["notice_date"]] if sched else None,
    }


def expected(case):
    e = case["expect"]
    return {
        "route": e["route"],
        "rules": sorted(e["rules"]),
        "chart": e["chart"],
        "base": e["base"],
        "schedule": e["schedule"],
    }


def extraction_hits(result, gold):
    hit = total = 0
    if not result["elements"] or not gold:
        return hit, total
    for side in SIDES:
        got, want = result["elements"][side], gold[side]
        for f in FIELDS:
            total += 1
            hit += got[f] == (want.get(f) or {}).get("value")
        total += 1
        hit += sorted(got["modifiers"]) == sorted(m["value"] for m in want.get("modifiers", []))
    return hit, total


def evaluate(extractor="cues", repeat=3):
    rows, ext_hit, ext_total = [], 0, 0
    for case in load_testset():
        gold = case["expect"].get("elements")
        runs = [run_case(case, extractor, gold=gold, ledger=False)[0] for _ in range(repeat)]
        first = runs[0]
        drift = any(json.dumps(r, ensure_ascii=False, sort_keys=True)
                    != json.dumps(first, ensure_ascii=False, sort_keys=True) for r in runs[1:])
        got, want = actual(first), expected(case)
        h, t = extraction_hits(first, gold)
        ext_hit, ext_total = ext_hit + h, ext_total + t
        rows.append({
            "id": case["id"], "tag": case["expect"]["tag"],
            "want": want, "got": got,
            "diff": [k for k in CHECKS if got[k] != want[k]],
            "drift": drift,
        })
    n = len(rows)

    def share(key):
        return sum(key not in r["diff"] for r in rows)

    unsafe = [r["id"] for r in rows
              if r["want"]["route"] != "자동 처리 후보" and r["got"]["route"] == "자동 처리 후보"]
    metrics = {
        "cases": n,
        "route": share("route"),
        "unsafe_auto": len(unsafe),
        "chart": share("chart"),
        "rules": share("rules"),
        "schedule": share("schedule"),
        "extraction": round(100 * ext_hit / ext_total, 1) if ext_total else None,
        "drift": sum(r["drift"] for r in rows),
        "all_pass": sum(not r["diff"] for r in rows),
    }
    passed = (metrics["route"] == n and metrics["unsafe_auto"] == 0 and metrics["chart"] == n
              and (metrics["extraction"] or 0) >= 95 and metrics["drift"] == 0)
    return {"extractor": extractor, "repeat": repeat, "metrics": metrics, "rows": rows,
            "unsafe": unsafe, "passed": passed}


def report(ev, today=None):
    m, n = ev["metrics"], ev["metrics"]["cases"]
    charts = load("rules/fault-charts.yaml")
    lines = [
        f"# 평가 결과 ({today or date.today().isoformat()})",
        "",
        f"추출기 `{ev['extractor']}`, 사례 {n}건, 사례마다 {ev['repeat']}회 실행. "
        f"도표 값 {charts['version']} 옮김, 사용자 대조 {'완료' if charts['confirmed'] else '전'}.",
        "",
        "| 지표 | 목표 | 결과 |",
        "|---|---|---|",
        f"| 경로 일치 | {n}/{n} | {m['route']}/{n} |",
        f"| 사람 심사 대상을 자동 처리 후보로 낸 건 | 0 | {m['unsafe_auto']} |",
        f"| 도표 일치 | {n}/{n} | {m['chart']}/{n} |",
        f"| 걸린 규칙 일치 | {n}/{n} | {m['rules']}/{n} |",
        f"| 경상 일정 일치 | {n}/{n} | {m['schedule']}/{n} |",
        f"| 추출 일치 | 95% 이상 | {m['extraction']}% |",
        f"| 반복 실행 차이 | 0 | {m['drift']} |",
        "",
        f"판정: {'통과' if ev['passed'] else '미통과'}",
        "",
        "| 사례 | 함정 | 기대 경로 | 결과 경로 | 도표 | 다른 항목 |",
        "|---|---|---|---|---|---|",
    ]
    for r in ev["rows"]:
        diff = ", ".join(r["diff"]) + (" 반복 차이" if r["drift"] else "")
        lines.append(f"| {r['id']} | {r['tag']} | {r['want']['route']} | {r['got']['route']} "
                     f"| {r['got']['chart'] or '없음'} | {diff or '없음'} |")
    return "\n".join(lines) + "\n"
