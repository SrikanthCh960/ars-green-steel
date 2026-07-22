#!/usr/bin/env python3
"""Validate locally hosted WordPress banner assets and their metadata bindings."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "src/data/blog-migration-registry.json"
PUBLIC_ROOT = ROOT / "public"
LOCAL_PREFIX = "/ars-assets/blog-banners/"
EXTERNAL_PREFIX = "https://arsgroup.in/wp-content/uploads/"


def main() -> None:
    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    issues = []
    local_banner_records = 0
    migrated_local_heroes = 0
    for entry in registry:
        image = entry.get("featuredImage")
        if not image:
            issues.append({"type": "missing-featured-image", "slug": entry["slug"]})
            continue
        url = image.get("url", "")
        alt_present = "alt" in image
        source_url = image.get("sourceUrl", "")
        file_name = image.get("fileName", "")
        expected_url = f"{LOCAL_PREFIX}{entry['slug']}/{file_name}"
        if not url.startswith(LOCAL_PREFIX):
            issues.append({"type": "external-primary-banner", "slug": entry["slug"], "url": url})
        else:
            local_banner_records += 1
        if url != expected_url:
            issues.append({"type": "unexpected-local-banner-path", "slug": entry["slug"], "url": url, "expected": expected_url})
        if not (PUBLIC_ROOT / url.lstrip("/")).is_file():
            issues.append({"type": "missing-local-banner-file", "slug": entry["slug"], "url": url})
        if not alt_present:
            issues.append({"type": "missing-banner-alt-field", "slug": entry["slug"]})
        if not source_url.startswith(EXTERNAL_PREFIX):
            issues.append({"type": "missing-wordpress-source-evidence", "slug": entry["slug"], "sourceUrl": source_url})
        if entry["migrationStatus"].startswith("Migrated —"):
            migrated_local_heroes += int(url.startswith(LOCAL_PREFIX))

    component_checks = {
        "archive registry image mapping": (ROOT / "src/lib/blog-content.ts", "getBlogMigrationEntry"),
        "article hero registry image mapping": (ROOT / "src/components/blog-article-template.tsx", "featuredImage?.url"),
        "OG/Twitter absolute local image mapping": (ROOT / "src/app/blog/[slug]/page.tsx", "toProductionAssetUrl"),
        "JSON-LD absolute local image mapping": (ROOT / "src/components/blog-article-template.tsx", "articleImage.startsWith"),
    }
    for name, (path, needle) in component_checks.items():
        if needle not in path.read_text(encoding="utf-8"):
            issues.append({"type": "missing-component-image-binding", "component": name})

    report = {
        "registryRecords": len(registry),
        "localBannerRecords": local_banner_records,
        "migratedRoutesWithLocalHero": migrated_local_heroes,
        "localBannerAssetsFound": sum(1 for path in (PUBLIC_ROOT / "ars-assets/blog-banners").rglob("*") if path.is_file()),
        "missingImagePaths": [issue for issue in issues if issue["type"] == "missing-local-banner-file"],
        "externalPrimaryBannerUrls": [issue for issue in issues if issue["type"] == "external-primary-banner"],
        "issues": issues,
    }
    print(json.dumps(report, indent=2))
    raise SystemExit(1 if issues else 0)


if __name__ == "__main__":
    main()
