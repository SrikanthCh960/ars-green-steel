import { createPageMetadata } from "@/lib/site-metadata";
import SteelPriceTodayPage from "@/app/steel-price-today/page";

export const metadata = createPageMetadata({
  title: "Steel Price Today Per Kg in India | Latest TMT Steel Rates – ARS",
  description:
    "Check today’s TMT steel price per kg and per tonne in Chennai, Tamil Nadu and South India. Compare ARS Fe 550D and CRS rates by bar size.",
  path: "/tmt-steel-price-today",
});

export default function TmtSteelPriceTodayPage() {
  return <SteelPriceTodayPage />;
}
