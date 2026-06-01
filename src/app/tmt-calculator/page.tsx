import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Calculator, ClipboardList, Ruler } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics, SectionIntro } from "@/components/page-sections";
import { MotionSection } from "@/components/motion-section";
import { calculatorInputFields, clientVerificationSummary } from "@/data/business-verification";

export const metadata: Metadata = {
  title: "TMT Calculator | ARS Green Steel",
  description: "Estimate ARS TMT steel requirement by project type, area, floor count, and rod size.",
};

export default function TmtCalculatorPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "TMT calculator",
        title: "Estimate before",
        accent: "you enquire.",
        body: "The calculator page restores the requirement-planning journey and is ready for ARS-approved formulas from the technical and sales teams.",
        primaryLabel: "Request estimate support",
        primaryHref: "/request-quote",
        secondaryLabel: "View sizes",
        secondaryHref: "/products#sizes",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "inputs", value: "4", label: "Project type, category, floors, and area form the calculator base." },
          { kicker: "sizes", value: "8-32", label: "Rod-size context can guide estimate and quote follow-up." },
          { kicker: "status", value: "Ready", label: clientVerificationSummary.calculator },
          { kicker: "handoff", value: "Quote", label: "Calculator results should move directly into sales enquiry." },
        ]}
      />

      <MotionSection className="bg-white py-24">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <SectionIntro
            eyebrow="Calculator model"
            title="A clean front-end ready for real formulas."
            body="We are preserving the business-critical calculator flow without publishing unapproved engineering assumptions."
          />
          <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {calculatorInputFields.map((field) => (
                <label key={field} className="grid gap-2 text-sm font-bold text-ink-900">
                  {field}
                  <input name={field.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 font-normal outline-none transition focus:border-brand-blue" placeholder="Awaiting ARS formula" />
                </label>
              ))}
            </div>
            <div className="mt-6 rounded-[8px] border border-brand-blue/20 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">Estimate output</p>
              <p className="mt-3 text-base leading-7 text-steel-700">
                Steel requirement output will be activated once ARS confirms calculation logic, units, assumptions, and disclaimer.
              </p>
            </div>
            <Link className="focus-ring mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark" href="/request-quote">
              Send requirement <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </MotionSection>

      <ContentBand
        eyebrow="Calculator support"
        title="Make estimate outputs useful."
        cards={[
          { title: "Project type", text: "Residential, commercial, and infrastructure contexts need different assumptions.", icon: Building2 },
          { title: "Rod size", text: "8mm to 32mm bars connect calculator output to real purchase planning.", icon: Ruler },
          { title: "Sales handoff", text: "The estimate should transfer directly into a quote conversation.", href: "/request-quote", icon: ClipboardList },
          { title: "Product fit", text: "ARS 550D and CRS 550D should be selected by structure and exposure.", href: "/products", icon: Calculator },
        ]}
      />
    </PageShell>
  );
}
