"""⑥ 안내문: 코드 템플릿으로 고객 안내문과 담당자 카드를 만들고 검사한다.

검사 1: 금지 표현(rules/settings.yaml forbidden_phrases)이 없어야 한다.
검사 2: 안내문의 숫자는 모두 앞 단계가 넘긴 값이나 템플릿 고정 숫자여야 한다.
"""
import re

from .config import StopError, settings

OPENING = {
    "자동 처리 후보": "접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.",
    "사람 심사": "접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.",
    "서류 보완": "처리를 이어 가려면 서류가 더 필요합니다.",
}
FIXED_NUMBERS = {"8"}


def numbers(text):
    return set(re.findall(r"\d+", text))


def build(it, docs, fault, route, schedule):
    lines, used = [f"[{it['id']}] 사고 접수 안내", OPENING[route["route"]]], [it["id"]]
    for r in route["rules"]:
        lines.append(f"- {r['customer']}")
    need = docs["missing"] + docs["unreadable"]
    if need:
        lines.append("보내 주실 서류: " + ", ".join(need))
    chart = fault["chart"]
    if chart and not fault["conflicts"]:
        c, o = chart["base"]["고객"], chart["base"]["상대"]
        lines.append(
            f"예상 과실: 고객님 {c}%, 상대 {o}% "
            f"(과실비율정보포털 도표 {chart['id']} 기본값 기준, 확인 후 안내)"
        )
        used += [str(c), str(o), chart["id"]]
    if schedule:
        lines.append(
            f"경상 치료 일정: 사고일부터 8주가 되는 날은 {schedule['limit_date']}입니다. "
            f"그 뒤에도 치료를 받으려면 {schedule['notice_date']}까지 진단서를 더 내 주셔야 할 수 있습니다. "
            f"이 기한은 기준 확인 전입니다."
        )
        used += [schedule["limit_date"], schedule["notice_date"]]
    return "\n".join(lines), used


def readability(text):
    """문장 길이와 어려운 말. 막지는 않고 평가 보고서에 참고로 싣는다."""
    rule = settings()["readability"]
    sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+|\n", text) if s.strip()]
    longest = max(sents, key=len)
    jargon = [w for w in rule["jargon"] if w in text]
    return {"sentences": len(sents), "longest": len(longest), "jargon": jargon,
            "ok": len(longest) <= rule["max_sentence_chars"] and not jargon}


def check(text, used):
    bad = [p for p in settings()["forbidden_phrases"] if p in text]
    if bad:
        raise StopError("안내문에 금지 표현이 있습니다: " + ", ".join(bad))
    allowed = set(FIXED_NUMBERS)
    for v in used:
        allowed |= numbers(str(v))
    stray = numbers(text) - allowed
    if stray:
        raise StopError("안내문에 출처 없는 숫자가 있습니다: " + ", ".join(sorted(stray)))


def run(desk):
    it, docs, fault = desk.get("intake"), desk.get("docs"), desk.get("fault")
    route, schedule = desk.get("route"), desk.get("schedule")
    text, used = build(it, docs, fault, route, schedule)
    check(text, used)
    staff = {
        "route": route["route"],
        "rules": [f"{r['id']} {r['staff']}" for r in route["rules"]],
        "chart": fault["chart"],
        "candidates": fault["candidates"],
        "conflicts": fault["conflicts"],
        "modifiers": fault["modifiers"],
        "modifier_refs": fault["modifier_refs"],
        "modifiers_confirmed": fault["modifiers_confirmed"],
        "estimate": docs["estimate"],
        "estimate_limit": docs["estimate_limit"],
        "injury_grade": docs["injury_grade"],
        "charts_confirmed": fault["charts_confirmed"],
    }
    desk.put("notice", {"customer": text, "staff": staff, "checked": True, "readability": readability(text)})
