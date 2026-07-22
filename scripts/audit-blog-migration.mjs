#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registry = JSON.parse(fs.readFileSync(path.join(root, "src/data/blog-migration-registry.json"), "utf8"));
const legacy = JSON.parse(fs.readFileSync(path.join(root, "src/data/legacy-pages.json"), "utf8")).pages;
const blogPages = legacy.filter((page) => page.kind === "blog");
const requiredRedirects = new Set([
  "the-secret-to-a-successful-construction",
  "tamil-nadu-a-leading-hub-for-tmt-steel-bar-manufacturers",
  "why-are-tmt-bars-necessary-for-construction",
  "how-to-identify-top-quality-tmt-steel-bars-for-construction",
  "what-is-the-difference-between-tmt-hysd-and-tor-steel-bars",
  "what-is-tmt-sariya-features-benefits-uses",
]);
const issues = [];
const normalizeSlug = (value) => value.replace(/^blog\//, "").replace(/\.html$/, "");
const entryBySlug = new Map(registry.map((entry) => [normalizeSlug(entry.slug), entry]));
const entryByRoute = new Map(
  registry.map((entry) => [normalizeSlug(new URL(entry.originalUrl).pathname.replace(/^\//, "")), entry]),
);
const allowedTags = new Set([
  "p", "br", "strong", "em", "b", "i", "h2", "h3", "h4", "h5", "ul", "ol", "li", "table", "thead", "tbody", "tr", "th", "td", "caption", "blockquote", "a", "img", "figure", "figcaption", "div", "span",
]);
const isMigrated = (entry) => entry.migrationStatus.startsWith("Migrated —");

function auditSanitizedHtml(entry) {
  const html = entry.fullContentHtml || "";
  if (entry.htmlSanitizationStatus !== "Passed") issues.push({ type: "html-sanitization-failed", slug: entry.slug });
  if (/<\s*script\b/i.test(html)) issues.push({ type: "unsafe-script-tag", slug: entry.slug });
  if (/\son[a-z]+\s*=/i.test(html)) issues.push({ type: "unsafe-inline-event", slug: entry.slug });
  if (/(?:href|src)\s*=\s*["']\s*(?:javascript|data|vbscript):/i.test(html)) issues.push({ type: "unsafe-url-protocol", slug: entry.slug });
  if (/<\s*(iframe|object|embed|form|style)\b/i.test(html)) issues.push({ type: "unapproved-external-embed", slug: entry.slug });
  for (const match of html.matchAll(/<\s*([a-z0-9-]+)\b/gi)) {
    if (!allowedTags.has(match[1].toLowerCase())) issues.push({ type: "disallowed-html-element", slug: entry.slug, tag: match[1].toLowerCase() });
  }
  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\bsrc\s*=\s*["'][^"']+[^\s"']["']/i.test(match[1])) issues.push({ type: "empty-image-src", slug: entry.slug });
  }
}

if (registry.length !== 94) issues.push({ type: "missing-posts", detail: `Expected 94 XML posts; found ${registry.length}.` });
for (const entry of registry) {
  // A source record may legitimately contain only its H1; the native template renders
  // that title, while the article-level parity status controls whether it is approved.
  if (!entry.title) issues.push({ type: "missing-title", slug: entry.slug });
  if (!entry.yoastSeoTitle || !entry.yoastMetaDescription) issues.push({ type: "missing-metadata", slug: entry.slug });
  if (entry.seoParityStatus === "Approved editorial improvement" && !(entry.approvedChanges || []).length) issues.push({ type: "metadata-change-without-approval", slug: entry.slug });
  auditSanitizedHtml(entry);
  if (entry.migrationStatus === "Redirected" && (entry.redirectStatus !== "301 configured" || entry.contentParityStatus !== "Approved redirect" || entry.seoParityStatus !== "Approved redirect")) {
    issues.push({ type: "redirect-approval-incomplete", slug: entry.slug });
  }
  if (isMigrated(entry) && !["Exact match", "Approved editorial improvement"].includes(entry.contentParityStatus)) {
    issues.push({ type: "content-parity-unapproved", slug: entry.slug, status: entry.contentParityStatus });
  }
  if (isMigrated(entry) && !["Exact match", "Approved editorial improvement"].includes(entry.seoParityStatus)) {
    issues.push({ type: "seo-parity-unapproved", slug: entry.slug, status: entry.seoParityStatus });
  }
}
for (const slug of requiredRedirects) if (!entryBySlug.has(slug)) issues.push({ type: "redirect-source-missing-from-registry", slug });
for (const page of blogPages) {
  const route = normalizeSlug(page.path.replace(/^\//, ""));
  if (!entryByRoute.has(route)) issues.push({ type: "testing-route-not-in-source-registry", route });
}
const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    sourcePosts: registry.length,
    testingRoutes: blogPages.length,
    approvedRedirects: registry.filter((entry) => entry.migrationStatus === "Redirected" && entry.redirectStatus === "301 configured").length,
    unapprovedContentParityIssues: issues.filter((issue) => issue.type === "content-parity-unapproved").length,
    unapprovedSeoParityIssues: issues.filter((issue) => issue.type === "seo-parity-unapproved").length,
    issues: issues.length,
  },
  issues,
};
const output = path.join(root, "reports/blog-migration-audit.json");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.summary, null, 2));
console.log(`Wrote ${output}`);
process.exitCode = issues.length ? 1 : 0;
