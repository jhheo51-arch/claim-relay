from functools import lru_cache
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SIDES = ("고객", "상대")


@lru_cache(maxsize=None)
def load(name):
    with open(ROOT / name, encoding="utf-8") as f:
        return yaml.safe_load(f)


def settings():
    return load("rules/settings.yaml")


class StopError(RuntimeError):
    """실행을 멈춰야 하는 경우. 멈춘 단계와 까닭을 이력에 남긴다."""
