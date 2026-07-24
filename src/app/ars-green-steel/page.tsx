import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "ARS Green Steel | Product Information & Proof | ARS Green Steel",
  description: "Explore ARS Green Steel product information and currently published proof documents without duplicating general green-steel education.",
  path: "/ars-green-steel",
});

export default function ArsGreenSteelPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />
      <section className="bg-[#060D1E] text-white">
        <div className="ars-container max-w-5xl py-24 md:py-32">
          <SectionKicker variant="light">ARS Green Steel</SectionKicker>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,5.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">ARS Green Steel product information and proof.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">This route is for ARS-specific product information and currently published proof documents. General definitions, production pathways, and embodied-carbon education are available on the Green Steel explainer.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/green-steel" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark">What is Green Steel? <ArrowRight size={16} /></Link>
            <Link href="/contact" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10">Contact ARS <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-2">
          <section>
            <SectionKicker variant="brand">Product information</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Review ARS TMT product paths.</h2>
            <p className="mt-5 text-base leading-8 text-steel-700">Review the available ARS product pages before discussing site conditions, product selection, or project requirements with the ARS team.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products/ars-550d" className="focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] border border-brand-blue px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">ARS 550D <ArrowRight size={15} /></Link>
              <Link href="/products/ars-crs-550d" className="focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] border border-brand-blue px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">ARS CRS 550D <ArrowRight size={15} /></Link>
            </div>
          </section>
          <section className="border-y border-ink-900/10 bg-surface-50 p-7 md:p-9">
            <SectionKicker variant="brand">Published proof</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Review current documentation.</h2>
            <p className="mt-5 text-base leading-8 text-steel-700">Certificate files, ratings, emissions figures, and downloads are shown only when current approved evidence is available. No unavailable document is exposed on this route.</p>
            <Link href="/certifications" className="focus-ring mt-8 inline-flex h-11 items-center gap-2 rounded-[6px] border border-ink-900/15 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue">View certifications <ArrowRight size={15} /></Link>
          </section>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">General education</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Understand the wider Green Steel context.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700">For an explanation of green-steel production pathways and embodied-carbon considerations, use the educational Green Steel page.</p>
          <Link href="/green-steel#embodied-carbon" className="focus-ring mt-8 inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Explore Green Steel education <ArrowRight size={16} /></Link>
        </div>
      </MotionSection>
      <SiteFooter />
    </main>
  );
}
