import type { Metadata } from "next";
import { Award, BadgeCheck, ClipboardCheck, FileCheck, Leaf, ShieldCheck } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Certifications | ARS Green Steel",
  description: "SGS, ISO, EPD, GRIHA, PWD, NHAI, renewals, awards, and quality testing proof for ARS Green Steel.",
};

const certifications = [
  { title: "SGS certified", text: "Quality proof stays visible as a primary trust signal for buyers and engineers.", icon: ShieldCheck, meta: "Quality", imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS quality and certification" },
  { title: "ISO systems", text: "ISO 9001, ISO 14001, and ISO 45001 references support process and safety credibility.", icon: BadgeCheck, meta: "Systems" },
  { title: "EPD / GRIHA / LEED ready", text: "Green-building proof helps developers and institutions evaluate future-ready materials.", icon: Leaf, meta: "Green" },
  { title: "PWD and NHAI approvals", text: "Approval references support public-work, infrastructure, and institutional buying confidence.", icon: ClipboardCheck, meta: "Projects" },
  { title: "Product renewals", text: "TMT bar and billet renewal references matter for technical and procurement review.", icon: FileCheck, meta: "Renewals" },
  { title: "Awards", text: "Industry recognition helps buyers see ARS as a credible and established steel partner.", icon: Award, meta: "Recognition", imageSrc: "/ars-assets/awards-certificates-img2.png", imageAlt: "ARS awards certificate" },
];

export default function CertificationsPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Verification",
        title: "Proof before",
        accent: "purchase.",
        body: "Certifications turn ARS claims into usable trust for engineers, contractors, institutions, and dealer-led buyers.",
        primaryLabel: "Request certificate",
        primaryHref: "/contact",
        secondaryLabel: "View products",
        secondaryHref: "/products",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "quality", value: "SGS", label: "Primary quality proof for product confidence." },
          { kicker: "systems", value: "ISO", label: "Quality, environment, and safety system references." },
          { kicker: "green", value: "EPD", label: "Environmental product declaration and green-building readiness." },
          { kicker: "approval", value: "PWD", label: "Public project approval references support infrastructure confidence." },
        ]}
      />

      <ContentBand
        id="sgs"
        eyebrow="Certification library"
        title="Keep proof easy to scan."
        body="Each card groups certification and approval proof so buyers can quickly find the quality signals they need."
        cards={certifications}
        tone="white"
      />

      <ContentBand
        id="testing"
        eyebrow="Testing proof"
        title="Make quality process visible."
        cards={[
          { title: "Bend and rebend", text: "A practical quality topic for engineers and site teams evaluating ductility.", icon: ClipboardCheck, imageSrc: "/ars-assets/TMT-Bars.png", imageAlt: "ARS TMT bars testing" },
          { title: "Tensile testing", text: "Supports strength claims and product specification review.", icon: ShieldCheck, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS product testing" },
          { title: "Spectrometer and lab", text: "Chemical consistency and lab process information supports technical review.", icon: FileCheck, imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS lab and quality" },
        ]}
      />
    </PageShell>
  );
}
