import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { currentCareerOpenings, getCurrentCareerOpening } from "@/data/careers";
import { getCareerApplicationsConfig } from "@/lib/career-applications-config";
import { createPageMetadata } from "@/lib/site-metadata";
import { CareerApplicationForm } from "./career-application-form";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Career Application | ARS Green Steel",
    description: "Apply for a current ARS Green Steel career opening.",
    path: "/careers/apply",
  }),
  robots: { index: false, follow: false },
};

export default async function CareerApplicationPage({
  searchParams,
}: {
  searchParams: Promise<{ opening?: string | string[] }>;
}) {
  await connection();
  const applicationsEnabled = Boolean(getCareerApplicationsConfig());
  const openingId = (await searchParams).opening;
  const opening = typeof openingId === "string" ? getCurrentCareerOpening(openingId) : undefined;

  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />
      <section className="border-b border-brand-blue/10 bg-white py-14 md:py-20" aria-labelledby="application-title">
        <div className="ars-container">
          <Link href="/careers#current-openings" className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark">
            <ArrowLeft size={17} aria-hidden="true" /> Back to current openings
          </Link>
          <div className="mt-8 max-w-3xl">
            <SectionKicker>Careers at ARS</SectionKicker>
            <h1 id="application-title" className="mt-5">Apply to ARS Green Steel</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-700">
              {applicationsEnabled ? "Apply for the role and region you selected. Complete the form and attach your résumé as a PDF." : "A simple application for the role and region you selected. Review the fields below while online submission is being prepared."}
            </p>
          </div>
        </div>
      </section>

      {opening ? (
        <section className="py-14 md:py-20" aria-label="Application details">
          <div className="ars-container grid gap-8 lg:grid-cols-[minmax(0,0.37fr)_minmax(0,0.63fr)] lg:items-start">
            <aside className="rounded-xl bg-brand-blue p-7 text-white shadow-[0_16px_38px_rgba(13,43,110,0.14)] md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Selected opening</p>
              <h2 className="mt-5 font-display text-2xl font-bold leading-tight">{opening.title}</h2>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/85"><MapPin size={17} aria-hidden="true" /> {opening.region}</p>
              <div className="mt-7 border-t border-white/20 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">What to prepare</p>
                <ol className="mt-4 grid gap-3 text-sm leading-6 text-white/90">
                  <li>01 &nbsp; Your contact details</li>
                  <li>02 &nbsp; A brief experience summary</li>
                  <li>03 &nbsp; Your résumé as a PDF</li>
                </ol>
              </div>
            </aside>
            <CareerApplicationForm opening={opening} enabled={applicationsEnabled} />
          </div>
        </section>
      ) : (
        <section className="py-14 md:py-20" aria-labelledby="choose-opening-title">
          <div className="ars-container max-w-4xl">
            <div className="rounded-xl border border-brand-blue/15 bg-white p-6 shadow-[0_16px_38px_rgba(13,43,110,0.08)] md:p-8">
              <h2 id="choose-opening-title" className="font-display text-2xl font-bold text-ink-900">Choose an opening to {applicationsEnabled ? "apply" : "preview the form"}</h2>
              <p className="mt-3 text-base leading-7 text-steel-700">The selected role and region will appear automatically in the application.</p>
              <ul className="mt-7 divide-y divide-brand-blue/10">
                {currentCareerOpenings.map((item) => (
                  <li key={item.id}>
                    <Link href={`/careers/apply?opening=${encodeURIComponent(item.id)}`} className="focus-ring flex min-h-16 items-center justify-between gap-5 py-4 text-brand-blue hover:text-brand-blue-dark">
                      <span><span className="block font-bold">{item.title}</span><span className="mt-1 block text-sm text-steel-700">{item.region}</span></span>
                      <ArrowRight size={18} className="shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
