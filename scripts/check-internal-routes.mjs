import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const legacy = JSON.parse(fs.readFileSync(path.join(root, "src/data/legacy-pages.json"), "utf8"));
const publicRoot = path.join(root, "public");
const validRoutes = new Set(["/", "/robots.txt", "/sitemap.xml"]);

function walkPages(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkPages(fullPath);
      continue;
    }

    if (entry.name !== "page.tsx") continue;
    const route = fullPath
      .replace(path.join(root, "src/app"), "")
      .replace(/\/page\.tsx$/, "") || "/";

    if (!route.includes("[")) validRoutes.add(route);
  }
}

function collectSourceFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSourceFiles(fullPath, files);
      continue;
    }

    if (/\.(tsx|ts)$/.test(entry.name)) files.push(fullPath);
  }

  return files;
}

walkPages(path.join(root, "src/app"));
for (const page of legacy.pages) validRoutes.add(page.path);

const hrefs = new Set();
const assetReferences = new Set();
const hrefRegex = /href=(?:\"([^\"]+)\"|'([^']+)'|\{\"([^\"]+)\"\})/g;
const assetRegex = /["'`]((?:\/(?:ars-assets|legacy-assets|videos)\/)[^"'`\s)}]+)/g;

for (const file of collectSourceFiles(path.join(root, "src"))) {
  const source = fs.readFileSync(file, "utf8");
  let match;
  while ((match = hrefRegex.exec(source))) {
    const href = match.slice(1).find(Boolean);
    if (!href || !href.startsWith("/")) continue;
    hrefs.add(href.split("#")[0].split("?")[0] || "/");
  }

  while ((match = assetRegex.exec(source))) {
    assetReferences.add(match[1]);
  }
}

const isPublicFile = (value) => fs.existsSync(path.join(publicRoot, value));
const missingRoutes = [...hrefs].filter((href) => !validRoutes.has(href) && !isPublicFile(href));
const missingAssets = [...assetReferences].filter((asset) => !isPublicFile(asset));

if (missingRoutes.length || missingAssets.length) {
  if (missingRoutes.length) {
    console.error("Missing internal routes:");
    for (const href of missingRoutes) console.error(`- ${href}`);
  }
  if (missingAssets.length) {
    console.error("Missing local assets:");
    for (const asset of missingAssets) console.error(`- ${asset}`);
  }
  process.exit(1);
}

console.log(
  `Internal route and asset check passed. Checked ${hrefs.size} internal hrefs, ${assetReferences.size} local assets, and ${validRoutes.size} routes.`,
);
