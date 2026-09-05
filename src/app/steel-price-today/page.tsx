import { createPageMetadata } from "@/lib/site-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardList, MapPin, ShieldCheck } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelPriceLookup } from "@/components/steel-price-lookup";
import { FaqList } from "@/components/faq-list";
import { clientVerificationSummary } from "@/data/business-verification";
import {
  getBlogArchiveArticle,
  type BlogArchiveArticle,
} from "@/lib/blog-content";

export const metadata = createPageMetadata({
  title: "Steel Price Today Per Kg in India | Latest TMT Steel Rates – ARS",
  description:
    "Check today’s TMT steel price per kg and per tonne in Chennai, Tamil Nadu and South India. Compare ARS Fe 550D and CRS rates by bar size.",
  path: "/tmt-steel-price-today",
});

const stats = [
  { value: "Step 01", label: "Select Region", sub: "Choose the region for your price lookup." },
  { value: "Step 02", label: "Check Price", sub: "Review current ARS TMT price guidance." },
  { value: "Step 03", label: "Estimate Quantity", sub: "Calculate the quantity your project needs." },
  { value: "Step 04", label: "Request Quote", sub: "Share your requirement for an accurate quotation." },
];

const nextSteps = [
  {
    icon: <ClipboardList size={20} />,
    title: "Explore Products",
    desc: "Compare ARS TMT products and find the right grade for your project.",
    cta: "View products",
    href: "/products",
  },
  {
    icon: <MapPin size={20} />,
    title: "Find dealer",
    desc: "Use your location to discover nearby ARS supply support.",
    cta: "Find a dealer",
    href: "/our-network",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Request quote",
    desc: "Share size, quantity, and site location for current pricing.",
    cta: "Request quote",
    href: "/request-quote",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Verify quality",
    desc: "Review product proof before making price the only factor.",
    cta: "View proof",
    href: "/our-certification",
  },
];

const calculatorBenefits = [
  {
    number: "01",
    title: "TRANSPARENCY OF PRICE",
    body: "Using a TMT calculator enhances transparency in pricing by providing detailed breakdowns of TMT steel bar requirements. This clarity helps users understand the cost implications of their projects and avoid unexpected expenses, promoting a more transparent procurement process.",
  },
  {
    number: "02",
    title: "EASE OF BUDGETING FOR PURCHASE",
    body: "The TMT calculator simplifies the budgeting process by accurately estimating the quantity of TMT bars needed for a project. This precision allows for more accurate budget forecasts and financial planning, helping project managers allocate funds more effectively and efficiently.",
  },
  {
    number: "03",
    title: "ACCURACY OF DAY-TO-DAY INFORMATION",
    body: "With the TMT calculator, users gain access to real-time data that reflects current market conditions and material costs. This feature ensures that all calculations are based on the most up-to-date information, allowing for more accurate planning and scheduling of construction activities.",
  },
  {
    number: "04",
    title: "COMPLIANCE TO MINISTRY OF STEEL NORMS",
    body: "The TMT calculator is designed to align with the latest Ministry of Steel norms, ensuring that all calculations adhere to regulatory standards. This compliance not only fosters trust and credibility but also ensures that the project meets all legal requirements related to material usage and safety standards.",
  },
];

const pricePlanningArticleSlugs = [
  "know-the-tmt-steel-price-today.html",
  "top-key-factors-that-affect-tmt-steel-bar-price-in-india.html",
  "tmt-steel-bar-weight.html",
];

const pricePlanningArticles = pricePlanningArticleSlugs
  .map((slug) => getBlogArchiveArticle(slug))
  .filter((article): article is BlogArchiveArticle => Boolean(article));

const steelPriceFaqs = [
  {
    question: "What is the price of steel in India?",
    answer: "Steel prices in India fluctuate regularly. To get the most accurate and up-to-date information, you should check with local steel suppliers or online resources.",
  },
  {
    question: "Why steel prices are increasing today?",
    answer: "Several factors can contribute to rising steel prices, including increased demand, higher raw material costs, and global economic conditions.",
  },
  {
    question: "Where can I find the latest TMT prices?",
    answer: "You can find the latest TMT steel prices by checking with local steel suppliers, consulting online price trackers, or following industry news sources.",
  },
  {
    question: "How is the price of iron rods calculated per kg?",
    answer: "The price of iron rods per kg is typically determined by factors such as the grade of steel, size, and market demand.",
  },
  {
    question: "What factors influence the price of steel?",
    answer: "Steel prices are influenced by various factors, including global economic conditions, government policies, demand from key industries, and the cost of raw materials like iron ore and coal.",
  },
  {
    question: "How does the grade of steel affect the price?",
    answer: "Higher-grade steel, such as TMT steel, generally commands a higher price due to its superior strength and durability.",
  },
  {
    question: "Can I lock in the steel price today for future orders?",
    answer: "Some steel suppliers offer options to lock in prices for future orders, which can provide protection against price fluctuations.",
  },
  {
    question: "Does the steel price today include delivery costs?",
    answer: "Delivery costs are typically not included in the base price of steel. You should inquire with your supplier for specific details.",
  },
  {
    question: "How can I stay informed about changes in steel prices?",
    answer: "To stay updated on steel price trends, you can subscribe to industry newsletters, follow steel-related news sources, or use online price tracking tools.",
  },
] as const;

export default function SteelPriceTodayPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative flex items-end overflow-hidden bg-ink-950">
        <div className="absolute inset-0">
          <picture className="absolute inset-0">
            <source media="(max-width: 767px)" srcSet="/ars-assets/SteelPriceHeroBanner-mobile.webp" type="image/webp" />
            <source srcSet="/ars-assets/SteelPriceHeroBanner-desktop.webp" type="image/webp" />
            <img src="/ars-assets/SteelPriceHeroBanner.jpg" alt="ARS TMT steel bars" fetchPriority="high" decoding="async" className="h-full w-full object-cover" style={{ objectPosition: "center 50%" }} />
          </picture>
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
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />TMT Steel Price Today</div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.025em] text-white">
              Latest Steel Price Today Per Kg in India | Current Steel Rates
            </h1>
            <p className="mt-5 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-brand-red">Know Today&apos;s Price. Build with Confidence.</p>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              Stay updated with the latest ARS TMT steel prices, compare available bar sizes, estimate your
              project requirements, and request an accurate quotation—all in one place.
            </p>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {stats.map((step) => (
              <div key={step.label} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {step.value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {step.label}
                </span>
                <span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{step.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-brand-blue/10 bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="max-w-4xl border-l-2 border-brand-red pl-6 md:pl-8">
            <span aria-hidden="true" className="mb-5 block font-technical text-xs font-bold tracking-[0.22em] text-brand-blue/60">01</span>
            <p className="text-[15px] leading-8 text-steel-700">
              When it comes to construction projects, understanding the factors of TMT steel price is necessary. As a builder, being well-informed about the fluctuations and factors affecting TMT bar price can help you make informed decisions. You will need to explore the key factors to know about <Link href="/tmt-steel-calculator" className="focus-ring font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red">steel price today</Link> before embarking on any construction journey. TMT steel price today are subject to various factors that can cause fluctuations. Some of the key influencers include the cost of raw materials, market demand, production capacity, transportation costs, and an IS 1786 – 2008 standard certification adds to its value.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* ── Price table ── */}
      <MotionSection className="bg-white py-24" id="price-table">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                CHECK THE STEEL PRICE TODAY
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              {clientVerificationSummary.pricing}
            </p>
          </div>

          <SteelPriceLookup />
        </div>
      </MotionSection>

      <MotionSection className="border-y border-brand-blue/10 bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-12 md:grid-cols-2 md:gap-16">
          <article className="relative overflow-hidden border-t-2 border-brand-blue pt-8">
            <span aria-hidden="true" className="absolute right-0 top-1 font-display text-7xl font-extrabold leading-none tracking-[-0.08em] text-brand-blue/[0.07] md:text-8xl">02</span>
            <p className="relative max-w-xl text-[15px] leading-8 text-steel-700">
              By keeping an eye on these factors, you can better anticipate steel price today per kg currently and plan your construction budget accordingly. Some TMT bars are also optimized to withstand any weather condition and are also certified by international boards such as the SGS to support customer authentication. It is crucial to conduct thorough research and compare different brands and grades based on their specifications and reputation. This will ensure that you select the most suitable TMT bar price per kg for your construction project without compromising on quality or overspending.
            </p>
          </article>
          <article className="relative overflow-hidden border-t-2 border-brand-red pt-8">
            <span aria-hidden="true" className="absolute right-0 top-1 font-display text-7xl font-extrabold leading-none tracking-[-0.08em] text-brand-red/[0.07] md:text-8xl">03</span>
            <p className="relative max-w-xl text-[15px] leading-8 text-steel-700">
              Steel price today in India are subject to market dynamics, and understanding pricing patterns can be beneficial for your construction project. Analysing historical data, market trends, and expert forecasts can provide insights into price movements. By staying updated on pricing patterns, you can make better decisions regarding the timing of purchasing TMT steel, potentially saving costs in the long run.
            </p>
          </article>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                BENEFITS OF USING A TMT CALCULATOR
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-8 text-steel-700">
              Utilizing a TMT calculator brings a strategic advantage in managing construction projects by ensuring cost-efficiency, regulatory compliance, and accurate material planning.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-[8px] border border-ink-900/10 bg-ink-900/10 md:grid-cols-2">
            {calculatorBenefits.map((benefit) => (
              <li key={benefit.title} className="bg-white p-7 md:p-8">
                <span className="font-technical text-xs font-bold tracking-[0.2em] text-brand-red">{benefit.number}</span>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight text-ink-900">{benefit.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-steel-700">{benefit.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Next Steps</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Do more than check a number.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Price is one input. Estimate your requirement, find a dealer, verify quality, or move straight to a quote.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((step) => (
              <Link
                key={step.title}
                href={step.href}
                className="focus-ring group flex flex-col gap-5 rounded-2xl border-[1.5px] border-surface-100 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-[16px] font-bold text-ink-900">{step.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-grey-600">{step.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                  {step.cta} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
              FREQUENTLY ASKED QUESTIONS ABOUT USING THE STEEL PRICE
            </h2>
          </div>
          <FaqList items={steelPriceFaqs} />
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-20 md:py-24">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Price Planning Guides</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Understand the price before you buy.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Explore practical ARS guidance on checking today&apos;s price, the factors behind it,
              and estimating the steel your project needs before requesting a confirmed quote.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pricePlanningArticles.map((article) => (
              <article
                key={article.href}
                className="group flex min-h-full flex-col overflow-hidden rounded-[8px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/28 hover:shadow-[0_20px_54px_rgba(13,43,110,0.12)]"
              >
                <Link
                  href={article.href}
                  className="focus-ring relative block aspect-[16/9] overflow-hidden bg-surface-100"
                  aria-label={`Read ${article.title}`}
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-bg-dark/45 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-[6px] bg-white/94 px-3 py-1.5 font-technical text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                    {article.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-grey-600">
                    {article.dateLabel ? <time>{article.dateLabel}</time> : null}
                    {article.dateLabel ? <span aria-hidden="true">•</span> : null}
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold leading-[1.25] text-ink-900">
                    <Link href={article.href} className="focus-ring transition group-hover:text-brand-blue">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-steel-700">
                    {article.excerpt}
                  </p>

                  <Link
                    href={article.href}
                    className="focus-ring mt-auto inline-flex min-h-11 items-end gap-2 pt-6 text-sm font-bold text-brand-blue transition hover:text-brand-red"
                  >
                    Read article
                    <ArrowRight
                      size={17}
                      className="mb-0.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-brand-blue py-16 text-white md:py-20">
        <div className="ars-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/60">ENQUIRY</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              Please complete this form with basic information you need.
            </h2>
          </div>
          <Link
            href="/request-quote"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 lg:justify-self-end"
          >
            ORDER NOW <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </main>
  );
}
