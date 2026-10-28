"""② 서류: 담보별 필요 서류를 대조하고 견적 총액과 상해등급을 읽는다."""
import re

from .config import settings

PATTERNS = {
    "수리견적서": ("estimate", r"총액\s*([\d,]+)\s*원"),
    "진단서": ("injury_grade", r"상해등급\s*(\d+)\s*급"),
}


def run(desk):
    it = desk.get("intake")
    s = settings()
    have = {a["doc"]: a["text"] for a in it["attachments"]}

    required = []
    for cov in it["coverage"]:
        for doc in s["required_docs"].get(cov, []):
            if doc not in required:
                required.append(doc)
    missing = [d for d in required if d not in have]

    values = {"estimate": None, "injury_grade": None}
    unreadable = []
    for doc, (key, pattern) in PATTERNS.items():
        if doc not in have:
            continue
        m = re.search(pattern, have[doc])
        if m:
            values[key] = int(m.group(1).replace(",", ""))
        else:
            # 읽지 못한 값은 0으로 채우지 않고 서류 보완으로 넘긴다
            unreadable.append(doc)

    limit = s["estimate_limit"].get(it["damage"])
    over = values["estimate"] is not None and limit is not None and values["estimate"] > limit

    desk.put("docs", {
        "required": required,
        "missing": missing,
        "unreadable": unreadable,
        "estimate": values["estimate"],
        "estimate_limit": limit,
        "estimate_over": over,
        "injury_grade": values["injury_grade"],
    })
