import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AudienceGuidePage } from "@/components/homeowners-guide-page";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
import { getLegacyPage, getLegacyTopLevelPages } from "@/lib/legacy-content";
import { isProductionSite, toProductionUrl } from "@/lib/site-metadata";

const audienceGuideSlugs = [
  "tmt-steel-bar-guide-homeowners",
  "tmt-steel-bar-guide-engineers-architects",
  "tmt-steel-bar-guide-civil-contractors",
  "steel-distributors-dealers",
] as const;

type AudienceGuideSlug = (typeof audienceGuideSlugs)[number];

function isAudienceGuideSlug(slug: string): slug is AudienceGuideSlug {
  return audienceGuideSlugs.includes(slug as AudienceGuideSlug);
}

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
    robots: { index: isProductionSite, follow: isProductionSite },
    alternates: { canonical: toProductionUrl(page.path) },
    openGraph: {
      title: `${page.title} | ARS Green Steel`,
      description: page.description,
      url: toProductionUrl(page.path),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ARS Green Steel`,
      description: page.description,
    },
  };
}

export default async function LegacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegacyPage(slug);

  if (!page || page.kind === "blog") {
    notFound();
  }

  if (isAudienceGuideSlug(slug)) {
    return <AudienceGuidePage slug={slug} />;
  }

  return <LegacyPageRenderer page={page} />;
}
