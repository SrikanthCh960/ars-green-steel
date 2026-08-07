import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { FaqList } from "@/components/faq-list";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

const pagePath = "/institutions-projects-tmt-steel-bars";

export const metadata: Metadata = createPageMetadata({
  title: "TMT Bars for Institutional Projects | ARS Green Steel",
  description:
    "Reliable ARS TMT bars for schools, hospitals, universities, government buildings, and public infrastructure where safety, durability, and long-term performance matter.",
  path: pagePath,
  image: "/ars-assets/blog-banners/6-factors-of-choosing-the-best-steel-bar-for-construction/construction.jpeg",
});

const qualityMatters = [
  ["Long service life", "Built for structures expected to perform reliably for generations."],
  ["Structural safety", "Strong reinforcement supports safer buildings for students, patients, staff, and visitors."],
  ["Reliable performance", "Consistent quality helps maintain construction standards throughout the project."],
  ["Long-term value", "Quality reinforcement helps reduce repair and maintenance costs over time."],
] as const;

const applications = [
  [GraduationCap, "Educational institutions", "Reliable reinforcement for schools, colleges, universities, and research campuses designed to serve generations."],
  [HeartPulse, "Healthcare facilities", "Built to support hospitals, medical centres, and healthcare infrastructure where structural reliability is essential."],
  [Landmark, "Government buildings", "Trusted for administrative offices, civic infrastructure, and public buildings requiring long-term performance."],
  [Building2, "Public infrastructure", "Suitable for a wide range of institutional projects that demand strength, consistency, and lasting durability."],
] as const;

const arsStrengths = [
  ["Strength that inspires confidence", "Consistent mechanical properties help create reinforced concrete structures built for long-term structural performance."],
  ["Designed for lifelong performance", "Engineered to withstand years of continuous use, helping institutional buildings maintain their strength and reliability over time."],
  ["Precision in every reinforcement bar", "Advanced manufacturing processes and spectrometer testing ensure uniform quality and dependable performance across every batch."],
  ["Built to meet stringent standards", "Manufactured under rigorous quality controls and backed by recognised certifications for projects where safety and compliance matter."],
  ["Trusted for public infrastructure", "From educational institutions to healthcare and government facilities, ARS TMT Bars are designed for projects where quality is never optional."],
] as const;

const products = [
  ["ARS CRS 550D TMT Bars", "Corrosion-resistant TMT bars engineered for structures exposed to high moisture and high salinity environments, helping improve long-term durability.", "/product-crs-550d"],
  ["ARS Fe550D TMT Bars", "High-strength TMT bars designed for residential, commercial, and institutional construction requiring dependable structural performance.", "/product-550d"],
  ["ARS Binders", "Factory-made reinforcement binders manufactured with precise dimensions and accurate bends to improve consistency and productivity on site.", "/ars-binders"],
] as const;

const certifications = [
  "BIS Certified",
  "ISO 9001 Certified",
  "ISO 14001 Certified",
  "SGS Tested",
  "GreenPro Certified",
  "Environmental Product Declaration (EPD)",
  "SGBC 4-Ticks Leader Rating",
  "Government of Tamil Nadu PWD Approved",
] as const;

const faqs = [
  ["What type of TMT bar is suitable for institutional construction?", "The choice depends on the project’s structural requirements, environmental conditions, and engineering specifications. ARS offers Fe550D and CRS 550D TMT Bars for different applications."],
  ["Why is steel quality important for institutional buildings?", "High-quality TMT bars contribute to structural strength, durability, safety, and long-term performance in buildings designed for continuous public use."],
  ["What certifications do ARS TMT Bars hold?", "ARS products are backed by BIS, ISO 9001, ISO 14001, SGS, GreenPro, EPD, SGBC, and Government of Tamil Nadu PWD Approval."],
  ["Are ARS TMT Bars suitable for government and public infrastructure projects?", "Yes. ARS TMT Bars are suitable for a wide range of institutional and public infrastructure projects where quality, consistency, and reliability are essential."],
  ["What is the difference between Fe550D and CRS 550D TMT Bars?", "Fe550D is designed for high-strength structural applications, while CRS 550D offers enhanced corrosion resistance for high moisture and high salinity environments."],
] as const;

export default function InstitutionsProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src="/ars-assets/blog-banners/6-factors-of-choosing-the-best-steel-bar-for-construction/construction.jpeg" alt="Reinforced concrete construction for an institutional project" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink-950/78" aria-hidden="true" />
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.3fr)] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />Institutional Construction</div>
              <h1 className="max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Reliable TMT Bars for Institutional Projects</h1>
            </div>
            <div className="border-l border-white/25 pl-6 lg:pb-1">
              <p className="text-[15px] leading-7 text-white/80">Reliable TMT bars for schools, hospitals, universities, and government buildings where safety, durability, and long-term performance matter.</p>
              <Link href="/request-quote" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">
                Contact Our Team <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div><SectionKicker>Why quality matters</SectionKicker><h2 className="section-title">Building Better Institutions Starts with Better Steel</h2></div>
          <div><p className="max-w-3xl text-lg leading-9 text-steel-700">Institutional buildings are designed to serve thousands of people every day for many years. Choosing high-quality TMT steel helps create stronger, safer, and more durable structures while reducing maintenance over the long term.</p><dl className="mt-10 grid gap-5 sm:grid-cols-2">{qualityMatters.map(([term, detail], index) => <div key={term} className="border-t border-ink-900/15 pt-5"><dt className="font-display text-xl font-bold text-ink-900"><span className="mr-3 text-sm text-brand-red">0{index + 1}</span>{term}</dt><dd className="mt-3 text-sm leading-6 text-steel-700">{detail}</dd></div>)}</dl></div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28">
        <div className="ars-container"><SectionKicker>Institutional projects</SectionKicker><div className="grid gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:items-end"><h2 className="section-title">Trusted Across Institutional Construction</h2><p className="text-[15px] leading-7 text-steel-700">From educational campuses to healthcare facilities and public infrastructure, institutional projects demand materials that deliver consistent quality, dependable performance, and long-term durability.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-2">{applications.map(([Icon, title, body]) => <article key={title} className="bg-[#f8fafc] p-7 md:p-8"><Icon aria-hidden="true" size={27} className="text-brand-blue"/><h3 className="mt-12 font-display text-2xl font-bold text-ink-900">{title}</h3><p className="mt-4 max-w-md text-[15px] leading-7 text-steel-700">{body}</p></article>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container"><div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]"><div><SectionKicker>Why ARS</SectionKicker><h2 className="section-title">Engineered for Institutions Built to Serve Generations.</h2></div><p className="text-[15px] leading-8 text-steel-700">Institutional buildings are designed to educate, heal, protect, and serve communities for decades. From schools and hospitals to universities and government buildings, every structure demands reinforcement that delivers consistent strength, long-term durability, and uncompromising reliability. ARS TMT Bars are engineered to meet those expectations—today and for generations to come.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{arsStrengths.map(([title, body]) => <article key={title} className="border border-ink-900/10 bg-surface-50 p-6"><ShieldCheck aria-hidden="true" size={22} className="text-brand-blue"/><h3 className="mt-10 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-3 text-sm leading-6 text-steel-700">{body}</p></article>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-bg-dark py-20 text-white md:py-28">
        <div className="ars-container"><SectionKicker variant="light">Our products</SectionKicker><div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-end"><h2 className="section-title section-title-light">TMT Bars Engineered for Institutional Construction</h2><p className="text-[15px] leading-7 text-white/70">Choose the right reinforcement solution for institutional projects based on structural requirements, environmental conditions, and long-term performance.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{products.map(([name, body, href]) => <Link key={name} href={href} className="focus-ring group flex min-h-64 flex-col border border-white/20 bg-white/[0.04] p-6 transition hover:border-white/45 hover:bg-white/[0.09]"><p className="font-technical text-xs font-bold tracking-[0.2em] text-white/50">PRODUCT</p><h3 className="mt-10 font-display text-2xl font-bold text-white">{name}</h3><p className="mt-4 text-sm leading-6 text-white/70">{body}</p><span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-white">View product <ArrowRight aria-hidden="true" size={16} /></span></Link>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.38fr_0.62fr]"><div><SectionKicker>Project review</SectionKicker><h2 className="section-title">A focused selection checklist</h2><p className="mt-6 text-[15px] leading-7 text-steel-700">Use the project’s structural requirements, environmental conditions, and long-term performance needs to guide the reinforcement conversation.</p></div><div className="border-y border-ink-900/10">{["Confirm structural requirements and engineering specifications.", "Review environmental conditions, including high moisture and high salinity exposure where relevant.", "Choose Fe550D or CRS 550D based on the project application.", "Review precise-dimension ARS Binders where improved site consistency and productivity are needed.", "Bring quality controls and recognised certifications into the safety and compliance review."].map((item, index) => <div key={item} className="flex gap-5 border-b border-ink-900/10 py-6 last:border-b-0"><span className="font-technical text-sm font-bold text-brand-red">0{index + 1}</span><p className="text-[15px] font-semibold leading-7 text-ink-900">{item}</p><ClipboardCheck aria-hidden="true" size={20} className="ml-auto shrink-0 text-brand-blue" /></div>)}</div></div>
      </MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28">
        <div className="ars-container"><SectionKicker>Certifications & recognition</SectionKicker><div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end"><h2 className="section-title">Backed by Recognised Industry Standards</h2><p className="text-[15px] leading-7 text-steel-700">ARS TMT Bars are manufactured under stringent quality systems and supported by nationally and internationally recognised certifications, giving greater confidence in quality, safety, and sustainable manufacturing.</p></div><ul className="mt-12 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">{certifications.map((item) => <li key={item} className="flex min-h-28 items-center gap-3 bg-white p-5 text-sm font-bold leading-5 text-ink-900"><Check aria-hidden="true" size={18} className="shrink-0 text-brand-red" />{item}</li>)}</ul><Link href="/our-certification" className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark">Review quality and certification documents <ArrowRight aria-hidden="true" size={16} /></Link></div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.34fr_0.66fr]"><div><SectionKicker>Frequently asked questions</SectionKicker><h2 className="section-title">Institutional-project questions, answered.</h2></div><FaqList items={faqs.map(([question, answer]) => ({ question, answer }))} /></div>
      </MotionSection>

      <MotionSection className="border-t border-ink-900/10 bg-white py-12">
        <div className="ars-container"><p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-steel-700">Continue your project review</p><nav aria-label="Related institutional project resources" className="mt-5 flex flex-wrap gap-x-6 gap-y-4"><Link href="/products" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Products <ArrowRight aria-hidden="true" size={15}/></Link><Link href="/our-certification" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Quality & certifications <ArrowRight aria-hidden="true" size={15}/></Link><Link href="/our-network" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Find a dealer <ArrowRight aria-hidden="true" size={15}/></Link><Link href="/tmt-steel-calculator" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">TMT calculator <ArrowRight aria-hidden="true" size={15}/></Link><Link href="/road-projects-tmt-steel-bars" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Road projects <ArrowRight aria-hidden="true" size={15}/></Link><Link href="/bridges-projects-tmt-steel-bars" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Bridges & flyovers <ArrowRight aria-hidden="true" size={15}/></Link></nav></div>
      </MotionSection>

      <ContactCta eyebrow="Institutional projects" headline="Build with Confidence. Build with ARS." body="Whether you’re planning a new institutional project or specifying reinforcement for long-term performance, our team is here to help." primaryLabel="Contact Our Team" primaryHref="/contact" secondaryLabel="Find a Dealer" secondaryHref="/our-network" />
    </main>
  );
}
