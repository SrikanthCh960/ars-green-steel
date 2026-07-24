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

const productionPathways = [
  {
    title: "Hydrogen-based steelmaking",
    body:
      "Green hydrogen can be used instead of coal to remove oxygen from iron ore. Water vapour is the principal by-product of that reduction step.",
  },
  {
    title: "Electric arc furnaces",
    body:
      "Electric arc furnaces can melt recycled steel using electricity. The emissions profile depends on the electricity source and the wider production route.",
  },
  {
    title: "Carbon capture and storage",
    body:
      "Carbon capture and storage is a method intended to capture carbon dioxide before release and store it. It is one of several approaches discussed in lower-carbon steelmaking.",
  },
];

const comparisonTopics = ["Production pathway", "Energy inputs", "Material inputs", "Environmental documentation"];

export default function GreenSteelPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section id="what-is-green-steel" className="bg-[#060D1E] text-white">
        <div className="ars-container grid gap-10 py-24 md:py-32 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <SectionKicker variant="light">Sustainability education</SectionKicker>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,5.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
              What is <span className="text-brand-red">Green Steel?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Green steel refers to steel produced using low-carbon or carbon-free production processes. Compared with methods that rely heavily on coal and coke, it uses cleaner technologies intended to minimise carbon emissions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/ars-green-steel" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark">
                Explore ARS Green Steel <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="focus-ring inline-flex h-12 items-center gap-2 rounded-[6px] border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10">
                Contact ARS <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <p className="max-w-sm border-l border-white/15 pl-6 text-sm leading-7 text-white/60">
            This page explains production pathways and evaluation questions. It does not make product-specific environmental claims.
          </p>
        </div>
      </section>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">The concept</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">A different production pathway</h2>
          <p className="mt-5 text-base leading-8 text-steel-700 lg:text-lg">
            The term describes how steel is made. It does not by itself establish a product specification, certification, or environmental result for a particular manufacturer or project.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker variant="brand">Production pathways</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Production pathways used in green steel</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {productionPathways.map((pathway) => (
              <article key={pathway.title} className="border-t-2 border-brand-blue bg-white p-7">
                <h3 className="font-display text-2xl font-bold text-ink-900">{pathway.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel-700">{pathway.body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div>
            <SectionKicker variant="brand">Comparison context</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">How it differs from conventional steelmaking</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-steel-700 lg:text-lg">
              The central difference is the production pathway and its potential emissions profile. Coal- and coke-intensive routes, renewable-powered electricity, recycled input, hydrogen, and carbon-capture approaches should not be treated as interchangeable claims.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {comparisonTopics.map((topic) => (
                <li key={topic} className="border-l-2 border-brand-blue/25 pl-4 text-sm font-bold text-ink-900">{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="embodied-carbon" className="bg-[#0D2B6E] py-20 text-white lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <SectionKicker variant="light">Embodied carbon</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08]">Embodied carbon in steel and construction</h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Embodied carbon is the emissions associated with producing and bringing construction materials to a project. For steel, the production route, energy inputs, recycled content, transport, and product-specific documentation can all affect the assessment.
            </p>
          </div>
          <div className="grid gap-7">
            <article className="border-l-2 border-white/35 pl-6">
              <h3 className="font-display text-2xl font-bold">Keep general education separate from product proof</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">General information about lower-carbon steel does not establish the embodied-carbon result of an individual product. Project teams should request current, product-specific environmental documentation before using a figure in a project assessment.</p>
            </article>
            <article className="border-l-2 border-white/35 pl-6">
              <h3 className="font-display text-2xl font-bold">Questions for a project team</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">Confirm the product, declared unit, assessment boundary, date, standard, and supporting document before comparing materials or making a project claim.</p>
            </article>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/ars-green-steel" className="focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] bg-white px-5 text-sm font-bold text-brand-blue transition hover:bg-surface-50">Explore ARS Green Steel <ArrowRight size={15} /></Link>
              <Link href="/certifications#sgbc-recognition" className="focus-ring inline-flex h-11 items-center gap-2 rounded-[6px] border border-white/30 px-5 text-sm font-bold text-white transition hover:bg-white/10">View certifications <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-2">
          <section>
            <SectionKicker variant="brand">Why it matters</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Why lower-carbon steel is being considered</h2>
            <p className="mt-5 text-base leading-8 text-steel-700">Steel is used across construction, transport, energy, and manufacturing. As project teams consider lower-carbon materials, the production route and product-specific environmental documentation become important parts of the decision.</p>
          </section>
          <section>
            <SectionKicker variant="brand">Applications and limitations</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Where the conversation applies</h2>
            <p className="mt-5 text-base leading-8 text-steel-700">Green-steel discussions commonly arise in construction and infrastructure, automotive manufacturing, renewable-energy equipment, and industrial manufacturing. Availability of renewable energy, hydrogen, suitable scrap, capital investment, and production scale remain practical considerations.</p>
          </section>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container max-w-4xl">
          <SectionKicker variant="brand">ARS information</SectionKicker>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">Looking for ARS-specific information?</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700">Visit ARS Green Steel for product-specific information and any currently published proof documents.</p>
          <Link href="/ars-green-steel" className="focus-ring mt-8 inline-flex h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Explore ARS Green Steel <ArrowRight size={16} /></Link>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
