import { createPageMetadata } from "@/lib/site-metadata";
import {
  ArrowRight,
  Building2,
  Calculator,
  ClipboardList,
  Layers,
  Ruler,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { calculatorInputFields, clientVerificationSummary } from "@/data/business-verification";

export const metadata = createPageMetadata({
  title: "TMT Calculator | ARS Green Steel",
  description:
    "Estimate ARS TMT steel requirement by project type, area, floor count, and rod size — then move into a sales enquiry.",
  path: "/tmt-calculator",
});

const stats = [
  { value: "4", label: "Inputs", sub: "Project type, category, floors, and area form the base." },
  { value: "8–32", label: "Rod sizes", sub: "Bar-size context guides the estimate and quote follow-up." },
  { value: "Sales", label: "Support", sub: "ARS sales turn your inputs into requirement guidance." },
  { value: "Quote", label: "Handoff", sub: "Estimates move directly into a quote conversation." },
];

const support = [
  {
    icon: <Building2 size={20} />,
    title: "Project type",
    desc: "Residential, commercial, and infrastructure contexts each need different assumptions.",
  },
  {
    icon: <Ruler size={20} />,
    title: "Rod size",
    desc: "8mm to 32mm bars connect calculator output to real purchase planning.",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Sales handoff",
    desc: "The estimate should transfer directly into a quote conversation.",
    href: "/request-quote",
  },
  {
    icon: <Calculator size={20} />,
    title: "Product fit",
    desc: "ARS 550D and CRS 550D should be selected by structure and exposure.",
    href: "/products",
  },
];

export default function TmtCalculatorPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "58vh", minHeight: "440px", maxHeight: "640px" }}
      >
        <div className="soft-noise absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,30,0.92) 0%, rgba(6,13,30,0.3) 55%, transparent 100%)" }}
        />

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Calculator size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">TMT Calculator</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Estimate before
              <br />
              <span className="italic text-brand-red">you enquire.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Plan your steel requirement with a simple, enquiry-first flow that helps the ARS team respond
              with better context.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request estimate support <ArrowRight size={14} />
              </a>
              <a
                href="/products#sizes"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                <Layers size={14} /> View sizes
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

      {/* ── Calculator form ── */}
      <MotionSection className="bg-white py-24" id="calculator">
        <div className="ars-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionKicker variant="brand">Calculator Model</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Share project details for a better estimate.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">
                Enter the basic project information sales teams usually need before helping with quantity
                and quote support.
              </p>
              <p className="mt-4 text-[12px] leading-[1.6] text-grey-600">
                {clientVerificationSummary.calculator} The final formula and output format are confirmed
                with ARS before launch.
              </p>
            </div>

            <div className="rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-6 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {calculatorInputFields.map((field) => (
                  <label key={field} className="grid gap-2 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                    {field}
                    <input
                      name={field.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                      className="h-12 rounded-xl border border-ink-900/10 bg-white px-4 text-[14px] font-normal normal-case tracking-normal text-ink-900 outline-none transition placeholder:text-grey-300 focus:border-brand-blue"
                      placeholder="Enter details"
                    />
                  </label>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-brand-blue/15 bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue">Estimate output</p>
                <p className="mt-3 text-[14px] leading-[1.7] text-steel-700">
                  Share these inputs with ARS sales to receive requirement guidance based on your project
                  type, location, and product grade.
                </p>
              </div>
              <a
                href="/request-quote"
                className="focus-ring mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Send requirement <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Calculator support ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Calculator Support</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Make estimate outputs useful.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              An estimate is a starting point. These factors keep it accurate and move it toward a real
              purchase decision.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((c) => {
              const inner = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-display text-[16px] font-bold text-ink-900">{c.title}</h3>
                    <p className="text-[13px] leading-[1.7] text-grey-600">{c.desc}</p>
                  </div>
                  {c.href ? (
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                      Open <ArrowRight size={12} />
                    </span>
                  ) : null}
                </>
              );
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  className="focus-ring group flex flex-col gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={c.title}
                  className="flex flex-col gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-7"
                >
                  {inner}
                </div>
              );
            })}
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
              <SectionKicker variant="light">From estimate to quote</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Let ARS sales firm up your numbers.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Send your project details and the ARS team will respond with requirement guidance and
                current pricing.
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
                href="/steel-price-today"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                Check steel price
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
