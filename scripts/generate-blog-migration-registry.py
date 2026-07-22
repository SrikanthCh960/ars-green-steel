#!/usr/bin/env python3
"""Build the source-of-truth ARS WordPress blog migration registry."""

import argparse
import json
import re
import xml.etree.ElementTree as ET
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

WP = "{http://wordpress.org/export/1.2/}"
CONTENT = "{http://purl.org/rss/1.0/modules/content/}"
EXCERPT = "{http://wordpress.org/export/1.2/excerpt/}"

REDIRECTS = {
    "the-secret-to-a-successful-construction": "things-to-keep-in-mind-before-buying-tmt-steel-bars.html",
    "tamil-nadu-a-leading-hub-for-tmt-steel-bar-manufacturers": "check-out-why-ars-is-the-leading-steel-manufacturing-company-in-tamil-nadu.html",
    "why-are-tmt-bars-necessary-for-construction": "what-makes-tmt-steel-bars-important-for-a-long-lasting-building-construction.html",
    "how-to-identify-top-quality-tmt-steel-bars-for-construction": "how-to-identify-top-quality-tmt-steel-bars-for-building-construction.html",
    "what-is-the-difference-between-tmt-hysd-and-tor-steel-bars": "tmt-bars-vs-hysd-bars.html",
    "what-is-tmt-sariya-features-benefits-uses": "what-is-tmt-bar-and-what-are-its-advantages.html",
}
BANNER_ROOT = Path(__file__).resolve().parents[1] / "public/ars-assets/blog-banners"

ALLOWED_TAGS = {
    "p", "br", "strong", "em", "b", "i", "h2", "h3", "h4", "h5", "ul", "ol", "li",
    "table", "thead", "tbody", "tr", "th", "td", "caption", "blockquote", "a", "img",
    "figure", "figcaption", "div", "span",
}
VOID_TAGS = {"br", "img"}
DROP_CONTENT_TAGS = {"script", "style", "iframe", "object", "embed", "form"}
ALLOWED_ATTRIBUTES = {
    "a": {"href", "target", "title", "rel"},
    "img": {"src", "alt", "width", "height"},
    "th": {"colspan", "rowspan", "scope"},
    "td": {"colspan", "rowspan"},
    "div": {"class"},
    "span": {"class"},
}


def safe_url(value, image=False):
    value = value.strip()
    if not value:
        return None
    parsed = urlparse(value)
    if parsed.scheme and parsed.scheme.lower() not in ({"http", "https"} if image else {"http", "https", "mailto", "tel"}):
        return None
    if value.lower().startswith(("javascript:", "data:", "vbscript:")):
        return None
    return value


class ArticleHtmlSanitizer(HTMLParser):
    """Allowlist sanitizer used once while building the registry, never in the client."""

    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.output = []
        self.notes = []
        self.drop_depth = 0
        self.h1_depth = 0

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if self.drop_depth:
            self.drop_depth += 1
            return
        if tag == "h1":
            self.notes.append("Removed duplicate source <h1>; the native article template renders the source title as the document H1.")
            self.h1_depth += 1
            return
        if tag in DROP_CONTENT_TAGS:
            self.notes.append(f"Removed disallowed <{tag}> element and its contents.")
            self.drop_depth = 1
            return
        if tag not in ALLOWED_TAGS:
            self.notes.append(f"Removed disallowed <{tag}> element.")
            return
        cleaned = []
        attribute_map = dict(attrs)
        for name, value in attrs:
            name = name.lower()
            value = value or ""
            if name.startswith("on") or name == "style":
                self.notes.append(f"Removed unsafe {name} attribute from <{tag}>.")
                continue
            if name not in ALLOWED_ATTRIBUTES.get(tag, set()):
                continue
            if name in {"href", "src"}:
                safe_value = safe_url(value, image=name == "src")
                if not safe_value:
                    self.notes.append(f"Removed unsafe {name} URL from <{tag}>.")
                    continue
                value = safe_value
            if name == "target" and value != "_blank":
                continue
            cleaned.append((name, value))
        if tag == "img":
            if not attribute_map.get("src", "").strip():
                self.notes.append("Removed image with empty src.")
                return
            if "alt" not in attribute_map:
                cleaned.append(("alt", ""))
                self.notes.append("Image without source alt text was marked decorative (alt=\"\").")
        if tag == "a" and attribute_map.get("target") == "_blank":
            href = next((value for name, value in cleaned if name == "href"), "")
            if href.startswith(("http://", "https://")):
                cleaned = [(name, value) for name, value in cleaned if name != "rel"]
                cleaned.append(("rel", "noopener noreferrer"))
        attrs_text = "".join(f' {name}="{escape(value, quote=True)}"' for name, value in cleaned)
        self.output.append(f"<{tag}{attrs_text}>")

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        tag = tag.lower()
        if self.drop_depth:
            self.drop_depth -= 1
            return
        if tag == "h1" and self.h1_depth:
            self.h1_depth -= 1
            return
        if tag in ALLOWED_TAGS and tag not in VOID_TAGS:
            self.output.append(f"</{tag}>")

    def handle_data(self, data):
        if not self.drop_depth and not self.h1_depth:
            self.output.append(escape(data, quote=False))

    def handle_entityref(self, name):
        if not self.drop_depth and not self.h1_depth:
            self.output.append(f"&{name};")

    def handle_charref(self, name):
        if not self.drop_depth and not self.h1_depth:
            self.output.append(f"&#{name};")


def sanitize_html(html):
    sanitizer = ArticleHtmlSanitizer()
    sanitizer.feed(html)
    sanitizer.close()
    return "".join(sanitizer.output), sanitizer.notes


def text(element, tag):
    value = element.findtext(tag)
    return value.strip() if value else ""


def meta(item):
    values = {}
    for node in item.findall(f"{WP}postmeta"):
        key = text(node, f"{WP}meta_key")
        value = text(node, f"{WP}meta_value")
        if key:
            values[key] = value
    return values


def images(html):
    found = []
    for match in re.finditer(r"<img\b[^>]*>", html, flags=re.I):
        tag = match.group(0)
        src = re.search(r'''\bsrc=["']([^"']+)''', tag, flags=re.I)
        alt = re.search(r'''\balt=["']([^"']*)''', tag, flags=re.I)
        if src:
            found.append({"url": src.group(1), "alt": alt.group(1) if alt else ""})
    return found


def local_featured_image(slug, image):
    if not image:
        return None
    source_url = image["url"]
    file_name = Path(urlparse(source_url).path).name
    local_path = BANNER_ROOT / slug / file_name
    if not local_path.is_file():
        raise FileNotFoundError(f"Missing local banner for {slug}: {local_path}")
    return {
        "url": f"/ars-assets/blog-banners/{slug}/{file_name}",
        "alt": image["alt"],
        "sourceUrl": source_url,
        "fileName": file_name,
    }


def source_h1(html):
    match = re.search(r"<h1\b[^>]*>(.*?)</h1\s*>", html, flags=re.I | re.S)
    if not match:
        return ""
    return re.sub(r"\s+", " ", unescape(re.sub(r"<[^>]+>", " ", match.group(1)))).strip()


def build_registry(xml_path, legacy_path):
    raw = Path(xml_path).read_bytes().lstrip()
    root = ET.fromstring(raw)
    legacy = json.loads(Path(legacy_path).read_text())
    current_paths = {page["path"] for page in legacy["pages"] if page.get("kind") == "blog"}
    attachments = {}
    for item in root.findall(".//item"):
        if text(item, f"{WP}post_type") != "attachment":
            continue
        attachment_id = text(item, f"{WP}post_id")
        attachment_url = text(item, f"{WP}attachment_url")
        if attachment_id and attachment_url:
            attachments[attachment_id] = {"url": attachment_url, "alt": text(item, "title")}
    entries = []

    for item in root.findall(".//item"):
        if text(item, f"{WP}post_type") != "post" or text(item, f"{WP}status") != "publish":
            continue
        slug = text(item, f"{WP}post_name")
        original_url = text(item, "link")
        if not slug or not original_url:
            continue
        source_html, sanitization_notes = sanitize_html(text(item, f"{CONTENT}encoded"))
        taxonomy = item.findall("category")
        categories = [n.text.strip() for n in taxonomy if n.text and n.get("domain") == "category"]
        tags = [n.text.strip() for n in taxonomy if n.text and n.get("domain") == "post_tag"]
        seo = meta(item)
        source_path = re.sub(r"^https?://[^/]+", "", original_url)
        redirected_to = REDIRECTS.get(slug)
        final_path = f"/blog/{redirected_to}" if redirected_to else source_path
        is_migrated = source_path in current_paths
        status = "Migrated — audit pending" if is_migrated else "Redirected" if redirected_to else "Missing content"
        entries.append({
            "originalUrl": original_url,
            "finalUrl": f"https://arsgroup.in{final_path}",
            "slug": slug,
            "title": text(item, "title"),
            "sourceH1": source_h1(text(item, f"{CONTENT}encoded")),
            "renderedH1": text(item, "title"),
            "publishDate": text(item, f"{WP}post_date"),
            "modifiedDate": text(item, f"{WP}post_modified"),
            "author": text(item, "{http://purl.org/dc/elements/1.1/}creator"),
            "categories": categories,
            "tags": tags,
            "fullContentHtml": source_html,
            "excerptHtml": text(item, f"{EXCERPT}encoded"),
            "images": images(source_html),
            "featuredImage": local_featured_image(slug, attachments.get(seo.get("_thumbnail_id", ""))),
            "yoastSeoTitle": seo.get("_yoast_wpseo_title", ""),
            "yoastMetaDescription": seo.get("_yoast_wpseo_metadesc", ""),
            "focusKeyword": seo.get("_yoast_wpseo_focuskw", ""),
            "migrationStatus": status,
            "contentParityStatus": "Not audited" if is_migrated else "Approved redirect" if redirected_to else "Not audited",
            "seoParityStatus": "Not audited" if is_migrated else "Approved redirect" if redirected_to else "Not audited",
            "redirectStatus": "301 configured" if redirected_to else "Exact route required",
            "htmlSanitizationStatus": "Passed",
            "sanitizationNotes": sanitization_notes,
            "approvedChanges": [],
            "notes": "Source-of-truth values extracted from WordPress XML. Do not approve parity until the rendered article is compared section by section.",
        })

    return sorted(entries, key=lambda entry: entry["originalUrl"])


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("xml")
    parser.add_argument("legacy")
    parser.add_argument("output")
    args = parser.parse_args()
    registry = build_registry(args.xml, args.legacy)
    Path(args.output).write_text(json.dumps(registry, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(registry)} published posts to {args.output}")
