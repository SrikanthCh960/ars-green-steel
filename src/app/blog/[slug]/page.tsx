import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { getBlogArchiveArticle, getBlogExcerpt, cleanBlogTitle } from "@/lib/blog-content";
import { getBlogMigrationEntry } from "@/lib/blog-migration";
import { getLegacyBlogPages, getLegacyPage } from "@/lib/legacy-content";

const productionDomain = "https://arsgroup.in";
const isProductionDomain = process.env.NEXT_PUBLIC_SITE_URL === productionDomain;

function toProductionAssetUrl(value: string) {
  return value.startsWith("/") ? `${productionDomain}${value}` : value;
}

export function generateStaticParams() {
  return getLegacyBlogPages().map((page) => ({ slug: page.slug.replace(/^blog\//, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(`blog/${slug}`);

  if (!page) {
    return {};
  }

  const article = getBlogArchiveArticle(slug);
  const registryEntry = getBlogMigrationEntry(slug);
  const title = registryEntry?.yoastSeoTitle || article?.title || cleanBlogTitle(page);
  const description = registryEntry?.yoastMetaDescription || article?.excerpt || getBlogExcerpt(page, title);
  const image = registryEntry?.featuredImage?.url || article?.image;
  const imageAlt = registryEntry?.featuredImage?.alt || article?.imageAlt || title;
  const metadataImage = image ? toProductionAssetUrl(image) : undefined;

  const finalUrl = `${productionDomain}/blog/${slug}`;

  return {
    title,
    description,
    robots: {
      index: isProductionDomain,
      follow: isProductionDomain,
    },
    alternates: {
      canonical: finalUrl,
    },
    openGraph: {
      title,
      description,
      url: finalUrl,
      type: "article",
      images: metadataImage ? [{ url: metadataImage, alt: imageAlt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: metadataImage ? [metadataImage] : undefined,
    },
  };
}

export default async function LegacyBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegacyPage(`blog/${slug}`);

  if (!page) {
    notFound();
  }

  const article = getBlogArchiveArticle(slug);

  if (!article) {
    notFound();
  }

  return <BlogArticleTemplate page={page} article={article} />;
}
