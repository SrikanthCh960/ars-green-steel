import type { MetadataRoute } from "next";
import { getLegacyPages } from "@/lib/legacy-content";

const baseUrl = "https://arsgroup.in";

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
  "/privacy-policy",
  "/products",
  "/products/ars-550d",
  "/products/ars-crs-550d",
  "/projects",
  "/request-quote",
  "/services",
  "/steel-price-today",
  "/tmt-calculator",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const seen = new Set<string>();

  return [...staticRoutes, ...getLegacyPages().map((page) => page.path)]
    .filter((route) => {
      const normalized = route || "/";
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    })
    .map((route) => ({
      url: `${baseUrl}${route === "/" ? "" : route}`,
      lastModified: today,
      changeFrequency: route.includes("/blog/") ? "monthly" : "weekly",
      priority: route === "/" ? 1 : route.includes("/blog/") ? 0.55 : 0.75,
    }));
}
