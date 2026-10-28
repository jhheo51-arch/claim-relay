"""③ 과실 도표: 진술 요소를 뽑아 대조하고, 옮긴 도표 8개 중 맞는 도표를 고른다.

과실 숫자는 도표의 기본 과실만 쓴다. 수정요소는 판단하지 않고 사람 심사로 넘긴다.
"""
from .config import SIDES, load
from .extract import LABELS, value, verify

MIRROR = {"같은방향": "같은방향", "맞은편": "맞은편", "오른쪽": "왼쪽", "왼쪽": "오른쪽"}
OPPOSITE = {"A": "B", "B": "A"}

# (항목, 고객 진술 칸, 상대 진술 칸, 상대 쪽 값을 고객 시점으로 바꾸는 표)
CROSS = [
    ("장소", "place", "place", None),
    ("고객 차 진행", "me_move", "other_move", None),
    ("고객 차 순서", "me_order", "other_order", None),
    ("상대 차 진행", "other_move", "me_move", None),
    ("상대 차 순서", "other_order", "me_order", None),
    ("서로 온 쪽", "other_from", "other_from", MIRROR),
]


def compare(cust, other):
    conflicts = []
    for item, cf, of, mirror in CROSS:
        a, b = value(cust, cf), value(other, of)
        if a is None or b is None:
            continue
        if mirror:
            b = mirror.get(b, b)
        if a != b:
            conflicts.append({"item": item, "고객 진술": a, "상대 진술": b})
    return conflicts


def _fits(want, got):
    if want is None:
        return True
    return got in (want if isinstance(want, list) else [want])


def matches(chart, role, el):
    """진술 하나가 도표의 한 역할(A 또는 B)과 맞는지. 모르는 값은 맞지 않는 것으로 본다."""
    me, opp = chart[role], chart[OPPOSITE[role]]
    checks = [
        (chart["place"], value(el, "place")),
        (me["move"], value(el, "me_move")),
        (me.get("order"), value(el, "me_order")),
        (me.get("from"), value(el, "other_from")),
        (opp["move"], value(el, "other_move")),
        (opp.get("order"), value(el, "other_order")),
    ]
    return all(_fits(want, got) for want, got in checks)


def pick_chart(cust, other):
    charts = load("rules/fault-charts.yaml")["charts"]
    pairs = []
    for chart in charts:
        for role in ("A", "B"):
            if matches(chart, role, cust) and matches(chart, OPPOSITE[role], other):
                pairs.append((chart, role))
    ids = sorted({c["id"] for c, _ in pairs})
    candidates = {
        side: sorted({c["id"] for c in charts for r in ("A", "B") if matches(c, r, el)})
        for side, el in (("고객", cust), ("상대", other))
    }
    if len(ids) != 1:
        return None, candidates
    chart, role = sorted(pairs, key=lambda p: p[1])[0]
    return {
        "id": chart["id"],
        "title": chart["title"],
        "url": chart["url"],
        "roles": {"고객": role, "상대": OPPOSITE[role]},
        "base": {"고객": chart["base"][role], "상대": chart["base"][OPPOSITE[role]]},
    }, candidates


def run(desk, extractor):
    it = desk.get("intake")
    sides, unverified = {}, []
    for side in SIDES:
        lines = it["statements"][side]
        clean, bad = verify(extractor(it["id"], side, lines) or {}, lines)
        sides[side] = clean
        unverified += [f"{side} {LABELS.get(f, '수정요소')}" for f in bad]
    desk.put("elements", {"sides": sides, "unverified": unverified})

    conflicts = compare(sides["고객"], sides["상대"])
    chart, candidates = pick_chart(sides["고객"], sides["상대"])
    modifiers = sorted({m["value"] for s in SIDES for m in sides[s]["modifiers"]})
    charts_file = load("rules/fault-charts.yaml")
    desk.put("fault", {
        "chart": chart,
        "candidates": candidates,
        "conflicts": conflicts,
        "modifiers": modifiers,
        "charts_confirmed": charts_file["confirmed"],
        "charts_version": str(charts_file["version"]),
    })
