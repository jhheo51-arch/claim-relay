"""단계 6개를 차례로 돌리고 ⑦ 이력을 runs/<사고 ID>.jsonl에 쌓는다."""
import json
import time
from datetime import datetime

from . import documents, fault, intake, notice, route, schedule
from .badge import BadgeError, Desk
from .config import ROOT, SIDES, StopError, load
from .extract import FIELDS, make_extractor, value

STAGES = [
    ("intake", intake.run),
    ("documents", documents.run),
    ("fault", fault.run),
    ("route", route.run),
    ("schedule", schedule.run),
    ("notice", notice.run),
]


def summarize(board, status, stop):
    def slot(key):
        return board.get(key)

    elements = slot("elements")
    fault_ = slot("fault") or {}
    route_ = slot("route") or {}
    docs = slot("docs") or {}
    chart = fault_.get("chart")
    return {
        "id": board["raw"].get("id"),
        "status": status,
        "stop": stop,
        "route": route_.get("route", "멈춤"),
        "rules": [r["id"] for r in route_.get("rules", [])],
        "chart": chart["id"] if chart else None,
        "base": chart["base"] if chart else None,
        "conflicts": fault_.get("conflicts", []),
        "modifiers": fault_.get("modifiers", []),
        "unverified": elements["unverified"] if elements else [],
        "elements": {
            side: {f: value(elements["sides"][side], f) for f in FIELDS}
            | {"modifiers": [m["value"] for m in elements["sides"][side]["modifiers"]]}
            for side in SIDES
        } if elements else None,
        "evidence": elements["sides"] if elements else None,
        "missing_docs": docs.get("missing", []) + docs.get("unreadable", []),
        "schedule": slot("schedule"),
        "notice": slot("notice"),
    }


SET_OF = {"C": "testset", "N": "natural", "B": "blind"}
GRADES = ROOT / "reports" / "grades.json"


def stage_grades(case_id, extractor):
    """scorecard가 남긴 최근 등급 중 이 사고의 데이터 세트와 추출기에 맞는 것. 없으면 stages가 None(평가 안 함)."""
    key = f"{SET_OF.get((case_id or '')[:1], 'other')}/{extractor}"
    table = json.loads(GRADES.read_text(encoding="utf-8")) if GRADES.exists() else {"sets": {}}
    return {"set": key, "version": table.get("version"), "stages": table["sets"].get(key)}


def run_case(case, extractor="cues", gold=None, ledger=True, client=None, gate=True):
    """gate=False면 등급 게이트를 끈다. 성적표를 매기는 평가는 단계 자체의 실력을 재야 하므로 끄고 돈다."""
    raw = {k: v for k, v in case.items() if k != "expect"}
    board = {"raw": raw, "grades": stage_grades(raw.get("id"), extractor) if gate else None}
    extract = make_extractor(extractor, gold, client)
    steps, status, stop = [], "완료", None
    for agent, fn in STAGES:
        desk = Desk(board, agent)
        started = time.perf_counter()
        try:
            fn(desk, extract) if agent == "fault" else fn(desk)
        except (StopError, BadgeError) as e:
            status, stop = "멈춤", {"agent": agent, "badge": desk.spec["badge"], "reason": str(e)}
        steps.append({"agent": agent, "badge": desk.spec["badge"], "read": desk.reads, "wrote": desk.writes,
                      "ms": round((time.perf_counter() - started) * 1000, 2)})
        if stop:
            break
    result = summarize(board, status, stop)
    if ledger:
        append_ledger(raw.get("id") or "unknown", extractor, steps, result)
    return result, steps


def append_ledger(case_id, extractor, steps, result):
    runs = ROOT / "runs"
    runs.mkdir(exist_ok=True)
    record = {"run_at": datetime.now().isoformat(timespec="seconds"), "extractor": extractor,
              "total_ms": round(sum(s["ms"] for s in steps), 2), "steps": steps, "result": result}
    with open(runs / f"{case_id}.jsonl", "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
