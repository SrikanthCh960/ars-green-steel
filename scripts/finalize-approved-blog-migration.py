#!/usr/bin/env python3
"""Mark fully reviewed migrated articles as approved without changing redirects."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "src/data/blog-migration-registry.json"
APPROVED_PARITY = {"Exact match", "Approved editorial improvement"}


def main() -> None:
    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    approved = 0
    redirects = 0
    for entry in registry:
        if entry["migrationStatus"].startswith("Migrated —"):
            if entry["contentParityStatus"] not in APPROVED_PARITY or entry["seoParityStatus"] not in APPROVED_PARITY:
                raise SystemExit(f"Cannot approve unresolved route: {entry['originalUrl']}")
            entry["migrationStatus"] = "Migrated — approved"
            approved += 1
        elif entry["migrationStatus"] == "Redirected":
            expected = ("Approved redirect", "Approved redirect", "301 configured")
            actual = (entry["contentParityStatus"], entry["seoParityStatus"], entry["redirectStatus"])
            if actual != expected:
                raise SystemExit(f"Redirect approval changed: {entry['originalUrl']}")
            redirects += 1
    if approved != 88 or redirects != 6:
        raise SystemExit(f"Expected 88 approved migrations and 6 redirects; found {approved} and {redirects}.")
    REGISTRY_PATH.write_text(json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Marked {approved} migrated routes approved; retained {redirects} approved redirects.")


if __name__ == "__main__":
    main()
