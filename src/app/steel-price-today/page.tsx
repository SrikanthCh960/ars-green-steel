import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CalendarClock,
  ClipboardCheck,
  IndianRupee,
  MapPin,
  Scale,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { SteelPriceLookup } from "@/components/steel-price-lookup";
import {
  calculatorProducts,
  getWorkbookPriceRows,
  pricingWorkbookDetails,
} from "@/data/tmt-calculator";
import {
  getBlogArchiveArticle,
  type BlogArchiveArticle,
} from "@/lib/blog-content";
import {
  createPageMetadata,
  productionDomain,
} from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Steel Price Today Per Kg in India | Latest TMT Steel Rates – ARS",
  description:
    "Check today’s TMT steel price per kg and per tonne in Chennai, Tamil Nadu and South India. Compare ARS Fe 550D and CRS rates by bar size.",
  path: "/tmt-steel-price-today",
});

export const revalidate = 86400;

const wholeCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const perKgCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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
    question: "What is today’s ARS TMT steel price per kg?",
    answer:
      "The selector above shows the current GST-inclusive prices from the approved ARS region-wise pricing workbook. Choose the region, grade, and diameter to see the applicable indicative rate per kg and per tonne.",
  },
  {
    question: "Is GST included in the displayed steel price?",
    answer:
      "Yes. The displayed workbook rates include GST. Freight, transportation, loading, and unloading are additional and are confirmed in the final quotation.",
  },
  {
    question: "What is the ARS TMT steel price per tonne?",
    answer:
      "The price table provides both per-kg and per-tonne values for every supported diameter. One tonne is calculated as 1,000 kg, using the same approved workbook rate.",
  },
  {
    question: "Are delivery and unloading charges included?",
    answer:
      "No. Delivery, transportation, loading, and unloading are not included in the displayed rate because these depend on the order quantity and delivery location.",
  },
  {
    question: "Why do 8 mm and 12 mm TMT bars have different prices?",
    answer:
      "The approved pricing workbook can apply a diameter adjustment to selected sizes. That is why the rate for 8 mm or 32 mm may differ from the rate shown for 12 mm in the same region and grade.",
  },
  {
    question: "What is the difference between ARS Fe 550D and ARS CRS Fe 550D?",
    answer:
      "ARS Fe 550D is the high-strength construction grade, while ARS CRS Fe 550D is designed with additional corrosion-resistant properties. Review the product pages or speak with ARS to choose the grade appropriate for the project environment.",
  },
  {
    question: "How much does one 12-metre TMT rod cost?",
    answer:
      "The approximate price of one rod is the workbook mean weight per rod multiplied by the selected price per kg. The reference table on this page shows this calculation for Tamil Nadu ARS Fe 550D rates.",
  },
  {
    question: "How can I get a confirmed ARS steel quotation?",
    answer:
      "Select your requirements above and request a quote by WhatsApp, or use the Request Quote form. ARS will confirm the order rate, quotation validity, quantity, and delivery-related charges.",
  },
] as const;

const trustCards = [
  {
    icon: IndianRupee,
    title: "GST included",
    body: "Displayed workbook rates include GST for clearer initial budgeting.",
  },
  {
    icon: Truck,
    title: "Delivery quoted separately",
    body: "Freight, transportation, loading, and unloading depend on the order and location.",
  },
  {
    icon: ClipboardCheck,
    title: "Quotation confirms the order",
    body: "The final ARS quotation states the confirmed rate, validity, and commercial terms.",
  },
];

const nextSteps = [
  {
    icon: Calculator,
    title: "Estimate quantity",
    body: "Convert rods, bundles, or weight into a practical material estimate.",
    href: "/tmt-steel-calculator",
    label: "Open calculator",
  },
  {
    icon: ShieldCheck,
    title: "Compare ARS grades",
    body: "Review Fe 550D and CRS Fe 550D before choosing a grade.",
    href: "/products",
    label: "Explore products",
  },
  {
    icon: MapPin,
    title: "Find supply support",
    body: "Locate ARS distribution support for your project area.",
    href: "/our-network",
    label: "View network",
  },
];

const tamilNaduPriceTables = calculatorProducts.map((product) => ({
  product,
  rows: getWorkbookPriceRows("Tamil Nadu", product),
  href: product === "ARS CRS Fe 550D" ? "/product-crs-550d" : "/product-550d",
}));

const perRodRows = getWorkbookPriceRows("Tamil Nadu", "ARS Fe 550D");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${productionDomain}/tmt-steel-price-today#webpage`,
      url: `${productionDomain}/tmt-steel-price-today`,
      name: "Steel Price Today Per Kg in India | Latest TMT Steel Rates – ARS",
      description:
        "Check today’s TMT steel price per kg and per tonne in Chennai, Tamil Nadu and South India. Compare ARS Fe 550D and CRS rates by bar size.",
      isPartOf: { "@id": `${productionDomain}/#website` },
      about: { "@id": `${productionDomain}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: productionDomain,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "TMT Steel Price Today",
          item: `${productionDomain}/tmt-steel-price-today`,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${productionDomain}/#organization`,
      name: "ARS Green Steel",
      url: productionDomain,
      logo: `${productionDomain}/ars-assets/ARS-green-bg.png`,
    },
    {
      "@type": "FAQPage",
      mainEntity: steelPriceFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function PriceTable({ product, rows, href }: (typeof tamilNaduPriceTables)[number]) {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)]">
      <div className="flex flex-col gap-3 border-b border-ink-900/10 bg-surface-50 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-red">Tamil Nadu reference</p>
          <h3 className="mt-1 font-display text-xl font-bold text-ink-900">{product}</h3>
        </div>
        <Link className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-red" href={href}>
          View product <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[430px] border-collapse text-left text-sm">
          <caption className="sr-only">Tamil Nadu {product} steel prices by diameter</caption>
          <thead>
            <tr className="border-b border-ink-900/10 text-[11px] font-bold uppercase tracking-[0.1em] text-steel-700">
              <th scope="col" className="px-5 py-3 md:px-6">Diameter</th>
              <th scope="col" className="px-4 py-3">Price / kg</th>
              <th scope="col" className="px-5 py-3 text-right md:px-6">Price / tonne</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.size} className="border-b border-ink-900/8 last:border-0">
                <th scope="row" className="px-5 py-3 font-bold text-brand-blue md:px-6">{row.size}</th>
                <td className="px-4 py-3 text-steel-700">{perKgCurrency.format(row.perKg)}</td>
                <td className="px-5 py-3 text-right font-bold text-ink-900 md:px-6">{wholeCurrency.format(row.perTon)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default function SteelPriceTodayPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[500px] items-end overflow-hidden bg-ink-950 md:min-h-[560px] lg:min-h-[600px]">
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet="/ars-assets/SteelPriceHeroBanner-mobile.webp" type="image/webp" />
          <source srcSet="/ars-assets/SteelPriceHeroBanner-desktop.webp" type="image/webp" />
          <img
            src="/ars-assets/SteelPriceHeroBanner.jpg"
            alt="ARS TMT steel bars"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.72)_54%,rgba(6,13,30,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,13,30,0.9)_0%,transparent_58%)]" />

        <div className="ars-container relative z-10 w-full pb-12 md:pb-16">
          <div className="max-w-3xl">
            <SectionKicker variant="light">TMT Steel Price Today</SectionKicker>
            <h1 className="mt-5 font-display text-[clamp(2.55rem,6vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white">
              Latest Steel Price Today Per Kg in India | Current Steel Rates
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/76 md:text-base">
              Compare indicative ARS Fe 550D and CRS Fe 550D rates by region and diameter, then request a confirmed quotation for your quantity and delivery location.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-blue" href="#price-table">
                Check prices <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-blue" href="/request-quote">
                Request a quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-blue/10 bg-white py-9" aria-label="Price coverage">
        <div className="ars-container grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 lg:divide-x lg:divide-ink-900/10">
          {[
            ["2", "ARS grades"],
            ["7", "Bar diameters"],
            ["4", "South Indian regions"],
            ["12 m", "Standard bar length"],
          ].map(([value, label]) => (
            <div key={label} className="lg:px-8 first:lg:pl-0">
              <p className="font-display text-3xl font-extrabold text-brand-blue">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-steel-700">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="bg-white py-16 md:py-24" id="price-table">
        <div className="ars-container min-w-0">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Approved ARS Pricing</SectionKicker>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink-900">
                Today&apos;s ARS TMT steel prices by bar size
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-7 text-steel-700">
              Use these workbook-backed rates for initial planning. The confirmed selling price and commercial terms are provided in an ARS quotation.
            </p>
          </div>

          <dl className="my-8 grid gap-px overflow-hidden rounded-xl border border-brand-blue/10 bg-brand-blue/10 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Workbook approved", pricingWorkbookDetails.approvedOnLabel],
              ["Source", pricingWorkbookDetails.sourceLabel],
              ["Reviewed by", pricingWorkbookDetails.reviewedBy],
              ["Review cadence", pricingWorkbookDetails.reviewCadence],
            ].map(([term, detail]) => (
              <div key={term} className="bg-surface-50 p-4 md:p-5">
                <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-blue">{term}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-steel-700">{detail}</dd>
              </div>
            ))}
          </dl>

          <SteelPriceLookup />
        </div>
      </MotionSection>

      <MotionSection className="border-y border-brand-blue/10 bg-surface-50 py-16 md:py-20">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker variant="brand">Read the Rate Correctly</SectionKicker>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">What the displayed price includes</h2>
            <p className="mt-4 text-[15px] leading-7 text-steel-700">
              The page separates indicative pricing from final commercial confirmation so procurement teams can plan without treating a website figure as an issued quotation.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trustCards.map(({ icon: Icon, title, body }) => (
              <article key={title} className="rounded-2xl border border-brand-blue/10 bg-white p-6 md:p-7">
                <Icon className="size-6 text-brand-red" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-steel-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 md:py-24">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Crawlable Price Reference</SectionKicker>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">ARS Fe 550D vs CRS Fe 550D prices</h2>
            </div>
            <p className="text-[15px] leading-7 text-steel-700">
              Tamil Nadu is shown below as a stable reference. The selector above provides approved workbook rates for every supported region. City selection helps with quotation and delivery context but does not alter the state-level rate.
            </p>
          </div>
          <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-2">
            {tamilNaduPriceTables.map((table) => <PriceTable key={table.product} {...table} />)}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-brand-blue/10 bg-surface-50 py-16 md:py-24">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Per-Rod Planning</SectionKicker>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">How to calculate the price of one 12-metre TMT bar</h2>
            </div>
            <div className="rounded-xl border-l-4 border-brand-red bg-white p-5">
              <p className="font-display text-lg font-bold text-ink-900">Mean weight per rod × price per kg = approximate price per rod</p>
              <p className="mt-2 text-sm leading-6 text-steel-700">Reference: Tamil Nadu, ARS Fe 550D, GST-inclusive workbook rates.</p>
            </div>
          </div>

          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-brand-blue/12 bg-white md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Approximate ARS Fe 550D price per 12-metre rod in Tamil Nadu</caption>
              <thead>
                <tr className="border-b border-ink-900/10 bg-brand-blue text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                  <th scope="col" className="px-6 py-4">Diameter</th>
                  <th scope="col" className="px-6 py-4">Workbook mean weight / rod</th>
                  <th scope="col" className="px-6 py-4">Price / kg</th>
                  <th scope="col" className="px-6 py-4 text-right">Approx. price / rod</th>
                </tr>
              </thead>
              <tbody>
                {perRodRows.map((row) => (
                  <tr key={row.size} className="border-b border-ink-900/8 last:border-0">
                    <th scope="row" className="px-6 py-4 font-bold text-brand-blue">{row.size}</th>
                    <td className="px-6 py-4 text-steel-700">{row.rodWeight.toFixed(3)} kg</td>
                    <td className="px-6 py-4 text-steel-700">{perKgCurrency.format(row.perKg)}</td>
                    <td className="px-6 py-4 text-right font-bold text-ink-900">{wholeCurrency.format(row.approximateRodPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 grid gap-3 md:hidden" aria-label="Approximate ARS Fe 550D price per 12-metre rod in Tamil Nadu">
            {perRodRows.map((row) => (
              <li key={row.size} className="rounded-xl border border-brand-blue/12 bg-white p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-xl font-extrabold text-brand-blue">{row.size}</span>
                  <strong className="text-lg text-ink-900">{wholeCurrency.format(row.approximateRodPrice)} / rod</strong>
                </div>
                <p className="mt-2 text-sm text-steel-700">{row.rodWeight.toFixed(3)} kg mean weight × {perKgCurrency.format(row.perKg)} / kg</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-3 rounded-xl border border-brand-blue/12 bg-white p-5 text-sm leading-6 text-steel-700">
            <Scale className="mt-0.5 size-5 shrink-0 text-brand-blue" aria-hidden="true" />
            <p>
              These estimates use the approved pricing workbook&apos;s mean bundle weight per rod. Actual weights remain subject to applicable BIS tolerances. For nominal engineering weight guidance, read the <Link href="/blog/tmt-steel-bar-weight.html" className="focus-ring font-bold text-brand-blue underline decoration-brand-blue/25 underline-offset-4 hover:text-brand-red">TMT steel bar weight guide</Link>.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 md:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <div>
            <SectionKicker variant="brand">Buying Context</SectionKicker>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">What affects TMT steel prices in Chennai?</h2>
            <p className="mt-5 text-[15px] leading-7 text-steel-700">
              Chennai uses the Tamil Nadu workbook rate. The final quotation can still vary according to the selected grade, diameter mix, order quantity, delivery location, and applicable logistics.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-brand-blue/10 bg-brand-blue/10 sm:grid-cols-2">
            {[
              ["01", "Grade", "Fe 550D and CRS Fe 550D have different approved base rates."],
              ["02", "Diameter", "Selected diameters may carry an adjustment in the approved workbook."],
              ["03", "Quantity", "The required rods, bundles, and total weight shape the final order."],
              ["04", "Delivery", "Freight and handling depend on the site location and order plan."],
            ].map(([number, title, body]) => (
              <li key={number} className="bg-surface-50 p-6 md:p-7">
                <span className="font-technical text-xs font-bold tracking-[0.18em] text-brand-red">{number}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel-700">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-brand-blue/10 bg-surface-50 py-16 md:py-20">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <SectionKicker variant="brand">Common Questions</SectionKicker>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Steel price FAQs</h2>
            <p className="mt-4 text-[15px] leading-7 text-steel-700">Clear answers on rates, tax, delivery, grades, and quotations.</p>
          </div>
          <FaqList items={steelPriceFaqs} />
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 md:py-24">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionKicker variant="brand">Continue Planning</SectionKicker>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Move from price checking to a project decision</h2>
            </div>
            <p className="text-[15px] leading-7 text-steel-700">Estimate your requirement, compare the available grades, or find ARS supply support before requesting a confirmed quotation.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {nextSteps.map(({ icon: Icon, title, body, href, label }) => (
              <Link key={title} href={href} className="focus-ring group flex min-h-full flex-col rounded-2xl border border-brand-blue/12 bg-surface-50 p-6 transition hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-[var(--shadow-soft)] md:p-7">
                <Icon className="size-6 text-brand-red" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-steel-700">{body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:text-brand-red">{label} <ArrowRight className="size-4" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      {pricePlanningArticles.length ? (
        <MotionSection className="bg-surface-50 py-16 md:py-24">
          <div className="ars-container">
            <SectionKicker variant="brand">Price Planning Guides</SectionKicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">Understand the price before you buy</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pricePlanningArticles.map((article) => (
                <article key={article.href} className="group flex min-h-full flex-col overflow-hidden rounded-xl border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)]">
                  <Link href={article.href} className="focus-ring relative block aspect-[16/9] overflow-hidden bg-surface-100" aria-label={`Read ${article.title}`}>
                    <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                  </Link>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand-red">{article.category}</p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink-900"><Link className="focus-ring hover:text-brand-blue" href={article.href}>{article.title}</Link></h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-steel-700">{article.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Read guide <ArrowRight className="size-4" aria-hidden="true" /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>
      ) : null}

      <section className="bg-brand-blue py-12 text-white md:py-14">
        <div className="ars-container grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70"><CalendarClock className="size-4" aria-hidden="true" /> Confirm before ordering</div>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.6rem)] font-bold leading-tight">Ready for a project-specific ARS quotation?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">Share the grade, diameter, quantity, and delivery location. ARS will confirm the price and commercial terms.</p>
          </div>
          <Link href="/request-quote" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-blue">Request quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
