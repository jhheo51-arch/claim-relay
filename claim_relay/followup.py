"""사후 점검. 안내문이 나간 뒤 고객이 다시 보낸 말에서 민원, 과실 이의, 이해 못함, 진행 문의 신호를 찾는다.
단계 에이전트를 늘리지 않는다. 결과는 followups/<id>.jsonl에 쌓고 담당자 대기열에 다시 올릴지만 표시한다."""
import json
from datetime import datetime

from .config import ROOT, load

FOLLOWUPS = ROOT / "followups"


def signal(text):
    for s in load("rules/followup.yaml")["signals"]:
        word = next((w for w in s["words"] if w in text), None)
        if word:
            return {"id": s["id"], "word": word, "action": s["action"]}
    return None


def history(case_id, folder=None):
    path = (folder or FOLLOWUPS) / f"{case_id}.jsonl"
    if not path.exists():
        return []
    with open(path, encoding="utf-8") as f:
        return [json.loads(line) for line in f if line.strip()]


def check(case_id, text, route, folder=None):
    """route: 이 사고에 나간 안내의 경로. 자동 처리 후보로 나간 뒤 이의가 오면 따로 표시한다."""
    folder = folder or FOLLOWUPS
    count = len(history(case_id, folder)) + 1
    sig = signal(text)
    reopen = bool(sig) and sig["id"] in ("민원", "과실 이의")
    record = {
        "id": case_id, "at": datetime.now().isoformat(timespec="seconds"), "count": count,
        "route_sent": route, "signal": sig,
        "to_staff": bool(sig) or count >= load("rules/followup.yaml")["repeat_limit"],
        "reopen": reopen,
        "after_auto": reopen and route == "자동 처리 후보",
    }
    folder.mkdir(exist_ok=True)
    with open(folder / f"{case_id}.jsonl", "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
    return record


def summary(folder=None):
    """자동 처리 후보로 나간 건 중 다시 열린 건. 이 값이 늘면 앞 단계 등급을 다시 본다."""
    folder = folder or FOLLOWUPS
    cases = {}
    for path in sorted(folder.glob("*.jsonl")) if folder.exists() else []:
        cases[path.stem] = history(path.stem, folder)
    auto = [k for k, v in cases.items() if v and v[0]["route_sent"] == "자동 처리 후보"]
    reopened = [k for k in auto if any(r["after_auto"] for r in cases[k])]
    return {"cases": len(cases), "auto": len(auto), "reopened_after_auto": reopened,
            "to_staff": sum(any(r["to_staff"] for r in v) for v in cases.values())}
