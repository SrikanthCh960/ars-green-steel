import type { Metadata } from "next";
import { Building2, ClipboardList, MapPin, Network } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";
import { clientVerificationSummary } from "@/data/business-verification";

export const metadata: Metadata = {
  title: "Dealer Locator | ARS Green Steel",
  description: "Find nearby ARS Green Steel dealer support and route purchase enquiries by location.",
};

export default function DealerLocatorPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Dealer locator",
        title: "Find steel",
        accent: "near you.",
        body: "Find the right path to local ARS dealer support for product availability, pricing, and project enquiries.",
        primaryLabel: "Request dealer help",
        primaryHref: "/contact",
        secondaryLabel: "Become a dealer",
        secondaryHref: "/become-a-dealer",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "buyer path", value: "Local", label: "Dealer discovery supports faster purchase decisions." },
          { kicker: "support", value: "ARS", label: clientVerificationSummary.dealer },
          { kicker: "support", value: "Sales", label: "Contact route remains available until locator data is live." },
          { kicker: "network", value: "ARS", label: "Dealer confidence is part of the brand trust story." },
        ]}
      />

      <ContentBand
        eyebrow="Locator experience"
        title="Designed for local purchase support."
        body="The page gives buyers a clear route from city or area context to ARS sales and dealer assistance."
        cards={[
          { title: "Search by city", text: "Let buyers find local ARS support quickly.", icon: MapPin },
          { title: "Dealer contact", text: "Route buyers to local dealer and sales support.", icon: Network },
          { title: "Product availability", text: "Connect dealers to 550D, CRS, and rod-size availability.", icon: Building2 },
          { title: "Quote fallback", text: "If no dealer is available, route to ARS sales.", href: "/request-quote", icon: ClipboardList },
        ]}
      />
    </PageShell>
  );
}
