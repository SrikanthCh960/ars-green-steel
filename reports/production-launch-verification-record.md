# ARS production-launch verification record

**Status:** Prepared — pending client approval and production deployment

| Field | Value / evidence |
|---|---|
| Deployment ID | Pending |
| Production URL | Pending (`https://arsgroup.in`) |
| Launch date/time | Pending |
| Verifier | Pending |
| Client approval reference | Pending |
| Hostinger production variable confirmed | Pending: `NEXT_PUBLIC_INDEXING_ENABLED=true` available at build time |
| Preview variable safety confirmed | Confirmed 2026-07-22: no Vercel project variables configured; do not add the production value |
| Development variable safety confirmed | Confirmed 2026-07-22: no Vercel project variables configured; do not add the production value |
| Domain and HTTPS confirmed | Pending |
| Sitemap confirmation | Pending: 88 preserved article URLs, each once, no testing hostname |
| Robots.txt confirmation | Pending: production sitemap referenced; blog routes allowed |
| Canonical confirmation | Pending: `https://arsgroup.in/blog/[slug]` |
| Indexing confirmation | Pending: production articles emit `index, follow` |
| Redirect test results | Pending: 6 retired routes each direct one-hop `301`; `/blog.html` direct permanent redirect to `/blog` |
| Route status-code test results | Pending: 88 preserved article routes return `200` |
| Metadata/schema test results | Pending: approved Yoast metadata, Open Graph, Twitter, Article schema |
| Image and internal-link test results | Pending: featured/in-content images, telephone CTA, and internal links |
| Google Search Console sitemap submission | Pending: submit only `https://arsgroup.in/sitemap.xml` after live verification |
| Post-deployment migration audit | Pending: `0` issues required |
| Production-ready decision | Pending client approval and every completed verification above |
