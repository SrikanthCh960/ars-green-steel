import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Atom,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Droplets,
  FlaskConical,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Our Quality | ARS Green Steel",
  description:
    "ARS quality systems — SGS certification, in-house spectrometry and lab testing, bend/rebend, tensile, and spectro analysis behind ARS 550D TMT bars.",
  path: "/our-quality",
});

const stats = [
  { value: "Every", label: "Batch tested", sub: "Every production batch is tested before dispatch." },
  { value: "BIS", label: "Standards", sub: "Manufactured in accordance with applicable BIS standards." },
  { value: "8–32", label: "All sizes (mm)", sub: "Consistent quality from 8 mm through 32 mm." },
  { value: "In-house", label: "Quality control", sub: "Optical Emission Spectrometry and laboratory testing on site." },
];

const usp = [
  "Every batch tested before dispatch",
  "In-house quality control at every stage",
  "Advanced OES chemical analysis",
  "SGS-certified quality assurance",
  "Manufactured to BIS standards",
  "Consistent quality from 8 mm to 32 mm",
];

const tests = [
  {
    icon: <Activity size={20} />,
    title: "Bend & rebend test",
    desc: "Confirms that the bar can bend and rebend without cracking, ensuring the ductility needed for safer structures.",
  },
  {
    icon: <CircleDot size={20} />,
    title: "Martensite (ring) test",
    desc: "Checks the hardened outer layer of the bar to verify the balance between strength and flexibility.",
  },
  {
    icon: <Gauge size={20} />,
    title: "Tensile test",
    desc: "Measures tensile strength, yield strength, and elongation to ensure every bar meets BIS quality requirements.",
  },
  {
    icon: <Droplets size={20} />,
    title: "Quenching process",
    desc: "A carefully controlled cooling process that develops the strength and ductility expected from high-quality TMT bars.",
  },
  {
    icon: <Atom size={20} />,
    title: "Spectro analysis",
    desc: "Verifies the chemical composition of every heat to maintain consistency and comply with manufacturing specifications.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "SGS certificate",
    desc: "Independent testing and certification provide an additional layer of assurance that ARS quality meets recognised industry standards.",
  },
];

export default function OurQualityPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "62vh", minHeight: "480px", maxHeight: "680px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/our-quality-1.png"
            alt="ARS quality and first dispatch at the plant"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
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
              <ShieldCheck size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS Quality</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Quality that stands behind
              <br />
              <span className="italic text-brand-red">every structure.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              From production to final inspection, every ARS TMT bar is carefully tested to meet the
              standards your project deserves.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request test report <ArrowRight size={14} />
              </Link>
              <Link
                href="/certifications"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                View certifications
              </Link>
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

      {/* ── USP + quality control ── */}
      <MotionSection className="bg-white py-24" id="quality-control">
        <div className="ars-container">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Why ARS Quality</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Every stage of manufacturing has one purpose: better quality steel.
              </h2>
              <p className="mb-8 mt-5 text-[15px] leading-[1.8] text-steel-700">
                The quality of steel depends on the decisions made throughout the manufacturing process. At
                ARS, every stage is carefully monitored and every batch is tested to ensure consistent strength,
                ductility, and reliability before it reaches your construction site.
              </p>
              <div className="flex flex-col gap-3">
                {usp.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-brand-red" />
                    <span className="text-[14px] font-medium text-steel-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                <FlaskConical size={24} />
              </div>
              <h3 className="mt-6 font-display text-[20px] font-bold text-ink-900">In-house quality control.</h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-steel-700">
                Our quality team checks every production batch using advanced testing equipment before it is
                approved for dispatch. This helps us maintain consistent chemical composition, mechanical
                properties, and manufacturing standards across every ARS TMT bar.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-surface-100 bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-grey-600">Spectrometry</p>
                  <p className="mt-1 font-display text-[1.05rem] font-extrabold text-brand-blue">OES</p>
                </div>
                <div className="rounded-xl border border-surface-100 bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-grey-600">Analysis</p>
                  <p className="mt-1 font-display text-[1.05rem] font-extrabold text-brand-blue">Macro &amp; mechanical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Testing process ── */}
      <MotionSection className="bg-brand-blue py-24" id="testing">
        <div className="ars-container">
          <div className="mb-14 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Quality Assurance</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Every Batch Undergoes These Critical Quality Tests
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Each batch is tested against key mechanical and chemical parameters to ensure it meets BIS
              standards and ARS&apos;s uncompromising quality benchmarks.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((t, i) => (
              <div
                key={t.title}
                className="flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red">
                    {t.icon}
                  </div>
                  <span className="text-[12px] font-bold text-white/15">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-white">{t.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/65">{t.desc}</p>
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
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">Verify the quality</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Ask ARS for the proof your project needs.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Request test references, certifications, or technical support before you specify ARS steel.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request test report <ArrowRight size={15} />
              </Link>
              <Link
                href="/products/ars-550d"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                View ARS 550D
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
