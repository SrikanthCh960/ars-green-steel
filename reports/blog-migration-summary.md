# ARS blog migration deliverables

- Source of truth: `arssteel.WordPress.2026-07-21.xml`
- Published WordPress posts registered: 94
- Migrated article routes reviewed: 88
- Approved one-hop 301 redirects: 6
- Testing indexing rule: `noindex, nofollow`; canonical points to `https://arsgroup.in`
- Production indexing rule: explicit flag, or non-Vercel production fallback for Hostinger; Vercel preview remains `noindex, nofollow`
- Sanitization: 94/94 registry records passed; 44 have documented safe transformations.
- Content parity approved: 88/88
- SEO parity approved: 88/88

## Audit status

The migration audit passes: **0** unresolved content-parity results and **0** unresolved SEO-parity results. A zero-issue audit confirms migration parity only; it does not mark the site production-ready or authorize deployment.
