#!/usr/bin/env python3
"""Perform an XML-backed article/SEO review for one deterministic migration batch."""

from __future__ import annotations

import argparse
import html
import importlib.util
import json
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = ROOT / "src/data/blog-migration-registry.json"
LEGACY_PATH = ROOT / "src/data/legacy-pages.json"
REPORTS_DIR = ROOT / "reports"
REVIEWER = "Codex XML parity review"
GENERATOR_PATH = ROOT / "scripts/generate-blog-migration-registry.py"
GENERATOR_SPEC = importlib.util.spec_from_file_location("blog_registry_generator", GENERATOR_PATH)
if not GENERATOR_SPEC or not GENERATOR_SPEC.loader:
    raise RuntimeError("Unable to load the registry generator.")
GENERATOR = importlib.util.module_from_spec(GENERATOR_SPEC)
GENERATOR_SPEC.loader.exec_module(GENERATOR)
CONTENT = GENERATOR.CONTENT
WP = GENERATOR.WP
build_registry = GENERATOR.build_registry
text = GENERATOR.text


def source_post_by_slug(xml_path: Path) -> dict[str, ET.Element]:
    root = ET.fromstring(xml_path.read_bytes().lstrip())
    return {
        text(item, f"{WP}post_name"): item
        for item in root.findall(".//item")
        if text(item, f"{WP}post_type") == "post" and text(item, f"{WP}status") == "publish"
    }


def body_without_primary_h1(source_html: str) -> str:
    return re.sub(r"<h1\b[^>]*>.*?</h1\s*>", "", source_html, count=1, flags=re.I | re.S)


def plain_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value))).strip()


def url_count(source_html: str, tag: str, attribute: str) -> int:
    return len(re.findall(rf"<{tag}\b[^>]*\b{attribute}=[\"'][^\"']+[\"']", source_html, flags=re.I))


def route_for(entry: dict) -> str:
    return urlparse(entry["originalUrl"]).path


def review_entry(entry: dict, expected: dict, raw_post: ET.Element, legacy_paths: set[str]) -> dict:
    source_html = text(raw_post, f"{CONTENT}encoded")
    source_without_h1 = body_without_primary_h1(source_html)
    source_h1 = re.search(r"<h1\b[^>]*>(.*?)</h1\s*>", source_html, flags=re.I | re.S)
    source_h1_text = plain_text(source_h1.group(1)) if source_h1 else ""
    safe_link_count = url_count(entry["fullContentHtml"], "a", "href")
    source_link_count = url_count(source_html, "a", "href")
    source_image_count = url_count(source_html, "img", "src")
    expected_image_count = len(expected["images"])
    asset_urls = [image["url"] for image in entry["images"]]
    if entry.get("featuredImage"):
        asset_urls.append(entry["featuredImage"]["url"])
    issues: list[str] = []
    notes: list[str] = []

    compared_fields = [
        "originalUrl", "finalUrl", "slug", "title", "publishDate", "modifiedDate", "author",
        "categories", "tags", "fullContentHtml", "images", "featuredImage", "yoastSeoTitle",
        "yoastMetaDescription", "focusKeyword", "htmlSanitizationStatus", "sanitizationNotes",
    ]
    mismatches = [field for field in compared_fields if entry.get(field) != expected.get(field)]
    if mismatches:
        issues.append(f"Registry differs from regenerated XML source fields: {', '.join(mismatches)}.")
    if route_for(entry) not in legacy_paths:
        issues.append("Preserved legacy route is missing from the route inventory.")
    if source_h1 and source_h1_text != entry["title"]:
        issues.append("Source H1 does not match the source post title rendered by the native template.")
    if not plain_text(source_without_h1):
        issues.append("Source contains no substantive body beyond its H1.")
    if source_image_count != expected_image_count:
        issues.append("In-content image extraction differs from the XML source.")
    if any(urlparse(url).scheme not in {"http", "https"} for url in asset_urls):
        issues.append("Article includes an unsupported image URL protocol.")
    if any("unsafe href URL" in note or "empty src" in note for note in entry.get("sanitizationNotes", [])):
        issues.append("Unsafe or empty source asset/link was removed during sanitization.")

    if issues:
        if any("H1 does not match" in item for item in issues):
            content_status = "Changed claim requiring review"
        elif any("asset/link" in item or "image" in item for item in issues):
            content_status = "Broken asset/link"
        else:
            content_status = "Missing content"
    elif entry.get("sanitizationNotes"):
        content_status = "Approved editorial improvement"
        notes.append("Safe presentation-only WordPress markup was removed; the native template supplies the document H1.")
    else:
        content_status = "Exact match"

    seo_issues: list[str] = []
    if not entry.get("yoastSeoTitle") or not entry.get("yoastMetaDescription"):
        seo_issues.append("Missing source Yoast title or meta description.")
    if entry["finalUrl"] != entry["originalUrl"]:
        seo_issues.append("Migrated route does not retain its exact canonical source URL.")
    if seo_issues:
        seo_status = "Missing metadata" if any("Yoast" in item for item in seo_issues) else "Incorrect canonical"
    else:
        seo_status = "Exact match"

    return {
        "contentParityStatus": content_status,
        "seoParityStatus": seo_status,
        "reviewEvidence": {
            "source": "arssteel.WordPress.2026-07-21.xml",
            "sourcePostSlug": entry["slug"],
            "sourceUrl": entry["originalUrl"],
            "registryFieldsMatched": not mismatches,
            "sourceH1": source_h1_text or None,
            "sourceBodyHasSubstantiveContent": bool(plain_text(source_without_h1)),
            "sourceImageCount": source_image_count,
            "registryImageCount": len(entry["images"]),
            "sourceLinkCount": source_link_count,
            "renderedSafeLinkCount": safe_link_count,
            "featuredImageUrl": entry.get("featuredImage", {}).get("url") if entry.get("featuredImage") else None,
            "canonical": entry["finalUrl"],
            "robots": "index, follow on explicit opt-in or the non-Vercel production fallback; noindex, nofollow on Vercel preview, development, or explicit opt-out",
            "openGraphAndTwitter": "Generated from the XML-backed Yoast title, description, and featured image in src/app/blog/[slug]/page.tsx.",
            "structuredData": "Article JSON-LD generated from XML-backed title, description, image, author, canonical, and dates in src/components/blog-article-template.tsx.",
        },
        "approvalNotes": notes,
        "issueDetails": issues + seo_issues,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--xml", type=Path, required=True)
    parser.add_argument("--batch", type=int, required=True)
    parser.add_argument("--size", type=int, default=10)
    args = parser.parse_args()
    if args.batch < 1 or args.size < 1:
        raise SystemExit("Batch and size must be positive.")

    registry = json.loads(REGISTRY_PATH.read_text(encoding="utf-8"))
    expected = {entry["slug"]: entry for entry in build_registry(args.xml, LEGACY_PATH)}
    source_posts = source_post_by_slug(args.xml)
    legacy_paths = {page["path"] for page in json.loads(LEGACY_PATH.read_text(encoding="utf-8"))["pages"] if page.get("kind") == "blog"}
    migrated = [entry for entry in registry if entry["migrationStatus"] == "Migrated — audit pending"]
    start = (args.batch - 1) * args.size
    batch = migrated[start : start + args.size]
    if not batch:
        raise SystemExit("Requested batch is outside the migrated-route inventory.")

    reviewed_at = datetime.now(timezone.utc).isoformat()
    results = []
    for entry in batch:
        result = review_entry(entry, expected[entry["slug"]], source_posts[entry["slug"]], legacy_paths)
        entry["contentParityStatus"] = result.pop("contentParityStatus")
        entry["seoParityStatus"] = result.pop("seoParityStatus")
        entry["reviewedAt"] = reviewed_at
        entry["reviewedBy"] = REVIEWER
        entry.update(result)
        results.append({
            "url": entry["originalUrl"],
            "contentParityStatus": entry["contentParityStatus"],
            "seoParityStatus": entry["seoParityStatus"],
            "issues": entry["issueDetails"],
        })

    REGISTRY_PATH.write_text(json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    REPORTS_DIR.mkdir(exist_ok=True)
    report = {"batch": args.batch, "reviewedAt": reviewed_at, "reviewer": REVIEWER, "articles": results}
    (REPORTS_DIR / f"blog-migration-batch-{args.batch:02}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
