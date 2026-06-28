import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "ARS 550D TMT Bar", href: "/products/ars-550d" },
      { label: "ARS CRS 550D", href: "/products/ars-crs-550d" },
      { label: "Product Comparison", href: "/products" },
      { label: "Technical Specifications", href: "/certifications" },
      { label: "Download Brochure", href: "/request-quote" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "TMT Steel for Home Owners", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "TMT Steel for Engineers", href: "/tmt-steel-bar-guide-engineers-architects" },
      { label: "TMT Steel for Contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "TMT Steel for Builders", href: "/institutions-projects-tmt-steel-bars" },
      { label: "Dealer Partnership Programme", href: "/steel-distributors-dealers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Steel Price Today", href: "/steel-price-today" },
      { label: "Blog", href: "/blog" },
      { label: "Guides & Articles", href: "/blog" },
      { label: "TMT Bar Calculator", href: "/tmt-calculator" },
      { label: "Construction Cost Estimator", href: "/tmt-calculator" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Get a Free Steel Test", href: "/steel-testing" },
      { label: "Find a Dealer", href: "/dealer-locator" },
      { label: "Become a Dealer", href: "/become-a-dealer" },
      { label: "Bulk Enquiry", href: "/request-quote" },
      { label: "Talk to an Expert", href: "/contact" },
    ],
  },
];

const trustBadges = [
  { mark: "IS", label: "BIS Certified" },
  { mark: "IS", label: "IS 1786:2008" },
  { mark: "GS", label: "Green Steel" },
  { mark: "IN", label: "Made in India" },
];

const popularTopics = [
  { label: "Green Steel", href: "/green-steel" },
  { label: "Why ARS Green Steel", href: "/about" },
  { label: "Sustainable Construction", href: "/green-steel" },
  { label: "CRS 550D", href: "/products/ars-crs-550d" },
  { label: "TMT Price Today", href: "/steel-price-today" },
  { label: "GRIHA Certified Steel", href: "/certifications" },
  { label: "Corrosion Resistant Steel", href: "/blog/corrosion-resistance-steel.html" },
];

const locations = ["Chennai", "Coimbatore", "Madurai", "Nellore", "Tirupati", "Kochi", "Trivandrum", "Salem"];

const socialLabels = ["f", "ig", "in", "yt"];

const footerGroups = [
  ...footerColumns,
  {
    title: "Popular Topics",
    links: popularTopics,
  },
  {
    title: "ARS TMT Steel Across",
    links: locations.map((location) => ({ label: location, href: "/dealer-locator" })),
  },
];

export function SiteFooter() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071126] text-white">
      <section className="border-b border-white/10">
        <div className="ars-container grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center gap-3" aria-label="ARS Green Steel home">
              <Image
                src="/ars-green-steel-light.svg"
                alt="ARS Green Steel"
                width={213}
                height={100}
                className="h-auto w-[168px] md:w-[186px]"
              />
            </Link>
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              India&apos;s leading manufacturer of high-strength sustainable steel products.
              Foundations for a stronger, greener nation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="grid h-[76px] min-w-[108px] place-items-center rounded-[4px] border border-white/12 bg-white/[0.025] px-3 text-center"
              >
                <span className="font-display text-xl font-semibold leading-none text-white/55">{badge.mark}</span>
                <span className="mt-2 text-xs font-medium leading-none text-slate-400">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="ars-container grid gap-x-8 gap-y-10 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:py-14">
          {footerGroups.map((column) => (
            <nav key={column.title} aria-label={`${column.title} footer links`}>
              <h3 className="font-technical text-xs font-black uppercase leading-5 tracking-[0.22em] text-white">
                {column.title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link className="text-sm leading-6 text-slate-400 transition hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>

      <section>
        <div className="ars-container flex flex-col gap-6 py-7 text-xs text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 ARS Steels & Alloy International Pvt. Ltd. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Legal links">
            <Link className="transition hover:text-slate-200" href="/privacy-policy">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link className="transition hover:text-slate-200" href="/terms-of-use">
              Terms of Use
            </Link>
            <span className="text-white/10">|</span>
            <Link className="transition hover:text-slate-200" href="/privacy-policy">
              Cookie Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link className="transition hover:text-slate-200" href="/sitemap.xml">
              Sitemap
            </Link>
          </nav>
          <div className="flex gap-2" aria-label="Social links pending official URLs">
            {socialLabels.map((label) => (
              <span
                key={label}
                className="inline-flex size-8 items-center justify-center rounded-[4px] border border-white/12 bg-white/[0.02] text-[11px] font-semibold uppercase text-slate-400 transition hover:border-white/22 hover:text-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
