# Steel price today content restoration

Reviewed: 27 September 2026

Source: `https://olive-magpie-988393.hostingersite.com/tmt-steel-price-today`

Destination: `https://arsgroup.in/tmt-steel-price-today`

Source evidence: live legacy page, `src/data/legacy-pages.json`, and the page implementation before commit `3377b7c`
Reviewer: Codex, with final publication review by ARS pending

## Parity inventory

| Legacy element | Restored destination | Status |
|---|---|---|
| Original page title and the three steel-price context paragraphs | Same route, around the price lookup, in the pre-redesign numbered editorial pattern | Restored |
| Product, state, city, and seven-diameter order calculation | Quick price lookup remains here; the dedicated `/tmt-steel-calculator` page supports multi-diameter planning | Detailed on-page estimator removed at ARS request |
| Bundle count, rod count, weight, and GST-inclusive amount | Available on the dedicated TMT calculator page | Removed from this page at ARS request |
| Four calculator-benefit topics and designed card layout | Benefits section after the price tools | Restored; two claims updated for accuracy |
| Nine original steel-price FAQ topics | Visible FAQ list and matching FAQ structured data | Restored with date- and quotation-aware answers |
| Enquiry path | Quick price enquiry and Request Quote link | Preserved without another submission endpoint |
| Calculator and product links | Internal production paths | Restored or preserved |

The current approved pricing additions remain: Tamil Nadu Fe 550D base rate of ₹76,000 per tonne including GST, existing workbook grade/diameter differentials, per-kg and per-tonne tables, per-rod estimates, price update date, delivery exclusions, and the current price-enquiry form. The old floating ₹70,000 retail claim is deliberately excluded because it conflicts with the later ARS rate update.

## Intentional editorial changes

- The older “real-time data” benefit now says “latest ARS reference rates published on this website” and identifies the update date. The site does not have a live market feed.
- The older “Compliance to Ministry of Steel Norms” benefit retains its topic heading, but its description no longer claims that a calculator itself certifies product or project compliance. Product specifications and certification must be checked separately.
- Original FAQ questions are retained. Their answers now point to dated reference rates and a confirmed ARS quotation rather than implying a guaranteed future rate, current national market price, or included freight.
- The original separate enquiry fields are represented by the current price enquiry and Request Quote form. Calculator data pre-fills the existing Request Quote form; no new lead-storage or Salesforce integration was added.
- The legacy staging-domain calculator link is an internal `/tmt-steel-calculator` link on the redesigned site.
- ARS later requested removal of the entire “Detailed Order Planning” section. The seven-size estimator and its quote handoff were removed from this page; the existing quick lookup, editorial content, benefits, FAQs, and dedicated calculator route remain.
- The “Understanding Steel Prices” section now pairs the original crawlable heading, paragraph, and calculator link with five informational factor cards from the ARS-supplied SVG set. ARS requested no background photograph. The icons use the site’s brand red; the standards card says “IS 1786:2008 standard” without implying that the local 2025 licence attachment proves current certification.

## Local verification completed

- TypeScript, ESLint on changed source files, production build, route/asset QA, and `git diff --check` passed.
- Desktop and 390 px mobile layouts were reviewed locally. After the ARS-requested removal, the rendered page has no “Detailed Order Planning” section or horizontal overflow.
- The rendered page retains one H1, the existing title and description, canonical `https://arsgroup.in/tmt-steel-price-today`, and FAQ structured data for 14 visible questions (including the nine legacy topics).
- Before ARS requested removal, the detailed estimator and its Request Quote handoff were tested. They are no longer part of this page.
- After removal, TypeScript, ESLint, route/asset QA, and the production build passed. The original editorial copy, canonical URL, single H1, and dedicated calculator link remain in the rendered page.
- After the factor-card redesign, all five supplied SVGs loaded locally. The desktop panel and single-column mobile layout were reviewed; the same text, link, and canonical URL remain. TypeScript, ESLint, route/asset QA, and the production build passed again.

## Release checks remaining

- After deployment, verify the production page and compare indexed/crawlable content with the legacy inventory. Content restoration alone cannot guarantee a ranking recovery.

No blog page was edited as part of this restoration. The migration parity rule in `AGENTS.md` applies to future page and blog edits.
