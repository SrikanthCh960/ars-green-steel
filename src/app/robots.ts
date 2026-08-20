import type { MetadataRoute } from "next";
import { isIndexingEnabled, productionDomain } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: isIndexingEnabled ? `${productionDomain}/sitemap.xml` : undefined,
  };
}
