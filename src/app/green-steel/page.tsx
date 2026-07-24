import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

const productionSteps = [
  {
    title: "Recycled Steel Collection",
    body: "Steel debris is collected, sorted, and prepared for recycling.",
  },
  {
    title: "Electric Arc Furnace",
    body: "The recycled steel is melted using an Electric Arc Furnace, reducing dependence on conventional steelmaking methods.",
  },
  {
    title: "Steel Refining",
    body: "The molten steel is refined to achieve the required chemical composition and material properties.",
  },
  {
    title: "Rolling",
    body: "The refined steel is rolled into finished products under carefully controlled manufacturing conditions.",
  },
  {
    title: "Testing & Certification",
    body: "Every batch is tested to verify quality, mechanical properties, and compliance with applicable standards.",
  },
];

const greenSteelBenefits = [
  ["Lower Carbon Emissions", "Cleaner production methods help reduce the carbon footprint associated with steel manufacturing."],
  ["Recycled Material", "Using recycled steel supports resource conservation and reduces the need for virgin raw materials."],
  ["Energy-Efficient Manufacturing", "Modern production technologies improve efficiency while lowering environmental impact."],
  ["Supports Sustainable Construction", "Green steel contributes to responsible material selection for future-ready construction projects."],
];

const greenSteelFaqs = [
  ["What is Green Steel?", "Green steel is steel produced using manufacturing processes that generate significantly lower carbon emissions than conventional steel production. It combines cleaner technologies, recycled raw materials, and energy-efficient practices to reduce the environmental impact of steelmaking."],
  ["How is Green Steel different from conventional steel?", "The difference lies in how it is manufactured. Green steel uses cleaner production methods and recycled materials to reduce greenhouse gas emissions while maintaining the strength, durability, and quality required for construction."],
  ["Is Green Steel as strong as conventional steel?", "Yes. Green steel is manufactured to meet the same quality and performance standards as conventional steel. When produced to recognised industry standards, it delivers the strength, durability, and structural reliability expected for modern construction."],
  ["Why is Green Steel important for sustainable construction?", "Green steel helps reduce the environmental impact of construction by lowering production-related carbon emissions. It also supports responsible material selection and contributes to sustainable building practices without compromising structural performance."],
  ["Where is Green Steel used?", "Green steel is used across residential, commercial, industrial, and infrastructure projects. It is increasingly specified for developments that prioritise sustainability, long-term durability, and reduced embodied carbon."],
];

const embodiedCarbonHighlights = [
  ["40–60%", "of a building's lifetime emissions can originate from construction materials."],
  ["Front-loaded Impact", "Embodied carbon is released before a building begins operation."],
  ["Material Choice Matters", "Selecting lower-carbon materials has one of the greatest long-term sustainability impacts."],
  ["Growing Regulatory Focus", "Green building certifications and ESG reporting increasingly prioritise embodied carbon."],
];

export default function GreenSteelPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section id="what-is-green-steel" className="bg-[#060D1E] text-white">
        <div className="ars-container grid gap-10 py-24 md:py-32 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <SectionKicker variant="light">Sustainability</SectionKicker>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,5.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              What is <span className="text-brand-red">Green Steel?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Green steel is produced using cleaner manufacturing methods that help reduce carbon emissions while delivering the strength, quality, and reliability expected from modern steel.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/ars-green-steel" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark">
                Explore ARS Green Steel <ArrowRight size={16} />
              </Link>
              <Link href="#green-steel-explained" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="grid max-w-sm gap-4 border-l border-white/15 pl-6 text-sm text-white/70">
            <strong>Lower Carbon Emissions</strong>
            <strong>Recycled Raw Materials</strong>
            <strong>Electric Arc Furnace</strong>
          </div>
        </div>
      </section>

      <MotionSection id="green-steel-explained" className="bg-white py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">Green Steel explained</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Building the Future with Lower Carbon Steel</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-steel-700 lg:text-lg">
            <p>Steel is one of the most widely used construction materials in the world. Green steel represents a more sustainable way of producing it by reducing greenhouse gas emissions during manufacturing while maintaining the strength and performance required for structural applications.</p>
            <p>It combines recycled raw materials, cleaner production technologies, and responsible manufacturing practices to reduce the environmental impact of steelmaking.</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Lower production-related carbon emissions", "Greater use of recycled steel", "Energy-efficient manufacturing processes", "Supports sustainable construction goals", "Maintains structural strength and durability"].map((item) => (
              <li key={item} className="border-l-2 border-brand-blue/25 pl-4 text-sm font-bold text-ink-900">{item}</li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker variant="brand">Process</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">From Scrap to Structural Steel</h2>
            <p className="mt-5 text-base leading-8 text-steel-700">Green steel is produced through manufacturing processes designed to reduce emissions while maintaining consistent quality throughout production.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {productionSteps.map((step, index) => (
              <article key={step.title} className="border-t-2 border-brand-blue bg-white p-6">
                <p className="font-technical text-xs font-bold tracking-[0.18em] text-brand-red">STEP 0{index + 1}</p>
                <h3 className="mt-6 font-display text-xl font-bold text-ink-900">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-700">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <SectionKicker variant="brand">Why it matters</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Lower Impact. Same Structural Performance.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {greenSteelBenefits.map(([title, body]) => (
              <article key={title} className="border-l-2 border-brand-blue/25 pl-5">
                <h3 className="font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="embodied-carbon" className="bg-[#0D2B6E] py-20 text-white lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionKicker variant="light">Building a lower-carbon future</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08]">Embodied Carbon, The Hidden Impact</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              The environmental impact of a building begins long before it is occupied—shaped by every material chosen from the ground up.
            </p>
          </div>
          <div className="grid gap-7">
            <article className="border-l-2 border-white/35 pl-6">
              <h3 className="font-display text-2xl font-bold">What Is Embodied Carbon?</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">Embodied carbon is the total greenhouse gas emissions released while producing a construction material — starting from raw material extraction, through processing, manufacturing, and transport to the site.</p>
              <p className="mt-3 text-sm leading-7 text-white/72">It is different from operational carbon, which comes from running a building day to day. Once a beam is cast or a bar is laid, that embodied carbon is locked into the structure.</p>
            </article>
            <article className="border-l-2 border-white/35 pl-6">
              <h3 className="font-display text-2xl font-bold">Why Steel Plays a Critical Role</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">Steel is one of the most widely used structural materials in modern construction. Improving its carbon intensity creates a significant opportunity to reduce the environmental impact of buildings, infrastructure, and industrial projects—without compromising structural performance.</p>
            </article>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/ars-green-steel" className="focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] bg-white px-5 text-sm font-bold text-brand-blue transition hover:bg-surface-50">Explore ARS Green Steel <ArrowRight size={15} /></Link>
              <Link href="/certifications#sgbc-recognition" className="focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] border border-white/30 px-5 text-sm font-bold text-white transition hover:bg-white/10">View certifications <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container">
          <SectionKicker variant="brand">Why it matters</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Why Embodied Carbon Is Reshaping Construction</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-steel-700">As buildings become more energy-efficient, operational emissions continue to decline. Embodied carbon now represents a growing share of a building&apos;s total environmental impact, making construction materials more important than ever.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {embodiedCarbonHighlights.map(([title, body]) => (
              <article key={title} className="bg-surface-50 p-6">
                <h3 className="font-display text-xl font-bold text-brand-blue">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">Certifications</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Standards That Support Sustainable Construction</h2>
          <p className="mt-5 text-base leading-8 text-steel-700">Green steel is increasingly supported by environmental declarations and green building frameworks that help measure and recognise responsible manufacturing practices.</p>
          <Link href="/certifications" className="focus-ring mt-8 inline-flex h-12 items-center gap-2 rounded-[6px] border border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">View Certificates <ArrowRight size={16} /></Link>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">FAQs</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Green Steel questions, answered.</h2>
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
          <SectionKicker variant="brand">Next step</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">See How ARS Is Advancing Green Steel</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700">Explore how ARS Green Steel combines responsible manufacturing, certified sustainability, and dependable structural performance to support the future of construction.</p>
          <Link href="/ars-green-steel" className="focus-ring mt-8 inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Explore ARS Green Steel <ArrowRight size={16} /></Link>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
