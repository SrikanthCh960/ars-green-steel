import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  FlaskConical,
  Gauge,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Manufacturing | ARS Green Steel",
  description:
    "ARS Green Steel manufacturing strength, process flow, testing, quality assurance, and plant proof.",
  path: "/manufacturing",
});

const processCards = [
  {
    title: "Steel making & continuous casting",
    text: "High-quality raw material is transformed through steel making, continuous casting, and controlled billet formation.",
    image: "/ars-assets/ARSHOME1.jpg",
    icon: Factory,
  },
  {
    title: "Rolling mill & TMT process",
    text: "Billets are rolled and thermo-mechanically treated to achieve the balanced strength and ductility required for ARS TMT bars.",
    image: "/ars-assets/ARSHOME2.jpg",
    icon: Workflow,
  },
  {
    title: "Cooling, bundling & dispatch",
    text: "Cooling beds, cutting, bundling, quality control, and dispatch maintain consistency through the final handover.",
    image: "/ars-assets/TMT-Bars.png",
    icon: Gauge,
  },
];

const trustRoutes = [
  {
    title: "Product traceability",
    text: "Help buyers connect manufacturing proof to grade, size, and product performance.",
    href: "/products",
    icon: ShieldCheck,
  },
  {
    title: "Testing and quality",
    text: "Show bend, rebend, tensile, lab, and chemical proof for serious review.",
    href: "/certifications",
    icon: FlaskConical,
  },
  {
    title: "Project readiness",
    text: "Support contractors and institutions with process proof before large enquiries.",
    href: "/projects",
    icon: Wrench,
  },
];

const proofStats = [
  { value: "Integrated", label: "Steel facility", detail: "Steel making through dispatch is managed with precision." },
  { value: "TN", label: "Plant context", detail: "ARS operates its integrated facility at Gummidipoondi, Tamil Nadu." },
  { value: "550D", label: "Product connection", detail: "Manufacturing discipline supports dependable product performance." },
  { value: "Lab", label: "Testing route", detail: "Quality checks remain closely connected to production." },
];

const testingRows = [
  ["Bend and rebend", "Supports ductility review for engineers and site teams."],
  ["Tensile testing", "Supports strength and elongation confidence before product selection."],
  ["Spectrometer checks", "Supports consistency and composition review through lab process context."],
  ["Batch records", "Keeps quality proof connected to technical and procurement confidence."],
];

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/right-about-us.png-compress.webp"
            alt="ARS manufacturing plant aerial view"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,30,0.95) 0%, rgba(6,13,30,0.65) 50%, rgba(6,13,30,0.2) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,30,0.9) 0%, transparent 55%)" }}
          />
        </div>

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Factory size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS Manufacturing</span>
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Built with
              <br />
              <span className="italic text-brand-red">precision.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Every ARS TMT bar is manufactured in our integrated facility, where advanced technology,
              process discipline, and decades of expertise come together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request plant proof <ArrowRight size={14} />
              </Link>
              <Link
                href="/certifications"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                View certifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {proofStats.map((item) => (
              <div key={item.label} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {item.value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {item.label}
                </span>
                <span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24" id="process-flow">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <SectionKicker variant="brand">Process flow</SectionKicker>
            <h2 className="section-title">How ARS steel takes shape.</h2>
            <p className="section-copy">
              Every ARS TMT bar follows a carefully planned manufacturing process that transforms
              high-quality raw materials into steel designed for strength, durability, and dependable performance.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {processCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_22px_70px_rgba(13,43,110,0.12)]"
                >
                  <div className="relative h-56 overflow-hidden bg-surface-100">
                    <Image
                      src={card.image}
                      alt={`${card.title} ARS process`}
                      fill
                      sizes="(min-width: 1024px) 31vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/62 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-[14px] bg-white text-brand-blue shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                      <Icon size={21} />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-3xl font-bold tracking-normal text-ink-900">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-steel-700">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="testing">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.88fr_1fr]">
            <div>
              <SectionKicker variant="brand">Testing and QA</SectionKicker>
            <h2 className="section-title max-w-4xl">Manufactured to recognised industry standards.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Every manufacturing stage follows established systems and recognised industry standards that
              support consistency, responsible production, and continuous improvement.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[18px] border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)] lg:grid-cols-[0.72fr_1fr]">
            <div className="relative min-h-[360px] bg-brand-blue">
              <Image
                src="/ars-assets/our-quality-1.png"
                alt="ARS testing and quality assurance"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/72 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-white text-brand-blue">
                  <FlaskConical size={22} />
                </span>
                <h3 className="mt-5 font-display text-4xl font-bold leading-tight text-white">
                  Lab and testing support every product claim.
                </h3>
              </div>
            </div>

            <div className="grid divide-y divide-brand-blue/10">
              {testingRows.map(([title, text], index) => (
                <article key={title} className="grid gap-4 p-6 sm:grid-cols-[44px_minmax(0,1fr)] lg:p-7">
                  <span className="font-technical text-sm font-black tracking-[0.16em] text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <h3 className="font-display text-2xl font-bold text-ink-900">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-steel-700">{text}</p>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="confidence-routes">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
        <div className="ars-container relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.28fr] lg:items-center">
          <div className="max-w-xl">
            <SectionKicker variant="light">Buyer confidence</SectionKicker>
            <h2 className="section-title section-title-light">Manufacturing proof should support sales.</h2>
            <p className="section-copy section-copy-light">
              Once buyers understand the process, the next steps should feel obvious: review product proof,
              validate testing, or move into a project enquiry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustRoutes.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="focus-ring group rounded-[18px] border border-white/16 bg-white/[0.1] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.14]"
                >
                  <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-white/14 text-white ring-1 ring-white/12">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{card.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                    Open route <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container grid gap-5 rounded-[20px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-tight text-ink-900">
              Need manufacturing or plant proof for your review?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Reach ARS for process context, testing references, certifications, and project support.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="/contact"
          >
            Contact ARS <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
