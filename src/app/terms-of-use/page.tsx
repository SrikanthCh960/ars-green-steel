import { createPageMetadata } from "@/lib/site-metadata";
import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Terms of Use | ARS Green Steel",
  description: "Terms governing the use of the ARS Green Steel website, content, and enquiry channels.",
  path: "/terms-of-use",
});

const termsSections = [
  {
    title: "Website use",
    body: "This website is provided to help visitors understand ARS Green Steel products, services, business information, and enquiry channels. You may browse, reference, and contact ARS through the site for lawful business and informational purposes only.",
  },
  {
    title: "Information accuracy",
    body: "ARS Green Steel works to keep website information current and useful, but product availability, pricing context, technical guidance, certifications, and contact workflows may change over time. Visitors should confirm business-critical details with the ARS team before making purchase, construction, procurement, or specification decisions.",
  },
  {
    title: "Intellectual property",
    body: "Website content, branding, product materials, design elements, images, downloads, and written copy remain the property of ARS Green Steel or their respective owners unless stated otherwise. They may not be copied, republished, or commercially reused without permission.",
  },
  {
    title: "External actions and enquiries",
    body: "Submitting an enquiry, requesting a quote, or contacting ARS through the website does not create a binding supply agreement. Any commercial terms, pricing, delivery, technical commitments, and warranties are governed separately through direct ARS communication and approved business documents.",
  },
  {
    title: "Updates to these terms",
    body: "ARS Green Steel may revise these terms as the website evolves. Continued use of the site after updates means you accept the latest published version.",
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="border-b border-ink-900/8 bg-[#f8f9fb] pt-32 pb-14 lg:pt-36 lg:pb-18">
        <div className="ars-container">
          <div className="max-w-4xl">
            <SectionKicker>Legal</SectionKicker>
            <h1 className="section-title text-[clamp(2.65rem,6vw,4.5rem)]">Terms of Use</h1>
            <p className="section-copy max-w-3xl">
              These terms explain how the ARS Green Steel website, content, and enquiry channels should be used.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="ars-container grid gap-6">
          {termsSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[12px] border border-ink-900/10 bg-[#f8f9fb] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.04)] lg:p-8"
            >
              <h2 className="font-display text-2xl font-bold tracking-normal text-ink-900">{section.title}</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-steel-700">{section.body}</p>
            </article>
          ))}

          <div className="rounded-[12px] border border-brand-blue/12 bg-brand-blue/[0.04] p-6 lg:p-8">
            <p className="font-display text-xl font-bold text-ink-900">Need clarification?</p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-steel-700">
              For official product, pricing, or business confirmation, use the ARS support channels before relying on website content for a project decision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex h-12 items-center justify-center rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
              >
                Contact ARS
              </Link>
              <Link
                href="/privacy-policy"
                className="focus-ring inline-flex h-12 items-center justify-center rounded-[6px] border border-ink-900/12 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
