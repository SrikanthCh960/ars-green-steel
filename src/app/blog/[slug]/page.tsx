import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { getBlogArchiveArticle, getBlogExcerpt, cleanBlogTitle } from "@/lib/blog-content";
import { getLegacyBlogPages, getLegacyPage } from "@/lib/legacy-content";

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
  const title = article?.title ?? cleanBlogTitle(page);
  const description = article?.excerpt ?? getBlogExcerpt(page, title);
  const image = article?.image;

  return {
    title: `${title} | ARS Green Steel`,
    description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: `${title} | ARS Green Steel`,
      description,
      url: page.path,
      type: "article",
      images: image ? [{ url: image, alt: article?.imageAlt ?? title }] : undefined,
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
