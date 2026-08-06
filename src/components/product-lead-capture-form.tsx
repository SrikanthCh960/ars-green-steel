"use client";

import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { verifiedContactDetails } from "@/data/business-verification";

type ProductLeadCaptureFormProps = {
  product: "ARS 550D" | "ARS CRS 550D" | "ARS Binders";
  trustItems: string[];
};

const locations = [
  "Andhra Pradesh",
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Salem",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tiruppur",
  "Vellore",
  "Other",
];

const sourcePages: Record<ProductLeadCaptureFormProps["product"], string> = {
  "ARS 550D": "/product-550d",
  "ARS CRS 550D": "/product-crs-550d",
  "ARS Binders": "/ars-binders",
};

export function ProductLeadCaptureForm({ product, trustItems }: ProductLeadCaptureFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");

    if (!name) nextErrors.name = "Please enter your name.";
    if (!phone) nextErrors.phone = "Please enter your phone number.";
    else if (!/^(?:91)?[6-9]\d{9}$/.test(phone)) nextErrors.phone = "Please enter a valid Indian phone number.";

    if (String(data.get("website") ?? "").trim()) {
      setStatus("");
      return;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("");
      return;
    }

    setStatus("Your details are ready for ARS sales routing. Please call the sales team to confirm your enquiry.");
  }

  const phone = verifiedContactDetails.mobile.replace(/\s/g, "");

  return (
    <section className="bg-surface-50 py-20 md:py-24" aria-labelledby={`${product.toLowerCase().replaceAll(" ", "-")}-quote-title`}>
      <div className="ars-container">
        <div className="grid overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-brand-blue p-7 text-white md:p-10 lg:p-12">
            <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/60">Product enquiry</p>
            <h2 id={`${product.toLowerCase().replaceAll(" ", "-")}-quote-title`} className="mt-5 max-w-md font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.06] text-white">
              Get a Quote for {product}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/75">Share your requirement</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Product proof points">
              {trustItems.map((item, index) => (
                <li key={item} className="group relative min-h-28 overflow-hidden rounded-xl border border-white/15 bg-white/[0.08] p-4 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.12]">
                  <div className="flex items-start justify-between gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_6px_16px_rgba(222,18,26,0.28)]"><CheckCircle2 size={16} aria-hidden="true" /></span><span className="rounded-full border border-white/20 px-2 py-1 font-technical text-[10px] font-bold tracking-[0.16em] text-white/65" aria-hidden="true">0{index + 1}</span></div>
                  <span className="mt-4 block max-w-[12rem] text-sm font-bold leading-5 text-white">{item}</span>
                </li>
              ))}
            </ul>
            <a href={`tel:${phone}`} className="focus-ring mt-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10">
              <Phone size={16} aria-hidden="true" /> Call Sales
            </a>
          </div>

          <div className="p-7 md:p-10 lg:p-12">
            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="product" value={product} />
              <input type="hidden" name="sourcePage" value={sourcePages[product]} />
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor={`${product}-website`}>Website</label>
                <input id={`${product}-website`} name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-ink-900" htmlFor={`${product}-name`}>
                  <span>Name<span className="text-brand-red" aria-hidden="true">*</span><span className="sr-only"> required</span></span>
                  <input id={`${product}-name`} name="name" autoComplete="name" className={`h-12 rounded-[6px] border bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue ${errors.name ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${product}-name-error` : undefined} />
                  {errors.name && <span id={`${product}-name-error`} className="font-normal text-brand-red">{errors.name}</span>}
                </label>
                <label className="grid gap-2 text-sm font-bold text-ink-900" htmlFor={`${product}-phone`}>
                  <span>Phone<span className="text-brand-red" aria-hidden="true">*</span><span className="sr-only"> required</span></span>
                  <input id={`${product}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" className={`h-12 rounded-[6px] border bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue ${errors.phone ? "border-brand-red" : "border-ink-900/12"}`} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? `${product}-phone-error` : undefined} />
                  {errors.phone && <span id={`${product}-phone-error`} className="font-normal text-brand-red">{errors.phone}</span>}
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-ink-900" htmlFor={`${product}-location`}>
                City / location
                <select id={`${product}-location`} name="location" defaultValue="" className="h-12 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue">
                  <option value="">Please choose an option</option>
                  {locations.map((location) => <option key={location}>{location}</option>)}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-ink-900" htmlFor={`${product}-requirement`}>
                Requirement
                <textarea id={`${product}-requirement`} name="requirement" className="min-h-32 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue" placeholder="Size (8–32mm), quantity, delivery location, project stage" />
              </label>

              <p className="text-sm leading-6 text-steel-700">By submitting you agree to be contacted about your enquiry.</p>
              <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16]">
                Get a Quote <ArrowRight size={16} aria-hidden="true" />
              </button>
              {status && <p role="status" className="text-sm leading-6 text-brand-blue">{status}</p>}
              <p className="text-xs leading-5 text-steel-700">The public enquiry destination is pending ARS confirmation. For an immediate response, use Call Sales.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
