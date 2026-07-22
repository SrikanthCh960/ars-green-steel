import registry from "@/data/blog-migration-registry.json";

export type BlogMigrationEntry = {
  originalUrl: string;
  finalUrl: string;
  slug: string;
  title: string;
  sourceH1?: string;
  renderedH1?: string;
  publishDate: string;
  modifiedDate: string;
  author: string;
  yoastSeoTitle: string;
  yoastMetaDescription: string;
  focusKeyword: string;
  categories: string[];
  tags: string[];
  fullContentHtml: string;
  images: { url: string; alt: string }[];
  featuredImage: { url: string; alt: string; sourceUrl?: string; fileName?: string } | null;
  migrationStatus: string;
  contentParityStatus: string;
  seoParityStatus: string;
  redirectStatus: string;
};

const entries = registry as BlogMigrationEntry[];
const normalizeRoute = (value: string) => value.replace(/^blog\//, "").replace(/\.html$/, "");

export function getBlogMigrationEntry(slug: string) {
  const route = normalizeRoute(slug);
  return entries.find(
    (entry) =>
      normalizeRoute(entry.slug) === route ||
      normalizeRoute(new URL(entry.originalUrl).pathname.replace(/^\//, "")) === route,
  );
}

export function getBlogMigrationRegistry() {
  return entries;
}
