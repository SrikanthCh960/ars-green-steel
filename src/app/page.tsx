import {
  ArrowRight,
  Atom,
  BadgeCheck,
  BookOpen,
  Calculator,
  ClipboardList,
  IndianRupee,
  Layers,
  Leaf,
  MapPin,
  RefreshCw,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/site-metadata";
import { productCatalog } from "@/lib/product-catalog";
import { AudienceJourneySection } from "@/components/audience-journey-section";
import { ContactCta } from "@/components/contact-cta";
import { HomeHero } from "@/components/home-hero";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
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

export const metadata = createPageMetadata({
  title: "ARS Group | TMT Steel for Construction",
  description:
    "Explore ARS TMT steel products, quality and manufacturing information, dealer support, price guidance, and project planning tools.",
  path: "/",
});

const products = [...productCatalog].reverse();

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
  {
    name: "Akshaya",
    logo: "/ars-assets/partners/akshaya.png.webp",
  },
  {
    name: "Baashyaam",
    logo: "/ars-assets/partners/baashyaam.png.webp",
  },
  {
    name: "Foxconn",
    logo: "/ars-assets/partners/foxconn.png.webp",
  },
  {
    name: "VGN",
    logo: "/ars-assets/partners/vgn.png.webp",
  },
  {
    name: "RCCL",
    logo: "/ars-assets/partners/rccl.png.webp",
  },
  {
    name: "Noah",
    logo: "/ars-assets/partners/noah.png.webp",
  },
  {
    name: "Rohaan",
    logo: "/ars-assets/partners/rohaan.png.webp",
  },
  {
    name: "Sathyamoorthy",
    logo: "/ars-assets/partners/sathyamoorthy.png.webp",
  },
  {
    name: "Casa",
    logo: "/ars-assets/partners/CASA-2-1.png.webp",
  },
];

const greenSteelFeatures = [
  {
    title: "Lower Carbon Footprint",
    text: "EPD-verified at 592 kg CO₂e per tonne—documented lower-emission production.",
    icon: Atom,
  },
  {
    title: "Recycled Scrap-Based Production",
    text: "Up to 98% recycled steel supports circular manufacturing and reduces demand for virgin raw materials.",
    icon: RefreshCw,
  },
  {
    title: "Energy Efficient Processes",
    text: "Electric Arc Furnace production and growing renewable energy use improve energy efficiency.",
    icon: Zap,
  },
];

const blogs = [
  {
    title: "What is CRS Steel?",
    href: "/blog/corrosion-resistance-steel.html",
    category: "Product knowledge",
    detail: "Understand how corrosion-resistant steel differs from standard TMT and when it is the right choice for your project.",
    readTime: "4 min read",
    icon: Layers,
  },
  {
    title: "How Green Steel is Produced",
    href: "/ars-green-steel",
    category: "Sustainability",
    detail: "A look inside the electric arc furnace process that makes ARS steel cleaner, greener, and future-ready.",
    readTime: "5 min read",
    icon: Leaf,
  },
  {
    title: "TMT Bars vs HYSD Bars",
    href: "/blog/everything-about-hysd-bars.html",
    category: "Construction guide",
    detail: "Side-by-side comparison of the two most common steel bar types and what they mean for strength, cost, and safety.",
    readTime: "6 min read",
    icon: BookOpen,
  },
  {
    title: "House Construction Cost in India",
    href: "/blog/average-house-construction-cost-in-india-per-square-feet.html",
    category: "Planning",
    detail: "A practical guide to estimating steel requirements and total construction cost before breaking ground.",
    readTime: "7 min read",
    icon: Calculator,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <HomeHero />

      <AudienceJourneySection />

      <GreenSteelSection />

      <MotionSection className="bg-surface-50 py-16 lg:min-h-[90vh] lg:py-18" id="products">
        <div className="ars-container flex min-h-[calc(90vh-96px)] flex-col justify-center">
          <div className="mb-8 max-w-4xl lg:mb-10">
            <SectionKicker>Product range</SectionKicker>
            <h2 className="section-title">
              Choose the right TMT steel for your project.
            </h2>
            <p className="section-copy">
              From corrosion-resistant TMT bars for high-salinity environments to high-strength TMT bars
              for earthquake-resistant construction, ARS offers the right solution for every project.
            </p>
          </div>

          <div className="grid gap-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="group grid overflow-hidden rounded-[18px] border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/45 hover:shadow-[0_22px_72px_rgba(13,43,110,0.12)] lg:grid-cols-[260px_minmax(0,1fr)_220px]"
              >
                <div className="flex min-h-[180px] items-center justify-center bg-surface-100 p-6 lg:min-h-[216px]">
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
                    {product.homeEyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(2rem,3vw,3.15rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700 lg:text-lg lg:leading-8">
                    {product.description}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {product.homePoints.map((point) => (
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
                    href={product.route}
                  >
                    View product <ArrowRight size={17} />
                  </Link>
                  <span
                    aria-disabled="true"
                    className="inline-flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-[6px] border border-brand-blue/20 bg-surface-50 px-5 text-sm font-bold text-steel-500"
                    title="The approved product leaflet is not yet available for download."
                  >
                    Product leaflet pending
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 rounded-[16px] border border-brand-blue/10 bg-white/78 p-5 shadow-[var(--shadow-soft)] lg:grid-cols-3">
            {["High strength & ductility", "Corrosion resistant", "Earthquake resistant"].map((item) => (
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

      <BuyingAssistantSection />

      <MotionSection className="bg-white py-24" id="trusted-by">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Industry recognition"
            title="Certified. Tested. Trusted."
            body="Every ARS TMT bar is backed by nationally recognised certifications, rigorous testing, and partnerships trusted across the construction industry."
          />

          <div className="grid gap-8">
            <div>
              <p className="mb-4 font-technical text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                Certificates
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {certificateCards.slice(0, 6).map((item) => (
                    <article
                      key={item.label}
                      className="rounded-2xl border border-brand-blue/10 bg-surface-50 p-6"
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

            <div>
              <p className="mb-4 font-technical text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                Partners
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {partnerCards.map((partner) => (
                    <article
                      key={partner.name}
                      className="flex min-h-[116px] items-center justify-center rounded-2xl border border-ink-900/10 bg-white px-6 text-center shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
                    >
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} partner logo`}
                        width={180}
                        height={72}
                        className="max-h-16 w-auto object-contain"
                      />
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="blogs">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <SectionKicker>Knowledge center</SectionKicker>
              <h2 className="section-title max-w-3xl">
                Guides for better steel decisions.
              </h2>
              <p className="section-copy max-w-2xl">
                Educational content helping buyers understand products, pricing, durability, and
                construction planning before they speak to sales.
              </p>
            </div>

            <Link
              href="/blog"
              className="focus-ring inline-flex items-center gap-2 justify-self-start text-sm font-bold text-brand-blue transition hover:text-brand-red lg:justify-self-end"
            >
              View all articles <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.38fr]">
            <FeaturedBlogCard blog={blogs[0]} />

            <div className="grid gap-5">
              {blogs.slice(1).map((blog, index) => (
                <BlogListCard key={blog.title} blog={blog} tone={index} />
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <ContactCta />
    </main>
  );
}

function FeaturedBlogCard({ blog }: { blog: (typeof blogs)[number] }) {
  const Icon = blog.icon;

  return (
    <Link
      href={blog.href}
      className="focus-ring group flex min-h-[430px] flex-col justify-between rounded-[16px] bg-brand-blue p-7 text-white shadow-[0_24px_70px_rgba(13,43,110,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-brand-blue-dark lg:p-8"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 font-technical text-xs font-black uppercase tracking-[0.16em] text-white/74 ring-1 ring-white/14">
          <Icon size={16} />
          {blog.category}
        </span>
        <h3 className="mt-10 max-w-xl font-display text-[clamp(2rem,3vw,3.2rem)] font-bold leading-[1.05] tracking-normal text-white">
          {blog.title}
        </h3>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/70 lg:text-lg">
          {blog.detail}
        </p>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-white/14 pt-7">
        <span className="text-sm font-bold text-white/50">{blog.readTime}</span>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
          Read article <ArrowRight size={17} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function BlogListCard({ blog, tone }: { blog: (typeof blogs)[number]; tone: number }) {
  const Icon = blog.icon;
  const iconTone =
    tone === 1
      ? "bg-red-50 text-brand-red ring-brand-red/12"
      : "bg-[#edf5ff] text-brand-blue ring-brand-blue/12";

  return (
    <Link
      href={blog.href}
      className="focus-ring group grid gap-5 rounded-[16px] border border-brand-blue/10 bg-surface-50 p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue/28 hover:bg-white sm:grid-cols-[64px_minmax(0,1fr)_28px]"
    >
      <span className={`inline-flex size-12 items-center justify-center rounded-[12px] ring-1 ${iconTone}`}>
        <Icon size={20} />
      </span>

      <span className="min-w-0">
        <span className="font-technical text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
          {blog.category}
          <span className="mx-2 text-steel-300">-</span>
          <span className="text-steel-400">{blog.readTime}</span>
        </span>
        <span className="mt-3 block font-display text-xl font-bold tracking-normal text-ink-900">
          {blog.title}
        </span>
        <span className="mt-3 block text-sm leading-6 text-steel-600 lg:text-base lg:leading-7">
          {blog.detail}
        </span>
      </span>

      <ArrowRight
        size={20}
        className="self-end text-brand-blue transition duration-300 group-hover:translate-x-1 group-hover:text-brand-red sm:self-center"
      />
    </Link>
  );
}

function GreenSteelSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-bg-dark py-24 text-white" id="ars-green-steel">
      <div className="absolute inset-0">
        <Image
          src="/ars-assets/ARS-green-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.72),rgba(6,13,30,0.9))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,101,52,0.32),transparent_28%)]" />
      </div>

      <div className="ars-container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <SectionKicker variant="green" align="center" showEndLine>
            ARS Green Steel
          </SectionKicker>
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
                className="rounded-[16px] border border-white/12 bg-white/[0.07] p-7 shadow-[var(--shadow-card)] backdrop-blur-[2px]"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-[8px] bg-white/12 text-emerald-200 ring-1 ring-white/12">
                  <Icon size={24} />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-normal text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

function BuyingAssistantSection() {
  return (
    <MotionSection className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="buying-assistant">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(255,255,255,0.1),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(10,48,125,0.96))]" />
      <div className="ars-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.28fr] lg:gap-16">
          <div className="max-w-xl">
            <SectionKicker>Fastest route</SectionKicker>
            <h2 className="section-title section-title-light">
              From enquiry to steel in fewer steps.
            </h2>
            <p className="section-copy section-copy-light">
              Give every buyer a practical next action: check price, calculate requirement,
              find a dealer, or request a quote.
            </p>
            <div className="mt-10 h-px w-full bg-white/12" />
            <Link
              className="focus-ring mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.25)] transition hover:-translate-y-0.5 hover:bg-[#c90f16]"
              href="/request-quote"
            >
              Get your quote now <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid gap-4">
            {buyingActions.map((action, index) => {
              const Icon = action.icon;
              const count = String(index + 1).padStart(2, "0");

              return (
                <Link
                  key={action.title}
                  className="focus-ring group grid items-center gap-5 rounded-[18px] border border-white/18 bg-white/[0.11] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.16] sm:grid-cols-[44px_72px_minmax(0,1fr)_24px] lg:p-6"
                  href={action.href}
                >
                  <span className="font-technical text-sm font-black tracking-[0.14em] text-white/42">
                    {count}
                  </span>
                  <span className="inline-flex size-14 items-center justify-center rounded-[14px] bg-white/14 text-white ring-1 ring-white/12 transition group-hover:bg-white/20">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl font-bold tracking-normal text-white lg:text-2xl">
                      {action.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-white/66 lg:text-base">
                      {action.detail}
                    </span>
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-white/42 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mb-12 max-w-4xl">
      <div>
        <SectionKicker className="mb-6">{eyebrow}</SectionKicker>
        <h2 className="max-w-4xl font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
          {title}
        </h2>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">{body}</p>
    </div>
  );
}
