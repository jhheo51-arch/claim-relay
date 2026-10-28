"""가상 사고 40건 테스트셋을 data/testset/에 만든다.

기대값(경로, 걸린 규칙, 도표, 고객 기본 과실, 경상 일정)은 사례마다 손으로 적는다.
규칙 코드로 계산하지 않아야 평가가 의미를 가진다. 날짜는 달력으로 직접 셌다.
정답 진술 요소는 진술 문장을 만들 때 쓴 조각에서 같이 남긴다.
"""
import json
import shutil
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "data" / "testset"

PLACE = {
    "단일로": ("직선 도로를 달리던 중이었습니다.", "직선 도로"),
    "신호없는교차로": ("신호등이 없는 교차로였습니다.", "신호등이 없는 교차로"),
    "신호교차로": ("신호등이 있는 교차로였습니다.", "신호등이 있는 교차로"),
    "합류지점": ("차로가 줄어드는 합류 구간이었습니다.", "합류 구간"),
}
MOVE = {"직진": "직진하고", "진로변경": "차로를 바꾸고", "좌회전": "좌회전하고",
        "우회전": "우회전하고", "합류": "합류하고", "정지": "멈춰 서"}
ORDER = {"후행": "뒤따라", "선행": "앞서"}
FROM = {"같은방향": "같은 방향에서", "맞은편": "맞은편에서", "오른쪽": "오른쪽 도로에서", "왼쪽": "왼쪽 도로에서"}
MODIFIER = {
    "방향지시등 미작동": ("상대 차는 깜빡이를 켜지 않았습니다.", "깜빡이를 켜지 않"),
    "급정지": ("상대 차가 이유 없이 급정거했습니다.", "급정거"),
    "진로변경 금지장소": ("사고 난 곳은 실선 구간이었습니다.", "실선"),
}

# 도표별 장면: (장소, A 자기 진행, B 자기 진행, A가 본 상대 방향, B가 본 상대 방향)
SCENE = {
    "차41-1": ("단일로", {"move": "직진", "order": "후행"}, {"move": "정지", "order": "선행"}, "같은방향", "같은방향"),
    "차43-2": ("단일로", {"move": "직진", "order": "후행"}, {"move": "진로변경", "order": "선행"}, "같은방향", "같은방향"),
    "차43-3": ("단일로", {"move": "진로변경"}, {"move": "진로변경"}, "같은방향", "같은방향"),
    "차43-1": ("합류지점", {"move": "직진"}, {"move": "합류"}, "같은방향", "같은방향"),
    "차19-1": ("신호없는교차로", {"move": "직진", "order": "후행"}, {"move": "좌회전", "order": "선행"}, "같은방향", "같은방향"),
    "차16-1": ("신호없는교차로", {"move": "직진"}, {"move": "좌회전"}, "오른쪽", "왼쪽"),
    "차13-1": ("신호없는교차로", {"move": "우회전"}, {"move": "직진"}, "왼쪽", "오른쪽"),
    "차15-1": ("신호없는교차로", {"move": "직진"}, {"move": "좌회전"}, "맞은편", "맞은편"),
}
# 포털 기본 과실 A:B를 손으로 옮긴 표
BASE = {"차41-1": (100, 0), "차43-2": (30, 70), "차43-3": (50, 50), "차43-1": (40, 60),
        "차19-1": (20, 80), "차16-1": (40, 60), "차13-1": (60, 40), "차15-1": (30, 70)}


def ev(value, line, quote):
    return {"value": value, "line": line, "quote": quote}


def statement(place, me, other, other_from, extra=()):
    """진술 한 편과 정답 요소. me/other는 {move, order}, other_from은 상대가 온 쪽."""
    place_line, place_quote = PLACE[place]
    me_line = " ".join(w for w in ["저는", ORDER.get(me.get("order"), ""), MOVE.get(me["move"], me["move"]), "있었습니다."] if w)
    other_line = " ".join(w for w in ["상대 차는", FROM[other_from], ORDER.get(other.get("order"), ""),
                                      MOVE.get(other["move"], other["move"]), "있었습니다."] if w)
    lines = [place_line, me_line, other_line]
    gold = {
        "place": ev(place, 0, place_quote),
        "me_move": ev(me["move"], 1, MOVE[me["move"]]) if me["move"] in MOVE else None,
        "me_order": ev(me["order"], 1, ORDER[me["order"]]) if me.get("order") else None,
        "other_move": ev(other["move"], 2, MOVE[other["move"]]) if other["move"] in MOVE else None,
        "other_order": ev(other["order"], 2, ORDER[other["order"]]) if other.get("order") else None,
        "other_from": ev(other_from, 2, FROM[other_from]),
        "modifiers": [],
    }
    for name in extra:
        text, quote = MODIFIER[name]
        gold["modifiers"].append(ev(name, len(lines), quote))
        lines.append(text)
    return "\n".join(lines), gold


def scene_pair(chart, cust_role, cust_extra=(), other_extra=()):
    place, a, b, a_from, b_from = SCENE[chart]
    me = {"A": (a, a_from), "B": (b, b_from)}
    opp = "B" if cust_role == "A" else "A"
    c_text, c_gold = statement(place, me[cust_role][0], me[opp][0], me[cust_role][1], cust_extra)
    o_text, o_gold = statement(place, me[opp][0], me[cust_role][0], me[opp][1], other_extra)
    return {"고객": c_text, "상대": o_text}, {"고객": c_gold, "상대": o_gold}


def free_pair(place, cust_me, cust_other, cust_from, oth_me, oth_other, oth_from):
    c_text, c_gold = statement(place, cust_me, cust_other, cust_from)
    o_text, o_gold = statement(place, oth_me, oth_other, oth_from)
    return {"고객": c_text, "상대": o_text}, {"고객": c_gold, "상대": o_gold}


def estimate(amount):
    return {"doc": "수리견적서", "text": f"수리 항목: 범퍼와 펜더\n총액 {amount:,}원"}


def diagnosis(grade):
    return {"doc": "진단서", "text": f"진단명: 경추 염좌\n상해등급 {grade}급"}


BILL = {"doc": "진료비내역", "text": "외래 진료 3회"}

cases = []


def add(tag, texts, gold, expect, date="2026-10-02", kind="차대차", coverage=("대물",),
        damage="경미", attachments=None):
    cid = f"C{len(cases) + 1:03d}"
    cases.append({
        "id": cid, "date": date, "kind": kind, "coverage": list(coverage), "damage": damage,
        "parties": {side: {"statement": t} for side, t in texts.items()},
        "attachments": attachments if attachments is not None else [estimate(1_200_000)],
        "expect": {"tag": tag, **expect, "elements": gold},
    })


def expect(route="자동 처리 후보", rules=(), chart=None, base=None, schedule=None):
    return {"route": route, "rules": list(rules), "chart": chart, "base": base, "schedule": schedule}


# 1~16: 도표 8개 x 고객 역할 A, B. 깨끗한 대물 사고(자동 처리 후보)
for i, chart in enumerate(BASE):
    for role in ("A", "B"):
        texts, gold = scene_pair(chart, role)
        amount = 2_000_000 if (chart, role) == ("차15-1", "B") else 1_200_000  # 상한과 같은 금액은 넘지 않음
        add(f"정상 {chart} 고객{role}", texts, gold,
            expect(chart=chart, base=BASE[chart][0 if role == "A" else 1]),
            date=f"2026-10-{i + 2:02d}", attachments=[estimate(amount)])

# 17~19: 경상 대인 8주 일정(자동 처리 후보). 날짜는 달력으로 셈
for date, grade, sched in [("2026-09-12", 12, ["2026-11-07", "2026-10-31"]),
                           ("2026-10-20", 14, ["2026-12-15", "2026-12-08"]),
                           ("2026-10-05", 13, ["2026-11-30", "2026-11-23"])]:
    texts, gold = scene_pair("차43-2", "B")
    add(f"경상 {grade}급 일정", texts, gold, expect(chart="차43-2", base=70, schedule=sched),
        date=date, coverage=("대물", "대인"),
        attachments=[estimate(1_200_000), diagnosis(grade), BILL])

# 20~23: 서류 보완
texts, gold = scene_pair("차43-2", "A")
add("견적서 없음", texts, gold, expect("서류 보완", ["R01"], "차43-2", 30), attachments=[])
texts, gold = scene_pair("차41-1", "B")
add("진료비내역 없음", texts, gold,
    expect("서류 보완", ["R01"], "차41-1", 0, ["2026-11-26", "2026-11-19"]),
    date="2026-10-01", coverage=("대물", "대인"), attachments=[estimate(900_000), diagnosis(13)])
texts, gold = scene_pair("차16-1", "A")
add("견적 총액 못 읽음", texts, gold, expect("서류 보완", ["R01"], "차16-1", 40),
    attachments=[{"doc": "수리견적서", "text": "수리 항목: 범퍼\n금액은 추후 안내"}])
texts, gold = free_pair("단일로", {"move": "직진", "order": "후행"}, {"move": "진로변경", "order": "선행"}, "같은방향",
                        {"move": "직진", "order": "후행"}, {"move": "진로변경", "order": "선행"}, "같은방향")
add("서류 없음과 진술 엇갈림", texts, gold, expect("서류 보완", ["R01", "R05", "R06"]), attachments=[])

# 24~27: 진술 엇갈림
add("둘 다 직진 주장", texts, gold, expect("사람 심사", ["R05", "R06"]))
texts, gold = free_pair("단일로", {"move": "정지", "order": "선행"}, {"move": "직진", "order": "후행"}, "같은방향",
                        {"move": "직진", "order": "선행"}, {"move": "직진", "order": "후행"}, "같은방향")
add("앞뒤 순서 엇갈림", texts, gold, expect("사람 심사", ["R05", "R06"]))
texts, gold = free_pair("신호없는교차로", {"move": "직진"}, {"move": "좌회전"}, "오른쪽",
                        {"move": "좌회전"}, {"move": "직진"}, "오른쪽")
add("온 쪽 엇갈림", texts, gold, expect("사람 심사", ["R05", "R06"]))
texts, gold = free_pair("합류지점", {"move": "직진"}, {"move": "합류"}, "같은방향",
                        {"move": "직진"}, {"move": "합류"}, "같은방향")
add("둘 다 본선 주장", texts, gold, expect("사람 심사", ["R05", "R06"]))

# 28~30: 도표 밖
texts, gold = free_pair("신호교차로", {"move": "직진"}, {"move": "좌회전"}, "맞은편",
                        {"move": "좌회전"}, {"move": "직진"}, "맞은편")
add("신호 교차로(도표 밖)", texts, gold, expect("사람 심사", ["R06"]))
texts, gold = free_pair("단일로", {"move": "직진"}, {"move": "후진하고"}, "같은방향",
                        {"move": "후진하고"}, {"move": "직진"}, "같은방향")
add("후진 사고(도표 밖)", texts, gold, expect("사람 심사", ["R06"]))
texts, gold = free_pair("신호없는교차로", {"move": "직진"}, {"move": "길을 건너고"}, "오른쪽",
                        {"move": "길을 건너고"}, {"move": "직진"}, "왼쪽")
texts = {k: v.replace("상대 차는", "상대 보행자는") if k == "고객" else v for k, v in texts.items()}
add("차대사람 중상", texts, gold, expect("사람 심사", ["R02", "R03", "R06"]),
    kind="차대사람", coverage=("대인",), attachments=[diagnosis(9), BILL])

# 31~33: 수정요소 주장
texts, gold = scene_pair("차43-2", "A", cust_extra=["방향지시등 미작동"])
add("깜빡이 주장", texts, gold, expect("사람 심사", ["R07"], "차43-2", 30))
texts, gold = scene_pair("차41-1", "A", cust_extra=["급정지"])
add("급정거 주장", texts, gold, expect("사람 심사", ["R07"], "차41-1", 100))
texts, gold = scene_pair("차43-2", "A", cust_extra=["진로변경 금지장소"])
add("실선 주장", texts, gold, expect("사람 심사", ["R07"], "차43-2", 30))

# 34~35: 견적 과다
texts, gold = scene_pair("차19-1", "A")
add("경미 견적 과다", texts, gold, expect("사람 심사", ["R08"], "차19-1", 20), attachments=[estimate(2_500_000)])
texts, gold = scene_pair("차13-1", "B")
add("보통 견적 과다", texts, gold, expect("사람 심사", ["R08"], "차13-1", 40), damage="보통",
    attachments=[estimate(9_000_000)])

# 36~37: 중상(11급은 경계)
for grade in (5, 11):
    texts, gold = scene_pair("차43-3", "A")
    add(f"중상 {grade}급", texts, gold, expect("사람 심사", ["R03"], "차43-3", 50),
        coverage=("대물", "대인"), attachments=[estimate(1_200_000), diagnosis(grade), BILL])

# 38: 자차
texts, gold = scene_pair("차15-1", "A")
add("자차 청구", texts, gold, expect("사람 심사", ["R09"], "차15-1", 30), coverage=("자차",))

# 39~40: 멈춤
texts, gold = scene_pair("차43-1", "A")
texts["고객"] += "\n연락은 010-1234-5678로 주세요."
add("전화번호 노출", texts, None, expect("멈춤"))
texts, gold = scene_pair("차43-1", "B")
texts["상대"] = ""
add("상대 진술 없음", texts, None, expect("멈춤"))

assert len(cases) == 40, len(cases)

if __name__ == "__main__":
    shutil.rmtree(OUT, ignore_errors=True)
    OUT.mkdir(parents=True)
    for case in cases:
        with open(OUT / f"{case['id']}.json", "w", encoding="utf-8") as f:
            json.dump(case, f, ensure_ascii=False, indent=2)
    print(f"{len(cases)}건을 {OUT}에 썼습니다")
