import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  Download,
  FileText,
  GitCompare,
  IndianRupee,
  Layers,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "ARS 550D TMT Bars | ARS Green Steel",
  description:
    "ARS 550D high-strength ductile TMT bars (Fe-550D, IS 1786:2008) for safer residential, commercial, and infrastructure construction.",
  path: "/product-550d",
});

const trustItems = [
  { value: "Fe 550D", label: "Grade" },
  { value: "IS 1786", label: "Standard" },
  { value: "550 Min.", label: "Yield Strength" },
  { value: "16 Min.", label: "Elongation" },
];

const technicalOverview = [
  { label: "Grade", value: "Fe 550D TMT Reinforcement Bars • IS 1786 Compliant" },
  { label: "Available Sizes", value: "8 mm • 10 mm • 12 mm • 16 mm • 20 mm • 25 mm • 32 mm" },
  { label: "Applications", value: "Residential • Commercial • Industrial • Infrastructure • RCC Construction" },
  { label: "Key Properties", value: "High Strength • High Ductility • Superior Bendability • Strong Concrete Bonding" },
  { label: "Manufacturing", value: "Thermo-Mechanically Treated (TMT) • Low Sulphur • Low Phosphorus • Controlled Manufacturing Process" },
  { label: "Certifications", value: "BIS Certified • SGS Tested • SERC Certified • Quality Assured" },
];

const benefits = [
  {
    icon: <Zap size={20} />,
    title: "High Strength",
    desc: "Manufactured to Fe550D grade, ARS 550D TMT Bars provide the strength required for residential, commercial, industrial, and infrastructure construction without compromising structural reliability.",
  },
  {
    icon: <Building2 size={20} />,
    title: "High Ductility",
    desc: "Designed with low sulphur and low phosphorus content, ARS 550D offers excellent ductility, allowing reinforced concrete structures to perform better under dynamic loads and seismic conditions.",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "Superior Bendability",
    desc: "Maintains excellent bendability for easier fabrication and detailing on site while preserving the mechanical properties required for reinforced concrete construction.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Better Concrete Bonding",
    desc: "The ribbed surface profile creates a strong bond with concrete, helping improve load transfer and overall structural stability throughout the life of the structure.",
  },
  {
    icon: <Layers size={20} />,
    title: "Engineered for Structural Performance",
    desc: "Manufactured through a controlled Thermo-Mechanical Treatment (TMT) process to achieve a balanced combination of strength, toughness, and durability across every batch.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "Certified Quality",
    desc: "Manufactured in accordance with IS 1786 standards and backed by BIS certification, SGS testing, SERC certification, and stringent in-house quality control processes.",
  },
  {
    icon: <FileText size={20} />,
    title: "Better Weldability",
    desc: "The controlled chemical composition supports improved weldability, making ARS 550D suitable for a wide range of reinforced concrete construction requirements.",
  },
  {
    icon: <IndianRupee size={20} />,
    title: "Optimised Steel Consumption",
    desc: "The higher yield strength of Fe550D helps engineers optimise steel usage in structural design, contributing to efficient construction without compromising safety.",
  },
];

const mechanicalProperties = [
  ["Yield Strength", "N/mm²", "550 Min."],
  ["Tensile Strength", "N/mm²", "600 Min."],
  ["TS/YS Ratio", "Ratio", "1.10 Min."],
  ["Elongation", "%", "16 Min."],
];

const chemicalProperties = [
  ["Carbon (C)", "%", "0.25 Max."],
  ["Sulphur (S)", "%", "0.04 Max."],
  ["Phosphorus (P)", "%", "0.04 Max."],
  ["Sulphur + Phosphorus (S+P)", "%", "0.075 Max."],
  ["Carbon Equivalent (CE)", "%", "0.42 Max."],
];

const certificationBadges = ["BIS Certified", "Green Steel Certified", "TN PWD Approved", "SGBC Leader (4-Star)", "GRIHA", "EPD Verified"];

const faqs = [
  [
    "What is ARS 550D TMT Bar?",
    "ARS 550D is a high-strength Fe550D grade TMT reinforcement bar manufactured in accordance with IS 1786 standards. It is engineered to provide superior strength, ductility, and durability for residential, commercial, industrial, and infrastructure construction.",
  ],
  [
    "What is the difference between Fe500D and Fe550D TMT Bars?",
    "The primary difference is yield strength. Fe550D offers a minimum yield strength of 550 MPa, while Fe500D provides 500 MPa. With higher strength and excellent ductility, Fe550D is preferred for projects that require enhanced structural performance and efficient steel utilisation.",
  ],
  [
    "Where can ARS 550D TMT Bars be used?",
    "ARS 550D TMT Bars are suitable for reinforced concrete construction, including residential homes, apartments, commercial buildings, industrial structures, bridges, public infrastructure, foundations, columns, beams, and slabs.",
  ],
  [
    "Why is ductility important in Fe550D TMT Bars?",
    "Ductility allows reinforcement steel to deform under heavy loads without sudden failure. This helps reinforced concrete structures absorb stress more effectively, making them safer during earthquakes, dynamic loading, and other demanding service conditions.",
  ],
  [
    "What standards and certifications does ARS 550D comply with?",
    "ARS 550D TMT Bars are manufactured in compliance with IS 1786 and are backed by BIS Certification, SGS Testing, SERC Certification, and stringent in-house quality control to ensure consistent product quality and performance.",
  ],
  [
    "Is ARS 550D suitable for earthquake-resistant construction?",
    "Yes. ARS 550D combines high strength with excellent ductility, helping reinforced concrete structures withstand seismic forces more effectively. Its mechanical properties make it a dependable choice for earthquake-resistant construction when used as part of a properly engineered structural design.",
  ],
  [
    "What is the difference between ARS 550D and ARS CRS 550D?",
    "ARS 550D is designed for general reinforced concrete construction, offering high strength and ductility. ARS CRS 550D provides these benefits along with enhanced corrosion resistance, making it suitable for structures exposed to moisture, coastal environments, and high-salinity conditions.",
  ],
];

const sellingActions = [
  {
    icon: <IndianRupee size={20} />,
    title: "Check Price",
    desc: "View the latest ARS 550D TMT Bar price before planning your project.",
    cta: "View Price →",
    href: "/tmt-steel-price-today",
  },
  {
    icon: <MapPin size={20} />,
    title: "Find a Dealer",
    desc: "Locate an authorised ARS dealer near you for product availability and assistance.",
    cta: "Find a Dealer →",
    href: "/our-network",
  },
  {
    icon: <GitCompare size={20} />,
    title: "Compare ARS CRS 550D",
    desc: "Compare ARS 550D and ARS CRS 550D to choose the right TMT bar for your construction requirements.",
    cta: "Compare Grades →",
    href: "/product-crs-550d",
  },
];

function PropertyTable({
  caption,
  rows,
}: {
  caption: string;
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-100 bg-white">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-brand-blue">
          <tr>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">Property</th>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">Unit</th>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">ARS 550D</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([property, unit, value], index) => (
            <tr key={property} className={index % 2 === 0 ? "bg-surface-50" : "bg-white"}>
              <th scope="row" className="px-4 py-3 text-[13px] font-semibold text-ink-900">{property}</th>
              <td className="px-4 py-3 text-[13px] text-steel-700">{unit}</td>
              <td className="px-4 py-3 text-[13px] font-bold text-brand-blue">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Ars550DPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <Image src="/ars-assets/products/ARS-550D_hero-banner.jpg" alt="ARS TMT steel bars with campaign spokesperson" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,13,30,0.96),rgba(6,13,30,0.72)_52%,rgba(6,13,30,0.28))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.9),transparent_55%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Layers size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS 550D TMT Bars | Fe 550D Grade Reinforcement Steel</span>
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">High-Strength Fe 550D TMT Bars for Strong, Durable Construction</h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/75">Engineered for high strength, superior ductility, and dependable performance, ARS 550D TMT Bars are built for modern construction.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"><FileText size={14} /> Request a Quote</Link>
              <Link href="/products#sizes" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.12]"><Calculator size={14} /> Find the Right Size</Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {trustItems.map((item) => <div key={item.label} className="px-0 text-left lg:px-8 lg:text-center"><p className="font-display text-[1.65rem] font-extrabold tracking-[-0.03em] text-brand-blue">{item.value}</p><p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-900">{item.label}</p></div>)}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="specifications">
        <div className="ars-container grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="relative flex min-h-[390px] overflow-hidden rounded-2xl bg-ink-950 p-6 md:p-8 lg:min-h-0">
            <Image
              src="/ars-assets/products/WhatAre_ARS-CRS-550D_TMTBars.jpg"
              alt="Bundled ARS TMT bars ready for construction use"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.68)_46%,rgba(6,13,30,0.08)_100%)]" />
            <div className="relative z-10 mt-auto max-w-xl">
              <SectionKicker variant="light">PRODUCT OVERVIEW</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">What Are ARS 550D TMT Bars?</h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-white/80"><strong>Built for Strength. Trusted for Modern Construction.</strong><br />Choosing the right reinforcement steel is one of the most important decisions in any construction project. ARS 550D TMT Bars are engineered to provide the strength, ductility, and consistency required for modern reinforced concrete structures. Manufactured to IS 1786 standards, they are suitable for residential, commercial, industrial, and infrastructure applications where long-term structural performance matters.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100">
            <div className="bg-brand-blue px-6 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">ARS 550D Technical Overview</p></div>
            {technicalOverview.map((row, index) => <div key={row.label} className={`grid grid-cols-5 px-5 py-4 ${index % 2 === 0 ? "bg-white" : "bg-surface-50"}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{row.label}</p><p className="col-span-3 text-[13px] leading-[1.6] text-steel-700">{row.value}</p></div>)}
            <div className="border-t border-surface-100 bg-white p-5"><span aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-brand-blue/20 px-4 py-2 text-[13px] font-bold text-brand-blue"><Download size={14} /> Download brochure</span></div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-12 grid items-start gap-8 lg:grid-cols-2"><div><SectionKicker variant="light">WHY CHOOSE ARS 550D</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Engineered to Perform. Built to Last.</h2></div><p className="text-[15px] leading-[1.8] text-white/75 lg:pt-12">Every ARS 550D TMT Bar is manufactured to deliver the strength, flexibility, and consistency required for modern reinforced concrete construction.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit, index) => <article key={benefit.title} className="flex min-h-[235px] flex-col rounded-2xl border border-white/[0.1] bg-white/[0.05] p-6"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">{benefit.icon}</span><span className="text-[12px] font-bold text-white/20">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-6 font-display text-[16px] font-bold text-white">{benefit.title}</h3><p className="mt-2 text-[13px] leading-[1.65] text-white/70">{benefit.desc}</p></article>)}</div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container"><SectionKicker variant="brand">Key Properties</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Mechanical &amp; Chemical Properties</h2><p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-steel-700">Manufactured to IS 1786 standards, ARS 550D TMT Bars are engineered to deliver consistent mechanical performance and controlled chemical composition for reliable reinforced concrete construction.</p><div className="mt-10 grid gap-5 lg:grid-cols-2"><PropertyTable caption="Mechanical properties of ARS 550D" rows={mechanicalProperties} /><PropertyTable caption="Chemical properties of ARS 550D" rows={chemicalProperties} /></div></div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionKicker variant="brand">Trust</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Tested. Certified. Trusted.</h2><div className="mt-7 grid grid-cols-2 gap-3">{certificationBadges.map((badge) => <div key={badge} className="flex min-h-16 items-center gap-3 rounded-xl border border-surface-100 bg-white px-4 text-[13px] font-bold text-brand-blue"><BadgeCheck size={18} className="shrink-0 text-brand-red" />{badge}</div>)}</div><div className="mt-7 flex flex-wrap gap-3"><span aria-disabled="true" className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-2.5 text-[13px] font-bold text-brand-blue"><Download size={14} /> Download brochure</span><Link href="/certifications#product-statutory-approvals" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-[13px] font-bold text-white"><Download size={14} /> Download certifications</Link></div></div><div className="relative min-h-[480px] overflow-hidden rounded-2xl bg-ink-950"><video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/ars-assets/products/TestedCertifiedTrusted..mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.86),rgba(6,13,30,0.08)_62%)]" /><div className="absolute inset-x-6 bottom-6"><p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">Corrosion resistant steel</p><Link href="/product-crs-550d" className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-brand-blue">Explore ARS CRS 550D <ArrowRight size={14} /></Link></div></div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container max-w-5xl"><h2 className="text-center font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">FAQs</h2><div className="mt-10 divide-y divide-surface-100 rounded-2xl border border-surface-100 bg-white">{faqs.map(([question, answer]) => <details key={question} className="group"><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-display text-[16px] font-bold text-ink-900"><span>{question}</span><ArrowRight size={18} className="shrink-0 text-brand-red transition group-open:rotate-90" /></summary><p className="px-6 pb-6 text-[14px] leading-[1.8] text-steel-700">{answer}</p></details>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container"><div className="mb-12 grid items-end gap-8 lg:grid-cols-2"><div><SectionKicker variant="brand">NEXT STEP</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Ready to Build with ARS 550D?</h2></div><p className="text-[15px] leading-[1.8] text-steel-700">Choose your next step—check the latest TMT bar price, locate an authorised ARS dealer, or compare ARS 550D with ARS CRS 550D to select the right reinforcement steel for your project.</p></div><div className="grid gap-5 md:grid-cols-3">{sellingActions.map((action) => <Link key={action.title} href={action.href} className="focus-ring group flex min-h-[270px] flex-col rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">{action.icon}</span><h3 className="mt-6 font-display text-[18px] font-bold text-ink-900">{action.title}</h3><p className="mt-3 flex-1 text-[14px] leading-[1.7] text-grey-600">{action.desc}</p><span className="mt-6 text-[13px] font-bold text-brand-red">{action.cta}</span></Link>)}</div></div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} /><div className="ars-container relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><SectionKicker variant="light">READY TO BUILD</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Choose ARS 550D for Your Next Project</h2><p className="mt-3 max-w-[540px] text-[14px] leading-[1.7] text-white/75">Get the product specifications, estimate your steel requirement, or connect with an authorised ARS dealer to move your project forward.</p></div><div className="flex flex-wrap gap-3"><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white"><FileText size={15} /> Talk to Sales</Link><Link href="/tmt-steel-calculator" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white"><Calculator size={15} /> Calculate Steel Requirement</Link></div></div></MotionSection>

      <SiteFooter />
    </main>
  );
}
