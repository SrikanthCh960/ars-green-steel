import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPageRenderer } from "@/components/legacy-page-renderer";
import { getLegacyPage } from "@/lib/legacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | ARS Green Steel",
  description: "Privacy policy for ARS Green Steel website enquiries.",
};

export default function PrivacyPolicyPage() {
  const page = getLegacyPage("privacy-policy");

  if (!page) {
    notFound();
  }

  return <LegacyPageRenderer page={page} />;
}
