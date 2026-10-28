"""진술 요소 추출. 공급자는 넷이다.

cues: 단서 낱말 표(rules/cues.yaml)로 뽑는 기본 추출기. 외부 호출이 없다.
skill: Claude Code 스킬 /claim-relay가 쓴 data/extracted/<id>.json을 읽는다.
api: Claude API를 직접 부른다. 사람이 스킬을 돌리지 않아도 파이프라인 안에서 추출한다.
fixture: 테스트셋에 적어 둔 정답 요소를 그대로 쓴다.

어느 공급자든 값마다 줄 번호(line)와 원문 인용(quote)을 남기고,
verify()가 그 줄에 인용이 실제로 있는지 다시 확인한다.
"""
import json
import os

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


MODEL = os.environ.get("CLAIM_RELAY_MODEL", "claude-opus-5-5")


def _schema():
    """값 칸은 허용 낱말만 받도록 enum을 건다. 그래도 인용은 verify()가 다시 본다."""
    vocab = vocabulary()

    def item(values):
        return {"anyOf": [{"type": "null"}, {
            "type": "object",
            "properties": {"value": {"type": "string", "enum": sorted(values)},
                           "line": {"type": "integer"}, "quote": {"type": "string"}},
            "required": ["value", "line", "quote"], "additionalProperties": False}]}

    props = {f: item(vocab[f]) for f in FIELDS}
    props["modifiers"] = {"type": "array", "items": item(vocab["modifier"])["anyOf"][1]}
    return {"type": "object", "properties": props,
            "required": [*FIELDS, "modifiers"], "additionalProperties": False}


def _prompt(lines):
    skill = (ROOT / ".claude" / "skills" / "claim-relay" / "SKILL.md").read_text(encoding="utf-8")
    numbered = "\n".join(f"{i}: {line}" for i, line in enumerate(lines))
    return (f"아래 규칙의 3, 4번만 따라 진술 한 쪽의 요소를 뽑아 JSON으로만 답하라. "
            f"파일을 쓰거나 명령을 돌리지 않는다.\n\n{skill}\n\n진술(줄 번호: 문장)\n{numbered}")


def by_api(lines, client=None):
    """Claude API로 한 쪽 진술을 추출한다. 오류는 모두 StopError로 바꿔 사람 심사로 넘긴다."""
    try:
        import anthropic
    except ImportError:
        raise StopError("api 추출기에는 anthropic 패키지가 필요합니다(pip install anthropic)")
    try:
        client = client or anthropic.Anthropic()
        msg = client.messages.create(
            model=MODEL, max_tokens=2000,
            messages=[{"role": "user", "content": _prompt(lines)}],
            output_config={"format": {"type": "json_schema", "schema": _schema()}},
        )
    except anthropic.AuthenticationError:
        raise StopError("API 키가 맞지 않습니다")
    except anthropic.RateLimitError:
        raise StopError("API 호출 한도에 걸렸습니다")
    except anthropic.APIStatusError as e:
        raise StopError(f"API 오류 {e.status_code}")
    except anthropic.APIConnectionError:
        raise StopError("API에 연결하지 못했습니다")
    except TypeError as e:  # 자격 증명을 못 찾으면 SDK가 요청 때 TypeError를 낸다
        if "authentication" not in str(e):
            raise
        raise StopError("API 자격 증명이 없습니다(ANTHROPIC_API_KEY)")
    if msg.stop_reason == "refusal":
        raise StopError("모델이 추출을 거절했습니다")
    text = next((b.text for b in msg.content if b.type == "text"), None)
    try:
        return json.loads(text)
    except (TypeError, json.JSONDecodeError):
        raise StopError("API 응답을 JSON으로 읽지 못했습니다")


def make_extractor(name, gold=None, client=None):
    """(사고 ID, 진술 쪽, 줄 목록)을 받아 요소를 돌려주는 함수를 만든다."""
    if name == "cues":
        return lambda case_id, side, lines: by_cues(lines)
    if name == "skill":
        return lambda case_id, side, lines: from_skill(case_id).get(side) or {}
    if name == "api":
        return lambda case_id, side, lines: by_api(lines, client)
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
