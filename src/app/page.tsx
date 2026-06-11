import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  ClipboardList,
  DollarSign,
  Factory,
  Home as HomeIcon,
  MapPin,
  ShieldCheck,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeroWord } from "@/components/animated-hero-word";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SiteHeader } from "@/components/site-header";

const audienceCards = [
  {
    title: "Home owners",
    body: "Build safer homes with certified ARS steel.",
    href: "/tmt-steel-bar-guide-homeowners",
    cta: "Explore guide",
    image: "/ars-assets/home-owner-banner-1.png",
    icon: HomeIcon,
  },
  {
    title: "Engineers",
    body: "Technical specifications, testing, and certifications.",
    href: "/tmt-steel-bar-guide-engineers-architects",
    cta: "View technical hub",
    image: "/ars-assets/our-quality-1.png",
    icon: ShieldCheck,
  },
  {
    title: "Dealers",
    body: "Grow local demand with ARS support.",
    href: "/steel-distributors-dealers",
    cta: "Dealer network",
    image: "/ars-assets/Contact_banner.png",
    icon: Store,
  },
  {
    title: "Contractors",
    body: "Project pricing, quantity planning, and support.",
    href: "/tmt-steel-bar-guide-civil-contractors",
    cta: "Contractor solutions",
    image: "/ars-assets/ARSHOME4.jpg",
    icon: Factory,
  },
];

const audienceStats = [
  {
    value: "50,000+",
    label: "Homes built safer",
    detail: "With ARS steel",
    icon: HomeIcon,
  },
  {
    value: "500+",
    label: "Certified projects",
    detail: "Engineered with trust",
    icon: ShieldCheck,
  },
  {
    value: "1000+",
    label: "Dealer network",
    detail: "Growing together",
    icon: Store,
  },
  {
    value: "200+",
    label: "Infrastructure projects",
    detail: "Building the nation",
    icon: Factory,
  },
];

const buyingActions = [
  {
    title: "Check price",
    detail: "View the prepared TMT steel price journey before speaking with sales.",
    href: "/steel-price-today",
    icon: DollarSign,
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
    image: "/ars-assets/TMT-Bars.png",
    points: ["550D strength grade", "Reliable bendability", "Engineer-ready product proof"],
  },
  {
    name: "ARS CRS 550D",
    eyebrow: "Corrosion resistant",
    detail: "CRS steel for coastal, humid, exposed, and durability-focused construction conditions.",
    href: "/products/ars-crs-550d",
    image: "/ars-assets/CRS.png",
    points: ["Corrosion resistance", "Longer service confidence", "Ideal for exposed zones"],
  },
];

const trustItems = [
  "SGS certified",
  "ISO quality systems",
  "EPD ready",
  "GRIHA / LEED ready",
  "Dealer network",
  "Made in India",
  "550D TMT steel",
  "CRS product range",
];

const clientNames = ["Akshaya", "Baashyaam", "Foxconn", "VGN", "RCCL", "Noah", "Rohaan", "Sathyamoorthy", "Steelax"];

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
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="relative flex min-h-screen w-full items-center overflow-hidden text-white">
        <div className="absolute inset-0 h-screen w-full bg-ink-950">
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
                <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark" href="/steel-price-today">
                  Check today&apos;s price <ArrowRight size={18} />
                </Link>
                <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900" href="#products">
                  Explore products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-24" id="audiences">
        <div className="ars-container">
          <div className="mb-11 flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-brand-blue" />
                <p className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Audience paths
                </p>
              </div>
              <h2 className="font-display text-[clamp(2.15rem,3.6vw,4.25rem)] font-bold leading-[1.02] tracking-normal text-[#001a44]">
                Choose Your ARS Journey
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">
                Find the right steel solutions based on your project needs.
              </p>
            </div>

            <Link
              href="/industries"
              className="focus-ring group inline-flex h-14 w-fit items-center gap-4 rounded-full border border-brand-blue px-6 text-sm font-bold text-brand-blue transition duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:shadow-[0_16px_40px_rgba(0,75,155,0.18)]"
            >
              See all solutions
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-blue text-white transition duration-300 group-hover:bg-white group-hover:text-brand-blue group-hover:rotate-45">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          <div className="audience-card-grid grid gap-5">
            {audienceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="audience-card focus-ring group relative h-[440px] overflow-hidden rounded-[16px] bg-ink-950 p-6 text-white shadow-[0_22px_64px_rgba(15,23,42,0.14)] lg:h-[520px]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} ARS journey`}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 36vw, 100vw" : "(min-width: 1024px) 20vw, 100vw"}
                    className="object-cover opacity-88"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,26,68,0.02)_0%,rgba(0,26,68,0.18)_42%,rgba(0,22,58,0.94)_100%)]" />

                  <span className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-[#001a44] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                    <ArrowRight size={19} />
                  </span>

                  <div className="relative flex h-full flex-col justify-end">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-white shadow-[0_12px_30px_rgba(0,75,155,0.24)]">
                      <Icon size={17} />
                      <p className="font-technical text-xs font-bold uppercase tracking-[0.08em]">{item.title}</p>
                    </div>

                    <h3 className="max-w-sm font-display text-[clamp(1.55rem,2vw,2.35rem)] font-bold leading-[1.12] tracking-normal">
                      {item.body}
                    </h3>

                    <span className="mt-8 flex items-center gap-4 text-sm font-bold text-white">
                      <span className="shrink-0">{item.cta}</span>
                      <span className="h-px w-32 max-w-[45%] bg-white/80" />
                      <ArrowRight size={22} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[16px] border border-ink-900/10 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {audienceStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group flex items-center gap-5 px-8 py-7 transition duration-300 hover:bg-[#f8fbff] ${index > 0 ? "lg:border-l lg:border-ink-900/10" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-ink-900/10 lg:border-l" : ""} ${index > 1 ? "border-t border-ink-900/10 lg:border-t-0" : ""}`}
                >
                  <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-[14px] bg-[#eef4ff] text-brand-blue transition duration-300 group-hover:-translate-y-1 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={30} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-display text-3xl font-bold leading-none text-brand-blue">{stat.value}</span>
                    <span className="mt-2 block text-sm font-bold leading-5 text-ink-900">{stat.label}</span>
                    <span className="mt-1 block text-sm leading-5 text-steel-700">{stat.detail}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f8f9fb] py-24" id="buying-assistant">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Fastest route"
            title="From enquiry to steel in fewer steps."
            body="Give every buyer a practical next action: check price, calculate requirement, find a dealer, or request a quote."
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {buyingActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  className="focus-ring group flex min-h-[260px] flex-col justify-between rounded-[8px] border border-ink-900/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_18px_55px_rgba(15,23,42,0.1)]"
                  href={action.href}
                >
                  <div>
                    <span className="mb-10 inline-flex size-14 items-center justify-center rounded-[8px] bg-[#f8f9fb] text-brand-blue ring-1 ring-ink-900/8 group-hover:bg-brand-blue group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h2 className="font-display text-2xl font-bold tracking-normal text-ink-900">{action.title}</h2>
                    <p className="mt-5 text-base leading-7 text-steel-700">{action.detail}</p>
                  </div>
                  <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                    Start flow <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#fffdfa] py-24" id="products">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Product range"
            title="Two product paths for stronger structures."
            body="Keep product choice simple: standard high-strength TMT for everyday structures, or corrosion-resistant steel for exposed conditions."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="focus-ring group grid overflow-hidden rounded-[8px] border border-ink-900/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-brand-blue/35 lg:grid-cols-[0.82fr_1fr]"
              >
                <div className="flex min-h-[340px] items-center justify-center bg-[#f8f9fb] p-8">
                  <Image
                    src={product.image}
                    alt={`${product.name} product`}
                    width={620}
                    height={460}
                    className="max-h-[280px] w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-7">
                  <div>
                    <p className="font-technical text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">{product.eyebrow}</p>
                    <h2 className="mt-5 font-display text-4xl font-bold tracking-normal text-ink-900 sm:text-5xl">{product.name}</h2>
                    <p className="mt-5 text-lg leading-8 text-steel-700">{product.detail}</p>
                    <div className="mt-8 grid gap-3">
                      {product.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
                          <BadgeCheck size={17} className="shrink-0 text-green-steel" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                    View product <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
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

          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-7">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/ars-assets/awards-certificates-img2.png" alt="ARS certificate proof" width={460} height={320} className="h-44 w-full rounded-[8px] object-cover" />
                <Image src="/ars-assets/awards-certificates-img3.png" alt="ARS award proof" width={460} height={320} className="h-44 w-full rounded-[8px] object-cover" />
              </div>
              <p className="mt-6 text-base leading-7 text-steel-700">
                Certification and quality proof should stay close to client and partner trust signals, especially for engineers, contractors, and procurement teams.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-4">
                {trustItems.map((item) => (
                  <div key={item} className="flex min-h-24 items-center justify-center rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] px-4 text-center font-technical text-sm font-black uppercase tracking-[0.12em] text-steel-700">
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {clientNames.map((client) => (
                  <div key={client} className="flex min-h-20 items-center justify-center rounded-[8px] border border-ink-900/10 bg-white px-4 text-center font-technical text-sm font-black uppercase tracking-[0.12em] text-ink-900 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
                    {client}
                  </div>
                ))}
              </div>
            </div>
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
    <div className="mb-12 grid gap-6 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
      <div>
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-10 bg-brand-blue" />
          <p className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
        </div>
        <h2 className="max-w-4xl font-display text-[clamp(2rem,3.4vw,3.9rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-base leading-8 text-steel-700 lg:text-lg">{body}</p>
    </div>
  );
}
