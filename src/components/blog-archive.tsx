"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  blogCategories,
  type BlogArchiveArticle,
  type BlogCategory,
} from "@/lib/blog-content";

const INITIAL_ARTICLE_COUNT = 12;
const LOAD_MORE_COUNT = 9;

type ActiveCategory = (typeof blogCategories)[number];

export function BlogArchive({ articles }: { articles: BlogArchiveArticle[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All topics");
  const [visibleCount, setVisibleCount] = useState(INITIAL_ARTICLE_COUNT);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatches =
        activeCategory === "All topics" || article.category === activeCategory;
      const queryMatches =
        !normalizedQuery ||
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return categoryMatches && queryMatches;
    });
  }, [activeCategory, articles, query]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  function selectCategory(category: ActiveCategory) {
    setActiveCategory(category);
    setVisibleCount(INITIAL_ARTICLE_COUNT);
  }

  function clearSearch() {
    setQuery("");
    setVisibleCount(INITIAL_ARTICLE_COUNT);
  }

  return (
    <section className="bg-surface-50 py-20 lg:py-24" id="article-library">
      <div className="ars-container">
        <div className="grid items-end gap-8 border-b border-brand-blue/12 pb-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <p className="font-technical text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
              Article library
            </p>
            <h2 className="section-title mt-4">Explore every ARS guide.</h2>
            <p className="section-copy max-w-2xl">
              Search practical guidance on steel selection, construction planning, quality,
              sustainability, and the forces shaping the industry.
            </p>
          </div>

          <div className="focus-within:ring-brand-blue/22 flex min-h-14 items-center gap-3 rounded-[8px] border border-brand-blue/15 bg-white px-4 shadow-[var(--shadow-soft)] focus-within:border-brand-blue focus-within:ring-4">
            <Search className="shrink-0 text-brand-blue" size={20} aria-hidden="true" />
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(INITIAL_ARTICLE_COUNT);
              }}
              placeholder="Search articles or topics"
              className="min-w-0 flex-1 bg-transparent text-base text-ink-900 outline-none placeholder:text-grey-600"
            />
            {query ? (
              <button
                type="button"
                onClick={clearSearch}
                className="focus-ring inline-flex size-11 shrink-0 items-center justify-center rounded-full text-grey-600 transition hover:bg-surface-100 hover:text-brand-blue"
                aria-label="Clear article search"
              >
                <X size={18} />
              </button>
            ) : null}
          </div>
        </div>

        <div
          className="mt-7 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Filter articles by topic"
        >
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={isActive}
                className={`focus-ring min-h-11 shrink-0 rounded-[8px] border px-4 text-sm font-semibold transition ${
                  isActive
                    ? "border-brand-blue bg-brand-blue text-white"
                    : "border-brand-blue/12 bg-white text-steel-700 hover:border-brand-blue/35 hover:text-brand-blue"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-grey-600" aria-live="polite">
            Showing {Math.min(visibleArticles.length, filteredArticles.length)} of{" "}
            {filteredArticles.length} articles
          </p>
          {(query || activeCategory !== "All topics") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                selectCategory("All topics");
              }}
              className="focus-ring text-sm font-semibold text-brand-red transition hover:text-brand-blue"
            >
              Reset filters
            </button>
          )}
        </div>

        {visibleArticles.length ? (
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.href} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-6 border border-brand-blue/12 bg-white px-6 py-16 text-center shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-2xl font-bold text-ink-900">
              No matching articles found.
            </h3>
            <p className="mx-auto mt-3 max-w-lg leading-7 text-grey-600">
              Try a broader topic or clear the search to return to the full ARS knowledge library.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                selectCategory("All topics");
              }}
              className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
            >
              View all articles
            </button>
          </div>
        )}

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-[8px] border border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              Load more articles
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: BlogArchiveArticle }) {
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[8px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/28 hover:shadow-[0_20px_54px_rgba(13,43,110,0.12)]">
      <Link
        href={article.href}
        className="focus-ring relative block aspect-[16/9] overflow-hidden bg-surface-100"
        aria-label={`Read ${article.title}`}
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
          <Link
            href={article.href}
            className="focus-ring transition group-hover:text-brand-blue"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-steel-700">{article.excerpt}</p>

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
  );
}
