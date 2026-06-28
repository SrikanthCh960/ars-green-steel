"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, ChevronDown, Menu, Search, ShieldCheck } from "lucide-react";

const routeLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", menu: "about" },
  { label: "Products", href: "/products", menu: "products" },
  { label: "Sustainability", href: "/green-steel", menu: "sustainability" },
  { label: "Solutions", href: "/industries", menu: "solutions" },
  { label: "Resources", href: "/blog", menu: "resources" },
  { label: "Press & Media", href: "/video", menu: "pressMedia" },
  { label: "Contact", href: "/contact", menu: "contact" },
];

const megaMenus = {
  about: {
    eyebrow: "Company trust",
    title: "Understand ARS Group, leadership, manufacturing, quality, and client proof.",
    visual: "ARS Group",
    visualSrc: "/ars-assets/right-about-us.png-compress.webp",
    links: [
      { label: "ARS Group", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Leadership", href: "/our-team" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Quality Policy", href: "/our-quality" },
      { label: "Certifications", href: "/certifications" },
      { label: "Clients", href: "/#legacy-proof" },
    ],
    proof: ["Since 1992", "Leadership proof", "Manufacturing strength"],
  },
  products: {
    eyebrow: "Product proof",
    title: "Choose ARS steel by grade, application, specification, and project need.",
    visual: "Products",
    visualSrc: "/ars-assets/products-all.png",
    links: [
      { label: "ARS 550D TMT Bar", href: "/products/ars-550d" },
      { label: "ARS CRS 550D", href: "/products/ars-crs-550d" },
      { label: "Product Comparison", href: "/products#comparison" },
      { label: "Product Applications", href: "/projects" },
      { label: "Residential Construction", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "Commercial Buildings", href: "/projects" },
      { label: "Infrastructure Projects", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "Technical Specifications", href: "/products/ars-550d#technical-specifications" },
      { label: "Download Product Brochure", href: "/products#brochure" },
    ],
    proof: ["550D ductility", "CRS corrosion resistance", "Residential to infrastructure use"],
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Show green steel, embodied carbon, certifications, and reports clearly.",
    visual: "Green steel",
    visualSrc: "/ars-assets/our-quality-1.png",
    links: [
      { label: "What is Green Steel", href: "/green-steel#what-is-green-steel" },
      { label: "ARS Green Steel", href: "/ars-green-steel" },
      { label: "Embodied Carbon", href: "/green-steel#embodied-carbon" },
      { label: "Certifications & Recognitions", href: "/certifications" },
      { label: "Reports & Downloads", href: "/certifications#downloads" },
    ],
    proof: ["Green steel story", "EPD / GRIHA / LEED readiness", "Downloadable proof"],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "Guide each audience to the proof, product, and next action they need.",
    visual: "Audience paths",
    visualSrc: "/ars-assets/home-owner-banner-1.png",
    links: [
      { label: "For Home Owners", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "For Engineers & Architects", href: "/tmt-steel-bar-guide-engineers-architects" },
      { label: "For Contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "For Dealers", href: "/steel-distributors-dealers" },
    ],
    proof: ["Home builds", "Technical specification", "Dealer support"],
  },
  resources: {
    eyebrow: "Resources",
    title: "Help buyers estimate, compare, learn, and move toward enquiry.",
    visual: "Knowledge center",
    visualSrc: "/ars-assets/awards-certificates-img3.png",
    links: [
      { label: "Steel Price Today", href: "/steel-price-today" },
      { label: "Price Calculator", href: "/tmt-calculator" },
      { label: "Construction Estimation", href: "/tmt-calculator#construction-estimation" },
      { label: "Blog / Knowledge Center", href: "/blog" },
      { label: "Guides & Articles", href: "/blog" },
      { label: "TMT Bar Calculator", href: "/tmt-calculator" },
      { label: "Construction Cost Estimator", href: "/blog/average-house-construction-cost-in-india-per-square-feet.html" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/blog" },
    ],
    proof: ["Price clarity", "Calculator journey", "Construction education"],
  },
  pressMedia: {
    eyebrow: "Press media",
    title: "Keep commercials, news, events, gallery, videos, and success proof accessible.",
    visual: "Media gallery",
    visualSrc: "/ars-assets/awards-certificates-img2.png",
    links: [
      { label: "TV Commercials", href: "/video" },
      { label: "News & Press Releases", href: "/blog" },
      { label: "Events", href: "/blog" },
      { label: "Gallery", href: "/video" },
      { label: "Videos", href: "/video" },
      { label: "Success Stories", href: "/projects#success-stories" },
    ],
    proof: ["Video gallery", "Knowledge articles", "Project proof"],
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
      { label: "Talk to an Expert", href: "/contact" },
    ],
    proof: ["Customer helpline", "Project enquiry", "Office and plant"],
  },
};

export function SiteHeader() {
  const links = routeLinks;
  const mobileMenuId = "site-mobile-navigation";

  return (
    <header
      className="site-header sticky inset-x-0 top-0 z-50 bg-white text-ink-900"
    >
      <div className="site-header-shell border-b border-ink-900/10 bg-white shadow-[0_8px_28px_rgba(13,43,110,0.08)]">
      <div className="ars-container flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3">
          <span className="flex h-14 w-[132px] items-center justify-center">
            <Image src="/ars-green-steel.svg" alt="ARS Green Steel" width={132} height={62} priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[14px] font-semibold text-steel-700 xl:flex">
          {links.map((link) => {
            const menuKey = link.menu as keyof typeof megaMenus | undefined;
            const menu = menuKey ? megaMenus[menuKey] : null;

            return (
              <div key={link.label} className="site-nav-item group/menu">
                <a
                  href={link.href}
                  className="inline-flex h-20 items-center gap-1.5 border-b-2 border-transparent transition hover:border-brand-blue hover:text-ink-900 focus-visible:border-brand-blue"
                  aria-haspopup={menu ? "true" : undefined}
                >
                  {link.label}
                  {menu ? <ChevronDown size={14} className="text-brand-blue transition group-hover/menu:rotate-180 group-focus-within/menu:rotate-180" /> : null}
                </a>
                {menu ? (
                  <div
                    className="site-mega-menu absolute left-0 right-0 top-[calc(100%-1px)] border-b border-ink-900/10 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.14)]"
                    role="region"
                    aria-label={`${menu.eyebrow} menu`}
                  >
                    <MegaMenuContent menu={menu} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="focus-ring hidden h-11 items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue md:inline-flex"
            href="/steel-price-today"
          >
            <Search size={16} /> Steel price
          </Link>
          <Link className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-brand-red px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(222,18,26,0.24)] transition hover:bg-brand-red-dark" href="/request-quote">
            Get quote <ArrowRight size={16} />
          </Link>
          <details className="group/details xl:hidden">
            <summary
              className="focus-ring inline-flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-ink-900/12 bg-white/60 text-ink-900 [&::-webkit-details-marker]:hidden"
              aria-label="Toggle navigation"
              aria-controls={mobileMenuId}
            >
              <Menu size={20} />
            </summary>
            <div id={mobileMenuId} className="absolute left-0 right-0 top-full max-h-[calc(100vh-80px)] overflow-y-auto border-t border-ink-900/10 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
              <div className="ars-container grid gap-5 py-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Steel Price", href: "/steel-price-today", icon: Search },
                    { label: "Calculator", href: "/tmt-calculator", icon: Calculator },
                    { label: "Dealer Locator", href: "/dealer-locator", icon: ShieldCheck },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} className="flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 text-sm font-bold text-ink-900 shadow-[0_10px_28px_rgba(15,23,42,0.06)]" href={item.href}>
                        <Icon size={17} className="text-brand-blue" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
                <nav className="grid gap-2">
                  {routeLinks.map((link) => (
                    link.menu ? (
                      <details key={link.label} className="border-t border-ink-900/10 py-3">
                        <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold text-ink-900 [&::-webkit-details-marker]:hidden">
                          {link.label}
                          <ChevronDown size={16} className="text-brand-blue" />
                        </summary>
                        <div className="mt-4 grid gap-3 pl-3">
                          {megaMenus[link.menu as keyof typeof megaMenus].links.map((item) => (
                            <a key={item.label} className="flex items-center justify-between text-sm font-semibold text-steel-700" href={item.href}>
                              {item.label}
                              <ArrowRight size={14} className="text-brand-blue" />
                            </a>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <a key={link.label} className="flex items-center justify-between border-t border-ink-900/10 py-3 text-base font-bold text-ink-900" href={link.href}>
                        {link.label}
                        <ArrowRight size={16} className="text-brand-blue" />
                      </a>
                    )
                  ))}
                </nav>
              </div>
            </div>
          </details>
        </div>
      </div>
      </div>
    </header>
  );
}

type MegaMenu = (typeof megaMenus)[keyof typeof megaMenus];

function MegaMenuContent({ menu }: { menu: MegaMenu }) {
  return (
    <div className="ars-container grid gap-12 py-9 lg:grid-cols-[360px_1fr_280px] lg:items-center">
      <Link className="group relative min-h-[190px] overflow-hidden rounded-[22px] bg-ink-900 p-6 text-white shadow-[0_20px_55px_rgba(15,23,42,0.18)]" href={menu.links[0]?.href ?? "/products"}>
        <Image
          src={menu.visualSrc}
          alt={`${menu.visual} ARS`}
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
          <p className="font-technical text-xs font-bold uppercase tracking-[0.28em] text-white/70">{menu.eyebrow}</p>
          <p className="mt-2 font-display text-3xl font-black uppercase leading-tight">{menu.visual}</p>
        </div>
      </Link>

      <div>
        <p className="font-technical text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">{menu.eyebrow}</p>
        <p className="mt-4 max-w-2xl font-display text-4xl font-black uppercase leading-tight text-ink-900">
          {menu.title}
        </p>
        <div className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2">
          {menu.links.map((item) => (
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
          {menu.proof.map((item) => (
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
  );
}
