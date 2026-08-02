import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { OurExpressExperience } from "./our-express-experience";

export const metadata: Metadata = createPageMetadata({
  title: "Our Express | ARS Green Steel",
  description:
    "Use the ARS Our Express calculator to estimate a starting steel quantity from your building type, floors, and area.",
  path: "/our-express",
  image: "/ars-assets/products-all.png",
});

export default function OurExpressPage() {
  return <OurExpressExperience />;
}
