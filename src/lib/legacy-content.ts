import legacyData from "@/data/legacy-pages.json";

export type LegacyAsset = {
  sourceUrl: string;
  type: "image" | "pdf" | "video-file" | "asset";
  fileName: string;
  intendedLocalPath: string;
  downloaded?: boolean;
  localPath?: string;
  pageSlug: string;
};

export type LegacyVideo = {
  type: "youtube" | "embed";
  url: string;
};

export type LegacyPage = {
  slug: string;
  kind: "legacy" | "blog";
  path: string;
  sourceUrl: string;
  title: string;
  description: string;
  intro: string;
  sections: { title: string; body: string }[];
  paragraphs: string[];
  assets: LegacyAsset[];
  videos: LegacyVideo[];
  contact: {
    phones: string[];
    emails: string[];
    addresses: { label: string; text: string }[];
  };
  needsClientVerification: boolean;
};

const pages = legacyData.pages as LegacyPage[];

export function getLegacyPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}

export function getLegacyPages() {
  return pages;
}

export function getLegacyBlogPages() {
  return pages.filter((page) => page.kind === "blog");
}

export function getLegacyTopLevelPages() {
  return pages.filter((page) => page.kind !== "blog");
}
