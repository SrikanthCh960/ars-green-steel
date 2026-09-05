"use client";

import { type ReactNode, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calculator, CheckCircle2, Scale } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { FaqList } from "@/components/faq-list";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import {
  calculateBar,
  calculatorBars,
  calculatorCities,
  calculatorFaqs,
  calculatorNotes,
  calculatorProducts,
  calculatorRegions,
  getRatePerKg,
  requirementModes,
  type RequirementMode,
} from "@/data/tmt-calculator";

const fieldClass = "focus-ring h-12 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm text-ink-900 shadow-sm transition hover:border-brand-blue/45";
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const currencyWithDecimals = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const initialRequirements = Object.fromEntries(calculatorBars.map((bar) => [bar.size, ""])) as Record<string, string>;

function CalculatorReveal({ children, delay = 0, y = 18 }: { children: ReactNode; delay?: number; y?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div data-calculator-motion initial={reduceMotion ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function PriceCalculatorExperience() {
  const router = useRouter();
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [product, setProduct] = useState("");
  const [mode, setMode] = useState<RequirementMode>("Rods");
  const [requirements, setRequirements] = useState(initialRequirements);
  const [notice, setNotice] = useState("");

  const results = useMemo(() => calculatorBars.map((bar) => {
    const calculation = calculateBar(bar, mode, Number(requirements[bar.size] ?? 0));
    const ratePerKg = getRatePerKg(region, product, bar.size);
    return { ...bar, ...calculation, ratePerKg, amount: calculation.kilograms * ratePerKg };
  }), [mode, product, region, requirements]);
  const summary = results.reduce((total, row) => ({
    rods: total.rods + row.rods,
    kilograms: total.kilograms + row.kilograms,
    amount: total.amount + row.amount,
  }), { rods: 0, kilograms: 0, amount: 0 });
  const selectedResults = results.filter((row) => row.input > 0);
  const hasSelection = Boolean(region && product);
  const hasQuantity = selectedResults.length > 0;
  const hasUnavailablePrice = hasSelection && hasQuantity && selectedResults.some((row) => !Number.isFinite(row.ratePerKg) || row.ratePerKg <= 0);
  const hasValidCalculation = hasSelection && hasQuantity && !hasUnavailablePrice;
  const liveStatus = hasUnavailablePrice
    ? "Price unavailable for this selection. Please revise your selection or contact ARS for a confirmed quote."
    : notice || (hasValidCalculation
      ? "Calculated requirement: " + summary.rods.toLocaleString("en-IN") + " rods, " + summary.kilograms.toFixed(2) + " kilograms, GST-inclusive cost " + currency.format(summary.amount) + "."
      : "Select a state and product, then enter a positive quantity to calculate your requirement.");

  function updateRequirement(size: string, value: string) {
    if (value !== "" && (!/^\d*\.?\d*$/.test(value) || Number(value) < 0)) return;
    setRequirements((current) => ({ ...current, [size]: value }));
    setNotice("");
  }

  function calculateRequirements() {
    if (!hasSelection) {
      setNotice("Select your state and product before calculating.");
      return;
    }
    if (!hasQuantity) {
      setNotice("Enter a positive " + mode.toLowerCase() + " quantity for at least one diameter.");
      return;
    }
    if (hasUnavailablePrice) {
      setNotice("Price unavailable for this selection. Please revise your selection or contact ARS for a confirmed quote.");
      return;
    }
    setNotice("Calculation updated from the approved workbook rules.");
  }

  function requestRate() {
    if (!hasValidCalculation) {
      calculateRequirements();
      return;
    }
    const selectedSizes = selectedResults.map((row) => row.size + ": " + row.rods + " rods").join(", ");
    const params = new URLSearchParams({
      source: "tmt-steel-calculator",
      region,
      city,
      product,
      quantity: String(summary.rods),
      weight: summary.kilograms.toFixed(2),
      details: "Workbook calculation (" + mode + "): " + selectedSizes,
    });
    router.push("/request-quote?" + params.toString());
  }

  return <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
    <noscript><style>{"[data-calculator-motion] { opacity: 1 !important; transform: none !important; }"}</style></noscript>
    <SiteHeader />
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet="/ars-assets/products/ProductComparission_HeroBanner-mobile.webp" type="image/webp" />
        <source srcSet="/ars-assets/products/ProductComparission_HeroBanner-desktop.webp" type="image/webp" />
        <img src="/ars-assets/products/ProductComparission_HeroBanner.jpg" alt="ARS TMT steel bars for construction planning" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-center" />
      </picture>
      <div className="steel-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,13,30,0.96)_10%,rgba(6,13,30,0.84)_60%,rgba(13,43,110,0.62))]" />
      <div className="ars-container relative flex min-h-[500px] items-end pb-14 pt-36 md:min-h-[570px] md:pb-20">
        <div className="max-w-4xl">
          <CalculatorReveal y={14}><div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70"><span className="h-px w-10 bg-brand-red" aria-hidden="true" />TMT Steel Calculator</div></CalculatorReveal>
          <CalculatorReveal delay={0.08} y={20}><h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.035em]">Calculate Your TMT Requirement <span className="text-[var(--text-accent-dark)]">With Precision.</span></h1></CalculatorReveal>
          <CalculatorReveal delay={0.16}><p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">Use approved ARS workbook rates and bundle rules to calculate rods, weight, bundles, and GST-inclusive cost by diameter.</p></CalculatorReveal>
          <a href="#calculator" className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white">Start calculating <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>

    <MotionSection id="calculator" className="scroll-mt-24 bg-white py-14 md:py-24" aria-labelledby="calculator-title">
      <div className="ars-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <CalculatorReveal><div><SectionKicker variant="brand">Information</SectionKicker><h2 id="calculator-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.025em]">Plan your TMT requirement with confidence.</h2><p className="mt-5 text-[15px] leading-7 text-steel-700">Enter quantities against the diameters you require. The calculator applies the approved pieces-per-bundle, mean-weight, rate, and GST rules.</p></div></CalculatorReveal>
          <CalculatorReveal delay={0.14}><div className="grid gap-4 text-sm leading-6 text-steel-700 lg:pt-12">{calculatorNotes.map((note) => <p key={note} className="flex gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-blue" aria-hidden="true" /><span>{note}</span></p>)}</div></CalculatorReveal>
        </div>
      </div>
    </MotionSection>

    <MotionSection className="bg-surface-50 py-14 md:py-24" aria-labelledby="calculator-inputs-title">
      <div className="ars-container">
        <div className="mb-8">
          <CalculatorReveal><SectionKicker variant="brand">Calculator</SectionKicker></CalculatorReveal>
          <CalculatorReveal delay={0.08} y={20}><h2 id="calculator-inputs-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Set your requirement.</h2></CalculatorReveal>
          <CalculatorReveal delay={0.16}><p className="mt-4 max-w-2xl text-sm leading-6 text-steel-700">Choose your state and product, select a requirement mode, then enter only the diameters needed for your project.</p></CalculatorReveal>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <form className="rounded-2xl border border-brand-blue/10 bg-[#f4f7ff] p-6 shadow-[0_16px_40px_rgba(13,43,110,0.06)] md:p-8" onSubmit={(event) => { event.preventDefault(); calculateRequirements(); }} aria-labelledby="project-inputs-title">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-brand-blue/[0.08] px-3 py-2 text-xs font-bold text-brand-blue"><Calculator size={15} aria-hidden="true" /> <span id="project-inputs-title">Requirement inputs</span></div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="State" value={region} onChange={(value) => { setRegion(value); setCity(""); setNotice(""); }}><option value="">Select state</option>{calculatorRegions.map((item) => <option key={item}>{item}</option>)}</Field>
              <Field label="City / town (optional)" value={city} onChange={setCity} disabled={!region}><option value="">{region ? "Select city / town" : "Select state first"}</option>{region && calculatorCities[region as keyof typeof calculatorCities].map((item) => <option key={item}>{item}</option>)}</Field>
              <Field label="Product" value={product} onChange={(value) => { setProduct(value); setNotice(""); }}><option value="">Select product</option>{calculatorProducts.map((item) => <option key={item}>{item}</option>)}</Field>
              <Field label="Requirement mode" value={mode} onChange={(value) => { setMode(value as RequirementMode); setNotice(""); }}>{requirementModes.map((item) => <option key={item}>{item}</option>)}</Field>
            </div>

            <fieldset className="mt-8">
              <legend className="text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Requirement by diameter</legend>
              <p className="mt-2 text-xs leading-5 text-steel-700">Enter zero or leave blank for diameters you do not require.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {calculatorBars.map((bar) => (
                  <label key={bar.size} className="flex items-center justify-between gap-3 rounded-md border border-ink-900/10 bg-white px-4 py-3">
                    <span><span className="block text-sm font-bold text-ink-900">{bar.size}</span><span className="mt-0.5 block text-xs text-steel-700">{bar.piecesPerBundle} pieces / bundle</span></span>
                    <input aria-label={bar.size + " requirement in " + mode} className="focus-ring h-11 w-24 rounded-md border border-ink-900/15 bg-white px-3 text-right text-sm font-semibold text-ink-900" type="text" inputMode="decimal" value={requirements[bar.size]} onChange={(event) => updateRequirement(bar.size, event.target.value)} placeholder="0" />
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">Calculate requirement <Calculator size={16} aria-hidden="true" /></button>
            <p className={"mt-4 text-xs leading-5 " + (notice || hasUnavailablePrice ? "font-semibold text-brand-blue" : "text-steel-700")} aria-live="polite">{hasUnavailablePrice ? "Price unavailable for this selection. Please revise your selection or contact ARS for a confirmed quote." : notice || "Select a state and product, then enter a positive quantity for at least one diameter."}</p>
          </form>

          <section className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-[0_16px_40px_rgba(6,13,30,0.06)] md:p-8" aria-labelledby="summary-title">
            <div className="flex flex-wrap items-center justify-between gap-3"><p id="summary-title" className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">Calculated requirement</p><p className="text-xs font-semibold text-steel-700">GST-inclusive pricing</p></div>
            <div className="mt-6 grid gap-4 md:grid-cols-2"><Metric label="Total steel" value={hasValidCalculation ? (summary.kilograms / 1000).toFixed(2) + " t" : "—"} detail={hasValidCalculation ? summary.kilograms.toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " kg · " + summary.rods.toLocaleString("en-IN") + " rods" : hasUnavailablePrice ? "Price unavailable for this selection" : "Enter a valid requirement"} /><Metric label="GST-inclusive cost" value={hasValidCalculation ? currency.format(summary.amount) : "—"} detail={hasUnavailablePrice ? "Price unavailable" : (product || "Select product") + " · " + (region || "Select state")} accent /></div>
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{liveStatus}</p>
            <p className="mt-6 text-xs leading-5 text-steel-700">The total reflects calculated whole rods and the approved GST-inclusive rate for each selected diameter. Delivery Charges will be extra (Transportation & Loading /Un-loading).</p>
            <button type="button" onClick={requestRate} className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-red/90">Get an exact quote from ARS <ArrowRight size={16} /></button>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-ink-900/10 bg-white p-6 md:p-8" aria-labelledby="detailed-results-title">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><SectionKicker variant="brand">Detailed calculation</SectionKicker><h3 id="detailed-results-title" className="mt-5 font-display text-2xl font-bold leading-tight text-ink-900">Diameter-wise result.</h3></div><p className="text-sm text-steel-700">{mode} mode</p></div>
          {hasUnavailablePrice ? <p className="mt-7 rounded-xl border border-dashed border-ink-900/15 bg-surface-50 px-5 py-8 text-sm leading-6 text-steel-700">Price unavailable for this selection. Please revise your selection or contact ARS for a confirmed quote.</p> : selectedResults.length > 0 ? (
            <>
              <div className="mt-7 hidden overflow-x-auto md:block">
                <table className="min-w-[900px] w-full border-collapse text-left text-sm">
                  <thead className="border-y border-ink-900/10 text-xs font-bold uppercase tracking-[0.08em] text-steel-700"><tr><th className="px-3 py-4">Size</th><th className="px-3 py-4">Input</th><th className="px-3 py-4">Rods</th><th className="px-3 py-4">Full bundles</th><th className="px-3 py-4">Loose rods</th><th className="px-3 py-4">Weight</th><th className="px-3 py-4">Rate / kg</th><th className="px-3 py-4">Amount</th></tr></thead>
                  <tbody>{selectedResults.map((row) => <tr key={row.size} className="border-b border-ink-900/10 text-ink-900"><th scope="row" className="px-3 py-4 font-bold">{row.size}</th><td className="px-3 py-4">{formatInput(row.input, mode)}</td><td className="px-3 py-4">{row.rods}</td><td className="px-3 py-4">{row.bundles}</td><td className="px-3 py-4">{row.remainingRods}</td><td className="px-3 py-4">{row.kilograms.toFixed(2)} kg</td><td className="px-3 py-4">{currencyWithDecimals.format(row.ratePerKg)}</td><td className="px-3 py-4 font-bold text-brand-blue">{currency.format(row.amount)}</td></tr>)}</tbody>
                </table>
              </div>
              <div className="mt-7 grid gap-4 md:hidden">{selectedResults.map((row) => <article key={row.size} className="rounded-xl border border-ink-900/10 bg-surface-50 p-5"><div className="flex items-start justify-between gap-4"><h4 className="font-display text-xl font-bold text-ink-900">{row.size}</h4><p className="text-sm font-bold text-brand-blue">{currency.format(row.amount)}</p></div><dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm"><ResultDetail label="Input" value={formatInput(row.input, mode)} /><ResultDetail label="Rods" value={String(row.rods)} /><ResultDetail label="Full bundles" value={String(row.bundles)} /><ResultDetail label="Loose rods" value={String(row.remainingRods)} /><ResultDetail label="Weight" value={row.kilograms.toFixed(2) + " kg"} /><ResultDetail label="Rate / kg" value={currencyWithDecimals.format(row.ratePerKg)} /></dl></article>)}</div>
            </>
          ) : <p className="mt-7 rounded-xl border border-dashed border-ink-900/15 bg-surface-50 px-5 py-8 text-sm leading-6 text-steel-700">Choose a state and product, then enter a positive requirement for one or more diameters to view the detailed calculation.</p>}
        </section>
      </div>
    </MotionSection>

    <MotionSection className="bg-white py-14 md:py-24"><div className="ars-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]"><div><CalculatorReveal><SectionKicker variant="brand">Calculate with precision</SectionKicker></CalculatorReveal><CalculatorReveal delay={0.08} y={20}><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Master your TMT requirements.</h2></CalculatorReveal><CalculatorReveal delay={0.16}><div className="mt-6 grid gap-5 text-[15px] leading-7 text-steel-700"><p>Use the calculator to work through the rods, bundles, weight, rate, and GST-inclusive cost for every required diameter.</p><p>Share the result with ARS to discuss delivery, transportation, loading, unloading, and your final order.</p></div></CalculatorReveal></div><CalculatorReveal delay={0.24}><div className="border-l-4 border-brand-blue bg-surface-50 p-6"><Scale className="text-brand-blue" size={24} aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-bold">A clear starting point</h3><p className="mt-3 text-sm leading-6 text-steel-700">The calculator uses the approved product, state, diameter, bundle, and mean-weight data supplied by ARS.</p></div></CalculatorReveal></div></MotionSection>
    <MotionSection className="bg-surface-50 py-14 md:py-24"><div className="ars-container"><CalculatorReveal><SectionKicker variant="brand">Answers before ordering</SectionKicker></CalculatorReveal><CalculatorReveal delay={0.08} y={20}><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08]">Frequently asked questions</h2></CalculatorReveal><FaqList className="mt-8" items={calculatorFaqs.map(([question, answer]) => ({ question, answer }))} /></div></MotionSection>
    <ContactCta eyebrow="Ready for an order discussion?" headline="Send ARS your calculated requirement." body="Share your selected product, state, quantity, and calculation with the ARS team." primaryLabel="Send enquiry" primaryHref="/request-quote" secondaryLabel="Talk to sales" secondaryHref="/our-network" tone="solid" />
  </main>;
}

function Field({ label, value, onChange, children, disabled = false }: { label: string; value: string; onChange: (value: string) => void; children: ReactNode; disabled?: boolean }) {
  return <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">{label}<select className={fieldClass + " disabled:cursor-not-allowed disabled:bg-surface-50 disabled:text-steel-500"} value={value} onChange={(event) => onChange(event.target.value)} disabled={disabled}>{children}</select></label>;
}

function Metric({ label, value, detail, accent = false }: { label: string; value: string; detail: string; accent?: boolean }) {
  return <div className="rounded-xl bg-[#f4f7ff] p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">{label}</p><p className={"mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] " + (accent ? "text-brand-red" : "text-brand-blue")}>{value}</p><p className="mt-1 truncate text-xs text-steel-700">{detail}</p></div>;
}

function ResultDetail({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-bold uppercase tracking-[0.08em] text-steel-700">{label}</dt><dd className="mt-1 font-semibold text-ink-900">{value}</dd></div>;
}

function formatInput(input: number, mode: RequirementMode) {
  const unit = mode === "Weight (Kgs)" ? "kg" : mode.toLowerCase();
  return input.toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " " + unit;
}
