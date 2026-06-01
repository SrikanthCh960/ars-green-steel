import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  ClipboardList,
  DollarSign,
  Factory,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AudiencePaths } from "@/components/audience-paths";
import { AnimatedHeroWord } from "@/components/animated-hero-word";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SiteHeader } from "@/components/site-header";
import { verifiedContactDetails } from "@/data/business-verification";

const credibilityMetrics = [
  {
    kicker: "building trust since",
    value: "32",
    suffix: "yrs",
    label: "Trusted by home builders, engineers, dealers, and contractors.",
  },
  {
    kicker: "steel making capacity",
    value: "2.5L",
    suffix: "MT",
    label: "Capacity built for reliable supply and regional demand.",
  },
  {
    kicker: "high-strength grade",
    value: "550D",
    suffix: "",
    label: "Ductile TMT steel for safer residential and commercial structures.",
  },
  {
    kicker: "quality and network proof",
    value: "SGS",
    suffix: "+",
    label: "Certification, green credentials, and dealer reach surfaced upfront.",
  },
];

const products = [
  {
    name: "ARS 550D",
    eyebrow: "Core TMT range",
    detail: "High ductility TMT bars for safer residential and commercial construction.",
    tags: ["Superior bendability", "Consistent rib pattern", "Tested strength"],
    stat: "550D",
    statLabel: "High-strength ductile grade",
    specs: ["Physical properties", "Chemical properties", "TMT process FAQ"],
    image: "/ars-assets/TMT-Bars.png",
  },
  {
    name: "ARS CRS 550D",
    eyebrow: "Corrosion resistant",
    detail: "Corrosion-resistant steel for coastal, humid, and durability-focused projects.",
    tags: ["CRS protection", "Longer life", "Ideal for exposed zones"],
    stat: "CRS",
    statLabel: "Built for exposed and coastal conditions",
    specs: ["CRS benefits", "Corrosion resistance FAQ", "Application guidance"],
    image: "/ars-assets/CRS.png",
  },
];

const buyingActions = [
  {
    title: "Check price",
    detail: "View today's TMT steel price with regional context before calling sales.",
    href: "#actions",
    icon: DollarSign,
  },
  {
    title: "Calculate steel",
    detail: "Estimate requirement by project type, bar size, and quantity.",
    href: "#actions",
    icon: Calculator,
  },
  {
    title: "Find dealer",
    detail: "Search nearby ARS dealers and move from enquiry to supply faster.",
    href: "#actions",
    icon: MapPin,
  },
  {
    title: "Request quote",
    detail: "Share your project need and let the ARS team guide the next step.",
    href: "#contact",
    icon: ClipboardList,
  },
];

const toolRecovery = [
  {
    title: "Steel price today",
    detail: "Recover the legacy price journey with product, state, city, rod size, bundle, rod, weight, and booking context.",
    points: ["8mm to 32mm price rows", "Regional price context", "Booking details path"],
    icon: DollarSign,
  },
  {
    title: "TMT calculator",
    detail: "Bring back the requirement calculator for building type, category, floors, area, and steel estimate output.",
    points: ["Area and floor inputs", "Requirement estimate", "Quote-ready output"],
    icon: Calculator,
  },
  {
    title: "Dealer locator",
    detail: "Preserve the retailer network journey so buyers can move from product interest to nearby supply faster.",
    points: ["Location-led discovery", "Dealer contact path", "Retail support CTA"],
    icon: MapPin,
  },
];

const rodSizes = ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"];

const proofAssets = [
  "SGS certified quality assurance",
  "ISO 9001 / 14001 / 45001 systems",
  "EPD, GRIHA, and green-building readiness",
  "PWD, NHAI, and renewal proof to verify before launch",
];

const qualityProof = [
  "SGS certification and quality checks visible before the pitch.",
  "Grade clarity for engineers, contractors, and procurement teams.",
  "Dealer-ready proof that supports local purchase confidence.",
];

const contactProof = [
  {
    title: "Customer helpline",
    detail: verifiedContactDetails.mobile,
    icon: Phone,
  },
  {
    title: "Office and plant proof",
    detail: "Corporate office and steel plant details restored from the old ARS website.",
    icon: Building2,
  },
  {
    title: "Project enquiry",
    detail: `${verifiedContactDetails.mobile} for project-led conversations and sales support.`,
    icon: ClipboardList,
  },
];

const legacyClientProof = [
  "Akshaya",
  "Baashyaam",
  "Foxconn",
  "VGN",
  "RCCL",
  "Noah",
  "Rohaan",
  "Sathyamoorthy",
  "Steelax",
];

const legacyTestimonials = [
  {
    name: "Vijay",
    role: "Happy customer",
    quote: "Original site testimonial retained for client verification before publishing final quote copy.",
  },
  {
    name: "Raja",
    role: "Happy customer",
    quote: "Legacy customer proof should be migrated with approved names, location, and source context.",
  },
  {
    name: "Murthy",
    role: "Happy customer",
    quote: "Customer feedback belongs near product and dealer journeys once authenticity is confirmed.",
  },
  {
    name: "Prabhu",
    role: "Happy customer",
    quote: "The old homepage used customer voices; the redesign keeps the section ready without inventing copy.",
  },
];

const blogPreview = [
  "What is CRS Steel",
  "How Green Steel is Produced",
  "TMT Bars vs HYSD Bars",
  "House Construction Process in India",
  "Corrosion Resistant TMT Bars",
  "Why Green Steel Matters",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <section className="relative flex min-h-screen w-screen items-center overflow-hidden text-white">
        <div className="absolute inset-0 h-screen w-screen bg-ink-950">
          <div className="hero-video-placeholder absolute inset-0 h-full w-full" />
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-82"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/ars-intro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/72 to-ink-950/20" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,14,0.16),rgba(11,13,14,0.84))]" />
        </div>
        <div className="ars-container relative z-10 flex min-h-screen flex-col justify-end pb-12 pt-28">
          <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(300px,0.28fr)] lg:items-end">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-grey-300 backdrop-blur">
                <span className="size-2 rounded-full bg-brand-blue" />
                Since 1992 · Certified TMT steel
              </div>
              <h1 className="max-w-[980px] font-display text-[clamp(2.8rem,7.6vw,7.7rem)] font-black uppercase leading-[0.93] tracking-normal text-white">
                We Build
                <AnimatedHeroWord />
                Structures.
              </h1>
            </div>
            <div className="max-w-sm justify-self-start lg:justify-self-end">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-grey-300 backdrop-blur">
                <ShieldCheck size={16} className="shrink-0 text-brand-blue" />
                Certified TMT steel for modern construction
              </div>
              <p className="text-base leading-8 text-grey-300">
                Tested, traceable TMT steel for home owners, engineers, contractors, and dealers:
                price clarity, product proof, steel calculation, and dealer discovery in one flow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark" href="#buying-assistant">
                  Check today’s price <ArrowRight size={18} />
                </a>
                <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900" href="#products">
                  Explore products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-[#f8f9fb] py-24" id="actions">
        <div className="ars-container">
          <div className="mb-16">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-brand-blue" />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-steel-700">
                Track record
              </p>
            </div>
            <h2 className="max-w-6xl font-display text-[clamp(2.7rem,6.6vw,7.8rem)] font-black uppercase leading-[0.9] tracking-normal text-ink-900">
              Proof,
              <span className="mx-4 font-serif italic font-bold text-[#F76369]">not</span>
              promises.
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,680px)_auto] lg:items-center lg:justify-between">
              <p className="max-w-3xl text-lg leading-8 text-steel-700">
                ARS should guide visitors through the real decision path: price, requirement,
                dealer, and sales contact with proof visible before the pitch.
              </p>
              <a
                className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full border border-ink-900/24 px-7 text-xs font-bold uppercase tracking-[0.24em] text-ink-900 transition hover:border-brand-blue hover:text-brand-blue"
                href="#buying-assistant"
              >
                Start flow <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mb-10 grid border-y border-ink-900/14 md:grid-cols-4">
            {credibilityMetrics.map((metric) => (
              <article
                key={metric.kicker}
                className="border-b border-ink-900/14 px-0 py-9 md:border-b-0 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0"
              >
                <div className="mb-7 flex items-center gap-2">
                  <span className="text-brand-blue">→</span>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-grey-600">
                    {metric.kicker}
                  </p>
                </div>
                <div className="flex items-end gap-3">
                  <p className="font-display text-[clamp(4.8rem,7vw,8.4rem)] font-black leading-none text-ink-900">
                    {metric.value}
                  </p>
                  {metric.suffix ? (
                    <p className="pb-4 font-serif text-4xl italic leading-none text-[#F76369]">
                      {metric.suffix}
                    </p>
                  ) : null}
                </div>
                <p className="mt-6 max-w-xs text-base leading-7 text-steel-700">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {["SGS certified", "ISO quality systems", "EPD / GRIHA / LEED ready", "Dealer network"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[8px] border border-ink-900/10 bg-white px-5 py-4">
                <BadgeCheck size={18} className="text-green-steel" />
                <span className="text-sm font-bold text-steel-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="buying-assistant">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.74fr_0.26fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Buying assistant
                </p>
              </div>
              <h2 className="max-w-5xl font-display text-[clamp(2.35rem,5.4vw,6.2rem)] font-black uppercase leading-[0.94] tracking-normal text-ink-900">
                The fastest route from enquiry to steel.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              Choose the path you need: price clarity, quantity planning, dealer discovery,
              or direct quote support.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {buyingActions.map((action) => {
              const Icon = action.icon;

              return (
                <a
                  key={action.title}
                  className="focus-ring group flex min-h-[250px] flex-col justify-between rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-7 transition hover:-translate-y-1 hover:border-brand-blue/35 hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.1)]"
                  href={action.href}
                >
                  <div>
                    <span className="mb-10 inline-flex size-14 items-center justify-center rounded-[8px] bg-white text-brand-blue ring-1 ring-ink-900/8 group-hover:bg-brand-blue group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display text-3xl font-black tracking-normal text-ink-900">
                      {action.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-steel-700">{action.detail}</p>
                  </div>
                  <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                    Start flow <ArrowRight size={17} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f8f9fb] py-24" id="critical-tools">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Critical buyer content
                </p>
              </div>
              <h2 className="max-w-5xl font-display text-[clamp(2.25rem,5.2vw,6rem)] font-black uppercase leading-[0.94] tracking-normal text-ink-900">
                Price, quantity, dealer, quote.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              The old site carried high-intent tools. The redesign now surfaces their required
              content clearly, ready for the functional pages and verified data source.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {toolRecovery.map((tool) => {
              const Icon = tool.icon;

              return (
                <article
                  key={tool.title}
                  className="rounded-[8px] border border-ink-900/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="inline-flex size-14 items-center justify-center rounded-[8px] bg-[#f8f9fb] text-brand-blue ring-1 ring-ink-900/8">
                      <Icon size={22} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-grey-600">
                      Recovered
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-black tracking-normal text-ink-900">
                    {tool.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-steel-700">{tool.detail}</p>
                  <div className="mt-8 grid gap-3">
                    {tool.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                        <BadgeCheck size={17} className="shrink-0 text-green-steel" />
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#fffdfa] py-24" id="products">
        <div className="ars-container">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_460px] lg:items-end">
            <div>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Product range
                </p>
              </div>
              <h2 className="max-w-6xl font-display text-[clamp(2.45rem,5.8vw,6.8rem)] font-black uppercase leading-[0.92] tracking-normal text-ink-900">
                Steel made for
                <span className="mx-4 font-serif italic font-bold text-[#F76369]">real</span>
                structures.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              Product pages should feel technical and trustworthy, with grade data,
              applications, certifications, and proof visible before the brochure copy.
            </p>
          </div>

          <div className="border-y border-ink-900/14">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="grid gap-8 border-b border-ink-900/14 py-10 last:border-b-0 lg:grid-cols-[0.7fr_1.1fr_0.7fr] lg:items-center"
              >
                <div>
                  <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-grey-600">
                    <span className="text-[#F76369]">0{index + 1}</span>
                    {product.eyebrow}
                  </div>
                  <h3 className="font-display text-4xl font-black uppercase tracking-normal text-ink-900 sm:text-5xl">
                    {product.name}
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_1fr]">
                  <div className="min-h-[240px] overflow-hidden rounded-[8px] bg-white">
                    <Image
                      src={product.image}
                      alt={`${product.name} ARS product photograph`}
                      width={620}
                      height={420}
                      className="h-full w-full object-contain p-6"
                    />
                  </div>
                  <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
                    <Factory size={22} className="text-brand-blue" />
                    <p className="mt-8 text-lg leading-8 text-steel-700">{product.detail}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-xs font-bold text-steel-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 border-t border-ink-900/10 pt-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">
                        Critical proof to restore
                      </p>
                      <div className="grid gap-3">
                        {product.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                            <ShieldCheck size={16} className="shrink-0 text-green-steel" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:border-l lg:border-ink-900/14 lg:pl-6">
                  <p className="font-display text-[clamp(4rem,6vw,7rem)] font-black leading-none text-ink-900">
                    {product.stat}
                  </p>
                  <p className="mt-5 max-w-xs text-base leading-7 text-steel-700">{product.statLabel}</p>
                  <a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue" href="#products">
                    View details <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="size-guide">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.74fr_0.26fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Rod size guide
                </p>
              </div>
              <h2 className="max-w-5xl font-display text-[clamp(2.25rem,5.2vw,6rem)] font-black uppercase leading-[0.94] tracking-normal text-ink-900">
                Every size needs a clear job.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              The legacy site had high-value SEO pages for each rod size. This section restores the
              complete size range and points it toward product, price, and calculator journeys.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-7">
            {rodSizes.map((size) => (
              <article
                key={size}
                className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-5 transition hover:border-brand-blue/35 hover:bg-white"
              >
                <Ruler size={20} className="mb-8 text-brand-blue" />
                <h3 className="font-display text-3xl font-black tracking-normal text-ink-900">{size}</h3>
                <p className="mt-4 text-sm leading-6 text-steel-700">
                  Use cases, weight, FAQ, price link, and calculator path to be carried into the
                  product size experience.
                </p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <AudiencePaths />

      <MotionSection className="bg-white py-24" id="quality">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-8">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-brand-blue" />
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                    Quality and manufacturing
                  </p>
                </div>
                <h2 className="max-w-3xl font-display text-[clamp(2.35rem,4.8vw,5.6rem)] font-black uppercase leading-[0.94] tracking-normal text-ink-900">
                  Proof built into every decision.
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-steel-700">
                  ARS should make quality, certification, and manufacturing confidence visible
                  before a visitor reaches the sales conversation.
                </p>
              </div>
              <a className="focus-ring mt-10 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark" href="#contact">
                Request technical support <ArrowRight size={17} />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="min-h-[380px] overflow-hidden rounded-[8px] bg-white">
                <Image
                  src="/ars-assets/our-quality-1.png"
                  alt="ARS quality and testing source photograph"
                  width={680}
                  height={780}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-5">
                {qualityProof.map((item, index) => (
                  <article key={item} className="rounded-[8px] border border-ink-900/10 bg-white p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue">
                        0{index + 1}
                      </span>
                      <ShieldCheck size={20} className="text-green-steel" />
                    </div>
                    <p className="text-lg font-semibold leading-8 text-ink-900">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f8f9fb] py-24" id="proof-assets">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Certificates and contact proof
                </p>
              </div>
              <h2 className="max-w-4xl font-display text-[clamp(2.2rem,4.8vw,5.6rem)] font-black uppercase leading-[0.94] tracking-normal text-ink-900">
                Make verification easy.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-steel-700">
                Certification, contact, and project proof should be visible before the pitch,
                especially for engineers, contractors, dealers, and procurement teams.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-4 md:grid-cols-2">
                {proofAssets.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[8px] border border-ink-900/10 bg-white p-5">
                    <BadgeCheck size={19} className="shrink-0 text-green-steel" />
                    <span className="text-base font-semibold leading-7 text-ink-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {contactProof.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title} className="rounded-[8px] border border-ink-900/10 bg-white p-5">
                      <Icon size={21} className="text-brand-blue" />
                      <h3 className="mt-7 font-display text-xl font-black tracking-normal text-ink-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-steel-700">{item.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="legacy-proof">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Legacy proof recovered
                </p>
              </div>
              <h2 className="max-w-5xl font-display text-[clamp(2.25rem,5.2vw,6rem)] font-black uppercase leading-[0.94] tracking-normal text-ink-900">
                Clients, customers, awards, articles.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              The original homepage included valuable clients, happy customers, awards,
              certificates, and blog previews. Those business signals are now preserved in the
              structure and ready for final approved assets.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {legacyClientProof.map((client) => (
                  <div key={client} className="flex min-h-24 items-center justify-center rounded-[8px] border border-ink-900/10 bg-white px-4 text-center text-sm font-black uppercase tracking-[0.14em] text-steel-700">
                    {client}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-steel-700">
                Client logos existed on the source site. Until logo files are available locally,
                names are retained as content placeholders without inventing logo art.
              </p>
            </div>

            <div className="grid gap-5">
              <article className="overflow-hidden rounded-[8px] border border-ink-900/10 bg-white">
                <div className="grid grid-cols-2">
                  <Image src="/ars-assets/awards-certificates-img2.png" alt="ARS award certificate source asset" width={420} height={260} className="h-44 w-full object-cover" />
                  <Image src="/ars-assets/awards-certificates-img3.png" alt="ARS award certificate source asset" width={420} height={260} className="h-44 w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl font-black tracking-normal text-ink-900">
                    Certificates and awards
                  </h3>
                  <p className="mt-4 text-base leading-7 text-steel-700">
                    EPD, GRIHA, LEED, SGS, ABP, STEELEX, and certification proof from the old site
                    remain part of the homepage trust story.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="grid gap-4 rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6 sm:grid-cols-2">
              {legacyTestimonials.map((item) => (
                <article key={item.name} className="rounded-[8px] border border-ink-900/10 bg-white p-5">
                  <p className="text-base leading-7 text-steel-700">“{item.quote}”</p>
                  <p className="mt-5 font-display text-xl font-black text-ink-900">{item.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">{item.role}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
              <h3 className="font-display text-3xl font-black tracking-normal text-ink-900">
                Blog preview restored
              </h3>
              <div className="mt-6 grid gap-3">
                {blogPreview.map((item) => (
                  <Link key={item} href="/blog.html" className="flex items-center justify-between rounded-[8px] border border-ink-900/10 bg-white px-4 py-3 text-sm font-bold text-steel-700 transition hover:border-brand-blue hover:text-brand-blue">
                    {item}
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <ContactCta primaryHref="#buying-assistant" />
    </main>
  );
}
