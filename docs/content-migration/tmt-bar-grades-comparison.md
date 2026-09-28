# TMT bar grades comparison — new blog handoff

Status: local draft for ARS, SEO-team, and structural/materials engineer review; not published.

Source: `Blog -1 TMT_Bar_Grades_SEO_Optimized_Blog.docx` supplied by ARS on 28 September 2026.

Proposed route: `/blog/tmt-bar-grades-fe-500-fe-500d-fe-550-fe-550d`, matching the document's recommended slug.

The post compares Fe 500, Fe 500D, Fe 550, and Fe 550D. The site's migrated grades articles remain unchanged, including `/blog/difference-between-fe-500-tmt-grade-bar-and-fe-550d-tmt-grade-bar.html`, `/blog/what-are-the-different-grades-of-tmt-steel-bars-used-in-construction.html`, and `/blog/why-fe-550-and-fe-550d-are-the-most-preferred-tmt-bars.html`. Before release, the SEO team should distinguish this four-grade comparison from those posts and plan cross-links to avoid competing pages with the same search intent.

## Content handling

- The DOCX's SEO Elements and SEO Implementation Notes are publishing guidance, not article body. Its article title appears once as the hero H1. All body content from the introductory copy through the twelfth FAQ is included in `src/data/tmt-bar-grades-post.json`.
- The five-column, eight-row comparison table appears immediately after the Quick Comparison heading, as in the source. Its header row and feature labels use semantic table headings. Lists, grade subsections, quality checks, and FAQ answers are retained in source order.
- Three relevant source phrases link to the ARS Fe 550D product page, the quality-check article, and the earthquake-resistant TMT article. These links do not change the visible source wording.
- The DOCX contains no embedded image. The draft reuses the existing ARS product-comparison hero. The recommended four-grade featured image and comparison infographic are suggestions, not delivered assets; replace or approve the provisional hero before publication.
- The document's meta title, description, slug, and Open Graph copy are used. No publication or modification date is asserted before release.

## Technical and release checks

- Have a qualified structural or materials engineer review grade specifications and application claims before publication. In particular, check statements that Fe 500 is being phased out, Fe 550D is preferred by most engineers, a given grade is sufficient for two-storey homes, and grade choice alone implies seismic resistance. The table's “Seismic Performance” row is an especially broad simplification. The source itself correctly advises following structural design, detailing, and engineer specifications; ensure this remains prominent.
- The [BIS IS 1786:2008 preview](https://services.bis.gov.in/tmp/SR1786.pdf) defines `D` as the category with enhanced specified minimum elongation at the same minimum yield strength. Confirm all numeric values and nuanced ductility claims against the applicable current standard and ARS product data.
- Copyedit source typos and awkward phrasing with SEO-team approval while retaining intended meaning. Do not silently rewrite technical claims.
- Verify the final image, metadata, Article schema, canonical, archive listing, sitemap, links, desktop/mobile layout, and production indexing. Record actual publication and modification dates at release.

No migrated blog copy, canonical, redirect, or migration approval status was changed for this draft.
