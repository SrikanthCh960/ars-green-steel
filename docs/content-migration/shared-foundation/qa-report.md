# Shared Migration Foundation QA Report

## 1. Starting State

- Branch: `homepage-figma-refresh`
- HEAD: `e446c80986619d7dab35d8fa18168a51cd6712e7`
- Next.js: `16.2.6`, using the App Router under `src/app`.
- Existing untracked files before this work: `docs/`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml`. The two pnpm files are unrelated and remain untouched.
- Metadata previously used a root declaration plus page-specific title/description exports. Only the blog routes had a complete canonical, robots, Open Graph, and Twitter implementation.
- There was a generated `sitemap.ts`, but no `robots.ts` route. The sitemap used the production domain but mixed the legacy data set into the public URL list.
- Relevant public asset areas: `public/ars-assets`, `public/ars-assets/blog-banners`, `public/legacy-assets/images`, `public/legacy-assets/downloads`, and `public/videos`.

## 2. Metadata Changes

- Added `src/lib/site-metadata.ts` as the reusable metadata pattern.
- It centralises the production domain, production-only indexing condition, canonical URLs, Open Graph, Twitter, and the existing `/ars-assets/ARS-green-bg.png` default sharing image.
- Added page-level canonical/social/robots metadata to the audited foundation routes while retaining their existing page titles and descriptions.
- Dynamic legacy routes and approved blog routes retain page-specific metadata. Blog Yoast title, description, canonical, local image metadata, and Article JSON-LD remain XML-registry driven.
- Pages still need individual source-content reconciliation before their content is signed off; this work only establishes shared technical metadata.

## 3. Canonical Validation

- Canonicals use `https://arsgroup.in` through a single shared production-domain constant.
- No canonical is generated from localhost, preview, or testing hosts.
- The current route convention is no trailing slash. Query strings are not included in generated canonical URLs.
- The `/green-steel` versus `/ars-green-steel` content-boundary decision remains pending business approval. No consolidation was made.

## 4. Robots and Sitemap Validation

- Added `src/app/robots.ts`.
- An explicit `NEXT_PUBLIC_INDEXING_ENABLED=true` build, or the non-Vercel production fallback used by Hostinger, emits `index, follow`, an allow-all robots policy, and the production sitemap reference.
- All other environments emit `noindex, nofollow` metadata. Their robots policy allows page crawling so search engines can read the `noindex` directive, but it does not advertise the production sitemap.
- The sitemap uses only production-domain URLs, includes the 88 records with `migrationStatus: Migrated — approved`, and excludes all six redirect-only blog records.
- The sitemap route itself remains available on testing deployments, but is not advertised in their robots response and contains no testing-domain URLs.

## 5. Asset Findings

| Asset reference | Referencing pages/files | Resolution | Remaining blocker |
| --- | --- | --- | --- |
| `/ars-assets/ARS-GREEN-STEEL-Logo.png` | `src/components/home-hero.tsx` | Corrected to existing approved file `/legacy-assets/images/ARS-GREEN-STEEL-Logo.png`. | None. |
| `/legacy-assets/downloads/ARS-550D-CRS-Leaflets.pdf` | Home and Products product cards | The file is absent. Removed active download links and replaced them with a disabled “pending” state; the existing enquiry CTA remains available. | Approved leaflet still required before download can be enabled. |
| Local blog banner assets | Registry and blog templates | Previously validated as local assets; article hero, Open Graph/Twitter, and Article schema use the registry-backed local image paths. | None in this foundation pass. |

## 6. Internal-Link Findings

- Updated `scripts/check-internal-routes.mjs` so it recognises generated `/robots.txt` and `/sitemap.xml` routes and public files as valid targets.
- The checker also validates literal local `ars-assets`, `legacy-assets`, and `videos` references across TypeScript source files.
- The checked legacy-route set contains existing project-type, careers, steel-testing, and media routes. No new routes were created.
- The checker passed after the leaflet actions were disabled.

## 7. Files Changed

- `src/lib/site-metadata.ts`
- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/[slug]/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- audited page metadata files under `src/app/`
- `src/components/home-hero.tsx`
- `src/app/page.tsx`
- `src/app/products/page.tsx`
- `scripts/check-internal-routes.mjs`

## 8. Validation Commands and Results

- `pnpm --ignore-workspace qa:routes` — passed: 19 literal internal hrefs, 27 local asset references, and 140 valid routes checked.
- `pnpm --ignore-workspace lint` — existing application-wide lint failures remain, primarily `<a>` elements used for known internal routes in pre-existing page implementations. They are recorded for the page-reconciliation stream; this foundation change did not introduce them.
- `pnpm --ignore-workspace audit:blog-migration` — passed: 94 source records, 88 testing routes, six approved redirects, and zero parity issues.
- `pnpm --ignore-workspace build` — passed: compiled, type-checked, and generated 143 static pages, including `robots.txt` and `sitemap.xml`.

## 9. Browser and Device Testing Limitations

- Browser/device testing was not performed in this foundation pass. The prior research audit recorded enterprise-policy blocking of live testing. Responsive classes exist, but real-device and deployed-route checks remain required.

## 10. Unresolved Decisions

- Supply the approved `ARS-550D-CRS-Leaflets.pdf` before enabling a leaflet download.
- Approve the `/green-steel` educational versus `/ars-green-steel` brand/product canonical content boundary.
- Obtain the approved proof files for certificates, SGBC, and green-steel downloads before implementing their blocked content.
- Reconcile page content and correct pre-existing internal-link lint violations during the individual page stream.

## 11. Readiness Status

READY WITH NON-BLOCKING ISSUES

The shared technical foundation is ready for page implementation. Content reconciliation, approved source assets, physical-device checks, and the listed information-architecture decision remain outside this task.
