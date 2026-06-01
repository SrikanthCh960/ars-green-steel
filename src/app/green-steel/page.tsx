import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
import { getLegacyPage } from "@/lib/legacy-content";

export const metadata: Metadata = {
  title: "Green Steel | ARS Green Steel",
  description: "ARS Green Steel sustainability positioning, green-building readiness, EPD, GRIHA, and responsible construction proof.",
};

export default function GreenSteelPage() {
  const page = getLegacyPage("green-steel");

  if (!page) {
    notFound();
  }

  return <LegacyPageRenderer page={page} />;
}
