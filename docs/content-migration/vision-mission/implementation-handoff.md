# Vision & Mission — implementation handoff

**RESEARCH STATUS: READY FOR DEVELOPMENT**

- **Destination:** add the approved Vision, Mission, Purpose and Values copy to the existing `/about#vision` section; do not create a new route.
- **Source:** `ARS Web content/About/ABout - Vision & Mission.docx`.
- **Navigation:** retain `About > Vision & Mission` in the mega-menu; breadcrumb remains `Home > About ARS Group`.
- **Template:** extend `src/app/about/page.tsx`; preserve the existing About layout and responsive section pattern.
- **CTA:** `Explore manufacturing` → `/manufacturing`; secondary `Contact ARS` → `/contact` if the approved document requires one.
- **SEO:** retain the About page as canonical; do not create duplicate metadata. Ensure on-page heading hierarchy is one H1 for the page and H2/H3 for this section.
- **Acceptance:** every supplied statement is represented or explicitly logged as intentionally excluded; link target works; mobile layout is checked at 390px and 768px; header/footer links are verified.
