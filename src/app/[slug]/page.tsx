import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
import { getLegacyPage, getLegacyTopLevelPages } from "@/lib/legacy-content";

export function generateStaticParams() {
  return getLegacyTopLevelPages()
    .filter((page) => page.slug !== "home")
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegacyPage(slug);

  if (!page || page.kind === "blog") {
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
      type: "website",
    },
  };
}

export default async function LegacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegacyPage(slug);

  if (!page || page.kind === "blog") {
    notFound();
  }

  return <LegacyPageRenderer page={page} />;
}
