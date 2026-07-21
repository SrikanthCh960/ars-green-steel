import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Leaf,
  Recycle,
  ShieldCheck,
  Zap,
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

const heroImpact = [
  { value: "592 kg", label: "CO₂e per tonne — EPD verified" },
  { value: "98%", label: "Recycled steel as primary input" },
  { value: "EAF", label: "Electric Arc Furnace process" },
];

const conceptPoints = [
  "Electric Arc Furnace production, not blast furnace",
  "Up to 98% recycled steel as primary input",
  "Independently verified emissions data through an EPD",
  "Fe-550D strength and IS 1786:2008 testing—no trade-off on performance",
];

const processSteps = [
  {
    number: "01",
    title: "Scrap collection",
    desc: "High-quality recycled steel scrap is sourced, graded, and prepared, replacing virgin iron ore as the primary input material.",
  },
  {
    number: "02",
    title: "Electric Arc Furnace",
    desc: "Scrap is melted in an EAF using electrical energy rather than coal. This single step cuts CO2 emissions versus blast furnace routes.",
  },
  {
    number: "03",
    title: "Refining & alloying",
    desc: "Molten steel is refined to precise chemical specifications, with carbon, sulphur, phosphorus, and alloying elements controlled for grade consistency.",
  },
  {
    number: "04",
    title: "TMT rolling",
    desc: "Refined steel is continuously cast and hot-rolled into TMT bars, with thermo-mechanical treatment delivering the Fe-550D grade properties.",
  },
  {
    number: "05",
    title: "Testing & certification",
    desc: "Every batch undergoes tensile, bend-rebend, and chemical testing. Third-party verification confirms compliance before dispatch.",
  },
];

const impactCards = [
  {
    icon: <Leaf size={22} />,
    value: "592 kg",
    meta: "CO₂e / tonne",
    title: "Lower Carbon Footprint",
    desc: "Environmental Product Declaration data independently documents ARS emissions per tonne of finished steel.",
  },
  {
    icon: <Recycle size={22} />,
    value: "98%",
    meta: "recycled input",
    title: "Recycled Scrap-Based Production",
    desc: "Up to 98% recycled steel supports circular manufacturing and reduces demand for virgin raw materials.",
  },
  {
    icon: <Zap size={22} />,
    value: "EAF",
    meta: "technology",
    title: "Energy Efficient Processes",
    desc: "Advanced Electric Arc Furnaces consume less energy per tonne, with improvement targets embedded into our operations.",
  },
];

const certificationRows = [
  {
    title: "EPD Ready",
    desc: "Environmental Product Declaration documentation available for green building projects and sustainability audits.",
    category: "Sustainability",
  },
  {
    title: "GRIHA Compatible",
    desc: "ARS green steel products contribute toward GRIHA rating points for building projects seeking national green certification.",
    category: "Green Building",
  },
  {
    title: "LEED Compatible",
    desc: "Material documentation supports LEED credit submissions for recycled content and regional material sourcing requirements.",
    category: "International",
  },
  {
    title: "SGS Certified",
    desc: "Independent third-party SGS verification confirms our environmental and quality claims are backed by audit data.",
    category: "Third Party",
  },
  {
    title: "BIS Certified",
    desc: "Bureau of Indian Standards certification ensures every bar meets IS 1786:2008, the national structural steel benchmark.",
    category: "Quality",
  },
];

const verificationCards = [
  {
    icon: <FileCheck size={20} />,
    value: "592 kg",
    title: "EPD verified",
    desc: "CO₂e per tonne of finished steel",
  },
  {
    icon: <Recycle size={20} />,
    value: "98%",
    title: "Recycled input",
    desc: "Scrap replaces virgin ore as primary material",
  },
  {
    icon: <Zap size={20} />,
    value: "5-Star",
    title: "Green Steel Rating",
    desc: "Ministry of Steel Green Steel Taxonomy recognition",
  },
  {
    icon: <ShieldCheck size={20} />,
    value: "5+",
    title: "Certifications",
    desc: "Independent third-party verified sustainability claims",
  },
];

export default function GreenSteelPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ minHeight: "620px" }}
      >
        <Image
          src="/ars-assets/ARS-green-bg.png"
          alt="ARS Green Steel background"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,13,30,0.88) 0%, rgba(6,13,30,0.72) 38%, rgba(6,13,30,0.46) 68%, rgba(6,13,30,0.22) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,30,0.78) 0%, rgba(6,13,30,0.08) 65%)" }}
        />

        <div className="ars-container relative z-10 grid w-full gap-10 py-20 md:py-24 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] xl:items-end">
          <div className="max-w-[560px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.08] px-3 py-1.5">
              <Leaf size={12} className="text-white/75" />
              <span className="text-[11px] font-semibold tracking-[0.08em] text-white/74">
                Sustainability · ARS Green Steel
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.8rem,5.4vw,5.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              What is
              <br />
              <span className="text-brand-red">green steel?</span>
            </h1>
            <p className="mt-6 max-w-[500px] text-[15px] leading-[1.85] text-white/74 md:text-[16px]">
              Steel produced with significantly lower carbon emissions, recycled inputs, and energy-efficient
              processes, without compromising on strength or certification.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#the-concept"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Learn more <ArrowRight size={15} />
              </a>
              <a
                href="/certifications"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/28 px-6 py-3.5 text-[14px] font-semibold text-white/84 transition hover:bg-white/[0.1]"
              >
                View certifications
              </a>
            </div>
          </div>

          <div className="xl:justify-self-end">
            <div className="rounded-[28px] border border-white/14 bg-white/[0.08] p-6 backdrop-blur-md md:p-7">
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/52">
                ARS Green Steel Impact
              </div>
              <div className="divide-y divide-white/10">
                {heroImpact.map((item) => (
                  <div key={item.label} className="grid grid-cols-[92px_1fr] gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="font-display text-[clamp(1.8rem,2vw,2.35rem)] font-extrabold leading-none text-brand-red">
                      {item.value}
                    </div>
                    <div className="self-center text-[15px] font-medium text-white/78">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The concept ── */}
      <MotionSection className="bg-white py-24" id="the-concept">
        <div className="ars-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">The Concept</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Steel that builds India without burning it.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.82] text-steel-700">
                Conventional steel production relies on coal-fired blast furnaces, energy-intensive and
                highly polluting. Green steel takes a fundamentally different path: using Electric Arc
                Furnaces powered by recycled scrap metal, dramatically reducing both energy use and carbon
                output.
              </p>
              <p className="mt-8 text-[15px] leading-[1.82] text-steel-700">
                At ARS, green steel isn&apos;t a marketing label. It&apos;s the production method behind our
                facility, because the structures of tomorrow shouldn&apos;t come at the cost of the
                environment they stand in.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {conceptPoints.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-brand-red" />
                    <span className="text-[14px] font-medium text-steel-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-surface-100 bg-surface-50 shadow-[0_24px_80px_rgba(13,43,110,0.08)]">
              <Image
                src="/ars-assets/ARS-green-bg.png"
                alt="Forest and industrial landscape representing lower-carbon steel"
                width={900}
                height={900}
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/16 bg-ink-950/56 px-5 py-4 backdrop-blur-md">
                <div className="flex items-center gap-3 text-[15px] font-semibold text-white">
                  <ShieldCheck size={18} className="text-brand-red" />
                  EPD ready · GRIHA / LEED compatible
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Process ── */}
      <MotionSection className="bg-brand-blue py-24" id="embodied-carbon">
        <div className="ars-container">
          <div className="mb-14 grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
            <div>
              <SectionKicker variant="brand">The Process</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                How green steel is produced.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Five stages, each designed to minimise environmental impact while maximising structural
              performance. No shortcuts at any step.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[22px] border border-white/10 bg-white/[0.05] p-6"
              >
                <div className="mb-5 font-display text-[clamp(1.8rem,2vw,2.35rem)] font-extrabold leading-none text-brand-red/65">
                  {step.number}
                </div>
                <h3 className="mb-3 font-display text-[15px] font-bold text-white">{step.title}</h3>
                <p className="text-[13px] leading-[1.7] text-white/62">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-10 overflow-hidden rounded-[28px]">
            <Image
              src="/ars-assets/right-about-us.png-compress.webp"
              alt="Manufacturing process at ARS Rajasthan plant"
              width={1600}
              height={900}
              className="h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/12 to-transparent" />
            <div className="absolute left-8 bottom-8 max-w-[360px]">
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/55">
                ARS Production
              </div>
              <h3 className="font-display text-[clamp(1.9rem,2.4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                Electric Arc Furnace
                <br />
                at our Rajasthan plant
              </h3>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Impact cards ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-12 flex flex-col items-start gap-5">
            <SectionKicker variant="brand">Environmental Impact</SectionKicker>
            <h2 className="section-title max-w-[860px] text-balance text-center md:self-center">
              What makes ARS Green Steel different.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-[#D7E1F4] bg-white p-8 shadow-[0_18px_50px_rgba(13,43,110,0.06)]"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-100 bg-surface-50 text-brand-blue">
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="font-display text-[clamp(2rem,3vw,2.8rem)] font-extrabold leading-none text-brand-red">
                      {card.value}
                    </div>
                    <div className="mt-1 text-[12px] font-semibold text-steel-500">{card.meta}</div>
                  </div>
                </div>
                <h3 className="mb-4 font-display text-[1.6rem] font-bold leading-[1.15] text-ink-900">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-steel-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Certifications ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <SectionKicker variant="brand">Certifications</SectionKicker>
              <h2 className="section-title">Proof that holds up anywhere.</h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700 lg:pt-10">
              Our sustainability claims aren&apos;t self-declared. Every certification is issued by an
              independent authority, verifiable, documented, and available for project submission.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[#D7E1F4] bg-white shadow-[0_18px_60px_rgba(13,43,110,0.07)]">
            <div className="hidden grid-cols-[1.1fr_2.2fr_0.9fr] bg-brand-blue px-8 py-5 md:grid">
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/68">Certification</span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/68">What It Covers</span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/68">Category</span>
            </div>
            {certificationRows.map((row, index) => (
              <div
                key={row.title}
                className={`grid gap-4 px-8 py-7 md:grid-cols-[1.1fr_2.2fr_0.9fr] md:items-center ${
                  index !== certificationRows.length - 1 ? "border-b border-surface-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-brand-blue" />
                  <span className="font-display text-[1.45rem] font-bold leading-[1.15] text-ink-900">
                    {row.title}
                  </span>
                </div>
                <p className="text-[15px] leading-[1.75] text-steel-700">{row.desc}</p>
                <div className="md:justify-self-start">
                  <span className="inline-flex rounded-full bg-surface-50 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    {row.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Bigger picture ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div className="flex flex-col">
            <SectionKicker variant="brand">The Bigger Picture</SectionKicker>
            <h2 className="section-title max-w-[620px]">Why green steel matters for India.</h2>
            <p className="mt-6 max-w-[700px] text-[15px] leading-[1.86] text-steel-700">
              India&apos;s construction sector accounts for a significant share of national carbon
              emissions. As building volumes increase, the choice of steel becomes a climate decision,
              not just a structural one.
            </p>
            <p className="mt-10 max-w-[680px] text-[15px] leading-[1.86] text-steel-700">
              Every tonne of ARS green steel used in a project is a tonne produced with less damage.
              Multiplied across millions of homes and structures, the impact is real.
            </p>
            <a
              href="/about"
              className="focus-ring mt-11 inline-flex items-center gap-2 text-[15px] font-bold text-brand-red transition hover:opacity-80"
            >
              Read our full story <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-[920px] lg:justify-self-end">
            {verificationCards.map((card) => (
              <div
                key={card.title}
                className="flex min-h-[176px] flex-col rounded-[24px] border border-[#D7E1F4] bg-surface-50 p-8 shadow-[0_14px_34px_rgba(13,43,110,0.035)]"
              >
                <div>
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white text-brand-blue shadow-[0_8px_20px_rgba(13,43,110,0.06)]">
                    {card.icon}
                  </div>
                  <div className="font-display text-[clamp(1.95rem,2.4vw,2.6rem)] font-extrabold leading-none text-brand-blue">
                    {card.value}
                  </div>
                  <div className="mt-2 font-display text-[clamp(1.15rem,1.55vw,1.55rem)] font-bold leading-[1.2] text-ink-900">
                    {card.title}
                  </div>
                </div>
                <p className="mt-3 max-w-[280px] text-[13px] leading-[1.72] text-steel-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── CTA banner ── */}
      <MotionSection className="relative overflow-hidden bg-brand-blue py-16 md:py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(22,101,52,0.85) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 xl:flex-row xl:items-center">
            <div className="max-w-[520px]">
              <SectionKicker variant="light">Build greener</SectionKicker>
              <h2 className="mb-4 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                Ready to specify
                <br />
                <span className="text-brand-red">green steel?</span>
              </h2>
              <p className="max-w-[460px] text-[14px] leading-[1.8] text-white/68 md:text-[15px]">
                Talk to our team about incorporating ARS Green Steel into your next project, with
                full certification documentation included.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap xl:justify-end">
              <a
                href="/products/ars-550d"
                className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                View ARS 550D <ArrowRight size={15} />
              </a>
              <a
                href="/green-steel#what-is-green-steel"
                className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                Our sustainability story
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
