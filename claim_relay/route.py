"""④ 경로 판정: 규칙표를 위에서부터 모두 검사하고 걸린 규칙 중 가장 강한 경로를 고른다."""
from .config import load, settings

DEFAULT = "자동 처리 후보"


def conditions(it, docs, elements, fault):
    grade = docs["injury_grade"]
    return {
        "missing_docs": bool(docs["missing"] or docs["unreadable"]),
        "not_car_to_car": it["kind"] != "차대차",
        "severe_injury": "대인" in it["coverage"] and grade is not None and grade <= 11,
        "no_evidence": bool(elements["unverified"]),
        "statement_conflict": bool(fault["conflicts"]),
        "no_chart": fault["chart"] is None,
        "modifiers_claimed": bool(fault["modifiers"]),
        "estimate_mismatch": docs["estimate_over"],
        "own_damage": "자차" in it["coverage"],
    }


def run(desk):
    it, docs = desk.get("intake"), desk.get("docs")
    elements, fault = desk.get("elements"), desk.get("fault")
    flags = conditions(it, docs, elements, fault)
    hits = [r for r in load("rules/claim-rules.yaml")["rules"] if flags[r["when"]]]
    strength = settings()["route_strength"]
    route = max((r["route"] for r in hits), key=strength.get, default=DEFAULT)
    desk.put("route", {
        "route": route,
        "rules": [{"id": r["id"], "route": r["route"], "customer": r["customer"], "staff": r["staff"]}
                  for r in hits],
    })
