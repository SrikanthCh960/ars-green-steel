import type { Metadata } from "next";
import { Calculator, ClipboardList, MapPin, ShieldCheck } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics, SectionIntro } from "@/components/page-sections";
import { MotionSection } from "@/components/motion-section";
import { clientVerificationSummary, steelPriceRows } from "@/data/business-verification";

export const metadata: Metadata = {
  title: "Steel Price Today | ARS Green Steel",
  description: "ARS Green Steel price context for TMT bars with size, bundle, dealer, and quote paths.",
};

export default function SteelPriceTodayPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Steel price today",
        title: "Price clarity",
        accent: "before calls.",
        body: "This page restores the legacy steel-price journey and keeps live rate fields ready for ARS-approved pricing.",
        primaryLabel: "Request current quote",
        primaryHref: "/request-quote",
        secondaryLabel: "Calculate need",
        secondaryHref: "/tmt-calculator",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "rod range", value: "8-32", label: "Price rows prepared for common ARS TMT bar sizes." },
          { kicker: "status", value: "Ready", label: clientVerificationSummary.pricing },
          { kicker: "dealer", value: "Route", label: "Dealer locator remains a natural next step after price review." },
          { kicker: "quote", value: "CTA", label: "Price interest converts into a quote request quickly." },
        ]}
      />

      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Price table"
            title="Prepared for live ARS price updates."
            body="Current rows are structured for ARS-approved data. This avoids publishing non-approved rates while preserving the high-value buyer path."
          />
          <div className="overflow-hidden rounded-[8px] border border-ink-900/10 bg-white">
            <div className="grid grid-cols-[0.7fr_1.3fr_1fr] bg-[#f8f9fb] p-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              <span>Size</span>
              <span>Typical use</span>
              <span>Status</span>
            </div>
            {steelPriceRows.map(([size, use, status]) => (
              <div key={size} className="grid grid-cols-[0.7fr_1.3fr_1fr] border-t border-ink-900/10 p-4 text-sm md:text-base">
                <strong className="text-ink-900">{size}</strong>
                <span className="text-steel-700">{use}</span>
                <span className="font-semibold text-steel-700">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <ContentBand
        eyebrow="Next steps"
        title="Do more than check a number."
        cards={[
          { title: "Calculate steel", text: "Estimate requirement before asking sales for final price.", href: "/tmt-calculator", icon: Calculator },
          { title: "Find dealer", text: "Use location to discover nearby ARS supply support.", href: "/dealer-locator", icon: MapPin },
          { title: "Request quote", text: "Share size, quantity, and site location for current pricing.", href: "/request-quote", icon: ClipboardList },
          { title: "Verify quality", text: "Review product proof before making price the only decision factor.", href: "/certifications", icon: ShieldCheck },
        ]}
      />
    </PageShell>
  );
}
