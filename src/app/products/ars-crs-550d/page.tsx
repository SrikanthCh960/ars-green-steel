import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  GitCompare,
  MapPin,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "ARS CRS 550D TMT Bars | ARS Green Steel",
  description:
    "ARS CRS 550D corrosion-resistant TMT bars (Fe-550D, IS 1786:2008) for coastal, humid, and durability-focused construction.",
  path: "/products/ars-crs-550d",
});

const stats = [
  { value: "CRS", label: "Grade", sub: "Corrosion-resistant Fe-550D for long-life structures." },
  { value: "560 MPa", label: "Yield strength", sub: "Minimum yield strength with corrosion-resistant chemistry." },
  { value: "Coastal", label: "Best fit", sub: "Built for humid, exposed, and coastal construction zones." },
  { value: "IS 1786", label: "Standard", sub: "Manufactured to the IS 1786:2008 TMT benchmark." },
];

const specRows = [
  { label: "Grade", value: "Fe-550D corrosion-resistant TMT bars per IS 1786" },
  { label: "Primary promise", value: "Improved corrosion resistance for exposed and durability-focused structures" },
  { label: "Best fit", value: "Coastal projects, humid zones, water-exposed structures, long-life concrete work" },
  { label: "Alloy chemistry", value: "Copper, Chromium, Nickel, and Molybdenum support enhanced corrosion resistance" },
  { label: "Next best step", value: "Confirm site condition, rod size, quantity, dealer availability, and quote" },
];

const whyCards = [
  {
    icon: <Waves size={20} />,
    title: "Corrosion-resistant steel",
    desc: "CRS technology and controlled alloy chemistry help protect reinforcement in aggressive environments.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Longer structural life",
    desc: "Helps minimise corrosion-related deterioration in humid, coastal, and high-salinity conditions.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "High strength & ductility",
    desc: "Fe550D mechanical performance supports dependable structural reinforcement under dynamic loads.",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Aggressive environments",
    desc: "Recommended for coastal regions, ports, bridges, industrial zones, and water-retaining structures.",
  },
];

const properties = [
  { label: "Yield Strength", value: "≥ 560 MPa" },
  { label: "UTS", value: "≥ 620 MPa" },
  { label: "Elongation", value: "≥ 16%" },
  { label: "UTS / YS Ratio", value: "≥ 1.08" },
  { label: "Bar Sizes", value: "8mm – 32mm" },
  { label: "Standard", value: "IS 1786:2008" },
];

const actions = [
  {
    icon: <GitCompare size={20} />,
    title: "When to choose CRS",
    desc: "Choose CRS 550D for coastal, high-humidity, high-salinity, or corrosion-prone project conditions.",
    cta: "Compare grade",
    href: "/products/ars-550d",
  },
  {
    icon: <MapPin size={20} />,
    title: "Find dealer",
    desc: "Locate nearby dealers and confirm CRS availability for your region.",
    cta: "Find a dealer",
    href: "/dealer-locator",
  },
  {
    icon: <Award size={20} />,
    title: "View certifications",
    desc: "Review quality systems and green-building readiness before specifying.",
    cta: "View proof",
    href: "/certifications",
  },
];

export default function ArsCrs550DPage() {
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
            src="/ars-assets/products-all.png"
            alt="ARS CRS 550D corrosion-resistant TMT steel bars"
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
                <ShieldCheck size={12} className="text-white/60" />
                <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">
                  ARS CRS 550D TMT Bars · Corrosion-Resistant Fe550D Steel
                </span>
              </div>
              <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
                Corrosion-resistant Fe550D TMT bars for
                <br />
                <span className="italic text-brand-red">long-lasting structures.</span>
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/request-quote"
                  className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
                >
                  <FileText size={14} /> Request CRS quote
                </a>
                <a
                  href="/dealer-locator"
                  className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
                >
                  <MapPin size={14} /> Find a dealer
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-6 backdrop-blur">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
                  About this grade
                </p>
                <p className="text-[14px] leading-[1.75] text-white/80">
                  ARS CRS 550D combines high strength and ductility with corrosion resistance for coastal,
                  humid, industrial, and high-salinity reinforced concrete construction.
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                  <CheckCircle2 size={14} className="text-brand-red" />
                  <span className="text-[12px] font-medium text-white/70">
                    IS 1786:2008 · Fe-550D CRS grade
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
              <SectionKicker variant="brand">CRS Specification</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                What are ARS CRS 550D TMT Bars?
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">
                Corrosion is a leading cause of structural deterioration. ARS CRS 550D uses advanced CRS
                technology to provide corrosion resistance alongside the strength and ductility required for
                long service life.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100">
              <div className="bg-brand-blue px-6 py-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
                  ARS CRS 550D — Technical overview
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

      {/* ── Where CRS fits ── */}
      <MotionSection className="bg-brand-blue py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Where It Fits</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Engineered for corrosion resistance. Built for generations.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              When salt, humidity, or long service life shape the spec, CRS 550D gives engineers a
              durability-focused option without giving up the strength of the Fe-550D grade.
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
                src="/ars-assets/ARSHOME2.jpg"
                alt="ARS CRS 550D corrosion-resistant steel"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-brand-blue px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] text-white">
                  Fe-550D CRS
                </span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <SectionKicker variant="brand">Key Properties</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink-900">
                Strength that resists corrosion.
              </h2>
              <p className="mb-8 mt-4 text-[14px] leading-[1.75] text-steel-700">
                ARS CRS 550D meets the Fe-550D mechanical thresholds of IS 1786:2008 while adding corrosion
                resistance for exposed environments.
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
                Confirm the right grade for your site.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Three direct paths for buyers who are ready to act — compare grades, find a dealer, or review
              the proof before specifying CRS.
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
                Match the grade to the site.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Confirm site condition, compare with core 550D, or speak to a dealer — every path starts
                here.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                <FileText size={15} /> Request CRS quote
              </a>
              <a
                href="/products/ars-550d"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                <GitCompare size={15} /> Compare with 550D
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
