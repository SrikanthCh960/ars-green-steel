import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Download,
  Factory,
  FileCheck,
  Leaf,
  Phone,
  Recycle,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ARS Green Steel | Sustainable TMT Steel",
  description:
    "ARS Green Steel supports responsible construction with recycled-route steelmaking, EPD-ready documentation, and Fe-550D strength.",
};

const heroStats = [
  { value: "5-Star", label: "Green Steel Taxonomy Rating" },
  { value: "592 kg", label: "CO₂e per tonne — EPD verified" },
  { value: "98%", label: "Recycled steel route" },
];

const conceptPoints = [
  "Electric Arc Furnace production, not blast furnace",
  "Up to 98% recycled steel as a primary input",
  "Fe-550D strength and IS 1786:2008 testing—no performance trade-off",
  "EPD, GreenPro, SGBC, GRIHA, BIS, ISO, and SGS proof",
];

const benefits = [
  {
    icon: Building2,
    title: "For developers and builders",
    desc: "Support green-building conversations with clearer material proof, stronger project positioning, and documentation-led confidence.",
  },
  {
    icon: TrendingUp,
    title: "For net-zero planning",
    desc: "Move procurement closer to decarbonization goals with steel choices that are easier to explain, compare, and submit.",
  },
  {
    icon: FileCheck,
    title: "For approvals and finance",
    desc: "Organized sustainability evidence can help reduce friction in environmental, lender, and institutional review conversations.",
  },
  {
    icon: ShieldCheck,
    title: "For ESG communication",
    desc: "Give buyers, partners, and stakeholders a more measurable story around cleaner construction without weakening performance.",
  },
];

const proofItems = [
  {
    icon: BadgeCheck,
    title: "EPD verified",
    desc: "Third-party verified environmental data records 592 kg CO₂e per tonne of finished steel.",
    tag: "Sustainability",
  },
  {
    icon: Recycle,
    title: "Recycled route",
    desc: "Induction-furnace route aligned to recycled-steel policy direction and lower-impact procurement.",
    tag: "Process",
  },
  {
    icon: Leaf,
    title: "5-Star Green Steel",
    desc: "Recognised under the Ministry of Steel Green Steel Taxonomy for plant-level emission intensity.",
    tag: "Policy",
  },
  {
    icon: Factory,
    title: "3-in-1 ARS combination",
    desc: "Green steel, corrosion resistance, and product durability positioned together for responsible construction.",
    tag: "Product proof",
  },
];

const advantageCards = [
  {
    label: "Project value",
    title: "Additional FAR conversations",
    desc: "Green-building aligned material proof can support project positioning where local guidelines permit.",
  },
  {
    label: "Commercial confidence",
    title: "Capital subsidy readiness",
    desc: "Documented sustainability practices can support eligibility discussions where approved schemes apply.",
  },
  {
    label: "Finance story",
    title: "Lower financing friction",
    desc: "Responsible material selection can strengthen lender and investor conversations for sustainability-led projects.",
  },
  {
    label: "Brand trust",
    title: "Sustainable branding",
    desc: "Make responsible construction visible to buyers, communities, and project partners without compromising strength.",
  },
];

const resourceLinks = [
  { title: "ARS Green Steel logo", href: "/ars-green-steel.svg", type: "Brand asset" },
  { title: "Request ARS brochure", href: "/request-quote", type: "Sales support" },
  { title: "View CRS 550D proof", href: "/products/ars-crs-550d", type: "Product proof" },
];

export default function ArsGreenSteelPage() {
  return (
    <main className="min-h-screen bg-white text-ink-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/ARS-green-bg.png"
            alt="ARS Green Steel manufacturing facility"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.94)_0%,rgba(6,13,30,0.78)_46%,rgba(6,13,30,0.42)_100%)]" />
        </div>

        <div className="ars-container relative z-10 grid min-h-[60vh] items-center gap-10 py-14 md:py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.68fr)]">
          <div className="max-w-[760px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[12px] font-semibold text-white/72 backdrop-blur">
              <Leaf size={15} className="text-brand-red" />
              ARS Green Steel
            </div>
            <h1 className="font-display text-[clamp(3rem,6vw,5.7rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.045em] text-white">
              Green steel,
              <span className="block text-brand-red">proven—not promised.</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-[16px] leading-[1.8] text-white/72">
              ARS Green Steel brings recycled-route manufacturing, verified certification, and dependable
              550D strength into one responsible construction choice.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-quote"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request quote <ArrowRight size={16} />
              </Link>
              <Link
                href="#proof"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/28 px-7 py-4 text-[14px] font-semibold text-white transition hover:bg-white/10"
              >
                View proof
              </Link>
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/16 bg-white/[0.09] p-7 backdrop-blur-md">
            <div className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/48">
              ARS Green Steel impact
            </div>
            <div className="mt-5 divide-y divide-white/10">
              {heroStats.map((stat) => (
                <div key={stat.value} className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 py-5 first:pt-0 last:pb-0">
                  <div className="font-display text-[2rem] font-extrabold leading-none text-brand-red">
                    {stat.value}
                  </div>
                  <div className="self-center text-[14px] font-semibold text-white/74">{stat.label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <MotionSection id="what-is-green-steel" className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:items-center">
          <div>
            <SectionKicker>The concept</SectionKicker>
            <h2 className="section-title max-w-[620px]">Steel that builds India without burning it.</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.85] text-steel-700">
              <p>
                Green steel is an approach to manufacturing that focuses on reducing carbon emissions
                during the steel-making process. At ARS, that commitment runs alongside the same
                Fe-550D grade buyers already trust.
              </p>
              <p>
                The promise is simple: make sustainability easier to specify without asking engineers,
                contractors, or developers to compromise on strength, testing, or supply confidence.
              </p>
            </div>
            <ul className="mt-8 grid gap-3">
              {conceptPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[14px] font-semibold text-steel-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-red" size={17} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-surface-50 shadow-[0_24px_70px_rgba(13,43,110,0.12)]">
            <Image
              src="/ars-assets/right-about-us.png-compress.webp"
              alt="ARS production environment"
              width={820}
              height={620}
              className="aspect-[1.18/1] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-[16px] border border-white/24 bg-ink-950/60 px-5 py-4 text-white backdrop-blur-md">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/54">
                Build responsibly
              </div>
              <div className="mt-1 text-[15px] font-bold">EPD ready · green-building conversations</div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-20 md:py-24">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(360px,0.62fr)] lg:items-end">
            <div>
              <SectionKicker variant="light">The process</SectionKicker>
              <h2 className="section-title max-w-[640px] text-white">How green steel becomes project-ready.</h2>
            </div>
            <p className="max-w-[520px] text-[15px] leading-[1.8] text-white/62">
              ARS connects recycled-route production with testing, certification, product guidance, and
              buyer support, so sustainability is backed by usable proof.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-white/12 bg-white/[0.07] p-6 text-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/10 text-white">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-[1.5rem] font-extrabold text-brand-red/72">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-[1.15rem] font-bold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-white/60">{item.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[24px] bg-ink-950">
            <Image
              src="/ars-assets/ARSHOME4.jpg"
              alt="Steel production and sparks"
              width={1500}
              height={520}
              className="h-[320px] w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/86 via-ink-950/30 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-[420px] text-white">
              <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/45">
                ARS production
              </div>
              <h3 className="mt-3 font-display text-[1.9rem] font-bold leading-tight">
                Responsible production with steel-grade confidence.
              </h3>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="text-center">
            <SectionKicker align="center">Environmental impact</SectionKicker>
            <h2 className="section-title mx-auto max-w-[760px]">What makes ARS Green Steel different.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Leaf,
                value: "Lower carbon",
                label: "Production focus",
                desc: "Manufacturing approach focused on reducing carbon emissions through recycled-route production.",
              },
              {
                icon: Recycle,
                value: "Recycled",
                label: "Input route",
                desc: "High-quality recycled scrap supports cleaner production and responsible material sourcing.",
              },
              {
                icon: Zap,
                value: "EAF",
                label: "Technology direction",
                desc: "Electric Arc Furnace based production supports energy-efficient steel manufacturing.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.value}
                  className="rounded-[22px] border border-brand-blue/12 bg-white p-8 shadow-[0_18px_50px_rgba(13,43,110,0.05)]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-surface-50 text-brand-blue">
                      <Icon size={20} />
                    </div>
                    <div className="text-right">
                      <div className="font-display text-[2rem] font-extrabold leading-none text-brand-red">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-steel-400">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  <p className="mt-8 text-[14px] leading-[1.75] text-steel-700">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="proof" className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(360px,0.72fr)] lg:items-start">
            <div>
              <SectionKicker>Certifications</SectionKicker>
              <h2 className="section-title max-w-[640px]">Proof that holds up anywhere.</h2>
            </div>
            <p className="max-w-[560px] text-[15px] leading-[1.8] text-steel-700">
              Sustainability claims should not stay self-declared. ARS Green Steel brings the
              conversation closer to documentation, certification, and project submission support.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[22px] border border-brand-blue/12 bg-white">
            <div className="hidden grid-cols-[1.15fr_2fr_0.9fr] bg-brand-blue px-8 py-5 text-[12px] font-bold uppercase tracking-[0.18em] text-white/56 md:grid">
              <div>Certification</div>
              <div>What it supports</div>
              <div>Category</div>
            </div>
            {proofItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="grid gap-4 border-t border-surface-100 px-6 py-6 first:border-t-0 md:grid-cols-[1.15fr_2fr_0.9fr] md:px-8"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={18} className="text-brand-blue" />
                    <span className="font-display text-[1rem] font-bold text-ink-900">{item.title}</span>
                  </div>
                  <p className="text-[14px] leading-[1.65] text-steel-700">{item.desc}</p>
                  <div>
                    <span className="inline-flex rounded-full bg-surface-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(520px,0.9fr)] lg:items-center">
          <div>
            <SectionKicker>The bigger picture</SectionKicker>
            <h2 className="section-title max-w-[560px]">Why green steel matters for India.</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-[1.85] text-steel-700">
              <p>
                India&apos;s construction sector accounts for a significant share of national carbon
                emissions. As building volumes increase, the choice of steel becomes a climate decision,
                not just a structural one.
              </p>
              <p>
                Every tonne of ARS Green Steel used in a project is a tonne sourced with a stronger
                sustainability story and clearer documentation.
              </p>
            </div>
            <Link
              href="/about"
              className="focus-ring mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-brand-red"
            >
              Read our full story <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: FileCheck, value: "EPD", title: "Documentation", desc: "Project-ready reference support" },
              { icon: Recycle, value: "90%", title: "Recycled input", desc: "Recycled-route steel direction" },
              { icon: Zap, value: "35%", title: "Energy saving", desc: "Lower energy consumption context" },
              { icon: ShieldCheck, value: "5+", title: "Certifications", desc: "Third-party proof conversations" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-brand-blue/12 bg-surface-50 p-7"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-brand-blue">
                    <Icon size={20} />
                  </div>
                  <div className="font-display text-[2.35rem] font-extrabold leading-none text-brand-blue">
                    {item.value}
                  </div>
                  <h3 className="mt-2 font-display text-[1.12rem] font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-steel-500">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <SectionKicker>Project advantages</SectionKicker>
          <h2 className="section-title max-w-[680px]">Responsible steel with practical business value.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantageCards.map((card) => (
              <article key={card.title} className="rounded-[20px] border border-surface-100 bg-white p-6">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  {card.label}
                </div>
                <h3 className="mt-5 font-display text-[1.2rem] font-bold leading-tight text-ink-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.72] text-steel-600">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(420px,0.68fr)] lg:items-stretch">
          <div className="rounded-[24px] border border-surface-100 bg-surface-50 p-8 md:p-10">
            <SectionKicker>Files and downloads</SectionKicker>
            <h2 className="section-title">Useful ARS resources.</h2>
            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.8] text-steel-700">
              Use these resources as a starting point for brand, product, and project conversations.
              Final brochures and certificates can be connected when the client supplies approved files.
            </p>
            <div className="mt-8 grid gap-3">
              {resourceLinks.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="focus-ring flex items-center justify-between rounded-[14px] border border-surface-100 bg-white px-5 py-4 text-[13px] font-semibold text-brand-blue transition hover:border-brand-blue/40"
                >
                  <span className="flex items-center gap-3">
                    <Download size={16} />
                    {resource.title}
                  </span>
                  <span className="hidden text-[11px] uppercase tracking-[0.14em] text-steel-500 sm:inline">
                    {resource.type}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] bg-ink-950">
            <Image
              src="/ars-assets/products-all.png"
              alt="ARS product and support"
              width={760}
              height={640}
              className="h-full min-h-[420px] w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/38 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-brand-blue">
                <Phone size={20} />
              </div>
              <h3 className="font-display text-[1.65rem] font-bold text-white">Get support from ARS.</h3>
              <p className="mt-3 max-w-[420px] text-[14px] leading-[1.7] text-white/68">
                Speak to the ARS team for product, project, dealer, or quote support.
              </p>
              <a
                href="tel:+917934411111"
                className="focus-ring mt-5 inline-flex rounded-full bg-white px-5 py-3 text-[14px] font-bold text-brand-blue"
              >
                +91 7934 411111
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-brand-blue py-16 md:py-20">
        <div className="ars-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[540px]">
            <SectionKicker variant="light">Build greener</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              Ready to specify <span className="text-brand-red">green steel?</span>
            </h2>
            <p className="mt-4 max-w-[460px] text-[14px] leading-[1.8] text-white/68">
              Talk to our team about incorporating ARS Green Steel into your next project, with
              certification documentation included.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products/ars-550d"
              className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              View ARS 550D <ArrowRight size={15} />
            </Link>
            <Link
              href="/green-steel"
              className="focus-ring inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
            >
              Our sustainability story
            </Link>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
