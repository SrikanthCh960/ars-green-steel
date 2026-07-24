import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AudienceGuidePage } from "@/components/homeowners-guide-page";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
import { bridgesFlyoversProjectPage, institutionalProjectPage, ProjectTypePage, roadProjectPage } from "@/components/project-type-page";
import { getLegacyPage, getLegacyTopLevelPages } from "@/lib/legacy-content";
import { createPageMetadata, isProductionSite, toProductionUrl } from "@/lib/site-metadata";

const audienceGuideSlugs = [
  "tmt-steel-bar-guide-homeowners",
  "tmt-steel-bar-guide-engineers-architects",
  "tmt-steel-bar-guide-civil-contractors",
  "steel-distributors-dealers",
] as const;

type AudienceGuideSlug = (typeof audienceGuideSlugs)[number];
const roadProjectSlug = "road-projects-tmt-steel-bars";
const bridgesFlyoversProjectSlug = "bridges-projects-tmt-steel-bars";
const institutionalProjectSlug = "institutions-projects-tmt-steel-bars";

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

  if (slug === roadProjectSlug) {
    return createPageMetadata({
      title: "TMT Bars for Road Projects | ARS Green Steel",
      description: roadProjectPage.description,
      path: page.path,
      image: "/legacy-assets/images/CRS.png",
    });
  }

  if (slug === bridgesFlyoversProjectSlug) {
    return createPageMetadata({
      title: "TMT Bars for Bridges and Flyovers | ARS Green Steel",
      description: bridgesFlyoversProjectPage.description,
      path: page.path,
      image: "/legacy-assets/images/CRS.png",
    });
  }

  if (slug === institutionalProjectSlug) {
    return createPageMetadata({
      title: "TMT Bars for Institutional Projects | ARS Green Steel",
      description: institutionalProjectPage.description,
      path: page.path,
      image: "/legacy-assets/images/TMT-Bars.png",
    });
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

  if (slug === roadProjectSlug) {
    return <ProjectTypePage {...roadProjectPage} />;
  }

  if (slug === bridgesFlyoversProjectSlug) {
    return <ProjectTypePage {...bridgesFlyoversProjectPage} />;
  }

  if (slug === institutionalProjectSlug) {
    return <ProjectTypePage {...institutionalProjectPage} />;
  }

  return <LegacyPageRenderer page={page} />;
}
