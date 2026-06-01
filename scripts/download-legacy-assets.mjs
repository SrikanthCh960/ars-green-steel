import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const manifestPath = path.join(root, "public/legacy-assets/legacy-asset-manifest.json");
const legacyPagesPath = path.join(root, "src/data/legacy-pages.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const legacyPages = JSON.parse(fs.readFileSync(legacyPagesPath, "utf8"));

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const asset of manifest.assets) {
  const outPath = path.join(root, "public", asset.intendedLocalPath);
  if (fs.existsSync(outPath)) {
    skipped += 1;
    continue;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  try {
    const result = spawnSync("curl", [
      "-L",
      asset.sourceUrl,
      "-o",
      outPath,
      "--max-time",
      "30",
      "--silent",
      "--show-error",
    ], { encoding: "utf8" });

    if (result.status !== 0 || !fs.existsSync(outPath) || fs.statSync(outPath).size === 0) {
      if (fs.existsSync(outPath)) fs.rmSync(outPath);
      throw new Error((result.stderr || `curl exited ${result.status}`).trim());
    }
    downloaded += 1;
  } catch (error) {
    failed += 1;
    console.warn(`Failed: ${asset.sourceUrl} -> ${error.message}`);
  }
}

let ready = 0;
for (const asset of manifest.assets) {
  const outPath = path.join(root, "public", asset.intendedLocalPath);
  const isReady = fs.existsSync(outPath) && fs.statSync(outPath).size > 0;
  asset.downloaded = isReady;
  if (isReady) {
    asset.localPath = asset.intendedLocalPath;
    ready += 1;
  } else {
    delete asset.localPath;
  }
}

const manifestByUrl = new Map(manifest.assets.map((asset) => [asset.sourceUrl, asset]));
for (const page of legacyPages.pages) {
  for (const asset of page.assets || []) {
    const matchedAsset = manifestByUrl.get(asset.sourceUrl);
    if (!matchedAsset) continue;
    asset.downloaded = Boolean(matchedAsset.downloaded);
    if (matchedAsset.localPath) {
      asset.localPath = matchedAsset.localPath;
    } else {
      delete asset.localPath;
    }
  }
}

manifest.updatedAt = new Date().toISOString();
manifest.downloadedCount = ready;
manifest.missingCount = manifest.assets.length - ready;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
fs.writeFileSync(legacyPagesPath, JSON.stringify(legacyPages, null, 2) + "\n");

console.log(`Legacy asset download complete. Downloaded: ${downloaded}. Skipped: ${skipped}. Failed: ${failed}.`);
