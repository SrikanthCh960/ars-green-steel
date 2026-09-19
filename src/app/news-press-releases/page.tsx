import Image from "next/image";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-sections";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "News & Press Releases | ARS Green Steel",
  description: "Read selected news coverage and press releases about ARS Green Steel, our low-emission TMT bars, product launches, and brand milestones.",
  path: "/news-press-releases",
  image: "/ars-assets/navmenu/pressandmedia.jpg",
});

const coverage = [
  {
    outlet: "The Week",
    date: "03 April 2025",
    dateTime: "2025-04-03",
    category: "Green steel milestone",
    title: "India’s First Green Steel: ARS Steel, Epic Group and sentra.world Unveil Eco-Friendly TMT Bars",
    summary: "Coverage of ARS Steel’s ultra-low-emission TMT bars supplied for Epic Group’s net-zero manufacturing facility in Bhubaneswar.",
    href: "https://www.theweek.in/wire-updates/business/2025/04/03/dcm99-ars-steel.html",
    image: "/ars-assets/original-green-steel/hero-banner.jpg",
    imageAlt: "ARS green steel visual showing the Earth framed by a steel reinforcement bar",
    imagePosition: "35% center",
  },
  {
    outlet: "The Industry Outlook",
    date: "April 2025",
    dateTime: "2025-04",
    category: "Sustainable manufacturing",
    title: "India Gets First Green Steel TMT Bars for Manufacturing, Says ARS Steel",
    summary: "Industry coverage of the first ultra-low-emission TMT bars delivered for a net-zero manufacturing project in India.",
    href: "https://www.theindustryoutlook.com/manufacturing/news/india-gets-first-green-steel-tmt-bars-for-manufacturing-says-ars-steel-nwid-12785.html",
    image: "/ars-assets/ars-green-steel/whatisars.jpg",
    imageAlt: "Industrial and natural hands meeting around an ARS CRS 550D steel bar",
    imagePosition: "center",
  },
  {
    outlet: "CNBC-TV18",
    date: "April 2025",
    dateTime: "2025-04",
    category: "Green steel milestone",
    title: "India Gets Its First ‘Green Steel’ TMT Bars for Sustainable Manufacturing",
    summary: "Business coverage of ARS Steel’s green TMT bars, recycled-steel content and role in sustainable manufacturing.",
    href: "https://www.cnbctv18.com/market/commodities/india-first-green-steel-tmt-bars-for-sustainable-manufacturing-ars-steel-19590413.htm",
    image: "/ars-assets/blog-banners/green-steel-manufacturing-using-clean-energy/Green-Steel-Manufacture.jpeg",
    imageAlt: "Steel manufacturing facility representing lower-emission production",
    imagePosition: "center",
  },
  {
    outlet: "Daily Hindu",
    date: "03 April 2025",
    dateTime: "2025-04-03",
    category: "Press release",
    title: "ARS Steel, Epic Group and sentra.world Unveil the Nation’s First Eco-Friendly TMT Bars",
    summary: "A report on the collaboration supporting lower-carbon construction for Epic Group’s new manufacturing facility.",
    href: "https://dailyhindu.in/index.php/2025/4/3/indias-first-green-steel-ars-steel-epic-group-sentra-world-unveil-nations-first-eco-friendly-tmt-bars/",
    image: "/ars-assets/original-green-steel/green-steel-rebar.png",
    imageAlt: "ARS green steel reinforcement bars in a sustainable construction setting",
    imagePosition: "center",
  },
  {
    outlet: "DT Next",
    date: "09 July 2024",
    dateTime: "2024-07-09",
    category: "Brand news",
    title: "Rahul Dravid to Endorse ARS Steels Brand",
    summary: "DT Next reports on Rahul Dravid joining ARS as brand ambassador for the launch of ARS CRS Fe 550D TMT bars.",
    href: "https://www.dtnext.in/news/business/rahul-dravid-to-endorse-ars-steels-brand-794054",
    image: "/ars-assets/home/rahul_.jpg",
    imageAlt: "Rahul Dravid wearing a safety helmet and holding an ARS steel bar",
    imagePosition: "center 28%",
  },
  {
    outlet: "Chennai PR",
    date: "01 April 2024",
    dateTime: "2024-04-01",
    category: "Product launch",
    title: "ARS Group Launches Its New Product ARS CRS 550D in Chennai",
    summary: "Launch coverage for ARS CRS Fe 550D, developed for corrosion resistance and demanding construction environments.",
    href: "https://chennaipr.in/ars-crs-550d-product-launch-chennai/",
    image: "/ars-assets/products/ARS-CRS550D_hero-banner.jpg",
    imageAlt: "Rahul Dravid with ARS CRS 550D reinforcement bars",
    imagePosition: "center",
  },
] as const;

function ArticleLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-bold text-brand-blue transition group-hover:text-brand-red"
    >
      {label}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens on the publisher’s website in a new tab)</span>
    </a>
  );
}

export default function NewsPressReleasesPage() {
  const [leadStory, ...moreCoverage] = coverage;

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Press Media"
        title="News & Press Releases"
        body="Follow ARS milestones through selected business coverage, industry reporting and product announcements."
        backgroundImageSrc="/ars-assets/navmenu/pressandmedia.jpg"
        backgroundImagePosition="center 62%"
        primaryLabel="Read latest coverage"
        primaryHref="#latest-coverage"
        secondaryLabel="Watch commercials"
        secondaryHref="/tv-commercials"
      />

      <section id="latest-coverage" aria-labelledby="coverage-heading" className="scroll-mt-28 py-16 md:py-24">
        <div className="ars-container">
          <div className="grid gap-8 border-b border-ink-900/15 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <SectionKicker>Latest coverage</SectionKicker>
              <h2 id="coverage-heading" className="section-title mt-5 max-w-3xl">ARS in the news.</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-steel-700 lg:justify-self-end">
              Selected coverage from independent publishers. Each article opens on the original publisher’s website.
            </p>
          </div>

          <article aria-labelledby="lead-story-title" className="group mt-10 grid grid-cols-[112px_1fr] overflow-hidden border border-ink-900/10 bg-surface-50 sm:grid-cols-[176px_1fr] lg:grid-cols-[320px_1fr]">
            <div className="relative aspect-square self-start overflow-hidden bg-brand-blue text-white">
              <Image src={leadStory.image} alt={leadStory.imageAlt} fill sizes="(min-width: 1024px) 320px, (min-width: 640px) 176px, 112px" className="object-cover" style={{ objectPosition: leadStory.imagePosition }} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.08),rgba(6,13,30,0.84))]" />
              <Newspaper className="absolute left-4 top-4 size-6 text-white sm:left-6 sm:top-6 lg:size-8" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                <p className="hidden font-technical text-xs font-bold uppercase tracking-[0.16em] text-white/65 sm:block">Featured coverage</p>
                <p className="font-display text-lg font-bold sm:mt-2 sm:text-2xl lg:text-3xl">{leadStory.outlet}</p>
              </div>
            </div>
            <div className="flex flex-col p-5 sm:p-7 lg:p-9">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-technical text-xs font-bold uppercase tracking-[0.12em] text-steel-700">
                <span>{leadStory.category}</span>
                <span className="size-1 rounded-full bg-brand-red" aria-hidden="true" />
                <time dateTime={leadStory.dateTime}>{leadStory.date}</time>
              </div>
              <h3 id="lead-story-title" className="mt-4 max-w-3xl font-display text-xl font-bold leading-[1.16] tracking-[-0.02em] sm:text-2xl lg:text-[2rem]">
                {leadStory.title}
              </h3>
              <p className="mt-4 hidden max-w-2xl text-base leading-7 text-steel-700 sm:block">{leadStory.summary}</p>
              <div className="mt-auto pt-4 sm:pt-5">
                <ArticleLink href={leadStory.href} label={`Read on ${leadStory.outlet}`} />
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {moreCoverage.map((article, index) => (
              <article key={article.href} aria-labelledby={`coverage-${index}`} className="group grid grid-cols-[112px_1fr] overflow-hidden border border-ink-900/10 bg-white transition hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_18px_44px_rgba(13,43,110,0.08)] sm:grid-cols-[168px_1fr]">
                <div className="relative aspect-square self-start overflow-hidden bg-surface-100">
                  <Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 640px) 168px, 112px" className="object-cover transition duration-500 group-hover:scale-[1.025]" style={{ objectPosition: article.imagePosition }} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(6,13,30,0.26))]" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-col p-4 sm:p-5">
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-x-3">
                    <p className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">{article.outlet}</p>
                    <time dateTime={article.dateTime} className="text-xs text-steel-700">{article.date}</time>
                  </div>
                  <p className="mt-3 hidden font-technical text-[10px] font-bold uppercase tracking-[0.14em] text-steel-700 sm:block">{article.category}</p>
                  <h3 id={`coverage-${index}`} className="mt-3 font-display text-lg font-bold leading-[1.2] sm:text-xl">{article.title}</h3>
                  <p className="mt-3 hidden text-sm leading-6 text-steel-700 xl:line-clamp-2 xl:block">{article.summary}</p>
                  <div className="mt-auto pt-3">
                    <ArticleLink href={article.href} label="Read coverage" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Media and project enquiries"
        headline="Connect with the ARS team."
        body="Speak with us about ARS products, project requirements or company information."
        primaryLabel="Contact ARS"
        primaryHref="/contact"
        secondaryLabel="Explore products"
        secondaryHref="/products"
        tone="solid"
      />
    </main>
  );
}
