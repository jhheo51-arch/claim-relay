---
name: claim-relay
description: claim-relay 사고 진술에서 진술 요소를 뽑아 data/extracted/<id>.json에 쓰고 파이프라인을 skill 추출기로 돌린다. 사용자가 /claim-relay <사고 JSON 경로 또는 ID>를 입력하거나 "이 사고 진술 뽑아서 돌려 줘"라고 할 때 쓴다.
---

# claim-relay 진술 요소 추출

이 스킬이 하는 일은 하나다. 진술 문장을 읽고 정해진 칸에 값과 원문 인용을 적는다.
과실, 경로, 안내문은 정하지 않는다. 그 일은 Python 규칙이 한다.

## 순서

1. 사고 JSON을 읽는다. 인자가 ID면 `data/testset/<ID>.json`, 경로면 그 파일.
2. `parties.고객.statement`와 `parties.상대.statement`를 줄바꿈으로 나눈다. 빈 줄은 버리고 앞뒤 공백을 지운다. 첫 줄이 0번이다.
3. 쪽마다 아래 칸을 채운다. 값은 `rules/cues.yaml`의 키 낱말 중 하나만 쓴다.

   | 칸 | 뜻 | 쓸 수 있는 값 |
   |---|---|---|
   | place | 사고 장소 | 신호없는교차로, 신호교차로, 합류지점, 단일로 |
   | me_move | 진술한 사람의 진행 | 진로변경, 좌회전, 우회전, 합류, 정지, 직진 |
   | me_order | 진술한 사람이 앞인지 뒤인지 | 선행, 후행 |
   | other_move | 상대의 진행 | me_move와 같음 |
   | other_order | 상대가 앞인지 뒤인지 | 선행, 후행 |
   | other_from | 진술한 사람이 볼 때 상대가 온 쪽 | 같은방향, 맞은편, 오른쪽, 왼쪽 |
   | modifiers | 과실을 바꿀 수 있는 주장(목록) | 방향지시등 미작동, 급정지, 진로변경 금지장소, 과속 |

4. 각 값은 `{"value": 값, "line": 줄 번호, "quote": 그 줄에 글자 그대로 있는 조각}`로 쓴다.
   - 문장에 근거가 없으면 `null`로 둔다. 짐작해서 채우지 않는다.
   - quote는 고쳐 쓰지 않는다. 코드가 그 줄에서 다시 찾고, 못 찾으면 그 값을 버리고 사람 심사로 넘긴다.
5. `data/extracted/<id>.json`에 쓴다.

   ```json
   {"고객": {"place": {...}, "me_move": {...}, "me_order": null, "other_move": {...},
             "other_order": {...}, "other_from": {...}, "modifiers": []},
    "상대": {...}}
   ```

6. `bin/claim-relay run <사고 JSON 경로 또는 ID> --extractor skill`을 돌리고 결과를 보여 준다.
   멈추면 까닭을 그대로 전한다. 결과를 고쳐 말하지 않는다.

## 하지 않는 일

- 과실 숫자, 심사 경로, 지급 여부를 말하지 않는다.
- 개인정보 꼴(주민등록번호, 전화번호, 차량번호)이 보이면 추출하지 않고 멈춘 사실만 알린다.
- 외부로 보내거나 실제 고객 자료를 넣지 않는다.
