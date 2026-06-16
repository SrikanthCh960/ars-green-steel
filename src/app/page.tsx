import {
  ArrowRight,
  Atom,
  BadgeCheck,
  Calculator,
  ClipboardList,
  Download,
  IndianRupee,
  MapPin,
  RefreshCw,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AudienceJourneySection } from "@/components/audience-journey-section";
import { ContactCta } from "@/components/contact-cta";
import { HomeHero } from "@/components/home-hero";
import { MotionSection } from "@/components/motion-section";
import { SiteHeader } from "@/components/site-header";

const buyingActions = [
  {
    title: "Check price",
    detail: "View the prepared TMT steel price journey before speaking with sales.",
    href: "/steel-price-today",
    icon: IndianRupee,
  },
  {
    title: "Calculate steel",
    detail: "Estimate requirement by project type, built-up area, floors, and bar size.",
    href: "/tmt-calculator",
    icon: Calculator,
  },
  {
    title: "Find dealer",
    detail: "Move from product interest to nearby ARS dealer discovery.",
    href: "/dealer-locator",
    icon: MapPin,
  },
  {
    title: "Request quote",
    detail: "Share project needs and let the ARS team guide the next step.",
    href: "/request-quote",
    icon: ClipboardList,
  },
];

const products = [
  {
    name: "ARS 550D",
    eyebrow: "Core TMT range",
    detail: "High-strength ductile TMT bars for residential, commercial, and everyday structural work.",
    href: "/products/ars-550d",
    brochureHref: "/legacy-assets/downloads/ARS-550D-CRS-Leaflets.pdf",
    image: "/ars-assets/TMT-Bars.png",
    points: ["550D strength grade", "Reliable bendability", "Engineer-ready product proof"],
  },
  {
    name: "ARS CRS 550D",
    eyebrow: "Corrosion resistant",
    detail: "CRS steel for coastal, humid, exposed, and durability-focused construction conditions.",
    href: "/products/ars-crs-550d",
    brochureHref: "/legacy-assets/downloads/ARS-550D-CRS-Leaflets.pdf",
    image: "/ars-assets/CRS.png",
    points: ["Corrosion resistance", "Longer service confidence", "Ideal for exposed zones"],
  },
];

const certificateCards = [
  {
    label: "SGS certified",
    detail: "Third-party quality proof",
    image: "/ars-assets/awards-certificates-img3.png",
  },
  {
    label: "ISO quality systems",
    detail: "Process-led manufacturing confidence",
    image: "/ars-assets/awards-certificates-img2.png",
  },
  {
    label: "EPD ready",
    detail: "Documentation for green projects",
  },
  {
    label: "GRIHA / LEED ready",
    detail: "Built for sustainable construction",
  },
  {
    label: "BIS certified",
    detail: "Standards-led product assurance",
  },
  {
    label: "IS 1786:2008",
    detail: "TMT steel specification proof",
  },
  {
    label: "550D TMT steel",
    detail: "High-strength ductile grade",
  },
  {
    label: "CRS product range",
    detail: "Corrosion-resistant steel proof",
  },
];

const partnerCards = [
  "Akshaya",
  "Baashyaam",
  "Foxconn",
  "VGN",
  "RCCL",
  "Noah",
  "Rohaan",
  "Sathyamoorthy",
  "Steelax",
  "Dealer network",
  "Made in India",
  "Builder partners",
];

const greenSteelFeatures = [
  {
    title: "Lower Carbon Footprint",
    text: "Our process emits 40% less CO2 than traditional blast furnace steelmaking.",
    icon: Atom,
  },
  {
    title: "Recycled Scrap-Based Production",
    text: "100% of our input comes from high-quality recycled scrap, preserving natural iron ore.",
    icon: RefreshCw,
  },
  {
    title: "Energy Efficient Processes",
    text: "Advanced electric arc furnaces consume significantly less energy per tonne of steel produced.",
    icon: Zap,
  },
];

const testimonials = [
  {
    name: "Vijay",
    role: "ARS customer",
    quote: "The buying journey should make price, dealer access, and quality proof easy to understand before enquiry.",
  },
  {
    name: "Raja",
    role: "ARS customer",
    quote: "Clear product guidance and practical support help customers move faster from planning to purchase.",
  },
  {
    name: "Murthy",
    role: "ARS customer",
    quote: "Strong steel decisions need trust, availability, and the right technical proof in one place.",
  },
  {
    name: "Prabhu",
    role: "ARS customer",
    quote: "A good steel brand should make it simple to choose the right product and reach the right team.",
  },
];

const blogs = [
  {
    title: "What is CRS Steel?",
    href: "/blog/corrosion-resistance-steel.html",
    category: "Product knowledge",
  },
  {
    title: "How Green Steel is Produced",
    href: "/ars-green-steel",
    category: "Sustainability",
  },
  {
    title: "TMT Bars vs HYSD Bars",
    href: "/blog/everything-about-hysd-bars.html",
    category: "Construction guide",
  },
  {
    title: "House Construction Cost in India",
    href: "/blog/average-house-construction-cost-in-india-per-square-feet.html",
    category: "Planning",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <HomeHero />

      <AudienceJourneySection />

      <MotionSection className="bg-[#071222] py-24 text-white" id="buying-assistant">
        <div className="ars-container">
          <div className="mb-12 max-w-4xl">
            <div className="section-kicker-row">
              <span className="section-kicker-line" />
              <p className="section-kicker section-kicker-light">
                Fastest route
              </p>
            </div>
            <h2 className="section-title section-title-light">
              From enquiry to steel in fewer steps.
            </h2>
            <p className="section-copy section-copy-light">
              Give every buyer a practical next action: check price, calculate requirement,
              find a dealer, or request a quote.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {buyingActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  className="focus-ring group flex min-h-[260px] flex-col justify-between rounded-[8px] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:bg-white/[0.08]"
                  href={action.href}
                >
                  <div>
                    <span className="mb-10 inline-flex size-14 items-center justify-center rounded-[8px] bg-white/8 text-white ring-1 ring-white/10 transition duration-300 group-hover:bg-brand-blue group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h2 className="font-display text-2xl font-bold tracking-normal text-white">{action.title}</h2>
                    <p className="mt-5 text-base leading-7 text-slate-300">{action.detail}</p>
                  </div>
                  <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-white">
                    Start flow <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#fffdfa] py-16 lg:min-h-[90vh] lg:py-18" id="products">
        <div className="ars-container flex min-h-[calc(90vh-96px)] flex-col justify-center">
          <div className="mb-8 max-w-4xl lg:mb-10">
            <div className="section-kicker-row">
              <span className="section-kicker-line" />
              <p className="section-kicker">
                Product range
              </p>
            </div>
            <h2 className="section-title">
              Two product paths for stronger structures.
            </h2>
            <p className="section-copy">
              Keep product choice simple: standard high-strength TMT for everyday structures, or
              corrosion-resistant steel for exposed conditions.
            </p>
          </div>

          <div className="grid gap-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="group grid overflow-hidden rounded-[12px] border border-ink-900/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/45 hover:shadow-[0_22px_72px_rgba(0,75,155,0.1)] lg:grid-cols-[260px_minmax(0,1fr)_220px]"
              >
                <div className="flex min-h-[180px] items-center justify-center bg-[#f8f9fb] p-6 lg:min-h-[216px]">
                  <Image
                    src={product.image}
                    alt={`${product.name} product`}
                    width={360}
                    height={260}
                    className="max-h-[150px] w-full object-contain transition duration-500 group-hover:scale-105 lg:max-h-[170px]"
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-center p-6 lg:p-8">
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">
                    {product.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(2rem,3vw,3.15rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700 lg:text-lg lg:leading-8">
                    {product.detail}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {product.points.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-sm font-semibold leading-5 text-steel-700">
                        <BadgeCheck size={16} className="mt-0.5 shrink-0 text-green-steel" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3 border-t border-ink-900/10 p-6 lg:border-l lg:border-t-0 lg:p-8">
                  <Link
                    className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                    href={product.href}
                  >
                    View product <ArrowRight size={17} />
                  </Link>
                  <Link
                    className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-brand-blue/30 bg-white px-5 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-[#f2f7ff]"
                    href={product.brochureHref}
                    download
                  >
                    <Download size={17} />
                    Brochure
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 rounded-[12px] border border-ink-900/10 bg-white/70 p-5 lg:grid-cols-3">
            {["Grade clarity", "Application fit", "Proof-led selection"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-steel-700">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-brand-blue">
                  <BadgeCheck size={17} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="trusted-by">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Trusted network"
            title="Trusted by builders, partners, and institutions."
            body="A single proof section keeps certification, partner, and brand signals together without splitting the story into competing logo blocks."
          />

          <div className="grid gap-7">
            <div>
              <p className="mb-4 font-technical text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                Certificates
              </p>
              <div className="marquee-frame">
                <div className="marquee-track marquee-left">
                  {[...certificateCards, ...certificateCards].map((item, index) => (
                    <article
                      key={`${item.label}-${index}`}
                      className="marquee-card min-w-[280px] border border-ink-900/10 bg-[#f8f9fb]"
                      aria-hidden={index >= certificateCards.length}
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={`${item.label} ARS proof`}
                          width={260}
                          height={150}
                          className="mb-5 h-24 w-full rounded-[6px] object-cover"
                        />
                      ) : (
                        <span className="mb-5 inline-flex size-12 items-center justify-center rounded-[8px] bg-white text-brand-blue ring-1 ring-ink-900/8">
                          <BadgeCheck size={22} />
                        </span>
                      )}
                      <h3 className="font-display text-xl font-bold tracking-normal text-ink-900">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-steel-700">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 font-technical text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                Partners
              </p>
              <div className="marquee-frame">
                <div className="marquee-track marquee-right">
                  {[...partnerCards, ...partnerCards].map((partner, index) => (
                    <article
                      key={`${partner}-${index}`}
                      className="marquee-card flex min-h-[132px] min-w-[260px] items-center justify-center border border-ink-900/10 bg-white text-center shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
                      aria-hidden={index >= partnerCards.length}
                    >
                      <h3 className="font-technical text-base font-black uppercase tracking-[0.12em] text-ink-900">
                        {partner}
                      </h3>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#07351f] py-24 text-white" id="ars-green-steel">
        <div className="ars-container">
          <div className="mx-auto max-w-5xl text-center">
            <div className="section-kicker-row justify-center">
              <span className="section-kicker-line section-kicker-line-green" />
              <p className="section-kicker section-kicker-green">
                ARS Green Steel
              </p>
              <span className="section-kicker-line section-kicker-line-green" />
            </div>
            <h2 className="section-title section-title-light mx-auto">
              What Makes ARS Green Steel Different?
            </h2>
            <p className="section-copy section-copy-light mx-auto mt-6 max-w-3xl">
              Pioneering sustainable steel manufacturing for a greener India through lower-emission practices,
              recycled inputs, and energy-efficient process thinking.
            </p>
            <Link
              className="focus-ring mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-[6px] border border-emerald-300/30 px-5 text-sm font-bold text-emerald-200 transition hover:border-white/45 hover:bg-white hover:text-[#07351f]"
              href="/ars-green-steel"
            >
              Learn more about Green Steel <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {greenSteelFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[8px] border border-emerald-300/12 bg-white/[0.055] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
                >
                  <span className="inline-flex size-14 items-center justify-center rounded-[8px] bg-emerald-300/12 text-emerald-300 ring-1 ring-emerald-300/10">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-bold tracking-normal text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-emerald-50/68">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f8f9fb] py-24" id="testimonials">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Happy clients"
            title="Customer confidence, shaped into a cleaner story."
            body="The homepage keeps a dedicated testimonial slider area ready for approved customer proof while preserving a polished browsing experience."
          />

          <div className="flex snap-x gap-5 overflow-x-auto pb-4">
            {testimonials.map((item) => (
              <article key={item.name} className="min-w-[320px] snap-start rounded-[8px] border border-ink-900/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)] md:min-w-[430px]">
                <p className="text-5xl leading-none text-brand-blue">“</p>
                <p className="mt-6 text-xl leading-9 text-steel-700">{item.quote}</p>
                <div className="mt-10 flex items-center gap-3 border-t border-ink-900/10 pt-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold text-ink-900">{item.name}</p>
                    <p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="blogs">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Knowledge center"
            title="Guides for better steel decisions."
            body="Educational content supports SEO while helping buyers understand products, pricing, durability, and construction planning."
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {blogs.map((blog) => (
              <Link key={blog.title} href={blog.href} className="focus-ring group flex min-h-[250px] flex-col justify-between rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6 transition hover:-translate-y-1 hover:border-brand-blue/35 hover:bg-white">
                <div>
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">{blog.category}</p>
                  <h2 className="mt-7 font-display text-2xl font-bold tracking-normal text-ink-900">{blog.title}</h2>
                </div>
                <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                  Read article <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <ContactCta />
    </main>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mb-12 max-w-4xl">
      <div>
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-brand-blue" />
          <p className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
        </div>
        <h2 className="max-w-4xl font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
          {title}
        </h2>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">{body}</p>
    </div>
  );
}
