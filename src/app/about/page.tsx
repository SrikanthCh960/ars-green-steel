import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { verifiedContactDetails } from "@/data/business-verification";

export const metadata = createPageMetadata({
  title: "About ARS Green Steel",
  description:
    "Since 1992, ARS Green Steel has built a legacy of certified TMT steel manufacturing — proven through certifications, testing, and structures that stand.",
  path: "/about",
});

const stats = [
  { value: "1992", label: "Founded", sub: "Over three decades of steel manufacturing trust." },
  { value: "2.5L MT", label: "Annual Capacity", sub: "Certified steel output supporting regional demand." },
  { value: "550D", label: "Flagship Grade", sub: "Fe-550D high-strength TMT for structural integrity." },
  { value: "SGS", label: "Tested & verified", sub: "Every batch and consignment is supported by quality assurance." },
];

const storyPoints = [
  "Integrated steel manufacturing plant — Gummidipoondi, Tamil Nadu",
  "ISO 9001 and ISO 14001 certified manufacturing facility",
  "BIS-certified Fe550D and CRS 550D TMT bars",
  "Trusted across residential, commercial, and infrastructure projects",
];

const pillars = [
  {
    icon: <Package size={20} />,
    title: "Product proof",
    desc: "Every ARS TMT bar is produced to IS 1786:2008 — the benchmark for safe structural steel in India.",
  },
  {
    icon: <Award size={20} />,
    title: "Certification proof",
    desc: "SGS-verified and BIS-certified. Third-party validation that goes beyond self-declaration.",
  },
  {
    icon: <Zap size={20} />,
    title: "Testing proof",
    desc: "Tensile, bend & rebend, and chemical composition checked at production batches — not just sampled.",
  },
  {
    icon: <Users size={20} />,
    title: "Buyer proof",
    desc: "Builders, engineers, and dealers who return to ARS for every new project. That is the real certificate.",
  },
];

const capabilityTiles = [
  { val: "2.5L MT", label: "Annual output" },
  { val: "100%", label: "In-house QC" },
  { val: "Fe-550D", label: "Primary grade" },
  { val: "South India", label: "Dealer network" },
];

const milestones = [
  {
    year: "1990",
    title: "The beginning",
    desc: "Established as ARS Metals Private Limited with a vision to manufacture high-quality steel through disciplined processes and uncompromising quality standards.",
  },
  {
    year: "1992",
    title: "Commercial production begins",
    desc: "Commercial production of MS billets begins, laying the foundation for integrated steel manufacturing.",
  },
  {
    year: "2005",
    title: "Entering TMT manufacturing",
    desc: "ARS commissions its rolling mill division and becomes a fully integrated steel manufacturer.",
  },
  {
    year: "2024",
    title: "Leading the Green Steel movement",
    desc: "ARS introduces 3-in-1 Green Steel TMT rebars, combining ductility, corrosion resistance, and lower-emission manufacturing.",
  },
];

const audiences = [
  {
    icon: <Users size={20} />,
    title: "Home Owners",
    desc: "The clearest path from steel selection to safe construction — certified products and dealer access in one network.",
    cta: "Explore products",
    href: "/products",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Engineers & Architects",
    desc: "Grade specifications, technical documentation, and testing detail — everything needed to specify with confidence.",
    cta: "View 550D specs",
    href: "/products/ars-550d",
  },
  {
    icon: <Building2 size={20} />,
    title: "Builders & Contractors",
    desc: "Consistent supply, certified quality, and a dealer network designed to meet project timelines without compromise.",
    cta: "Find your dealer",
    href: "/dealer-locator",
  },
];

const visionMission = [
  {
    label: "Vision",
    body: "To lead India's transition to sustainable steel manufacturing, building stronger infrastructure, empowering communities, and creating a greener future for generations.",
    tone: "light",
  },
  {
    label: "Mission",
    body: "Building excellence through every bar of steel: delivering consistent quality, advancing responsible manufacturing, building customer trust, and investing in technology, people, and manufacturing capabilities for India's infrastructure.",
    tone: "dark",
  },
] as const;

const contacts = [
  {
    icon: <Phone size={18} />,
    title: "Customer hotline",
    detail: verifiedContactDetails.mobile,
    sub: "Mon – Sat, 9am – 6pm",
  },
  {
    icon: <Mail size={18} />,
    title: "Project enquiry",
    detail: "Enquiry form",
    sub: "We aim to respond within a day",
  },
  {
    icon: <MapPin size={18} />,
    title: "Office & plant",
    detail: "Chennai, Tamil Nadu",
    sub: "By prior appointment",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-ink-950"
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0">
          <div className="hero-video-placeholder absolute inset-0 h-full w-full" />
          <video
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/ars-intro.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,30,0.92) 0%, rgba(6,13,30,0.6) 55%, rgba(6,13,30,0.25) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,30,0.9) 0%, rgba(6,13,30,0.05) 60%, transparent 100%)" }}
          />
        </div>

        <div className="ars-container relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              ARS Group
            </div>
            <h1
              id="about-hero-title"
              className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white"
            >
              Building stronger foundations with
              <br />
              trusted steel <span className="text-brand-red">since 1992.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
              ARS Group is one of India&apos;s leading manufacturers of BIS-certified Fe550D and CRS 550D TMT
              bars for residential, commercial, industrial, and infrastructure projects.
            </p>
            <div className="mt-9 flex">
              <a
                href="#story"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c90f16]"
              >
                Our story <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14 md:py-16">
        <div className="ars-container">
          <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.18em] text-grey-600">
            Confidence, <span className="text-brand-red">earned</span> over time.
          </p>
          <dl className="grid grid-cols-1 border-y border-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="border-b border-ink-900/10 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <dd className="font-display text-[clamp(2rem,3vw,2.8rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {s.value}
                </dd>
                <dt className="mb-1 mt-2 text-[13px] font-bold text-ink-900">{s.label}</dt>
                <dd className="max-w-[230px] text-[12px] leading-5 text-grey-600">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </MotionSection>

      {/* ── Brand story ── */}
      <MotionSection className="scroll-mt-24 bg-white py-20 md:py-28" id="story">
        <div className="ars-container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Our Story</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                More than steel. Built on trust.
              </h2>
              <p className="mb-6 mt-5 text-[15px] leading-[1.8] text-steel-700">
                ARS Green Steel is an integrated steel manufacturer with a state-of-the-art facility at
                Gummidipoondi, Tamil Nadu. Since 1992, we have combined advanced manufacturing, rigorous
                quality standards, and responsible Green Steel practices to build stronger, safer structures.
              </p>
              <p className="mb-8 text-[15px] leading-[1.8] text-steel-700">
                From homes to commercial developments and infrastructure, ARS delivers certified steel
                solutions engineered for strength, durability, and dependable performance.
              </p>
              <div className="flex flex-col gap-3">
                {storyPoints.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-brand-red" />
                    <span className="text-[14px] font-medium text-steel-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <figure className="relative min-h-[420px] overflow-hidden bg-ink-950 md:min-h-[540px]">
              <Image
                src="/ars-assets/about/ars-group-story.webp"
                alt="Aerial view of the ARS Green Steel manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(6,13,30,0.5) 0%, transparent 60%)" }}
              />
              <figcaption className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
                <div className="inline-flex items-center gap-3 border border-white/20 bg-ink-950/72 px-4 py-3 backdrop-blur">
                  <ShieldCheck size={18} className="text-brand-red" />
                  <span className="text-[13px] font-semibold text-white">BIS-certified TMT manufacturing</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </MotionSection>

      {/* ── Trust pillars ── */}
      <MotionSection className="bg-brand-blue py-20 md:py-28">
        <div className="ars-container">
          <div className="mb-16 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="light">Why It Matters</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                Built on proven quality. Backed by verified standards.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Manufactured in an integrated steel plant and backed by BIS, ISO, and SGS certifications,
              every ARS TMT bar is engineered for quality, strength, and long-lasting performance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-5 border-t border-white/20 py-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.06] text-brand-red">
                    {p.icon}
                  </div>
                  <span className="text-[12px] font-bold text-white/30">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-[15px] font-bold text-white">{p.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-white/65">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-28" id="vision">
        <div className="ars-container">
          <div className="mb-12 max-w-2xl">
            <SectionKicker variant="brand">Our Vision · Mission · Values</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              Driven by Purpose. Built for the Future.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {visionMission.map((item) => (
              <article
                key={item.label}
                className={
                  item.tone === "dark"
                    ? "bg-brand-blue p-8 text-white md:p-10"
                    : "border border-brand-blue/10 bg-white p-8 shadow-[var(--shadow-soft)] md:p-10"
                }
              >
                <h3
                  className={
                    item.tone === "dark"
                      ? "font-display text-[1.6rem] font-bold leading-tight text-white"
                      : "font-display text-[1.6rem] font-bold leading-tight text-ink-900"
                  }
                >
                  {item.label}
                </h3>
                <p
                  className={
                    item.tone === "dark"
                      ? "mt-4 text-[15px] leading-[1.8] text-white/80"
                      : "mt-4 text-[15px] leading-[1.8] text-steel-700"
                  }
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/manufacturing"
              className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
            >
              Explore manufacturing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* ── Capability ── */}
      <MotionSection className="bg-white py-20 md:py-28" id="manufacturing">
        <div className="ars-container">
          <div className="grid items-center gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionKicker variant="brand">Scale &amp; Capability</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.025em] text-ink-900">
                Capability that supports trust at scale.
              </h2>
              <p className="mb-8 mt-5 text-[15px] leading-[1.8] text-steel-700">
                Our integrated facility — from raw material to finished bar — keeps every step of
                production controlled, traceable, and built to deliver consistent output at volume.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilityTiles.map((item) => (
                  <div key={item.label} className="border-l-2 border-brand-red bg-surface-50 p-4">
                    <span className="font-display text-[1.4rem] font-extrabold tracking-[-0.02em] text-brand-blue">
                      {item.val}
                    </span>
                    <p className="mt-0.5 text-[12px] font-medium text-grey-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden bg-ink-950 lg:col-span-3 lg:min-h-[520px]">
              <Image
                src="/ars-assets/about/scale-capability.webp"
                alt="Hot TMT bars moving through the rolling mill"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(13,43,110,0.3) 0%, transparent 60%)" }}
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Proof timeline ── */}
      <MotionSection className="bg-surface-50 py-20 md:py-28">
        <div className="ars-container">
          <div className="mb-16 text-center">
            <SectionKicker variant="brand" align="center" showEndLine>
              Our Journey
            </SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              Proof before claims.
            </h2>
          </div>
          <ol className="relative grid gap-0 border-t border-brand-blue/15 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className="relative flex flex-col gap-4 border-b border-brand-blue/15 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[1.5rem] font-black tracking-[-0.02em] text-brand-blue">
                    {m.year}
                  </span>
                  {i < milestones.length - 1 ? (
                    <ArrowRight
                      size={16}
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-brand-blue/30 lg:block"
                    />
                  ) : null}
                </div>
                <div>
                  <h3 className="mb-1.5 text-[14px] font-bold text-ink-900">{m.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-grey-600">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      {/* ── Built for buyers ── */}
      <MotionSection className="bg-white py-20 md:py-28">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Who We Serve</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Built for buyers who need clarity.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Whether you are building your first home or specifying steel for a large project, ARS has a
              clear path for you — from product to proof to purchase.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="focus-ring group flex min-h-[300px] flex-col gap-5 border border-surface-100 bg-surface-50 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                  {a.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-[17px] font-bold text-ink-900">{a.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-grey-600">{a.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                  {a.cta} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-28" id="contact">
        <div className="ars-container">
          <div className="mb-14 text-center">
            <SectionKicker variant="light" align="center" showEndLine>
              Start Here
            </SectionKicker>
            <h2 className="mb-4 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              See the process behind the steel.
            </h2>
            <p className="mx-auto max-w-[480px] text-[15px] leading-[1.75] text-white/70">
              Explore how ARS manufactures and verifies steel before choosing the right product for your project.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
            {contacts.map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-center gap-4 border border-white/10 bg-white/[0.07] p-6 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-brand-red/40 bg-brand-red/25 text-brand-red">
                  {c.icon}
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">{c.title}</p>
                  <p className="mb-0.5 text-[14px] font-bold text-white">{c.detail}</p>
                  <p className="text-[12px] text-white/65">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/manufacturing"
              className="focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-7 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              Explore manufacturing <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
