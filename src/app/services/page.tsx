import type { Metadata } from "next";
import { Calculator, ClipboardList, MapPin, Phone, Search, ShieldCheck } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Services | ARS Green Steel",
  description: "Steel price, TMT calculator, dealer locator, request quote, and sales support for ARS Green Steel buyers.",
};

const serviceCards = [
  {
    title: "Steel price today",
    text: "Give buyers regional price context for TMT steel before they call, with product, size, bundle, and booking guidance.",
    href: "/steel-price-today",
    icon: Search,
    imageSrc: "/ars-assets/products-all.png",
    imageAlt: "ARS product range source asset for steel price",
    points: ["Price clarity", "Regional context", "Quote handoff"],
  },
  {
    title: "TMT calculator",
    text: "Help home owners, engineers, and contractors estimate steel needs by project type, area, floors, and bar size.",
    href: "/tmt-calculator",
    icon: Calculator,
    imageSrc: "/ars-assets/TMT-Bars.png",
    imageAlt: "ARS TMT bars source asset for calculator",
    points: ["Requirement planning", "Rod-size guidance", "Lead-ready output"],
  },
  {
    title: "Dealer locator",
    text: "Route high-intent visitors to nearby ARS dealers and make supply discovery easier for local buyers.",
    href: "/dealer-locator",
    icon: MapPin,
    imageSrc: "/ars-assets/Contact_banner.png",
    imageAlt: "ARS dealer locator source asset",
    points: ["Location-led path", "Dealer confidence", "Faster purchase"],
  },
  {
    title: "Request quote",
    text: "Capture project requirements, grade preferences, delivery location, and buyer contact details in one flow.",
    href: "/request-quote",
    icon: ClipboardList,
    imageSrc: "/ars-assets/ARSHOME1.jpg",
    imageAlt: "ARS project enquiry source asset",
    points: ["Sales handoff", "Project details", "Follow-up ready"],
  },
  {
    title: "Quality support",
    text: "Surface testing, certification, and specification support for engineers and procurement teams.",
    href: "/certifications",
    icon: ShieldCheck,
    imageSrc: "/ars-assets/our-quality-1.png",
    imageAlt: "ARS quality support source asset",
    points: ["SGS / ISO proof", "Testing context", "Technical review"],
  },
  {
    title: "Sales contact",
    text: "Offer a direct contact path for urgent project, dealer, and product enquiries.",
    href: "/contact",
    icon: Phone,
    imageSrc: "/ars-assets/Contact_banner.png",
    imageAlt: "ARS sales contact source asset",
    points: ["Phone support", "Office details", "Project enquiry"],
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Buying assistance",
        title: "From enquiry",
        accent: "to steel.",
        body: "ARS service pages should reduce friction for serious buyers: check price, calculate requirement, locate a dealer, and request a quote with proof nearby.",
        primaryLabel: "Start quote",
        primaryHref: "/request-quote",
        secondaryLabel: "Find dealer",
        secondaryHref: "/dealer-locator",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "primary paths", value: "4", label: "Price, calculator, dealer locator, and quote create the buying assistant journey." },
          { kicker: "support line", value: "9710", label: "Customer helpline content is visible for urgent buyer follow-up." },
          { kicker: "product range", value: "8-32", label: "Rod-size guidance connects service tools to real purchasing decisions." },
          { kicker: "proof first", value: "SGS", label: "Quality and certification cues stay close to service decisions." },
        ]}
      />

      <ContentBand
        eyebrow="Service routes"
        title="Choose the fastest next step."
        body="Each service page is designed to move visitors from uncertainty to action without adding visual clutter."
        cards={serviceCards}
      />
    </PageShell>
  );
}
