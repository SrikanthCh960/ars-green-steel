import type { Metadata } from "next";
import pageMetadata from "@/data/seo-metadata.json";
import blogMetadata from "@/data/seo-blog-metadata.json";

export const productionDomain = "https://arsgroup.in";
export const defaultSocialImage = "/ars-assets/ARS-green-bg.png";

/**
 * Indexing is an explicit deployment decision. Production must set this to
 * `true`; preview, staging, and local builds safely default to noindex.
 */
export const isIndexingEnabled =
  process.env.NEXT_PUBLIC_INDEXING_ENABLED?.trim().toLowerCase() === "true";

export function toProductionUrl(path: string) {
  return path.startsWith("http") ? path : `${productionDomain}${path}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

type SeoMetadataEntry = {
  path: string;
  title: string;
  description: string;
  focusKeyword: string;
};

const pageSeoMetadata = pageMetadata as SeoMetadataEntry[];
const blogSeoMetadata = blogMetadata as SeoMetadataEntry[];

export function getSeoMetadata(path: string) {
  return [...pageSeoMetadata, ...blogSeoMetadata].find((entry) => entry.path === path);
}

/**
 * Shared metadata for public pages. Canonicals and social URLs always identify
 * the intended production URL; preview environments remain noindex, nofollow.
 */
export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  type = "website",
}: PageMetadataInput): Metadata {
  const seo = getSeoMetadata(path);
  const resolvedTitle = seo?.title ?? title;
  const resolvedDescription = seo?.description ?? description;
  const url = toProductionUrl(path);
  const socialImage = toProductionUrl(image);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    robots: {
      index: isIndexingEnabled,
      follow: isIndexingEnabled,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: "ARS Green Steel",
      type,
      images: [{ url: socialImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [socialImage],
    },
  };
}
