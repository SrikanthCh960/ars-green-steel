"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, ChevronDown, Menu, Search, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const routeLinks = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Segments", href: "/industries", menu: "segments" },
  { label: "Applications", href: "/projects", menu: "applications" },
  { label: "Green Steel", href: "/green-steel", menu: "green" },
  { label: "Buy", href: "/services", menu: "services" },
  { label: "About", href: "/about", menu: "about" },
  { label: "Media", href: "/blog.html", menu: "media" },
  { label: "Contact", href: "/contact", menu: "contact" },
];

const megaMenus = {
  products: {
    eyebrow: "Product proof",
    title: "Choose steel by grade, size, and site condition.",
    visual: "Product finder",
    visualSrc: "/ars-assets/products-all.png",
    links: [
      { label: "All Products", href: "/products" },
      { label: "ARS 550D", href: "/products/ars-550d" },
      { label: "ARS CRS 550D", href: "/products/ars-crs-550d" },
      { label: "8mm Steel Rod", href: "/8-mm-steel-rod" },
      { label: "10mm Steel Rod", href: "/10-mm-steel-rod" },
      { label: "12mm Steel Rod", href: "/12-mm-steel-rod" },
      { label: "16mm Steel Rod", href: "/16-mm-steel-rod" },
      { label: "20mm Steel Rod", href: "/20-mm-steel-rod" },
      { label: "25mm Steel Rod", href: "/25-mm-steel-rod" },
      { label: "32mm Steel Rod", href: "/32-mm-steel-rod" },
    ],
    proof: ["550D ductility", "CRS corrosion resistance", "8mm to 32mm rod sizes"],
  },
  segments: {
    eyebrow: "Audience paths",
    title: "Guide each buyer to the proof and action they need.",
    visual: "Buyer journeys",
    visualSrc: "/ars-assets/home-owner-banner-1.png",
    links: [
      { label: "Home Owners", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "Engineers & Architects", href: "/tmt-steel-bar-guide-engineers-architects" },
      { label: "Civil Contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "Dealers & Distributors", href: "/steel-distributors-dealers" },
      { label: "All Industries", href: "/industries" },
    ],
    proof: ["Home builds", "Technical proof", "Dealer support"],
  },
  applications: {
    eyebrow: "Applications",
    title: "Show where ARS steel fits in real construction.",
    visual: "Project types",
    visualSrc: "/ars-assets/ARSHOME4.jpg",
    links: [
      { label: "Institutions", href: "/institutions-projects-tmt-steel-bars" },
      { label: "Bridges & Flyovers", href: "/bridges-projects-tmt-steel-bars" },
      { label: "Road Projects", href: "/road-projects-tmt-steel-bars" },
      { label: "All Projects", href: "/projects" },
      { label: "Request Project Quote", href: "/request-quote" },
    ],
    proof: ["Institutions", "Bridges", "Road projects"],
  },
  green: {
    eyebrow: "Green steel",
    title: "Make sustainability proof visible and verifiable.",
    visual: "Green proof",
    visualSrc: "/ars-assets/our-quality-1.png",
    links: [
      { label: "Green Steel", href: "/green-steel" },
      { label: "Certifications", href: "/certifications" },
      { label: "Our Quality", href: "/our-quality" },
      { label: "Steel Testing", href: "/steel-testing" },
      { label: "Manufacturing", href: "/manufacturing" },
    ],
    proof: ["EPD", "GRIHA / LEED", "Testing proof"],
  },
  services: {
    eyebrow: "Buying assistance",
    title: "Move from enquiry to steel with fewer calls.",
    visual: "Buying assistant",
    visualSrc: "/ars-assets/our-quality-1.png",
    links: [
      { label: "Steel Price Today", href: "/steel-price-today" },
      { label: "TMT Calculator", href: "/tmt-calculator" },
      { label: "Dealer Locator", href: "/dealer-locator" },
      { label: "Request Quote", href: "/request-quote" },
      { label: "Contact Sales", href: "/contact" },
    ],
    proof: ["Price clarity", "Requirement planning", "Dealer discovery"],
  },
  about: {
    eyebrow: "Company trust",
    title: "See legacy, leadership, manufacturing strength, and proof.",
    visual: "ARS legacy",
    visualSrc: "/ars-assets/right-about-us.png-compress.webp",
    links: [
      { label: "About ARS", href: "/about" },
      { label: "Core Team", href: "/our-team" },
      { label: "CSR", href: "/csr" },
      { label: "Careers", href: "/careers" },
      { label: "Manufacturing Strength", href: "/manufacturing" },
    ],
    proof: ["Since 1992", "Manufacturing strength", "Dealer confidence"],
  },
  media: {
    eyebrow: "Media",
    title: "Keep ARS education, blogs, and video content available.",
    visual: "Resources",
    visualSrc: "/ars-assets/awards-certificates-img3.png",
    links: [
      { label: "Blogs", href: "/blog.html" },
      { label: "Videos", href: "/video" },
      { label: "Quality Articles", href: "/blog/corrosion-resistance-steel.html" },
      { label: "Green Steel Articles", href: "/ars-green-steel" },
      { label: "Contact Media Team", href: "/contact" },
    ],
    proof: ["Blogs", "Videos", "Education"],
  },
  contact: {
    eyebrow: "Next step",
    title: "Reach sales, request a quote, or find a dealer.",
    visual: "Sales support",
    visualSrc: "/ars-assets/Contact_banner.png",
    links: [
      { label: "Contact Sales", href: "/contact" },
      { label: "Request Quote", href: "/request-quote" },
      { label: "Dealer Locator", href: "/dealer-locator" },
      { label: "Become a Dealer", href: "/become-a-dealer" },
    ],
    proof: ["Customer helpline", "Project enquiry", "Office and plant"],
  },
};

export function SiteHeader() {
  const links = routeLinks;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = activeMenu ? megaMenus[activeMenu as keyof typeof megaMenus] : null;
  const mobileMenuId = "site-mobile-navigation";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-0 text-ink-900 lg:px-4 lg:pt-3"
      onMouseLeave={() => setActiveMenu(null)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setActiveMenu(null);
          setMobileOpen(false);
        }
      }}
    >
      <div className="overflow-hidden border-b border-ink-900/10 bg-[#f7f4ee]/96 shadow-[0_22px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:rounded-b-[28px] lg:border lg:border-ink-900/10">
      <div className="ars-container flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-14 w-[132px] items-center justify-center">
            <Image src="/ars-green-steel.svg" alt="ARS Green Steel" width={132} height={62} priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-semibold text-steel-700 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group inline-flex items-center gap-1.5 border-b-2 border-transparent py-2 transition hover:border-brand-blue hover:text-ink-900"
              onMouseEnter={() => setActiveMenu(link.menu)}
              onFocus={() => setActiveMenu(link.menu)}
              aria-haspopup="true"
              aria-expanded={activeMenu === link.menu}
            >
              {link.label}
              <ChevronDown size={14} className="text-brand-blue transition group-hover:rotate-180" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="focus-ring hidden h-11 items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue md:inline-flex"
            href="/steel-price-today"
          >
            <Search size={16} /> Steel price
          </Link>
          <Link className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,75,155,0.24)] transition hover:bg-brand-blue-dark" href="/request-quote">
            Get quote <ArrowRight size={16} />
          </Link>
          <button
            className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-ink-900/12 bg-white/60 text-ink-900 lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {active ? (
        <div className="hidden border-t border-ink-900/10 lg:block" role="region" aria-label={`${active.eyebrow} menu`}>
          <div className="ars-container grid gap-12 py-9 lg:grid-cols-[360px_1fr_280px] lg:items-center">
            <Link className="group relative min-h-[190px] overflow-hidden rounded-[22px] bg-ink-900 p-6 text-white shadow-[0_20px_55px_rgba(15,23,42,0.18)]" href={active.links[0]?.href ?? "/products"}>
              <Image
                src={active.visualSrc}
                alt={`${active.visual} ARS source asset`}
                fill
                sizes="360px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,.08),rgba(15,23,42,.82))]" />
              <div className="absolute -right-10 -top-10 size-36 rounded-full border border-white/24" />
              <div className="absolute bottom-5 right-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue transition group-hover:translate-x-1">
                <ArrowRight size={20} />
              </div>
              <div className="relative mt-20">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">{active.eyebrow}</p>
                <p className="mt-2 font-display text-3xl font-black uppercase leading-tight">{active.visual}</p>
              </div>
            </Link>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">{active.eyebrow}</p>
              <p className="mt-4 max-w-2xl font-display text-4xl font-black uppercase leading-tight text-ink-900">
                {active.title}
              </p>
              <div className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
                {active.links.map((item) => (
                  <a key={item.label} className="focus-ring group flex items-center gap-4 text-lg font-semibold text-steel-700 transition hover:text-brand-blue" href={item.href}>
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue ring-1 ring-ink-900/10 transition group-hover:bg-brand-blue group-hover:text-white">
                      <ArrowRight size={17} />
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-ink-900/10 bg-white/62 p-6">
              <div className="mb-5 flex items-center gap-2 text-sm font-bold text-ink-900">
                <ShieldCheck size={18} className="text-brand-blue" />
                Proof points
              </div>
              <div className="grid gap-4">
                {active.proof.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                    <BadgeCheck size={16} className="shrink-0 text-green-steel" />
                    {item}
                  </div>
                ))}
              </div>
              <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue" href="/request-quote">
                Start enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div id={mobileMenuId} className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-ink-900/10 bg-[#f7f4ee] lg:hidden">
          <div className="ars-container grid gap-5 py-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Steel Price", href: "/steel-price-today", icon: Search },
                { label: "Calculator", href: "/tmt-calculator", icon: Calculator },
                { label: "Dealer Locator", href: "/dealer-locator", icon: ShieldCheck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} className="flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 text-sm font-bold text-ink-900 shadow-[0_10px_28px_rgba(15,23,42,0.06)]" href={item.href} onClick={() => setMobileOpen(false)}>
                    <Icon size={17} className="text-brand-blue" />
                    {item.label}
                  </a>
                );
              })}
            </div>
            <nav className="grid gap-2">
              {routeLinks.map((link) => (
                <a key={link.label} className="flex items-center justify-between border-t border-ink-900/10 py-3 text-base font-bold text-ink-900" href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                  <ArrowRight size={16} className="text-brand-blue" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
      </div>
    </header>
  );
}
