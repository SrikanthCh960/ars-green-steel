import { PriceCalculatorExperience } from "@/app/price-calculator/price-calculator-experience";
import { calculatorFaqs } from "@/data/tmt-calculator";
import { createPageMetadata, productionDomain } from "@/lib/site-metadata";

const pagePath = "/tmt-steel-calculator";
const calculatorUrl = `${productionDomain}${pagePath}`;

export const metadata = createPageMetadata({
  title: "TMT Steel Calculator for Construction Projects | ARS Green Steel",
  description:
    "Calculate ARS TMT steel requirements by region, product, diameter, rods, bundles, or weight, then request a confirmed rate.",
  path: pagePath,
});

const calculatorJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${calculatorUrl}#webapp`,
      name: "TMT Steel Calculator",
      url: calculatorUrl,
      description:
        "Estimate TMT bar quantity, weight, bundles, and indicative GST-inclusive cost based on region, product, diameter, building type, floors, and built-up area.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      isPartOf: {
        "@id": `${productionDomain}/#website`,
      },
      publisher: {
        "@id": `${productionDomain}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${calculatorUrl}#faq`,
      inLanguage: "en-IN",
      mainEntity: calculatorFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};
const calculatorJsonLdString = JSON.stringify(calculatorJsonLd).replace(/</g, "\\u003c");

export default function TmtSteelCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: calculatorJsonLdString }}
      />
      <PriceCalculatorExperience />
    </>
  );
}
