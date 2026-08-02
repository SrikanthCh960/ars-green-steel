"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Phone, Ruler, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

type BuildingType = "Residential" | "Commercial";

const categories: Record<BuildingType, string[]> = {
  Residential: ["Villa", "Apartment", "Individual House"],
  Commercial: ["Working Space", "Malls", "Intra", "Stadium"],
};

export function OurExpressExperience() {
  const [buildingType, setBuildingType] = useState<BuildingType>("Residential");
  const [category, setCategory] = useState(categories.Residential[0]);
  const [floors, setFloors] = useState("");
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const floorCount = Number(floors);
    const areaValue = Number(area);
    if (!floorCount || !areaValue) return null;
    const steelPerSquareFoot = buildingType === "Residential" ? 3.81 : 4.95;
    return floorCount * areaValue * steelPerSquareFoot;
  }, [area, buildingType, floors]);

  function updateBuildingType(value: BuildingType) {
    setBuildingType(value);
    setCategory(categories[value][0]);
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 text-white md:min-h-[600px] lg:h-[680px] lg:min-h-[680px]">
        <div className="absolute inset-0">
          <video className="absolute inset-0 h-full w-full object-cover opacity-45" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/videos/ars-intro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,13,30,0.98),rgba(6,13,30,0.76)_52%,rgba(6,13,30,0.26))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,13,30,0.94),transparent_60%)]" />
        </div>
        <div className="ars-container relative z-10 w-full pb-16 pt-32">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
              <Calculator size={13} className="text-brand-red" aria-hidden="true" />
              ARS project estimate
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.025em] text-white">
              Our <span className="text-brand-red">Express</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-white/75">
              Start with the essential project details. Our Express gives you an approximate steel quantity to take into your conversation with ARS.
            </p>
            <a href="#estimate" className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
              Start an estimate <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-surface-100 bg-white py-10">
        <div className="ars-container grid gap-6 md:grid-cols-3">
          {[
            ["01", "Choose your project", "Select the building type and category."],
            ["02", "Enter the scale", "Add floors and area in square feet."],
            ["03", "Take the next step", "Use the estimate as a starting point with ARS."],
          ].map(([number, title, body]) => (
            <div key={number} className="border-l-2 border-brand-red pl-5">
              <p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{number}</p>
              <h2 className="mt-2 font-display text-xl font-bold text-ink-900">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-steel-700">{body}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="estimate" className="bg-white py-20 md:py-24">
        <div className="ars-container grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionKicker variant="brand">Our Express calculator</SectionKicker>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em]">Estimate your starting requirement.</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-steel-700">Enter the basic information from the original ARS calculator. The result is an approximate quantity, intended to support the next conversation with the ARS team.</p>
            <div className="mt-8 grid gap-4">
              {[
                "Residential and commercial project types",
                "Category-specific project context",
                "Area and floor count inputs",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-semibold text-steel-700"><ShieldCheck size={18} className="shrink-0 text-brand-blue" aria-hidden="true" />{point}</div>
              ))}
            </div>
          </div>

          <form className="rounded-2xl border border-ink-900/10 bg-surface-50 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] md:p-8" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Building type
                <select value={buildingType} onChange={(event) => updateBuildingType(event.target.value as BuildingType)} className="focus-ring h-12 rounded-xl border border-ink-900/10 bg-white px-4 text-sm font-normal normal-case tracking-normal">
                  <option>Residential</option><option>Commercial</option>
                </select>
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Category
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="focus-ring h-12 rounded-xl border border-ink-900/10 bg-white px-4 text-sm font-normal normal-case tracking-normal">
                  {categories[buildingType].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">No. of floors
                <input required min="1" type="number" value={floors} onChange={(event) => { setFloors(event.target.value); setSubmitted(false); }} placeholder="Enter number of floors" className="focus-ring h-12 rounded-xl border border-ink-900/10 bg-white px-4 text-sm font-normal normal-case tracking-normal placeholder:text-grey-400" />
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Area (sq feet)
                <input required min="1" type="number" value={area} onChange={(event) => { setArea(event.target.value); setSubmitted(false); }} placeholder="Enter area" className="focus-ring h-12 rounded-xl border border-ink-900/10 bg-white px-4 text-sm font-normal normal-case tracking-normal placeholder:text-grey-400" />
              </label>
            </div>
            <button type="submit" className="focus-ring mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Calculate estimate <ArrowRight size={16} /></button>
            {submitted && estimate ? (
              <div className="mt-6 rounded-xl border border-brand-blue/15 bg-white p-5" aria-live="polite">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue">Approximate quantity</p>
                <p className="mt-2 font-display text-4xl font-extrabold text-ink-900">{estimate.toFixed(2)} <span className="text-xl text-brand-blue">kg</span></p>
                <p className="mt-2 text-sm leading-6 text-steel-700">This estimate is a starting point. Speak with ARS before finalising a purchase requirement.</p>
                <a href="tel:+919710411111" className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-red"><Phone size={15} /> Call ARS: 9710411111</a>
              </div>
            ) : null}
          </form>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-20 md:py-24">
        <div className="ars-container grid gap-8 md:grid-cols-2">
          <div className="border-t-2 border-brand-blue pt-6"><Ruler className="text-brand-blue" size={22} aria-hidden="true" /><h2 className="mt-5 font-display text-2xl font-bold">A clear starting point</h2><p className="mt-3 text-[15px] leading-7 text-steel-700">The calculator turns a few project inputs into an approximate quantity so your enquiry can begin with useful context.</p></div>
          <div className="border-t-2 border-brand-red pt-6"><ShieldCheck className="text-brand-red" size={22} aria-hidden="true" /><h2 className="mt-5 font-display text-2xl font-bold">A conversation with ARS</h2><p className="mt-3 text-[15px] leading-7 text-steel-700">The estimate does not replace structural design or a confirmed quotation. Contact the ARS team for requirement guidance.</p></div>
        </div>
      </MotionSection>

      <ContactCta eyebrow="FROM ESTIMATE TO ENQUIRY" headline="Ready to discuss your project?" body="Share your requirement with ARS for product guidance, buying support, and the next step toward a confirmed quote." primaryLabel="Request a quote" primaryHref="/request-quote" secondaryLabel="Talk to experts" secondaryHref="/contact" />
    </main>
  );
}
