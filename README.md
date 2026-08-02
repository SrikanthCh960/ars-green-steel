# ARS Green Steel Website Redesign

Modern, conversion-led redesign of the ARS Green Steel website.

Live preview:

- https://ars-green-steel.vercel.app/

Primary local project path:

- `/Users/baburao/Documents/Codex/2026-05-30/hey-act-as-an-experienced-ui/ars-redesign`

Current active redesign branch:

- `homepage-figma-refresh`

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons
- Vercel deployment

## Approved Design Direction

The project follows the client-approved Figma Make direction and `ARS-DESIGN-HANDOFF.md`.

Core rules:

- Primary blue: `#0D2B6E`
- Secondary red: `#DE121A`
- Dark navy: `#060D1E`
- Font: IBM Plex Sans
- Section H2: `clamp(2rem, 3.4vw, 2.25rem)`
- Section labels use the shared `SectionKicker` component.
- Non-home page heroes should target roughly `60vh`.
- Do not invent founder, team, or people photos.
- Use authentic ARS assets when available; placeholder industrial/product images can be replaced later.

## Local Preview

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3034
```

Open:

```text
http://127.0.0.1:3034/
```

If the port is already busy, stop the old Next.js process or choose a new port.

## Current Completed Areas

- Homepage Figma refresh
- Shared header and mega menu
- Shared footer
- About page
- Products listing
- ARS 550D product page
- ARS CRS 550D product page
- Green Steel page
- ARS Green Steel page
- Manufacturing page
- Certifications page
- Buying tools:
  - Steel price
  - TMT calculator
  - Dealer locator
- Audience guide pages:
  - Home owners
  - Engineers and architects
  - Civil contractors
  - Dealers and distributors
- Contact and quote flows
- Restored legacy routes and blog/article coverage

## Latest Live Update

Date:

- 2026-06-26

Latest deployed work:

- Dealer locator rebuilt from the supplied ARS dealer CSV.
- Search supports location, pincode, city, state, dealer name, dealer code, and phone.
- Dealer cards include call and map direction actions.
- Dealer intro cards were removed per client feedback.

Live dealer locator:

- https://ars-green-steel.vercel.app/dealer-locator

## Important Pending Client Inputs

These should be confirmed before final domain launch:

- Final steel prices
- TMT calculator formula and assumptions
- WhatsApp number
- Final dealer active status and phone number verification
- PDFs, brochures, certificates, and downloadable technical documents
- Any unverifiable business claims or certification wording

## Current Release Status — 2026-08-02

- Release branch: codex/metadata-seo
- Latest production commit: 4d5c4fc
- Privacy Policy and Terms of Use now use the shared legal-page UI.
- Dealer locator uses the updated region-wise workbook with 1,566 records.
- State selection filters the available city options.
- Dealer codes and the ARS dealer pill are not shown in public cards.
- Mobile navigation remains visible below the header while the visitor is mid-page.
- Repeated-content React key warnings were resolved.

## Documentation

Read these before making larger changes:

- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `DESIGN_RULES.md`
- `DESIGN_SYSTEM.md`
- `TASKS.md`
- `DEPLOYMENT.md`
- `CLIENT_VERIFICATION_CHECKLIST.md`
