import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Factory,
  Hammer,
  Leaf,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { ResponsiveHeroImage } from "@/components/responsive-hero-image";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import {
  TmtSteelBarWeightGuide,
  tmtSteelBarWeightFaqs,
  tmtSteelBarWeightHeadings,
} from "@/components/tmt-steel-bar-weight-guide";
import { getBlogArchiveArticles, type BlogArchiveArticle } from "@/lib/blog-content";
import { getBlogMigrationEntry } from "@/lib/blog-migration";
import type { LegacyPage } from "@/lib/legacy-content";

type ArticleSection = {
  id: string;
  title: string;
  body: string;
};

type ArticleHeading = Pick<ArticleSection, "id" | "title">;

const topicIcon = {
  "TMT products": Hammer,
  "Construction knowledge": SearchCheck,
  "Green steel": Leaf,
  "Manufacturing & quality": ShieldCheck,
  "Industry insights": Factory,
} satisfies Record<BlogArchiveArticle["category"], typeof Hammer>;

const topicCta = {
  "TMT products": {
    eyebrow: "Choose the right steel",
    title: "Compare ARS Fe 550D and CRS 550D before you buy.",
    body: "Move from article research to product selection, steel quantity planning, or a quote from the ARS team.",
    primaryLabel: "View products",
    primaryHref: "/products",
    secondaryLabel: "Calculate TMT quantity",
    secondaryHref: "/tmt-steel-calculator",
  },
  "Construction knowledge": {
    eyebrow: "Plan your project",
    title: "Turn construction guidance into a steel estimate.",
    body: "Use the calculator, check current buying routes, or connect with ARS for project-specific support.",
    primaryLabel: "Use TMT calculator",
    primaryHref: "/tmt-steel-calculator",
    secondaryLabel: "Request quote",
    secondaryHref: "/request-quote",
  },
  "Green steel": {
    eyebrow: "Build responsibly",
    title: "Explore ARS Green Steel for lower-impact construction.",
    body: "Review the ARS Green Steel process, sustainability proof, and corrosion-resistance product routes.",
    primaryLabel: "Explore green steel",
    primaryHref: "/ars-green-steel",
    secondaryLabel: "View CRS 550D",
    secondaryHref: "/product-crs-550d",
  },
  "Manufacturing & quality": {
    eyebrow: "Verify the steel",
    title: "Review ARS quality, testing, and manufacturing proof.",
    body: "See how ARS supports strength, consistency, and buyer confidence from plant to project site.",
    primaryLabel: "View quality proof",
    primaryHref: "/our-quality",
    secondaryLabel: "Manufacturing process",
    secondaryHref: "/manufacturing",
  },
  "Industry insights": {
    eyebrow: "Market support",
    title: "Need today’s rate or dealer support for your next purchase?",
    body: "Move from market context to current price guidance, nearby dealer discovery, or a direct quote.",
    primaryLabel: "Check steel price",
    primaryHref: "/tmt-steel-price-today",
    secondaryLabel: "Find a dealer",
    secondaryHref: "/our-network",
  },
} satisfies Record<BlogArchiveArticle["category"], {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}>;

const acronymWords = ["ARS", "TMT", "CRS", "SGS", "EPD", "ISO", "SERC", "BIS", "NHAI", "PWD", "GRIHA", "RCC", "PCC", "TDS", "GST", "HYSD", "TOR"];
const productionDomain = "https://arsgroup.in";

function getBlogHeroMobileSrc(slug: string) {
  const fileName = slug
    .replace(/\.html$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-|-$/g, "");

  return ["", "ars-assets", "cwv", "blog", `${fileName}-mobile.webp`].join("/");
}

function sentenceCaseTitle(title: string) {
  if (title.length <= 5 || acronymWords.includes(title)) return title;

  return title
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(
      /\b(Ars|Tmt|Crs|Sgs|Epd|Iso|Serc|Bis|Nhai|Pwd|Griha|Rcc|Pcc|Tds|Gst|Hysd|Tor)\b/g,
      (word) => word.toUpperCase(),
    );
}

function isInternalMigrationCopy(text: string) {
  const normalized = text.toLowerCase();
  return [
    "retained from the original ars blog",
    "retained from the original ars page",
    "retained for content parity",
    "reviewed for final editorial polish",
    "final page-level polish",
    "original section retained",
    "old ars website",
    "source page",
    "asset download",
    "before production approval",
    "client verification",
  ].some((phrase) => normalized.includes(phrase));
}

function cleanBodyCopy(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function sectionId(title: string, index: number) {
  const id = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return id || `section-${index + 1}`;
}

function decodeHeadingText(value: string) {
  const namedEntities: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
      if (code.startsWith("#x")) {
        return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
      }
      if (code.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
      }
      return namedEntities[code.toLowerCase()] ?? entity;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function prepareArticleHtml(html: string) {
  const headings: ArticleHeading[] = [];
  const idCounts = new Map<string, number>();
  const headingPattern = /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi;

  const contentHtml = html.replace(headingPattern, (heading, level: string, attributes: string, content: string) => {
    const title = decodeHeadingText(content);

    if (!title) return heading;

    const baseId = sectionId(title, headings.length);
    const occurrence = (idCounts.get(baseId) ?? 0) + 1;
    const id = occurrence === 1 ? baseId : `${baseId}-${occurrence}`;
    const attributesWithoutId = attributes.replace(/\s+id\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");

    idCounts.set(baseId, occurrence);
    headings.push({ id, title: sentenceCaseTitle(title) });

    return `<h${level}${attributesWithoutId} id="${id}">${content}</h${level}>`;
  });

  return { contentHtml, headings };
}

function getArticleSections(page: LegacyPage): ArticleSection[] {
  const seen = new Set<string>();

  return page.sections
    .filter((section) => section.title && section.body && !isInternalMigrationCopy(section.body))
    .slice(0, 18)
    .map((section, index) => {
      const baseId = sectionId(section.title, index);
      const id = seen.has(baseId) ? `${baseId}-${index + 1}` : baseId;
      seen.add(baseId);

      return {
        id,
        title: sentenceCaseTitle(section.title),
        body: cleanBodyCopy(section.body),
      };
    });
}

function getRelatedArticles(article: BlogArchiveArticle) {
  return getBlogArchiveArticles()
    .filter((item) => item.href !== article.href)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (a.category !== article.category && b.category === article.category) return 1;
      return b.dateValue - a.dateValue || a.title.localeCompare(b.title);
    })
    .slice(0, 3);
}

export function BlogArticleTemplate({
  page,
  article,
}: {
  page: LegacyPage;
  article: BlogArchiveArticle;
}) {
  const sections = getArticleSections(page);
  const relatedArticles = getRelatedArticles(article);
  const TopicIcon = topicIcon[article.category];
  const cta = topicCta[article.category];
  const registryEntry = getBlogMigrationEntry(article.slug);
  const articleTitle = registryEntry?.renderedH1 || registryEntry?.sourceH1 || registryEntry?.title || article.title;
  const articleImage = registryEntry?.featuredImage?.url || article.image;
  const articleImageAlt = registryEntry?.featuredImage?.alt || article.imageAlt;
  const fallbackSections = sections.length
    ? sections
    : [{ id: "overview", title: "Overview", body: article.excerpt }];
  const preparedArticle = registryEntry?.fullContentHtml
    ? prepareArticleHtml(registryEntry.fullContentHtml)
    : null;
  const isTmtSteelBarWeightGuide = article.href === "/blog/tmt-steel-bar-weight.html";
  const articleHeadings = preparedArticle?.headings ?? fallbackSections;
  const visibleArticleHeadings = isTmtSteelBarWeightGuide
    ? tmtSteelBarWeightHeadings
    : articleHeadings.slice(0, 10);
  const hasArticleNavigation = visibleArticleHeadings.length > 0;

  const articleUrl = `${productionDomain}/blog/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#blogposting`,
    headline: articleTitle,
    description: registryEntry?.yoastMetaDescription || article.excerpt,
    image: articleImage.startsWith("http") ? articleImage : `${productionDomain}${articleImage}`,
    author: {
      "@type": "Organization",
      "@id": `${productionDomain}/#organization`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${productionDomain}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    datePublished: registryEntry?.publishDate?.slice(0, 10) || article.dateLabel || undefined,
    dateModified:
      registryEntry?.modifiedDate?.slice(0, 10) ||
      registryEntry?.publishDate?.slice(0, 10) ||
      article.dateLabel ||
      undefined,
  };
  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
  const faqJsonLdString = isTmtSteelBarWeightGuide
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tmtSteelBarWeightFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }).replace(/</g, "\\u003c")
    : null;

  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      {faqJsonLdString ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
        />
      ) : null}

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-bg-dark text-white">
        <ResponsiveHeroImage
          desktopSrc={articleImage}
          mobileSrc={getBlogHeroMobileSrc(article.slug)}
          alt={articleImageAlt}
          className="object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,30,0.96)_0%,rgba(6,13,30,0.82)_48%,rgba(6,13,30,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,13,30,0.72),transparent_58%)]" />

        <div className="ars-page-hero-content h-full ars-container relative z-10 flex items-end pb-12 pt-32 lg:pb-16">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(280px,0.32fr)] lg:items-end">
            <div className="max-w-5xl">
              <SectionKicker variant="light">ARS knowledge center</SectionKicker>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex min-h-9 items-center gap-2 rounded-[6px] bg-brand-red px-3 py-1.5 font-technical text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white">
                  <TopicIcon size={15} aria-hidden="true" />
                  {article.category}
                </span>
                <ArticleMeta article={article} light />
              </div>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-normal text-white">
                {articleTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/74 md:text-lg">
                {article.excerpt}
              </p>
            </div>

            <div className="border-l border-white/18 pl-6 lg:justify-self-end lg:pl-8 lg:pr-14 2xl:pr-0">
              <p className="font-technical text-xs font-medium uppercase tracking-[0.2em] text-white/54">
                Article guide
              </p>
              <div className="mt-5 grid grid-cols-2 gap-6">
                <div>
                  <strong className="block font-display text-3xl font-bold text-white">
                    {visibleArticleHeadings.length}
                  </strong>
                  <span className="mt-1 block text-sm text-white/58">Sections</span>
                </div>
                <div>
                  <strong className="block font-display text-3xl font-bold text-white">
                    {article.readTime.replace(" min read", "")}
                  </strong>
                  <span className="mt-1 block text-sm text-white/58">Min read</span>
                </div>
              </div>
              <a
                href="#article-content"
                className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2 rounded-[8px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
              >
                Start reading <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" id="article-content">
        <div className={hasArticleNavigation
          ? "ars-container lg:grid lg:max-w-[1180px] lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10"
          : "ars-container max-w-[860px]"
        }>
          {hasArticleNavigation ? <aside className="hidden lg:block">
            <nav aria-label="In this article" className="sticky top-28 rounded-[8px] border border-brand-blue/12 bg-white p-5">
              <p className="font-technical text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">On this page</p>
              <ol className="mt-5 grid gap-1">
                {visibleArticleHeadings.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="focus-ring group flex min-h-11 items-start gap-3 py-1.5 text-sm font-semibold leading-5 text-steel-700 transition hover:text-brand-blue">
                      <span className="mt-0.5 shrink-0 whitespace-nowrap font-technical text-[0.65rem] font-bold tracking-[0.12em] text-brand-red/70 transition group-hover:text-brand-red">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-2">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside> : null}

          <div className="min-w-0">
            {hasArticleNavigation ? <details className="group mb-7 border border-brand-blue/12 bg-white lg:hidden">
              <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 font-technical text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                On this page
                <span aria-hidden="true" className="relative flex size-7 items-center justify-center border border-brand-blue/35 text-brand-blue group-open:text-brand-red">
                  <span className="absolute h-3 w-0.5 bg-current" />
                  <span className="h-0.5 w-3 bg-current transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <nav aria-label="In this article" className="border-t border-brand-blue/12 px-5 py-3">
                <ol className="grid gap-1">
                  {visibleArticleHeadings.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="focus-ring flex min-h-11 items-start gap-3 py-2 text-sm font-semibold leading-5 text-steel-700 transition hover:text-brand-blue">
                        <span className="shrink-0 whitespace-nowrap font-technical text-[0.65rem] font-bold tracking-[0.12em] text-brand-red/70">{String(index + 1).padStart(2, "0")}</span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details> : null}

            <article className="min-w-0 bg-white px-0 py-1 md:py-3">
            <div className="mb-10 rounded-[8px] border border-brand-blue/12 bg-surface-50 p-5">
              <div className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[8px] bg-brand-blue text-white">
                  <CheckCircle2 size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-ink-900">Quick takeaway</p>
                  <p className="mt-2 text-base leading-7 text-steel-700">{article.excerpt}</p>
                </div>
              </div>
            </div>

            {isTmtSteelBarWeightGuide ? (
              <TmtSteelBarWeightGuide />
            ) : preparedArticle ? (
              <div className="blog-source-content" dangerouslySetInnerHTML={{ __html: preparedArticle.contentHtml }} />
            ) : fallbackSections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={index === 0 ? "scroll-mt-28" : "mt-12 scroll-mt-28 border-t border-brand-blue/10 pt-10"}
              >
                <p className="mb-4 font-technical text-xs font-medium uppercase tracking-[0.18em] text-brand-blue">
                  Section {index + 1}
                </p>
                <h2 className="section-title max-w-none">{section.title}</h2>
                <p className="mt-6 text-lg leading-9 text-steel-700">{section.body}</p>
              </section>
            ))}
            </article>

            <section className="mt-12 border-t border-brand-blue/14 pt-8 md:mt-16 md:pt-10" aria-labelledby="article-next-step">
              <div className="grid gap-7 rounded-[8px] bg-brand-blue px-6 py-7 text-white md:px-8 md:py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="font-technical text-xs font-semibold uppercase tracking-[0.2em] text-white/58">Next step</p>
                  <h2 id="article-next-step" className="mt-4 font-display text-[clamp(1.65rem,2.5vw,2.1rem)] font-bold leading-[1.08] text-white">{cta.title}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">{cta.body}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[330px] lg:grid-cols-1">
                <Link
                  href={cta.primaryHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-bold text-brand-blue transition hover:bg-surface-50"
                >
                  {cta.primaryLabel} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href={cta.secondaryHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-[8px] border border-white/28 px-5 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
                >
                  {cta.secondaryLabel}
                </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="ars-container">
          <div className="grid items-end gap-6 border-b border-brand-blue/12 pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]">
            <div>
              <SectionKicker>{cta.eyebrow}</SectionKicker>
              <h2 className="section-title">Read more from the ARS knowledge center.</h2>
            </div>
            <p className="section-copy section-copy-flush lg:justify-self-end">
              Continue with related steel, construction, quality, and sustainability guidance.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <RelatedArticleCard key={related.href} article={related} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Speak with ARS"
        headline="Need product, price, or dealer support?"
        body="Connect with ARS for steel selection, current rates, quantity planning, dealer discovery, or project quote support."
        primaryLabel="Request quote"
        primaryHref="/request-quote"
        secondaryLabel="Find a dealer"
        secondaryHref="/our-network"
      />
    </main>
  );
}

function ArticleMeta({
  article,
  light = false,
}: {
  article: BlogArchiveArticle;
  light?: boolean;
}) {
  const textColor = light ? "text-white/64" : "text-grey-600";

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium ${textColor}`}>
      {article.dateLabel ? (
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays size={14} aria-hidden="true" />
          {article.dateLabel}
        </span>
      ) : null}
      <span className="inline-flex items-center gap-1.5">
        <BookOpen size={14} aria-hidden="true" />
        {article.readTime}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 size={14} aria-hidden="true" />
        Updated for ARS readers
      </span>
    </div>
  );
}

function RelatedArticleCard({ article }: { article: BlogArchiveArticle }) {
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[8px] border border-brand-blue/10 bg-surface-50 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/28">
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
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-technical text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-brand-red">
          {article.category}
        </span>
        <h3 className="mt-3 font-display text-xl font-bold leading-[1.22] text-ink-900">
          <Link href={article.href} className="focus-ring transition group-hover:text-brand-blue">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-steel-700">{article.excerpt}</p>
        <Link
          href={article.href}
          className="focus-ring mt-auto inline-flex min-h-11 items-end gap-2 pt-5 text-sm font-bold text-brand-blue transition hover:text-brand-red"
        >
          Read article <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
