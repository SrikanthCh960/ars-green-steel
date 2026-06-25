import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck,
  Leaf,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Green Steel | ARS Green Steel",
  description:
    "ARS Green Steel sustainability positioning — EPD-certified, recycled-route manufacturing, and green-building readiness for responsible construction.",
};

const stats = [
  { value: "EPD", label: "Certified", sub: "International Environmental Product Declaration for ARS steel." },
  { value: "Lower", label: "Carbon", sub: "Production focused on reducing manufacturing carbon emissions." },
  { value: "550D", label: "Same strength", sub: "Green steel without compromising the Fe-550D grade." },
  { value: "Recycled", label: "Route", sub: "Induction-furnace route aligned to recycled-steel policy." },
];

const points = [
  "Reduced carbon footprint in the production process",
  "International EPD (Green Steel) certification",
  "Aligned to the Ministry of Steel recycled-steel policy",
  "Same Fe-550D strength and IS 1786:2008 testing",
];

const pillars = [
  {
    icon: <FileCheck size={20} />,
    title: "EPD certificate",
    desc: "An Environmental Product Declaration independently documents the lifecycle environmental impact of ARS steel.",
  },
  {
    icon: <Recycle size={20} />,
    title: "Recycled route",
    desc: "An induction-furnace manufacturing route that aligns with the national policy direction on recycled steel.",
  },
  {
    icon: <Leaf size={20} />,
    title: "Lower carbon",
    desc: "A manufacturing focus on reducing carbon emissions across the steel production process.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Green-building ready",
    desc: "Documentation that supports green-building and responsible-construction conversations.",
  },
];

export default function GreenSteelPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "62vh", minHeight: "480px", maxHeight: "680px" }}
      >
        <div className="soft-noise absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 30%, rgba(22,101,52,0.35) 0%, transparent 45%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,30,0.92) 0%, rgba(6,13,30,0.3) 55%, transparent 100%)" }}
        />

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Leaf size={12} className="text-green-steel" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS Green Steel</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Steel made
              <br />
              <span className="italic text-brand-red">responsibly.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              ARS is committed to reducing its carbon footprint and shaping sustainable construction — with
              EPD-certified, recycled-route steel that keeps full Fe-550D strength.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Talk to sales <ArrowRight size={14} />
              </a>
              <a
                href="/certifications"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                View certifications
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

      {/* ── What is green steel ── */}
      <MotionSection className="bg-white py-24" id="what-is-green-steel">
        <div className="ars-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">What Is Green Steel</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Lower-carbon steel, same structural strength.
              </h2>
              <p className="mb-6 mt-5 text-[15px] leading-[1.8] text-steel-700">
                Green steel is an approach to manufacturing that focuses on reducing the carbon emissions
                produced during the steel-making process. At ARS, that commitment runs alongside the same
                Fe-550D grade buyers already trust.
              </p>
              <div className="flex flex-col gap-3">
                {points.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-green-steel" />
                    <span className="text-[14px] font-medium text-steel-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-steel/10 text-green-steel">
                <Leaf size={24} />
              </div>
              <h3 className="mt-6 font-display text-[20px] font-bold text-ink-900">
                An EPD-certified first.
              </h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-steel-700">
                ARS received an International EPD (Green Steel) certificate — which ARS states is the first
                in India&apos;s induction-furnace-route industry. The Ministry of Steel&apos;s recycled-steel
                policy aligns directly with this direction.
              </p>
              <p className="mt-4 text-[12px] leading-[1.6] text-grey-600">
                EPD claims and the &quot;first in India&quot; statement are carried from ARS source content and
                should be confirmed against the certificate before launch.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Sustainability pillars ── */}
      <MotionSection className="bg-brand-blue py-24" id="embodied-carbon">
        <div className="ars-container">
          <div className="mb-14 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Why It Matters</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Sustainability buyers can verify.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Green positioning only matters when it is documented. ARS connects its sustainability story
              to certification, recycled-route manufacturing, and green-building readiness.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-steel/40 bg-green-steel/15 text-green-steel">
                    {p.icon}
                  </div>
                  <span className="text-[12px] font-bold text-white/15">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-white">{p.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/65">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── CTA banner ── */}
      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(22,101,52,0.85) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">Build responsibly</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Specify green steel for your next project.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Ask ARS for EPD references, green-building documentation, or product guidance for
                sustainability-led builds.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Talk to sales <ArrowRight size={15} />
              </a>
              <a
                href="/certifications"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                <BadgeCheck size={15} /> View certifications
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
