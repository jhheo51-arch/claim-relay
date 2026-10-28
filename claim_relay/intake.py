"""① 접수: 빈 칸과 개인정보 꼴을 검사하고 진술을 줄 단위로 나눈다."""
import re

from .config import SIDES, StopError

REQUIRED = ("id", "date", "kind", "coverage", "damage")

PII = {
    "주민등록번호": r"\d{6}-?[1-4]\d{6}",
    "전화번호": r"01[016789]-?\d{3,4}-?\d{4}",
    "차량번호": r"\d{2,3}[가-힣]\s?\d{4}",
}


def split_lines(text):
    return [line.strip() for line in text.splitlines() if line.strip()]


def run(desk):
    raw = desk.get("raw")
    missing = [k for k in REQUIRED if raw.get(k) in (None, "", [])]
    parties = raw.get("parties") or {}
    for side in SIDES:
        if not (parties.get(side) or {}).get("statement"):
            missing.append(f"parties.{side}.statement")
    if missing:
        raise StopError("빈 칸이 있어 접수할 수 없습니다: " + ", ".join(missing))

    attachments = raw.get("attachments") or []
    texts = [parties[s]["statement"] for s in SIDES] + [a.get("text", "") for a in attachments]
    for name, pattern in PII.items():
        if any(re.search(pattern, t) for t in texts):
            raise StopError(f"개인정보 꼴({name})이 보여 실행을 멈춥니다")

    desk.put("intake", {
        "id": raw["id"],
        "date": raw["date"],
        "kind": raw["kind"],
        "coverage": list(raw["coverage"]),
        "damage": raw["damage"],
        "attachments": [{"doc": a["doc"], "text": a.get("text", "")} for a in attachments],
        "statements": {s: split_lines(parties[s]["statement"]) for s in SIDES},
    })
