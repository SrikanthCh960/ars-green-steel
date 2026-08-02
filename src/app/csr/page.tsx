import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Landmark, Stethoscope } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Corporate Social Responsibility | ARS Green Steel",
  description:
    "Explore ARS Steel's verified corporate social responsibility initiatives across health care, education, sports, and infrastructure.",
  path: "/csr",
  image: "/ars-assets/CSR/Ars Steel CSR.webp",
});

const initiatives = [
  {
    eyebrow: "HEALTH CARE",
    title: "Nellai Cancer Hospital",
    body: "We contributed to Nellai Cancer Hospital, Tirunelveli, for construction of a building which supports and offers comprehensive, affordable, accessible and holistic cancer care service for people of Tirunelveli, Tenkasi, Tuticorin and Kanyakumari district.",
    image: "/ars-assets/CSR/Ars CSR.webp",
    alt: "ARS CSR contribution connected with health care support",
    icon: Stethoscope,
  },
  {
    eyebrow: "HEALTH",
    title: "Rajiv Gandhi Government General Hospital",
    body: "We contributed a battery car to Rajiv Gandhi Government General Hospital, which helps transport patients within the hospital campus. The vehicle also supports the timely movement of medical supplies and equipment and emergency response situations within the hospital premises.",
    image: "/ars-assets/CSR/CSR Helping Hands.webp",
    alt: "ARS CSR community support initiative",
    icon: HeartHandshake,
  },
  {
    eyebrow: "INFRASTRUCTURE",
    title: "Loyola College",
    body: "We contributed to Loyola College for renovation of their college building, which supports the holistic development of students, enhancing their educational experience and personal growth.",
    image: "/ars-assets/CSR/Ars Sponser.webp",
    alt: "ARS CSR support for an education infrastructure initiative",
    icon: Landmark,
  },
] as const;

export default function CsrPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <Image src="/ars-assets/CSR/Ars Steel CSR.webp" alt="ARS Steel corporate social responsibility activity" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,13,30,0.94),rgba(6,13,30,0.66)_54%,rgba(6,13,30,0.24))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.92),transparent_62%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-16 pt-32">
          <div className="max-w-3xl">
            <SectionKicker variant="light">Corporate social responsibility</SectionKicker>
            <h1 className="mt-6 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-white">
              Responsibility that reaches <span className="text-brand-red">beyond steel.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/75">
              At ARS, we are dedicated to improving the health and well-being of our community through Corporate Social Responsibility activities.
            </p>
            <Link href="#purpose" className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
              Explore our work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <MotionSection id="purpose" className="bg-white py-20 md:py-24">
        <div className="ars-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionKicker variant="brand">Purpose of CSR</SectionKicker>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em]">Supporting communities through practical action.</h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-steel-700">Our initiatives are designed to address the needs of the underserved, promote wellness, and foster a sense of social responsibility among our staff and society.</p>
            <p className="mt-5 text-[15px] leading-[1.85] text-steel-700">Our Corporate Social Responsibility primarily includes health, education, sports, and infrastructure.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Health", "Education", "Sports", "Infrastructure"].map((item) => <div key={item} className="border-l-2 border-brand-red py-2 pl-4 text-sm font-bold uppercase tracking-[0.08em] text-ink-900">{item}</div>)}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-ink-950">
            <Image src="/ars-assets/CSR/CSR purpose-img.webp" alt="ARS CSR purpose and community responsibility" width={1171} height={498} className="h-auto w-full object-cover" />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <SectionKicker variant="brand">Our work in the community</SectionKicker>
          <div className="mt-3 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em]">Health, education, and infrastructure with a human focus.</h2>
            <p className="text-[15px] leading-[1.8] text-steel-700">The following initiatives are taken directly from the original ARS CSR page and presented here as an editorial record of the work described by ARS.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;
              return <article key={initiative.title} className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-950"><Image src={initiative.image} alt={initiative.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-7"><div className="flex items-center justify-between"><Icon size={22} className="text-brand-red" aria-hidden="true" /><span className="font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-grey-600">{initiative.eyebrow}</span></div><h3 className="mt-6 font-display text-2xl font-bold text-ink-900">{initiative.title}</h3><p className="mt-4 text-sm leading-7 text-steel-700">{initiative.body}</p></div>
              </article>;
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-ink-950 py-20 text-white md:py-24">
        <div className="ars-container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionKicker variant="light">A continuing responsibility</SectionKicker>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.08]">Community impact is part of how ARS shows up.</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-white/70">From supporting access to cancer care to improving movement within a hospital and renewing education infrastructure, the initiatives on this page reflect the areas identified in the ARS CSR source material.</p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10"><Image src="/ars-assets/CSR/Ars Steel_.webp" alt="ARS community responsibility visual" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" /></div>
        </div>
      </MotionSection>

      <ContactCta eyebrow="ARS COMMUNITY RESPONSIBILITY" headline="Build with a company that takes responsibility seriously." body="Connect with ARS for product information, project support, or a conversation with our team." primaryLabel="Request a quote" primaryHref="/request-quote" secondaryLabel="Talk to experts" secondaryHref="/contact" />
    </main>
  );
}
