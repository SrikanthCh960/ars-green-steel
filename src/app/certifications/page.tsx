import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  ClipboardCheck,
  Download,
  FileCheck,
  Leaf,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata({
  title: "Certifications | ARS Green Steel",
  description:
    "SGS, ISO, EPD, GRIHA, PWD, NHAI, renewals, awards, testing, and quality proof for ARS Green Steel.",
  path: "/certifications",
});

const proofGroups = [
  {
    title: "Quality proof",
    text: "SGS, product testing, and grade-related references support buyer and engineer confidence.",
    href: "/our-quality",
    image: "/ars-assets/our-quality-1.png",
    icon: ShieldCheck,
    points: ["SGS reference", "Grade proof", "Testing context"],
  },
  {
    title: "System proof",
    text: "ISO quality, environment, and safety references help procurement teams evaluate process maturity.",
    href: "/manufacturing",
    image: "/ars-assets/awards-certificates-img3.png",
    icon: BadgeCheck,
    points: ["Quality systems", "Process confidence", "Renewal-ready review"],
  },
  {
    title: "Green proof",
    text: "EPD, GRIHA, and LEED-oriented content supports responsible construction conversations.",
    href: "/green-steel",
    image: "/ars-assets/ARS-green-bg.png",
    icon: Leaf,
    points: ["Green steel story", "Project documentation", "Sustainability support"],
  },
];

const libraryItems = [
  {
    title: "PWD and NHAI references",
    text: "Approval references should support public-work, infrastructure, and institutional buying confidence after client verification.",
    icon: ClipboardCheck,
  },
  {
    title: "Product renewals",
    text: "TMT bar and billet renewal references help technical teams confirm continuity before purchase.",
    icon: FileCheck,
  },
  {
    title: "Awards and recognitions",
    text: "Recognition signals can support brand credibility when paired with verified source material.",
    icon: Award,
  },
  {
    title: "Testing process",
    text: "Bend, rebend, tensile, chemical, and lab process content should make quality visible.",
    icon: TestTube2,
  },
];

const testingRows = [
  ["Bend and rebend", "Helps site teams evaluate ductility and practical reinforcement behavior."],
  ["Tensile testing", "Supports strength, elongation, and specification review."],
  ["Spectrometer checks", "Supports chemical composition consistency and lab-backed confidence."],
  ["Batch documentation", "Keeps technical proof closer to enquiry and procurement decisions."],
];

const sgbcBenefits = [
  ["Independent Assessment", "Products are evaluated using transparent environmental criteria rather than marketing claims."],
  ["Trusted by the Building Industry", "Recognised by architects, consultants, developers and green building professionals across Asia."],
  ["Supports Sustainable Construction", "Encourages responsible material selection for lower-carbon buildings and infrastructure."],
  ["Global Credibility", "Provides confidence that environmental performance has been independently reviewed."],
];

const sgbcProof = [
  ["Environmental Product Declaration (EPD)", "Verified product-specific environmental data, including carbon emission intensity."],
  ["Lower Carbon Steel Manufacturing", "Manufactured through the Electric Arc Furnace route using recycled steel and increasing renewable energy integration."],
  ["Recognised Sustainability Standards", "Supported by GreenPro, BIS, ISO, SGS testing and India's Green Steel Taxonomy."],
];

const sgbcFaqs = [
  ["What is SGBC Certification?", "SGBC Certification is awarded by the Singapore Green Building Council to building products that meet recognised environmental performance standards. It helps architects, developers and project teams identify products that contribute to more sustainable construction."],
  ["What does the SGBC 4-Ticks Leader Rating mean?", "The 4-Ticks Leader Rating is the highest level of recognition awarded under the SGBC Green Building Product Certification scheme. It signifies outstanding environmental performance based on SGBC's evaluation criteria."],
  ["How is SGBC Certification different from LEED?", "SGBC certifies building products, while LEED is a green building rating system used to assess the sustainability of entire buildings. SGBC-certified products can support projects pursuing green building certifications by providing recognised environmental credentials."],
  ["How does SGBC Certification support sustainable construction?", "SGBC certification helps project teams select building materials that have been independently assessed for their environmental performance. It encourages more responsible material selection and contributes to lower-carbon construction practices."],
  ["Why did ARS Green Steel receive SGBC Certification?", "ARS Green Steel received the SGBC Green Certificate with a 4-Ticks Leader Rating for its demonstrated environmental performance, supported by responsible manufacturing practices, lower carbon emissions, and independently verified environmental documentation."],
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "62vh", minHeight: "480px", maxHeight: "680px" }}
      >
        <div className="soft-noise absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,30,0.92) 0%, rgba(6,13,30,0.3) 55%, transparent 100%)" }}
        />

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <ShieldCheck size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS Certifications</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Proof before
              <br />
              <span className="italic text-brand-red">purchase.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Certifications turn ARS claims into usable trust for engineers, contractors, institutions,
              dealers, and project buyers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request certificate <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {[
              ["SGS", "Quality proof"],
              ["ISO", "Systems"],
              ["EPD", "Green proof"],
              ["PWD", "Approval references"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 lg:py-24" id="certification-library">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <SectionKicker variant="brand">Certification library</SectionKicker>
            <h2 className="section-title">Keep proof easy to scan.</h2>
            <p className="section-copy">
              Buyers should not hunt for credibility. Group proof by the job it does:
              quality confidence, process confidence, green-building confidence, and approval review.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {proofGroups.map((group) => {
              const Icon = group.icon;

              return (
                <Link
                  key={group.title}
                  href={group.href}
                  className="focus-ring group overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_22px_70px_rgba(13,43,110,0.12)]"
                >
                  <div className="relative h-56 overflow-hidden bg-surface-100">
                    <Image
                      src={group.image}
                      alt={`${group.title} ARS certification proof`}
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
                      {group.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-steel-700">{group.text}</p>
                    <div className="mt-6 grid gap-3">
                      {group.points.map((point) => (
                        <span key={point} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                          <BadgeCheck size={17} className="shrink-0 text-green-steel" />
                          {point}
                        </span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                      View proof <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="sgbc-recognition" className="bg-surface-50 py-20 lg:py-24">
        <div className="ars-container">
          <SectionKicker variant="brand">Singapore Green Building Council</SectionKicker>
          <h2 className="section-title max-w-4xl">Recognized Beyond Borders.</h2>
          <p className="section-copy max-w-4xl">Awarded the SGBC 4-Ticks Leader Rating for independently verified environmental performance and responsible manufacturing.</p>
          <div className="mt-8 border-l-4 border-brand-red bg-white p-6 shadow-[var(--shadow-soft)]">
            <strong className="font-display text-2xl text-ink-900">Only Indian TMT manufacturer to receive the SGBC 4-Ticks Leader Rating</strong>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <article>
              <SectionKicker variant="brand">Understanding SGBC</SectionKicker>
              <h3 className="mt-5 font-display text-3xl font-bold text-ink-900">What Is the Singapore Green Building Council?</h3>
              <p className="mt-5 text-base leading-8 text-steel-700">The Singapore Green Building Council is one of Asia&apos;s leading organisations promoting sustainable buildings and environmentally responsible construction materials. Established in 2009, SGBC develops recognised certification programmes that evaluate building products based on environmental performance, helping architects, developers and project teams make informed material choices.</p>
              <p className="mt-4 text-base leading-8 text-steel-700">Today, SGBC certification is trusted across commercial, residential and infrastructure projects seeking higher standards of sustainability.</p>
            </article>
            <article>
              <SectionKicker variant="brand">Our achievement</SectionKicker>
              <h3 className="mt-5 font-display text-3xl font-bold text-ink-900">ARS Green Steel Earned the Highest SGBC Leader Rating</h3>
              <p className="mt-5 text-base leading-8 text-steel-700">ARS Green Steel has been awarded the SGBC Green Certificate with a 4-Ticks Leader Rating, the highest level of recognition granted by the Singapore Green Building Council.</p>
              <p className="mt-4 text-base leading-8 text-steel-700">This recognition reflects ARS&apos;s continued investment in responsible manufacturing, lower-carbon steel production, and transparent environmental reporting.</p>
            </article>
          </div>

          <div className="mt-14">
            <SectionKicker variant="brand">Why it matters</SectionKicker>
            <h3 className="mt-5 font-display text-3xl font-bold text-ink-900">Why SGBC Certification Matters</h3>
            <p className="mt-5 max-w-4xl text-base leading-8 text-steel-700">Choosing certified building materials goes beyond environmental claims. SGBC certification provides independent validation that a product has been assessed against recognised sustainability benchmarks.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {sgbcBenefits.map(([title, text]) => (
                <article key={title} className="border-t-2 border-brand-blue bg-white p-6">
                  <h4 className="font-display text-xl font-bold text-ink-900">{title}</h4>
                  <p className="mt-3 text-sm leading-7 text-steel-700">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {sgbcProof.map(([title, text]) => (
              <article key={title} className="rounded-[18px] border border-brand-blue/12 bg-white p-6">
                <BadgeCheck size={21} className="text-green-steel" />
                <h4 className="mt-5 font-display text-xl font-bold text-ink-900">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-steel-700">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-4xl">
            <SectionKicker variant="brand">The ARS advantage</SectionKicker>
            <h3 className="mt-5 font-display text-3xl font-bold text-ink-900">Why This Matters for Your Project</h3>
            <p className="mt-5 text-base leading-8 text-steel-700">Choosing SGBC-certified steel means selecting a product whose environmental performance has been independently assessed—not simply claimed. Combined with ARS&apos;s Environmental Product Declaration, Green Steel manufacturing process, and internationally recognised certifications, it gives project teams greater confidence when specifying materials for sustainable construction.</p>
          </div>

          <div className="mt-14 max-w-4xl">
            <SectionKicker variant="brand">FAQs</SectionKicker>
            <div className="mt-6 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {sgbcFaqs.map(([question, answer]) => (
                <details key={question} className="py-6">
                  <summary className="focus-ring cursor-pointer font-display text-lg font-bold text-ink-900">{question}</summary>
                  <p className="mt-4 text-sm leading-7 text-steel-700">{answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/products" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white">Choose Your Green Steel <ArrowRight size={15} /></Link>
            <span className="inline-flex h-12 items-center rounded-full border border-ink-900/15 px-6 text-sm font-semibold text-steel-500" aria-disabled="true">SGBC certificate file coming soon</span>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 lg:py-24" id="testing">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.88fr_1fr]">
            <div>
              <SectionKicker variant="brand">Testing proof</SectionKicker>
              <h2 className="section-title max-w-4xl">Make quality process visible.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Certification pages should also explain what quality means at the product level:
              testing, documentation, and technical review support.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[18px] border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)] lg:grid-cols-[0.72fr_1fr]">
            <div className="relative min-h-[360px] bg-brand-blue">
              <Image
                src="/ars-assets/our-quality-1.png"
                alt="ARS quality testing process"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/72 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-white text-brand-blue">
                  <TestTube2 size={22} />
                </span>
                <h3 className="mt-5 font-display text-4xl font-bold leading-tight text-white">
                  Testing is part of the trust story.
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

      <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="downloads">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
        <div className="ars-container relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionKicker variant="light">Downloads</SectionKicker>
            <h2 className="section-title section-title-light">Need a document for review?</h2>
            <p className="section-copy section-copy-light">
              Final certificate PDFs and brochures should be connected here once ARS supplies
              the approved source files. Until then, route requests to the sales team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {libraryItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-[18px] border border-white/16 bg-white/[0.1] p-6">
                  <span className="inline-flex size-13 items-center justify-center rounded-[14px] bg-white/14 text-white ring-1 ring-white/12">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-14">
        <div className="ars-container grid gap-5 rounded-[20px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-tight text-ink-900">
              Request certification support for your project.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Tell ARS which product, project type, and document proof you need for technical
              or procurement review.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex h-13 items-center justify-center gap-3 rounded-full bg-brand-red px-7 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            href="/contact"
          >
            <Download size={18} />
            Request documents
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
