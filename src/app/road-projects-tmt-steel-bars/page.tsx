import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { FaqList } from "@/components/faq-list";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

const pagePath = "/road-projects-tmt-steel-bars";

export const metadata: Metadata = createPageMetadata({
  title: "TMT Bars for Road Projects | ARS Green Steel",
  description:
    "For highways, expressways, and urban road projects, ARS Fe550D and CRS 550D TMT Bars combine strength, durability, and engineering excellence for infrastructure that lasts.",
  path: pagePath,
  image: "/ars-assets/blog-banners/how-tmt-bars-are-transforming-rural-infrastructure-development/Infrastructure.jpeg",
});

const projectRequirements = [
  ["Built to Carry Heavy Traffic", "Road infrastructure is subjected to constant traffic loads every day. High-strength reinforcement helps maintain structural stability under continuous use.", ClipboardCheck],
  ["Engineered for Long-Term Durability", "Roads are built to last for decades. Quality TMT bars help improve the service life of reinforced concrete structures while reducing maintenance over time.", ShieldCheck],
  ["Designed for Challenging Environments", "From heavy rainfall and moisture to high salinity conditions, durable reinforcement helps road infrastructure perform reliably across diverse environments.", Waves],
] as const;

const arsStrengths = [
  ["Consistency That Strengthens Every Kilometre", "Uniform mechanical properties help deliver reliable performance across large-scale road infrastructure projects."],
  ["Designed for Demanding Conditions", "Engineered to perform under continuous traffic loads, changing weather conditions, and challenging construction environments."],
  ["Precision Built Into Every Bar", "Advanced manufacturing and spectrometer testing ensure accurate chemical composition and consistent product quality."],
  ["Durability That Reduces Lifecycle Costs", "Long-lasting reinforcement helps extend the service life of reinforced concrete structures and supports lower maintenance requirements."],
  ["Trusted for Infrastructure", "Backed by recognised certifications and manufacturing standards that inspire confidence in every project."],
] as const;

const products = [
  ["ARS CRS 550D TMT Bars", "Designed for road infrastructure exposed to high moisture, water crossings, and high-salinity environments where enhanced corrosion resistance is essential.", "/product-crs-550d", "Explore CRS 550D"],
  ["ARS Fe550D TMT Bars", "For highways, bridges, flyovers, retaining walls, and reinforced concrete structures that demand high strength and excellent ductility.", "/product-550d", "Explore Fe550D"],
  ["Certified Green Steel", "Manufactured through sustainable processes without compromising structural performance—helping build infrastructure that is stronger and more responsible.", "/green-steel", "Explore Green Steel"],
] as const;

const qualityEvidence = [
  "BIS Certified",
  "ISO Certified Manufacturing",
  "SGS Tested",
  "GreenPro Certified",
  "GRIHA Listed",
  "Precision Manufacturing & Spectrometer Testing",
] as const;

const faqs = [
  ["Which TMT bar is suitable for road construction?", "Road projects generally require high-strength, high-ductility TMT bars capable of reinforcing bridges, culverts, retaining walls, and other reinforced concrete structures. ARS Fe550D and CRS 550D TMT Bars are designed for such demanding applications."],
  ["Which TMT bar is best for highway and bridge construction?", "Projects requiring superior strength, ductility, and long-term durability often specify Fe550D grade reinforcement. For structures exposed to moisture or high salinity, corrosion-resistant CRS 550D provides additional protection."],
  ["Why is ductility important in road infrastructure?", "Ductility enables reinforced concrete structures to absorb stresses and distribute loads more effectively, helping improve structural resilience under dynamic traffic conditions."],
  ["Is corrosion resistance important in road projects?", "Yes. Infrastructure exposed to water, humidity, coastal air, or de-icing environments benefits from corrosion-resistant reinforcement that helps improve long-term durability."],
  ["Why should road contractors choose certified TMT bars?", "Certified reinforcement ensures compliance with recognised quality standards, consistent manufacturing, and dependable structural performance for critical infrastructure."],
] as const;

export default function RoadProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <Image src="/ars-assets/blog-banners/how-tmt-bars-are-transforming-rural-infrastructure-development/Infrastructure.jpeg" alt="Steel-reinforced construction work supporting infrastructure development" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink-950/80" aria-hidden="true" />
        <div className="ars-container relative z-10 w-full pb-14 md:pb-16">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.3fr)] lg:items-end">
            <div><div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />Road Projects</div><h1 className="max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">Because Every Journey Deserves a Strong Beginning.</h1></div>
            <div className="border-l border-white/25 pl-6 lg:pb-1"><p className="text-[15px] leading-7 text-white/80">Designed for highways, expressways, and urban road projects, ARS Fe550D CRS TMT Bars combine strength, durability, and engineering excellence for infrastructure that lasts.</p><Link href="/request-quote" className="focus-ring mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-red-dark">Request a Project Quote <ArrowRight aria-hidden="true" size={16} /></Link></div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20"><div><SectionKicker>Road engineering</SectionKicker><h2 className="section-title">Every Road Is Only as Strong as What Lies Beneath.</h2></div><div><p className="max-w-3xl text-lg leading-9 text-steel-700">Roads are more than asphalt. Beneath every highway, expressway, and urban road network lies a system of reinforced concrete structures that carry traffic, withstand environmental conditions, and support decades of continuous use. Choosing high-quality TMT bars is essential to building road infrastructure that delivers lasting strength, durability, and safety.</p><div className="mt-10 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">{projectRequirements.map(([title, body, Icon], index) => <article key={title} className="bg-surface-50 p-6"><span className="font-technical text-xs font-bold tracking-[0.2em] text-brand-red">0{index + 1}</span><Icon aria-hidden="true" className="mt-10 text-brand-blue" size={25} /><h3 className="mt-5 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-3 text-sm leading-6 text-steel-700">{body}</p></article>)}</div></div></div></MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28"><div className="ars-container"><SectionKicker>Why ARS</SectionKicker><div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end"><h2 className="section-title">Engineered for the Roads That Millions Depend On.</h2><p className="text-[15px] leading-8 text-steel-700">Road infrastructure leaves no room for compromise. Every reinforced concrete structure—from culverts and retaining walls to bridges and drainage systems—must perform reliably for decades. That&apos;s why ARS engineers every TMT bar for consistent strength, superior durability, and dependable performance where it matters most.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{arsStrengths.map(([title, body]) => <article key={title} className="border border-ink-900/10 bg-white p-6"><Factory aria-hidden="true" size={22} className="text-brand-blue" /><h3 className="mt-10 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-3 text-sm leading-6 text-steel-700">{body}</p></article>)}</div></div></MotionSection>

      <MotionSection className="bg-bg-dark py-20 text-white md:py-28"><div className="ars-container"><SectionKicker variant="light">Our products</SectionKicker><div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-end"><h2 className="section-title section-title-light">The Right Reinforcement for Every Road Infrastructure Project</h2><p className="text-[15px] leading-7 text-white/70">Different road structures face different engineering challenges. From heavily loaded bridges to retaining walls and drainage systems, ARS offers TMT Bars engineered to meet diverse structural requirements while delivering consistent strength and long-term durability.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{products.map(([name, body, href, label]) => <Link key={name} href={href} className="focus-ring group flex min-h-64 flex-col border border-white/20 bg-white/[0.04] p-6 transition hover:border-white/45 hover:bg-white/[0.09]"><p className="font-technical text-xs font-bold tracking-[0.2em] text-white/50">PRODUCT</p><h3 className="mt-10 font-display text-2xl font-bold text-white">{name}</h3><p className="mt-4 text-sm leading-6 text-white/70">{body}</p><span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-white">{label} <ArrowRight aria-hidden="true" size={16} /></span></Link>)}</div></div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.38fr_0.62fr]"><div><SectionKicker>Quality &amp; certifications</SectionKicker><h2 className="section-title">Every Bar Manufactured to Meet Stringent Quality Standards</h2></div><div><p className="text-[15px] leading-7 text-steel-700">Road infrastructure is expected to perform for decades under continuous traffic, changing weather conditions, and demanding load cycles. That&apos;s why every ARS TMT Bar undergoes rigorous quality testing and is manufactured in compliance with recognised national and international standards.</p><ul className="mt-10 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">{qualityEvidence.map((item) => <li key={item} className="flex min-h-28 items-center gap-3 bg-surface-50 p-5 text-sm font-bold leading-5 text-ink-900"><Check aria-hidden="true" size={18} className="shrink-0 text-brand-red" />{item}</li>)}</ul><Link href="/our-certification" className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark">Explore quality &amp; certifications <ArrowRight aria-hidden="true" size={16} /></Link></div></div></MotionSection>

      <MotionSection className="bg-surface-100 py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.34fr_0.66fr]"><div><SectionKicker>Road project guide</SectionKicker><h2 className="section-title">A focused reinforcement review.</h2></div><ol className="border-y border-ink-900/10">{["Review the reinforced concrete structures supporting the road network, including bridges, culverts, retaining walls, and drainage systems.", "Align reinforcement with continuous traffic loads, changing weather conditions, and challenging construction environments.", "For high moisture, water crossings, and high-salinity environments, review the need for enhanced corrosion resistance.", "Use certified reinforcement that meets recognised quality standards for consistent manufacturing and dependable structural performance."].map((item, index) => <li key={item} className="flex gap-5 border-b border-ink-900/10 py-6 last:border-b-0"><span className="font-technical text-sm font-bold text-brand-red">0{index + 1}</span><p className="text-[15px] font-semibold leading-7 text-ink-900">{item}</p></li>)}</ol></div></MotionSection>

      <MotionSection className="bg-white py-20 md:py-28"><div className="ars-container grid gap-12 lg:grid-cols-[0.34fr_0.66fr]"><div><SectionKicker>FAQs</SectionKicker><h2 className="section-title">Road-project questions, answered.</h2></div><FaqList items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>

      <MotionSection className="border-t border-ink-900/10 bg-white py-12"><div className="ars-container"><p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-steel-700">Continue your project review</p><nav aria-label="Related road project resources" className="mt-5 flex flex-wrap gap-x-6 gap-y-4"><Link href="/products" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Products <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/our-certification" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Quality &amp; certifications <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/our-network" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Find a dealer <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/tmt-steel-calculator" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">TMT calculator <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/bridges-projects-tmt-steel-bars" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Bridges &amp; flyovers <ArrowRight aria-hidden="true" size={15} /></Link><Link href="/institutions-projects-tmt-steel-bars" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Institutional projects <ArrowRight aria-hidden="true" size={15} /></Link></nav></div></MotionSection>

      <ContactCta tone="solid" eyebrow="Road projects" headline="Building India&apos;s Roads Starts with Stronger Reinforcement." body="Whether you&apos;re constructing highways, flyovers, retaining walls, or drainage infrastructure, choose TMT Bars engineered for long-term structural performance." primaryLabel="Explore Products" primaryHref="/products" secondaryLabel="Talk to Our Team" secondaryHref="/contact" />
    </main>
  );
}
