"use client";

import { useMemo, useState } from "react";
import { calculatorBars, calculatorProducts, calculatorRegions, getRatePerKg } from "@/data/tmt-calculator";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function SteelPriceLookup() {
  const [region, setRegion] = useState("Tamil Nadu");
  const [product, setProduct] = useState("ARS 550D");
  const [size, setSize] = useState("8mm");
  const prices = useMemo(() => calculatorBars.map((bar) => ({ ...bar, perKg: getRatePerKg(region, product, bar.size), perTon: getRatePerKg(region, product, bar.size) * 1000 })), [product, region]);
  const selected = prices.find((row) => row.size === size) ?? prices[0];

  return <div className="rounded-2xl border border-surface-100 bg-surface-50 p-5 md:p-7">
    <div className="grid gap-4 md:grid-cols-3">
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Region<select className="focus-ring h-12 rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal" value={region} onChange={(event) => setRegion(event.target.value)}>{calculatorRegions.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Product<select className="focus-ring h-12 rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal" value={product} onChange={(event) => setProduct(event.target.value)}>{calculatorProducts.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">Diameter<select className="focus-ring h-12 rounded-md border border-ink-900/15 bg-white px-3.5 text-sm font-normal normal-case tracking-normal" value={size} onChange={(event) => setSize(event.target.value)}>{calculatorBars.map((item) => <option key={item.size}>{item.size}</option>)}</select></label>
    </div>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Selected rate · {selected.size}</p><p className="mt-2 font-display text-3xl font-extrabold text-brand-blue">{currency.format(selected.perTon)} / ton</p><p className="mt-1 text-sm text-steel-700">{currency.format(selected.perKg)} per kg · GST included</p></div>
      <div className="rounded-xl bg-white p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-steel-700">Current selection</p><p className="mt-2 font-display text-xl font-bold text-ink-900">{product} · {region}</p><p className="mt-1 text-sm text-steel-700">Indicative workbook rate. Confirm today&apos;s order rate with ARS.</p></div>
    </div>
    <div className="mt-7 overflow-x-auto"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><caption className="sr-only">Workbook-backed ARS steel prices by diameter</caption><thead><tr className="border-b border-ink-900/10 text-[11px] font-bold uppercase tracking-[0.12em] text-steel-700"><th className="py-3 pr-4">Diameter</th><th className="py-3 pr-4">Price / kg</th><th className="py-3 text-right">Price / ton</th></tr></thead><tbody>{prices.map((row) => <tr key={row.size} className={`border-b border-ink-900/10 last:border-0 ${row.size === size ? "bg-brand-blue/[0.05]" : ""}`}><td className="py-3 pr-4 font-bold text-brand-blue"><button type="button" className="focus-ring rounded px-1" onClick={() => setSize(row.size)}>{row.size}</button></td><td className="py-3 pr-4 text-steel-700">{currency.format(row.perKg)}</td><td className="py-3 text-right font-bold text-ink-900">{currency.format(row.perTon)}</td></tr>)}</tbody></table></div>
    <p className="mt-5 text-xs leading-5 text-steel-700">Workbook source: Price Chart Per Ton. Prices are inclusive of GST; delivery, transportation, and loading/unloading charges are extra.</p>
  </div>;
}
