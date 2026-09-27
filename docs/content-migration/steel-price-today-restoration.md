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
| Product, state, city, and seven-diameter order calculation | Current quick price lookup plus a detailed multi-size estimator on the same page | Restored with shared ARS rates |
| Bundle count, rod count, weight, and GST-inclusive amount | Detailed estimator | Restored as calculated outputs |
| Four calculator-benefit topics and designed card layout | Benefits section after the price tools | Restored; two claims updated for accuracy |
| Nine original steel-price FAQ topics | Visible FAQ list and matching FAQ structured data | Restored with date- and quotation-aware answers |
| Enquiry path | Quick price enquiry and detailed-estimate handoff to Request Quote | Preserved without another submission endpoint |
| Calculator and product links | Internal production paths | Restored or preserved |

The current approved pricing additions remain: Tamil Nadu Fe 550D base rate of ₹76,000 per tonne including GST, existing workbook grade/diameter differentials, per-kg and per-tonne tables, per-rod estimates, price update date, delivery exclusions, and the current price-enquiry form. The old floating ₹70,000 retail claim is deliberately excluded because it conflicts with the later ARS rate update.

## Intentional editorial changes

- The older “real-time data” benefit now says “latest ARS reference rates published on this website” and identifies the update date. The site does not have a live market feed.
- The older “Compliance to Ministry of Steel Norms” benefit retains its topic heading, but its description no longer claims that a calculator itself certifies product or project compliance. Product specifications and certification must be checked separately.
- Original FAQ questions are retained. Their answers now point to dated reference rates and a confirmed ARS quotation rather than implying a guaranteed future rate, current national market price, or included freight.
- The original separate enquiry fields are represented by the current price enquiry and Request Quote form. Calculator data pre-fills the existing Request Quote form; no new lead-storage or Salesforce integration was added.
- The legacy staging-domain calculator link is an internal `/tmt-steel-calculator` link on the redesigned site.

## Local verification completed

- TypeScript, ESLint on changed source files, production build, route/asset QA, and `git diff --check` passed.
- Desktop and 390 px mobile layouts were reviewed locally. The seven mobile diameter cards fit without horizontal overflow.
- The rendered page retains one H1, the existing title and description, canonical `https://arsgroup.in/tmt-steel-price-today`, and FAQ structured data for 14 visible questions (including the nine legacy topics).
- A 2-rod 8 mm plus 10-rod 12 mm estimate produced 12 rods, 114.95 kg, and approximately ₹8,745 incl. GST. The Request Quote link carried state, city, product, sizes, quantities, and totals into the existing form without submitting it.

## Release checks remaining

- After deployment, verify the production page and compare indexed/crawlable content with the legacy inventory. Content restoration alone cannot guarantee a ranking recovery.

No blog page was edited as part of this restoration. The migration parity rule in `AGENTS.md` applies to future page and blog edits.
