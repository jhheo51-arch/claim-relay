"""다른 모델이 쓴 진술 20건(블라인드 세트)을 data/blind/에 만든다.

자연어 10건(make_natural.py)은 진술, 정답, 추출을 모두 같은 모델(Claude Opus)이 했다.
이 세트는 셋을 나눈다.

1. 사례 명세(이 파일): 장면, 첨부, 기대값. Claude Opus가 손으로 정했다. 규칙 코드로 계산하지 않았다.
2. 진술 문장(data/blind/statements.json): Claude Haiku 하위 에이전트가 아래 SCENES 설명만 보고 썼다.
   단서 표(rules/cues.yaml)와 기대값은 보지 않았다.
3. 진술 요소 추출(data/extracted/B*.json): Claude Sonnet 하위 에이전트가 cases/만 보고 썼다.
   기대값과 이 파일은 보지 않았다.

정답 요소(gold)는 두지 않는다. 진술을 쓴 쪽이 따로 있어 줄 단위 정답을 미리 정할 수 없기 때문이다.
그래서 이 세트의 평가표에는 추출 일치율이 없고, 경로, 규칙, 도표, 일정만 맞춰 본다.

python tools/make_blind.py        # statements.json을 읽어 cases/와 expect.json을 만든다
python tools/make_blind.py brief  # 진술을 쓸 하위 에이전트에게 줄 장면 설명을 출력한다
"""
import json
import shutil
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "data" / "blind"


def estimate(amount):
    return {"doc": "수리견적서", "text": f"수리 항목: 범퍼와 펜더\n총액 {amount:,}원"}


def diagnosis(grade):
    return {"doc": "진단서", "text": f"진단명: 경추 염좌\n상해등급 {grade}급"}


BILL = {"doc": "진료비내역", "text": "외래 진료 3회"}


def expect(route="자동 처리 후보", rules=(), chart=None, base=None, schedule=None):
    return {"route": route, "rules": list(rules), "chart": chart, "base": base, "schedule": schedule}


# 장면 설명: 진술을 쓰는 쪽이 받는 글. 사실만 적고, 말투와 낱말은 쓰는 쪽에 맡긴다.
SCENES = [
    dict(id="B001", tag="정차 중 뒤에서 받힘(차41-1 고객B)", date="2026-10-03",
         customer="편도 2차로 곧은 길. 퇴근길에 차가 밀려 내 차는 완전히 서 있었다. 같은 차로 뒤에서 오던 차가 내 차 뒤를 박았다.",
         other="편도 2차로 곧은 길. 같은 차로 앞차를 따라 그대로 가다가, 앞차가 서 있는 걸 늦게 보고 앞차 뒤를 박았다.",
         expect=expect(chart="차41-1", base=0)),
    dict(id="B002", tag="앞차를 뒤에서 박음(차41-1 고객A)", date="2026-10-04",
         customer="곧은 길에서 같은 차로 앞차를 따라 똑바로 가던 중. 휴대폰 알림을 보느라 앞차가 속도를 줄인 걸 늦게 봤고 앞차 뒤를 박았다.",
         other="곧은 길에서 내 차로를 따라 똑바로 가고 있었는데, 같은 차로 뒤에서 따라오던 차가 내 차 뒤를 박았다.",
         expect=expect(chart="차41-1", base=100)),
    dict(id="B003", tag="직진 중 앞차가 끼어듦(차43-2 고객A)", date="2026-10-05",
         customer="편도 3차로 곧은 길, 2차로를 똑바로 가고 있었다. 옆 차로에서 내 앞쪽에 있던 차가 내 차로로 들어오다 내 차 앞부분과 부딪쳤다.",
         other="편도 3차로 곧은 길. 3차로에서 2차로로 차로를 옮기는데, 같은 방향 2차로 뒤쪽에서 오던 차와 부딪쳤다. 내가 그 차보다 앞에 있었다.",
         expect=expect(chart="차43-2", base=30)),
    dict(id="B004", tag="차로를 옮기다 뒤차와 부딪침(차43-2 고객B)", date="2026-10-06",
         customer="곧은 길에서 출구로 가려고 오른쪽 차로로 옮겨 탔다. 같은 방향 오른쪽 차로 뒤에서 오던 차가 내 차 뒷문 쪽을 받았다. 옮길 때 내가 그 차보다 앞에 있었다.",
         other="곧은 길에서 내 차로를 똑바로 가는데, 앞쪽에 있던 왼쪽 차로 차가 갑자기 내 차로로 들어와 부딪쳤다. 같은 방향으로 가던 차다.",
         expect=expect(chart="차43-2", base=70)),
    dict(id="B005", tag="양쪽에서 동시에 가운데 차로로(차43-3 고객A)", date="2026-10-07",
         customer="편도 3차로 곧은 길. 나는 1차로에서 가운데 2차로로 옮기던 중이었다. 같은 방향 3차로 차도 같은 때 2차로로 들어와 가운데서 부딪쳤다.",
         other="편도 3차로 곧은 길. 나는 3차로에서 2차로로 옮기고 있었다. 같은 방향 1차로 차도 동시에 2차로로 들어와 부딪쳤다.",
         expect=expect(chart="차43-3", base=50)),
    dict(id="B006", tag="합류하다 본선 차와 부딪침(차43-1 고객B)", date="2026-10-08",
         customer="공사 때문에 차로 하나가 끝나서 옆 차로로 들어가야 하는 구간이었다. 내 차로가 끝나 옆 차로로 끼어 들어가다 같은 방향으로 오던 옆 차로 차와 부딪쳤다.",
         other="차로 하나가 없어지는 구간. 나는 줄지 않는 차로를 따라 똑바로 가고 있었다. 같은 방향 옆 차로가 끝나면서 그 차가 내 차로로 들어오다 부딪쳤다.",
         expect=expect(chart="차43-1", base=60)),
    dict(id="B007", tag="앞차가 교차로에서 좌회전(차19-1 고객A)", date="2026-10-09",
         customer="신호등 없는 동네 교차로. 같은 방향 앞차를 따라 똑바로 지나가려는데, 앞차가 교차로 안에서 갑자기 왼쪽으로 꺾었다. 내 차 앞이 그 차 옆을 받았다.",
         other="신호등 없는 교차로에서 왼쪽으로 꺾던 중. 같은 방향 뒤에서 오던 차가 똑바로 오다 내 차 옆을 받았다. 내가 앞에 있었다.",
         expect=expect(chart="차19-1", base=20)),
    dict(id="B008", tag="교차로에서 좌회전하다 뒤차와(차19-1 고객B)", date="2026-10-10",
         customer="신호등 없는 교차로에서 왼쪽 길로 들어가려고 꺾고 있었다. 같은 방향 뒤에서 따라오던 차가 그대로 직진하다 내 차 옆을 받았다. 내가 앞에 있었다.",
         other="신호등 없는 교차로. 같은 방향 앞차를 따라 똑바로 가는데 앞차가 왼쪽으로 꺾었다. 내가 뒤에 있었고 그 차 옆을 받았다.",
         expect=expect(chart="차19-1", base=80)),
    dict(id="B009", tag="직진 중 오른쪽 길 차가 좌회전(차16-1 고객A)", date="2026-10-11",
         customer="신호등 없는 교차로를 똑바로 지나가던 중. 내 오른쪽 길에서 나온 차가 왼쪽으로 꺾어 내 앞을 가로지르다 부딪쳤다.",
         other="신호등 없는 교차로에서 왼쪽으로 꺾고 있었다. 내 왼쪽 길에서 똑바로 오던 차와 부딪쳤다.",
         expect=expect(chart="차16-1", base=40)),
    dict(id="B010", tag="좌회전 중 왼쪽 길 직진차와(차16-1 고객B)", date="2026-10-12",
         customer="신호등 없는 사거리에서 왼쪽으로 꺾는데, 내 왼쪽 길에서 똑바로 달려오던 차가 내 차를 받았다.",
         other="신호등 없는 사거리를 똑바로 지나는데, 내 오른쪽 길에서 나온 차가 왼쪽으로 꺾으며 내 앞으로 들어와 부딪쳤다.",
         expect=expect(chart="차16-1", base=60)),
    dict(id="B011", tag="우회전 중 왼쪽 길 직진차와(차13-1 고객A)", date="2026-10-13",
         customer="신호등 없는 교차로에서 오른쪽으로 꺾어 큰길로 들어가던 중. 내 왼쪽 길에서 똑바로 오던 차와 부딪쳤다.",
         other="신호등 없는 교차로를 똑바로 지나는데, 내 오른쪽 길에서 오른쪽으로 꺾어 나오던 차와 부딪쳤다.",
         expect=expect(chart="차13-1", base=60)),
    dict(id="B012", tag="직진 중 오른쪽 길 우회전차와(차13-1 고객B)", date="2026-10-14",
         customer="신호등 없는 교차로를 똑바로 가고 있었는데, 내 오른쪽 길에서 오른쪽으로 꺾어 들어오던 차와 부딪쳤다.",
         other="신호등 없는 교차로에서 오른쪽으로 꺾던 중. 내 왼쪽 길에서 똑바로 오던 차와 부딪쳤다.",
         expect=expect(chart="차13-1", base=40)),
    dict(id="B013", tag="직진 중 맞은편 좌회전(차15-1 고객A)", date="2026-10-15",
         customer="신호등 없는 교차로를 똑바로 지나가는데, 맞은편에서 오던 차가 왼쪽으로 꺾으며 내 앞을 막아 부딪쳤다.",
         other="신호등 없는 교차로에서 왼쪽으로 꺾는데, 맞은편에서 똑바로 오던 차와 부딪쳤다.",
         expect=expect(chart="차15-1", base=30)),
    dict(id="B014", tag="둘 다 직진했다고 함", date="2026-10-16",
         customer="곧은 길에서 내 차로를 똑바로 가고 있었다. 같은 방향 앞쪽 옆 차로 차가 내 차로로 넘어와 부딪쳤다. 나는 차로를 바꾸지 않았다.",
         other="곧은 길에서 내 차로를 똑바로 가고 있었다. 같은 방향 뒤쪽 옆 차로 차가 내 차로로 넘어와 부딪쳤다. 나는 차로를 바꾸지 않았다.",
         expect=expect("사람 심사", ["R05", "R06"])),
    dict(id="B015", tag="서로 자기가 앞이었다고 함", date="2026-10-17",
         customer="곧은 길 같은 차로. 내가 앞에서 신호 대기하려고 서 있었는데 같은 방향 뒤차가 와서 박았다.",
         other="곧은 길 같은 차로. 내가 앞에서 서 있었는데 같은 방향 뒤차가 와서 내 차를 박았다. 그 차가 내 뒤에 있었다.",
         expect=expect("사람 심사", ["R05", "R06"])),
    dict(id="B016", tag="깜빡이 없이 끼어들었다고 주장(차43-2 고객A)", date="2026-10-18",
         customer="곧은 길에서 내 차로를 똑바로 가는데, 같은 방향 앞쪽 옆 차로 차가 깜빡이도 안 켜고 내 차로로 들어와 부딪쳤다. 내가 뒤에 있었다.",
         other="곧은 길에서 옆 차로로 옮기다가, 같은 방향 그 차로 뒤에서 오던 차와 부딪쳤다. 내가 앞에 있었다.",
         expect=expect("사람 심사", ["R07"], "차43-2", 30)),
    dict(id="B017", tag="앞차가 이유 없이 급히 섰다고 주장(차41-1 고객A)", date="2026-10-19",
         customer="곧은 길에서 같은 차로 앞차를 따라 똑바로 가는데, 앞차가 아무 이유 없이 갑자기 브레이크를 꽉 밟아 섰다. 피하지 못하고 뒤를 박았다.",
         other="곧은 길에서 내 차로를 똑바로 가다가 서 있었는데, 같은 차로 뒤에서 따라오던 차가 내 차 뒤를 박았다.",
         expect=expect("사람 심사", ["R07"], "차41-1", 100)),
    dict(id="B018", tag="맞은편 차가 너무 빨랐다고 주장(차15-1 고객B)", date="2026-10-20",
         customer="신호등 없는 교차로에서 왼쪽으로 꺾는데, 맞은편에서 똑바로 오던 차가 제한속도보다 훨씬 빠르게 달려와 부딪쳤다.",
         other="신호등 없는 교차로를 똑바로 지나는데, 맞은편에서 오던 차가 왼쪽으로 꺾어 내 앞을 막았다.",
         expect=expect("사람 심사", ["R07"], "차15-1", 70)),
    dict(id="B019", tag="신호등 있는 교차로(도표 밖)", date="2026-10-21",
         customer="신호등이 있는 교차로에서 초록불에 똑바로 지나가는데, 맞은편에서 오던 차가 왼쪽으로 꺾어 부딪쳤다.",
         other="신호등이 있는 교차로에서 왼쪽으로 꺾다가 맞은편에서 똑바로 오던 차와 부딪쳤다.",
         expect=expect("사람 심사", ["R06"])),
    dict(id="B020", tag="합류 구간 본선 직진, 경상 13급(차43-1 고객A)", date="2026-10-14",
         customer="차로 하나가 줄어드는 구간에서 줄지 않는 차로로 똑바로 가고 있었다. 같은 방향 옆 차로가 끝나며 그 차가 내 차로로 들어와 부딪쳤다. 목이 아파 병원에 다니고 있다.",
         other="내 차로가 끝나는 구간이라 옆 차로로 들어가는데, 같은 방향 옆 차로에서 똑바로 오던 차와 부딪쳤다.",
         coverage=("대물", "대인"), attachments=[estimate(1_300_000), diagnosis(13), BILL],
         expect=expect(chart="차43-1", base=40, schedule=["2026-12-09", "2026-12-02"])),
]


def brief():
    lines = []
    for s in SCENES:
        lines += [f"## {s['id']}", f"- 고객(진술하는 사람 1): {s['customer']}", f"- 상대(진술하는 사람 2): {s['other']}", ""]
    return "\n".join(lines)


def build():
    with open(OUT / "statements.json", encoding="utf-8") as f:
        statements = json.load(f)
    shutil.rmtree(OUT / "cases", ignore_errors=True)
    (OUT / "cases").mkdir(parents=True)
    expects = {}
    for s in SCENES:
        case = {
            "id": s["id"], "date": s["date"], "kind": "차대차",
            "coverage": list(s.get("coverage", ("대물",))), "damage": "경미",
            "parties": {side: {"statement": statements[s["id"]][side]} for side in ("고객", "상대")},
            "attachments": s.get("attachments", [estimate(1_100_000)]),
        }
        with open(OUT / "cases" / f"{s['id']}.json", "w", encoding="utf-8") as f:
            json.dump(case, f, ensure_ascii=False, indent=2)
        expects[s["id"]] = {"tag": s["tag"], **s["expect"]}
    with open(OUT / "expect.json", "w", encoding="utf-8") as f:
        json.dump(expects, f, ensure_ascii=False, indent=2)
    print(f"{len(SCENES)}건을 {OUT}에 썼습니다")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    print(brief()) if sys.argv[1:] == ["brief"] else build()
