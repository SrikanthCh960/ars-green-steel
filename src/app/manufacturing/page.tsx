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
          { kicker: "plant", value: "TN", label: "Gummidipoondi plant context supports manufacturing confidence." },
          { kicker: "grade", value: "550D", label: "Process proof connects directly to product performance." },
          { kicker: "testing", value: "Lab", label: "Testing process supports product and specification confidence." },
        ]}
      />

      <ContentBand
        eyebrow="Process flow"
        title="Show how steel becomes trust."
        body="The process is organized as a simple, premium manufacturing story for buyers and technical teams."
        cards={[
          { title: "Melting and refining", text: "Induction furnace and melting-discharge steps explain the start of production.", icon: Factory, imageSrc: "/ars-assets/ARSHOME1.jpg", imageAlt: "ARS melting and refining" },
          { title: "Ladle and casting", text: "Ladle teeming and continuous casting content supports process credibility.", icon: Workflow, imageSrc: "/ars-assets/ARSHOME2.jpg", imageAlt: "ARS ladle and casting" },
          { title: "Rolling mills", text: "Rolling process content connects billets to TMT bars and final sizes.", icon: Gauge, imageSrc: "/ars-assets/TMT-Bars.png", imageAlt: "ARS rolling mill and TMT bars" },
          { title: "Testing and QA", text: "Bend, rebend, tensile, spectrometer, and lab proof support quality confidence.", icon: FlaskConical, imageSrc: "/ars-assets/our-quality-1.png", imageAlt: "ARS testing and QA" },
        ]}
        tone="white"
      />

      <ContentBand
        eyebrow="Buyer confidence"
        title="Manufacturing proof should support sales."
        cards={[
          { title: "Product traceability", text: "Help buyers understand grade, size, and quality confidence.", href: "/products", icon: ShieldCheck, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS product traceability" },
          { title: "Project readiness", text: "Support contractors and institutions with proof before large enquiries.", href: "/projects", icon: Wrench, imageSrc: "/ars-assets/ARSHOME4.jpg", imageAlt: "ARS project readiness" },
          { title: "Certification route", text: "Let technical teams validate certificates, approvals, and renewals.", href: "/certifications", icon: ShieldCheck, imageSrc: "/ars-assets/awards-certificates-img2.png", imageAlt: "ARS certification route" },
        ]}
      />
    </PageShell>
  );
}
