import type { Metadata } from "next";

export const productionDomain = "https://arsgroup.in";
export const defaultSocialImage = "/ars-assets/ARS-green-bg.png";

export const isProductionSite =
  process.env.NEXT_PUBLIC_SITE_URL === productionDomain;

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
  const url = toProductionUrl(path);
  const socialImage = toProductionUrl(image);

  return {
    title,
    description,
    robots: {
      index: isProductionSite,
      follow: isProductionSite,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "ARS Green Steel",
      type,
      images: [{ url: socialImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
