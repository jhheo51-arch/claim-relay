"""진술 요소 추출. 공급자는 셋이다.

cues: 단서 낱말 표(rules/cues.yaml)로 뽑는 기본 추출기. 외부 호출이 없다.
skill: Claude Code 스킬 /claim-relay가 쓴 data/extracted/<id>.json을 읽는다.
fixture: 테스트셋에 적어 둔 정답 요소를 그대로 쓴다.

어느 공급자든 값마다 줄 번호(line)와 원문 인용(quote)을 남기고,
verify()가 그 줄에 인용이 실제로 있는지 다시 확인한다.
"""
import json

from .config import ROOT, StopError, load

FIELDS = ("place", "me_move", "me_order", "other_move", "other_order", "other_from")
LABELS = {
    "place": "장소", "me_move": "내 진행", "me_order": "내 순서",
    "other_move": "상대 진행", "other_order": "상대 순서", "other_from": "상대가 온 쪽",
}


def vocabulary():
    cues = load("rules/cues.yaml")
    return {
        "place": set(cues["place"]),
        "me_move": set(cues["move"]), "other_move": set(cues["move"]),
        "me_order": set(cues["order"]), "other_order": set(cues["order"]),
        "other_from": set(cues["from"]),
        "modifier": set(cues["modifier"]),
    }


def _find(table, line):
    for value, words in table.items():
        for word in words:
            if word in line:
                return value, word
    return None


def by_cues(lines):
    cues = load("rules/cues.yaml")
    out = {f: None for f in FIELDS}
    out["modifiers"] = []
    for i, line in enumerate(lines):
        slots = [("place", cues["place"])]
        if line.startswith("저는"):
            slots += [("me_move", cues["move"]), ("me_order", cues["order"])]
        elif line.startswith("상대"):
            slots += [("other_move", cues["move"]), ("other_order", cues["order"]),
                      ("other_from", cues["from"])]
        for field, table in slots:
            if out[field] is None and (hit := _find(table, line)):
                out[field] = {"value": hit[0], "line": i, "quote": hit[1]}
        for value, words in cues["modifier"].items():
            word = next((w for w in words if w in line), None)
            if word and value not in [m["value"] for m in out["modifiers"]]:
                out["modifiers"].append({"value": value, "line": i, "quote": word})
    return out


def from_skill(case_id):
    path = ROOT / "data" / "extracted" / f"{case_id}.json"
    if not path.exists():
        raise StopError(f"스킬 추출 결과가 없습니다: data/extracted/{case_id}.json")
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def make_extractor(name, gold=None):
    """(사고 ID, 진술 쪽, 줄 목록)을 받아 요소를 돌려주는 함수를 만든다."""
    if name == "cues":
        return lambda case_id, side, lines: by_cues(lines)
    if name == "skill":
        return lambda case_id, side, lines: from_skill(case_id).get(side) or {}
    if name == "fixture":
        def fixture(case_id, side, lines):
            if gold is None:
                raise StopError("fixture 추출기에는 정답 요소가 필요합니다")
            return gold[side]
        return fixture
    raise ValueError(f"모르는 추출기: {name}")


def _checked(item, lines, allowed):
    if not isinstance(item, dict):
        return False
    line, quote = item.get("line"), item.get("quote")
    return (
        item.get("value") in allowed
        and isinstance(line, int) and 0 <= line < len(lines)
        and bool(quote) and quote in lines[line]
    )


def verify(raw, lines):
    """인용이 원문 줄에 없거나 정해진 낱말 밖의 값은 버리고 '근거 없음'으로 표시한다."""
    vocab = vocabulary()
    clean, unverified = {}, []
    for field in FIELDS:
        item = raw.get(field)
        if item is None:
            clean[field] = None
        elif _checked(item, lines, vocab[field]):
            clean[field] = {k: item[k] for k in ("value", "line", "quote")}
        else:
            clean[field] = None
            unverified.append(field)
    clean["modifiers"] = []
    for item in raw.get("modifiers") or []:
        if _checked(item, lines, vocab["modifier"]):
            clean["modifiers"].append({k: item[k] for k in ("value", "line", "quote")})
        else:
            unverified.append("modifiers")
    return clean, unverified


def value(el, field):
    item = el.get(field)
    return item["value"] if item else None
