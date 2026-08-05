"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Calculator, CheckCircle2, ClipboardList, IndianRupee, MapPin, Scale, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { calculatorBars, calculatorNotes, calculatorProducts, calculatorRegions, calculateBar, getRatePerKg, requirementModes, type RequirementMode } from "@/data/tmt-calculator";

const fieldClass = "focus-ring h-12 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm text-ink-900 shadow-sm transition hover:border-brand-blue/45";
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });
const faqs = [
  ["How does the TMT calculator estimate requirements?", "Choose a region, product, diameter, and requirement unit. The calculator applies the ARS workbook bundle and weight rules to show rods, bundles, weight, and an indicative GST-inclusive amount."],
  ["Can I calculate by rods, bundles, or weight?", "Yes. The workbook supports all three modes. Weight inputs are converted to whole rods using the mean bundle weight and the workbook rounding rule."],
  ["Does the displayed rate include GST and delivery?", "The displayed rate includes GST. Delivery, transportation, and loading or unloading charges are extra and should be confirmed with ARS before ordering."],
];

type Inputs = Record<string, string>;

export function PriceCalculatorExperience() {
  const [region, setRegion] = useState("");
  const [product, setProduct] = useState("");
  const [mode, setMode] = useState<RequirementMode>("Rods");
  const [inputs, setInputs] = useState<Inputs>({});
  const [notice, setNotice] = useState("");

  const results = useMemo(() => calculatorBars.map((bar) => {
    const input = Number(inputs[bar.size] ?? 0);
    const calculation = calculateBar(bar, mode, input);
    const ratePerKg = getRatePerKg(region, product, bar.size);
    return { ...bar, ...calculation, ratePerKg, amount: calculation.kilograms * ratePerKg };
  }), [inputs, mode, product, region]);
  const summary = results.reduce((total, row) => ({ rods: total.rods + row.rods, kilograms: total.kilograms + row.kilograms, amount: total.amount + row.amount }), { rods: 0, kilograms: 0, amount: 0 });
  const hasSelection = Boolean(region && product);
  const hasQuantity = summary.rods > 0;

  function updateInput(size: string, value: string) {
    setNotice("");
    setInputs((current) => ({ ...current, [size]: value }));
  }

  function requestRate() {
    if (!hasSelection) { setNotice("Select your region and product first."); return; }
    if (!hasQuantity) { setNotice("Enter at least one positive quantity before requesting a rate."); return; }
    const detail = results.filter((row) => row.rods > 0).map((row) => `${row.size}: ${row.rods} rods / ${row.kilograms.toFixed(2)} kg`).join(", ");
    const params = new URLSearchParams({ source: "tmt-steel-calculator", region, product, mode, quantity: String(summary.rods), weight: summary.kilograms.toFixed(2), details: detail });
    window.location.href = `/request-quote?${params.toString()}`;
  }

  return <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
    <SiteHeader />
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="steel-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#060d1e_10%,rgba(6,13,30,0.92)_60%,#0d2b6e)]" />
      <div className="ars-container relative flex min-h-[500px] items-end py-20 md:min-h-[570px] md:py-24">
        <div className="max-w-3xl"><SectionKicker variant="light">Engineering calculator</SectionKicker><h1 className="mt-6 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.035em]">Calculate your TMT requirement <span className="text-brand-red">with precision.</span></h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">Use ARS workbook-backed rates and bundle rules to plan rods, weight, and indicative cost before you request a confirmed quote.</p><a href="#calculator" className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white">Start calculating <ArrowRight size={16} /></a></div>
      </div>
    </section>

    <MotionSection id="calculator" className="scroll-mt-24 bg-white py-14 md:py-24" aria-labelledby="calculator-title">
      <div className="ars-container"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><SectionKicker variant="brand">Information</SectionKicker><h2 id="calculator-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">Plan your TMT requirement with confidence.</h2><p className="mt-5 text-[15px] leading-7 text-steel-700">Use the ARS workbook-backed calculator to estimate rods, weight, bundles, and indicative cost before requesting a confirmed rate.</p></div><div className="grid gap-4 text-sm leading-6 text-steel-700 lg:pt-12">{calculatorNotes.map((note) => <p key={note} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" /><span>{note}</span></p>)}</div></div></div>
    </MotionSection>

    <MotionSection className="bg-surface-50 py-14 md:py-24" aria-labelledby="diameter-title"><div className="ars-container"><div className="mb-7"><SectionKicker variant="brand">Calculator</SectionKicker><h2 id="diameter-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Set your project details and quantities.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-steel-700">Choose your region, product, and measurement unit, then enter the quantity required for each bar diameter.</p></div><div className="mb-6 grid gap-4 rounded-xl lg:mr-[362px] border border-ink-900/10 bg-white p-5 md:grid-cols-3 md:p-6"><Field label="Region" value={region} onChange={setRegion}><option value="">Select region</option>{calculatorRegions.map((item) => <option key={item}>{item}</option>)}</Field><Field label="Product" value={product} onChange={setProduct}><option value="">Select product</option>{calculatorProducts.map((item) => <option key={item}>{item}</option>)}</Field><Field label="Requirement unit" value={mode} onChange={(value) => { setMode(value as RequirementMode); setInputs({}); }}><option value="Rods">Rods</option><option value="Bundles">Bundles</option><option value="Weight (Kgs)">Weight (Kgs)</option></Field><p className={`md:col-span-3 pt-4 text-xs leading-5 ${hasSelection ? "text-steel-700" : "rounded-md bg-brand-blue/[0.06] px-3 py-2 font-semibold text-brand-blue"}`} aria-live="polite">{hasSelection ? "Rates loaded from the ARS workbook for your selected region and product." : "Select region and product to load the workbook rate."}</p></div><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start"><div className="overflow-hidden border-y border-ink-900/10 bg-white"><div className="hidden grid-cols-[90px_1fr_1fr_1fr_1fr] gap-4 bg-brand-blue px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white md:grid"><span>Size</span><span>Input</span><span>Rods</span><span>Weight</span><span>Amount</span></div>{results.map((row) => <div key={row.size} className="grid gap-4 border-b border-ink-900/10 p-4 last:border-b-0 md:grid-cols-[90px_1fr_1fr_1fr_1fr] md:items-center"><div><h3 className="font-display text-xl font-bold text-brand-blue">{row.size}</h3><p className="text-xs text-steel-700">{row.piecesPerBundle} rods / bundle</p></div><label className="grid gap-1 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">{mode}<input className={fieldClass} type="number" min="0" step="any" inputMode="decimal" value={inputs[row.size] ?? ""} onChange={(event) => updateInput(row.size, event.target.value)} aria-label={`${mode} for ${row.size}`} /></label><Output label="Rods" value={row.rods.toLocaleString("en-IN")} /><Output label="Weight" value={`${row.kilograms.toFixed(3)} kg`} /><Output label="Amount" value={row.amount ? currency.format(row.amount) : "—"} /></div>)}</div><aside className="sticky top-24 border-l-4 border-brand-red bg-ink-950 p-5 text-white shadow-[0_18px_45px_rgba(6,13,30,0.2)] md:p-7" aria-labelledby="summary-title"><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Step 03 · Review</p><h2 id="summary-title" className="mt-4 font-display text-3xl font-extrabold">Your requirement</h2><dl className="mt-6 grid gap-4 border-y border-white/15 py-5"><SummaryRow label="Total rods" value={summary.rods.toLocaleString("en-IN")} /><SummaryRow label="Total weight" value={`${summary.kilograms.toFixed(2)} kg`} /><SummaryRow label="Indicative total" value={summary.amount ? currency.format(summary.amount) : "—"} /></dl><p className="mt-5 text-xs leading-5 text-white/60">Indicative GST-inclusive amount. ARS confirms the current rate and delivery charges before order.</p><button type="button" onClick={requestRate} className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-bold text-white">Request current rate <ArrowRight size={16} /></button>{notice && <p role="alert" className="mt-4 text-sm font-semibold text-white/85">{notice}</p>}</aside></div></div></MotionSection>

    <MotionSection className="bg-white py-14 md:py-24"><div className="ars-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]"><div><SectionKicker variant="brand">Calculate with precision</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Master your TMT requirements.</h2><div className="mt-6 grid gap-5 text-[15px] leading-7 text-steel-700"><p>Our TMT Calculator simplifies construction planning by estimating the quantity, weight, and indicative cost of TMT steel required for a project.</p><p>Use the result for budgeting and logistics planning, then share the requirement with ARS for a confirmed rate and product guidance.</p></div></div><div className="border-l-4 border-brand-blue bg-surface-50 p-6"><Scale className="text-brand-blue" size={24} aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-bold">A clear starting point</h3><p className="mt-3 text-sm leading-6 text-steel-700">The calculator supports residential, commercial, and infrastructure purchase planning across the ARS regions listed in the workbook.</p></div></div></MotionSection>

    <MotionSection className="bg-surface-50 py-14 md:py-24"><div className="ars-container"><SectionKicker variant="brand">Answers before ordering</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Frequently asked questions</h2><div className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer]) => <details key={question} className="group py-1"><summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-3 text-left text-[15px] font-bold"><span>{question}</span><span className="text-xl text-brand-blue transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-5 text-sm leading-7 text-steel-700">{answer}</p></details>)}</div></div></MotionSection>

    <MotionSection className="border-t border-ink-900/10 bg-white py-14"><div className="ars-container"><p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-steel-700">Continue your purchase planning</p><nav aria-label="Related calculator resources" className="mt-5 flex flex-wrap gap-x-6 gap-y-4"><Link href="/dealer-locator" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Dealer locator <MapPin size={15} /></Link><Link href="/products" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Products <ClipboardList size={15} /></Link><Link href="/certifications" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Certifications <ShieldCheck size={15} /></Link><Link href="/request-quote" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue">Request quote <ArrowRight size={15} /></Link></nav></div></MotionSection>
    <ContactCta eyebrow="Ready for a confirmed rate?" headline="Send ARS your requirement." body="Share your selected product, region, quantity, and indicative calculation with the ARS team." primaryLabel="Request quote" primaryHref="/request-quote" secondaryLabel="Find a dealer" secondaryHref="/dealer-locator" tone="solid" /><SiteFooter />
  </main>;
}

function Field({ label, value, onChange, children }: { label: string; value: string; onChange: (value: string) => void; children: React.ReactNode }) { return <label className="grid gap-2 text-sm font-bold text-ink-900">{label}<select className={fieldClass} value={value} onChange={(event) => onChange(event.target.value)}>{children}</select></label>; }
function Output({ label, value }: { label: string; value: string }) { return <div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.08em] text-steel-700 md:hidden">{label}</p><output className="mt-1 block truncate text-base font-bold text-brand-blue" aria-label={`${label}: ${value}`}>{value}</output></div>; }
function SummaryRow({ label, value }: { label: string; value: string }) { return <div className="flex items-center justify-between gap-4"><dt className="text-sm text-white/55">{label}</dt><dd className="text-lg font-bold">{value}</dd></div>; }
