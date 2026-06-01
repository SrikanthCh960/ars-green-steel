# ARS Legacy Assets

This folder is reserved for assets migrated from the original ARS website.

The manifest at `legacy-asset-manifest.json` maps every image, PDF, and video-file reference found in the old sitemap crawl.

Current status:

- Source asset URLs are preserved.
- Intended local paths are assigned.
- 16 authentic ARS assets are currently available locally in this folder.
- 15 assets were copied from the existing project asset library because their filenames matched old-site references.
- 1 asset was downloaded directly before DNS access became unavailable.
- 395 assets are still missing locally because the current environment cannot consistently resolve `arsgroup.in` or external video thumbnail hosts.
- Pages render local assets where available and clearly mark missing source images without using invented people, team, founder, plant, certificate, award, product, or project imagery.
- Run `node scripts/download-legacy-assets.mjs` again when network access to `arsgroup.in` is available, or place client-supplied originals into the intended paths from `legacy-asset-manifest.json`.

Do not replace missing founder, team, plant, certification, award, product, or project images with invented placeholders. Use original ARS assets or client-approved replacements only.
