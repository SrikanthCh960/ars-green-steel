import Image from "next/image";
import { connection } from "next/server";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { currentCareerOpenings } from "@/data/careers";
import { getCareerApplicationsConfig } from "@/lib/career-applications-config";
import { createPageMetadata } from "@/lib/site-metadata";
import { CareerOpeningCard } from "./career-opening-card";

export const metadata = createPageMetadata({
  title: "Careers at ARS Green Steel",
  description:
    "View current ARS Green Steel vacancies across Tamil Nadu and make a general career enquiry.",
  path: "/careers",
});

const totalPositions = currentCareerOpenings.reduce((total, opening) => total + opening.positions, 0);

export default async function CareersPage() {
  await connection();
  const applicationsEnabled = Boolean(getCareerApplicationsConfig());

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
        backgroundImageSrc="/ars-assets/cwv/heroes/careers-desktop.webp"
        backgroundImageMobileSrc="/ars-assets/cwv/heroes/careers-mobile.webp"
        backgroundImageAlt="ARS Green Steel plant viewed by an industrial professional"
        backgroundImagePosition="center"
      />

      <MotionSection id="current-openings" className="scroll-mt-24 bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker>Current Openings</SectionKicker>
            <h2 className="section-title">{totalPositions} openings across Tamil Nadu.</h2>
            <p className="mt-6 text-lg leading-8 text-steel-700">Current live vacancies are listed below by role, region, and number of positions open.</p>
            <p className="mt-3 text-sm leading-6 text-steel-700">{applicationsEnabled ? "Review each role description, then select Apply to submit your details and résumé to the ARS Careers team." : "Review each role description below. For application enquiries, call ARS Customer Care while the online application form is being prepared."}</p>
          </div>
          <ol className="mt-12 grid gap-5">
            {currentCareerOpenings.map((opening, index) => (
              <CareerOpeningCard key={opening.id} number={index + 1} {...opening} />
            ))}
          </ol>
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
        body={applicationsEnabled ? "Explore our current openings and apply to the role and region that fit your experience." : "For enquiries about current openings, call ARS Customer Care. Please mention the role and preferred region when you call."}
        primaryLabel={applicationsEnabled ? "View current openings" : "Call +91 9710411111"}
        primaryHref={applicationsEnabled ? "#current-openings" : "tel:+919710411111"}
        secondaryLabel={null}
        secondaryHref={null}
      />
    </main>
  );
}
