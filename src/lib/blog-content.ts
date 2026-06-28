import type { LegacyPage } from "@/lib/legacy-content";
import { getLegacyBlogPages } from "@/lib/legacy-content";

export const blogCategories = [
  "All topics",
  "TMT products",
  "Construction knowledge",
  "Green steel",
  "Manufacturing & quality",
  "Industry insights",
] as const;

export type BlogCategory = Exclude<(typeof blogCategories)[number], "All topics">;

export type BlogArchiveArticle = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  dateLabel: string | null;
  dateValue: number;
  readTime: string;
  image: string;
  imageAlt: string;
};

const categoryImages: Record<BlogCategory, string> = {
  "TMT products": "/ars-assets/products-all.png",
  "Construction knowledge": "/ars-assets/home-owner-banner-1.png",
  "Green steel": "/ars-assets/ARS-green-bg.png",
  "Manufacturing & quality": "/ars-assets/our-quality-1.png",
  "Industry insights": "/ars-assets/right-about-us.png-compress.webp",
};

const genericTitlePatterns = [
  /^get estimate$/i,
  /^properties/i,
  /^some of the factors/i,
  /^grade are assigned/i,
  /^factors that need/i,
  /^there are different/i,
  /^the basics of/i,
  /^a few reminders/i,
  /^let.?s look/i,
  /^mild steel tmt bars$/i,
  /^what is a reinforcement bar/i,
  /^the significance/i,
  /^reliable and resilient/i,
  /^about the tmt bars/i,
  /^what is a steel bar/i,
  /^how come/i,
  /^types of tmt bars in india/i,
  /^rebar$/i,
  /^tor steel & tmt bar/i,
  /^tackle climate change/i,
  /^tmt steel bars$/i,
  /^benefits of using ars/i,
  /^tmt bars: ars/i,
  /^process of manufacturing$/i,
  /^simply supported beam$/i,
  /^foundation of construction$/i,
  /^raw material costs$/i,
];

const smallWords = new Set(["a", "an", "and", "at", "for", "in", "of", "on", "the", "to", "vs"]);

function titleFromSlug(slug: string) {
  const words = slug
    .replace(/^blog\//, "")
    .replace(/\.html$/, "")
    .split("-")
    .filter(Boolean);

  return words
    .map((word, index) => {
      const normalized = word.toLowerCase();
      const acronym = {
        ars: "ARS",
        crs: "CRS",
        gst: "GST",
        hysd: "HYSD",
        pcc: "PCC",
        rcc: "RCC",
        tds: "TDS",
        tmt: "TMT",
        tor: "TOR",
      }[normalized];

      if (acronym) return acronym;
      if (/^\d+$/.test(normalized) && words[index + 1] === "mm") return `${normalized}mm`;
      if (normalized === "mm" && /^\d+$/.test(words[index - 1] ?? "")) return "";
      if (index > 0 && smallWords.has(normalized)) return normalized;
      return normalized.charAt(0).toUpperCase() + normalized.slice(1);
    })
    .filter(Boolean)
    .join(" ");
}

function cleanTitle(page: LegacyPage) {
  const title = page.title.trim();
  const shouldUseSlug =
    title.length < 18 ||
    genericTitlePatterns.some((pattern) => pattern.test(title)) ||
    /^(what is|the different|tips for proper)/i.test(title) && title.length < 32;

  return shouldUseSlug ? titleFromSlug(page.slug) : title;
}

function cleanText(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/^(?:[A-Z][a-z]+ \d{1,2}, \d{4} )?Read time:\s*\d+\s*mins?\s*Social share\s*/i, "")
    .replace(/^Sign up with your email address.*?consent to receive emails from this site\.\*\s*/i, "")
    .trim();
}

function getExcerpt(page: LegacyPage, title: string) {
  const candidates = [page.intro, page.description, page.paragraphs?.[0], page.sections?.[0]?.body]
    .filter(Boolean)
    .map((value) => cleanText(value as string))
    .filter(
      (value) =>
        value.length > 55 &&
        !/sign up with your email|person name|customer help line|tmt steel calculator/i.test(value),
    );

  let excerpt = candidates[0] ?? "Practical guidance from ARS for safer, stronger, and better-informed construction decisions.";
  if (excerpt.toLowerCase().startsWith(title.toLowerCase())) {
    excerpt = excerpt.slice(title.length).trim();
  }

  if (excerpt.length > 190) {
    excerpt = `${excerpt.slice(0, 187).trimEnd()}...`;
  }

  return excerpt;
}

function getCategory(page: LegacyPage): BlogCategory {
  const value = `${page.slug} ${page.title}`.toLowerCase();

  if (/(green-steel|greenpro|corrosion|sustainab|carbon)/.test(value)) {
    return "Green steel";
  }

  if (/(gst|regulation|imports|industry|rural|future|leading-steel|chennai-tmt)/.test(value)) {
    return "Industry insights";
  }

  if (/(manufactur|quality|tds|storage|flexib|last-long|durab|testing)/.test(value)) {
    return "Manufacturing & quality";
  }

  if (
    /(foundation|footing|beam|column|slab|concrete|rcc|pcc|house-construction|centering|curing|bar-bending|building-material|piling|cracks)/.test(
      value,
    )
  ) {
    return "Construction knowledge";
  }

  return "TMT products";
}

function getDate(page: LegacyPage) {
  const match = page.description.match(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}\b/,
  );

  if (!match) {
    return { dateLabel: null, dateValue: 0 };
  }

  const date = new Date(match[0]);
  return {
    dateLabel: match[0],
    dateValue: Number.isNaN(date.getTime()) ? 0 : date.getTime(),
  };
}

function getReadTime(page: LegacyPage) {
  const match = page.description.match(/Read time:\s*(\d+)\s*mins?/i);
  return `${match?.[1] ?? "4"} min read`;
}

export function getBlogArchiveArticles(): BlogArchiveArticle[] {
  return getLegacyBlogPages()
    .map((page) => {
      const category = getCategory(page);
      const title = cleanTitle(page);
      const date = getDate(page);

      return {
        slug: page.slug.replace(/^blog\//, ""),
        href: page.path,
        title,
        excerpt: getExcerpt(page, title),
        category,
        ...date,
        readTime: getReadTime(page),
        image: categoryImages[category],
        imageAlt: `${category} guide from ARS Green Steel`,
      };
    })
    .sort((a, b) => b.dateValue - a.dateValue || a.title.localeCompare(b.title));
}
