import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Leadership & Our Team | ARS Green Steel",
  description:
    "Meet the Managing Director, Executive Director, and wider team of ARS Green Steel.",
  path: "/our-team",
});

const executiveLeadership = [
  {
    name: "Shri. Ashwani Kumar Bhatia",
    role: "Managing Director",
    bio: "Shri Ashwani Kumar Bhatia, an Economics Honors Graduate, is the founder and managing director of ARS Group of Companies. Ltd. He has 39 years of experience in the steel and trade industry. Mr. Ashwani started his career in 1978, with the trading of MS scrap in New Delhi. He started ARS Steels Pvt. Ltd. in 1990, with the vision of manufacturing MS Ingots.",
    photo: "/ars-assets/leadership/ashwani-kumar-bhatia.png",
  },
  {
    name: "Shri. Rajesh Bhatia",
    role: "Executive Director",
    bio: "Shri Rajesh Bhatia joined ARS Steels in his last year of Bachelor’s as a part-time trainee and is now completely involved in leading the business towards new avenues. Mr. Rajesh did his Bachelors in Business Administration at BVIMR, New Delhi, and has a Stock Analysis and Portfolio Management diploma at BLB Institute of Financial Management.",
    photo: "/ars-assets/leadership/rajesh-bhatia.png",
  },
] as const;

const leadership = [
  {
    name: "Mr. Sumit Bhatia",
    role: "Vice President — Global Business, Key Accounts & Renewal Power Management",
    photo: "/ars-assets/Sumit-Bhatia-1.jpeg",
  },
  {
    name: "Mr. B. Madhanagopal",
    role: "Vice President — Supply Chain Management",
    photo: "/ars-assets/Madhana-Gopal-1.jpeg",
  },
  {
    name: "Mr. G. Chandra Mouli",
    role: "Chief Marketing Officer — Sales & Marketing",
    photo: "/ars-assets/Chandra-Mouli-1.jpeg",
  },
];

const seniorManagement = [
  {
    name: "Mr. TS. Ragu",
    role: "Associate Vice President — Project & Retail Sales",
    photo: "/ars-assets/leadership/ts-ragu.png",
  },
  {
    name: "Mr. R. Govindarajan",
    role: "Sr. General Manager — Field Marketing & Technical Services",
    photo: "/ars-assets/leadership/r-govindarajan.png",
  },
  {
    name: "Ms. N. Subashini",
    role: "Sr. General Manager — People Management",
    photo: "/ars-assets/leadership/n-subashini.png",
  },
  {
    name: "Ms. S. Valarmadhi",
    role: "General Manager — Finance & Accounts",
    photo: "/ars-assets/leadership/s-valarmadhi.png",
  },
  {
    name: "Mr. M. Babulal",
    role: "Dy. General Manager — Information Technology",
    photo: "/ars-assets/leadership/m-babulal.png",
  },
  {
    name: "Mr. Balamurali Krishna Chakkaravarthy",
    role: "Deputy General Manager — New Business Development",
    photo: "/ars-assets/leadership/balamurali-krishna-chakkaravarthy.jpeg",
  },
  {
    name: "Mr. R. Jayaprakash",
    role: "Company Secretary & AGM — Corporate Strategy",
    photo: "/ars-assets/leadership/r-jayaprakash.jpeg",
  },
  {
    name: "Mr. S. Sivakarthikeyan",
    role: "Assistant General Manager — Marketing",
    photo: "/ars-assets/leadership/s-sivakarthikeyan.jpeg",
  },
];

const teamMembers = [...leadership, ...seniorManagement] as const;

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

function TeamProfileCard({ member }: { member: TeamMember }) {
  return (
    <article className="relative pb-16">
      <div className="relative aspect-[270/293] w-full overflow-hidden bg-surface-50">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role} at ARS Green Steel`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-4 right-0 min-h-32 border border-ink-900/8 bg-white p-5 shadow-[0_18px_44px_rgba(13,43,110,0.08)]">
        <span className="mb-4 block h-0.5 w-12 bg-brand-red" aria-hidden="true" />
        <h3 className="font-display text-lg font-bold leading-tight text-ink-900">{member.name}</h3>
        <p className="mt-2 text-sm leading-5 text-steel-700">{member.role}</p>
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
          src="/ars-assets/about/ars-group-story.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(6,13,30,0.96) 0%, rgba(6,13,30,0.78) 46%, rgba(6,13,30,0.28) 100%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/20" />

        <div className="ars-page-hero-content ars-container relative z-10 flex h-full w-full items-end pb-16 pt-32 md:pb-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.1] px-4 py-2 backdrop-blur-sm">
              <Users size={12} className="text-white/60" />
              <span className="text-xs font-semibold tracking-[0.06em] text-white/80">ARS Leadership</span>
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Leadership &amp;
              <br />
              <span className="italic text-brand-red">core team.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Meet the leadership and core team of ARS Group.
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
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Managing Director and Executive Director.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              ARS Group&apos;s executive leadership is presented first, followed by the wider team.
            </p>
          </div>
          <div className="grid gap-10 lg:gap-14">
            {executiveLeadership.map((member, index) => (
              <article
                key={member.name}
                className={`grid overflow-hidden border-y border-ink-900/10 bg-surface-50 lg:h-[520px] ${
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
                    {member.name}
                  </h3>
                  <p className="mt-6 max-w-2xl text-[15px] leading-8 text-steel-700">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Our team ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Core Team
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">
                Behind ARS&apos;s continued success is a team of experienced professionals whose expertise, dedication, and collaborative spirit drive excellence across manufacturing, operations, quality, and customer service. Together, they uphold the values that define ARS and contribute to its sustained growth.
              </p>
            </div>
          </div>
          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamProfileCard key={member.name} member={member} />
            ))}
          </div>
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

      <SiteFooter />
    </main>
  );
}
