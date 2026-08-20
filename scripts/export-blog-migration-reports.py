#!/usr/bin/env python3
"""Export review-friendly SEO migration report artifacts from the canonical registry."""

from __future__ import annotations

import csv
import json
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "src/data/blog-migration-registry.json"
LEGACY_PAGES_PATH = ROOT / "src/data/legacy-pages.json"
REPORTS_DIR = ROOT / "reports"


def path_from_url(url: str) -> str:
    return urlparse(url).path.lstrip("/")


def write_json(path: Path, value: object) -> None:
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    legacy_data = json.loads(LEGACY_PAGES_PATH.read_text(encoding="utf-8"))
    legacy_pages = legacy_data["pages"]
    REPORTS_DIR.mkdir(exist_ok=True)

    legacy_by_path = {page.get("path", "").lstrip("/"): page for page in legacy_pages}
    redirects = [entry for entry in registry if entry["migrationStatus"] == "Redirected"]

    decisions = [
        {
            "originalUrl": entry["originalUrl"],
            "finalUrl": entry["finalUrl"],
            "decision": "Redirected — approved one-hop 301",
            "reason": "No exact migrated route exists. The final URL is the approved, relevant replacement article and is configured as a permanent redirect.",
            "redirectStatus": entry["redirectStatus"],
        }
        for entry in redirects
    ]
    write_json(REPORTS_DIR / "blog-missing-post-decisions.json", decisions)

    with (REPORTS_DIR / "blog-redirect-map.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=["original_url", "final_url", "http_status", "decision"])
        writer.writeheader()
        for decision in decisions:
            writer.writerow(
                {
                    "original_url": decision["originalUrl"],
                    "final_url": decision["finalUrl"],
                    "http_status": "301",
                    "decision": decision["decision"],
                }
            )

    metadata_changes = []
    for entry in registry:
        current_page = legacy_by_path.get(path_from_url(entry["originalUrl"]))
        current_title = current_page.get("title", "") if current_page else ""
        current_description = current_page.get("description", "") if current_page else ""
        route_exists = current_page is not None

        if entry["yoastSeoTitle"] != current_title:
            metadata_changes.append(
                {
                    "originalUrl": entry["originalUrl"],
                    "finalUrl": entry["finalUrl"],
                    "field": "title",
                    "currentValue": current_title,
                    "sourceValue": entry["yoastSeoTitle"],
                    "reason": "Restore the original WordPress Yoast SEO title as the default metadata.",
                    "approvalStatus": "Source-preservation default",
                    "routeExistsOnTesting": route_exists,
                }
            )
        if entry["yoastMetaDescription"] != current_description:
            metadata_changes.append(
                {
                    "originalUrl": entry["originalUrl"],
                    "finalUrl": entry["finalUrl"],
                    "field": "metaDescription",
                    "currentValue": current_description,
                    "sourceValue": entry["yoastMetaDescription"],
                    "reason": "Restore the original WordPress Yoast meta description; it takes precedence over generated excerpts.",
                    "approvalStatus": "Source-preservation default",
                    "routeExistsOnTesting": route_exists,
                }
            )
    write_json(REPORTS_DIR / "blog-metadata-changes.json", metadata_changes)

    summary = {
        "sourcePublishedPosts": len(registry),
        "testingRoutes": sum(1 for entry in registry if entry["migrationStatus"].startswith("Migrated —")),
        "requiredRedirects": len(redirects),
        "metadataChangesRecorded": len(metadata_changes),
        "titleChangesRecorded": sum(1 for change in metadata_changes if change["field"] == "title"),
        "descriptionChangesRecorded": sum(1 for change in metadata_changes if change["field"] == "metaDescription"),
        "htmlSanitizationPassed": sum(1 for entry in registry if entry.get("htmlSanitizationStatus") == "Passed"),
        "recordsWithSanitizationNotes": sum(1 for entry in registry if entry.get("sanitizationNotes")),
    }
    write_json(REPORTS_DIR / "blog-migration-report-summary.json", summary)
    unapproved_content = sum(
        1
        for entry in registry
        if entry["migrationStatus"].startswith("Migrated —")
        and entry["contentParityStatus"] not in {"Exact match", "Approved editorial improvement"}
    )
    unapproved_seo = sum(
        1
        for entry in registry
        if entry["migrationStatus"].startswith("Migrated —")
        and entry["seoParityStatus"] not in {"Exact match", "Approved editorial improvement"}
    )
    approved_content = summary["testingRoutes"] - unapproved_content
    approved_seo = summary["testingRoutes"] - unapproved_seo
    audit_state = "passes" if not unapproved_content and not unapproved_seo else "remains unresolved"
    (REPORTS_DIR / "blog-migration-summary.md").write_text(
        "# ARS blog migration deliverables\n\n"
        "- Source of truth: `arssteel.WordPress.2026-07-21.xml`\n"
        f"- Published WordPress posts registered: {summary['sourcePublishedPosts']}\n"
        f"- Migrated article routes reviewed: {summary['testingRoutes']}\n"
        f"- Approved one-hop 301 redirects: {summary['requiredRedirects']}\n"
        "- Testing indexing rule: `noindex, nofollow`; canonical points to `https://arsgroup.in`\n"
        "- Production indexing rule: `index, follow` only when `NEXT_PUBLIC_INDEXING_ENABLED=true`\n"
        f"- Sanitization: {summary['htmlSanitizationPassed']}/{summary['sourcePublishedPosts']} registry records passed; {summary['recordsWithSanitizationNotes']} have documented safe transformations.\n"
        f"- Content parity approved: {approved_content}/{summary['testingRoutes']}\n"
        f"- SEO parity approved: {approved_seo}/{summary['testingRoutes']}\n\n"
        "## Audit status\n\n"
        f"The migration audit {audit_state}: **{unapproved_content}** unresolved content-parity results and **{unapproved_seo}** unresolved SEO-parity results. "
        "A zero-issue audit confirms migration parity only; it does not mark the site production-ready or authorize deployment.\n",
        encoding="utf-8",
    )
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
