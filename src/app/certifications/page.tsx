import type { Metadata } from "next";
import { Award, BadgeCheck, ClipboardCheck, FileCheck, Leaf, ShieldCheck } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Certifications | ARS Green Steel",
  description: "SGS, ISO, EPD, GRIHA, PWD, NHAI, renewals, awards, and quality testing proof for ARS Green Steel.",
};

const certifications = [
  { title: "SGS certified", text: "Quality proof should stay visible as a primary trust signal for buyers and engineers.", icon: ShieldCheck, meta: "Quality", imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS quality and certification source asset" },
  { title: "ISO systems", text: "ISO 9001, ISO 14001, and ISO 45001 references support process and safety credibility.", icon: BadgeCheck, meta: "Systems" },
  { title: "EPD / GRIHA / LEED ready", text: "Green-building proof helps developers and institutions evaluate future-ready materials.", icon: Leaf, meta: "Green" },
  { title: "PWD and NHAI approvals", text: "Legacy approval content should be restored once client-approved files are attached.", icon: ClipboardCheck, meta: "Projects" },
  { title: "Product renewals", text: "TMT bar and billet renewal references matter for technical and procurement review.", icon: FileCheck, meta: "Renewals" },
  { title: "Awards", text: "ABP India Infrastructure 2024 and ISPAT Udyog Ratan 2024 can support reputation once verified.", icon: Award, meta: "Recognition", imageSrc: "/ars-assets/awards-certificates-img2.png", imageAlt: "ARS awards certificate source asset" },
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
          { kicker: "approval", value: "PWD", label: "Public project approval references to verify and attach." },
        ]}
      />

      <ContentBand
        id="sgs"
        eyebrow="Certification library"
        title="Keep proof easy to scan."
        body="Each card is a restored content destination. Final downloads can be added once approved certificate files are provided."
        cards={certifications}
        tone="white"
      />

      <ContentBand
        id="testing"
        eyebrow="Testing proof"
        title="Make quality process visible."
        cards={[
          { title: "Bend and rebend", text: "A practical quality topic for engineers and site teams evaluating ductility.", icon: ClipboardCheck, imageSrc: "/ars-assets/TMT-Bars.png", imageAlt: "ARS TMT bars testing source asset" },
          { title: "Tensile testing", text: "Supports strength claims and product specification review.", icon: ShieldCheck, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS product testing source asset" },
          { title: "Spectrometer and lab", text: "Chemical consistency and lab process content should be restored with verified details.", icon: FileCheck, imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS lab and quality source asset" },
        ]}
      />
    </PageShell>
  );
}
