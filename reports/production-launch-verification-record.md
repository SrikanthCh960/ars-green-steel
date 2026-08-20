# ARS production-launch verification record

**Status:** SEO indexing release verified on Hostinger; broader migration sign-off remains pending

| Field | Value / evidence |
|---|---|
| Deployment ID | Hostinger deployment for commit `a22ae35` — Completed / Current |
| Production URL | `https://arsgroup.in` |
| Launch date/time | 2026-08-20 16:40 IST |
| Verifier | Codex production launch check |
| Client approval reference | User requested Hostinger deployment in the active project task |
| Hostinger production variable confirmed | `NEXT_PUBLIC_INDEXING_ENABLED=true` stored; non-Vercel production fallback verified because Hostinger did not expose the saved flag during the first Next.js compilation |
| Preview variable safety confirmed | Confirmed 2026-07-22: no Vercel project variables configured; do not add the production value |
| Development variable safety confirmed | Confirmed 2026-07-22: no Vercel project variables configured; do not add the production value |
| Domain and HTTPS confirmed | Confirmed: `https://arsgroup.in` loaded successfully after deployment |
| Sitemap confirmation | Confirmed HTTP 200 XML at `https://arsgroup.in/sitemap.xml`; full 88-route uniqueness audit remains pending |
| Robots.txt confirmation | Confirmed: `User-Agent: *`, `Allow: /`, and production sitemap reference |
| Canonical confirmation | Pending: `https://arsgroup.in/blog/[slug]` |
| Indexing confirmation | Confirmed: homepage, blog archive, and representative product route emit `index, follow`; `/thank-you` intentionally emits `noindex, follow` |
| Redirect test results | Pending: 6 retired routes each direct one-hop `301`; `/blog.html` direct permanent redirect to `/blog` |
| Route status-code test results | Pending: 88 preserved article routes return `200` |
| Metadata/schema test results | Homepage canonical confirmed; Organization, WebSite, and WebPage JSON-LD confirmed live. Broader article parity remains pending. |
| Image and internal-link test results | Pending: featured/in-content images, telephone CTA, and internal links |
| Google Search Console sitemap submission | Pending: submit only `https://arsgroup.in/sitemap.xml` after live verification |
| Post-deployment migration audit | Pending: `0` issues required |
| Production-ready decision | Pending client approval and every completed verification above |
