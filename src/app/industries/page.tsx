import type { Metadata } from "next";
import { Building2, Factory, HardHat, Landmark, Map, Users } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Industries | ARS Green Steel",
  description: "ARS Green Steel application paths for home owners, engineers, contractors, dealers, roads, bridges, and institutions.",
};

const audiences = [
  { title: "Home owners", text: "Need price clarity, trusted grade guidance, and easy dealer access before buying.", href: "/steel-price-today", icon: Users, imageSrc: "/ars-assets/home-owner-banner-1.png", imageAlt: "ARS homeowner" },
  { title: "Engineers", text: "Need specifications, certifications, technical proof, and product comparison.", href: "/certifications", icon: HardHat, imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS engineering quality" },
  { title: "Contractors", text: "Need size availability, delivery confidence, calculator support, and quote follow-up.", href: "/request-quote", icon: Factory, imageSrc: "/ars-assets/ARSHOME1.jpg", imageAlt: "ARS contractor and manufacturing" },
  { title: "Dealers", text: "Need brand proof, product confidence, and clear enquiry routing.", href: "/become-a-dealer", icon: Map, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS dealer product range" },
];

const applications = [
  { title: "Residential construction", text: "ARS 550D for homes, apartments, slabs, beams, columns, and common reinforcement needs.", href: "/products/ars-550d", icon: Building2, imageSrc: "/ars-assets/TMT-Bars.png", imageAlt: "ARS residential TMT product" },
  { title: "Road projects", text: "Infrastructure-ready content path for contractors and project teams handling road reinforcement.", href: "/projects", icon: Map, imageSrc: "/ars-assets/ARSHOME1.jpg", imageAlt: "ARS road project" },
  { title: "Bridges and flyovers", text: "Heavy-load project confidence with capacity, certification, and project enquiry support.", href: "/projects#bridge-phase-2", icon: Landmark, imageSrc: "/ars-assets/ARSHOME4.jpg", imageAlt: "ARS bridge and infrastructure" },
  { title: "Institutional projects", text: "Proof-led supply story for schools, hospitals, public buildings, and large campuses.", href: "/projects", icon: Building2, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS institutional project" },
];

export default function IndustriesPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Industries and applications",
        title: "Steel paths for",
        accent: "every buyer.",
        body: "ARS should not make every visitor decode the same page. The industry experience routes each audience to the proof, product, and action they need.",
        primaryLabel: "Choose product",
        primaryHref: "/products",
        secondaryLabel: "Request quote",
        secondaryHref: "/request-quote",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "audiences", value: "4", label: "Home owners, engineers, contractors, and dealers get clearer journeys." },
          { kicker: "core grade", value: "550D", label: "Product proof connects each application to grade confidence." },
          { kicker: "support", value: "Dealer", label: "Local discovery remains central to conversion." },
          { kicker: "project path", value: "Quote", label: "Large requirements move into a project enquiry route." },
        ]}
      />

      <ContentBand
        id="residential"
        eyebrow="Audience paths"
        title="One website, clear journeys."
        body="This keeps the strong homepage audience idea available as a deeper page for search, navigation, and sales routing."
        cards={audiences}
        tone="white"
      />

      <ContentBand
        id="roads"
        eyebrow="Applications"
        title="Match steel to construction context."
        cards={applications}
      />
    </PageShell>
  );
}
