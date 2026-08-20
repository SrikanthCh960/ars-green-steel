import { toProductionUrl } from "@/lib/site-metadata";

type ProductPageSchemaInput = {
  path: string;
  name: string;
  description: string;
  image: string;
};

export function createProductPageWebPageJsonLd({
  path,
  name,
  description,
  image,
}: ProductPageSchemaInput) {
  const url = toProductionUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: toProductionUrl(image),
    },
    isPartOf: {
      "@id": "https://arsgroup.in/#website",
    },
    publisher: {
      "@id": "https://arsgroup.in/#organization",
    },
  };
}

export function serializeJsonLd(jsonLd: object) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}
