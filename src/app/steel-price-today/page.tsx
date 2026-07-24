import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  IndianRupee,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clientVerificationSummary, steelPriceRows } from "@/data/business-verification";

export const metadata = createPageMetadata({
  title: "Steel Price Today | ARS Green Steel",
  description:
    "ARS Green Steel TMT bar price context by size, with calculator, dealer, and quote paths for current pricing.",
  path: "/steel-price-today",
});

const stats = [
  { value: "8–32", label: "Rod range", sub: "Price context prepared for common ARS TMT bar sizes." },
  { value: "Today", label: "Pricing", sub: "Rates move with size, quantity, location, and market." },
  { value: "Dealer", label: "Route", sub: "Dealer locator is a natural next step after price review." },
  { value: "Quote", label: "Next step", sub: "Price interest converts into a quote request quickly." },
];

const nextSteps = [
  {
    icon: <Calculator size={20} />,
    title: "Calculate steel",
    desc: "Estimate requirement before asking sales for a final price.",
    cta: "Open calculator",
    href: "/tmt-calculator",
  },
  {
    icon: <MapPin size={20} />,
    title: "Find dealer",
    desc: "Use your location to discover nearby ARS supply support.",
    cta: "Find a dealer",
    href: "/dealer-locator",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Request quote",
    desc: "Share size, quantity, and site location for current pricing.",
    cta: "Request quote",
    href: "/request-quote",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Verify quality",
    desc: "Review product proof before making price the only factor.",
    cta: "View proof",
    href: "/certifications",
  },
];

export default function SteelPriceTodayPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "60vh", minHeight: "460px", maxHeight: "660px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/products-all.png"
            alt="ARS TMT steel bars"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,30,0.95) 0%, rgba(6,13,30,0.65) 50%, rgba(6,13,30,0.2) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,30,0.9) 0%, transparent 55%)" }}
          />
        </div>

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <IndianRupee size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">Steel Price Today</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Price clarity,
              <br />
              <span className="italic text-brand-red">before calls.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Review common TMT bar sizes and applications, then move straight into a quote request for
              current ARS pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request current quote <ArrowRight size={14} />
              </a>
              <a
                href="/tmt-calculator"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                <Calculator size={14} /> Calculate need
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {s.value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {s.label}
                </span>
                <span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Price table ── */}
      <MotionSection className="bg-white py-24" id="price-table">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Price Table</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Find your size, then get today&apos;s rate.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              {clientVerificationSummary.pricing}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100">
            <div className="grid grid-cols-[0.7fr_1.3fr_1fr] bg-brand-blue px-6 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">Size</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">Typical use</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">Status</span>
            </div>
            {steelPriceRows.map(([size, use, status], i) => (
              <div
                key={size}
                className={`grid grid-cols-[0.7fr_1.3fr_1fr] items-center px-6 py-4 ${
                  i < steelPriceRows.length - 1 ? "border-b border-grey-100" : ""
                } ${i % 2 === 0 ? "bg-white" : "bg-surface-50"}`}
              >
                <span className="font-display text-[15px] font-extrabold text-brand-blue">{size}</span>
                <span className="text-[13px] leading-[1.5] text-steel-700">{use}</span>
                <span className="text-[12px] font-semibold text-grey-600">{status}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] leading-[1.6] text-grey-600">
            Rates shown as &quot;contact for current rate&quot; until ARS confirms published pricing — request a
            quote for today&apos;s figure.
          </p>
        </div>
      </MotionSection>

      {/* ── Next steps ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Next Steps</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Do more than check a number.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Price is one input. Estimate your requirement, find a dealer, verify quality, or move straight
              to a quote.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((a) => (
              <a
                key={a.title}
                href={a.href}
                className="focus-ring group flex flex-col gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                  {a.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-[16px] font-bold text-ink-900">{a.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-grey-600">{a.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                  {a.cta} <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── CTA banner ── */}
      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">Get today&apos;s rate</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Ready for a current ARS quote?
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Share your size, quantity, and site location and ARS sales will respond with current
                pricing.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request quote <ArrowRight size={15} />
              </a>
              <a
                href="/dealer-locator"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                <MapPin size={15} /> Find a dealer
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
