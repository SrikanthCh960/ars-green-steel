# ARS production-launch verification

This checklist begins only after the migration audit is zero. Passing it is required before any production-ready declaration or deployment.

## Vercel environment

- Confirm production has `NEXT_PUBLIC_SITE_URL=https://arsgroup.in`.
- Confirm Preview and Development do not use that exact value.
- Redeploy the production target only after the variable scope is verified.

## Indexing and canonical behaviour

- On production, confirm every reviewed article returns a canonical URL at `https://arsgroup.in/blog/<preserved-route>` and `index, follow` robots metadata.
- On Preview/staging, confirm the same articles retain their production canonical but emit `noindex, nofollow`.
- Confirm the approved Yoast title, meta description, Open Graph, Twitter metadata, and Article JSON-LD are present on representative articles from every batch.

## Redirect and route verification

- Check all 88 preserved article routes return `200` without an intermediate redirect.
- Check all 6 retired source routes return one-hop `301` responses to their approved destination.
- Check `/blog.html` redirects permanently to `/blog`.

## Sitemap and live URL checks

- Confirm `https://arsgroup.in/sitemap.xml` is accessible and contains each indexable preserved article URL exactly once.
- Confirm `https://arsgroup.in/robots.txt` references the production sitemap and does not block blog routes.
- Validate representative internal links, featured images, in-content images, the retained telephone CTA, and the restored steel-round-bar image on the production domain.

## Sign-off

- Record production URL, deployment ID, verifier, date/time, and HTTP evidence for each check.
- Re-run `pnpm --ignore-workspace audit:blog-migration` after deployment; it must remain at zero issues.
- Obtain ARS/client approval before declaring the site production-ready.
