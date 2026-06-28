# ARS Blog Inventory and Implementation Plan

## Objective

Rebuild the ARS blog as a native, statically generated Next.js experience.

Phase 1 will not use WordPress, a headless CMS, or any third-party publishing API. Article content will live in the repository and use reusable Next.js archive and article templates.

Phase 2 may add an authenticated article creation form without requiring a visual redesign or URL migration.

## Current State

- The original ARS blog archive is available at `/blog.html` and `/blog/`.
- The redesign currently preserves 88 article URLs through `src/app/blog/[slug]/page.tsx`.
- Existing articles use `LegacyPageRenderer`, so they still feel like migrated documents rather than polished editorial pages.
- A bespoke native Next.js archive now exists at `/blog`.
- `/blog.html` permanently redirects to `/blog`.
- The archive provides featured content, topic filters, search, and progressive loading for all 88 preserved articles.
- The archive implementation is local work until it is committed and pushed.
- Extracted article titles and sections need editorial cleanup before client presentation.
- Existing `.html` article URLs must remain valid for SEO and backlink continuity.

## Complete Blog Route Inventory

1. `/blog/corrosion-resistance-steel.html` - Everything You Need to Know About Corrosion Resistance Steel
2. `/blog/exploring-the-different-types-of-tmt-steel-bars.html` - Exploring 8mm, 10mm, 12mm, and 16mm TMT Steel Bars
3. `/blog/steel-round-bar.html` - Steel Round Bars: Types, Advantages, and Uses
4. `/blog/effects-of-gst-on-the-steel-industries-in-india.html` - Effects of GST on the Steel Industry in India
5. `/blog/tmt-bar-buying-guide.html` - TMT Bar Buying Guide: Grades, Sizes, Prices, and Brands
6. `/blog/green-steel-vs-traditional-steel.html` - Green Steel vs Traditional Steel
7. `/blog/building-materials-used-in-construction.html` - Building Materials Used in Construction
8. `/blog/difference-between-shallow-and-deep-foundation.html` - Difference Between Shallow and Deep Foundations
9. `/blog/reinforced-cement-concrete.html` - A Complete Guide to Reinforced Cement Concrete
10. `/blog/concrete-bleeding.html` - Concrete Bleeding: Causes, Effects, and Prevention
11. `/blog/check-tmt-bar-quality-on-site.html` - How to Check TMT Bar Quality On-Site
12. `/blog/greenpro-certified-steel.html` - GreenPro Certified Steel
13. `/blog/green-steel-and-its-significance.html` - Green Steel and Its Significance
14. `/blog/importance-of-tds-in-steel-manufacturing` - TDS and Its Significance in Steel Production
15. `/blog/difference-between-corrosion-resistant-steel-and-regular-steel.html` - Corrosion-Resistant Steel vs Regular Steel
16. `/blog/future-of-tmt-steel-bar-construction-industry-india.html` - Future of TMT Steel Bars in India
17. `/blog/steel-required-for-beams-columns-slabs-and-foundation.html` - Steel Required for Beams, Columns, Slabs, and Foundations
18. `/blog/types-of-piling-foundations-construction.html` - Types of Piling Foundations
19. `/blog/repair-concrete-cracks.html` - Effective Ways to Repair Concrete Cracks
20. `/blog/average-house-construction-cost-in-india-per-square-feet.html` - Average House Construction Cost in India
21. `/blog/difference-between-pcc-and-rcc.html` - PCC vs RCC
22. `/blog/different-types-of-slabs-in-construction.html` - Different Types of Slabs in Construction
23. `/blog/different-types-of-footings-in-construction.html` - Different Types of Footings in Construction
24. `/blog/tmt-full-form.html` - TMT Full Form and Why It Matters
25. `/blog/types-of-curing-methods-in-concrete-construction.html` - Curing Methods in Concrete Construction
26. `/blog/latest-steel-regulations-tmt-bar-manufacturers.html` - Ministry of Steel Regulations for TMT Manufacturers
27. `/blog/concrete-mixing-ratio.html` - Different Concrete Mixing Ratios
28. `/blog/manufacturing-process-of-tmt-bar.html` - Manufacturing Process of TMT Bars
29. `/blog/why-fe-550-and-fe-550d-are-the-most-preferred-tmt-bars.html` - Why Fe 550 and Fe 550D Are Preferred TMT Bars
30. `/blog/different-types-of-beams-in-construction.html` - Different Types of Beams in Construction
31. `/blog/tips-to-store-and-handle-tmt-steel-bars.html` - TMT Bar Storage and Handling Tips
32. `/blog/types-of-foundations-in-construction.html` - Types of Foundations in Construction
33. `/blog/8-mm-rod-weight.html` - 8mm Rod Weight Guide
34. `/blog/what-is-tmt-bar-and-what-are-its-advantages.html` - What Is a TMT Bar and What Are Its Advantages?
35. `/blog/different-types-of-tmt-steel-bars-used-in-construction.html` - TMT Steel Bar Types Used in Construction
36. `/blog/how-tmt-bars-are-transforming-rural-infrastructure-development.html` - TMT Bars in Rural Infrastructure Development
37. `/blog/different-diameters-tmt-steel-bar.html` - TMT Steel Bar Diameters and Uses
38. `/blog/everything-about-hysd-bars.html` - Everything About HYSD Bars
39. `/blog/how-to-identify-top-quality-tmt-steel-bars-for-building-construction.html` - How to Identify Quality TMT Steel Bars
40. `/blog/what-are-the-different-types-of-tmt-steel-bars-used-in-construction.html` - Different TMT Grades, Types, and Uses
41. `/blog/different-type-of-steel-reinforcement-bars.html` - Types of Steel Reinforcement Bars
42. `/blog/top-key-factors-that-affect-tmt-steel-bar-price-in-india.html` - Factors Affecting TMT Steel Prices in India
43. `/blog/demystifying-manufacturing-process-of-tmt-bars.html` - Demystifying the TMT Bar Manufacturing Process
44. `/blog/exploring-rebar-types-uses-importance-building-stability.html` - Rebar Types, Uses, and Importance
45. `/blog/what-makes-tmt-steel-bars-important-for-a-long-lasting-building-construction.html` - Why TMT Bars Matter for Long-Lasting Construction
46. `/blog/difference-between-fe-500-tmt-grade-bar-and-fe-550d-tmt-grade-bar.html` - Fe 500 vs Fe 550D TMT Bars
47. `/blog/what-are-the-different-types-of-tmt-steel-bars.html` - Different Types of TMT Steel Bars
48. `/blog/why-tmt-bars-are-most-preferred-over-tor-steel.html` - Why TMT Bars Are Preferred Over TOR Steel
49. `/blog/know-the-tmt-steel-price-today.html` - Understanding Today's TMT Steel Price
50. `/blog/how-are-tmt-bars-changing-the-view-of-construction.html` - How TMT Bars Are Changing Construction
51. `/blog/the-best-tmt-bars-for-construction.html` - Best TMT Bars for Construction
52. `/blog/best-quality-tmt-bar-in-india.html` - Best Quality TMT Bars in India
53. `/blog/5-benefits-of-choosing-ars-steel-tmt-bar-in-building-your-dream-home.html` - Benefits of ARS TMT Bars for Home Construction
54. `/blog/steel-bar-sizes.html` - Steel Bar Sizes Guide
55. `/blog/everything-you-need-to-know-about-550d-tmt-bars.html` - Everything About 550D TMT Bars
56. `/blog/what-are-the-different-grades-of-tmt-steel-bars-used-in-construction.html` - TMT Steel Bar Grades Used in Construction
57. `/blog/how-to-choose-tmt-bars.html` - How to Choose TMT Bars
58. `/blog/choose-the-best-steel-bar-for-construction.html` - Choosing the Best Steel Bar for Construction
59. `/blog/12mm-rod-weight-chart.html` - 12mm Rod Weight Chart
60. `/blog/best-tmt-bars-in-india-for-construction.html` - Best TMT Bars in India for Construction
61. `/blog/things-to-keep-in-mind-before-buying-tmt-steel-bars.html` - What to Know Before Buying TMT Steel Bars
62. `/blog/what-is-tmt-rebar-difference-between-tmt-bar-and-rebar.html` - TMT Bars vs Rebar
63. `/blog/tmt-steel-bar-weight.html` - TMT Steel Bar Weight Guide
64. `/blog/check-out-the-difference-between-tmt-bar-and-tor-steel-bar.html` - TMT Bars vs TOR Steel Bars
65. `/blog/what-makes-steel-bars-last-long-in-construction.html` - What Makes Steel Bars Last in Construction
66. `/blog/choosing-quality-tmt-bar-manufacturers.html` - Choosing a Quality TMT Bar Manufacturer
67. `/blog/where-to-get-good-quality-tmt-bars-at-best-price-in-tamil-nadu.html` - Quality TMT Bars at the Best Price in Tamil Nadu
68. `/blog/what-makes-tmt-steel-bars-so-highly-flexible-among-all-steel-bars.html` - Why TMT Steel Bars Are Highly Flexible
69. `/blog/check-out-why-ars-is-the-leading-steel-manufacturing-company-in-tamil-nadu.html` - Why ARS Is a Leading Steel Manufacturer in Tamil Nadu
70. `/blog/chennai-tmt-bars-make-an-impact-in-the-future.html` - Chennai TMT Bars and the Future
71. `/blog/which-tmt-bars-are-best-for-house-construction.html` - Best TMT Bars for House Construction
72. `/blog/5-things-to-know-about-tmt-steel-price-before-starting-construction.html` - TMT Steel Price: Five Things to Know
73. `/blog/earthquake-resistant-tmt-bars.html` - Earthquake-Resistant TMT Bars
74. `/blog/rcc-column-footing-types-uses.html` - RCC Column Footing: Types and Uses
75. `/blog/why-tmt-bars-are-the-backbone-of-modern-structural-engineering.html` - Why TMT Bars Are the Backbone of Structural Engineering
76. `/blog/rising-steel-imports-india-ars-green-steel.html` - Rising Steel Imports and the Role of ARS Green Steel
77. `/blog/good-tmt-bar-qualities.html` - Qualities of a Good TMT Bar
78. `/blog/rcc-column-reinforcement-types.html` - RCC Column Reinforcement Types
79. `/blog/what-is-bar-bending-schedule.html` - What Is a Bar Bending Schedule?
80. `/blog/column-reinforcement-in-construction.html` - Column Reinforcement in Construction
81. `/blog/what-is-centering-in-construction.html` - Centering Work in Construction
82. `/blog/what-is-green-steel.html` - What Is Green Steel?
83. `/blog/green-steel-sustainability-future.html` - Why Green Steel Matters for a Sustainable Future
84. `/blog/corrosion-resistant-tmt-bars.html` - Corrosion-Resistant TMT Bars for Coastal and Rainy Regions
85. `/blog/house-construction-process-in-india.html` - House Construction Process in India
86. `/blog/tmt-bars-vs-hysd-bars.html` - TMT Bars vs HYSD Bars
87. `/blog/green-steel-manufacturing-using-clean-energy.html` - How Green Steel Is Produced Using Recycling and Clean Energy
88. `/blog/what-is-crs-steel-grades-standards-quality.html` - CRS Steel Grades and Quality Standards

## Recommended Content Categories

### TMT Products and Selection

Grades, sizes, weights, pricing, buying guides, bar quality, product comparisons, storage, and product selection.

### Construction Knowledge

Foundations, beams, columns, slabs, reinforcement, RCC, PCC, curing, concrete, centering, and house construction.

### Green Steel and Sustainability

Green steel, GreenPro, recycled production, carbon reduction, corrosion resistance, and sustainable construction.

### Manufacturing and Quality

TMT production, steel testing, TDS, regulations, quality standards, flexibility, durability, and certification.

### Industry Insights

GST, steel imports, market direction, regulation changes, rural infrastructure, and the future of construction steel.

## Phase 1 Architecture

### Content Storage

Use repository-managed content rather than 88 manually duplicated page components.

Recommended structure:

```text
src/content/blog/
  articles.ts
  categories.ts
  related-posts.ts
```

Each article should use a typed content object containing:

- `slug`
- `legacyPath`
- `title`
- `excerpt`
- `publishedAt`
- `updatedAt`
- `readTime`
- `category`
- `tags`
- `heroImage`
- `heroImageAlt`
- `author`
- `seoTitle`
- `seoDescription`
- `sections`
- `faq`
- `relatedSlugs`
- `verificationStatus`

The content remains part of the Next.js build and is statically generated at deployment.

### Required Routes

- `/blog` - modern archive
- `/blog.html` - permanent redirect or equivalent preserved entry to `/blog`
- `/blog/[slug]` - reusable static article template
- Existing `.html` article paths remain unchanged

### Reusable Components

- `BlogArchiveHero`
- `BlogFeaturedArticle`
- `BlogCategoryFilter`
- `BlogCard`
- `BlogGrid`
- `BlogArticleHero`
- `BlogArticleBody`
- `BlogTableOfContents`
- `BlogCallout`
- `BlogFaq`
- `BlogRelatedArticles`
- `BlogNewsletterCta`
- `BlogBusinessCta`

All components should follow the approved ARS design system and shared header/footer.

## Blog Archive Design

1. Compact 60vh-or-less archive hero with title, short introduction, and featured article.
2. Category tabs or filters for the five content groups.
3. Featured articles row for high-value content.
4. Search by article title, tag, or topic.
5. Responsive article grid with pagination or progressive load.
6. Conversion band linking to price, calculator, dealer locator, and quote.
7. Shared ARS footer.

The archive should prioritize useful discovery over a chronological wall of cards.

## Article Page Design

1. Breadcrumbs.
2. Category, publish date, read time, and title.
3. Clear excerpt and hero image.
4. Editorial body with restrained reading width.
5. Optional sticky table of contents on desktop.
6. Inline callouts, comparison tables, lists, and technical notes.
7. Relevant product or service CTA based on article topic.
8. FAQ section when the source contains useful questions.
9. Related article cards.
10. Final enquiry CTA and shared footer.

The reading column should be approximately 720-800px wide. Technical tables and media may break into a wider container when necessary.

## Migration Order

### Batch 1 - Foundation and Archive

- Build typed blog content model. `Done`
- Build modern `/blog` archive. `Done`
- Preserve `/blog.html` and every existing `.html` URL. `Done for archive redirect and preserved article routes`
- Build reusable article template. `Pending`
- Add article metadata, canonical URLs, Open Graph, and structured data. `Partially done for archive; pending article template`

### Batch 2 - Ten Priority Articles

1. What Is Green Steel?
2. How Green Steel Is Produced
3. What Is CRS Steel?
4. Corrosion-Resistant TMT Bars
5. TMT Bar Buying Guide
6. How to Check TMT Bar Quality On-Site
7. TMT Bars vs HYSD Bars
8. House Construction Process in India
9. Average House Construction Cost in India
10. Earthquake-Resistant TMT Bars

These articles have the strongest product, SEO, education, and enquiry value.

### Batch 3 - Product and Buying Guides

Migrate size, weight, grade, price, quality, comparison, storage, and manufacturer-selection articles.

### Batch 4 - Construction Education

Migrate foundations, beams, slabs, columns, RCC, PCC, curing, centering, concrete, and reinforcement articles.

### Batch 5 - Sustainability and Industry

Migrate remaining green-steel, manufacturing, regulation, GST, imports, and industry-future articles.

### Batch 6 - Editorial and SEO QA

- Remove extraction noise such as generic `Get Estimate` titles.
- Correct grammar without changing technical meaning.
- Verify dates, claims, prices, standards, and specifications.
- Add internal links to products, solutions, calculator, dealer locator, and quote.
- Check duplicate topics and define canonical/merge strategy where appropriate.
- Review desktop, tablet, mobile, accessibility, and performance.

## Phase 2 Publishing Form

The future publishing form can use the same typed article schema.

Recommended capabilities:

- Authenticated admin route.
- Create, edit, preview, schedule, publish, and unpublish.
- Upload hero and inline images.
- Manage metadata, category, tags, FAQ, related articles, and CTA.
- Draft validation before publish.
- Content stored in a database or committed through a controlled Git workflow.

Phase 2 should replace only the content source. The archive, article routes, UI components, SEO model, and URLs should remain unchanged.

## Acceptance Criteria

- All 88 current article URLs remain valid.
- `/blog` is a polished discovery experience.
- Blog pages no longer use `LegacyPageRenderer`.
- Content is static and deploys with Next.js.
- No WordPress or third-party CMS dependency.
- Article template matches the approved ARS design system.
- Articles are readable and responsive without horizontal overflow.
- Metadata, canonical URLs, article schema, and sitemap entries are correct.
- Old business content is preserved and editorially improved.
- Client-verification items remain visibly tracked before launch.
