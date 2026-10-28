window.DATA = {
 "generated": "2026-10-28",
 "extractor": "cues",
 "charts": {
  "version": "2026-10-28",
  "source": "https://accident.knia.or.kr/ranking",
  "moved_by": "Claude, 도표 상세 페이지의 '기본 과실' 칸을 옮김",
  "confirmed": false,
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
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차41-1&chartType=1"
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
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-2&chartType=1"
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
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차43-3&chartType=1"
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
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차19-1&chartType=1"
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
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차16-1&chartType=1"
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
    "url": "https://accident.knia.or.kr/myaccident-content?chartNo=차15-1&chartType=1"
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 2000000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
     "customer": "[C017] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-11-07입니다. 그 뒤에도 치료를 이어 가려면 2026-10-31까지 진단서를 더 내 주셔야 할 수 있습니다(기준 확인 전).",
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 12,
      "charts_confirmed": false
     },
     "checked": true
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
     "customer": "[C018] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-12-15입니다. 그 뒤에도 치료를 이어 가려면 2026-12-08까지 진단서를 더 내 주셔야 할 수 있습니다(기준 확인 전).",
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 14,
      "charts_confirmed": false
     },
     "checked": true
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
     "customer": "[C019] 사고 접수 안내\n접수하신 사고는 빠른 처리 대상 후보로 분류되었습니다. 담당자가 확인한 뒤 결과를 안내드립니다.\n예상 과실: 고객님 70%, 상대 30% (과실비율정보포털 도표 차43-2 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-11-30입니다. 그 뒤에도 치료를 이어 가려면 2026-11-23까지 진단서를 더 내 주셔야 할 수 있습니다(기준 확인 전).",
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
     "customer": "[C021] 사고 접수 안내\n처리를 이어 가려면 서류가 더 필요합니다.\n- 필요한 서류가 아직 없습니다\n보내 주실 서류: 진료비내역\n예상 과실: 고객님 0%, 상대 100% (과실비율정보포털 도표 차41-1 기본값 기준, 확인 후 안내)\n경상 치료 일정: 사고일부터 8주가 되는 날은 2026-11-26입니다. 그 뒤에도 치료를 이어 가려면 2026-11-19까지 진단서를 더 내 주셔야 할 수 있습니다(기준 확인 전).",
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
      "estimate": 900000,
      "estimate_limit": 2000000,
      "injury_grade": 13,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": null,
      "estimate_limit": 2000000,
      "injury_grade": 9,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 2500000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 9000000,
      "estimate_limit": 8000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 5,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": 11,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1200000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1350000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
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
      "estimate": 1350000,
      "estimate_limit": 2000000,
      "injury_grade": null,
      "charts_confirmed": false
     },
     "checked": true
    }
   }
  }
 ]
};
