import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Download,
  FileText,
  GitCompare,
  IndianRupee,
  Layers,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Waves,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "ARS CRS 550D TMT Bars | ARS Green Steel",
  description:
    "ARS CRS 550D corrosion-resistant TMT bars (Fe550D, IS 1786) for high-salinity, humid, and demanding reinforced concrete construction.",
  path: "/products/ars-crs-550d",
});

const trustItems = [
  { value: "Fe550D", label: "Grade" },
  { value: "IS 1786", label: "Standard" },
  { value: "560 Min.", label: "Yield Strength" },
  { value: "16 Min.", label: "Elongation" },
];

const technicalOverview = [
  { label: "Grade", value: "Fe550D CRS TMT Reinforcement Bars • IS 1786 Compliant" },
  { label: "Applications", value: "Coastal • High Salinity • Industrial • Infrastructure • RCC Construction" },
  { label: "Key Properties", value: "Corrosion Resistance • High Strength • High Ductility • Superior Bendability" },
  { label: "Manufacturing", value: "Thermo-Mechanically Treated (TMT) • CRS Technology • Controlled Alloy Composition" },
  { label: "Certifications", value: "BIS Certified • SGS Tested • SERC Certified • Quality Assured" },
];

const benefits = [
  { icon: <Waves size={20} />, title: "Corrosion Resistant Steel", desc: "Manufactured using advanced CRS technology with Copper, Chromium, Nickel and Molybdenum to provide enhanced corrosion resistance for reinforced concrete structures." },
  { icon: <ShieldCheck size={20} />, title: "Longer Structural Life", desc: "Helps minimise corrosion-related deterioration, extending the service life of structures exposed to humid, coastal, and high-salinity environments." },
  { icon: <Zap size={20} />, title: "High Strength", desc: "Manufactured to Fe550D grade to deliver dependable reinforcement for residential, commercial, industrial, and infrastructure construction." },
  { icon: <Layers size={20} />, title: "Superior Ductility", desc: "Provides excellent ductility to help reinforced concrete structures absorb stress and perform reliably under dynamic loading and seismic conditions." },
  { icon: <ShoppingCart size={20} />, title: "Better Concrete Bonding", desc: "The ribbed surface profile develops a strong bond with concrete, improving load transfer and structural integrity." },
  { icon: <BadgeCheck size={20} />, title: "Controlled Chemical Composition", desc: "Manufactured with carefully controlled alloying elements and chemical composition to achieve consistent corrosion resistance and mechanical performance." },
  { icon: <ShieldCheck size={20} />, title: "Certified Quality", desc: "Manufactured in accordance with IS 1786 standards and backed by BIS Certification, SGS Testing, SERC Certification, and stringent quality control." },
  { icon: <MapPin size={20} />, title: "Designed for Aggressive Environments", desc: "Recommended for coastal regions, marine structures, industrial zones, water-retaining structures, bridges, ports, and projects exposed to high salinity." },
];

const mechanicalProperties = [
  ["Yield Strength", "N/mm²", "560 Min."],
  ["Tensile Strength", "N/mm²", "620 Min."],
  ["TS/YS Ratio", "Ratio", "1.08 Min."],
  ["Elongation", "%", "16 Min."],
];

const chemicalProperties = [
  ["Carbon (C)", "%", "0.25 Max."],
  ["Sulphur (S)", "%", "0.04 Max."],
  ["Phosphorus (P)", "%", "0.04 Max."],
  ["Sulphur + Phosphorus (S+P)", "%", "0.075 Max."],
  ["CRE (Cr+Cu+P+Mo+Ni)", "%", "0.45 Min."],
];

const certificationBadges = ["BIS Certified", "SGS Tested", "SERC Certified", "IS 1786 Compliant", "Quality Assured"];

const faqs = [
  ["What is ARS CRS 550D TMT Bar?", "ARS CRS 550D is a corrosion resistant Fe550D grade TMT reinforcement bar manufactured in accordance with IS 1786 standards. It is designed to provide enhanced corrosion resistance, high strength, and superior ductility for reinforced concrete construction."],
  ["What makes ARS CRS 550D different from conventional TMT Bars?", "Unlike conventional TMT bars, ARS CRS 550D is manufactured with corrosion resistant alloying elements that help protect reinforcement steel from corrosion in humid, coastal, and high-salinity environments."],
  ["Where should ARS CRS 550D TMT Bars be used?", "ARS CRS 550D is recommended for coastal buildings, bridges, ports, marine structures, industrial facilities, water-retaining structures, foundations, and projects exposed to moisture or aggressive environmental conditions."],
  ["How does ARS CRS 550D resist corrosion?", "ARS CRS 550D is manufactured using Corrosion Resistant Steel technology with carefully controlled alloy composition to form a protective layer that helps minimise corrosion over time."],
  ["What standards and certifications does ARS CRS 550D comply with?", "ARS CRS 550D is manufactured in accordance with IS 1786 and is supported by BIS Certification, SGS Testing, SERC Certification, and stringent quality assurance processes."],
  ["Is ARS CRS 550D suitable for earthquake-resistant construction?", "Yes. Along with enhanced corrosion resistance, ARS CRS 550D provides high strength and excellent ductility, making it suitable for earthquake-resistant reinforced concrete construction when used as part of a properly engineered design."],
  ["What is the difference between ARS CRS 550D and ARS 550D?", "Both products offer high strength and ductility. ARS CRS 550D additionally provides enhanced corrosion resistance, making it the preferred choice for coastal, humid, industrial, and high-salinity environments where long-term durability is critical."],
];

const sellingActions = [
  { icon: <IndianRupee size={20} />, title: "Check Price", desc: "View the latest ARS CRS 550D TMT Bar price before planning your project.", cta: "View Price →", href: "/steel-price-today" },
  { icon: <MapPin size={20} />, title: "Find a Dealer", desc: "Locate an authorised ARS dealer near you for product availability and technical assistance.", cta: "Find a Dealer →", href: "/dealer-locator" },
  { icon: <GitCompare size={20} />, title: "Compare ARS 550D", desc: "Compare ARS CRS 550D and ARS 550D to select the right reinforcement steel based on your project environment.", cta: "Compare Grades →", href: "/products/ars-550d" },
];

function PropertyTable({ caption, rows }: { caption: string; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-surface-100 bg-white">
      <table className="min-w-[480px] w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-brand-blue">
          <tr>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">Property</th>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">Unit</th>
            <th scope="col" className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">ARS CRS 550D</th>
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

export default function ArsCrs550DPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <Image src="/ars-assets/products-all.png" alt="ARS TMT steel bars in an ARS warehouse" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,13,30,0.96),rgba(6,13,30,0.72)_52%,rgba(6,13,30,0.28))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.9),transparent_55%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5"><ShieldCheck size={12} className="text-white/60" /><span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS CRS 550D TMT Bars | Corrosion Resistant Fe550D Reinforcement Steel</span></div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Corrosion Resistant Fe550D TMT Bars for Long-Lasting Structures</h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-white/75">Engineered for high-salinity, humid, and demanding environments, ARS CRS 550D combines superior corrosion resistance with high strength and ductility for durable reinforced concrete construction.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"><FileText size={14} /> Request a Quote</Link>
              <Link href="/products#sizes" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.12]"><Calculator size={14} /> Find the Right Size</Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10"><div className="ars-container grid grid-cols-2 gap-y-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">{trustItems.map((item) => <div key={item.label} className="px-0 text-left lg:px-8 lg:text-center"><p className="font-display text-[1.65rem] font-extrabold tracking-[-0.03em] text-brand-blue">{item.value}</p><p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-900">{item.label}</p></div>)}</div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-24" id="specifications"><div className="ars-container grid items-start gap-14 lg:grid-cols-2 lg:gap-16"><div><SectionKicker variant="brand">PRODUCT OVERVIEW</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">What Are ARS CRS 550D TMT Bars?</h2><p className="mt-5 text-[15px] leading-[1.8] text-steel-700"><strong>Built for Durability. Trusted Where Corrosion Matters.</strong><br />Corrosion is one of the leading causes of structural deterioration. ARS CRS 550D TMT Bars are specially engineered to resist corrosion while delivering the strength and ductility required for reinforced concrete construction. Manufactured to IS 1786 standards with advanced Corrosion Resistant Steel (CRS) technology, they are the preferred choice for coastal, humid, high-salinity, industrial, and infrastructure projects where long service life is essential.</p></div><div className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100"><div className="bg-brand-blue px-6 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">ARS CRS 550D Technical Overview</p></div>{technicalOverview.map((row, index) => <div key={row.label} className={`grid grid-cols-5 px-5 py-4 ${index % 2 === 0 ? "bg-white" : "bg-surface-50"}`}><p className="col-span-2 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-blue">{row.label}</p><p className="col-span-3 text-[13px] leading-[1.6] text-steel-700">{row.value}</p></div>)}<div className="border-t border-surface-100 bg-white p-5"><span aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-brand-blue/20 px-4 py-2 text-[13px] font-bold text-brand-blue"><Download size={14} /> Download Brochure</span></div></div></div></MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24"><div className="ars-container"><div className="mb-12 grid items-start gap-8 lg:grid-cols-2"><div><SectionKicker variant="light">WHY CHOOSE ARS CRS 550D</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">Engineered for Corrosion Resistance. Built for Generations.</h2></div><p className="text-[15px] leading-[1.8] text-white/75 lg:pt-12">Designed for structures exposed to moisture and aggressive environments, ARS CRS 550D delivers dependable structural performance with long-term corrosion protection.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit, index) => <article key={benefit.title} className="flex min-h-[235px] flex-col rounded-2xl border border-white/[0.1] bg-white/[0.05] p-6"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">{benefit.icon}</span><span className="text-[12px] font-bold text-white/20">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-6 font-display text-[16px] font-bold text-white">{benefit.title}</h3><p className="mt-2 text-[13px] leading-[1.65] text-white/70">{benefit.desc}</p></article>)}</div></div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-24"><div className="ars-container"><SectionKicker variant="brand">Key Properties</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Mechanical &amp; Chemical Properties</h2><p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-steel-700">Manufactured to IS 1786 standards, ARS CRS 550D combines corrosion-resistant chemistry with dependable mechanical properties for long-term structural durability.</p><div className="mt-10 grid gap-5 lg:grid-cols-2"><PropertyTable caption="Mechanical properties of ARS CRS 550D" rows={mechanicalProperties} /><PropertyTable caption="Chemical properties of ARS CRS 550D" rows={chemicalProperties} /></div></div></MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionKicker variant="brand">Trust</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Tested. Certified. Trusted.</h2><div className="mt-7 grid grid-cols-2 gap-3">{certificationBadges.map((badge) => <div key={badge} className="flex min-h-16 items-center gap-3 rounded-xl border border-surface-100 bg-white px-4 text-[13px] font-bold text-brand-blue"><BadgeCheck size={18} className="shrink-0 text-brand-red" />{badge}</div>)}</div><div className="mt-7 flex flex-wrap gap-3"><span aria-disabled="true" className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-brand-blue/20 px-5 py-2.5 text-[13px] font-bold text-brand-blue"><Download size={14} /> Download Brochure</span><Link href="/certifications#product-statutory-approvals" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-[13px] font-bold text-white"><Download size={14} /> Download Certifications</Link></div></div><div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-ink-950"><Image src="/ars-assets/TMT-Bars.png" alt="ARS 550D TMT bars" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-10" /><div className="absolute inset-x-6 bottom-6"><p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">High-Strength Fe550D TMT Bars for Strong, Durable Construction</p><Link href="/products/ars-550d" className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-brand-blue">Explore ARS 550D <ArrowRight size={14} /></Link></div></div></div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-24"><div className="ars-container max-w-5xl"><h2 className="text-center font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">FAQs</h2><div className="mt-10 divide-y divide-surface-100 rounded-2xl border border-surface-100 bg-white">{faqs.map(([question, answer]) => <details key={question} className="group"><summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-display text-[16px] font-bold text-ink-900"><span>{question}</span><ArrowRight size={18} className="shrink-0 text-brand-red transition group-open:rotate-90" /></summary><p className="px-6 pb-6 text-[14px] leading-[1.8] text-steel-700">{answer}</p></details>)}</div></div></MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24"><div className="ars-container"><div className="mb-12 grid items-end gap-8 lg:grid-cols-2"><div><SectionKicker variant="brand">NEXT STEP</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Ready to Build with ARS CRS 550D?</h2></div><p className="text-[15px] leading-[1.8] text-steel-700">Check the latest price, locate an authorised ARS dealer, or compare ARS CRS 550D with ARS 550D to choose the right reinforcement steel for your project.</p></div><div className="grid gap-5 md:grid-cols-3">{sellingActions.map((action) => <Link key={action.title} href={action.href} className="focus-ring group flex min-h-[270px] flex-col rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">{action.icon}</span><h3 className="mt-6 font-display text-[18px] font-bold text-ink-900">{action.title}</h3><p className="mt-3 flex-1 text-[14px] leading-[1.7] text-grey-600">{action.desc}</p><span className="mt-6 text-[13px] font-bold text-brand-red">{action.cta}</span></Link>)}</div></div></MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} /><div className="ars-container relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><SectionKicker variant="light">READY TO BUILD</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Choose ARS CRS 550D for Long-Term Structural Protection</h2><p className="mt-3 max-w-[540px] text-[14px] leading-[1.7] text-white/75">Download the product specifications, calculate your steel requirement, or connect with an authorised ARS dealer to build with corrosion-resistant reinforcement steel.</p></div><div className="flex flex-wrap gap-3"><Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white"><FileText size={15} /> Talk to Sales</Link><Link href="/tmt-calculator" className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white"><Calculator size={15} /> Calculate Steel Requirement</Link></div></div></MotionSection>

      <SiteFooter />
    </main>
  );
}
