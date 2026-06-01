import type { Metadata } from "next";
import { BadgeCheck, Building2, ClipboardList, Factory, Landmark, Network } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Projects | ARS Green Steel",
  description: "Project confidence, client proof, bridge references, capacity, and enquiry paths for ARS Green Steel.",
};

const projectCards = [
  { title: "Residential supply", text: "Support home and apartment projects with product, rod size, and dealer confidence.", icon: Building2, imageSrc: "/ars-assets/home-owner-banner-1.png", imageAlt: "ARS residential project source asset" },
  { title: "Commercial construction", text: "Help engineers and contractors evaluate ARS 550D and CRS product fit.", icon: Factory, imageSrc: "/ars-assets/ARSHOME2.jpg", imageAlt: "ARS commercial construction source asset" },
  { title: "Bridge Phase 2", text: "Retain the legacy bridge project reference as a proof placeholder until client assets are verified.", icon: Landmark, imageSrc: "/ars-assets/ARSHOME4.jpg", imageAlt: "ARS bridge project source asset" },
  { title: "Infrastructure requirements", text: "Create a clearer enquiry path for roads, bridges, flyovers, and public works.", icon: ClipboardList, imageSrc: "/ars-assets/ARSHOME1.jpg", imageAlt: "ARS infrastructure requirement source asset" },
];

export default function ProjectsPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Project confidence",
        title: "Proof for",
        accent: "serious builds.",
        body: "The Projects page should make capability, supply confidence, and client proof easier to understand before a project enquiry.",
        primaryLabel: "Discuss project",
        primaryHref: "/request-quote",
        secondaryLabel: "View certifications",
        secondaryHref: "/certifications",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "capacity", value: "2.5L MT", label: "Manufacturing scale supports project and dealer confidence." },
          { kicker: "legacy", value: "1992", label: "Long-running brand trust matters for procurement decisions." },
          { kicker: "proof", value: "SGS", label: "Certification and testing content support project evaluation." },
          { kicker: "network", value: "Dealers", label: "Regional supply confidence should be visible across project pages." },
        ]}
      />

      <ContentBand
        id="bridge-phase-2"
        eyebrow="Project types"
        title="Show capability without overclaiming."
        body="Current project references are structured as verified placeholders so client-approved case studies can be dropped in later."
        cards={projectCards}
        tone="white"
      />

      <ContentBand
        id="clients"
        eyebrow="Trust signals"
        title="What project buyers need before they call."
        cards={[
          { title: "Capacity proof", text: "Clear manufacturing scale, process, and availability story.", href: "/manufacturing", icon: Factory, imageSrc: "/ars-assets/ARSHOME2.jpg", imageAlt: "ARS manufacturing capacity source asset" },
          { title: "Certification proof", text: "SGS, ISO, EPD, GRIHA, NHAI, PWD, and renewal references when verified.", href: "/certifications", icon: BadgeCheck, imageSrc: "/ars-assets/awards-certificates-img3.png", imageAlt: "ARS certification source asset" },
          { title: "Dealer network", text: "A stronger local supply story for contractors and procurement teams.", href: "/dealer-locator", icon: Network, imageSrc: "/ars-assets/Contact_banner.png", imageAlt: "ARS dealer network source asset" },
        ]}
      />
    </PageShell>
  );
}
