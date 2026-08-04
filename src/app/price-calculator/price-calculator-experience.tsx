"use client";

import Link from "next/link";
import { useMemo, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { ArrowDown, ArrowRight, CheckCircle2, ClipboardList, IndianRupee, Info, MapPin, Package, ReceiptIndianRupee, Scale, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const fieldClass = "focus-ring h-12 w-full rounded-md border border-ink-900/15 bg-white px-3.5 text-sm text-ink-900 shadow-sm transition placeholder:text-steel-700/70 hover:border-brand-blue/45";
const readOnlyClass = "h-12 w-full rounded-md border border-ink-900/10 bg-surface-50 px-3.5 text-sm font-semibold text-steel-700";

const citiesByState: Record<string, string[]> = {
  "Andhra Pradesh": ["Chittoor", "Hyderabad", "Nandyal", "Nellore", "Vishakapatnam"],
  Karnataka: ["Bengaluru"],
  Kerala: ["Malappuram", "Palakkad", "Trissur"],
  "Tamil Nadu": ["Arani", "Ayyapakkam", "Chennai", "Coimbatore", "Cuddalore", "Kallankuruchi", "Kanchipuram", "Karlapakkam", "Madambakkam", "Madurai", "Pozhichalur", "Pudukottai", "Salem", "Thiruvallur", "Thiruvannamalai", "Thiruvaarur", "Tirupur", "Trichy", "Vaniyambadi", "Villupuram"],
};

const barSizes = [
  { size: "8mm", rodsPerBundle: 10, bundleWeight: 46.482 },
  { size: "10mm", rodsPerBundle: 7, bundleWeight: 50.856 },
  { size: "12mm", rodsPerBundle: 5, bundleWeight: 52.826 },
  { size: "16mm", rodsPerBundle: 3, bundleWeight: 56.3825 },
  { size: "20mm", rodsPerBundle: 2, bundleWeight: 59.365 },
  { size: "25mm", rodsPerBundle: 1, bundleWeight: 46.2625 },
  { size: "32mm", rodsPerBundle: 1, bundleWeight: 75.829 },
] as const;

const priceByRegion: Record<string, Record<string, Record<string, number>>> = {
  "Tamil Nadu": {
    "ARS 550D": { "8mm": 67000.4, "10mm": 67000.4, "12mm": 66000.35, "16mm": 66000.35, "20mm": 66000.35, "25mm": 66000.35, "32mm": 67000.4 },
    "ARS CRS 550D": { "8mm": 69999.96, "10mm": 69999.96, "12mm": 68999.91, "16mm": 68999.91, "20mm": 68999.91, "25mm": 68999.91, "32mm": 69999.96 },
  },
  "Andhra Pradesh": {
    "ARS 550D": { "8mm": 65584.4, "10mm": 65584.4, "12mm": 64584.35, "16mm": 64584.35, "20mm": 64584.35, "25mm": 64584.35, "32mm": 65584.4 },
    "ARS CRS 550D": { "8mm": 68583.96, "10mm": 68583.96, "12mm": 67583.91, "16mm": 67583.91, "20mm": 67583.91, "25mm": 67583.91, "32mm": 68583.96 },
  },
  Kerala: {
    "ARS 550D": { "8mm": 64109.4, "10mm": 64109.4, "12mm": 63109.35, "16mm": 63109.35, "20mm": 63109.35, "25mm": 63109.35, "32mm": 64109.4 },
    "ARS CRS 550D": { "8mm": 67108.96, "10mm": 67108.96, "12mm": 66108.91, "16mm": 66108.91, "20mm": 66108.91, "25mm": 66108.91, "32mm": 67108.96 },
  },
  Karnataka: {
    "ARS 550D": { "8mm": 65525.4, "10mm": 65525.4, "12mm": 64525.35, "16mm": 64525.35, "20mm": 64525.35, "25mm": 64525.35, "32mm": 65525.4 },
    "ARS CRS 550D": { "8mm": 68524.96, "10mm": 68524.96, "12mm": 67524.91, "16mm": 67524.91, "20mm": 67524.91, "25mm": 67524.91, "32mm": 68524.96 },
  },
};

const currencyFormatter = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });

const benefits = [
  ["Transparency of Price", "Using a TMT calculator enhances transparency in pricing by providing detailed breakdowns of TMT steel bar requirements. This clarity helps users understand the cost implications of their projects and avoid unexpected expenses, promoting a more transparent procurement process."],
  ["Ease of Budgeting for Purchase", "The TMT calculator simplifies the budgeting process by accurately estimating the quantity of TMT bars needed for a project. This precision allows for more accurate budget forecasts and financial planning, helping project managers allocate funds more effectively and efficiently."],
  ["Accuracy of Day-to-Day Information", "With the TMT calculator, users gain access to real-time data that reflects current market conditions and material costs. This feature ensures that all calculations are based on the most up-to-date information, allowing for more accurate planning and scheduling of construction activities."],
  ["Compliance to Ministry of Steel Norms", "The TMT calculator is designed to align with the latest Ministry of Steel norms, ensuring that all calculations adhere to regulatory standards. This compliance not only fosters trust and credibility but also ensures that the project meets all legal requirements related to material usage and safety standards."],
];

const faqs = [
  ["What is the price of steel in India?", "Steel prices in India fluctuate regularly. To get the most accurate and up-to-date information, you should check with local steel suppliers or online resources."],
  ["Why steel prices are increasing today?", "Several factors can contribute to rising steel prices, including increased demand, higher raw material costs, and global economic conditions."],
  ["Where can I find the latest TMT prices?", "You can find the latest TMT steel prices by checking with local steel suppliers, consulting online price trackers, or following industry news sources."],
  ["How is the price of iron rods calculated per kg?", "The price of iron rods per kg is typically determined by factors such as the grade of steel, size, and market demand."],
  ["What factors influence the price of steel?", "Steel prices are influenced by various factors, including global economic conditions, government policies, demand from key industries, and the cost of raw materials like iron ore and coal."],
  ["How does the grade of steel affect the price?", "Higher-grade steel, such as TMT steel, generally commands a higher price due to its superior strength and durability."],
  ["Can I lock in the steel price today for future orders?", "Some steel suppliers offer options to lock in prices for future orders, which can provide protection against price fluctuations."],
  ["Does the steel price today include delivery costs?", "Delivery costs are typically not included in the base price of steel. You should inquire with your supplier for specific details."],
  ["How can I stay informed about changes in steel prices?", "To stay updated on steel price trends, you can subscribe to industry newsletters, follow steel-related news sources, or use online price tracking tools."],
];

type Quantities = Record<string, number>;

export function PriceCalculatorExperience() {
  const [product, setProduct] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bookingState, setBookingState] = useState("");
  const [bookingCity, setBookingCity] = useState("");
  const [quantities, setQuantities] = useState<Quantities>({});
  const [bookingVisible, setBookingVisible] = useState(false);
  const [bookingNotice, setBookingNotice] = useState("");
  const [enquiryNotice, setEnquiryNotice] = useState("");
  const [showAllSizes, setShowAllSizes] = useState(false);

  const summary = useMemo(() => {
    return barSizes.reduce(
      (total, bar) => {
        const rods = quantities[bar.size] ?? 0;
        const kilograms = (rods / bar.rodsPerBundle) * bar.bundleWeight;
        const rate = priceByRegion[state]?.[product]?.[bar.size] ?? 0;
        return { rods: total.rods + rods, kilograms: total.kilograms + kilograms, amount: total.amount + (kilograms / 1000) * rate };
      },
      { rods: 0, kilograms: 0, amount: 0 },
    );
  }, [product, quantities, state]);

  function updateQuantity(size: string, value: string) {
    const parsed = Math.max(0, Math.round(Number(value) || 0));
    setBookingNotice("");
    setQuantities((current) => ({ ...current, [size]: parsed }));
  }

  function showBooking() {
    if (summary.rods === 0) {
      setBookingNotice("Add at least one rod quantity before submitting an order enquiry.");
      document.getElementById("diameter-calculator-title")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setBookingVisible(true);
    requestAnimationFrame(() => document.getElementById("booking-details")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="steel-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(13,43,110,0.78),transparent_34%),linear-gradient(115deg,#060d1e_10%,rgba(6,13,30,0.92)_60%,#0d2b6e)]" />
        <div className="ars-container relative grid min-h-[540px] items-end gap-10 py-20 md:min-h-[600px] lg:min-h-[620px] lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.55fr)] lg:py-24">
          <div className="max-w-3xl">
            <SectionKicker variant="light">Purchase planning</SectionKicker>
            <h1 className="mt-6 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.035em] text-white">TMT Steel Price Today</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              When it comes to construction projects, understanding the factors of TMT steel price is necessary. As a builder, being well-informed about the fluctuations and factors affecting TMT bar price can help you make informed decisions.
            </p>
            <a href="#price-check" className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16]">
              Check the steel price today <ArrowDown size={16} aria-hidden="true" />
            </a>
            <ol className="mt-10 grid max-w-2xl gap-3 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/60 sm:grid-cols-3">
              <li><span className="mr-2 text-brand-red">01</span> Choose location</li>
              <li><span className="mr-2 text-brand-red">02</span> Plan quantities</li>
              <li><span className="mr-2 text-brand-red">03</span> Request a rate</li>
            </ol>
          </div>
          <aside className="border-l-2 border-brand-red bg-white/[0.06] p-6 backdrop-blur-[1px] md:p-7" aria-label="Price guidance">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Price guidance</p>
            <p className="mt-4 text-lg font-semibold leading-7 text-white">Rates depend on product, location, quantity, and market movement.</p>
              <p className="mt-4 text-sm leading-6 text-white/65">Start with your product and delivery location. We will keep the calculation clear while ARS confirms the current rate.</p>
              <div className="mt-6 border-t border-white/15 pt-5 text-xs leading-5 text-white/55"><span className="font-bold text-white/80">What you will receive:</span> a quantity and weight summary ready for the ARS sales team.</div>
          </aside>
        </div>
      </section>

      <MotionSection className="border-b border-ink-900/10 bg-surface-50 py-14 md:py-20" aria-labelledby="market-context-title">
        <div className="ars-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionKicker variant="brand">Market context</SectionKicker>
            <h2 id="market-context-title" className="mt-5 max-w-md font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em]">Understand the rate before you buy.</h2>
          </div>
          <div className="grid gap-5 text-[15px] leading-7 text-steel-700">
            <p>Some of the key influencers include the cost of raw materials, market demand, production capacity, transportation costs, and an IS 1786 – 2008 standard certification adds to its value. By keeping an eye on these factors, you can better anticipate steel price today per kg currently and plan your construction budget accordingly.</p>
            <p>Some TMT bars are also optimized to withstand any weather condition and are also certified by international boards such as the SGS to support customer authentication. It is crucial to conduct thorough research and compare different brands and grades based on their specifications and reputation.</p>
            <p>Steel price today in India are subject to market dynamics. By staying updated on pricing patterns, you can make better decisions regarding the timing of purchasing TMT steel, potentially saving costs in the long run.</p>
          </div>
        </div>
      </MotionSection>

      <div className="bg-surface-50">
      <MotionSection id="price-check" className="scroll-mt-24 bg-white pb-6 pt-10 md:pb-8 md:pt-12">
        <div className="ars-container lg:max-w-none">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionKicker variant="brand">Location and product</SectionKicker>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.025em]">Check the steel price today</h2>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-steel-700">Choose your product and delivery location first. The calculator will then load the workbook rate for your region.</p>
            </div>
            <div className="grid gap-4 rounded-xl border border-ink-900/10 bg-surface-50 p-5 sm:grid-cols-3 sm:p-6">
              <label className="grid gap-2 text-sm font-bold text-ink-900">Product*
                  <select className={fieldClass} required value={product} onChange={(event) => setProduct(event.target.value)} name="product">
                  <option value="" disabled>Select</option><option>ARS 550D</option><option>ARS CRS 550D</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink-900">State*
              <select className={fieldClass} required value={state} onChange={(event) => { setState(event.target.value); setCity(""); }} name="state">
                  <option value="">Select</option>{Object.keys(citiesByState).map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink-900">City*
              <select className={fieldClass} required value={city} onChange={(event) => { setCity(event.target.value); requestAnimationFrame(() => document.getElementById("diameter-calculator")?.scrollIntoView({ behavior: "smooth", block: "start" })); }} name="city" disabled={!state}>
                  <option value="" disabled>{state ? "Select a city" : "Select state first"}</option>{(citiesByState[state] ?? []).map((city) => <option key={city}>{city}</option>)}
                </select>
              </label>
              <div className="sm:col-span-3 flex flex-wrap items-center justify-between gap-3 border-t border-ink-900/10 pt-4 text-xs leading-5 text-steel-700" aria-live="polite"><span><span className="font-bold text-brand-blue">Current rate status:</span> {product && state ? "Workbook rate loaded; inclusive of GST." : "Select product and region to load the rate."}</span><span className="font-bold text-ink-900">{product && state && city ? `${product} · ${city}, ${state}` : "Complete these details to personalise your enquiry"}</span></div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="diameter-calculator" className="scroll-mt-24 bg-white pb-10 pt-6 md:pb-14 md:pt-8" aria-labelledby="diameter-calculator-title">
        <div className="ars-container pt-8 lg:max-w-none md:pt-10">
          <div className="flex flex-col justify-between gap-6 border-t border-ink-900/10 pb-9 pt-8 md:flex-row md:items-end">
            <div><SectionKicker variant="brand">Price by diameter</SectionKicker><h2 id="diameter-calculator-title" className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.025em]">Build your TMT requirement.</h2></div>
            <p className="max-w-lg text-[14px] leading-6 text-steel-700">Enter rod quantities for each diameter. Bundle and weight figures follow the original ARS calculator; the total amount remains unavailable until current rates are supplied.</p>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="grid gap-4">
            {barSizes.slice(0, showAllSizes ? barSizes.length : 3).map((bar) => {
              const rods = quantities[bar.size] ?? 0;
              const bundles = rods / bar.rodsPerBundle;
              const kilograms = bundles * bar.bundleWeight;
              const rate = priceByRegion[state]?.[product]?.[bar.size] ?? 0;
              const amount = (kilograms / 1000) * rate;
              return <section key={bar.size} className="rounded-2xl border border-ink-900/10 bg-white p-4 shadow-[0_14px_35px_rgba(6,13,30,0.06)] md:p-5" aria-labelledby={`bar-${bar.size}`}>
                <div className="flex flex-wrap items-center justify-between gap-5 border-l-4 border-brand-blue pl-4">
                  <h3 id={`bar-${bar.size}`} className="font-display text-2xl font-bold tracking-[-0.02em] text-brand-blue">{bar.size} rod price</h3>
                  <label className="flex items-center gap-3 text-sm font-bold text-brand-blue">No. of Rods<input className="focus-ring h-12 w-40 rounded-lg border border-brand-blue/25 bg-white px-4 text-base font-semibold text-ink-900 shadow-sm" value={rods || ""} min="0" step="1" inputMode="numeric" type="number" onChange={(event) => updateQuantity(bar.size, event.target.value)} placeholder="0" aria-describedby={`bar-help-${bar.size}`} /></label>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <MetricOutput icon={<IndianRupee size={22} />} label="Price (₹ per ton inc. GST)" value={rate ? currencyFormatter.format(rate) : "Select product + region"} ariaLabel={`${bar.size} price per ton including GST`} />
                  <MetricOutput icon={<Package size={22} />} label="In bundles" value={bundles ? bundles.toFixed(2) : "0"} ariaLabel={`${bar.size} bundles`} />
                  <MetricOutput icon={<Scale size={22} />} label="Weight in kgs" value={kilograms ? kilograms.toFixed(3) : "0.000"} ariaLabel={`${bar.size} weight in kilograms`} />
                  <MetricOutput icon={<ReceiptIndianRupee size={22} />} label="Total amount inc. GST" value={rate && amount ? currencyFormatter.format(amount) : "Add rod quantity"} ariaLabel={`${bar.size} total amount including GST`} />
                </div>
                <p id={`bar-help-${bar.size}`} className="mt-6 flex items-center gap-2 border-t border-ink-900/10 pt-5 text-sm leading-6 text-steel-700"><Info size={18} className="shrink-0 text-brand-blue" aria-hidden="true" />{bar.rodsPerBundle} rods per bundle for this calculator flow.</p>
              </section>;
            })}
            </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 lg:col-span-1">
            <p className="text-sm text-steel-700">Showing {showAllSizes ? barSizes.length : 3} of {barSizes.length} standard diameters.</p>
            <button type="button" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-blue/25 px-5 py-2.5 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/[0.05]" onClick={() => setShowAllSizes((current) => !current)} aria-expanded={showAllSizes}>
              {showAllSizes ? "Show common sizes" : "View all diameters"} <ArrowDown size={15} className={showAllSizes ? "rotate-180" : ""} aria-hidden="true" />
            </button>
          </div>

          <section className="sticky top-28 z-20 mt-7 border-l-4 border-brand-red bg-ink-950 p-5 text-white shadow-[0_18px_45px_rgba(6,13,30,0.22)] md:p-7 lg:col-start-2 lg:row-start-1 lg:mt-0" aria-labelledby="order-summary-title">
            <p className="text-sm text-white/65">Interested? Place your order now and our representative will get in touch soon</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-1"><h2 id="order-summary-title" className="font-display text-3xl font-extrabold">TOTAL</h2>
              <dl className="grid gap-3 border-y border-white/15 py-4 text-sm"><div className="flex items-center justify-between gap-4"><dt className="text-white/50">Quantity</dt><dd className="text-xl font-bold">{summary.rods.toFixed(0)}</dd></div><div className="flex items-center justify-between gap-4"><dt className="text-white/50">Kgs</dt><dd className="text-xl font-bold">{summary.kilograms.toFixed(2)}</dd></div><div className="flex items-center justify-between gap-4"><dt className="text-white/50">Estimated total</dt><dd className="text-sm font-bold">{summary.amount ? currencyFormatter.format(summary.amount) : "Add quantity"}</dd></div></dl>
              <button type="button" onClick={showBooking} className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16]">REQUEST CURRENT RATE <ArrowRight size={16} /></button>
            </div>
            {bookingNotice && !bookingVisible && <p role="status" className="mt-4 text-sm font-semibold text-white/80">{bookingNotice}</p>}
          </section>
          </div>
        </div>
      </MotionSection>

      </div>

      <MotionSection id="booking-details" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div><SectionKicker variant="brand">Order enquiry</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.025em]">Submit Booking Details</h2><p className="mt-5 max-w-md text-[15px] leading-7 text-steel-700">All fields are mandatory*</p><p className="mt-4 max-w-md text-sm leading-6 text-steel-700">Order details are retained in this form structure. A live booking endpoint has not been provided for the redesigned site.</p></div>
          <form onSubmit={(event) => { event.preventDefault(); setBookingNotice("Booking submission is awaiting ARS form routing. Please use the sales enquiry route for a live response."); }} className={`rounded-xl border border-ink-900/10 bg-surface-50 p-5 md:p-7 ${bookingVisible ? "ring-2 ring-brand-blue/30" : ""}`}>
            <div className="grid gap-4 md:grid-cols-3"><FormInput label="Contact Person*" name="person_name" placeholder="Your Full Name" autoComplete="name" required /><FormInput label="Your Email Id*" name="email" placeholder="Enter Your Email ID" type="email" autoComplete="email" required /><FormInput label="Mobile No*" name="mobile" placeholder="Mobile No" type="tel" inputMode="tel" autoComplete="tel" minLength={10} maxLength={10} required /></div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-ink-900">Your Address<textarea className="focus-ring min-h-28 rounded-md border border-ink-900/15 bg-white px-3.5 py-3 text-sm shadow-sm" name="address" placeholder="Your Address" required /></label>
            <div className="mt-4 grid gap-4 md:grid-cols-3"><label className="grid gap-2 text-sm font-bold text-ink-900">State*<select name="booking_state" className={fieldClass} required value={bookingState} onChange={(event) => { setBookingState(event.target.value); setBookingCity(""); }}><option value="" disabled>Please choose an option</option>{Object.keys(citiesByState).map((item) => <option key={item}>{item}</option>)}</select></label><label className="grid gap-2 text-sm font-bold text-ink-900">City*<select name="booking_city" className={fieldClass} required disabled={!bookingState} value={bookingCity} onChange={(event) => setBookingCity(event.target.value)}><option value="" disabled>{bookingState ? "Select a city" : "Select state first"}</option>{(citiesByState[bookingState] ?? []).map((city) => <option key={city}>{city}</option>)}</select></label><FormInput label="Pincode*" name="pincode" placeholder="Enter Your Pincode" inputMode="numeric" required /></div>
            <input type="hidden" name="hidden_total_quantity" value={summary.rods} /><input type="hidden" name="hidden_total_tons" value={summary.kilograms.toFixed(3)} /><input type="hidden" name="hidden_total_price" value={summary.amount.toFixed(2)} /><input type="hidden" name="hidden_order_details" value={barSizes.filter((bar) => quantities[bar.size]).map((bar) => `${bar.size} - ${quantities[bar.size]} qty`).join("\n")} />
            <div className="mt-6 flex flex-wrap items-center gap-4"><button className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark" type="submit">Submit <ArrowRight size={16} /></button>{bookingNotice && <p role="status" className="max-w-xl text-sm leading-6 text-steel-700">{bookingNotice}</p>}</div>
          </form>
        </div>
      </MotionSection>

      <MotionSection className="bg-surface-50 py-16 md:py-24"><div className="ars-container"><SectionKicker variant="brand">Planning confidence</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.025em]">Benefits of Using a TMT Calculator</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{benefits.map(([title, body], index) => <article key={title} className="border-t-2 border-brand-blue bg-white p-6"><span className="text-sm font-bold text-brand-red">0{index + 1}</span><h3 className="mt-6 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-steel-700">{body}</p></article>)}</div><p className="mt-8 max-w-3xl text-[15px] leading-7 text-steel-700">Utilizing a TMT calculator brings a strategic advantage in managing construction projects by ensuring cost-efficiency, regulatory compliance, and accurate material planning.</p></div></MotionSection>

      <MotionSection className="bg-white py-16 md:py-24"><div className="ars-container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"><div><SectionKicker variant="brand">Answers before ordering</SectionKicker><h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.025em]">Frequently Asked Questions About Using the Steel Price</h2><div className="mt-9 divide-y divide-ink-900/10 border-y border-ink-900/10">{faqs.map(([question, answer], index) => <details key={question} className="group py-1" open={index === 0}><summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-3 text-left text-[15px] font-bold text-ink-900"><span>{index + 1}. {question}</span><span className="text-xl text-brand-blue transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-5 text-sm leading-7 text-steel-700">{answer}</p></details>)}</div></div>
        <aside className="h-fit border-l-4 border-brand-red bg-ink-950 p-6 text-white md:p-8"><ClipboardList size={24} className="text-white/70" aria-hidden="true"/><h3 className="mt-7 font-display text-2xl font-bold">Enquiry</h3><p className="mt-3 text-sm leading-6 text-white/65">Please complete this form with basic information you need.</p><form className="mt-6 grid gap-4" onSubmit={(event) => { event.preventDefault(); setEnquiryNotice("Enquiry submission is awaiting ARS form routing. Please call sales for a live response."); }} noValidate><FormInput label="Contact Person*" name="enquiry_name" placeholder="Your full name" required dark /><FormInput label="Your Email ID*" name="enquiry_email" placeholder="Enter your email ID" type="email" required dark /><FormInput label="Mobile No.*" name="enquiry_phone" placeholder="Enter your Phone Number" type="tel" inputMode="tel" required dark /><label className="grid gap-2 text-sm font-bold text-white">City*<select className="focus-ring h-12 rounded-md border border-white/20 bg-white/[0.06] px-3.5 text-sm text-white" name="enquiry_city" defaultValue=""><option value="" disabled>Select</option>{citiesByState["Tamil Nadu"].map((city) => <option key={city} className="text-ink-900">{city}</option>)}</select></label><button className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c90f16]" type="submit">Submit <ArrowRight size={16}/></button>{enquiryNotice && <p role="status" className="text-sm leading-6 text-white/70">{enquiryNotice}</p>}</form></aside></div></MotionSection>

      <MotionSection className="border-t border-ink-900/10 bg-surface-50 py-14"><div className="ars-container grid gap-7 lg:grid-cols-[0.34fr_1fr]"><div><SectionKicker variant="brand">ARS at a glance</SectionKicker><h2 className="mt-5 font-display text-2xl font-bold leading-tight">Manufacturing confidence.</h2></div><div className="grid gap-5 text-sm leading-7 text-steel-700 md:grid-cols-2"><p>ARS Steels is one of the major integrated steel plants in India, located at GummidiPoondi, Tamil Nadu. ARS is certified with ISO 9001 and 14001 for its state-of-the-art production facility and the products are certified by SGS, a Swiss-based multinational inspection company that provides on-site inspection, verification, testing, and certification services for every batch and consignment.</p><p>ARS has been producing MS billets from 1992 and TMT Rebars from 2005. The total installed capacity of M.S Billets and TMT Rebars production after expansion will be 2,88,000 MT per annum and 2,50,000 MT per annum respectively. The company is quality-focused and produces best-in-class TMT Rebars.</p></div></div></MotionSection>

      <MotionSection className="border-t border-ink-900/10 bg-surface-50 py-14"><div className="ars-container"><p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-steel-700">Continue your purchase planning</p><nav aria-label="Related price and product resources" className="mt-5 flex flex-wrap gap-x-6 gap-y-4"><RelatedLink href="/dealer-locator" icon={<MapPin size={15} />}>Dealer locator</RelatedLink><RelatedLink href="/products" icon={<CheckCircle2 size={15} />}>Products</RelatedLink><RelatedLink href="/tmt-calculator" icon={<ClipboardList size={15} />}>TMT calculator</RelatedLink><RelatedLink href="/request-quote" icon={<ArrowRight size={15} />}>Request quote</RelatedLink><RelatedLink href="/certifications" icon={<ShieldCheck size={15} />}>Certifications</RelatedLink></nav></div></MotionSection>

      <ContactCta eyebrow="Ready for a current rate?" headline="Send ARS your requirement." body="For a live price confirmation, share your product, quantity, and delivery location with the ARS team." primaryLabel="Request quote" primaryHref="/request-quote" secondaryLabel="Find a dealer" secondaryHref="/dealer-locator" tone="solid" />
      <SiteFooter />
    </main>
  );
}

function FormInput({ label, dark = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; dark?: boolean }) {
  return <label className={`grid gap-2 text-sm font-bold ${dark ? "text-white" : "text-ink-900"}`}>{label}<input className={dark ? "focus-ring h-12 rounded-md border border-white/20 bg-white/[0.06] px-3.5 text-sm text-white placeholder:text-white/45" : fieldClass} {...props} /></label>;
}

function MetricOutput({ icon, label, value, ariaLabel }: { icon: ReactNode; label: string; value: string; ariaLabel: string }) {
  return <div className="rounded-xl border border-brand-blue/10 bg-white p-3 shadow-[0_8px_24px_rgba(13,43,110,0.04)]">
    <div className="flex items-start gap-3 border-b border-ink-900/10 pb-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/[0.07] text-brand-blue" aria-hidden="true">{icon}</span>
      <span className="pt-1 text-xs font-bold uppercase leading-5 tracking-[0.08em] text-brand-blue">{label}</span>
    </div>
    <output className="mt-4 block text-2xl font-bold tracking-[-0.02em] text-brand-blue" aria-label={ariaLabel}>{value}</output>
  </div>;
}

function RelatedLink({ href, icon, children }: { href: string; icon: ReactNode; children: ReactNode }) {
  return <Link href={href} className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-blue-dark">{children} {icon}</Link>;
}
