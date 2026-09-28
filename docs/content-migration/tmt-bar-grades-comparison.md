# TMT bar grades comparison — live blog record

Status: live on `arsgroup.in`; production page verified on 28 September 2026. The exact deployment timestamp and editorial approval record are not documented here. Follow-up reviews below remain open.

Source: `Blog -1 TMT_Bar_Grades_SEO_Optimized_Blog.docx` supplied by ARS on 28 September 2026.

Live URL: https://arsgroup.in/blog/tmt-bar-grades-fe-500-fe-500d-fe-550-fe-550d — matching the document's recommended slug.

Release code: `ada8356` on `main`, with the four new posts and shared blog hero update.

The post compares Fe 500, Fe 500D, Fe 550, and Fe 550D. The site's migrated grades articles remain unchanged, including `/blog/difference-between-fe-500-tmt-grade-bar-and-fe-550d-tmt-grade-bar.html`, `/blog/what-are-the-different-grades-of-tmt-steel-bars-used-in-construction.html`, and `/blog/why-fe-550-and-fe-550d-are-the-most-preferred-tmt-bars.html`. The SEO team should distinguish this four-grade comparison from those posts and plan cross-links to avoid competing pages with the same search intent.

## Content handling

- The DOCX's SEO Elements and SEO Implementation Notes are publishing guidance, not article body. Its article title appears once as the hero H1. All body content from the introductory copy through the twelfth FAQ is included in `src/data/tmt-bar-grades-post.json`.
- The five-column, eight-row comparison table appears immediately after the Quick Comparison heading, as in the source. Its header row and feature labels use semantic table headings. Lists, grade subsections, quality checks, and FAQ answers are retained in source order.
- Three relevant source phrases link to the ARS Fe 550D product page, the quality-check article, and the earthquake-resistant TMT article. These links do not change the visible source wording.
- The DOCX contains no embedded image. The live article reuses the existing ARS product-comparison hero. The recommended four-grade featured image and comparison infographic are suggestions, not delivered assets; review whether to retain or replace the current hero.
- The document's meta title, description, slug, and Open Graph copy are used. No publication or modification date is asserted; record confirmed timestamps before adding them.

## Post-publication technical follow-ups

- Prioritize a qualified structural or materials engineer review of grade specifications and application claims. In particular, check statements that Fe 500 is being phased out, Fe 550D is preferred by most engineers, a given grade is sufficient for two-storey homes, and grade choice alone implies seismic resistance. The table's “Seismic Performance” row is an especially broad simplification. The source itself correctly advises following structural design, detailing, and engineer specifications; ensure this remains prominent.
- The [BIS IS 1786:2008 preview](https://services.bis.gov.in/tmp/SR1786.pdf) defines `D` as the category with enhanced specified minimum elongation at the same minimum yield strength. Confirm all numeric values and nuanced ductility claims against the applicable current standard and ARS product data.
- Copyedit source typos and awkward phrasing with SEO-team approval while retaining intended meaning. Do not silently rewrite technical claims.
- Audit the current image, metadata, Article schema, canonical, archive listing, sitemap, links, desktop/mobile layout, and Search Console indexing; page availability alone does not establish indexing. Record confirmed publication and modification timestamps before adding them.

No migrated blog copy, canonical, redirect, or migration approval status was changed by this release.
