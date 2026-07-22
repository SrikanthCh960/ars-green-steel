# Domain and redirect preparation — do not activate before client approval

## Domain and HTTPS

- Assign `arsgroup.in` only to the client-approved production deployment.
- Confirm the domain is verified and the HTTPS certificate is issued before making traffic live.
- Do not switch the testing/preview deployment to this domain.

## Blog redirects

- Configure the six approved retired source URLs as direct permanent `301` redirects to the destinations recorded in `blog-redirect-map.csv`.
- Keep `/blog.html` as a direct permanent redirect to `/blog`.
- Retain any existing non-blog legacy redirects after validating their target and avoiding chains.
- Test every redirect after deployment with headers; no retired URL may take more than one `301` hop.

## Safety controls

- Do not add a preview or testing hostname to the production sitemap.
- Do not submit a preview URL to Google Search Console.
- Do not mark the site production-ready until every field in `production-launch-verification-record.md` is complete and the client approval reference is recorded.
