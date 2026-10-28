"""에이전트 성적표. 평가 결과를 단계별로 나눠 핵심 지표, 사람에게 넘긴 건, 등급을 낸다."""
from datetime import date

from .config import load, settings
from .evaluate import SETS
from .pipeline import STAGES

ORDER = [agent for agent, _ in STAGES]


def reached(result):
    """멈춘 단계까지 거친 단계 목록."""
    stop = result["stop"]["agent"] if result["stop"] else None
    return ORDER[:ORDER.index(stop) + 1] if stop else ORDER


def owned(rules, ids):
    return sorted(set(rules) & set(ids))


def core_hit(agent, row, rules):
    want, got, res = row["want"], row["got"], row["result"]
    if agent == "intake":
        stopped = bool(res["stop"]) and res["stop"]["agent"] == "intake"
        return stopped == (want["route"] == "멈춤")
    if agent == "documents":
        return owned(rules, got["rules"]) == owned(rules, want["rules"])
    if agent == "fault":
        return owned(rules, got["rules"]) == owned(rules, want["rules"]) and got["chart"] == want["chart"]
    if agent == "route":
        return got["route"] == want["route"]
    if agent == "schedule":
        return got["schedule"] == want["schedule"]
    if agent == "notice":
        text = (res["notice"] or {}).get("customer")
        if want["route"] == "멈춤":
            return text is None
        return bool(text) and not any(p in text for p in settings()["forbidden_phrases"])


def leaked(agent, row, rules):
    """기대는 사람 쪽인데 자동 처리 후보로 샜고, 이 단계가 걸었어야 할 규칙을 놓친 건."""
    want, got = row["want"], row["got"]
    if want["route"] == "자동 처리 후보" or got["route"] != "자동 처리 후보":
        return False
    if agent == "route":  # 규칙은 다 맞게 걸렸는데 경로만 틀린 경우
        return sorted(got["rules"]) == sorted(want["rules"])
    return bool(set(owned(rules, want["rules"])) - set(got["rules"]))


def grade(core_pct, leak):
    for g in load("rules/grades.yaml")["grades"]:
        if core_pct >= g["min_core"] and (g["max_leak"] is None or leak <= g["max_leak"]):
            return g
    raise ValueError("등급 기준이 비었습니다")


def scorecard(ev):
    spec, badges = load("rules/grades.yaml")["agents"], load("agents.yaml")["agents"]
    drift = ev["metrics"]["drift"]
    cards = []
    for agent in ORDER:
        rules = spec[agent]["rules"]
        rows = [r for r in ev["rows"] if agent in reached(r["result"])]
        # 접수와 안내는 멈춘 건도 맞춰 본다(멈춘 건은 안내문을 내지 않아야 맞음)
        judged = ev["rows"] if agent in ("intake", "notice") else rows
        core = sum(core_hit(agent, r, rules) for r in judged)
        leak = sum(leaked(agent, r, rules) for r in rows)
        stops = sum(bool(r["result"]["stop"]) and r["result"]["stop"]["agent"] == agent for r in rows)
        handoff = sum(bool(owned(rules, r["got"]["rules"])) for r in rows) if rules else None
        pct = round(100 * core / len(judged), 1) if judged else 0.0
        g = grade(pct if not drift else 0, leak)
        cards.append({"agent": agent, "badge": badges[agent]["badge"], "name": badges[agent]["name"],
                      "core_name": spec[agent]["core"], "core": core, "judged": len(judged), "pct": pct,
                      "handled": len(rows), "stops": stops, "handoff": handoff, "leak": leak,
                      "grade": g["name"], "use": g["use"]})
    return {"dataset": ev["dataset"], "extractor": ev["extractor"], "repeat": ev["repeat"],
            "drift": drift, "cards": cards}


def report(cards_list, today=None):
    g = load("rules/grades.yaml")
    lines = [
        f"# 에이전트 성적표 ({today or date.today().isoformat()})",
        "",
        "단계 에이전트마다 자기 몫의 결과를 기대값과 맞춰 보고 등급을 매깁니다. 기준은 `rules/grades.yaml`에 있는 가상 기준입니다.",
        "",
        "| 등급 | 조건 | 결과를 쓰는 법 |",
        "|---|---|---|",
    ]
    for x in g["grades"]:
        cond = f"핵심 지표 {x['min_core']}% 이상" + (", 놓친 규칙으로 자동 처리 샌 건 0" if x["max_leak"] == 0 else "")
        lines.append(f"| {x['name']} | {cond if x['min_core'] else '그 밖'} | {x['use']} |")
    lines += ["", "반복 실행 차이가 1건이라도 있으면 모든 단계가 초급입니다. "
              "뒤 단계 점수는 앞 단계 오류를 물려받으므로, 먼저 등급이 떨어진 단계부터 봅니다.", ""]
    for sc in cards_list:
        lines += [
            f"## {SETS[sc['dataset']]}, 추출기 `{sc['extractor']}`",
            "",
            f"사례마다 {sc['repeat']}회 실행, 반복 실행 차이 {sc['drift']}건.",
            "",
            "| 사원증 | 에이전트 | 핵심 지표 | 결과 | 거친 건 | 멈춘 건 | 사람에게 넘긴 건 | 놓쳐서 자동으로 샌 건 | 등급 |",
            "|---|---|---|---|---|---|---|---|---|",
        ]
        for c in sc["cards"]:
            handoff = "해당 없음" if c["handoff"] is None else c["handoff"]
            lines.append(f"| {c['badge']} | {c['name']} | {c['core_name']} | {c['core']}/{c['judged']} ({c['pct']}%) "
                         f"| {c['handled']} | {c['stops']} | {handoff} | {c['leak']} | {c['grade']} |")
        lines.append("")
    return "\n".join(lines)
