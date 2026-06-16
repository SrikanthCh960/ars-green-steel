import type { Metadata } from "next";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { ContentBand, PageHero, ProofMetrics, SectionIntro } from "@/components/page-sections";
import { LeadForm } from "@/components/lead-form";
import { MotionSection } from "@/components/motion-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clientVerificationSummary, verifiedContactDetails } from "@/data/business-verification";

export const metadata: Metadata = {
  title: "Contact | ARS Green Steel",
  description: "Contact ARS Green Steel for product, project, dealer, and quote enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Contact ARS"
        title="Talk to the"
        accent="right team."
        body="Use one clear contact path for product, quote, dealer, project, office, and plant enquiries."
        primaryLabel="Request quote"
        primaryHref="/request-quote"
        secondaryLabel="Call sales"
        secondaryHref={`tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`}
      />

      <ProofMetrics
        metrics={[
          { kicker: "helpline", value: "9710", label: `${verifiedContactDetails.mobile} for sales and customer enquiries.` },
          { kicker: "office", value: "044", label: `${verifiedContactDetails.officePhone} for corporate office support.` },
          { kicker: "plant", value: "TN", label: verifiedContactDetails.plant },
          { kicker: "fax", value: "4350", label: `${verifiedContactDetails.fax} for office communication.` },
        ]}
      />

      <MotionSection className="bg-white py-24">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <div className="mb-8 overflow-hidden rounded-[8px] border border-ink-900/10 bg-[#f8f9fb]">
              <Image
                src="/ars-assets/Contact_banner.png"
                alt="ARS contact and dealer support"
                width={760}
                height={420}
                className="h-64 w-full object-cover"
              />
            </div>
            <SectionIntro
              eyebrow="Reach us"
              title="Clear contact proof."
              body={clientVerificationSummary.contact}
            />
            <div className="grid gap-4">
              {[
                { title: "Mobile", detail: verifiedContactDetails.mobile, icon: Phone },
                { title: "Phone number", detail: verifiedContactDetails.officePhoneCompact, icon: Phone },
                { title: "Fax", detail: verifiedContactDetails.fax, icon: Phone },
                { title: "Email", detail: verifiedContactDetails.publicEmail, icon: Mail },
                { title: "Corporate office", detail: `${verifiedContactDetails.corporateOffice} Mobile: ${verifiedContactDetails.mobile}. Telephone: ${verifiedContactDetails.officePhone}. Fax: ${verifiedContactDetails.fax}.`, icon: MapPin },
                { title: "Steel plant", detail: `${verifiedContactDetails.plant} Mobile: ${verifiedContactDetails.mobile}. Telephone: ${verifiedContactDetails.plantPhones}. Fax: ${verifiedContactDetails.fax}.`, icon: Building2 },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-5">
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-[8px] bg-white text-brand-blue ring-1 ring-ink-900/8">
                      <Icon size={19} />
                    </div>
                    <h3 className="font-display text-2xl font-black uppercase text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-steel-700">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <LeadForm intent="contact" title="Send a sales enquiry" body="Share product, dealer, project, or quote details and route the conversation to the right ARS team." />
        </div>
      </MotionSection>

      <ContentBand
        eyebrow="Helpful routes"
        title="Choose the action closest to your need."
        cards={[
          { title: "Request quote", text: "Share grade, rod size, quantity, and delivery location.", href: "/request-quote", icon: Phone },
          { title: "Find dealer", text: "Route your enquiry to nearby dealer support through the ARS team.", href: "/dealer-locator", icon: MapPin },
          { title: "Become a dealer", text: "Start a dealer or distributor interest path.", href: "/become-a-dealer", icon: Building2 },
        ]}
      />

      <section className="bg-white py-14">
        <div className="ars-container">
          <SiteFooter />
        </div>
      </section>
    </main>
  );
}
