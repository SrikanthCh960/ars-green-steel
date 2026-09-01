import { ExternalLink, Newspaper, PlayCircle } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Press & Media | ARS Green Steel",
  description: "Watch ARS Green Steel commercials and explore selected press coverage.",
  path: "/press-media",
});

const commercials = [
  { title: "ARS CRS Fe 550D Commercial", href: "https://youtu.be/bvR053aWjnY?si=zJML0w6BpXWwTf1n" },
  { title: "ARS Fe 550D Commercial", href: "https://youtu.be/3vljw7mpeKU" },
] as const;

const pressCoverage = [
  { outlet: "The Week", href: "https://www.theweek.in/wire-updates/business/2025/04/03/dcm99-ars-steel.html" },
  { outlet: "The Industry Outlook", href: "https://www.theindustryoutlook.com/manufacturing/news/india-gets-first-green-steel-tmt-bars-for-manufacturing-says-ars-steel-nwid-12785.html" },
  { outlet: "CNBC-TV18", href: "https://www.cnbctv18.com/market/commodities/india-first-green-steel-tmt-bars-for-sustainable-manufacturing-ars-steel-19590413.htm" },
  { outlet: "Daily Hindu", href: "https://dailyhindu.in/index.php/2025/4/3/indias-first-green-steel-ars-steel-epic-group-sentra-world-unveil-nations-first-eco-friendly-tmt-bars/" },
  { outlet: "DT Next", href: "https://www.dtnext.in/news/business/rahul-dravid-to-endorse-ars-steels-brand-794054" },
  { outlet: "Chennai PR", href: "https://chennaipr.in/ars-crs-550d-product-launch-chennai/" },
] as const;

export default function PressMediaPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <section className="ars-page-hero relative flex min-h-[440px] items-end overflow-hidden bg-ink-950 py-16 pt-36 md:min-h-[500px] md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_15%,rgba(222,18,26,0.24),transparent_28%),linear-gradient(115deg,#060d1e_0%,#0d2b6e_100%)]" />
        <div className="steel-grid absolute inset-0 opacity-30" />
        <div className="ars-container relative z-10 w-full">
          <SectionKicker variant="light">ARS in the news</SectionKicker>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
            Press &amp; <span className="italic text-brand-red">Media</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/75 md:text-lg md:leading-8">
            Explore selected ARS product films and third-party news coverage about our work in the steel industry.
          </p>
        </div>
      </section>

      <MotionSection className="bg-white py-16 md:py-24">
        <div className="ars-container">
          <SectionKicker variant="brand">Product films</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">See ARS products in action.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {commercials.map((commercial) => <a key={commercial.href} href={commercial.href} target="_blank" rel="noreferrer" className="focus-ring group flex min-h-60 flex-col justify-end overflow-hidden bg-ink-950 p-7 text-white transition hover:bg-brand-blue md:p-8"><PlayCircle size={34} className="text-brand-red" aria-hidden="true" /><p className="mt-auto text-[11px] font-bold uppercase tracking-[0.16em] text-white/65">Watch on YouTube</p><h3 className="mt-3 font-display text-2xl font-bold">{commercial.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">Watch film <ExternalLink size={15} aria-hidden="true" /></span></a>)}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-16 md:py-24">
        <div className="ars-container">
          <div className="max-w-3xl"><SectionKicker variant="brand">Press coverage</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">Independent coverage and industry news.</h2><p className="mt-5 text-[15px] leading-7 text-steel-700">These links open coverage published by the respective media outlets.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pressCoverage.map((article) => <a key={article.href} href={article.href} target="_blank" rel="noreferrer" className="focus-ring group flex min-h-48 flex-col border border-ink-900/10 bg-white p-6 shadow-[0_14px_34px_rgba(13,43,110,0.05)] transition hover:-translate-y-1 hover:border-brand-blue/35"><Newspaper size={21} className="text-brand-blue" aria-hidden="true" /><h3 className="mt-7 font-display text-xl font-bold">{article.outlet}</h3><span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue group-hover:text-brand-red">Read coverage <ExternalLink size={15} aria-hidden="true" /></span></a>)}
          </div>
        </div>
      </MotionSection>
      <ContactCta eyebrow="Speak with ARS" headline="Plan your next project with confidence." body="Contact the ARS team for product guidance and quotation support." primaryLabel="Request a quote" primaryHref="/request-quote" secondaryLabel="Explore products" secondaryHref="/products" tone="solid" />
    </main>
  );
}
