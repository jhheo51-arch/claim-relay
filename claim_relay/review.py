"""담당자 판정 저장과 비교. 담당자가 실제로 내린 경로와 도표를 reviews/<id>.json에 남기고,
같은 사고를 파이프라인이 낸 결과와 맞춰 본다. 테스트셋 기대값과 달리 이 값은 사람이 정한 답이다."""
import json
from datetime import datetime

from .config import ROOT

REVIEWS = ROOT / "reviews"
ROUTES = ("자동 처리 후보", "사람 심사", "서류 보완", "멈춤")


def save(case_id, route, chart=None, base=None, reviewer="", note="", extractor="cues", folder=None):
    if route not in ROUTES:
        raise ValueError(f"경로는 {', '.join(ROUTES)} 중 하나여야 합니다")
    folder = folder or REVIEWS
    folder.mkdir(exist_ok=True)
    record = {"id": case_id, "route": route, "chart": chart, "base": base, "reviewer": reviewer,
              "note": note, "extractor": extractor,
              "decided_at": datetime.now().isoformat(timespec="seconds")}
    path = folder / f"{case_id}.json"
    path.write_text(json.dumps(record, ensure_ascii=False, indent=1), encoding="utf-8")
    return path


def load_all(folder=None):
    folder = folder or REVIEWS
    out = []
    for path in sorted(folder.glob("*.json")) if folder.exists() else []:
        with open(path, encoding="utf-8") as f:
            out.append(json.load(f))
    return out


def compare(reviews, results):
    """results: 사고 ID별 파이프라인 결과(summarize 꼴). 담당자가 사람 쪽으로 판정했는데
    파이프라인이 자동 처리 후보로 낸 건을 따로 센다."""
    rows = []
    for rv in reviews:
        r = results.get(rv["id"])
        if r is None:
            continue
        rows.append({
            "id": rv["id"], "review": rv["route"], "pipeline": r["route"],
            "route_ok": rv["route"] == r["route"],
            "chart_ok": rv["route"] != "자동 처리 후보" or rv["chart"] == r["chart"],
            "unsafe": rv["route"] != "자동 처리 후보" and r["route"] == "자동 처리 후보",
            "note": rv.get("note", ""),
        })
    return rows


def report(rows):
    lines = ["## 담당자 판정과 비교", ""]
    if not rows:
        return "\n".join(lines + [
            "저장된 담당자 판정이 아직 없습니다. `bin/claim-relay review <사고 ID> --route '사람 심사' --note ...`로 남기면 "
            "여기서 파이프라인 결과와 맞춰 봅니다. 테스트셋 기대값은 이 저장소가 정한 답이고, 담당자 판정은 사람이 정한 답이라 따로 셉니다.",
            ""])
    n = len(rows)
    lines += [
        f"판정 {n}건. 경로 일치 {sum(r['route_ok'] for r in rows)}/{n}, "
        f"자동 처리 후보 건의 도표 일치 {sum(r['chart_ok'] for r in rows)}/{n}, "
        f"담당자는 사람 쪽으로 봤는데 자동 처리 후보로 낸 건 {sum(r['unsafe'] for r in rows)}.",
        "",
        "| 사고 | 담당자 | 파이프라인 | 메모 |",
        "|---|---|---|---|",
    ]
    for r in rows:
        mark = "" if r["route_ok"] else " ✗"
        lines.append(f"| {r['id']} | {r['review']} | {r['pipeline']}{mark} | {r['note'] or '-'} |")
    return "\n".join(lines + [""])
