import { createPageMetadata } from "@/lib/site-metadata";
import { BadgeCheck, Building2, MapPin } from "lucide-react";
import { ContentBand, PageHero, ProofMetrics } from "@/components/page-sections";
import { LeadForm } from "@/components/lead-form";
import { MotionSection } from "@/components/motion-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Become a Dealer | ARS Green Steel",
  description: "Dealer and distributor enquiry path for ARS Green Steel.",
  path: "/become-a-dealer",
});

export default function BecomeDealerPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Dealer enquiry"
        title="Build with"
        accent="ARS network."
        body="Start a dealer or distributor enquiry with clear product proof, territory context, and ARS sales support."
        primaryLabel="Start dealer enquiry"
        primaryHref="#dealer-form"
        secondaryLabel="View products"
        secondaryHref="/products"
      />

      <ProofMetrics
        metrics={[
          { kicker: "brand", value: "1992", label: "Long-running steel brand supports dealer confidence." },
          { kicker: "product", value: "550D", label: "Clear product range creates easier retail conversations." },
          { kicker: "proof", value: "SGS", label: "Certification and quality assets support dealer sales." },
          { kicker: "route", value: "Local", label: "Dealer data can power local discovery once confirmed." },
        ]}
      />

      <ContentBand
        eyebrow="Dealer value"
        title="A practical route for distribution interest."
        cards={[
          { title: "Brand proof", text: "Use product, certification, and manufacturing confidence to support dealer conversations.", icon: BadgeCheck },
          { title: "Product clarity", text: "ARS 550D and CRS 550D give dealers clear product stories to sell.", href: "/products", icon: Building2 },
          { title: "Local discovery", text: "Dealer enquiries can connect local demand with the right ARS sales route.", href: "/dealer-locator", icon: MapPin },
        ]}
        tone="white"
      />

      <MotionSection className="bg-[#f8f9fb] py-24" id="dealer-form">
        <div className="ars-container">
          <LeadForm intent="dealer" title="Share dealer interest" body="Capture company, territory, phone, and product interest before routing to the ARS sales team." />
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container">
          <SiteFooter />
        </div>
      </section>
    </main>
  );
}
