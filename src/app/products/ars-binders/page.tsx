import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ARS Binders | ARS Green Steel",
  alternates: {
    canonical: "/products/ars-binders",
  },
};

export default function ArsBindersPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px]">
        <div className="soft-noise absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,43,110,0.7)_0%,rgba(6,13,30,0.98)_62%)]" />
        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
              ARS <span className="italic text-brand-red">Binders</span>
            </h1>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
            >
              Contact ARS <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
