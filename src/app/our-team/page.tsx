import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Leadership & Core Team | ARS Green Steel",
  description:
    "The board of directors and leadership team behind ARS Green Steel — decades of experience across steel manufacturing, technical, finance, supply chain, and sales.",
  path: "/our-team",
});

const stats = [
  { value: "1978", label: "Founded", sub: "The ARS journey began trading MS scrap in New Delhi." },
  { value: "39+", label: "Years", sub: "Leadership experience across steel and trade." },
  { value: "Group", label: "ARS Group", sub: "A group of companies built around steel." },
  { value: "TN", label: "Headquartered", sub: "Chennai, Tamil Nadu base and plant." },
];

const board = [
  {
    name: "Shri. Ashwani Kumar Bhatia",
    role: "Managing Director",
    bio: "Founder and Managing Director of the ARS Group. An Economics Honours graduate with 39 years in the steel and trade industry, he began in 1978 trading MS scrap in New Delhi and went on to build ARS Steels.",
  },
  {
    name: "Shri. Rajesh Bhatia",
    role: "Executive Director",
    bio: "A BBA graduate from BVIMR, New Delhi, with a stock-analysis background. He joined ARS Steels as a part-time trainee in his final year and now helps lead the business into new avenues.",
  },
  {
    name: "Shri. C.V. Sathyanarayana Murthy",
    role: "Technical Director",
    bio: "",
  },
  {
    name: "Shri. N. Prabhu",
    role: "Dy. Director — Finance & Accounts",
    bio: "",
  },
];

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
              The people behind the real
              <br />
              <span className="italic text-brand-red">strength.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Behind ARS Green Steel is a team of experienced leaders driving innovation, manufacturing
              excellence, quality, sustainability, and customer trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Talk to sales <ArrowRight size={14} />
              </a>
              <a
                href="/about"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                About ARS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {s.value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {s.label}
                </span>
                <span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Board of directors ── */}
      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Board of Directors</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Leadership rooted in steel.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              The board pairs founder experience with technical, financial, and operational depth — the
              foundation behind every ARS product decision.
            </p>
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
                  {m.bio ? <p className="mt-3 text-[13px] leading-[1.7] text-steel-700">{m.bio}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Leadership team (with photos) ── */}
      <MotionSection className="bg-surface-50 py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Leadership Team</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                The team that runs the business.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Senior leaders across global business, supply chain, and sales keep ARS supply, service, and
              market presence consistent.
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
              <SectionKicker variant="light">Join our team</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Build your future with ARS Green Steel.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Join a team driven by innovation, integrity, and manufacturing excellence while building a
                rewarding career with purpose.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Talk to our technical team <ArrowRight size={15} />
              </a>
              <a
                href="/become-a-dealer"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                Become a dealer
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
