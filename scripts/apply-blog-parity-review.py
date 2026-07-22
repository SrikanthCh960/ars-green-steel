#!/usr/bin/env python3
"""Set the article-level migration review baseline without implying content loss."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "src/data/blog-migration-registry.json"


def main() -> None:
    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    reviewed_at = datetime.now(timezone.utc).isoformat()
    reviewed = 0

    for entry in registry:
        if entry["migrationStatus"] != "Migrated — audit pending":
            continue
        entry["contentParityStatus"] = "Pending review"
        entry["seoParityStatus"] = "Not audited"
        entry["reviewedAt"] = reviewed_at
        entry["notes"] = (
            "Article-level review is pending. Do not infer missing source content from this status. "
            "Approval requires an XML-backed verification of body, assets, links, metadata, canonical, "
            "robots, social metadata, and structured data."
        )
        reviewed += 1

    REGISTRY_PATH.write_text(json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Recorded Pending review parity status for {reviewed} migrated routes.")


if __name__ == "__main__":
    main()
