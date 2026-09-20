"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, MessageCircle } from "lucide-react";
import {
  calculatorCities,
  calculatorProducts,
  calculatorRegions,
  getWorkbookPriceRows,
  type CalculatorBar,
  type CalculatorProduct,
  type CalculatorRegion,
} from "@/data/tmt-calculator";
import { verifiedContactDetails } from "@/data/business-verification";

const wholeCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const perKgCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function SteelPriceLookup() {
  const [region, setRegion] = useState<CalculatorRegion>("Tamil Nadu");
  const [product, setProduct] = useState<CalculatorProduct>("ARS Fe 550D");
  const [size, setSize] = useState<CalculatorBar["size"]>("8mm");
  const [city, setCity] = useState<(typeof calculatorCities)[CalculatorRegion][number]>("Chennai");
  const prices = useMemo(() => getWorkbookPriceRows(region, product), [product, region]);
  const selected = prices.find((row) => row.size === size) ?? prices[0];

  const whatsappHref = useMemo(() => {
    const message = [
      "Hello ARS, I would like a confirmed steel quotation.",
      `Product: ${product}`,
      `Region: ${region}`,
      `City / delivery location: ${city}`,
      `Diameter: ${selected.size}`,
      `Indicative workbook rate: ${perKgCurrency.format(selected.perKg)} per kg (${wholeCurrency.format(selected.perTon)} per tonne).`,
    ].join("\n");

    return `https://wa.me/${verifiedContactDetails.mobile.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  }, [city, product, region, selected]);

  function handleRegionChange(nextRegion: CalculatorRegion) {
    setRegion(nextRegion);
    setCity(calculatorCities[nextRegion][0]);
  }

  return (
    <div className="min-w-0 rounded-2xl border border-brand-blue/12 bg-surface-50 p-4 shadow-[0_18px_50px_rgba(13,43,110,0.06)] sm:p-5 md:p-7">
      <div className="grid min-w-0 gap-7 lg:grid-cols-[6.5fr_5.5fr] lg:items-start">
        <div className="min-w-0">
          <div className="grid min-w-0 gap-4 md:grid-cols-3">
            <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
              Region
              <select
                className="focus-ring h-12 min-w-0 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal"
                value={region}
                onChange={(event) => handleRegionChange(event.target.value as CalculatorRegion)}
              >
                {calculatorRegions.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
              Product
              <select
                className="focus-ring h-12 min-w-0 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal"
                value={product}
                onChange={(event) => setProduct(event.target.value as CalculatorProduct)}
              >
                {calculatorProducts.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
              City / delivery location
              <select
                className="focus-ring h-12 min-w-0 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal"
                value={city}
                onChange={(event) => setCity(event.target.value as typeof city)}
              >
                {calculatorCities[region].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <p className="mt-3 text-xs leading-5 text-steel-700">
            Workbook rates are state-level. Your city helps ARS prepare delivery and quotation guidance; it does not change the displayed rate.
          </p>

          <ul className="mt-6 grid gap-3 md:hidden" aria-label="Workbook-backed ARS steel prices by diameter">
            {prices.map((row) => (
              <li key={row.size}>
                <button
                  type="button"
                  onClick={() => setSize(row.size)}
                  aria-pressed={row.size === size}
                  className={`focus-ring grid min-h-16 w-full grid-cols-[auto_1fr] items-center gap-x-4 rounded-xl border p-4 text-left transition ${
                    row.size === size
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-brand-blue/12 bg-white text-ink-900 hover:border-brand-blue/35"
                  }`}
                >
                  <span className="row-span-2 font-display text-xl font-extrabold">{row.size}</span>
                  <span className={`text-right text-sm font-bold ${row.size === size ? "text-white" : "text-brand-blue"}`}>
                    {perKgCurrency.format(row.perKg)} / kg
                  </span>
                  <span className={`text-right text-xs ${row.size === size ? "text-white/75" : "text-steel-700"}`}>
                    {wholeCurrency.format(row.perTon)} / tonne
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 hidden max-w-full overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Workbook-backed ARS steel prices by diameter</caption>
              <thead>
                <tr className="border-b border-ink-900/10 text-[11px] font-bold uppercase tracking-[0.12em] text-steel-700">
                  <th scope="col" className="py-3 pr-4">Diameter</th>
                  <th scope="col" className="py-3 pr-4">Price / kg</th>
                  <th scope="col" className="py-3 text-right">Price / tonne</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.size} className={`border-b border-ink-900/10 last:border-0 ${row.size === size ? "bg-brand-blue/[0.05]" : ""}`}>
                    <th scope="row" className="py-1 pr-4 font-bold text-brand-blue">
                      <button
                        type="button"
                        className="focus-ring inline-flex min-h-11 min-w-11 items-center rounded px-1"
                        onClick={() => setSize(row.size)}
                        aria-pressed={row.size === size}
                      >
                        {row.size}
                      </button>
                    </th>
                    <td className="py-3 pr-4 text-steel-700">{perKgCurrency.format(row.perKg)}</td>
                    <td className="py-3 text-right font-bold text-ink-900">{wholeCurrency.format(row.perTon)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-5 space-y-1 text-xs leading-5 text-steel-700">
            <li>Displayed workbook rates include GST.</li>
            <li>Each piece is approximately 12 m and remains subject to applicable BIS tolerances.</li>
            <li>Freight, transportation, loading and unloading are excluded.</li>
          </ul>
        </div>

        <aside className="grid min-w-0 gap-4 border-t border-ink-900/10 pt-7 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0" aria-label="Price summary and next steps">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-xl bg-white p-5" aria-live="polite" aria-atomic="true">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Selected rate · {selected.size}</p>
              <p className="mt-2 font-display text-3xl font-extrabold text-brand-blue">{wholeCurrency.format(selected.perTon)} / tonne</p>
              <p className="mt-1 text-sm text-steel-700">{perKgCurrency.format(selected.perKg)} per kg · GST included</p>
            </div>
            <div className="rounded-xl bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Current selection</p>
              <p className="mt-2 font-display text-xl font-bold text-ink-900">{product} · {region}</p>
              <p className="mt-1 text-sm text-steel-700">{city} · Indicative workbook rate. Confirm the order rate with ARS.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-ink-900/10 pt-4">
            <div className="rounded-xl bg-brand-blue p-5 text-white">
              <p className="text-base font-semibold leading-6">Get a confirmed price for this selection.</p>
              <a
                className="focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-blue transition-colors hover:bg-surface-50"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" className="size-5" /> Request on WhatsApp
              </a>
            </div>
            <div className="rounded-xl border border-brand-blue/15 bg-white p-5">
              <p className="text-base font-semibold leading-6 text-ink-900">Estimate the steel quantity required for your project.</p>
              <Link className="focus-ring mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue" href="/tmt-steel-calculator">
                <Calculator aria-hidden="true" className="size-5" /> Calculate steel
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
