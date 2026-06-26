import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ClipboardList, MapPin, Network, Phone, Store } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clientVerificationSummary, verifiedContactDetails } from "@/data/business-verification";

export const metadata: Metadata = {
  title: "Dealer Locator | ARS Green Steel",
  description: "Find nearby ARS Green Steel dealer support and route purchase enquiries by location.",
};

const locatorSteps = [
  "Choose your city or project area",
  "Confirm product grade or bar size",
  "Connect with dealer or ARS sales",
  "Move into quote or availability support",
];

const supportCards = [
  {
    title: "Search by city",
    text: "Buyers usually start with locality, not product codes. The dealer path should begin there.",
    icon: MapPin,
  },
  {
    title: "Dealer contact route",
    text: "Move buyers toward nearby supply support without losing the ARS trust story.",
    icon: Store,
  },
  {
    title: "Product availability",
    text: "Connect dealers to 550D, CRS, and common bar-size requirements.",
    icon: Building2,
  },
  {
    title: "Quote fallback",
    text: "If local dealer data is incomplete, route the buyer to ARS sales immediately.",
    icon: ClipboardList,
    href: "/request-quote",
  },
];

const exampleCoverage = [
  ["Chennai", "Urban residential and commercial enquiries", "Route via ARS sales until live dealer data is confirmed."],
  ["Coimbatore", "Dealer and contractor support path", "Use contact route for current support matching."],
  ["Madurai", "Regional builder and local supply enquiries", "Dealer confirmation pending ARS data."],
  ["Vizag / coastal projects", "CRS 550D interest and exposed-zone support", "Route through ARS team for the right product and dealer handoff."],
];

export default function DealerLocatorPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-surface-50">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#eaf1ff] to-transparent" />
        <div className="ars-container relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="max-w-4xl">
            <SectionKicker>Dealer locator</SectionKicker>
            <h1 className="mt-7 font-display text-[clamp(3rem,6.2vw,6.7rem)] font-bold leading-[0.96] tracking-normal text-ink-900">
              Find steel <span className="text-brand-red">near you</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-700 lg:text-xl lg:leading-9">
              The dealer route should move buyers from location to confidence quickly: product availability,
              local support, and a clear ARS fallback if dealer data is still being verified.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
                href="/contact"
              >
                Request dealer help <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full border border-brand-blue/20 bg-white px-7 text-base font-bold text-brand-blue shadow-[0_12px_34px_rgba(13,43,110,0.08)] transition hover:border-brand-blue hover:bg-[#edf5ff]"
                href="/become-a-dealer"
              >
                Become a dealer
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[32px] bg-brand-blue/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-brand-blue/12 bg-white shadow-[0_26px_90px_rgba(13,43,110,0.13)]">
              <div className="relative h-[360px] bg-brand-blue">
                <Image
                  src="/ars-assets/Contact_banner.png"
                  alt="ARS dealer and local support path"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/86 via-[#060D1E]/24 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/70">
                    Local purchase support
                  </p>
                  <p className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight text-white">
                    A faster route from product interest to local availability.
                  </p>
                </div>
              </div>
              <div className="grid gap-0 border-t border-brand-blue/10 md:grid-cols-4">
                {[
                  ["Local", "Dealer-led path"],
                  ["550D", "Core product support"],
                  ["CRS", "Coastal requirement path"],
                  ["Sales", "Fallback support"],
                ].map(([value, label]) => (
                  <article key={label} className="border-b border-brand-blue/10 p-5 md:border-b-0 md:border-r last:border-r-0">
                    <p className="font-display text-3xl font-bold text-brand-blue">{value}</p>
                    <p className="mt-2 text-sm font-semibold text-steel-600">{label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24" id="locator-flow">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.84fr_1fr]">
            <div>
              <SectionKicker>Locator flow</SectionKicker>
              <h2 className="section-title max-w-4xl">Designed for local purchase support.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              The dealer experience should help buyers take the shortest useful path, even while
              final city-by-city dealer data is still being completed.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {locatorSteps.map((step, index) => (
              <article key={step} className="rounded-[18px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)]">
                <p className="font-technical text-sm font-black tracking-[0.16em] text-brand-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="support-cards">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <SectionKicker>Support routes</SectionKicker>
            <h2 className="section-title">Keep location, product, and action connected.</h2>
            <p className="section-copy">
              Dealer locator pages work best when they connect local demand to the next useful decision:
              city search, dealer contact, product availability, or sales fallback.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => {
              const Icon = card.icon;
              const cardContent = (
                <>
                  <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10">
                    <Icon size={22} />
                  </span>
                  <span>
                    <h3 className="font-display text-2xl font-bold text-ink-900">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-steel-700">{card.text}</p>
                    {card.href ? (
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                        Open route <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                      </span>
                    ) : null}
                  </span>
                </>
              );

              return card.href ? (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group flex min-h-[260px] flex-col justify-between rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35"
                >
                  {cardContent}
                </Link>
              ) : (
                <article
                  key={card.title}
                  className="flex min-h-[260px] flex-col justify-between rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="coverage">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
        <div className="ars-container relative z-10 grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <SectionKicker>Location examples</SectionKicker>
            <h2 className="section-title section-title-light">Use geography to reduce friction.</h2>
            <p className="section-copy section-copy-light">
              The final live locator should use approved dealer records. Until then, the page can
              still guide users by region and route them into sales support gracefully.
            </p>
            <Link
              className="focus-ring mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
              href={`tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`}
            >
              <Phone size={18} />
              Call sales helpline
            </Link>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-white/16 bg-white/[0.1] shadow-[0_22px_60px_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-[0.8fr_1.05fr_1.4fr] border-b border-white/12 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/54">
              <span>City</span>
              <span>Typical enquiry</span>
              <span>Current route</span>
            </div>
            {exampleCoverage.map(([city, type, route]) => (
              <div key={city} className="grid grid-cols-[0.8fr_1.05fr_1.4fr] border-b border-white/12 px-5 py-4 text-sm leading-6 text-white/72 last:border-b-0">
                <strong className="text-white">{city}</strong>
                <span>{type}</span>
                <span>{route}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container grid gap-5 rounded-[20px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-tight text-ink-900">
              Need local supply support for your project?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Use the enquiry route if your city, product, or dealer requirement needs a direct ARS response.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="/request-quote"
          >
            Request support <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
