# LOOK AT: True / False / None should render BOLD; function names pop
from dataclasses import dataclass


@dataclass
class Item:
    name: str
    price: float
    active: bool = True
    note: str | None = None


def tally(items: list[Item]) -> dict[str, float | bool]:
    total = sum(i.price for i in items if i.active)
    return {"total": round(total, 2), "ok": total > 0, "empty": len(items) == 0}


seed = [Item("widget", 9.99, True), Item("gizmo", 4.5, False, None)]
result = tally(seed)
print(result, result["ok"] is True, result.get("missing") is None)
