import type { Metadata } from "next";
import { BadgeCheck, Calculator, ClipboardList, Factory, ShieldCheck } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics, SectionIntro } from "@/components/page-sections";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "ARS 550D TMT Bars | ARS Green Steel",
  description: "ARS 550D high-strength ductile TMT bars for safer residential, commercial, and infrastructure construction.",
};

const specs = [
  ["Grade", "Fe 550D TMT steel"],
  ["Primary promise", "High strength with improved ductility for safer structures"],
  ["Use cases", "Homes, apartments, commercial structures, infrastructure members"],
  ["Proof needed", "Physical properties, chemical properties, bend/rebend, tensile, and lab test data"],
  ["Buyer next step", "Calculate requirement, check dealer availability, or request quote"],
];

export default function Ars550DPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "ARS 550D",
        title: "High strength,",
        accent: "ductile steel.",
        body: "ARS 550D should give engineers, contractors, and home builders enough product confidence to move from grade review to quote.",
        primaryLabel: "Request 550D quote",
        primaryHref: "/request-quote",
        secondaryLabel: "Calculate steel",
        secondaryHref: "/tmt-calculator",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "grade", value: "550D", label: "High-strength ductile TMT steel for construction confidence." },
          { kicker: "sizes", value: "8-32", label: "Common rod sizes supported through calculator and quote journeys." },
          { kicker: "quality", value: "SGS", label: "Certification and testing proof should support product decisions." },
          { kicker: "support", value: "Quote", label: "Product interest converts into sales and dealer conversations." },
        ]}
      />

      <MotionSection className="bg-white py-24" id="specifications">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Technical clarity"
            title="Specification first, enquiry second."
            body="This page preserves the legacy product-spec intent while keeping room for final verified test data."
          />
          <div className="overflow-hidden rounded-[8px] border border-ink-900/10 bg-white">
            {specs.map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-ink-900/10 p-5 last:border-b-0 md:grid-cols-[260px_1fr]">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">{label}</p>
                <p className="text-base leading-7 text-steel-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <ContentBand
        eyebrow="Why buyers choose it"
        title="Made for safer everyday structures."
        tone="surface"
        cards={[
          { title: "Ductility", text: "Supports safer bending, detailing, and structural performance when specified correctly.", icon: ShieldCheck },
          { title: "Project fit", text: "A clear choice for residential, commercial, and common infrastructure construction.", icon: Factory },
          { title: "Buying flow", text: "Connects naturally to steel price, calculator, dealer locator, and quote pages.", icon: Calculator },
          { title: "Proof path", text: "Physical properties, chemical properties, FAQs, and test data should be verified before publishing.", icon: ClipboardList },
        ]}
      />

      <ContentBand
        eyebrow="Related actions"
        title="Move from product interest to supply."
        tone="warm"
        columns={3}
        cards={[
          { title: "Check price", text: "Review current price context before requesting a final quote.", href: "/steel-price-today", icon: BadgeCheck },
          { title: "Find dealer", text: "Route to the closest ARS dealer once dealer data is confirmed.", href: "/dealer-locator", icon: BadgeCheck },
          { title: "Compare CRS", text: "Use ARS CRS 550D for exposed, coastal, and durability-heavy conditions.", href: "/products/ars-crs-550d", icon: BadgeCheck },
        ]}
      />
    </PageShell>
  );
}
