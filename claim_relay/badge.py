import copy

from .config import load


class BadgeError(RuntimeError):
    """사원증에 없는 칸을 읽거나 쓰려 한 경우."""


class Desk:
    """단계 하나가 쓰는 작업대. 사원증(agents.yaml)에 적힌 칸만 읽고 쓴다."""

    def __init__(self, board, agent):
        self.board = board
        self.agent = agent
        self.spec = load("agents.yaml")["agents"][agent]
        self.reads, self.writes = [], []

    def _deny(self, verb, key):
        raise BadgeError(f"{self.spec['badge']} {self.spec['name']}: '{key}' 칸을 {verb} 권한이 없습니다")

    def get(self, key):
        if key not in self.spec["read"]:
            self._deny("읽을", key)
        if key not in self.reads:
            self.reads.append(key)
        # 사본을 넘겨 다른 단계의 칸을 고칠 수 없게 한다
        return copy.deepcopy(self.board[key])

    def put(self, key, value):
        if key not in self.spec["write"]:
            self._deny("쓸", key)
        if key in self.board:
            raise BadgeError(f"'{key}' 칸은 이미 채워져 덮어쓸 수 없습니다")
        self.writes.append(key)
        self.board[key] = value
