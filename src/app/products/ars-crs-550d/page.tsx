import type { Metadata } from "next";
import { BadgeCheck, ClipboardList, MapPin, ShieldCheck, Waves } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics, SectionIntro } from "@/components/page-sections";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "ARS CRS 550D TMT Bars | ARS Green Steel",
  description: "ARS CRS 550D corrosion-resistant TMT bars for coastal, humid, and durability-focused construction.",
};

const specs = [
  ["Grade", "Fe 550D corrosion-resistant TMT steel"],
  ["Primary promise", "Improved corrosion resistance for exposed and durability-focused structures"],
  ["Best fit", "Coastal projects, humid zones, water-exposed structures, long-life concrete work"],
  ["Proof needed", "CRS performance, chemical data, corrosion resistance testing, and final certification references"],
  ["Buyer next step", "Confirm site condition, rod size, quantity, dealer availability, and quote"],
];

export default function ArsCrs550DPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "ARS CRS 550D",
        title: "Built for",
        accent: "exposure.",
        body: "ARS CRS 550D gives the product range a clear durability story for coastal, humid, and corrosion-risk environments.",
        primaryLabel: "Request CRS quote",
        primaryHref: "/request-quote",
        secondaryLabel: "Find dealer",
        secondaryHref: "/dealer-locator",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "grade", value: "CRS", label: "Corrosion-resistant steel path for long-life structures." },
          { kicker: "strength", value: "550D", label: "High-strength ductile grade with durability positioning." },
          { kicker: "best fit", value: "Coast", label: "Useful for humid, exposed, and coastal construction zones." },
          { kicker: "proof", value: "Lab", label: "Final CRS testing data should be attached before publication." },
        ]}
      />

      <MotionSection className="bg-white py-24" id="specifications">
        <div className="ars-container">
          <SectionIntro
            eyebrow="CRS specification"
            title="For sites where durability matters."
            body="The page keeps CRS benefits practical: environment, application, proof, and enquiry."
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
        eyebrow="Use cases"
        title="Choose CRS when exposure is part of the brief."
        cards={[
          { title: "Coastal projects", text: "Suitable when structures face salt, humidity, and long-term durability concerns.", icon: Waves },
          { title: "Infrastructure", text: "Helpful for bridge, road, drainage, and exposed concrete requirements.", icon: ShieldCheck },
          { title: "Dealer guidance", text: "Dealer and sales teams can guide availability, size, and quote details by region.", icon: MapPin },
          { title: "Technical proof", text: "CRS performance claims should be backed by verified lab and certificate data.", icon: ClipboardList },
        ]}
      />

      <ContentBand
        eyebrow="Related actions"
        title="Confirm product fit before purchase."
        tone="warm"
        cards={[
          { title: "Compare ARS 550D", text: "Use core 550D for general residential, commercial, and infrastructure work.", href: "/products/ars-550d", icon: BadgeCheck },
          { title: "Request quote", text: "Share site condition, grade, rod size, and quantity for sales follow-up.", href: "/request-quote", icon: BadgeCheck },
          { title: "View certifications", text: "Review quality systems and green-building readiness before specifying.", href: "/certifications", icon: BadgeCheck },
        ]}
      />
    </PageShell>
  );
}
