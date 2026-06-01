import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
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

  return {
    title: `${page.title} | ARS Green Steel`,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: `${page.title} | ARS Green Steel`,
      description: page.description,
      url: page.path,
      type: "article",
    },
  };
}

export default async function LegacyBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegacyPage(`blog/${slug}`);

  if (!page) {
    notFound();
  }

  return <LegacyPageRenderer page={page} />;
}
