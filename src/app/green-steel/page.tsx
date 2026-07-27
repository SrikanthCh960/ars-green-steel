import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cog, Factory, Recycle, ShieldCheck, type LucideIcon, Zap } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "What Is Green Steel? Meaning, Process & Benefits | ARS Green Steel",
  description:
    "Learn what green steel means, how lower-carbon steel production pathways work, and what project teams should consider when reviewing environmental information.",
  path: "/green-steel",
});

const heroProofPoints: Array<[LucideIcon, string, string]> = [
  [Recycle, "Lower Carbon Emissions", "Compared to conventional steel production*"],
  [Factory, "Recycled Raw Materials", "Supports circular manufacturing"],
  [Zap, "Electric Arc Furnace", "Cleaner steelmaking technology"],
];

const productionSteps = [
  {
    icon: Recycle,
    title: "Recycled Steel Collection",
    body: "Steel debris is collected, sorted, and prepared for recycling.",
  },
  {
    icon: Zap,
    title: "Electric Arc Furnace",
    body: "The recycled steel is melted using an Electric Arc Furnace, reducing dependence on conventional steelmaking methods.",
  },
  {
    icon: Cog,
    title: "Steel Refining",
    body: "The molten steel is refined to achieve the required chemical composition and material properties.",
  },
  {
    icon: Factory,
    title: "Rolling",
    body: "The refined steel is rolled into finished products under carefully controlled manufacturing conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Certification",
    body: "Every batch is tested to verify quality, mechanical properties, and compliance with applicable standards.",
  },
];

const greenSteelBenefits: Array<[LucideIcon, string, string]> = [
  [
    Recycle,
    "Lower Carbon Emissions",
    "Cleaner production methods help reduce the carbon footprint associated with steel manufacturing.",
  ],
  [
    Factory,
    "Recycled Material",
    "Using recycled steel supports resource conservation and reduces the need for virgin raw materials.",
  ],
  [
    Zap,
    "Energy-Efficient Manufacturing",
    "Modern production technologies improve efficiency while lowering environmental impact.",
  ],
  [
    ShieldCheck,
    "Supports Sustainable Construction",
    "Green steel contributes to responsible material selection for future-ready construction projects.",
  ],
];

const certificationProof = [
  { title: "BIS", image: "/ars-assets/certifications/previews/tmt-renewal.png" },
  { title: "Green Steel Certified", image: "/ars-assets/certifications/previews/nisst-green-steel-certificate.png" },
  { title: "TN PWD approved", image: "/ars-assets/certifications/previews/pwd-approval.png" },
  { title: "SGBP Leader (4star)", image: "/ars-assets/certifications/previews/sgbc-certificate.png" },
  { title: "GRIHA", image: "/ars-assets/certifications/previews/griha-certificate.png" },
  { title: "EPD Verified", image: "/ars-assets/certifications/previews/epd-certificate.png" },
];

const greenSteelFaqs = [
  [
    "What is Green Steel?",
    "Green steel is steel produced using manufacturing processes that generate significantly lower carbon emissions than conventional steel production. It combines cleaner technologies, recycled raw materials, and energy-efficient practices to reduce the environmental impact of steelmaking.",
  ],
  [
    "How is Green Steel different from conventional steel?",
    "The difference lies in how it is manufactured. Green steel uses cleaner production methods and recycled materials to reduce greenhouse gas emissions while maintaining the strength, durability, and quality required for construction.",
  ],
  [
    "Is Green Steel as strong as conventional steel?",
    "Yes. Green steel is manufactured to meet the same quality and performance standards as conventional steel. When produced to recognised industry standards, it delivers the strength, durability, and structural reliability expected for modern construction.",
  ],
  [
    "Why is Green Steel important for sustainable construction?",
    "Green steel helps reduce the environmental impact of construction by lowering production-related carbon emissions. It also supports responsible material selection and contributes to sustainable building practices without compromising structural performance.",
  ],
  [
    "Where is Green Steel used?",
    "Green steel is used across residential, commercial, industrial, and infrastructure projects. It is increasingly specified for developments that prioritise sustainability, long-term durability, and reduced embodied carbon.",
  ],
];

export default function GreenSteelPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section
        id="what-is-green-steel"
        className="ars-page-hero relative isolate min-h-[560px] overflow-hidden bg-[#060D1E] text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]"
      >
        <Image
          src="/ars-assets/original-green-steel/hero-banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-35 saturate-[0.45]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,13,30,0.97)_0%,rgba(6,13,30,0.92)_43%,rgba(6,13,30,0.64)_100%)]" />
        <div className="steel-grid absolute inset-0 -z-10 opacity-40" />
        <div className="ars-page-hero-content ars-container grid h-full gap-10 py-24 md:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-center">
          <div className="max-w-3xl">
            <SectionKicker variant="light">Sustainability</SectionKicker>
            <h1 className="mt-6 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              What Is <span className="text-brand-red">Green Steel?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Green steel is produced using cleaner manufacturing methods that help reduce carbon emissions while delivering the strength, quality, and reliability expected from modern steel.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#green-steel-explained"
                className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              >
                Learn More <ArrowRight size={16} />
              </Link>
              <Link
                href="/ars-green-steel"
                className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore ARS Green Steel <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm md:p-6">
            {heroProofPoints.map(([Icon, title, body]) => (
              <div key={title} className="flex gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                <Icon aria-hidden="true" size={18} className="mt-1 shrink-0 text-emerald-200" />
                <div>
                  <p className="font-display text-lg font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MotionSection id="green-steel-explained" className="bg-white py-20 lg:py-24">
        <div className="ars-container grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <div>
            <SectionKicker variant="brand">Green Steel Explained</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
              Building the Future with Lower Carbon Steel
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-steel-700 lg:text-lg">
              <p>Steel is one of the most widely used construction materials in the world. Green steel represents a more sustainable way of producing it by reducing greenhouse gas emissions during manufacturing while maintaining the strength and performance required for structural applications.</p>
              <p>It combines recycled raw materials, cleaner production technologies, and responsible manufacturing practices to reduce the environmental impact of steelmaking.</p>
            </div>
            <h3 className="mt-8 font-display text-xl font-bold text-ink-900">Highlights</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Lower production-related carbon emissions",
                "Greater use of recycled steel",
                "Energy-efficient manufacturing processes",
                "Supports sustainable construction goals",
                "Maintains structural strength and durability",
              ].map((item) => (
                <li key={item} className="border-l-2 border-brand-blue/25 pl-4 text-sm font-bold text-ink-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden min-h-72 overflow-hidden border border-brand-blue/10 bg-surface-50 lg:block">
            <Image
              src="/ars-assets/original-green-steel/green-steel-rebar.png"
              alt=""
              fill
              sizes="260px"
              className="object-contain object-bottom p-3 transition duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-50 to-transparent" />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker variant="brand">Process</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
              From Scrap to Structural Steel
            </h2>
            <p className="mt-5 text-base leading-8 text-steel-700">
              Green steel is produced through manufacturing processes designed to reduce emissions while maintaining consistent quality throughout production.
            </p>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {productionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={step.title} className="group border-t-2 border-brand-blue bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(13,43,110,0.12)]">
                  <p className="font-technical text-xs font-bold tracking-[0.18em] text-brand-red">STEP {String(index + 1).padStart(2, "0")}</p>
                  <Icon aria-hidden="true" size={22} className="mt-6 text-brand-blue transition duration-300 group-hover:scale-110 group-hover:text-brand-red" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-steel-700">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <SectionKicker variant="brand">Why It Matters</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
              Lower Impact. Same Structural Performance.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {greenSteelBenefits.map(([Icon, title, body]) => (
              <article key={title} className="group border-l-2 border-brand-blue/25 pl-5 transition duration-300 hover:border-brand-red">
                <Icon aria-hidden="true" size={20} className="text-brand-blue transition duration-300 group-hover:scale-110 group-hover:text-brand-red" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">Certifications</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
            Standards That Support Sustainable Construction
          </h2>
          <p className="mt-5 text-base leading-8 text-steel-700">
            Green steel is increasingly supported by environmental declarations and green building frameworks that help measure and recognise responsible manufacturing practices.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificationProof.map((proof) => (
              <article key={proof.title} className="group overflow-hidden border border-brand-blue/10 bg-white shadow-[0_12px_30px_rgba(6,13,30,0.05)]">
                <div className="relative aspect-[1.55/1] overflow-hidden bg-surface-50">
                  <Image src={proof.image} alt={`${proof.title} certificate`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <h3 className="border-t-2 border-brand-red px-5 py-4 font-display text-lg font-bold text-ink-900">{proof.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">FAQs</h2>
          <div className="mt-10 divide-y divide-ink-900/10 border-y border-ink-900/10">
            {greenSteelFaqs.map(([question, answer]) => (
              <details key={question} className="py-6">
                <summary className="focus-ring cursor-pointer font-display text-lg font-bold text-ink-900">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-steel-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">Next Step</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
            See How ARS Is Advancing Green Steel
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700">
            Explore how ARS Green Steel combines responsible manufacturing, certified sustainability, and dependable structural performance to support the future of construction.
          </p>
          <Link
            href="/ars-green-steel"
            className="focus-ring mt-8 inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
          >
            Explore ARS Green Steel <ArrowRight size={16} />
          </Link>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
