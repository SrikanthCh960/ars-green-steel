import BecomeDealerPage from "@/app/become-a-dealer/page";
import { createPageMetadata, getSeoMetadata, productionDomain } from "@/lib/site-metadata";

const pagePath = "/become-a-steel-distributor";
const pageUrl = `${productionDomain}${pagePath}`;
const seo = getSeoMetadata(pagePath);

export const metadata = createPageMetadata({
  title: "Become a Steel Dealer or Distributor | ARS Green Steel",
  description: "Get pioneered to become a part of ARS Steels - Best TMT Bar Manufacturer and Suppliers in South India",
  path: pagePath,
});

const distributorJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo?.title ?? "Become a Steel Dealer or Distributor | ARS Green Steel",
      description:
        seo?.description ??
        "Get pioneered to become a part of ARS Steels - Best TMT Bar Manufacturer and Suppliers in South India",
      inLanguage: "en-IN",
      about: { "@id": `${pageUrl}#service` },
      publisher: { "@id": `${productionDomain}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Steel Distributor Partnership Program",
      serviceType: "Distributor Partnership",
      provider: { "@id": `${productionDomain}/#organization` },
      description:
        "ARS invites prospective steel dealers and distributors to submit an enquiry and discuss product and supply requirements.",
    },
  ],
};

const distributorJsonLdString = JSON.stringify(distributorJsonLd).replace(/</g, "\\u003c");

export default function BecomeSteelDistributorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: distributorJsonLdString }}
      />
      <BecomeDealerPage />
    </>
  );
}
