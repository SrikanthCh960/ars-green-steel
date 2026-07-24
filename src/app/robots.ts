import type { MetadataRoute } from "next";
import { isProductionSite, productionDomain } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${productionDomain}/sitemap.xml`,
  };
}
