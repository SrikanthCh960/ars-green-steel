import type { Metadata } from "next";
import { Calculator, MapPin, Ruler, ShieldCheck } from "lucide-react";
import { ContentBand, PageHero, ProofMetrics } from "@/components/page-sections";
import { LeadForm } from "@/components/lead-form";
import { MotionSection } from "@/components/motion-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Request Quote | ARS Green Steel",
  description: "Request ARS Green Steel pricing and sales support for TMT bar requirements.",
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Quote request"
        title="Tell us what"
        accent="you need."
        body="The quote path captures product, rod size, quantity, site location, and project context so the ARS team can respond with fewer follow-up calls once the final enquiry destination is confirmed."
        primaryLabel="Call sales"
        primaryHref="tel:+919710411111"
        secondaryLabel="Calculate first"
        secondaryHref="/tmt-calculator"
      />

      <MotionSection className="bg-white py-24">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">Before you submit</p>
            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-tight text-ink-900">Useful quote details</h2>
            <div className="mt-8 grid gap-4">
              {["Product grade: ARS 550D or ARS CRS 550D", "Rod size: 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, or 32mm", "Approximate quantity or built-up area", "Delivery location and project stage"].map((item) => (
                <div key={item} className="flex gap-3 text-base leading-7 text-steel-700">
                  <ShieldCheck size={19} className="mt-1 shrink-0 text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm title="Request ARS steel quote" />
        </div>
      </MotionSection>

      <ProofMetrics
        metrics={[
          { kicker: "grade", value: "550D", label: "Choose core TMT or corrosion-resistant CRS variant." },
          { kicker: "sizes", value: "8-32", label: "Quote by rod size, bundle, and requirement context." },
          { kicker: "dealer", value: "Local", label: "Dealer path can support availability and supply questions." },
          { kicker: "proof", value: "SGS", label: "Certification and quality context remain close to enquiry." },
        ]}
      />

      <ContentBand
        eyebrow="Helpful before quote"
        title="Prepare a more accurate enquiry."
        cards={[
          { title: "Calculate steel", text: "Estimate quantity before submitting your quote request.", href: "/tmt-calculator", icon: Calculator },
          { title: "Check rod sizes", text: "Review common rod-size use cases and weight context.", href: "/products#sizes", icon: Ruler },
          { title: "Find dealer", text: "For urgent local supply, move to dealer discovery.", href: "/dealer-locator", icon: MapPin },
        ]}
      />

      <section className="bg-white py-14">
        <div className="ars-container">
          <SiteFooter />
        </div>
      </section>
    </main>
  );
}
