import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Ruler, ShieldCheck, Waves } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Products | ARS Green Steel",
  description: "Compare ARS 550D and ARS CRS 550D TMT bars, review technical information, and choose the grade that fits your site conditions.",
  path: "/products",
});

const trustItems = [
  { value: "550D", label: "Earth-quake Resistant", description: "High-strength ductile Fe-550D TMT for modern structures." },
  { value: "CRS", label: "Corrosion Resistant", description: "Durability-led grade for High salinity exposed conditions." },
  { value: "8–32", label: "Bar sizes (mm)", description: "Common rod-size range for every construction need." },
  { value: "IS 1786", label: "Standard", description: "Both grades are manufactured to the IS 1786:2008 benchmark." },
];

const products = [
  {
    name: "ARS 550D",
    href: "/products/ars-550d",
    image: "/ars-assets/TMT-Bars.png",
    icon: ShieldCheck,
    description: "High-strength Fe550D TMT Bars designed for residential, commercial, industrial, and infrastructure construction.",
    points: [
      "High-Strength Fe550D TMT Bars",
      "Designed for Earthquake-Resistant Construction",
      "Superior Ductility & Bendability",
      "Strong Concrete Bonding for Reliable RCC Structures",
      "BIS Certified • IS 1786 Compliant",
    ],
  },
  {
    name: "ARS CRS 550D",
    href: "/products/ars-crs-550d",
    image: "/ars-assets/CRS.png",
    icon: Waves,
    description: "Corrosion Resistant Fe550D TMT Bars engineered for coastal, humid, industrial, and high-salinity environments.",
    points: [
      "Corrosion Resistant Fe550D TMT Bars",
      "Ideal for High-Salinity & Humid Environments",
      "Enhanced Service Life & Structural Durability",
      "High Strength with Superior Ductility",
      "BIS Certified • IS 1786 Compliant",
    ],
  },
];

const comparisonRows = [
  ["Best For", "General reinforced concrete construction", "Reinforced concrete construction in high-salinity and humid environments"],
  ["Strength Grade", "Fe550D", "Fe550D CRS"],
  ["Corrosion Resistance", "Standard protection", "Enhanced corrosion resistance with CRS technology"],
  ["Applications", "Residential, Commercial, Industrial & Infrastructure Projects", "Residential, Commercial, Industrial, Infrastructure & High-Salinity Projects"],
  ["Structural Performance", "High Strength, Superior Ductility & Bendability", "High Strength, Superior Ductility & Long-Term Corrosion Protection"],
  ["Service Life", "Designed for long-lasting structural performance", "Designed for extended service life in aggressive environments"],
  ["Earthquake Performance", "Suitable for earthquake-resistant construction", "Suitable for earthquake-resistant construction with added corrosion resistance"],
  ["Concrete Bonding", "Excellent ribbed surface for strong concrete bonding", "Excellent ribbed surface for strong concrete bonding"],
  ["Standards", "IS 1786 Compliant • BIS Certified • SGS Tested • SERC Certified", "IS 1786 Compliant • BIS Certified • SGS Tested • SERC Certified"],
  ["Recommended When", "Corrosion resistance is not the primary requirement", "When corrosion resistance are critical"],
] as const;

const sizes = [
  ["8 mm", "Ideal for stirrups, rings and light reinforcement."],
  ["10 mm", "Suitable for slabs and small structural members."],
  ["12 mm", "Recommended for slabs, beams and residential construction."],
  ["16 mm", "Used in beams, columns and structural framing."],
  ["20 mm", "Suitable for foundations and heavy RCC members."],
  ["25 mm", "Preferred for industrial and infrastructure projects."],
  ["32 mm", "Designed for heavy structural and infrastructure applications."],
] as const;

const faqs = [
  ["What is the difference between ARS 550D and ARS CRS 550D?", "Both ARS 550D and ARS CRS 550D are Fe550D grade TMT Bars manufactured in accordance with IS 1786 standards. ARS 550D is designed for general reinforced concrete construction, while ARS CRS 550D offers enhanced corrosion resistance for structures exposed to high-salinity and humid environments."],
  ["Which TMT Bar is better for high-salinity areas?", "ARS CRS 550D is the preferred choice for high-salinity and humid environments. Its advanced Corrosion Resistant Steel (CRS) technology helps improve durability and provides enhanced protection against corrosion over the life of the structure."],
  ["Can ARS CRS 550D be used for normal residential construction?", "Yes. ARS CRS 550D is suitable for residential construction and offers the same high strength and ductility as ARS 550D, along with enhanced corrosion resistance. It is an ideal choice where long-term durability is a priority."],
  ["Do ARS 550D and ARS CRS 550D comply with IS 1786 standards?", "Yes. Both ARS 550D and ARS CRS 550D are manufactured in compliance with IS 1786 and are supported by BIS Certification, SGS Testing, SERC Certification, and stringent quality assurance processes."],
  ["How do I choose the right TMT Bar for my project?", "The right TMT Bar depends on your project environment and durability requirements. ARS 550D is recommended for general reinforced concrete construction, while ARS CRS 550D is better suited for projects exposed to high-salinity, humidity, or corrosive conditions."],
  ["Are ARS 550D and ARS CRS 550D available in the same sizes?", "Yes. Both ARS 550D and ARS CRS 550D are available in a wide range of standard TMT Bar sizes to meet the reinforcement requirements of residential, commercial, industrial, and infrastructure construction projects."],
] as const;

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <div className="absolute inset-0">
          <Image src="/ars-assets/products/ProductComparission_HeroBanner.jpg" alt="ARS TMT bars with campaign spokesperson" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,13,30,0.95) 0%, rgba(6,13,30,0.65) 50%, rgba(6,13,30,0.2) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,13,30,0.9) 0%, transparent 55%)" }} />
        </div>
        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Layers aria-hidden="true" size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS 550D vs ARS CRS 550D</span>
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Choose the Right TMT Bar <span className="italic text-brand-red">for Your Project</span>
            </h1>
            <p className="mt-5 max-w-[540px] text-[15px] leading-[1.75] text-white/70">Compare ARS 550D and ARS CRS 550D, explore available sizes, download technical specifications, and find the right reinforcement steel for your construction project.</p>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
          {trustItems.map((item) => <div key={item.value} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center"><span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">{item.value}</span><span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">{item.label}</span><span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{item.description}</span></div>)}
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="grades">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2"><div><SectionKicker variant="brand">Core Products</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Compare ARS 550D &amp; ARS CRS 550D</h2></div><p className="text-[15px] leading-[1.8] text-steel-700">Choose the reinforcement steel that matches your project environment. Both grades comply with IS 1786 and deliver dependable structural performance, while ARS CRS 550D offers enhanced corrosion resistance for demanding conditions.</p></div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => { const Icon = product.icon; return <Link key={product.name} href={product.href} className="focus-ring group overflow-hidden rounded-2xl border-[1.5px] border-surface-100 bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"><div className="relative h-56 overflow-hidden bg-ink-950"><Image src={product.image} alt={`${product.name} TMT Bars`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-7"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue"><Icon aria-hidden="true" size={20} /></div><h3 className="font-display text-[22px] font-bold text-ink-900">{product.name}</h3><p className="mt-3 text-[14px] leading-[1.7] text-steel-700">{product.description}</p><ul className="mt-5 flex flex-col gap-2">{product.points.map((point) => <li key={point} className="flex items-start gap-2.5"><CheckCircle2 aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-brand-red" /><span className="text-[13px] font-medium text-steel-700">{point}</span></li>)}</ul></div></Link> })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-24" id="comparison">
        <div className="ars-container"><SectionKicker variant="light">Product Comparison</SectionKicker>
          <div className="hidden overflow-hidden rounded-2xl border border-white/[0.18] md:block"><table className="w-full border-collapse text-left"><caption className="sr-only">Comparison of ARS 550D and ARS CRS 550D TMT Bars.</caption><thead className="bg-white/[0.08]"><tr><th scope="col" className="w-[22%] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white">Feature</th><th scope="col" className="px-5 py-4 text-[12px] font-bold text-white">ARS 550D</th><th scope="col" className="px-5 py-4 text-[12px] font-bold text-white">ARS CRS 550D</th></tr></thead><tbody>{comparisonRows.map(([feature, standard, crs], index) => <tr key={feature} className={index % 2 === 0 ? "bg-white/[0.03]" : ""}><th scope="row" className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.04em] text-white">{feature}</th><td className="px-5 py-4 text-[13px] leading-[1.5] text-white">{standard}</td><td className="px-5 py-4 text-[13px] leading-[1.5] text-white">{crs}</td></tr>)}</tbody></table></div>
          <dl className="divide-y divide-white/[0.16] rounded-2xl border border-white/[0.18] md:hidden">{comparisonRows.map(([feature, standard, crs]) => <div key={feature} className="p-5"><dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">{feature}</dt><dd className="mt-4 grid gap-4 sm:grid-cols-2"><div><p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">ARS 550D</p><p className="mt-1.5 text-[13px] leading-[1.55] text-white">{standard}</p></div><div><p className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">ARS CRS 550D</p><p className="mt-1.5 text-[13px] leading-[1.55] text-white">{crs}</p></div></dd></div>)}</dl>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="sizes"><div className="ars-container"><div className="mb-14 grid items-end gap-10 lg:grid-cols-2"><div><SectionKicker variant="brand">Bar sizes</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Available TMT Bar Sizes</h2></div><p className="text-[15px] leading-[1.8] text-steel-700">Choose the bar diameter that matches your structural design. ARS TMT Bars are available in multiple sizes for residential, commercial, industrial, and infrastructure construction.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sizes.map(([size, description]) => <div key={size} className="rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-6"><div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue ring-1 ring-ink-900/[0.06]"><Ruler aria-hidden="true" size={20} /></div><h3 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink-900">{size}</h3><p className="mt-3 text-[13px] leading-[1.6] text-grey-600">{description}</p></div>)}</div></div></MotionSection>

      <MotionSection className="bg-surface-50 py-24" id="faqs"><div className="ars-container max-w-4xl"><SectionKicker variant="brand">FAQs</SectionKicker><div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="focus-ring cursor-pointer list-none pr-12 font-display text-[18px] font-bold leading-[1.35] text-ink-900 marker:hidden">{question}<span aria-hidden="true" className="float-right -mr-12 text-brand-red transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-steel-700">{answer}</p></details>)}</div></div></MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }} /><div className="ars-container relative z-10"><div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-3xl"><SectionKicker variant="light">READY TO BUILD</SectionKicker><h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">Choose the Right TMT Bar with Confidence</h2><p className="text-[14px] leading-[1.7] text-white/70">Whether you&apos;re building a home, a commercial project, or infrastructure, selecting the right reinforcement steel makes all the difference. Compare ARS 550D and ARS CRS 550D, speak with our experts, and choose the TMT Bar that best matches your project&apos;s structural and environmental requirements.</p></div><div className="flex flex-wrap gap-3"><Link href="/request-quote" className="focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90">Talk to Sales <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/dealer-locator" className="focus-ring inline-flex min-h-11 items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]">Find a Dealer <ArrowRight aria-hidden="true" size={15} /></Link></div></div></div></MotionSection>

      <SiteFooter />
    </main>
  );
}
