"""사람이 말하듯 쓴 가상 진술 10건을 data/natural/에 만든다.

테스트셋(make_testset.py)은 틀에 맞춘 문장이라 단서 추출기가 쉽게 맞힌다.
이 묶음은 단서 낱말을 일부러 피하거나 비틀어 써서 추출기 차이를 본다.

- cases/<ID>.json: 추출기가 읽는 사고 파일. 기대값을 넣지 않는다(스킬 추출을 맡은 쪽이 못 보게).
- expect.json: 사례별 기대값. 진술을 쓴 사람(Claude)이 손으로 정했다. 규칙 코드로 계산하지 않았다.
"""
import json
import shutil
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "data" / "natural"


def ev(value, line, quote):
    return {"value": value, "line": line, "quote": quote}


def side(place=None, me_move=None, me_order=None, other_move=None, other_order=None,
         other_from=None, modifiers=()):
    return {"place": place, "me_move": me_move, "me_order": me_order, "other_move": other_move,
            "other_order": other_order, "other_from": other_from, "modifiers": list(modifiers)}


def estimate(amount):
    return {"doc": "수리견적서", "text": f"수리 항목: 범퍼와 펜더\n총액 {amount:,}원"}


def diagnosis(grade):
    return {"doc": "진단서", "text": f"진단명: 경추 염좌\n상해등급 {grade}급"}


BILL = {"doc": "진료비내역", "text": "외래 진료 3회"}

CASES = [
    dict(
        id="N001", tag="정체 중 뒤에서 받힘(차41-1 고객B)", date="2026-10-08",
        attachments=[estimate(900_000)],
        texts={
            "고객": ["퇴근 시간이라 직선 도로가 꽉 막혀 있었어요.",
                     "앞차를 따라가다 완전히 멈춰 있었는데",
                     "뒤에 오던 차가 그대로 와서 제 차 뒤를 받았습니다."],
            "상대": ["편도 3차로 직선도로에서 앞차와 같은 차로로 가고 있었습니다.",
                     "앞차가 선 걸 늦게 봤습니다.",
                     "브레이크를 밟았지만 앞차 뒤범퍼를 들이받았습니다."],
        },
        gold={
            "고객": side(ev("단일로", 0, "직선 도로"), ev("정지", 1, "멈춰 있었는데"), ev("선행", 2, "제 차 뒤를"),
                       ev("직진", 2, "그대로 와서"), ev("후행", 2, "뒤에 오던"), ev("같은방향", 2, "뒤에 오던 차")),
            "상대": side(ev("단일로", 0, "직선도로"), ev("직진", 0, "가고 있었습니다"), ev("후행", 2, "앞차 뒤범퍼를"),
                       ev("정지", 1, "앞차가 선 걸"), ev("선행", 0, "앞차와"), ev("같은방향", 0, "같은 차로로")),
        },
        expect=dict(route="자동 처리 후보", rules=[], chart="차41-1", base=0, schedule=None),
    ),
    dict(
        id="N002", tag="옆 차로 차가 끼어듦, 경상 12급(차43-2 고객A)", date="2026-10-06",
        coverage=["대물", "대인"], attachments=[estimate(1_400_000), diagnosis(12), BILL],
        texts={
            "고객": ["편도 2차로 직선 구간 2차로로 출근하던 중이었습니다.",
                     "제 차로를 따라 계속 달리고 있었는데",
                     "옆 1차로 차가 갑자기 제 앞으로 들어오면서 제 차 앞부분과 그 차 뒷문이 부딪쳤습니다."],
            "상대": ["직선 도로 1차로에서 달리다 2차로로 옮기려고 했습니다.",
                     "옆 차로 뒤쪽 차와 거리가 충분하다고 생각했는데",
                     "넘어가는 도중에 뒤에서 온 차가 제 차 옆을 받았습니다."],
        },
        gold={
            "고객": side(ev("단일로", 0, "직선 구간"), ev("직진", 1, "계속 달리고"), ev("후행", 2, "제 앞으로"),
                       ev("진로변경", 2, "제 앞으로 들어오면서"), ev("선행", 2, "제 앞으로"), ev("같은방향", 2, "옆 1차로 차가")),
            "상대": side(ev("단일로", 0, "직선 도로"), ev("진로변경", 0, "2차로로 옮기려고"), ev("선행", 2, "뒤에서 온 차가"),
                       ev("직진", 2, "뒤에서 온"), ev("후행", 2, "뒤에서 온"), ev("같은방향", 1, "옆 차로 뒤쪽 차")),
        },
        # 2026-10-06 + 56일 = 12-01, + 49일 = 11-24 (달력으로 셈)
        expect=dict(route="자동 처리 후보", rules=[], chart="차43-2", base=30, schedule=["2026-12-01", "2026-11-24"]),
    ),
    dict(
        id="N003", tag="양쪽에서 동시에 가운데 차로로(차43-3)", date="2026-10-11", damage="보통",
        attachments=[estimate(3_400_000)],
        texts={
            "고객": ["편도 3차로 직선 도로였습니다.",
                     "저는 1차로에서 2차로로 옮겨 가고 있었습니다.",
                     "그런데 같은 쪽으로 가던 3차로 차도 동시에 2차로로 들어오면서 가운데서 부딪쳤어요."],
            "상대": ["직선 도로 3차로에서 2차로로 차선을 바꾸던 중이었습니다.",
                     "같은 방향 1차로 차가 같은 때에 2차로로 넘어오는 걸 못 봤습니다."],
        },
        gold={
            "고객": side(ev("단일로", 0, "직선 도로"), ev("진로변경", 1, "2차로로 옮겨 가고"),
                       other_move=ev("진로변경", 2, "2차로로 들어오면서"), other_from=ev("같은방향", 2, "같은 쪽으로 가던")),
            "상대": side(ev("단일로", 0, "직선 도로"), ev("진로변경", 0, "차선을 바꾸던"),
                       other_move=ev("진로변경", 1, "2차로로 넘어오는"), other_from=ev("같은방향", 1, "같은 방향")),
        },
        expect=dict(route="자동 처리 후보", rules=[], chart="차43-3", base=50, schedule=None),
    ),
    dict(
        id="N004", tag="끝나는 차로에서 합류(차43-1 고객B)", date="2026-10-14",
        attachments=[estimate(1_800_000)],
        texts={
            "고객": ["차로가 줄어드는 구간이었고 제 차로가 끝나 가고 있었습니다.",
                     "저는 옆 차로로 합류하려다 뒤에서 오는 차를 못 봤습니다.",
                     "옆 차로로 그대로 오던 차와 제 차 오른쪽이 부딪쳤습니다."],
            "상대": ["합류 구간 바로 앞에서 제 차로를 그대로 달리고 있었습니다.",
                     "오른쪽 끝 차로 차가 제 앞으로 밀고 들어와 피할 틈이 없었습니다."],
        },
        gold={
            "고객": side(ev("합류지점", 0, "차로가 줄어드는"), ev("합류", 1, "합류하려다"), ev("선행", 1, "뒤에서 오는 차를"),
                       ev("직진", 2, "그대로 오던"), ev("후행", 1, "뒤에서 오는"), ev("같은방향", 2, "옆 차로로")),
            "상대": side(ev("합류지점", 0, "합류 구간"), ev("직진", 0, "그대로 달리고"), ev("후행", 1, "제 앞으로"),
                       ev("합류", 1, "밀고 들어와"), ev("선행", 1, "제 앞으로"), ev("같은방향", 1, "오른쪽 끝 차로 차가")),
        },
        expect=dict(route="자동 처리 후보", rules=[], chart="차43-1", base=60, schedule=None),
    ),
    dict(
        id="N005", tag="앞차가 교차로에서 좌회전(차19-1 고객A)", date="2026-10-17",
        attachments=[estimate(1_100_000)],
        texts={
            "고객": ["신호등 없는 작은 사거리를 지나던 중이었습니다.",
                     "앞차를 따라 똑바로 가고 있었는데",
                     "앞차가 깜빡이를 켜고 갑자기 왼쪽으로 꺾어서 제 차 앞부분이 그 차 옆을 받았습니다."],
            "상대": ["신호 없는 교차로에서 좌회전하려고 속도를 줄였습니다.",
                     "방향지시등을 켜고 돌기 시작했는데 뒤차가 따라오다 제 차 오른쪽을 받았습니다."],
        },
        gold={
            "고객": side(ev("신호없는교차로", 0, "신호등 없는 작은 사거리"), ev("직진", 1, "똑바로 가고"),
                       ev("후행", 1, "앞차를 따라"), ev("좌회전", 2, "왼쪽으로 꺾어서"), ev("선행", 2, "앞차가"),
                       ev("같은방향", 1, "앞차를 따라")),
            "상대": side(ev("신호없는교차로", 0, "신호 없는 교차로"), ev("좌회전", 0, "좌회전하려고"),
                       ev("선행", 1, "뒤차가"), ev("직진", 1, "따라오다"), ev("후행", 1, "뒤차가"),
                       ev("같은방향", 1, "뒤차가 따라오다")),
        },
        expect=dict(route="자동 처리 후보", rules=[], chart="차19-1", base=20, schedule=None),
    ),
    dict(
        id="N006", tag="좌회전 중 왼쪽 길 직진 차(차16-1 고객B)", date="2026-10-19",
        attachments=[estimate(1_500_000)],
        texts={
            "고객": ["신호등이 없는 교차로에서 좌회전하던 중이었습니다.",
                     "제 왼쪽 길에서 직진해 오던 차와 교차로 한가운데서 부딪쳤습니다."],
            "상대": ["신호 없는 사거리를 똑바로 지나가고 있었습니다.",
                     "오른쪽 길에서 나온 차가 제 앞을 가로질러 왼쪽으로 돌다가 부딪쳤습니다."],
        },
        gold={
            "고객": side(ev("신호없는교차로", 0, "신호등이 없는 교차로"), ev("좌회전", 0, "좌회전하던"),
                       other_move=ev("직진", 1, "직진해 오던"), other_from=ev("왼쪽", 1, "제 왼쪽 길에서")),
            "상대": side(ev("신호없는교차로", 0, "신호 없는 사거리"), ev("직진", 0, "똑바로 지나가고"),
                       other_move=ev("좌회전", 1, "왼쪽으로 돌다가"), other_from=ev("오른쪽", 1, "오른쪽 길에서")),
        },
        expect=dict(route="자동 처리 후보", rules=[], chart="차16-1", base=60, schedule=None),
    ),
    dict(
        id="N007", tag="맞은편 차 좌회전, 경상 13급(차15-1 고객A)", date="2026-10-20",
        coverage=["대물", "대인"], attachments=[estimate(1_600_000), diagnosis(13), BILL],
        texts={
            "고객": ["신호 없는 교차로를 곧장 지나가려던 참이었습니다.",
                     "마주 오던 차가 제 앞에서 갑자기 좌회전을 했고 피하지 못했습니다."],
            "상대": ["신호등 없는 교차로에서 좌회전하려고 기다리다가 반대편이 비었다고 보고 돌았습니다.",
                     "반대편에서 직진해 온 차와 부딪쳤습니다."],
        },
        gold={
            "고객": side(ev("신호없는교차로", 0, "신호 없는 교차로"), ev("직진", 0, "곧장 지나가려던"),
                       other_move=ev("좌회전", 1, "좌회전을 했고"), other_from=ev("맞은편", 1, "마주 오던 차가")),
            "상대": side(ev("신호없는교차로", 0, "신호등 없는 교차로"), ev("좌회전", 0, "좌회전하려고"),
                       other_move=ev("직진", 1, "직진해 온"), other_from=ev("맞은편", 1, "반대편에서")),
        },
        # 2026-10-20 + 56일 = 12-15, + 49일 = 12-08 (C018과 같은 날짜)
        expect=dict(route="자동 처리 후보", rules=[], chart="차15-1", base=30, schedule=["2026-12-15", "2026-12-08"]),
    ),
    dict(
        id="N008", tag="서로 상대가 끼어들었다고 함", date="2026-10-21",
        attachments=[estimate(1_300_000)],
        texts={
            "고객": ["직선 도로 2차로를 그대로 달리고 있었고 1차로에도 같은 방향 차가 있었습니다.",
                     "1차로 차가 제 앞으로 확 들어왔습니다."],
            "상대": ["직선 도로 1차로를 쭉 달리고 있었습니다.",
                     "옆 2차로 차가 제 차로로 넘어오면서 제 차 옆을 긁었습니다. 저는 차로를 바꾼 적이 없습니다."],
        },
        gold={
            "고객": side(ev("단일로", 0, "직선 도로"), ev("직진", 0, "그대로 달리고"), ev("후행", 1, "제 앞으로"),
                       ev("진로변경", 1, "제 앞으로 확 들어왔습니다"), ev("선행", 1, "제 앞으로"), ev("같은방향", 0, "같은 방향")),
            "상대": side(ev("단일로", 0, "직선 도로"), ev("직진", 0, "쭉 달리고"),
                       other_move=ev("진로변경", 1, "제 차로로 넘어오면서"), other_from=ev("같은방향", 1, "옆 2차로 차가")),
        },
        expect=dict(route="사람 심사", rules=["R05", "R06"], chart=None, base=None, schedule=None),
    ),
    dict(
        id="N009", tag="깜빡이 없이 끼어들었다는 주장(차43-2 고객A)", date="2026-10-22",
        attachments=[estimate(1_250_000)],
        texts={
            "고객": ["직선 도로에서 제 차로를 따라 쭉 가고 있었습니다.",
                     "같은 방향 옆 차로 차가 깜빡이도 안 켜고 제 앞으로 차선을 바꿨습니다."],
            "상대": ["직선 도로에서 오른쪽 차로로 옮기던 중이었습니다.",
                     "제가 앞서 들어갔는데 뒤에서 오던 차가 속도를 줄이지 않아 부딪쳤습니다."],
        },
        gold={
            "고객": side(ev("단일로", 0, "직선 도로"), ev("직진", 0, "쭉 가고"), ev("후행", 1, "제 앞으로"),
                       ev("진로변경", 1, "차선을 바꿨습니다"), ev("선행", 1, "제 앞으로"), ev("같은방향", 1, "같은 방향"),
                       [ev("방향지시등 미작동", 1, "깜빡이도 안 켜고")]),
            "상대": side(ev("단일로", 0, "직선 도로"), ev("진로변경", 0, "오른쪽 차로로 옮기던"), ev("선행", 1, "제가 앞서"),
                       ev("직진", 1, "뒤에서 오던"), ev("후행", 1, "뒤에서 오던"), ev("같은방향", 1, "뒤에서 오던 차가")),
        },
        expect=dict(route="사람 심사", rules=["R07"], chart="차43-2", base=30, schedule=None),
    ),
    dict(
        id="N010", tag="신호 교차로 비보호 좌회전(도표 밖)", date="2026-10-24",
        attachments=[estimate(1_700_000)],
        texts={
            "고객": ["신호등이 있는 사거리에서 초록불을 받고 직진했습니다.",
                     "맞은편에서 비보호로 좌회전하던 차가 제 앞을 막았습니다."],
            "상대": ["신호 있는 교차로에서 비보호 좌회전을 하던 중이었습니다.",
                     "맞은편 직진 차가 노란불에 들어와 부딪쳤습니다."],
        },
        gold={
            "고객": side(ev("신호교차로", 0, "신호등이 있는 사거리"), ev("직진", 0, "직진했습니다"),
                       other_move=ev("좌회전", 1, "좌회전하던"), other_from=ev("맞은편", 1, "맞은편에서")),
            "상대": side(ev("신호교차로", 0, "신호 있는 교차로"), ev("좌회전", 0, "좌회전을 하던"),
                       other_move=ev("직진", 1, "직진 차가"), other_from=ev("맞은편", 1, "맞은편")),
        },
        expect=dict(route="사람 심사", rules=["R06"], chart=None, base=None, schedule=None),
    ),
]


def check_quotes(case):
    for name, lines in case["texts"].items():
        for field, item in case["gold"][name].items():
            for it in (item if isinstance(item, list) else [item]):
                if it and it["quote"] not in lines[it["line"]]:
                    raise SystemExit(f"{case['id']} {name} {field}: 인용이 {it['line']}번 줄에 없음")


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "cases").mkdir(parents=True)
    expect = {}
    for c in CASES:
        check_quotes(c)
        raw = {
            "id": c["id"], "date": c["date"], "kind": "차대차", "coverage": c.get("coverage", ["대물"]),
            "damage": c.get("damage", "경미"),
            "parties": {s: {"statement": "\n".join(lines)} for s, lines in c["texts"].items()},
            "attachments": c["attachments"],
        }
        with open(OUT / "cases" / f"{c['id']}.json", "w", encoding="utf-8") as f:
            json.dump(raw, f, ensure_ascii=False, indent=2)
        expect[c["id"]] = {"tag": c["tag"], **c["expect"], "elements": c["gold"]}
    with open(OUT / "expect.json", "w", encoding="utf-8") as f:
        json.dump(expect, f, ensure_ascii=False, indent=2)
    print(f"{len(CASES)}건을 data/natural/에 썼습니다")


if __name__ == "__main__":
    main()
