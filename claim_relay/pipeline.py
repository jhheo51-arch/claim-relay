"""단계 6개를 차례로 돌리고 ⑦ 이력을 runs/<사고 ID>.jsonl에 쌓는다."""
import json
from datetime import datetime

from . import documents, fault, intake, notice, route, schedule
from .badge import BadgeError, Desk
from .config import ROOT, SIDES, StopError
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


def run_case(case, extractor="cues", gold=None, ledger=True, client=None):
    raw = {k: v for k, v in case.items() if k != "expect"}
    board = {"raw": raw}
    extract = make_extractor(extractor, gold, client)
    steps, status, stop = [], "완료", None
    for agent, fn in STAGES:
        desk = Desk(board, agent)
        try:
            fn(desk, extract) if agent == "fault" else fn(desk)
        except (StopError, BadgeError) as e:
            status, stop = "멈춤", {"agent": agent, "badge": desk.spec["badge"], "reason": str(e)}
        steps.append({"agent": agent, "badge": desk.spec["badge"], "read": desk.reads, "wrote": desk.writes})
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
              "steps": steps, "result": result}
    with open(runs / f"{case_id}.jsonl", "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
