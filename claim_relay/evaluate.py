"""테스트셋 평가. 사례마다 같은 추출기로 여러 번 돌려 기대값과 비교한다."""
import json
from datetime import date

from .config import ROOT, SIDES, load, settings
from .extract import FIELDS
from .pipeline import run_case

TESTSET = ROOT / "data" / "testset"
NATURAL = ROOT / "data" / "natural"
SETS = {"testset": "템플릿 테스트셋", "natural": "자연어 진술", "blind": "다른 모델이 쓴 진술(블라인드)"}
CHECKS = ("route", "rules", "chart", "base", "schedule")


def load_testset():
    cases = []
    for path in sorted(TESTSET.glob("*.json")):
        with open(path, encoding="utf-8") as f:
            cases.append(json.load(f))
    return cases


def load_natural(name="natural"):
    """사례 파일과 기대값이 따로 있다(스킬 추출이 기대값을 못 보게). 여기서 합친다."""
    folder = ROOT / "data" / name
    with open(folder / "expect.json", encoding="utf-8") as f:
        expect = json.load(f)
    cases = []
    for path in sorted((folder / "cases").glob("*.json")):
        with open(path, encoding="utf-8") as f:
            case = json.load(f)
        cases.append({**case, "expect": expect[case["id"]]})
    return cases


def load_set(name):
    return load_testset() if name == "testset" else load_natural(name)


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


def evaluate(extractor="cues", repeat=3, dataset="testset"):
    rows, ext_hit, ext_total = [], 0, 0
    for case in load_set(dataset):
        gold = case["expect"].get("elements")
        runs = [run_case(case, extractor, gold=gold, ledger=False, gate=False)[0]
                for _ in range(repeat)]
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
            "drift": drift, "extraction": [h, t], "result": first,
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
        # 안내문 읽기: 판정에는 넣지 않는 참고 지표
        "notices": sum(bool(r["result"]["notice"]) for r in rows),
        "readable": sum(bool(r["result"]["notice"]) and r["result"]["notice"]["readability"]["ok"] for r in rows),
    }
    # 정답 요소가 없는 세트(블라인드)는 추출 일치를 재지 않고 결과만 본다
    extraction_ok = metrics["extraction"] is None or metrics["extraction"] >= 95
    passed = (metrics["route"] == n and metrics["unsafe_auto"] == 0 and metrics["chart"] == n
              and extraction_ok and metrics["drift"] == 0)
    return {"extractor": extractor, "repeat": repeat, "dataset": dataset, "metrics": metrics, "rows": rows,
            "unsafe": unsafe, "passed": passed}


def report(ev, today=None):
    m, n = ev["metrics"], ev["metrics"]["cases"]
    charts = load("rules/fault-charts.yaml")
    lines = [
        f"# 평가 결과 ({today or date.today().isoformat()})",
        "",
        f"{SETS[ev['dataset']]}, 추출기 `{ev['extractor']}`, 사례 {n}건, 사례마다 {ev['repeat']}회 실행. "
        f"도표 값 {charts['version']} 옮김, 사용자 대조 {'완료' if charts['confirmed'] else '전'}.",
        "",
        "| 지표 | 목표 | 결과 |",
        "|---|---|---|",
        f"| 경로 일치 | {n}/{n} | {m['route']}/{n} |",
        f"| 사람 심사 대상을 자동 처리 후보로 낸 건 | 0 | {m['unsafe_auto']} |",
        f"| 도표 일치 | {n}/{n} | {m['chart']}/{n} |",
        f"| 걸린 규칙 일치 | {n}/{n} | {m['rules']}/{n} |",
        f"| 경상 일정 일치 | {n}/{n} | {m['schedule']}/{n} |",
        f"| 추출 일치 | 95% 이상 | {'정답 요소 없음' if m['extraction'] is None else str(m['extraction']) + '%'} |",
        f"| 반복 실행 차이 | 0 | {m['drift']} |",
        f"| 안내문 읽기 기준 충족(참고) | {m['notices']}/{m['notices']} | {m['readable']}/{m['notices']} |",
        "",
        f"판정: {'통과' if ev['passed'] else '미통과'}. 읽기 기준은 한 문장 {settings()['readability']['max_sentence_chars']}자 이하, "
        "어려운 말(rules/settings.yaml) 없음이며 판정에는 넣지 않습니다.",
        "",
        "| 사례 | 함정 | 기대 경로 | 결과 경로 | 도표 | 다른 항목 |",
        "|---|---|---|---|---|---|",
    ]
    for r in ev["rows"]:
        diff = ", ".join(r["diff"]) + (" 반복 차이" if r["drift"] else "")
        lines.append(f"| {r['id']} | {r['tag']} | {r['want']['route']} | {r['got']['route']} "
                     f"| {r['got']['chart'] or '없음'} | {diff or '없음'} |")
    return "\n".join(lines) + "\n"


def compare(a, b, today=None):
    """같은 세트를 두 추출기로 돌린 결과를 나란히 놓는다."""
    ma, mb, n = a["metrics"], b["metrics"], a["metrics"]["cases"]
    auto = sum(r["want"]["route"] == "자동 처리 후보" for r in a["rows"])

    def auto_kept(ev):
        return sum(r["want"]["route"] == r["got"]["route"] == "자동 처리 후보" for r in ev["rows"])

    def pct(m):
        return "정답 요소 없음" if m["extraction"] is None else f"{m['extraction']}%"

    na, nb = f"`{a['extractor']}`", f"`{b['extractor']}`"
    lines = [
        f"# 추출기 비교: {SETS[a['dataset']]} ({today or date.today().isoformat()})",
        "",
        f"사례 {n}건(기대 자동 처리 후보 {auto}건, 사람 심사 {n - auto}건), 추출기마다 사례당 {a['repeat']}회 실행.",
        "",
        f"| 지표 | {na} | {nb} |",
        "|---|---|---|",
        f"| 경로 일치 | {ma['route']}/{n} | {mb['route']}/{n} |",
        f"| 사람 심사 대상을 자동 처리 후보로 낸 건 | {ma['unsafe_auto']} | {mb['unsafe_auto']} |",
        f"| 자동 처리 후보로 남긴 건(기대 {auto}건 중) | {auto_kept(a)} | {auto_kept(b)} |",
        f"| 도표 일치 | {ma['chart']}/{n} | {mb['chart']}/{n} |",
        f"| 걸린 규칙 일치 | {ma['rules']}/{n} | {mb['rules']}/{n} |",
        f"| 추출 일치 | {pct(ma)} | {pct(mb)} |",
        f"| 반복 실행 차이 | {ma['drift']} | {mb['drift']} |",
        "",
        f"| 사례 | 함정 | 기대 경로, 도표 | {na} 경로, 도표, 규칙 | {nb} 경로, 도표, 규칙 | 추출 일치 {na} / {nb} |",
        "|---|---|---|---|---|---|",
    ]

    def cell(r):
        g = r["got"]
        mark = "" if g["route"] == r["want"]["route"] else " ✗"
        return f"{g['route']}{mark}, {g['chart'] or '없음'}, {', '.join(g['rules']) or '없음'}"

    for ra, rb in zip(a["rows"], b["rows"]):
        w = ra["want"]
        lines.append(f"| {ra['id']} | {ra['tag']} | {w['route']}, {w['chart'] or '없음'} | {cell(ra)} | {cell(rb)} "
                     f"| {ra['extraction'][0]}/{ra['extraction'][1]} / {rb['extraction'][0]}/{rb['extraction'][1]} |")
    return "\n".join(lines) + "\n"
