import type { MetadataRoute } from "next";
import { getBlogMigrationRegistry } from "@/lib/blog-migration";
import { getLegacyTopLevelPages } from "@/lib/legacy-content";
import { productionDomain } from "@/lib/site-metadata";

const staticRoutes = [
  "",
  "/about",
  "/become-a-dealer",
  "/certifications",
  "/contact",
  "/dealer-locator",
  "/green-steel",
  "/industries",
  "/manufacturing",
  "/our-quality",
  "/our-team",
  "/vision-mission",
  "/privacy-policy",
  "/products",
  "/products/ars-550d",
  "/products/ars-binders",
  "/products/ars-crs-550d",
  "/projects",
  "/request-quote",
  "/services",
  "/steel-price-today",
  "/tmt-calculator",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const seen = new Set<string>();

  const approvedBlogRoutes = getBlogMigrationRegistry()
    .filter((entry) => entry.migrationStatus === "Migrated — approved")
    .map((entry) => new URL(entry.finalUrl).pathname);

  return [
    ...staticRoutes,
    ...getLegacyTopLevelPages()
      .filter((page) => page.path !== "/our-certification")
      .map((page) => page.path),
    ...approvedBlogRoutes,
  ]
    .filter((route) => {
      const normalized = route || "/";
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    })
    .map((route) => ({
      url: `${productionDomain}${route === "/" ? "" : route}`,
      lastModified: today,
      changeFrequency: route.includes("/blog/") ? "monthly" : "weekly",
      priority: route === "/" ? 1 : route.includes("/blog/") ? 0.55 : 0.75,
    }));
}
