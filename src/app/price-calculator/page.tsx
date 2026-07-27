import { createPageMetadata } from "@/lib/site-metadata";
import { PriceCalculatorExperience } from "./price-calculator-experience";

export const metadata = createPageMetadata({
  title: "TMT Steel Price Today | ARS Green Steel",
  description:
    "Check ARS TMT steel price guidance by product and location, calculate requirements by bar size, and submit a booking enquiry.",
  path: "/price-calculator",
  image: "/ars-assets/products-all.png",
});

export default function PriceCalculatorPage() {
  return <PriceCalculatorExperience />;
}
