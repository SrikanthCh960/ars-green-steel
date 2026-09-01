import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Leadership & Our Team | ARS Green Steel",
  description:
    "Meet the Managing Director, Executive Director, and wider team of ARS Green Steel.",
  path: "/our-team",
});

const executiveLeadership = [
  {
    name: "Shri Ashwani Kumar Bhatia",
    role: "Managing Director (MD)",
    heading: "Shri. Ashwani Kumar Bhatia – Founder & Managing Director",
    bio: [
      "Shri Ashwani Kumar Bhatia, an Economics Honours graduate, is the Founder and Manging Director of ARS Steels and the visionary behind the company’s growth and success. A lifelong learner with an unwavering commitment to quality and excellence, he has been instrumental in shaping ARS Steels into a trusted name in the steel industry.",
      "Driven by a passion for innovation and continuous improvement, he has championed the adoption of cutting-edge technology, sustainable steelmaking practices, and stringent quality standards across the organisation. Under his leadership and vision, ARS Steels continues to combine superior strength, technological innovation, and sustainability to deliver high-quality steel solutions built for the future.",
      "His forward-thinking approach and commitment to excellence continue to strengthen the ARS legacy — a legacy built on quality, innovation, sustainability, and trust.",
    ],
    photo: "/ars-assets/leadership/ashwani-kumar-bhatia.png",
  },
  {
    name: "Shri Rajesh Bhatia",
    role: "Executive Director (ED)",
    heading: "Shri. Rajesh Bhatia",
    bio: [
      "Shri Rajesh Bhatia, Executive Director, has been an integral part of the company’s growth journey since 2009. Over the years, he has played a pivotal role in shaping the organisation’s strategic direction, expanding into new business avenues, and strengthening ARS Steels’ position in the Indian steel industry.",
      "With a progressive outlook and a deep understanding of the steel manufacturing sector, he has been instrumental in driving initiatives centred on innovation, operational excellence, sustainability, and customer-focused growth. Under his leadership, ARS Steels has evolved from a traditional steel manufacturer into a modern, consumer-driven, and sustainability-focused steel brand.",
      "His vision is focused on building a future-ready organisation that combines manufacturing excellence, sustainable steel solutions, innovation, and strong customer relationships, while contributing meaningfully to the transformation of India’s steel industry.",
    ],
    photo: "/ars-assets/leadership/rajesh-bhatia.png",
  },
] as const;

const coreLeadership = [
  executiveLeadership[0],
  executiveLeadership[1],
  {
    name: "Mr. C.V. Sathyanarayana Murthy",
    role: "Technical Director",
    photo: "/ars-assets/leadership/cv-sathyanarayana-murthy.png",
  },
  {
    name: "Mr. N. Prabhu",
    role: "Dy. Director – Finance & Accounts",
    photo: "/ars-assets/leadership/n-prabhu.png",
  },
  {
    name: "Mr. Sumit Bhatia",
    role: "VP – Global Business All India Key Accounts & Renewable Power Management",
    photo: "/ars-assets/Sumit-Bhatia-1.jpeg",
  },
  {
    name: "Mr. Madhanagopal",
    role: "VP – Supply Chain Management",
    photo: "/ars-assets/Madhana-Gopal-1.jpeg",
  },
] as const;

const salesMarketingLeader = {
  name: "Mr. G. Chandra Mouli",
  role: "Chief Marketing Officer – Sales & Marketing",
  photo: "/ars-assets/Chandra-Mouli-1.jpeg",
} as const;

const executiveDirectorTeam = [
  salesMarketingLeader,
  {
    name: "Ms. N. Subashini",
    role: "SGM – People Management",
    photo: "/ars-assets/leadership/n-subashini.png",
  },
  {
    name: "Mr. M. Babulal",
    role: "DGM – IT",
    photo: "/ars-assets/leadership/m-babulal.png",
  },
] as const;

const coreTeam = [
  ...coreLeadership,
  ...executiveDirectorTeam,
] as const;

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

function CoreTeamProfileCard({
  member,
  emphasis = false,
}: {
  member: TeamMember;
  emphasis?: boolean;
}) {
  return (
    <article className={`group flex w-full flex-col items-center text-center ${emphasis ? "max-w-[260px]" : "max-w-[220px]"}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-[1.15rem] border-2 border-brand-blue/70 bg-surface-100 shadow-[0_14px_32px_rgba(13,43,110,0.14)]">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role} at ARS Green Steel`}
          fill
          sizes={emphasis ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"}
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className={`flex min-h-[104px] w-full flex-col items-center pt-5 ${emphasis ? "px-1" : "px-0"}`}>
        <span className="mb-3 block h-0.5 w-10 bg-brand-red" aria-hidden="true" />
        <h3 className={`font-display font-bold leading-[1.2] text-ink-900 ${emphasis ? "text-lg" : "text-base"}`}>{member.name}</h3>
        <p className="mt-2 text-xs leading-4 text-steel-700">{member.role}</p>
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-ink-950">
        <Image
          src="/ars-assets/about/ARS-leadership-banner.jpg"
          alt="ARS leadership team reviewing operations at a steel manufacturing facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.74)_0%,rgba(6,13,30,0.54)_48%,rgba(6,13,30,0.14)_100%)] md:bg-[linear-gradient(90deg,rgba(6,13,30,0.64)_0%,rgba(6,13,30,0.34)_48%,rgba(6,13,30,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(0deg,rgba(6,13,30,0.38)_0%,rgba(6,13,30,0.08)_58%,transparent_100%)] md:h-[48%] md:bg-[linear-gradient(0deg,rgba(6,13,30,0.24)_0%,rgba(6,13,30,0.04)_58%,transparent_100%)]" />

        <div className="ars-page-hero-content ars-container relative z-10 flex h-full w-full items-end pb-16 pt-32 md:pb-20">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              ARS Leadership
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              The People Behind
              <br />
              <span className="italic text-brand-red">the Real Strength</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Behind ARS Green Steel is a team of experienced leaders driving innovation, manufacturing excellence, quality, sustainability, and customer trust. Together, they are shaping the future of India&apos;s steel industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── Executive leadership ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Executive Leadership</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Leadership with purpose, integrity, and a relentless pursuit of excellence.</h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              At the heart of ARS is a leadership team driven by purpose, integrity, and a relentless pursuit of excellence. The Managing Director and Executive Director provide the strategic direction that continues to strengthen ARS&apos;s legacy of manufacturing high-quality steel while embracing innovation and sustainable growth.
            </p>
          </div>
          <div className="grid gap-10 lg:gap-14">
            {executiveLeadership.map((member, index) => (
              <article
                key={member.name}
                className={`grid overflow-hidden border-y border-ink-900/10 bg-surface-50 lg:min-h-[520px] ${
                  index % 2 === 1
                    ? "lg:grid-cols-[minmax(0,1.22fr)_minmax(200px,0.5fr)]"
                    : "lg:grid-cols-[minmax(200px,0.5fr)_minmax(0,1.22fr)]"
                }`}
              >
                <div className={`relative aspect-[367/398] w-full overflow-hidden lg:h-full lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at ARS Green Steel`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
                  <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
                    <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
                    {member.role}
                  </div>
                  <h3 className="max-w-xl font-display text-[clamp(2rem,3.2vw,3.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink-900">
                    {member.heading}
                  </h3>
                  <div className="mt-6 max-w-2xl space-y-5 text-[15px] leading-8 text-steel-700">
                    {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Core team ── */}
      <MotionSection className="overflow-hidden bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Core Team
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">A collaborative leadership team bringing together experience across manufacturing, commercial operations, finance, people management, and technology.</p>
            </div>
          </div>
          <ol className="mx-auto grid max-w-[560px] justify-items-center gap-8 md:grid-cols-2 md:gap-10">
            {coreTeam.slice(0, 2).map((member) => (
              <li key={member.name} className="w-full max-w-[260px]">
                <CoreTeamProfileCard member={member} emphasis />
              </li>
            ))}
          </ol>
          <ol className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-x-12 gap-y-8">
            {coreTeam.slice(2).map((member) => (
              <li key={member.name} className="w-full max-w-[220px]">
                <CoreTeamProfileCard member={member} />
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      {/* ── CTA banner ── */}
      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">JOIN OUR TEAM</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Build Your Future with ARS Green Steel
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Join a team driven by innovation, integrity, and manufacturing excellence. At ARS Green Steel, you&apos;ll have the opportunity to contribute to India&apos;s growing steel industry while building a rewarding career with purpose.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Link
                href="/careers"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Explore careers <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

    </main>
  );
}
