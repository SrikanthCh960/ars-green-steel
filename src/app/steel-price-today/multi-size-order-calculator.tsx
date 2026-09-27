"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  calculateBar,
  calculatorBars,
  calculatorCities,
  calculatorProducts,
  calculatorRegions,
  getRatePerKg,
  requirementModes,
  type CalculatorProduct,
  type CalculatorRegion,
  type RequirementMode,
} from "@/data/tmt-calculator";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const inputClass = "focus-ring h-11 w-full rounded-md border border-brand-blue/20 bg-white px-3 text-sm text-ink-900";

export function MultiSizeOrderCalculator() {
  const [region, setRegion] = useState<CalculatorRegion>("Tamil Nadu");
  const [city, setCity] = useState<string>(calculatorCities["Tamil Nadu"][0]);
  const [product, setProduct] = useState<CalculatorProduct>("ARS Fe 550D");
  const [mode, setMode] = useState<RequirementMode>("Rods");
  const [quantities, setQuantities] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");

  const rows = useMemo(() => calculatorBars.map((bar) => {
    const quantity = Number(quantities[bar.size] || 0);
    const calculation = calculateBar(bar, mode, quantity);
    const ratePerKg = getRatePerKg(region, product, bar.size);
    return { ...bar, ...calculation, ratePerKg, amount: calculation.kilograms * ratePerKg };
  }), [mode, product, quantities, region]);

  const selectedRows = rows.filter((row) => row.rods > 0);
  const totals = selectedRows.reduce((total, row) => ({
    rods: total.rods + row.rods,
    weight: total.weight + row.kilograms,
    amount: total.amount + row.amount,
  }), { rods: 0, weight: 0, amount: 0 });
  const quoteParams = new URLSearchParams({
    source: "tmt-steel-price-today",
    region,
    city,
    product,
    quantity: String(totals.rods),
    weight: totals.weight.toFixed(2),
    details: `Multi-size price estimate (${mode}): ${selectedRows.map((row) => `${row.size}: ${row.rods} rods`).join(", ")}`,
  });

  function updateQuantity(size: string, value: string) {
    const validQuantity = mode === "Weight (Kgs)" ? /^\d*\.?\d*$/ : /^\d*$/;
    if (value.length > 10 || (value && !validQuantity.test(value))) return;
    setQuantities((current) => ({ ...current, [size]: value }));
    setNotice("");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-blue/12 bg-white shadow-[var(--shadow-soft)]">
      <div className="grid gap-4 border-b border-brand-blue/10 bg-surface-50 p-5 sm:grid-cols-2 lg:grid-cols-4 md:p-6">
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue">
          State
          <select className={inputClass} value={region} onChange={(event) => {
            const nextRegion = event.target.value as CalculatorRegion;
            setRegion(nextRegion);
            setCity(calculatorCities[nextRegion][0]);
          }}>
            {calculatorRegions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue">
          Product
          <select className={inputClass} value={product} onChange={(event) => setProduct(event.target.value as CalculatorProduct)}>
            {calculatorProducts.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue">
          City / delivery location
          <select className={inputClass} value={city} onChange={(event) => setCity(event.target.value)}>
            {calculatorCities[region].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-brand-blue">
          Quantity unit
          <select className={inputClass} value={mode} onChange={(event) => {
            setMode(event.target.value as RequirementMode);
            setQuantities({});
            setNotice("");
          }}>
            {requirementModes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[780px] border-collapse text-left text-sm">
          <caption className="sr-only">Estimate TMT rods, bundles, weight, and amount by diameter</caption>
          <thead className="bg-brand-blue text-xs uppercase tracking-[0.08em] text-white">
            <tr>
              <th scope="col" className="px-5 py-4">Bar size</th>
              <th scope="col" className="px-4 py-4">{mode} required</th>
              <th scope="col" className="px-4 py-4">Full bundles</th>
              <th scope="col" className="px-4 py-4">No. of rods</th>
              <th scope="col" className="px-4 py-4">Weight in kg</th>
              <th scope="col" className="px-5 py-4 text-right">Amount incl. GST</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.size} className="border-b border-brand-blue/10 last:border-0">
                <th scope="row" className="px-5 py-3 font-bold text-brand-blue">{row.size}<span className="block text-xs font-normal text-steel-700">{currency.format(row.ratePerKg * 1000)} / tonne</span></th>
                <td className="px-4 py-3"><input aria-label={`${row.size} quantity in ${mode}`} className={`${inputClass} w-28`} type="text" inputMode={mode === "Weight (Kgs)" ? "decimal" : "numeric"} placeholder="0" value={quantities[row.size] ?? ""} onChange={(event) => updateQuantity(row.size, event.target.value)} /></td>
                <td className="px-4 py-3">{row.bundles.toLocaleString("en-IN")}</td>
                <td className="px-4 py-3">{row.rods.toLocaleString("en-IN")}</td>
                <td className="px-4 py-3">{row.kilograms.toFixed(2)}</td>
                <td className="px-5 py-3 text-right font-bold text-ink-900">{currency.format(row.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 p-4 md:hidden">
        {rows.map((row) => (
          <article key={row.size} className="rounded-xl border border-brand-blue/12 p-4">
            <div className="flex items-baseline justify-between gap-3"><h3 className="font-display text-lg font-bold text-brand-blue">{row.size} rod price</h3><strong className="text-sm text-ink-900">{currency.format(row.ratePerKg * 1000)} / tonne</strong></div>
            <label className="mt-4 grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-steel-700">{mode} required<input className={inputClass} type="text" inputMode={mode === "Weight (Kgs)" ? "decimal" : "numeric"} placeholder="0" value={quantities[row.size] ?? ""} onChange={(event) => updateQuantity(row.size, event.target.value)} /></label>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div><dt className="text-steel-700">Full bundles</dt><dd className="font-bold text-ink-900">{row.bundles}</dd></div>
              <div><dt className="text-steel-700">No. of rods</dt><dd className="font-bold text-ink-900">{row.rods}</dd></div>
              <div><dt className="text-steel-700">Weight in kg</dt><dd className="font-bold text-ink-900">{row.kilograms.toFixed(2)}</dd></div>
              <div><dt className="text-steel-700">Amount incl. GST</dt><dd className="font-bold text-brand-blue">{currency.format(row.amount)}</dd></div>
            </dl>
          </article>
        ))}
      </div>

      <div className="grid gap-5 border-t border-brand-blue/10 bg-surface-50 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand-blue">Total requirement</p>
          <p className="mt-1 font-display text-2xl font-bold text-ink-900">{totals.rods.toLocaleString("en-IN")} rods · {totals.weight.toFixed(2)} kg</p>
          <p className="mt-1 text-sm text-steel-700">Approximate amount incl. GST: <strong className="text-brand-blue">{currency.format(totals.amount)}</strong></p>
          <p className="mt-1 text-xs text-steel-700">Rates exclude freight, transportation, loading, and unloading. ARS confirms the final price in a quotation.</p>
          {notice ? <p className="mt-2 text-sm font-semibold text-brand-red" role="status">{notice}</p> : null}
        </div>
        {selectedRows.length ? (
          <a href={`/request-quote?${quoteParams.toString()}`} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-bold text-white hover:bg-brand-blue">
            Request a confirmed quote <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <button type="button" onClick={() => setNotice("Enter a quantity equal to at least one rod for any bar diameter.")} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-bold text-white hover:bg-brand-blue">
            Request a confirmed quote <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
