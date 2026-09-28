# TMT bar quality before buying — new blog handoff

Status: local draft for ARS and SEO-team review; not published.

Source: `TMT_Bar_Quality_Check_SEO_Blog.docx` supplied by ARS on 28 September 2026.

Proposed route: `/blog/how-to-check-tmt-bar-quality-before-buying`.

This is a new editorial article, separate from the 88 migrated WordPress articles. The existing `/blog/check-tmt-bar-quality-on-site.html` article and its migration registry entry remain unchanged. The new article focuses on choosing and verifying bars before purchase; the older article covers on-site inspection. Related-article cards cross-link them.

## Content handling

- The document's SEO Elements and SEO Implementation Strategy are instructions for publishing, not article body copy. The visible article starts at the second occurrence of “How to Check TMT Bar Quality Before Buying” and ends after the twelfth FAQ.
- All 290 nonempty article blocks, including the three tables, are present in `src/data/editorial-blog-posts.json`. The document title is rendered as the page's single H1. Source heading levels are mapped beneath it. Three links wrap existing words without changing their visible copy: ARS Fe 550D, dealer network, and the official BIS verification channel.
- The existing ARS quality image is used for the local draft because the DOCX contains no embedded image. Its alt text describes the actual image; the document's suggested filename, alt text, caption, and two infographic concepts have not been treated as delivered assets.
- The 10-point infographic suggestion in the DOCX is numbered 11–20. Correct its numbering if an infographic is later approved and created.
- The post is in the site's existing “Construction knowledge” category. No publication date is asserted in the article or structured data until the actual release date is known.

## Editorial checks before publishing

- Confirm with the SEO team that this pre-purchase article has a distinct search purpose from the existing on-site quality-check article; retain and cross-link both.
- Review the source's BIS/ISI-on-bar wording against the current BIS marking and licence rules. BIS currently lists IS 1786:2008 under compulsory certification and offers licence verification via BIS Care; this does not by itself validate every phrasing in the draft.
- Review the advice to run a hand along a bar and to bend one manually. The article later distinguishes informal observations from prescribed bend/re-bend and laboratory tests, but those instructions should be checked for safe, accurate buyer guidance.
- Confirm the source's claims about underweight bars, batch-specific MTC availability, NABL-accredited in-house labs, and authorised-dealer practices with ARS quality staff. The article copy remains unchanged while these points await review.
- Confirm the final featured image and whether the optional checklist and weight-chart infographics will be supplied. The available source document has no image files.
- On release, record the real publication date and modification date, then verify Article JSON-LD, Open Graph image, canonical, archive listing, sitemap, and production indexing.

No existing blog article copy, canonical, redirect, or migration approval status was changed for this draft.
