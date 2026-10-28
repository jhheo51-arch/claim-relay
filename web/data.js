window.DATA = {
 "generated": "2026-10-28",
 "extractor": "cues",
 "charts": {
  "version": "2026-10-28",
  "source": "https://accident.knia.or.kr/ranking",
  "moved_by": "Claude, 도표 상세 페이지의 '기본 과실' 칸을 옮김",
  "confirmed": true,
  "confirmed_by": "사용자, 2026-10-28 대조표 검토 후 진행 승인",
  "modifiers_confirmed": false,
  "speeding_ref": {
   "item": "현저한 과실 또는 중대한 과실",
   "add": [
    10,
    20
   ]
  },
  "charts": [
   {
    "id": "차41-1",
    "title": "양 차량 주행 중 후방 추돌",
    "place": "단일로",
    "A": {
     "move": "직진",
     "order": "후행",
     "from": "같은방향"
    },
    "B": {
     "move": [
      "직진",
      "정지"
     ],
     "order": "선행",
     "from": "같은방향"
    },
    "base": {
     "A": 100,
     "B": 0
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
    "modifiers": {
     "급정지": {
      "item": "이유 없는 급 정지",
      "party": "B",
      "add": 30
     }
    }
   },
   {
    "id": "차43-2",
    "title": "후행 직진 대 선행 진로변경",
    "place": "단일로",
    "A": {
     "move": "직진",
     "order": "후행",
     "from": "같은방향"
    },
    "B": {
     "move": "진로변경",
     "order": "선행",
     "from": "같은방향"
    },
    "base": {
     "A": 30,
     "B": 70
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
    "modifiers": {
     "방향지시등 미작동": {
      "item": "진로변경 신호불이행·지연",
      "party": "B",
      "add": 10
     },
     "진로변경 금지장소": {
      "item": "진로변경 금지장소",
      "party": "B",
      "add": 20
     }
    }
   },
   {
    "id": "차43-3",
    "title": "좌우 동시 차로 변경 사고",
    "place": "단일로",
    "A": {
     "move": "진로변경",
     "from": "같은방향"
    },
    "B": {
     "move": "진로변경",
     "from": "같은방향"
    },
    "base": {
     "A": 50,
     "B": 50
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
    "modifiers": {
     "방향지시등 미작동": {
      "item": "진로변경 신호불이행·지연",
      "party": "AB",
      "add": 10
     },
     "진로변경 금지장소": {
      "item": "진로변경 금지장소",
      "party": "AB",
      "add": 20
     }
    }
   },
   {
    "id": "차43-1",
    "title": "차로 감소 도로(합류) 사고",
    "place": "합류지점",
    "A": {
     "move": "직진",
     "from": "같은방향"
    },
    "B": {
     "move": "합류",
     "from": "같은방향"
    },
    "base": {
     "A": 40,
     "B": 60
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1"
   },
   {
    "id": "차19-1",
    "title": "후행 직진 대 선행 좌(우)회전",
    "place": "신호없는교차로",
    "A": {
     "move": "직진",
     "order": "후행",
     "from": "같은방향"
    },
    "B": {
     "move": [
      "좌회전",
      "우회전"
     ],
     "order": "선행",
     "from": "같은방향"
    },
    "base": {
     "A": 20,
     "B": 80
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
    "modifiers": {
     "방향지시등 미작동": {
      "item": "진로변경신호 불이행·지연",
      "party": "B",
      "add": 10
     }
    }
   },
   {
    "id": "차16-1",
    "title": "왼쪽 직진 대 오른쪽 좌회전",
    "place": "신호없는교차로",
    "A": {
     "move": "직진",
     "from": "오른쪽"
    },
    "B": {
     "move": "좌회전",
     "from": "왼쪽"
    },
    "base": {
     "A": 40,
     "B": 60
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
    "modifiers": {
     "방향지시등 미작동": {
      "item": "신호불이행·지연",
      "party": "B",
      "add": 10
     }
    }
   },
   {
    "id": "차13-1",
    "title": "오른쪽 우회전 대 왼쪽 직진",
    "place": "신호없는교차로",
    "A": {
     "move": "우회전",
     "from": "왼쪽"
    },
    "B": {
     "move": "직진",
     "from": "오른쪽"
    },
    "base": {
     "A": 60,
     "B": 40
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1"
   },
   {
    "id": "차15-1",
    "title": "직진 대 맞은편 좌회전",
    "place": "신호없는교차로",
    "A": {
     "move": "직진",
     "from": "맞은편"
    },
    "B": {
     "move": "좌회전",
     "from": "맞은편"
    },
    "base": {
     "A": 30,
     "B": 70
    },
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
    "modifiers": {
     "방향지시등 미작동": {
      "item": "신호불이행·지연",
      "party": "B",
      "add": 10
     }
    }
   }
  ]
 },
 "rules": [
  {
   "id": "R01",
   "when": "missing_docs",
   "route": "서류 보완",
   "customer": "필요한 서류가 아직 없습니다",
   "staff": "담보별 필요 서류 중 빠진 것이 있음"
  },
  {
   "id": "R02",
   "when": "not_car_to_car",
   "route": "사람 심사",
   "customer": "차와 차 사이 사고가 아니어서 담당자가 확인합니다",
   "staff": "차대차 외 사고는 자동 경로 대상이 아님"
  },
  {
   "id": "R03",
   "when": "severe_injury",
   "route": "사람 심사",
   "customer": "부상 정도를 담당자가 확인합니다",
   "staff": "상해등급 1~11급(중상)은 사람 심사"
  },
  {
   "id": "R04",
   "when": "no_evidence",
   "route": "사람 심사",
   "customer": "사고 내용을 담당자가 다시 확인합니다",
   "staff": "AI가 뽑은 값 중 원문 줄에서 다시 찾지 못한 값이 있음"
  },
  {
   "id": "R05",
   "when": "statement_conflict",
   "route": "사람 심사",
   "customer": "두 분의 사고 설명이 서로 달라 담당자가 확인합니다",
   "staff": "양측 진술이 사고 요소에서 엇갈림"
  },
  {
   "id": "R06",
   "when": "no_chart",
   "route": "사람 심사",
   "customer": "사고 유형을 담당자가 확인합니다",
   "staff": "옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
  },
  {
   "id": "R07",
   "when": "modifiers_claimed",
   "route": "사람 심사",
   "customer": "과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다",
   "staff": "진술에 수정요소 주장이 있음(자동 판단 안 함)"
  },
  {
   "id": "R08",
   "when": "estimate_mismatch",
   "route": "사람 심사",
   "customer": "수리 견적을 담당자가 확인합니다",
   "staff": "수리 견적이 신고한 피해 정도의 상한을 넘음"
  },
  {
   "id": "R09",
   "when": "own_damage",
   "route": "사람 심사",
   "customer": "자기차량손해 청구는 담당자가 확인합니다",
   "staff": "자차 담보는 이번 범위 밖"
  }
 ],
 "agents": {
  "intake": {
   "badge": "AG-01",
   "name": "접수 에이전트",
   "scope": "꼴 검사, 빈 칸 검사, 개인정보 꼴 차단",
   "read": [
    "raw"
   ],
   "write": [
    "intake"
   ]
  },
  "documents": {
   "badge": "AG-02",
   "name": "서류 에이전트",
   "scope": "담보별 필요 서류 대조, 견적과 진단 값 정리",
   "read": [
    "intake"
   ],
   "write": [
    "docs"
   ]
  },
  "fault": {
   "badge": "AG-03",
   "name": "과실 에이전트",
   "scope": "진술 요소 추출(AI 또는 단서), 근거 확인, 진술 대조, 도표 고르기. 업계 과실비율 에이전트가 맡는 자리",
   "read": [
    "intake"
   ],
   "write": [
    "elements",
    "fault"
   ]
  },
  "route": {
   "badge": "AG-04",
   "name": "경로 에이전트",
   "scope": "규칙표로 심사 경로 판정",
   "read": [
    "intake",
    "docs",
    "elements",
    "fault"
   ],
   "write": [
    "route"
   ]
  },
  "schedule": {
   "badge": "AG-05",
   "name": "일정 에이전트",
   "scope": "경상 대인 8주 일정 계산",
   "read": [
    "intake",
    "docs"
   ],
   "write": [
    "schedule"
   ]
  },
  "notice": {
   "badge": "AG-06",
   "name": "안내 에이전트",
   "scope": "고객 안내문 작성과 숫자, 금지 표현 검사",
   "read": [
    "intake",
    "docs",
    "fault",
    "route",
    "schedule"
   ],
   "write": [
    "notice"
   ]
  }
 },
 "cases": [
  {
   "case": {
    "id": "C001",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 멈춰 서 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 멈춰 서 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차41-1 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": 100,
    "schedule": null
   },
   "result": {
    "id": "C001",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": {
     "고객": 100,
     "상대": 0
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "정지",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "정지",
       "line": 2,
       "quote": "멈춰"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "멈춰"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C001] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 100%, 상대 0% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차41-1",
       "title": "양 차량 주행 중 후방 추돌",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 100,
        "상대": 0
       }
      },
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C002",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 멈춰 서 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 멈춰 서 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차41-1 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": 0,
    "schedule": null
   },
   "result": {
    "id": "C002",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": {
     "고객": 0,
     "상대": 100
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "정지",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "멈춰"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "정지",
       "line": 2,
       "quote": "멈춰"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C002] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 0%, 상대 100% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차41-1",
       "title": "양 차량 주행 중 후방 추돌",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 0,
        "상대": 100
       }
      },
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C003",
    "date": "2026-10-03",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차43-2 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C003",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C003] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C004",
    "date": "2026-10-03",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차43-2 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 70,
    "schedule": null
   },
   "result": {
    "id": "C004",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 70,
     "상대": 30
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C004] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 70,
        "상대": 30
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C005",
    "date": "2026-10-04",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차43-3 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "C005",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C005] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C006",
    "date": "2026-10-04",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차43-3 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "C006",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C006] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C007",
    "date": "2026-10-05",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 합류하고 있었습니다."
     },
     "상대": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 합류하고 있었습니다.\n상대 차는 같은 방향에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차43-1 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "C007",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 2,
       "quote": "합류하"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "합류",
       "line": 1,
       "quote": "합류하"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C007] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차43-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-1",
       "title": "차로 감소 도로(합류) 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C008",
    "date": "2026-10-05",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 합류하고 있었습니다.\n상대 차는 같은 방향에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 합류하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차43-1 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "C008",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "합류",
       "line": 1,
       "quote": "합류하"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 2,
       "quote": "합류하"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C008] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차43-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-1",
       "title": "차로 감소 도로(합류) 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C009",
    "date": "2026-10-06",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 앞서 좌회전하고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차19-1 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": 20,
    "schedule": null
   },
   "result": {
    "id": "C009",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": {
     "고객": 20,
     "상대": 80
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C009] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 20%, 상대 80% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 20,
        "상대": 80
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C010",
    "date": "2026-10-06",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 앞서 좌회전하고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 좌회전하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차19-1 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": 80,
    "schedule": null
   },
   "result": {
    "id": "C010",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": {
     "고객": 80,
     "상대": 20
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C010] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 80%, 상대 20% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 80,
        "상대": 20
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C011",
    "date": "2026-10-07",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차16-1 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "C011",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C011] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차16-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차16-1",
       "title": "왼쪽 직진 대 오른쪽 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": [
        "차16-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C012",
    "date": "2026-10-07",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 좌회전하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차16-1 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "C012",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C012] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차16-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차16-1",
       "title": "왼쪽 직진 대 오른쪽 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": [
        "차16-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C013",
    "date": "2026-10-08",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 우회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 우회전하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차13-1 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "C013",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "우회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "우회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "우회전",
       "line": 1,
       "quote": "우회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "우회전",
       "line": 2,
       "quote": "우회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C013] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차13-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차13-1",
       "title": "오른쪽 우회전 대 왼쪽 직진",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차13-1"
       ],
       "상대": [
        "차13-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C014",
    "date": "2026-10-08",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 우회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 우회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차13-1 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "C014",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "우회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "우회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "우회전",
       "line": 2,
       "quote": "우회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "우회전",
       "line": 1,
       "quote": "우회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C014] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차13-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차13-1",
       "title": "오른쪽 우회전 대 왼쪽 직진",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차13-1"
       ],
       "상대": [
        "차13-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C015",
    "date": "2026-10-09",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 맞은편에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 맞은편에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차15-1 고객A",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C015",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C015] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C016",
    "date": "2026-10-09",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 맞은편에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 맞은편에서 좌회전하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 2,000,000원"
     }
    ]
   },
   "expect": {
    "tag": "정상 차15-1 고객B",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": 70,
    "schedule": null
   },
   "result": {
    "id": "C016",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": {
     "고객": 70,
     "상대": 30
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C016] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 70,
        "상대": 30
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 2000000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C017",
    "date": "2026-09-12",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 12급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "경상 12급 일정",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 70,
    "schedule": [
     "2026-11-07",
     "2026-10-31"
    ]
   },
   "result": {
    "id": "C017",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 70,
     "상대": 30
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 12,
     "limit_date": "2026-11-07",
     "notice_date": "2026-10-31",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[C017] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-11-07입니다. 그 뒤에도 치료를 받으려면 2026-10-31까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 70,
        "상대": 30
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 12,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 7,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C018",
    "date": "2026-10-20",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 14급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "경상 14급 일정",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 70,
    "schedule": [
     "2026-12-15",
     "2026-12-08"
    ]
   },
   "result": {
    "id": "C018",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 70,
     "상대": 30
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 14,
     "limit_date": "2026-12-15",
     "notice_date": "2026-12-08",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[C018] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-15입니다. 그 뒤에도 치료를 받으려면 2026-12-08까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 70,
        "상대": 30
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 14,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 7,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C019",
    "date": "2026-10-05",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 13급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "경상 13급 일정",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 70,
    "schedule": [
     "2026-11-30",
     "2026-11-23"
    ]
   },
   "result": {
    "id": "C019",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 70,
     "상대": 30
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 13,
     "limit_date": "2026-11-30",
     "notice_date": "2026-11-23",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[C019] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-11-30입니다. 그 뒤에도 치료를 받으려면 2026-11-23까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 70,
        "상대": 30
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 7,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C020",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": []
   },
   "expect": {
    "tag": "견적서 없음",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C020",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C020] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 수리견적서\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C021",
    "date": "2026-10-01",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 멈춰 서 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 멈춰 서 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 900,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 13급"
     }
    ]
   },
   "expect": {
    "tag": "진료비내역 없음",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차41-1",
    "base": 0,
    "schedule": [
     "2026-11-26",
     "2026-11-19"
    ]
   },
   "result": {
    "id": "C021",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차41-1",
    "base": {
     "고객": 0,
     "상대": 100
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "정지",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "멈춰"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "정지",
       "line": 2,
       "quote": "멈춰"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "진료비내역"
    ],
    "schedule": {
     "grade": 13,
     "limit_date": "2026-11-26",
     "notice_date": "2026-11-19",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[C021] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 진료비내역\n예상 과실: 고객님 0%, 상대 100% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-11-26입니다. 그 뒤에도 치료를 받으려면 2026-11-19까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차41-1",
       "title": "양 차량 주행 중 후방 추돌",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 0,
        "상대": 100
       }
      },
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 900000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 8,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C022",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼\n금액은 추후 안내"
     }
    ]
   },
   "expect": {
    "tag": "견적 총액 못 읽음",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차16-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "C022",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차16-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C022] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 수리견적서\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차16-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차16-1",
       "title": "왼쪽 직진 대 오른쪽 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": [
        "차16-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C023",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": []
   },
   "expect": {
    "tag": "서류 없음과 진술 엇갈림",
    "route": "서류 보완",
    "rules": [
     "R01",
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C023",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01",
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "직진",
      "상대 진술": "진로변경"
     },
     {
      "item": "고객 차 순서",
      "고객 진술": "후행",
      "상대 진술": "선행"
     },
     {
      "item": "상대 차 진행",
      "고객 진술": "진로변경",
      "상대 진술": "직진"
     },
     {
      "item": "상대 차 순서",
      "고객 진술": "선행",
      "상대 진술": "후행"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C023] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다\n보내 주실 서류: 수리견적서",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음",
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "직진",
        "상대 진술": "진로변경"
       },
       {
        "item": "고객 차 순서",
        "고객 진술": "후행",
        "상대 진술": "선행"
       },
       {
        "item": "상대 차 진행",
        "고객 진술": "진로변경",
        "상대 진술": "직진"
       },
       {
        "item": "상대 차 순서",
        "고객 진술": "선행",
        "상대 진술": "후행"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 6,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C024",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "둘 다 직진 주장",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C024",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "직진",
      "상대 진술": "진로변경"
     },
     {
      "item": "고객 차 순서",
      "고객 진술": "후행",
      "상대 진술": "선행"
     },
     {
      "item": "상대 차 진행",
      "고객 진술": "진로변경",
      "상대 진술": "직진"
     },
     {
      "item": "상대 차 순서",
      "고객 진술": "선행",
      "상대 진술": "후행"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C024] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "직진",
        "상대 진술": "진로변경"
       },
       {
        "item": "고객 차 순서",
        "고객 진술": "후행",
        "상대 진술": "선행"
       },
       {
        "item": "상대 차 진행",
        "고객 진술": "진로변경",
        "상대 진술": "직진"
       },
       {
        "item": "상대 차 순서",
        "고객 진술": "선행",
        "상대 진술": "후행"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C025",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 멈춰 서 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 직진하고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "앞뒤 순서 엇갈림",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C025",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "정지",
      "상대 진술": "직진"
     },
     {
      "item": "고객 차 순서",
      "고객 진술": "선행",
      "상대 진술": "후행"
     },
     {
      "item": "상대 차 순서",
      "고객 진술": "후행",
      "상대 진술": "선행"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "멈춰"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C025] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "정지",
        "상대 진술": "직진"
       },
       {
        "item": "고객 차 순서",
        "고객 진술": "선행",
        "상대 진술": "후행"
       },
       {
        "item": "상대 차 순서",
        "고객 진술": "후행",
        "상대 진술": "선행"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C026",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 오른쪽 도로에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "온 쪽 엇갈림",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C026",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "서로 온 쪽",
      "고객 진술": "오른쪽",
      "상대 진술": "왼쪽"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C026] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": []
      },
      "conflicts": [
       {
        "item": "서로 온 쪽",
        "고객 진술": "오른쪽",
        "상대 진술": "왼쪽"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C027",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 합류하고 있었습니다."
     },
     "상대": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 합류하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "둘 다 본선 주장",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C027",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "직진",
      "상대 진술": "합류"
     },
     {
      "item": "상대 차 진행",
      "고객 진술": "합류",
      "상대 진술": "직진"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 2,
       "quote": "합류하"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 2,
       "quote": "합류하"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C027] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "직진",
        "상대 진술": "합류"
       },
       {
        "item": "상대 차 진행",
        "고객 진술": "합류",
        "상대 진술": "직진"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C028",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 있는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 맞은편에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 있는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 맞은편에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "신호 교차로(도표 밖)",
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C028",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C028] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C029",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 후진하고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 후진하고 있었습니다.\n상대 차는 같은 방향에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "후진 사고(도표 밖)",
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C029",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C029] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C030",
    "date": "2026-10-02",
    "kind": "차대사람",
    "coverage": [
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 보행자는 오른쪽 도로에서 길을 건너고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 길을 건너고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 9급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "차대사람 중상",
    "route": "사람 심사",
    "rules": [
     "R02",
     "R03",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C030",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R02",
     "R03",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": null,
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C030] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 차와 차 사이 사고가 아니어서 담당자가 확인합니다\n- 부상 정도를 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R02 차대차 외 사고는 자동 경로 대상이 아님",
       "R03 상해등급 1~11급(중상)은 사람 심사",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": 9,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C031",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다.\n상대 차는 깜빡이를 켜지 않았습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "깜빡이 주장",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C031",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [
     "방향지시등 미작동"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "방향지시등 미작동"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": [
       {
        "value": "방향지시등 미작동",
        "line": 3,
        "quote": "깜빡이를 켜지 않"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C031] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "방향지시등 미작동"
      ],
      "modifier_refs": [
       {
        "claim": "방향지시등 미작동",
        "item": "진로변경 신호불이행·지연",
        "against": "상대",
        "add": [
         10
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C032",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 멈춰 서 있었습니다.\n상대 차가 이유 없이 급정거했습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 멈춰 서 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "급정거 주장",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차41-1",
    "base": 100,
    "schedule": null
   },
   "result": {
    "id": "C032",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차41-1",
    "base": {
     "고객": 100,
     "상대": 0
    },
    "conflicts": [],
    "modifiers": [
     "급정지"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "정지",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "급정지"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "정지",
       "line": 2,
       "quote": "멈춰"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": [
       {
        "value": "급정지",
        "line": 3,
        "quote": "급정거"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "멈춰"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C032] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n예상 과실: 고객님 100%, 상대 0% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차41-1",
       "title": "양 차량 주행 중 후방 추돌",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 100,
        "상대": 0
       }
      },
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "급정지"
      ],
      "modifier_refs": [
       {
        "claim": "급정지",
        "item": "이유 없는 급 정지",
        "against": "상대",
        "add": [
         30
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C033",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다.\n사고 난 곳은 실선 구간이었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "실선 주장",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C033",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [
     "진로변경 금지장소"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "진로변경 금지장소"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": [
       {
        "value": "진로변경 금지장소",
        "line": 3,
        "quote": "실선"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C033] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "진로변경 금지장소"
      ],
      "modifier_refs": [
       {
        "claim": "진로변경 금지장소",
        "item": "진로변경 금지장소",
        "against": "상대",
        "add": [
         20
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C034",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 앞서 좌회전하고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 2,500,000원"
     }
    ]
   },
   "expect": {
    "tag": "경미 견적 과다",
    "route": "사람 심사",
    "rules": [
     "R08"
    ],
    "chart": "차19-1",
    "base": 20,
    "schedule": null
   },
   "result": {
    "id": "C034",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R08"
    ],
    "chart": "차19-1",
    "base": {
     "고객": 20,
     "상대": 80
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C034] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 수리 견적을 담당자가 확인합니다\n예상 과실: 고객님 20%, 상대 80% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R08 수리 견적이 신고한 피해 정도의 상한을 넘음"
      ],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 20,
        "상대": 80
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 2500000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C035",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "보통",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 우회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 우회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 9,000,000원"
     }
    ]
   },
   "expect": {
    "tag": "보통 견적 과다",
    "route": "사람 심사",
    "rules": [
     "R08"
    ],
    "chart": "차13-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "C035",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R08"
    ],
    "chart": "차13-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "우회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "우회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "우회전",
       "line": 2,
       "quote": "우회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "우회전",
       "line": 1,
       "quote": "우회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C035] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 수리 견적을 담당자가 확인합니다\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차13-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R08 수리 견적이 신고한 피해 정도의 상한을 넘음"
      ],
      "chart": {
       "id": "차13-1",
       "title": "오른쪽 우회전 대 왼쪽 직진",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차13-1"
       ],
       "상대": [
        "차13-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 9000000,
      "estimate_limit": 8000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C036",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 5급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "중상 5급",
    "route": "사람 심사",
    "rules": [
     "R03"
    ],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "C036",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R03"
    ],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C036] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 부상 정도를 담당자가 확인합니다\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R03 상해등급 1~11급(중상)은 사람 심사"
      ],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 5,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C037",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 11급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "중상 11급",
    "route": "사람 심사",
    "rules": [
     "R03"
    ],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "C037",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R03"
    ],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C037] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 부상 정도를 담당자가 확인합니다\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R03 상해등급 1~11급(중상)은 사람 심사"
      ],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 11,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C038",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "자차"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 맞은편에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 맞은편에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "자차 청구",
    "route": "사람 심사",
    "rules": [
     "R09"
    ],
    "chart": "차15-1",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C038",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R09"
    ],
    "chart": "차15-1",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[C038] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 자기차량손해 청구는 담당자가 확인합니다\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R09 자차 담보는 이번 범위 밖"
      ],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C039",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 합류하고 있었습니다.\n연락은 010-1234-5678로 주세요."
     },
     "상대": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 합류하고 있었습니다.\n상대 차는 같은 방향에서 직진하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "전화번호 노출",
    "route": "멈춤",
    "rules": [],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C039",
    "status": "멈춤",
    "stop": {
     "agent": "intake",
     "badge": "AG-01",
     "reason": "개인정보 꼴(전화번호)이 보여 실행을 멈춥니다"
    },
    "route": "멈춤",
    "rules": [],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": null,
    "evidence": null,
    "missing_docs": [],
    "schedule": null,
    "notice": null
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": []
    }
   ]
  },
  {
   "case": {
    "id": "C040",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 합류하고 있었습니다.\n상대 차는 같은 방향에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": ""
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     }
    ]
   },
   "expect": {
    "tag": "상대 진술 없음",
    "route": "멈춤",
    "rules": [],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "C040",
    "status": "멈춤",
    "stop": {
     "agent": "intake",
     "badge": "AG-01",
     "reason": "빈 칸이 있어 접수할 수 없습니다: parties.상대.statement"
    },
    "route": "멈춤",
    "rules": [],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": null,
    "evidence": null,
    "missing_docs": [],
    "schedule": null,
    "notice": null
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": []
    }
   ]
  },
  {
   "case": {
    "id": "C041",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "자차"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 맞은편에서 좌회전하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 좌회전하고 있었습니다.\n상대 차는 맞은편에서 직진하고 있었습니다."
     }
    },
    "attachments": []
   },
   "expect": {
    "tag": "자차 견적서 없음",
    "route": "서류 보완",
    "rules": [
     "R01",
     "R09"
    ],
    "chart": "차15-1",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C041",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01",
     "R09"
    ],
    "chart": "차15-1",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 2,
       "quote": "맞은편"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C041] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n- 자기차량손해 청구는 담당자가 확인합니다\n보내 주실 서류: 수리견적서\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음",
       "R09 자차 담보는 이번 범위 밖"
      ],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 6,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C042",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 차로를 바꾸고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "진단서 없음",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "C042",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "진단서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C042] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 진단서\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C043",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 앞서 좌회전하고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 좌회전하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,200,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n등급은 재진 후 기재"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "상해등급 못 읽음",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차19-1",
    "base": 80,
    "schedule": null
   },
   "result": {
    "id": "C043",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차19-1",
    "base": {
     "고객": 80,
     "상대": 20
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "좌회전"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "진단서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C043] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 진단서\n예상 과실: 고객님 80%, 상대 20% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 80,
        "상대": 20
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C044",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 우회전하고 있었습니다.\n상대 차는 왼쪽 도로에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": "신호등이 없는 교차로였습니다.\n저는 직진하고 있었습니다.\n상대 차는 오른쪽 도로에서 우회전하고 있었습니다."
     }
    },
    "attachments": []
   },
   "expect": {
    "tag": "대물 대인 서류 모두 없음",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차13-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "C044",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차13-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "우회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "우회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "우회전",
       "line": 1,
       "quote": "우회전"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 2,
       "quote": "왼쪽 도로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "우회전",
       "line": 2,
       "quote": "우회전"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 2,
       "quote": "오른쪽 도로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서",
     "진단서",
     "진료비내역"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C044] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 수리견적서, 진단서, 진료비내역\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차13-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차13-1",
       "title": "오른쪽 우회전 대 왼쪽 직진",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차13-1"
       ],
       "상대": [
        "차13-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C045",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 합류하고 있었습니다.\n상대 차는 같은 방향에서 직진하고 있었습니다."
     },
     "상대": {
      "statement": "차로가 줄어드는 합류 구간이었습니다.\n저는 직진하고 있었습니다.\n상대 차는 같은 방향에서 합류하고 있었습니다."
     }
    },
    "attachments": [
     {
      "doc": "사고 사진",
      "text": "뒤범퍼 사진 3장"
     }
    ]
   },
   "expect": {
    "tag": "견적서 대신 사진만",
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차43-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "C045",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01"
    ],
    "chart": "차43-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "합류",
       "line": 1,
       "quote": "합류하"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 2,
       "quote": "합류하"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C045] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 수리견적서\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차43-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음"
      ],
      "chart": {
       "id": "차43-1",
       "title": "차로 감소 도로(합류) 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 5,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "C046",
    "date": "2026-10-02",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 뒤따라 직진하고 있었습니다.\n상대 차는 같은 방향에서 앞서 차로를 바꾸고 있었습니다.\n상대 차는 깜빡이를 켜지 않았습니다."
     },
     "상대": {
      "statement": "직선 도로를 달리던 중이었습니다.\n저는 앞서 차로를 바꾸고 있었습니다.\n상대 차는 같은 방향에서 뒤따라 직진하고 있었습니다."
     }
    },
    "attachments": []
   },
   "expect": {
    "tag": "깜빡이 주장과 견적서 없음",
    "route": "서류 보완",
    "rules": [
     "R01",
     "R07"
    ],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "C046",
    "status": "완료",
    "stop": null,
    "route": "서류 보완",
    "rules": [
     "R01",
     "R07"
    ],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [
     "방향지시등 미작동"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "방향지시등 미작동"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤따라"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": [
       {
        "value": "방향지시등 미작동",
        "line": 3,
        "quote": "깜빡이를 켜지 않"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차로를 바꾸"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "직진"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [
     "수리견적서"
    ],
    "schedule": null,
    "notice": {
     "customer": "[C046] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n보내 주실 서류: 수리견적서\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "서류 보완",
      "rules": [
       "R01 담보별 필요 서류 중 빠진 것이 있음",
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "방향지시등 미작동"
      ],
      "modifier_refs": [
       {
        "claim": "방향지시등 미작동",
        "item": "진로변경 신호불이행·지연",
        "against": "상대",
        "add": [
         10
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 6,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ]
  },
  {
   "case": {
    "id": "S001",
    "date": "2026-10-15",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "퇴근길에 편도 2차로 직선 도로의 2차로를 달리고 있었습니다.\n저는 그대로 쭉 가던 중이었습니다.\n1차로에 있던 차가 갑자기 제 앞으로 끼어들었습니다."
     },
     "상대": {
      "statement": "직선 도로에서 같은 방향으로 가다가 앞에서 2차로로 차로를 바꾸고 있었습니다.\n뒤에서 곧장 오던 차와 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 앞범퍼, 우측 펜더\n총액 1,350,000원"
     }
    ]
   },
   "expect": null,
   "result": {
    "id": "S001",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "그대로 쭉 가던"
      },
      "me_order": {
       "value": "후행",
       "line": 2,
       "quote": "제 앞으로 끼어들었습니다"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "끼어들었습니다"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "제 앞으로"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "편도 2차로"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "차로를 바꾸고"
      },
      "me_order": {
       "value": "선행",
       "line": 0,
       "quote": "앞에서"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "곧장 오던"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "같은 방향으로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[S001] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1350000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "S001",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[S001] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1350000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N001",
    "date": "2026-10-08",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "퇴근 시간이라 직선 도로가 꽉 막혀 있었어요.\n앞차를 따라가다 완전히 멈춰 있었는데\n뒤에 오던 차가 그대로 와서 제 차 뒤를 받았습니다."
     },
     "상대": {
      "statement": "편도 3차로 직선도로에서 앞차와 같은 차로로 가고 있었습니다.\n앞차가 선 걸 늦게 봤습니다.\n브레이크를 밟았지만 앞차 뒤범퍼를 들이받았습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 900,000원"
     }
    ]
   },
   "expect": {
    "tag": "정체 중 뒤에서 받힘(차41-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": 0,
    "schedule": null
   },
   "result": {
    "id": "N001",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": {
     "고객": 0,
     "상대": 100
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "정지",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "완전히 멈춰 있었는데"
      },
      "me_order": {
       "value": "선행",
       "line": 2,
       "quote": "제 차 뒤를 받았습니다"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "그대로 와서"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤에 오던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "뒤에 오던 차가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선도로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "같은 차로로 가고 있었습니다"
      },
      "me_order": {
       "value": "후행",
       "line": 2,
       "quote": "앞차 뒤범퍼를 들이받았습니다"
      },
      "other_move": {
       "value": "정지",
       "line": 1,
       "quote": "앞차가 선 걸"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "앞차와 같은 차로로"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N001] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 0%, 상대 100% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차41-1",
       "title": "양 차량 주행 중 후방 추돌",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 0,
        "상대": 100
       }
      },
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 900000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N001",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N001] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 900000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N002",
    "date": "2026-10-06",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "편도 2차로 직선 구간 2차로로 출근하던 중이었습니다.\n제 차로를 따라 계속 달리고 있었는데\n옆 1차로 차가 갑자기 제 앞으로 들어오면서 제 차 앞부분과 그 차 뒷문이 부딪쳤습니다."
     },
     "상대": {
      "statement": "직선 도로 1차로에서 달리다 2차로로 옮기려고 했습니다.\n옆 차로 뒤쪽 차와 거리가 충분하다고 생각했는데\n넘어가는 도중에 뒤에서 온 차가 제 차 옆을 받았습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,400,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 12급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "옆 차로 차가 끼어듦, 경상 12급(차43-2 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 30,
    "schedule": [
     "2026-12-01",
     "2026-11-24"
    ]
   },
   "result": {
    "id": "N002",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "제 차로를 따라 계속 달리고"
      },
      "me_order": {
       "value": "후행",
       "line": 2,
       "quote": "제 앞으로 들어오면서"
      },
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "제 앞으로 들어오면서"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "제 앞으로"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "옆 1차로 차가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "2차로로 옮기려고"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "옆 차로 뒤쪽 차"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "뒤에서 온 차가"
      },
      "other_order": {
       "value": "후행",
       "line": 2,
       "quote": "뒤에서 온 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "옆 차로 뒤쪽 차"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 12,
     "limit_date": "2026-12-01",
     "notice_date": "2026-11-24",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[N002] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-01입니다. 그 뒤에도 치료를 받으려면 2026-11-24까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1400000,
      "estimate_limit": 2000000,
      "injury_grade": 12,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 7,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N002",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 12,
     "limit_date": "2026-12-01",
     "notice_date": "2026-11-24",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[N002] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-01입니다. 그 뒤에도 치료를 받으려면 2026-11-24까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1400000,
      "estimate_limit": 2000000,
      "injury_grade": 12,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 6,
      "longest": 50,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N003",
    "date": "2026-10-11",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "보통",
    "parties": {
     "고객": {
      "statement": "편도 3차로 직선 도로였습니다.\n저는 1차로에서 2차로로 옮겨 가고 있었습니다.\n그런데 같은 쪽으로 가던 3차로 차도 동시에 2차로로 들어오면서 가운데서 부딪쳤어요."
     },
     "상대": {
      "statement": "직선 도로 3차로에서 2차로로 차선을 바꾸던 중이었습니다.\n같은 방향 1차로 차가 같은 때에 2차로로 넘어오는 걸 못 봤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 3,400,000원"
     }
    ]
   },
   "expect": {
    "tag": "양쪽에서 동시에 가운데 차로로(차43-3)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "N003",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "1차로에서 2차로로 옮겨 가고"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "동시에 2차로로 들어오면서"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 쪽으로 가던"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "차선을 바꾸던"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "2차로로 넘어오는"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N003] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 3400000,
      "estimate_limit": 8000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N003",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N003] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 3400000,
      "estimate_limit": 8000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N004",
    "date": "2026-10-14",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로가 줄어드는 구간이었고 제 차로가 끝나 가고 있었습니다.\n저는 옆 차로로 합류하려다 뒤에서 오는 차를 못 봤습니다.\n옆 차로로 그대로 오던 차와 제 차 오른쪽이 부딪쳤습니다."
     },
     "상대": {
      "statement": "합류 구간 바로 앞에서 제 차로를 그대로 달리고 있었습니다.\n오른쪽 끝 차로 차가 제 앞으로 밀고 들어와 피할 틈이 없었습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,800,000원"
     }
    ]
   },
   "expect": {
    "tag": "끝나는 차로에서 합류(차43-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "N004",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "합류",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "차로가 줄어드는"
      },
      "me_move": {
       "value": "합류",
       "line": 1,
       "quote": "합류하려다"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "뒤에서 오는 차를 못 봤습니다"
      },
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "그대로 오던 차"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 오는 차"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "옆 차로로 그대로 오던 차"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "제 차로를 그대로 달리고"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "제 앞으로 밀고 들어와"
      },
      "other_move": {
       "value": "합류",
       "line": 1,
       "quote": "제 앞으로 밀고 들어와"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "제 앞으로"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "오른쪽 끝 차로 차가"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N004] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차43-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-1",
       "title": "차로 감소 도로(합류) 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1800000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N004",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": "후행",
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "차로가 줄어드는"
      },
      "me_move": {
       "value": "합류",
       "line": 1,
       "quote": "합류하"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서"
      },
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "합류 구간"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N004] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1800000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N005",
    "date": "2026-10-17",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 작은 사거리를 지나던 중이었습니다.\n앞차를 따라 똑바로 가고 있었는데\n앞차가 깜빡이를 켜고 갑자기 왼쪽으로 꺾어서 제 차 앞부분이 그 차 옆을 받았습니다."
     },
     "상대": {
      "statement": "신호 없는 교차로에서 좌회전하려고 속도를 줄였습니다.\n방향지시등을 켜고 돌기 시작했는데 뒤차가 따라오다 제 차 오른쪽을 받았습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "앞차가 교차로에서 좌회전(차19-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": 20,
    "schedule": null
   },
   "result": {
    "id": "N005",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": {
     "고객": 20,
     "상대": 80
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 작은 사거리"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 가고"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "앞차를 따라"
      },
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "왼쪽으로 꺾어서"
      },
      "other_order": {
       "value": "선행",
       "line": 2,
       "quote": "앞차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "앞차를 따라"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "좌회전하려고"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "뒤차가 따라오다"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤차가 따라오다"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "뒤차가 따라오다"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N005] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 20%, 상대 80% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 20,
        "상대": 80
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N005",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호 없는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N005] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N006",
    "date": "2026-10-19",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 없는 교차로에서 좌회전하던 중이었습니다.\n제 왼쪽 길에서 직진해 오던 차와 교차로 한가운데서 부딪쳤습니다."
     },
     "상대": {
      "statement": "신호 없는 사거리를 똑바로 지나가고 있었습니다.\n오른쪽 길에서 나온 차가 제 앞을 가로질러 왼쪽으로 돌다가 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,500,000원"
     }
    ]
   },
   "expect": {
    "tag": "좌회전 중 왼쪽 길 직진 차(차16-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "N006",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "좌회전하던"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진해 오던"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 1,
       "quote": "제 왼쪽 길에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호 없는 사거리"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나가고"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 돌다가"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 1,
       "quote": "오른쪽 길에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N006] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차16-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차16-1",
       "title": "왼쪽 직진 대 오른쪽 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": [
        "차16-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1500000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N006",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등이 없는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N006] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1500000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N007",
    "date": "2026-10-20",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호 없는 교차로를 곧장 지나가려던 참이었습니다.\n마주 오던 차가 제 앞에서 갑자기 좌회전을 했고 피하지 못했습니다."
     },
     "상대": {
      "statement": "신호등 없는 교차로에서 좌회전하려고 기다리다가 반대편이 비었다고 보고 돌았습니다.\n반대편에서 직진해 온 차와 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,600,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 13급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "맞은편 차 좌회전, 경상 13급(차15-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": 30,
    "schedule": [
     "2026-12-15",
     "2026-12-08"
    ]
   },
   "result": {
    "id": "N007",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "곧장 지나가려던"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전을 했고"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "마주 오던 차가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "좌회전하려고"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진해 온 차"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "반대편에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 13,
     "limit_date": "2026-12-15",
     "notice_date": "2026-12-08",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[N007] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-15입니다. 그 뒤에도 치료를 받으려면 2026-12-08까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1600000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 7,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N007",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호 없는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 13,
     "limit_date": "2026-12-15",
     "notice_date": "2026-12-08",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[N007] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-15입니다. 그 뒤에도 치료를 받으려면 2026-12-08까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1600000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 6,
      "longest": 50,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N008",
    "date": "2026-10-21",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로 2차로를 그대로 달리고 있었고 1차로에도 같은 방향 차가 있었습니다.\n1차로 차가 제 앞으로 확 들어왔습니다."
     },
     "상대": {
      "statement": "직선 도로 1차로를 쭉 달리고 있었습니다.\n옆 2차로 차가 제 차로로 넘어오면서 제 차 옆을 긁었습니다. 저는 차로를 바꾼 적이 없습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,300,000원"
     }
    ]
   },
   "expect": {
    "tag": "서로 상대가 끼어들었다고 함",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "N008",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "직진",
      "상대 진술": "진로변경"
     },
     {
      "item": "상대 차 진행",
      "고객 진술": "진로변경",
      "상대 진술": "직진"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "2차로를 그대로 달리고"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "제 앞으로 확 들어왔습니다"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "제 앞으로 확 들어왔습니다"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "제 앞으로"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "같은 방향"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "1차로를 쭉 달리고"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "제 차로로 넘어오면서"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "옆 2차로 차가"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N008] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": []
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "직진",
        "상대 진술": "진로변경"
       },
       {
        "item": "상대 차 진행",
        "고객 진술": "진로변경",
        "상대 진술": "직진"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1300000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N008",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N008] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1300000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N009",
    "date": "2026-10-22",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "직선 도로에서 제 차로를 따라 쭉 가고 있었습니다.\n같은 방향 옆 차로 차가 깜빡이도 안 켜고 제 앞으로 차선을 바꿨습니다."
     },
     "상대": {
      "statement": "직선 도로에서 오른쪽 차로로 옮기던 중이었습니다.\n제가 앞서 들어갔는데 뒤에서 오던 차가 속도를 줄이지 않아 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,250,000원"
     }
    ]
   },
   "expect": {
    "tag": "깜빡이 없이 끼어들었다는 주장(차43-2 고객A)",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "N009",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [
     "방향지시등 미작동"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "방향지시등 미작동"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "제 차로를 따라 쭉 가고"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "제 앞으로 차선을 바꿨습니다"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "차선을 바꿨습니다"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "제 앞으로"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향"
      },
      "modifiers": [
       {
        "value": "방향지시등 미작동",
        "line": 1,
        "quote": "깜빡이도 안 켜고"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "오른쪽 차로로 옮기던"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞서 들어갔는데"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤에서 오던 차가"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 오던"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "뒤에서 오던 차가"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N009] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "방향지시등 미작동"
      ],
      "modifier_refs": [
       {
        "claim": "방향지시등 미작동",
        "item": "진로변경 신호불이행·지연",
        "against": "상대",
        "add": [
         10
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": 1250000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N009",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "직선 도로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N009] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1250000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "N010",
    "date": "2026-10-24",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 있는 사거리에서 초록불을 받고 직진했습니다.\n맞은편에서 비보호로 좌회전하던 차가 제 앞을 막았습니다."
     },
     "상대": {
      "statement": "신호 있는 교차로에서 비보호 좌회전을 하던 중이었습니다.\n맞은편 직진 차가 노란불에 들어와 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,700,000원"
     }
    ]
   },
   "expect": {
    "tag": "신호 교차로 비보호 좌회전(도표 밖)",
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "N010",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 사거리"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "직진했습니다"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "좌회전하던"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호 있는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "비보호 좌회전을 하던"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "직진 차가"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N010] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1700000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "N010",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "신호교차로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호 있는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[N010] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1700000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B001",
    "date": "2026-10-03",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "퇴근길이라 차가 밀려서 그날 내 차는 완전히 서 있었어요.\n그런데 같은 차로 뒤에서 오던 차가 내 차 뒤를 박더라고요.\n편도 2차로 곧은 길이었고 진짜 황당했습니다."
     },
     "상대": {
      "statement": "편도 2차로 곧은 길이었고 같은 차로로 앞차를 따라 그냥 가고 있었어요.\n앞차가 서 있는 걸 늦게 봐서 그만 앞차 뒤를 박았습니다.\n제 잘못 맞아요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "정차 중 뒤에서 받힘(차41-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": 0,
    "schedule": null
   },
   "result": {
    "id": "B001",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": {
     "고객": 0,
     "상대": 100
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "정지",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 2,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "정지",
       "line": 0,
       "quote": "완전히 서 있었어요"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "내 차 뒤를 박더라고요"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤에서 오던 차가"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 오던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 차로 뒤에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "같은 차로로 앞차를 따라 그냥 가고 있었어요"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "앞차 뒤를 박았습니다"
      },
      "other_move": {
       "value": "정지",
       "line": 1,
       "quote": "앞차가 서 있는 걸"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "같은 차로로 앞차를"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B001] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 0%, 상대 100% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차41-1",
       "title": "양 차량 주행 중 후방 추돌",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 0,
        "상대": 100
       }
      },
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B001",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B001] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B002",
    "date": "2026-10-04",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "곧은 길에서 같은 차로 앞차 따라 똑바로 가고 있었거든요.\n휴대폰 알림 보느라 앞차가 속도 줄이는 걸 늦게 봤어요.\n결국 앞차 뒤를 제가 박았습니다. 제 잘못이에요."
     },
     "상대": {
      "statement": "곧은 길에서 내 차로를 똑바로 가고 있었어요.\n그런데 같은 차로 뒤에서 따라오던 차가 제 차 뒤를 받았습니다.\n정신이 없었어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "앞차를 뒤에서 박음(차41-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차41-1",
    "base": 100,
    "schedule": null
   },
   "result": {
    "id": "B002",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": null,
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었거든요"
      },
      "me_order": {
       "value": "후행",
       "line": 0,
       "quote": "앞차 따라"
      },
      "other_move": null,
      "other_order": {
       "value": "선행",
       "line": 0,
       "quote": "앞차"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "같은 차로 앞차"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "제 차 뒤를 받았습니다"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "따라오던 차가"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 따라오던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 차로 뒤에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B002] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B002",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B002] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B003",
    "date": "2026-10-05",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "편도 3차로 곧은 길에서 2차로를 똑바로 가고 있었어요.\n옆 차로에서 내 앞쪽에 있던 차가 내 차로로 들어오다가 내 차 앞부분과 부딪쳤어요."
     },
     "상대": {
      "statement": "편도 3차로 곧은 길이었어요.\n3차로에서 2차로로 옮기는 중이었는데, 같은 방향 2차로 뒤쪽에서 오던 차랑 부딪쳤어요.\n제가 그 차보다 앞에 있었습니다. 지금 생각해도 왜 그렇게 급했는지 모르겠네요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "직진 중 앞차가 끼어듦(차43-2 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "B003",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "내 앞쪽에 있던 차가"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "내 차로로 들어오다가"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "내 앞쪽에 있던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "옆 차로에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "3차로에서 2차로로 옮기는 중"
      },
      "me_order": {
       "value": "선행",
       "line": 2,
       "quote": "제가 그 차보다 앞에 있었습니다"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤쪽에서 오던 차랑"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤쪽에서 오던 차랑"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 2차로 뒤쪽에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B003] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B003",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B003] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B004",
    "date": "2026-10-06",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "곧은 길에서 출구로 빠지려고 오른쪽 차로로 옮겨 탔어요.\n옮길 때 제가 같은 방향 오른쪽 차로 뒤차보다 앞에 있었는데, 그 차가 제 차 뒷문 쪽을 받더라고요.\n억울합니다."
     },
     "상대": {
      "statement": "곧은 길에서 내 차로를 똑바로 가고 있었는데요.\n앞쪽 왼쪽 차로에 있던 차가 갑자기 내 차로로 들어와서 부딪쳤어요.\n둘 다 같은 방향으로 가던 차예요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "차로를 옮기다 뒤차와 부딪침(차43-2 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-2",
    "base": 70,
    "schedule": null
   },
   "result": {
    "id": "B004",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": null,
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "오른쪽 차로로 옮겨 탔어요"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "뒤차보다 앞에 있었는데"
      },
      "other_move": null,
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤차보다"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 오른쪽 차로 뒤차"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었는데요"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "앞쪽 왼쪽 차로에 있던 차가"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "내 차로로 들어와서"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞쪽 왼쪽 차로에 있던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향으로 가던 차"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B004] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B004",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B004] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B005",
    "date": "2026-10-07",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "편도 3차로 곧은 길에서 저는 1차로에서 가운데 2차로로 옮기던 중이었어요.\n그때 같은 방향 3차로 차도 똑같이 2차로로 들어와서 가운데서 부딪쳤어요.\n동시에 들어간 거라 누가 먼저 가야 했는지 애매하네요."
     },
     "상대": {
      "statement": "편도 3차로 곧은 길에서 저는 3차로에서 2차로로 옮기고 있었어요.\n그런데 같은 방향 1차로 차도 동시에 2차로로 들어왔어요.\n그래서 가운데서 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "양쪽에서 동시에 가운데 차로로(차43-3 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": 50,
    "schedule": null
   },
   "result": {
    "id": "B005",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-3",
    "base": {
     "고객": 50,
     "상대": 50
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": null,
      "other_move": "진로변경",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "2차로로 옮기던 중"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "똑같이 2차로로 들어와서"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 3차로 차"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "2차로로 옮기고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "동시에 2차로로 들어왔어요"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 1차로 차"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B005] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 50%, 상대 50% (과실비율정보포털 도표 차43-3 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-3",
       "title": "좌우 동시 차로 변경 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 50,
        "상대": 50
       }
      },
      "candidates": {
       "고객": [
        "차43-3"
       ],
       "상대": [
        "차43-3"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B005",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B005] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B006",
    "date": "2026-10-08",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "공사 때문에 차로 하나가 끝나는 구간이었어요.\n내 차로가 끝나서 옆 차로로 끼어 들어가야 했는데요.\n그러다 같은 방향으로 오던 옆 차로 차랑 부딪쳤습니다."
     },
     "상대": {
      "statement": "차로 하나가 없어지는 구간이었어요.\n나는 줄지 않는 차로를 따라 똑바로 가고 있었는데요.\n같은 방향 옆 차로가 끝나면서 그 차가 제 차로로 들어오다가 부딪쳤어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "합류하다 본선 차와 부딪침(차43-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "B006",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "차로 하나가 끝나는 구간"
      },
      "me_move": {
       "value": "합류",
       "line": 1,
       "quote": "옆 차로로 끼어 들어가야 했는데요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 2,
       "quote": "오던 옆 차로 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향으로 오던"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "차로 하나가 없어지는 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 가고 있었는데요"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 2,
       "quote": "제 차로로 들어오다가"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 2,
       "quote": "같은 방향 옆 차로가 끝나면서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B006] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차43-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-1",
       "title": "차로 감소 도로(합류) 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B006",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B006] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B007",
    "date": "2026-10-09",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 동네 교차로였어요.\n같은 방향 앞차를 따라서 똑바로 지나가려고 했는데요.\n앞차가 교차로 안에서 갑자기 왼쪽으로 꺾더라고요.\n그래서 내 차 앞부분이 그 차 옆을 받았어요."
     },
     "상대": {
      "statement": "신호등 없는 교차로에서 왼쪽으로 꺾던 중이었어요.\n같은 방향 뒤에서 오던 차가 똑바로 오다가 제 차 옆을 받았습니다.\n제가 앞에 있었어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "앞차가 교차로에서 좌회전(차19-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": 20,
    "schedule": null
   },
   "result": {
    "id": "B007",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": {
     "고객": 20,
     "상대": 80
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 동네 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 지나가려고 했는데요"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "같은 방향 앞차를 따라서"
      },
      "other_move": {
       "value": "좌회전",
       "line": 2,
       "quote": "왼쪽으로 꺾더라고요"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "같은 방향 앞차"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 앞차"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽으로 꺾던 중"
      },
      "me_order": {
       "value": "선행",
       "line": 2,
       "quote": "제가 앞에 있었어요"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오다가"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 오던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 뒤에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B007] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 20%, 상대 80% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 20,
        "상대": 80
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B007",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B007] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B008",
    "date": "2026-10-10",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 교차로에서 왼쪽 길로 들어가려고 꺾고 있었어요.\n그런데 같은 방향 뒤에서 따라오던 차가 그대로 직진하다가 제 차 옆을 받았습니다.\n제가 앞에 있었는데 뒤에서 와서 박은 거죠."
     },
     "상대": {
      "statement": "신호등 없는 교차로에서 같은 방향 앞차를 따라 똑바로 가고 있었어요.\n앞차가 왼쪽으로 꺾었어요.\n제가 뒤에 있었고 결국 그 차 옆을 받았습니다. 제 쪽이 뒤였어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "교차로에서 좌회전하다 뒤차와(차19-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": 80,
    "schedule": null
   },
   "result": {
    "id": "B008",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차19-1",
    "base": {
     "고객": 80,
     "상대": 20
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "좌회전",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽 길로 들어가려고 꺾고"
      },
      "me_order": {
       "value": "선행",
       "line": 2,
       "quote": "제가 앞에 있었는데"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "그대로 직진하다가"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 따라오던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 뒤에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": {
       "value": "후행",
       "line": 2,
       "quote": "제가 뒤에 있었고"
      },
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 꺾었어요"
      },
      "other_order": {
       "value": "선행",
       "line": 0,
       "quote": "앞차를 따라"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "같은 방향 앞차"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B008] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 80%, 상대 20% (과실비율정보포털 도표 차19-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차19-1",
       "title": "후행 직진 대 선행 좌(우)회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 80,
        "상대": 20
       }
      },
      "candidates": {
       "고객": [
        "차19-1"
       ],
       "상대": [
        "차19-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B008",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B008] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B009",
    "date": "2026-10-11",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 교차로를 똑바로 지나가던 중이었어요.\n내 오른쪽 길에서 나온 차가 왼쪽으로 꺾어서 내 앞을 가로지르더라고요.\n그러다 부딪쳤습니다."
     },
     "상대": {
      "statement": "신호등 없는 교차로에서 왼쪽으로 꺾고 있었어요.\n내 왼쪽 길에서 똑바로 오던 차랑 부딪쳤습니다.\n교차로 안에서 그랬어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "직진 중 오른쪽 길 차가 좌회전(차16-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "B009",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나가던 중"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 꺾어서"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 1,
       "quote": "내 오른쪽 길에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽으로 꺾고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 1,
       "quote": "내 왼쪽 길에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B009] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차16-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차16-1",
       "title": "왼쪽 직진 대 오른쪽 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": [
        "차16-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B009",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B009] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B010",
    "date": "2026-10-12",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 사거리에서 왼쪽으로 꺾고 있었어요.\n그런데 내 왼쪽 길에서 똑바로 달려오던 차가 제 차를 받았습니다.\n사거리에서 이런 일 생길 줄 몰랐네요."
     },
     "상대": {
      "statement": "신호등 없는 사거리를 똑바로 지나고 있었는데요.\n내 오른쪽 길에서 나온 차가 왼쪽으로 꺾으면서 제 앞으로 들어왔어요.\n그래서 그대로 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "좌회전 중 왼쪽 길 직진차와(차16-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "B010",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차16-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 사거리"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽으로 꺾고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 달려오던 차가"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 1,
       "quote": "내 왼쪽 길에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 사거리"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나고 있었는데요"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 꺾으면서"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 1,
       "quote": "내 오른쪽 길에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B010] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차16-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차16-1",
       "title": "왼쪽 직진 대 오른쪽 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차16-1"
       ],
       "상대": [
        "차16-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B010",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B010] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B011",
    "date": "2026-10-13",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 교차로에서 오른쪽으로 꺾어 큰길로 들어가던 중이었어요.\n내 왼쪽 길에서 똑바로 오던 차랑 부딪쳤습니다.\n큰길 들어가다가 사고 나니까 정말 놀랐어요."
     },
     "상대": {
      "statement": "신호등 없는 교차로를 똑바로 지나가고 있었어요.\n내 오른쪽 길에서 오른쪽으로 꺾어 나오던 차랑 부딪쳤습니다.\n그 차가 꺾으면서 나온 거예요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "우회전 중 왼쪽 길 직진차와(차13-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": 60,
    "schedule": null
   },
   "result": {
    "id": "B011",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": {
     "고객": 60,
     "상대": 40
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "우회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "우회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "우회전",
       "line": 0,
       "quote": "오른쪽으로 꺾어"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 1,
       "quote": "내 왼쪽 길에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나가고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "우회전",
       "line": 1,
       "quote": "오른쪽으로 꺾어 나오던"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 1,
       "quote": "내 오른쪽 길에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B011] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 60%, 상대 40% (과실비율정보포털 도표 차13-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차13-1",
       "title": "오른쪽 우회전 대 왼쪽 직진",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 60,
        "상대": 40
       }
      },
      "candidates": {
       "고객": [
        "차13-1"
       ],
       "상대": [
        "차13-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B011",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B011] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B012",
    "date": "2026-10-14",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 교차로를 똑바로 가고 있었어요.\n내 오른쪽 길에서 오른쪽으로 꺾어 들어오던 차랑 부딪쳤습니다.\n그 차가 꺾어 들어오면서 부딪친 거예요."
     },
     "상대": {
      "statement": "신호등 없는 교차로에서 오른쪽으로 꺾던 중이었어요.\n내 왼쪽 길에서 똑바로 오던 차랑 부딪쳤습니다.\n교차로에서 이런 사고가 나서 황당합니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "직진 중 오른쪽 길 우회전차와(차13-1 고객B)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": 40,
    "schedule": null
   },
   "result": {
    "id": "B012",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차13-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "우회전",
      "other_order": null,
      "other_from": "오른쪽",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "우회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "왼쪽",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "우회전",
       "line": 1,
       "quote": "오른쪽으로 꺾어 들어오던"
      },
      "other_order": null,
      "other_from": {
       "value": "오른쪽",
       "line": 1,
       "quote": "내 오른쪽 길에서"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "우회전",
       "line": 0,
       "quote": "오른쪽으로 꺾던 중"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "왼쪽",
       "line": 1,
       "quote": "내 왼쪽 길에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B012] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차13-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차13-1",
       "title": "오른쪽 우회전 대 왼쪽 직진",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차13-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차13-1"
       ],
       "상대": [
        "차13-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B012",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B012] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B013",
    "date": "2026-10-15",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 교차로를 똑바로 지나가고 있었어요.\n맞은편에서 오던 차가 왼쪽으로 꺾으면서 내 앞을 막더라고요.\n결국 부딪쳤습니다."
     },
     "상대": {
      "statement": "신호등 없는 교차로에서 왼쪽으로 꺾고 있었어요.\n그런데 맞은편에서 똑바로 오던 차랑 부딪쳤습니다.\n진짜 어쩌다 이렇게 됐는지 모르겠어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "직진 중 맞은편 좌회전(차15-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "B013",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차15-1",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나가고"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 꺾으면서"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서 오던 차가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽으로 꺾고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서 똑바로 오던 차랑"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B013] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B013",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B013] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B014",
    "date": "2026-10-16",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "곧은 길에서 내 차로를 똑바로 가고 있었어요.\n같은 방향 앞쪽 옆 차로 차가 내 차로로 넘어와서 부딪쳤습니다.\n저는 차로를 바꾸지 않았어요."
     },
     "상대": {
      "statement": "곧은 길에서 내 차로를 똑바로 가고 있었는데요.\n같은 방향 뒤쪽 옆 차로 차가 제 차로로 넘어와서 부딪쳤어요.\n저도 차로 안 바꿨습니다. 그냥 직진이었어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "둘 다 직진했다고 함",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "B014",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "직진",
      "상대 진술": "진로변경"
     },
     {
      "item": "상대 차 진행",
      "고객 진술": "진로변경",
      "상대 진술": "직진"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "선행",
      "other_move": "진로변경",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": {
       "value": "후행",
       "line": 1,
       "quote": "앞쪽 옆 차로 차가"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "내 차로로 넘어와서"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞쪽 옆 차로 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 앞쪽"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었는데요"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "뒤쪽 옆 차로 차가"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "제 차로로 넘어와서"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤쪽 옆 차로 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 뒤쪽"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B014] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": []
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "직진",
        "상대 진술": "진로변경"
       },
       {
        "item": "상대 차 진행",
        "고객 진술": "진로변경",
        "상대 진술": "직진"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B014",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": "진로변경",
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": {
       "value": "진로변경",
       "line": 2,
       "quote": "차로를 바꾸"
      },
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B014] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B015",
    "date": "2026-10-17",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "곧은 길 같은 차로에서 신호 대기하려고 앞에 서 있었어요.\n그런데 같은 방향 뒤차가 와서 제 차를 박았습니다.\n서 있는 차를 박다니 너무하죠."
     },
     "상대": {
      "statement": "곧은 길 같은 차로였어요.\n제가 앞에서 서 있었는데 같은 방향 뒤차가 와서 제 차를 받았어요.\n그 차가 제 뒤에 있었다고요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "서로 자기가 앞이었다고 함",
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "B015",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R05",
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [
     {
      "item": "고객 차 진행",
      "고객 진술": "정지",
      "상대 진술": "직진"
     },
     {
      "item": "고객 차 순서",
      "고객 진술": "선행",
      "상대 진술": "후행"
     },
     {
      "item": "상대 차 진행",
      "고객 진술": "직진",
      "상대 진술": "정지"
     },
     {
      "item": "상대 차 순서",
      "고객 진술": "후행",
      "상대 진술": "선행"
     }
    ],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "정지",
       "line": 0,
       "quote": "앞에 서 있었어요"
      },
      "me_order": {
       "value": "선행",
       "line": 0,
       "quote": "앞에 서 있었어요"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤차가 와서"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 뒤차가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "정지",
       "line": 1,
       "quote": "서 있었는데"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "제가 앞에서 서 있었는데"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤차가 와서"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "같은 방향 뒤차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 뒤차가"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B015] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 두 분의 사고 설명이 서로 달라 담당자가 확인합니다\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R05 양측 진술이 사고 요소에서 엇갈림",
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [
        "차41-1"
       ],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [
       {
        "item": "고객 차 진행",
        "고객 진술": "정지",
        "상대 진술": "직진"
       },
       {
        "item": "고객 차 순서",
        "고객 진술": "선행",
        "상대 진술": "후행"
       },
       {
        "item": "상대 차 진행",
        "고객 진술": "직진",
        "상대 진술": "정지"
       },
       {
        "item": "상대 차 순서",
        "고객 진술": "후행",
        "상대 진술": "선행"
       }
      ],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B015",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B015] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B016",
    "date": "2026-10-18",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "곧은 길에서 내 차로를 똑바로 가는데요.\n같은 방향 앞쪽 옆 차로 차가 깜빡이도 안 켜고 내 차로로 들어와서 부딪쳤어요.\n제가 뒤에 있었습니다."
     },
     "상대": {
      "statement": "곧은 길에서 옆 차로로 옮기던 중이었어요.\n그 차로 뒤에서 오던 차랑 부딪쳤습니다.\n제가 앞에 있었는데 뒤에서 와서 받혔어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "깜빡이 없이 끼어들었다고 주장(차43-2 고객A)",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": 30,
    "schedule": null
   },
   "result": {
    "id": "B016",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차43-2",
    "base": {
     "고객": 30,
     "상대": 70
    },
    "conflicts": [],
    "modifiers": [
     "방향지시등 미작동"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": "진로변경",
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "방향지시등 미작동"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "진로변경",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가는데요"
      },
      "me_order": {
       "value": "후행",
       "line": 2,
       "quote": "제가 뒤에 있었습니다"
      },
      "other_move": {
       "value": "진로변경",
       "line": 1,
       "quote": "내 차로로 들어와서"
      },
      "other_order": {
       "value": "선행",
       "line": 1,
       "quote": "앞쪽 옆 차로 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 앞쪽"
      },
      "modifiers": [
       {
        "value": "방향지시등 미작동",
        "line": 1,
        "quote": "깜빡이도 안 켜고"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "진로변경",
       "line": 0,
       "quote": "옆 차로로 옮기던 중"
      },
      "me_order": {
       "value": "선행",
       "line": 2,
       "quote": "제가 앞에 있었는데"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "뒤에서 오던 차랑"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 오던 차랑"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "뒤에서 오던 차랑"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B016] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n예상 과실: 고객님 30%, 상대 70% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차43-2",
       "title": "후행 직진 대 선행 진로변경",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 30,
        "상대": 70
       }
      },
      "candidates": {
       "고객": [
        "차43-2"
       ],
       "상대": [
        "차43-2"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "방향지시등 미작동"
      ],
      "modifier_refs": [
       {
        "claim": "방향지시등 미작동",
        "item": "진로변경 신호불이행·지연",
        "against": "상대",
        "add": [
         10
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B016",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B016] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B017",
    "date": "2026-10-19",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "곧은 길에서 같은 차로 앞차를 따라 똑바로 가고 있었어요.\n앞차가 아무 이유 없이 갑자기 브레이크를 꽉 밟더라고요.\n피하지 못해서 제가 뒤를 박았습니다."
     },
     "상대": {
      "statement": "곧은 길에서 내 차로를 똑바로 가다가 서 있었어요.\n같은 차로 뒤에서 따라오던 차가 제 차 뒤를 박았습니다.\n멈춰 서 있었는데 뒤에서 받혔어요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "앞차가 이유 없이 급히 섰다고 주장(차41-1 고객A)",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차41-1",
    "base": 100,
    "schedule": null
   },
   "result": {
    "id": "B017",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06",
     "R07"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [
     "급정지"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "단일로",
      "me_move": "직진",
      "me_order": "후행",
      "other_move": null,
      "other_order": "선행",
      "other_from": "같은방향",
      "modifiers": [
       "급정지"
      ]
     },
     "상대": {
      "place": "단일로",
      "me_move": "정지",
      "me_order": "선행",
      "other_move": "직진",
      "other_order": "후행",
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": {
       "value": "후행",
       "line": 0,
       "quote": "앞차를 따라"
      },
      "other_move": null,
      "other_order": {
       "value": "선행",
       "line": 0,
       "quote": "앞차를"
      },
      "other_from": {
       "value": "같은방향",
       "line": 0,
       "quote": "같은 차로 앞차를"
      },
      "modifiers": [
       {
        "value": "급정지",
        "line": 1,
        "quote": "갑자기 브레이크를 꽉 밟더라고요"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "단일로",
       "line": 0,
       "quote": "곧은 길"
      },
      "me_move": {
       "value": "정지",
       "line": 0,
       "quote": "서 있었어요"
      },
      "me_order": {
       "value": "선행",
       "line": 1,
       "quote": "제 차 뒤를 박았습니다"
      },
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "따라오던 차가"
      },
      "other_order": {
       "value": "후행",
       "line": 1,
       "quote": "뒤에서 따라오던 차가"
      },
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 차로 뒤에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B017] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음",
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": [
        "차41-1"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "급정지"
      ],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 31,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B017",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B017] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B018",
    "date": "2026-10-20",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등 없는 교차로에서 왼쪽으로 꺾고 있었어요.\n맞은편에서 똑바로 오던 차가 제한속도보다 훨씬 빠르게 달려와서 부딪쳤습니다.\n그 차 너무 빨랐어요."
     },
     "상대": {
      "statement": "신호등 없는 교차로를 똑바로 지나고 있었어요.\n맞은편에서 오던 차가 왼쪽으로 꺾어서 제 앞을 막더라고요.\n그래서 결국 부딪쳤습니다."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "맞은편 차가 너무 빨랐다고 주장(차15-1 고객B)",
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차15-1",
    "base": 70,
    "schedule": null
   },
   "result": {
    "id": "B018",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R07"
    ],
    "chart": "차15-1",
    "base": {
     "고객": 70,
     "상대": 30
    },
    "conflicts": [],
    "modifiers": [
     "과속"
    ],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호없는교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": [
       "과속"
      ]
     },
     "상대": {
      "place": "신호없는교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽으로 꺾고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차가"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서"
      },
      "modifiers": [
       {
        "value": "과속",
        "line": 1,
        "quote": "제한속도보다 훨씬 빠르게"
       }
      ]
     },
     "상대": {
      "place": {
       "value": "신호없는교차로",
       "line": 0,
       "quote": "신호등 없는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 꺾어서"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서 오던 차가"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B018] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 과실을 바꿀 수 있는 사정이 있어 담당자가 확인합니다\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차15-1 기본값 기준, 확인 후 안내)",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R07 진술에 수정요소 주장이 있음(자동 판단 안 함)"
      ],
      "chart": {
       "id": "차15-1",
       "title": "직진 대 맞은편 좌회전",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1",
       "roles": {
        "고객": "B",
        "상대": "A"
       },
       "base": {
        "고객": 70,
        "상대": 30
       }
      },
      "candidates": {
       "고객": [
        "차15-1"
       ],
       "상대": [
        "차15-1"
       ]
      },
      "conflicts": [],
      "modifiers": [
       "과속"
      ],
      "modifier_refs": [
       {
        "claim": "과속",
        "item": "현저한 과실 또는 중대한 과실",
        "against": "주장된 쪽",
        "add": [
         10,
         20
        ]
       }
      ],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 4,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B018",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B018] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B019",
    "date": "2026-10-21",
    "kind": "차대차",
    "coverage": [
     "대물"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "신호등이 있는 교차로에서 초록불에 똑바로 지나가고 있었어요.\n맞은편에서 오던 차가 왼쪽으로 꺾어 부딪쳤습니다.\n초록불인데 억울하게 당했네요."
     },
     "상대": {
      "statement": "신호등이 있는 교차로에서 왼쪽으로 꺾고 있었어요.\n맞은편에서 똑바로 오던 차랑 부딪쳤습니다.\n신호 있는 데서 이런 일이 나니 황당하네요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,100,000원"
     }
    ]
   },
   "expect": {
    "tag": "신호등 있는 교차로(도표 밖)",
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "schedule": null
   },
   "result": {
    "id": "B019",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호교차로",
      "me_move": "직진",
      "me_order": null,
      "other_move": "좌회전",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     },
     "상대": {
      "place": "신호교차로",
      "me_move": "좌회전",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "맞은편",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 교차로"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 지나가고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "좌회전",
       "line": 1,
       "quote": "왼쪽으로 꺾어"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서 오던 차가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 교차로"
      },
      "me_move": {
       "value": "좌회전",
       "line": 0,
       "quote": "왼쪽으로 꺾고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "맞은편",
       "line": 1,
       "quote": "맞은편에서 똑바로 오던 차랑"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B019] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B019",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "신호교차로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": "신호교차로",
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "신호교차로",
       "line": 0,
       "quote": "신호등이 있는 교차로"
      },
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": null,
    "notice": {
     "customer": "[B019] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1100000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 3,
      "longest": 30,
      "jargon": [],
      "ok": true
     }
    }
   }
  },
  {
   "case": {
    "id": "B020",
    "date": "2026-10-14",
    "kind": "차대차",
    "coverage": [
     "대물",
     "대인"
    ],
    "damage": "경미",
    "parties": {
     "고객": {
      "statement": "차로 하나가 줄어드는 구간에서 줄지 않는 차로로 똑바로 가고 있었어요.\n같은 방향 옆 차로가 끝나면서 그 차가 제 차로로 들어와 부딪쳤습니다.\n목이 아파서 지금 병원에 다니고 있어요."
     },
     "상대": {
      "statement": "내 차로가 끝나는 구간이라 옆 차로로 들어가야 했어요.\n그런데 같은 방향 옆 차로에서 똑바로 오던 차랑 부딪쳤습니다.\n차선 줄어드는 데가 원래 위험하잖아요."
     }
    },
    "attachments": [
     {
      "doc": "수리견적서",
      "text": "수리 항목: 범퍼와 펜더\n총액 1,300,000원"
     },
     {
      "doc": "진단서",
      "text": "진단명: 경추 염좌\n상해등급 13급"
     },
     {
      "doc": "진료비내역",
      "text": "외래 진료 3회"
     }
    ]
   },
   "expect": {
    "tag": "합류 구간 본선 직진, 경상 13급(차43-1 고객A)",
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": 40,
    "schedule": [
     "2026-12-09",
     "2026-12-02"
    ]
   },
   "result": {
    "id": "B020",
    "status": "완료",
    "stop": null,
    "route": "자동 처리 후보",
    "rules": [],
    "chart": "차43-1",
    "base": {
     "고객": 40,
     "상대": 60
    },
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": "합류지점",
      "me_move": "직진",
      "me_order": null,
      "other_move": "합류",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     },
     "상대": {
      "place": "합류지점",
      "me_move": "합류",
      "me_order": null,
      "other_move": "직진",
      "other_order": null,
      "other_from": "같은방향",
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "차로 하나가 줄어드는 구간"
      },
      "me_move": {
       "value": "직진",
       "line": 0,
       "quote": "똑바로 가고 있었어요"
      },
      "me_order": null,
      "other_move": {
       "value": "합류",
       "line": 1,
       "quote": "제 차로로 들어와"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 옆 차로가"
      },
      "modifiers": []
     },
     "상대": {
      "place": {
       "value": "합류지점",
       "line": 0,
       "quote": "내 차로가 끝나는 구간"
      },
      "me_move": {
       "value": "합류",
       "line": 0,
       "quote": "옆 차로로 들어가야 했어요"
      },
      "me_order": null,
      "other_move": {
       "value": "직진",
       "line": 1,
       "quote": "똑바로 오던 차랑"
      },
      "other_order": null,
      "other_from": {
       "value": "같은방향",
       "line": 1,
       "quote": "같은 방향 옆 차로에서"
      },
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 13,
     "limit_date": "2026-12-09",
     "notice_date": "2026-12-02",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[B020] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 40%, 상대 60% (과실비율정보포털 도표 차43-1 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-09입니다. 그 뒤에도 치료를 받으려면 2026-12-02까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "자동 처리 후보",
      "rules": [],
      "chart": {
       "id": "차43-1",
       "title": "차로 감소 도로(합류) 사고",
       "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-1&chartType=1",
       "roles": {
        "고객": "A",
        "상대": "B"
       },
       "base": {
        "고객": 40,
        "상대": 60
       }
      },
      "candidates": {
       "고객": [
        "차43-1"
       ],
       "상대": [
        "차43-1"
       ]
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1300000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 7,
      "longest": 58,
      "jargon": [],
      "ok": true
     }
    }
   },
   "steps": [
    {
     "agent": "intake",
     "badge": "AG-01",
     "read": [
      "raw"
     ],
     "wrote": [
      "intake"
     ]
    },
    {
     "agent": "documents",
     "badge": "AG-02",
     "read": [
      "intake"
     ],
     "wrote": [
      "docs"
     ]
    },
    {
     "agent": "fault",
     "badge": "AG-03",
     "read": [
      "intake"
     ],
     "wrote": [
      "elements",
      "fault"
     ]
    },
    {
     "agent": "route",
     "badge": "AG-04",
     "read": [
      "intake",
      "docs",
      "elements",
      "fault"
     ],
     "wrote": [
      "route"
     ]
    },
    {
     "agent": "schedule",
     "badge": "AG-05",
     "read": [
      "intake",
      "docs"
     ],
     "wrote": [
      "schedule"
     ]
    },
    {
     "agent": "notice",
     "badge": "AG-06",
     "read": [
      "intake",
      "docs",
      "fault",
      "route",
      "schedule"
     ],
     "wrote": [
      "notice"
     ]
    }
   ],
   "extractor": "skill",
   "alt": {
    "id": "B020",
    "status": "완료",
    "stop": null,
    "route": "사람 심사",
    "rules": [
     "R06"
    ],
    "chart": null,
    "base": null,
    "conflicts": [],
    "modifiers": [],
    "unverified": [],
    "elements": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "evidence": {
     "고객": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     },
     "상대": {
      "place": null,
      "me_move": null,
      "me_order": null,
      "other_move": null,
      "other_order": null,
      "other_from": null,
      "modifiers": []
     }
    },
    "missing_docs": [],
    "schedule": {
     "grade": 13,
     "limit_date": "2026-12-09",
     "notice_date": "2026-12-02",
     "notice_confirmed": false
    },
    "notice": {
     "customer": "[B020] 사고 접수 안내\n접수하신 사고는 담당자가 직접 살펴본 뒤 안내드립니다.\n- 사고 유형을 담당자가 확인합니다\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-09입니다. 그 뒤에도 치료를 받으려면 2026-12-02까지 진단서를 더 내 주셔야 할 수 있습니다. 이 기한은 기준 확인 전입니다.",
     "staff": {
      "route": "사람 심사",
      "rules": [
       "R06 옮긴 도표 8개 중 맞는 도표가 하나로 정해지지 않음"
      ],
      "chart": null,
      "candidates": {
       "고객": [],
       "상대": []
      },
      "conflicts": [],
      "modifiers": [],
      "modifier_refs": [],
      "modifiers_confirmed": false,
      "estimate": 1300000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": true
     },
     "checked": true,
     "readability": {
      "sentences": 6,
      "longest": 50,
      "jargon": [],
      "ok": true
     }
    }
   }
  }
 ]
};
