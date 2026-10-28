"""⑤ 경상 일정: 상해 12~14급 대인이면 사고일 기준 8주 날짜와 서류 안내일을 계산한다."""
from datetime import date, timedelta

from .config import settings


def run(desk):
    it, docs = desk.get("intake"), desk.get("docs")
    rule = settings()["eight_weeks"]
    grade = docs["injury_grade"]
    if "대인" not in it["coverage"] or grade not in rule["grades"]:
        desk.put("schedule", None)
        return
    day = date.fromisoformat(it["date"])
    desk.put("schedule", {
        "grade": grade,
        "limit_date": (day + timedelta(days=rule["limit_days"])).isoformat(),
        "notice_date": (day + timedelta(days=rule["notice_days"])).isoformat(),
        "notice_confirmed": rule["notice_confirmed"],
    })
