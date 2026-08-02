import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BadgeCheck, Factory, Handshake, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

const dealerInsights = [
  ["Consistent Product Quality", "Deliver products your customers can trust, every time.", ShieldCheck],
  ["Reliable Product Availability", "Maintain stock and reduce delays with dependable supply.", Truck],
  ["Brand Reputation", "Represent a recognised manufacturer trusted across South India.", BadgeCheck],
  ["Product Range", "Offer customers solutions for different construction requirements.", PackageCheck],
  ["Business Support", "Work with a manufacturer committed to supporting dealer growth.", Handshake],
  ["Long-Term Customer Trust", "Quality products create repeat customers and stronger referrals.", ShieldCheck],
] as const;

const partnerReasons = [
  ["35+ Years of Manufacturing", "Decades of manufacturing expertise delivering quality TMT steel products trusted across South India."],
  ["Consistent Quality", "Every batch is produced under strict quality controls to ensure reliable performance and customer satisfaction."],
  ["Reliable Supply Chain", "A dependable distribution network helps ensure timely product availability whenever your customers need it."],
  ["Recognised Certifications", "Backed by nationally and internationally recognised certifications that inspire customer confidence."],
  ["Trusted Across South India", "A preferred steel brand among homeowners, contractors, builders, engineers, and developers for over three decades."],
  ["Dedicated Dealer Support", "Our team provides product guidance, technical assistance, and business support to help you serve your customers better."],
] as const;

const products = [
  { title: "ARS Fe550D TMT Bars", body: "Ideal for general residential, commercial, and infrastructure construction where high strength, excellent ductility, and reliable performance are essential. A trusted choice for everyday construction projects.", cta: "Explore ARS 550D", href: "/products/ars-550d", image: "/ars-assets/TMT-Bars.png" },
  { title: "ARS CRS 550D TMT Bars", body: "Designed for projects exposed to high moisture, high salinity, and corrosive environments. Its enhanced corrosion resistance helps improve the durability and service life of structures, making it suitable for demanding conditions.", cta: "Explore ARS CRS 550D", href: "/products/ars-crs-550d", image: "/ars-assets/logos/ARSCRS550D.png" },
  { title: "ARS Binders", body: "Factory-made steel binders designed for consistent dimensions, accurate bends, and faster reinforcement work on site. Manufactured with precision to help improve productivity, reduce manual bending time, and deliver uniform quality across construction projects.", cta: "Explore ARS Binders", href: "/products/ars-binders", image: "/ars-assets/placeholders/binders-factory-placeholder.png" },
] as const;

const qualityChecks = [
  ["Advanced Spectrometer Testing", "Every batch is tested to verify accurate chemical composition before production."],
  ["Mechanical Testing", "Products are tested to ensure dependable strength, ductility, and performance."],
  ["Quality Inspection", "Multiple quality checks are carried out throughout the manufacturing process."],
  ["Recognised Certifications", "Certified to recognised industry standards for quality, safety, and sustainability."],
] as const;

const certifications = ["BIS", "ISO 9001", "ISO 14001", "SGS", "GreenPro", "EPD", "SGBC", "Government of Tamil Nadu PWD Approval"] as const;
const supportResources = ["Download Product Brochures", "Locate Regional Sales Team", "Marketing Support"] as const;

const faqs = [
  ["Why should I partner with ARS Green Steel?", "ARS combines consistent product quality, dependable supply, recognised certifications, and dedicated dealer support to help you serve customers with confidence."],
  ["What products are available for dealers?", "Dealers can supply ARS Fe550D TMT Bars, ARS CRS550D TMT Bars, and ARS Binders for residential, commercial, and infrastructure projects."],
  ["How does ARS maintain product quality?", "Every batch is manufactured under strict quality control processes, including advanced spectrometer testing and multiple inspections before dispatch."],
  ["Can ARS support new dealers?", "Yes. Our team provides product information, technical guidance, and business support to help dealers serve their customers effectively."],
  ["Where are ARS products available?", "ARS products are supplied through an expanding dealer and distributor network across South India."],
  ["Where can I download product brochures?", "Product brochures, technical documents, and product specifications are available in the Resources section."],
] as const;

function EditorialPanel({ children, image, reverse = false }: { children: ReactNode; image: string; reverse?: boolean }) {
  return (
    <div className="grid overflow-hidden border border-brand-blue/15 bg-white lg:grid-cols-2">
      <div className={`relative min-h-72 bg-ink-950 ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,13,30,0.16),rgba(13,43,110,0.44))]" />
      </div>
      <div className={`p-8 md:p-12 ${reverse ? "lg:order-1" : ""}`}>{children}</div>
    </div>
  );
}

function IconCard({ title, body, Icon }: { title: string; body: string; Icon: LucideIcon }) {
  return (
    <article className="border border-brand-blue/15 bg-white p-6">
      <span className="inline-flex size-11 items-center justify-center bg-brand-blue text-white"><Icon size={19} aria-hidden="true" /></span>
      <h3 className="mt-6 font-display text-xl font-bold leading-tight text-ink-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-steel-700">{body}</p>
    </article>
  );
}

function PanelHeading({ kicker, title }: { kicker: string; title: string }) {
  return <><SectionKicker>{kicker}</SectionKicker><div className="mt-6 flex gap-4"><span className="mt-1 h-10 w-1 shrink-0 bg-brand-red" aria-hidden="true" /><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] text-ink-900">{title}</h2></div></>;
}

export function DealerDistributorPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative overflow-hidden bg-[#060D1E] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#060D1E_0%,#0D2B6E_57%,#08112A_100%)]" />
        <div className="absolute inset-y-0 right-[11%] w-px bg-white/12" />
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-brand-red" />
        <div className="ars-page-hero-content ars-container relative flex min-h-[560px] items-end py-12 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
          <div className="max-w-3xl">
            <SectionKicker variant="light">FOR DEALERS &amp; DISTRIBUTORS</SectionKicker>
            <h1 className="mt-6 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold uppercase leading-[1.03] tracking-normal">Grow Your Business with a <span className="text-brand-red">Trusted TMT Steel Brand</span></h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/76 md:text-lg">Whether you operate a steel retail outlet, distribution network, or building materials business, partnering with the right TMT steel manufacturer can help you serve customers better, strengthen your reputation, and grow your business with confidence.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark md:text-base">Become a Dealer <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] border border-white/28 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-brand-blue md:text-base">Contact Sales <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24"><div className="ars-container"><div className="mx-auto max-w-3xl text-center"><SectionKicker align="center">DEALER INSIGHTS</SectionKicker><h2 className="mt-6 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1]">What Dealers Should Look for in a TMT Steel Brand</h2><p className="mt-5 text-base leading-8 text-steel-700 lg:text-lg">The success of a dealership depends not only on competitive pricing, but also on consistent product quality, reliable supply, customer trust, and long-term business support. Choosing the right manufacturing partner helps you build lasting relationships with builders, contractors, engineers, and homeowners.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{dealerInsights.map(([title, body, Icon]) => <IconCard key={title} title={title} body={body} Icon={Icon} />)}</div></div></section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24"><div className="ars-container"><EditorialPanel image="/ars-assets/ARSHOME1.jpg"><PanelHeading kicker="WHY PARTNER WITH ARS" title="Supporting Dealers Beyond Product Supply" /><p className="mt-6 text-base leading-8 text-steel-700">For more than <strong>35 years</strong>, ARS has built strong relationships with dealers and distributors by delivering quality products, dependable supply, and responsive customer support. Our goal is not simply to supply steel—but to help our partners grow their business with confidence.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{partnerReasons.map(([title, body]) => <article key={title} className="border border-brand-blue/15 bg-[#F4F7FF] p-5"><h3 className="font-display text-lg font-bold text-ink-900">{title}</h3><p className="mt-2 text-sm leading-6 text-steel-700">{body}</p></article>)}</div></EditorialPanel></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="ars-container"><div className="max-w-3xl"><PanelHeading kicker="ARS PRODUCTS" title="Products Your Customers Can Trust" /><p className="mt-5 text-base leading-8 text-steel-700">Offer customers a complete range of reinforcement solutions backed by consistent manufacturing quality and recognised certifications.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{products.map((product) => <article key={product.title} className="overflow-hidden border border-brand-blue/15 bg-white"><div className="relative h-56 bg-[#F4F7FF]"><Image src={product.image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-8" /></div><div className="p-7"><span className="inline-flex size-11 items-center justify-center bg-brand-blue text-white"><PackageCheck size={19} aria-hidden="true" /></span><h3 className="mt-6 font-display text-2xl font-bold text-ink-900">{product.title}</h3><p className="mt-4 text-base leading-7 text-steel-700">{product.body}</p><Link href={product.href} className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">{product.cta} <ArrowRight size={16} aria-hidden="true" /></Link></div></article>)}</div></div></section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24"><div className="ars-container"><EditorialPanel image="/ars-assets/quality-policy-banner.jpg" reverse><PanelHeading kicker="QUALITY FIRST" title="Every Product is Backed by Rigorous Quality Checks" /><p className="mt-6 text-base leading-8 text-steel-700">Instead of simply manufacturing steel, ARS follows multiple quality control processes throughout production. Every batch undergoes advanced testing and inspection to help ensure consistency, reliability, and compliance with recognised industry standards.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{qualityChecks.map(([title, body]) => <IconCard key={title} title={title} body={body} Icon={Factory} />)}</div></EditorialPanel></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="ars-container"><PanelHeading kicker="CERTIFICATIONS" title="Certified Quality Builds Customer Confidence" /><ul className="mt-10 grid gap-px overflow-hidden border border-brand-blue/15 bg-brand-blue/15 sm:grid-cols-2 lg:grid-cols-4">{certifications.map((certification) => <li key={certification} className="bg-white px-6 py-5 text-sm font-bold text-ink-900"><BadgeCheck className="mr-3 inline text-brand-blue" size={18} aria-hidden="true" />{certification}</li>)}</ul></div></section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24"><div className="ars-container"><EditorialPanel image="/ars-assets/homepage-manufacturing-detail.jpg"><PanelHeading kicker="BUSINESS SUPPORT" title="Resources to Help You Serve Customers Better" /><div className="mt-8 grid gap-4">{supportResources.map((resource) => <article key={resource} className="flex min-h-16 items-center border border-brand-blue/15 bg-[#F4F7FF] px-5"><span className="mr-4 h-8 w-1 bg-brand-red" aria-hidden="true" /><h3 className="font-display text-xl font-bold text-ink-900">{resource}</h3></article>)}</div></EditorialPanel></div></section>

      <section className="bg-white py-20 lg:py-24"><div className="ars-container max-w-4xl"><SectionKicker>FAQs</SectionKicker><div className="mt-8 divide-y divide-brand-blue/15 border-y border-brand-blue/15">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-bold leading-8 text-ink-900"><span>{question}</span><span className="relative inline-flex size-11 shrink-0 items-center justify-center border border-brand-blue/20 text-brand-blue" aria-hidden="true"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span></summary><p className="mt-4 max-w-3xl text-base leading-8 text-steel-700">{answer}</p></details>)}</div></div></section>

      <ContactCta eyebrow="" headline="Let's Build Better Business Together" body="Whether you're expanding your dealership or looking for a trusted TMT steel manufacturer, ARS is committed to supporting your business with quality products, dependable supply, and long-term partnership." primaryLabel="Become a Dealer" primaryHref="/contact" primaryClassName="bg-brand-blue hover:bg-brand-blue-dark" secondaryLabel="Contact Our Team" secondaryHref="/contact" />
    </main>
  );
}
