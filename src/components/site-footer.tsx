import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { verifiedContactDetails } from "@/data/business-verification";

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "ARS 550D", href: "/products/ars-550d" },
      { label: "ARS CRS 550D", href: "/products/ars-crs-550d" },
      { label: "8mm Steel Rod", href: "/8-mm-steel-rod" },
      { label: "10mm Steel Rod", href: "/10-mm-steel-rod" },
      { label: "12mm Steel Rod", href: "/12-mm-steel-rod" },
      { label: "16mm Steel Rod", href: "/16-mm-steel-rod" },
      { label: "20mm Steel Rod", href: "/20-mm-steel-rod" },
      { label: "25mm Steel Rod", href: "/25-mm-steel-rod" },
      { label: "32mm Steel Rod", href: "/32-mm-steel-rod" },
      { label: "Steel testing", href: "/steel-testing" },
    ],
  },
  {
    title: "Segments",
    links: [
      { label: "Home owners", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "Engineers", href: "/tmt-steel-bar-guide-engineers-architects" },
      { label: "Civil contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "Dealers", href: "/steel-distributors-dealers" },
    ],
  },
  {
    title: "Applications",
    links: [
      { label: "Institutions", href: "/institutions-projects-tmt-steel-bars" },
      { label: "Bridges", href: "/bridges-projects-tmt-steel-bars" },
      { label: "Road projects", href: "/road-projects-tmt-steel-bars" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ARS", href: "/about" },
      { label: "Core team", href: "/our-team" },
      { label: "CSR", href: "/csr" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Buy",
    links: [
      { label: "Steel price", href: "/steel-price-today" },
      { label: "TMT calculator", href: "/tmt-calculator" },
      { label: "Dealer locator", href: "/dealer-locator" },
      { label: "Request quote", href: "/request-quote" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Certifications", href: "/certifications" },
      { label: "Our quality", href: "/our-quality" },
      { label: "Blogs", href: "/blog.html" },
      { label: "Videos", href: "/video" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="grid gap-10 pt-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Image src="/ars-green-steel.svg" alt="ARS Green Steel" width={150} height={72} />
          <p className="mt-5 max-w-md text-base leading-7 text-steel-700">
            Certified TMT steel for modern construction, supported by price clarity,
            dealer access, product proof, and practical project guidance.
          </p>
          <div className="mt-7 grid gap-3 text-sm font-semibold text-steel-700">
            <a className="flex items-center gap-3 transition hover:text-brand-blue" href={`tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`}>
              <Phone size={17} className="text-brand-blue" />
              {verifiedContactDetails.mobile}
            </a>
            <Link className="flex items-center gap-3 transition hover:text-brand-blue" href="/contact">
              <Mail size={17} className="text-brand-blue" />
              {verifiedContactDetails.publicEmail}
            </Link>
            <div className="flex items-start gap-3">
              <MapPin size={17} className="mt-1 shrink-0 text-brand-blue" />
              <span>{verifiedContactDetails.corporateOffice}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={17} className="mt-1 shrink-0 text-brand-blue" />
              <span>Steel Plant: {verifiedContactDetails.plant}</span>
            </div>
            <p className="text-sm leading-6 text-steel-700">Office: {verifiedContactDetails.officePhone} · Fax: {verifiedContactDetails.fax} · Plant: {verifiedContactDetails.plantPhones}</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-technical text-sm font-bold uppercase tracking-[0.18em] text-ink-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-steel-700 transition hover:text-brand-blue" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-5 md:grid-cols-[1fr_auto] md:items-center">
        <p className="text-base font-semibold leading-7 text-ink-900">
          Need price, quantity, dealer support, or project guidance?
        </p>
        <Link className="focus-ring inline-flex h-11 w-fit items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark" href="/request-quote">
          Start enquiry <ArrowRight size={16} />
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-3 border-t border-ink-900/10 pt-5 text-sm text-steel-700 md:flex-row">
        <p>Copyright 2026 ARS Steels & Alloy International Pvt. Ltd.</p>
        <div className="flex gap-4">
          <Link className="font-semibold transition hover:text-brand-blue" href="/privacy-policy">Privacy Policy</Link>
          <Link className="font-semibold transition hover:text-brand-blue" href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
