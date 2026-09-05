import Image from "next/image";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Careers at ARS Green Steel",
  description:
    "View current ARS Green Steel vacancies across Tamil Nadu and make a general career enquiry.",
  path: "/careers",
});

const currentOpenings = [
  {
    title: "Market Development Engineer",
    total: "23 positions open",
    regions: [
      { name: "Chennai South", count: "8 positions open" },
      { name: "Rest of Tamil Nadu", count: "15 positions open" },
    ],
    description:
      "Responsible for driving market development and demand generation in the assigned territory through daily site visits, regular influencer visits, customer follow-ups, and relationship building. The role involves identifying new business opportunities, generating demand, developing dealer/channel relationships, monitoring market and competitor activities, and achieving territory-wise business targets.",
  },
  {
    title: "Business Development Executive",
    total: "10 positions open",
    regions: [{ name: "Rest of Tamil Nadu", count: "10 positions open" }],
    description:
      "Responsible for driving primary and secondary sales in the assigned territory through new dealer additions, demand generation, daily site visits, influencer engagement, and customer follow-ups. The role involves developing new business opportunities, expanding the dealer network, strengthening existing channel relationships, and achieving territory-wise sales and business development targets.",
  },
] as const;

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Careers at ARS"
        title="Careers at"
        accent="ARS Green Steel."
        body="At ARS Green Steel, we believe that great careers are built where ambition meets purpose."
        primaryLabel="View current openings"
        primaryHref="#current-openings"
        secondaryLabel="Contact ARS"
        secondaryHref="/contact"
        backgroundImageSrc="/ars-assets/about/ARS-Vision-Misson_hero.jpg"
        backgroundImageAlt="ARS Green Steel plant viewed by an industrial professional"
        backgroundImagePosition="center"
      />

      <MotionSection id="current-openings" className="scroll-mt-24 bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker>Current Openings</SectionKicker>
            <h2 className="section-title">33 openings across Tamil Nadu.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-700">Current live vacancies are listed below by role, region, and number of positions open.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {currentOpenings.map((opening, index) => (
              <article key={opening.title} className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[10px] border border-ink-900/10 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 md:p-8">
                <span aria-hidden="true" className="absolute right-6 top-4 font-display text-7xl font-bold leading-none text-brand-blue/[0.06] md:right-8 md:top-5">
                  0{index + 1}
                </span>
                <div className="relative flex h-full flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink-900/10 pb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Live vacancy</p>
                      <h3 className="mt-3 max-w-md font-display text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">{opening.title}</h3>
                    </div>
                    <span className="rounded-full border border-brand-red/20 bg-brand-red/8 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.11em] text-brand-red transition group-hover:bg-brand-red/12">{opening.total}</span>
                  </div>
                  <dl className="mt-7 grid gap-3">
                    {opening.regions.map((region) => (
                      <div key={region.name} className="flex items-center justify-between gap-4 border-l-2 border-brand-blue bg-surface-50 px-4 py-3">
                        <dt className="font-semibold text-ink-900">{region.name}</dt>
                        <dd className="shrink-0 text-sm font-bold text-steel-700">{region.count}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-7 text-base leading-7 text-steel-700">{opening.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[14px] bg-ink-950">
            <Image
              src="/ars-assets/about/Manufacturing-our-facility.jpg"
              alt="ARS Green Steel manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
          </div>
          <div>
            <SectionKicker>Grow with ARS</SectionKicker>
            <h2 className="section-title">Build a career where ambition meets purpose.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-700">
              We are not just creating steel. we are building a more sustainable future for industries, communities, and generations to come. And we believe the people who join us should have the opportunity to grow alongside that vision. At ARS Green Steel, your career is not limited by a job title. We encourage our people to learn, take ownership, explore new possibilities, and grow into leadership.
            </p>
            <p className="mt-6 text-lg leading-8 text-steel-700">Join ARS Green Steel and grow with a team that is building the future. Explore the opportunities and discover where your talent, ambition, and purpose can take you.</p>
          </div>
        </div>
      </MotionSection>

      <ContactCta
        eyebrow="Career enquiries"
        headline="Interested in an opening at ARS?"
        body="For enquiries about current openings, call ARS Customer Care. Please mention the role and preferred region when you call."
        primaryLabel="Call +91 9710411111"
        primaryHref="tel:+919710411111"
        secondaryLabel={null}
        secondaryHref={null}
      />
    </main>
  );
}
