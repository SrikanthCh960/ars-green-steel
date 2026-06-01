import type { Metadata } from "next";
import { Factory, FlaskConical, Gauge, ShieldCheck, Workflow, Wrench } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Manufacturing | ARS Green Steel",
  description: "ARS Green Steel manufacturing strength, steel process, quality testing, and plant proof.",
};

export default function ManufacturingPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Manufacturing strength",
        title: "Built with",
        accent: "process.",
        body: "Manufacturing proof helps serious buyers trust ARS before the sales pitch: process, capacity, testing, and product traceability.",
        primaryLabel: "Request plant proof",
        primaryHref: "/contact",
        secondaryLabel: "View certifications",
        secondaryHref: "/certifications",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "capacity", value: "2.5L MT", label: "Manufacturing scale supports supply confidence." },
          { kicker: "plant", value: "TN", label: "GummidiPoondi plant context should be verified before launch." },
          { kicker: "grade", value: "550D", label: "Process proof connects directly to product performance." },
          { kicker: "testing", value: "Lab", label: "Testing process should be expanded with client-approved details." },
        ]}
      />

      <ContentBand
        eyebrow="Process flow"
        title="Show how steel becomes trust."
        body="The original process content is recovered as a simple, premium manufacturing story."
        cards={[
          { title: "Melting and refining", text: "Induction furnace and melting-discharge content can explain the start of production.", icon: Factory, imageSrc: "/ars-assets/ARSHOME1.jpg", imageAlt: "ARS melting and refining source asset" },
          { title: "Ladle and casting", text: "Ladle teeming and continuous casting content supports process credibility.", icon: Workflow, imageSrc: "/ars-assets/ARSHOME2.jpg", imageAlt: "ARS ladle and casting source asset" },
          { title: "Rolling mills", text: "Rolling process content connects billets to TMT bars and final sizes.", icon: Gauge, imageSrc: "/ars-assets/TMT-Bars.png", imageAlt: "ARS rolling mill and TMT bars source asset" },
          { title: "Testing and QA", text: "Bend, rebend, tensile, spectrometer, and lab proof should be restored with verified details.", icon: FlaskConical, imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS testing and QA source asset" },
        ]}
        tone="white"
      />

      <ContentBand
        eyebrow="Buyer confidence"
        title="Manufacturing proof should support sales."
        cards={[
          { title: "Product traceability", text: "Help buyers understand grade, size, and quality confidence.", href: "/products", icon: ShieldCheck, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS product traceability source asset" },
          { title: "Project readiness", text: "Support contractors and institutions with proof before large enquiries.", href: "/projects", icon: Wrench, imageSrc: "/ars-assets/ARSHOME4.jpg", imageAlt: "ARS project readiness source asset" },
          { title: "Certification route", text: "Let technical teams validate certificates, approvals, and renewals.", href: "/certifications", icon: ShieldCheck, imageSrc: "/ars-assets/awards-certificates-img2.png", imageAlt: "ARS certification route source asset" },
        ]}
      />
    </PageShell>
  );
}
