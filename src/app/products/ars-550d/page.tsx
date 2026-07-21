import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  GitCompare,
  IndianRupee,
  Layers,
  MapPin,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ARS 550D TMT Bars | ARS Green Steel",
  description:
    "ARS 550D high-strength ductile TMT bars (Fe-550D, IS 1786:2008) for safer residential, commercial, and infrastructure construction.",
};

const stats = [
  { value: "550D", label: "Grade", sub: "High-strength ductile TMT steel for construction confidence." },
  { value: "8–32", label: "Bar sizes (mm)", sub: "Available across standard reinforcement sizes." },
  { value: "BIS", label: "Certified", sub: "Manufactured to IS 1786 and supported by SGS and SERC testing." },
  { value: "550 MPa", label: "Yield strength", sub: "Minimum yield strength for dependable structural performance." },
];

const specRows = [
  { label: "Grade", value: "Fe-550D TMT bars per IS 1786" },
  { label: "Primary promise", value: "High strength with improved ductility for safer structures" },
  { label: "Use cases", value: "Homes, apartments, commercial structures, infrastructure members" },
  { label: "Key properties", value: "High strength, ductility, bendability, weldability, and strong concrete bonding" },
  { label: "Next best step", value: "Calculate requirement, check dealer availability, or request a quote" },
];

const whyCards = [
  {
    icon: <Zap size={20} />,
    title: "Ductility",
    desc: "Low sulphur and phosphorus content supports deformation under load and dependable seismic performance.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Bendability",
    desc: "Maintains bendability for easier fabrication and site detailing while preserving mechanical performance.",
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "Concrete bonding",
    desc: "The ribbed surface profile develops a strong bond with concrete for reliable load transfer.",
  },
  {
    icon: <FileText size={20} />,
    title: "Certified quality",
    desc: "BIS certified and supported by SGS testing, SERC certification, and stringent in-house quality control.",
  },
];

const properties = [
  { label: "Yield Strength", value: "≥ 550 MPa" },
  { label: "UTS", value: "≥ 600 MPa" },
  { label: "Elongation", value: "≥ 16%" },
  { label: "TS / YS Ratio", value: "≥ 1.10" },
  { label: "Bar Sizes", value: "8mm – 32mm" },
  { label: "Standard", value: "IS 1786:2008" },
];

const actions = [
  {
    icon: <IndianRupee size={20} />,
    title: "Check price",
    desc: "Review the current price context before requesting a final quote. No commitment required.",
    cta: "View price",
    href: "/steel-price-today",
  },
  {
    icon: <MapPin size={20} />,
    title: "Find dealer",
    desc: "Locate nearby dealers and connect with local supply support in your area.",
    cta: "Find a dealer",
    href: "/dealer-locator",
  },
  {
    icon: <GitCompare size={20} />,
    title: "Compare CRS",
    desc: "Use ARS CRS 550D for coastal, humid, and durability-heavy conditions instead.",
    cta: "Compare grade",
    href: "/products/ars-crs-550d",
  },
];

export default function Ars550DPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "68vh", minHeight: "520px", maxHeight: "740px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/TMT-Bars.png"
            alt="ARS 550D TMT steel bars"
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
          <div className="grid items-end gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
                <Layers size={12} className="text-white/50" />
                <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">
                  ARS 550D TMT Bars · Fe550D Grade Reinforcement Steel
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
                High-strength Fe550D TMT bars for
                <br />
                <span className="italic text-brand-red">strong, durable construction.</span>
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/request-quote"
                  className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
                >
                  <FileText size={14} /> Request 550D quote
                </a>
                <a
                  href="/tmt-calculator"
                  className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
                >
                  <Calculator size={14} /> Calculate steel
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-6 backdrop-blur">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
                  About this grade
                </p>
                <p className="text-[14px] leading-[1.75] text-white/80">
                  ARS 550D is engineered for high strength, superior ductility, and dependable performance
                  across modern reinforced concrete construction.
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                  <CheckCircle2 size={14} className="text-brand-red" />
                  <span className="text-[12px] font-medium text-white/70">
                    IS 1786:2008 · Fe-550D grade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
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

      {/* ── Spec table ── */}
      <MotionSection className="bg-white py-24" id="specifications">
        <div className="ars-container">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Spec / Technical Clarity</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                What are ARS 550D TMT Bars?
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">
                Choosing reinforcement steel is a structural decision. ARS 550D is manufactured to IS 1786
                standards for residential, commercial, industrial, and infrastructure projects where
                long-term performance matters.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100">
              <div className="bg-brand-blue px-6 py-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                  ARS 550D — Technical overview
                </span>
              </div>
              {specRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-5 items-start px-6 py-4 ${
                    i < specRows.length - 1 ? "border-b border-grey-100" : ""
                  } ${i % 2 === 0 ? "bg-white" : "bg-surface-50"}`}
                >
                  <span className="col-span-2 pt-0.5 text-[11px] font-bold uppercase tracking-[0.06em] text-brand-blue">
                    {row.label}
                  </span>
                  <span className="col-span-3 text-[13px] leading-[1.6] text-steel-700">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Why ARS 550D ── */}
      <MotionSection className="bg-brand-blue py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Why ARS 550D</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Engineered to perform. Built to last.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Every ARS 550D TMT bar is manufactured to deliver the strength, flexibility, and consistency
              required for modern reinforced concrete construction.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((c, i) => (
              <div
                key={c.title}
                className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">
                    {c.icon}
                  </div>
                  <span className="text-[12px] font-bold text-white/15">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-white">{c.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/65">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Product detail + key properties ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="grid items-center gap-14 lg:grid-cols-5">
            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-ink-950 lg:col-span-3">
              <Image
                src="/ars-assets/products-all.png"
                alt="ARS 550D TMT bars"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(13,43,110,0.25) 0%, transparent 60%)" }}
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-brand-blue px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] text-white">
                  Fe-550D Grade
                </span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <SectionKicker variant="brand">Key Properties</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink-900">
                Numbers behind the grade.
              </h2>
              <p className="mb-8 mt-4 text-[14px] leading-[1.75] text-steel-700">
                These are the Fe-550D thresholds specified under IS 1786:2008 — the benchmark ARS 550D is
                manufactured to meet.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {properties.map((p) => (
                  <div key={p.label} className="rounded-xl border border-surface-100 bg-surface-50 p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.1em] text-grey-600">
                      {p.label}
                    </p>
                    <p className="font-display text-[1.1rem] font-extrabold tracking-[-0.01em] text-brand-blue">
                      {p.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Selling actions ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Selling Action</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Move from product interest to supply.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Three direct paths for buyers who are ready to act — check price, find a dealer, or
              understand which grade fits your project conditions.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {actions.map((a) => (
              <a
                key={a.title}
                href={a.href}
                className="focus-ring group flex flex-col gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                  {a.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-[17px] font-bold text-ink-900">{a.title}</h3>
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
              <SectionKicker variant="light">Ready to specify</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Start with the grade.
                <br />
                We will handle the rest.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Request the spec, run the calculator, or speak to a dealer — all three paths start here.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                <FileText size={15} /> Request spec sheet
              </a>
              <a
                href="/tmt-calculator"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                <Calculator size={15} /> Calculate requirement
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
