import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const legacy = JSON.parse(fs.readFileSync(path.join(root, "src/data/legacy-pages.json"), "utf8"));
const validRoutes = new Set(["/"]);

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
const hrefRegex = /href=(?:\"([^\"]+)\"|'([^']+)'|\{\"([^\"]+)\"\})/g;

for (const file of collectSourceFiles(path.join(root, "src"))) {
  const source = fs.readFileSync(file, "utf8");
  let match;
  while ((match = hrefRegex.exec(source))) {
    const href = match.slice(1).find(Boolean);
    if (!href || !href.startsWith("/")) continue;
    hrefs.add(href.split("#")[0].split("?")[0] || "/");
  }
}

const missing = [...hrefs].filter((href) => !validRoutes.has(href));

if (missing.length) {
  console.error("Missing internal routes:");
  for (const href of missing) console.error(`- ${href}`);
  process.exit(1);
}

console.log(`Internal route check passed. Checked ${hrefs.size} internal hrefs against ${validRoutes.size} routes.`);
