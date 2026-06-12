import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

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
      { label: "Blog", href: "/blog.html" },
      { label: "Guides & Articles", href: "/blog.html" },
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

const companyLinks = [
  { label: "Our Team", href: "/our-team" },
  { label: "CSR", href: "/csr" },
  { label: "Address", href: "/contact#address" },
  { label: "Email", href: "/contact" },
  { label: "Contact Details", href: "/contact" },
];

const badges = ["BIS Certified", "IS 1786:2008", "Green Steel", "Made in India"];

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

export function SiteFooter() {
  return (
    <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071222] text-white">
      <section className="bg-brand-blue">
        <div className="ars-container grid gap-8 py-12 md:grid-cols-[1fr_auto_auto] md:items-center lg:py-16">
          <div>
            <h2 className="font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal text-white">
              Ready to source quality green steel?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Contact our sales engineering team for a customized bulk quote.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 text-xl font-black text-white transition hover:text-white/80"
            href="tel:+914442913700"
          >
            <Phone size={20} />
            +91 44 4291 3700
          </a>
          <Link
            className="focus-ring inline-flex h-14 w-fit items-center justify-center rounded-full bg-[#f41f2a] px-8 text-sm font-black uppercase tracking-normal text-white shadow-[0_18px_45px_rgba(244,31,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#d91722]"
            href="/request-quote"
          >
            Request a quote <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="bg-[#071222]">
        <div className="ars-container grid gap-12 py-14 lg:grid-cols-[1.2fr_4fr] lg:gap-20 lg:py-16">
          <div>
            <Image
              src="/ars-green-steel-light.svg"
              alt="ARS Green Steel"
              width={164}
              height={72}
              className="h-auto w-[164px]"
            />
            <p className="mt-8 max-w-xs text-sm leading-7 text-slate-300">
              India&apos;s leading manufacturer of high-strength sustainable steel products.
              Foundations for a stronger, greener nation.
            </p>

            <nav className="mt-7 grid gap-3 text-sm text-slate-200" aria-label="Company footer links">
              {companyLinks.map((link) => (
                <Link key={link.label} className="w-fit transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-7 flex max-w-xs flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-[4px] border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={`${column.title} footer links`}>
                <h3 className="font-technical text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  {column.title}
                </h3>
                <ul className="mt-5 grid gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="text-sm leading-6 text-slate-200 transition hover:text-white" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c1d33]">
        <div className="ars-container grid gap-4 py-5 text-xs text-slate-300 lg:grid-cols-[auto_1fr] lg:items-center">
          <p className="font-black text-slate-400">Popular Topics:</p>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {popularTopics.map((topic, index) => (
              <span key={topic.label} className="inline-flex items-center gap-2">
                <Link className="transition hover:text-white" href={topic.href}>
                  {topic.label}
                </Link>
                {index < popularTopics.length - 1 ? <span className="text-slate-500">|</span> : null}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0c1d33]">
        <div className="ars-container flex flex-wrap gap-x-2 gap-y-2 py-5 text-xs text-slate-400">
          <span className="font-black uppercase text-slate-300">ARS TMT Steel across:</span>
          {locations.map((location, index) => (
            <span key={location} className="inline-flex items-center gap-2">
              <Link className="transition hover:text-white" href="/dealer-locator">
                {location}
              </Link>
              {index < locations.length - 1 ? <span className="text-slate-600">|</span> : null}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#071222]">
        <div className="ars-container flex flex-col gap-6 py-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ARS Steels & Alloy International Pvt. Ltd. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-2 gap-y-2" aria-label="Legal links">
            <Link className="transition hover:text-slate-200" href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link className="transition hover:text-slate-200" href="/terms-of-use">Terms of Use</Link>
            <span>|</span>
            <Link className="transition hover:text-slate-200" href="/privacy-policy">Cookie Policy</Link>
            <span>|</span>
            <Link className="transition hover:text-slate-200" href="/sitemap.xml">Sitemap</Link>
          </nav>
          <div className="flex gap-3" aria-label="Social links pending official URLs">
            {socialLabels.map((label) => (
              <span
                key={label}
                className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[11px] font-black uppercase text-slate-300"
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
