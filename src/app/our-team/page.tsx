import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Leadership & Core Team | ARS Green Steel",
  description:
    "Meet the Managing Director, Executive Director, board of directors, and core team of ARS Green Steel.",
  path: "/our-team",
});

const executiveLeadership = [
  {
    name: "Shri. Ashwani Kumar Bhatia",
    role: "Managing Director",
    bio: "Shri Ashwani Kumar Bhatia, an Economics Honors Graduate, is the founder and managing director of ARS Group of Companies. Ltd. He has 39 years of experience in the steel and trade industry. Mr. Ashwani started his career in 1978, with the trading of MS scrap in New Delhi. He started ARS Steels Pvt. Ltd. in 1990, with the vision of manufacturing MS Ingots.",
  },
  {
    name: "Shri. Rajesh Bhatia",
    role: "Executive Director",
    bio: "Shri Rajesh Bhatia joined ARS Steels in his last year of Bachelor’s as a part-time trainee and is now completely involved in leading the business towards new avenues. Mr. Rajesh did his Bachelors in Business Administration at BVIMR, New Delhi, and has a Stock Analysis and Portfolio Management diploma at BLB Institute of Financial Management.",
  },
] as const;

const board = [
  {
    name: "Shri. C.V. Sathyanarayana Murthy",
    role: "Technical Director",
  },
  {
    name: "Shri. N. Prabhu",
    role: "Dy. Director — Finance & Accounts",
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
  { name: "Mr. TS. Ragu", role: "Associate Vice President — Project & Retail Sales" },
  { name: "Mr. R. Govindarajan", role: "Sr. General Manager — Field Marketing & Technical Services" },
];

function initials(name: string) {
  return name
    .replace(/^(Shri\.?|Mr\.?|Mrs\.?|Ms\.?)\s+/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "58vh", minHeight: "440px", maxHeight: "640px" }}
      >
        <div className="soft-noise absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,30,0.92) 0%, rgba(6,13,30,0.3) 55%, transparent 100%)" }}
        />

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Users size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS Leadership</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
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
              ARS Group&apos;s executive leadership is presented first, followed by the board and core team.
            </p>
          </div>
          <div className="grid gap-6">
            {executiveLeadership.map((m) => (
              <article key={m.name} className="grid overflow-hidden rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 md:grid-cols-[180px_minmax(0,1fr)]">
                <div className="flex min-h-44 items-center justify-center bg-brand-blue/[0.06] p-8">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white font-display text-[28px] font-extrabold text-brand-blue ring-1 ring-brand-blue/10">
                    {initials(m.name)}
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand-red">{m.role}</p>
                  <h3 className="mt-2 font-display text-[clamp(1.45rem,2.5vw,1.9rem)] font-bold text-ink-900">{m.name}</h3>
                  <p className="mt-4 max-w-3xl text-[14px] leading-[1.8] text-steel-700">{m.bio}</p>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-grey-600">
                    Approved portrait pending
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Board of directors ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-12">
            <SectionKicker variant="brand">Board of Directors</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              Board leadership.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {board.map((m) => (
              <div key={m.name} className="flex gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/[0.06] font-display text-[18px] font-extrabold text-brand-blue">
                  {initials(m.name)}
                </div>
                <div>
                  <h3 className="font-display text-[18px] font-bold text-ink-900">{m.name}</h3>
                  <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.06em] text-brand-red">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Leadership team (with photos) ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Core Team</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Core functions across the business.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              The approved core team covers global business, supply chain, and sales and marketing.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-2xl border-[1.5px] border-surface-100 bg-white">
                <div className="relative h-72 bg-ink-950">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at ARS Green Steel`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[18px] font-bold text-ink-900">{m.name}</h3>
                  <p className="mt-1.5 text-[12px] font-bold uppercase tracking-[0.05em] text-brand-red">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Senior management ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-12">
            <SectionKicker variant="brand">Senior Management</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              Close to projects and the field.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {seniorManagement.map((m) => (
              <div key={m.name} className="flex items-center gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue/[0.06] font-display text-[16px] font-extrabold text-brand-blue">
                  {initials(m.name)}
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold text-ink-900">{m.name}</h3>
                  <p className="mt-0.5 text-[12px] font-medium text-grey-600">{m.role}</p>
                </div>
              </div>
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
              <SectionKicker variant="light">Work with ARS</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Explore careers at ARS Green Steel.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Learn more about current career opportunities with ARS Group.
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
