import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Download,
  FileText,
  Layers,
  Ruler,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Products | ARS Green Steel",
  description:
    "Explore the ARS range — ARS 550D and ARS CRS 550D Fe-550D TMT bars, sizes 8–32mm, technical specifications, comparison, and brochure.",
};

const stats = [
  { value: "550D", label: "Core grade", sub: "High-strength ductile Fe-550D TMT for modern structures." },
  { value: "CRS", label: "Corrosion option", sub: "Durability-led grade for coastal and exposed conditions." },
  { value: "8–32", label: "Bar sizes (mm)", sub: "Common rod-size range for every construction need." },
  { value: "IS 1786", label: "Standard", sub: "Both grades manufactured to the IS 1786:2008 benchmark." },
];

const products = [
  {
    title: "ARS 550D",
    tag: "Core TMT grade",
    desc: "High-strength ductile TMT bars for residential, commercial, and infrastructure construction.",
    points: ["High ductility", "Strong bendability", "Fe-550D · IS 1786:2008"],
    href: "/products/ars-550d",
    image: "/ars-assets/TMT-Bars.png",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "ARS CRS 550D",
    tag: "Corrosion-resistant grade",
    desc: "Corrosion-resistant TMT bars for coastal, humid, exposed, and long-life structures.",
    points: ["Corrosion resistance", "Durability focus", "Fe-550D CRS · IS 1786:2008"],
    href: "/products/ars-crs-550d",
    image: "/ars-assets/ARSHOME2.jpg",
    icon: <Waves size={20} />,
  },
];

const comparison = [
  { attr: "Best for", a: "General construction", b: "Exposed & coastal sites" },
  { attr: "Environment", a: "Standard conditions", b: "Salt, humidity, water exposure" },
  { attr: "Corrosion resistance", a: "Standard TMT", b: "Enhanced (CRS)" },
  { attr: "Grade & standard", a: "Fe-550D · IS 1786:2008", b: "Fe-550D CRS · IS 1786:2008" },
  { attr: "Bar sizes", a: "8mm – 32mm", b: "8mm – 32mm" },
  { attr: "Typical use", a: "Homes, commercial, infrastructure", b: "Coastal, bridges, drainage, long-life concrete" },
];

const sizes = [
  { size: "8mm", use: "Light residential members, rings, and smaller reinforcement." },
  { size: "10mm", use: "Slabs and residential reinforcement; approx. 0.617 kg/m." },
  { size: "12mm", use: "Beams, slabs, and general construction; approx. 0.890 kg/m." },
  { size: "16mm", use: "Columns, beams, and medium-load reinforcement; approx. 1.580 kg/m." },
  { size: "20mm", use: "Heavy columns and commercial members; approx. 2.470 kg/m." },
  { size: "25mm", use: "Large structures and heavy-load reinforcement; approx. 3.850 kg/m." },
  { size: "32mm", use: "Mega structures, bridges, and heavy infrastructure." },
];

const techLinks = [
  { title: "ARS 550D specifications", desc: "Yield, UTS, elongation, sizes, and standard for the core grade.", href: "/products/ars-550d#specifications" },
  { title: "ARS CRS 550D specifications", desc: "Corrosion-resistant grade detail for exposed and coastal sites.", href: "/products/ars-crs-550d#specifications" },
  { title: "TMT bar calculator", desc: "Estimate requirement by building type, floors, and built-up area.", href: "/tmt-calculator" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden bg-ink-950"
        style={{ height: "62vh", minHeight: "480px", maxHeight: "680px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/products-all.png"
            alt="ARS TMT steel product range"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(6,13,30,0.95) 0%, rgba(6,13,30,0.65) 50%, rgba(6,13,30,0.2) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,13,30,0.9) 0%, transparent 55%)" }}
          />
        </div>

        <div className="ars-container relative z-10 w-full pb-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Layers size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">ARS Product Range</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.025em] text-white">
              Steel by grade,
              <br />
              <span className="italic text-brand-red">size, and site.</span>
            </h1>
            <p className="mt-5 max-w-[460px] text-[15px] leading-[1.75] text-white/70">
              From grade selection to rod size, technical proof, calculator, and quote — one clear route
              through the ARS range.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/tmt-calculator"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                <Calculator size={14} /> Calculate steel
              </a>
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3 text-[14px] font-semibold text-white/80 transition hover:bg-white/[0.12]"
              >
                <FileText size={14} /> Request quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <MotionSection className="border-b border-surface-100 bg-white py-14">
        <div className="ars-container">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink-900/10">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col px-0 lg:items-center lg:px-8 lg:text-center">
                <span className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-extrabold leading-none tracking-[-0.03em] text-brand-blue">
                  {s.value}
                </span>
                <span className="mb-1 mt-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-ink-900">
                  {s.label}
                </span>
                <span className="max-w-[200px] text-[12px] leading-normal text-grey-600">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Core products ── */}
      <MotionSection className="bg-white py-24" id="grades">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Core Products</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Two grades, one proof standard.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Choose by structural need and environment — both grades share the same Fe-550D strength and
              IS 1786:2008 testing discipline.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="focus-ring group overflow-hidden rounded-2xl border-[1.5px] border-surface-100 bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-ink-950">
                  <Image
                    src={p.image}
                    alt={`${p.title} TMT bars`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-brand-blue px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] text-white">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.06] text-brand-blue">
                    {p.icon}
                  </div>
                  <h3 className="font-display text-[22px] font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-steel-700">{p.desc}</p>
                  <div className="mt-5 flex flex-col gap-2">
                    {p.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="shrink-0 text-brand-red" />
                        <span className="text-[13px] font-medium text-steel-700">{pt}</span>
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                    View {p.title} <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Comparison ── */}
      <MotionSection className="bg-brand-blue py-24" id="comparison">
        <div className="ars-container">
          <div className="mb-12 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Product Comparison</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-white">
                550D or CRS 550D?
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/70 lg:pt-14">
              Both grades carry the same Fe-550D strength. The choice comes down to the environment your
              structure has to survive.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.1]">
            <div className="grid grid-cols-3 bg-white/[0.06]">
              <span className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white/60">Attribute</span>
              <span className="px-5 py-4 text-[12px] font-bold text-white">ARS 550D</span>
              <span className="px-5 py-4 text-[12px] font-bold text-white">ARS CRS 550D</span>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.attr}
                className={`grid grid-cols-3 ${i < comparison.length - 1 ? "border-b border-white/[0.08]" : ""} ${
                  i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                }`}
              >
                <span className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.04em] text-white/55">
                  {row.attr}
                </span>
                <span className="px-5 py-4 text-[13px] leading-[1.5] text-white/85">{row.a}</span>
                <span className="px-5 py-4 text-[13px] leading-[1.5] text-white/85">{row.b}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/products/ars-550d"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-brand-blue transition hover:opacity-90"
            >
              View ARS 550D <ArrowRight size={13} />
            </a>
            <a
              href="/products/ars-crs-550d"
              className="focus-ring inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/[0.12]"
            >
              View ARS CRS 550D <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </MotionSection>

      {/* ── Bar sizes ── */}
      <MotionSection className="bg-white py-24" id="sizes">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Bar Sizes</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Rod sizes buyers already search for.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Quick context before checking price, estimating quantity, or requesting a quote. Per-metre
              weights are approximate — confirm with ARS sales.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sizes.map((item) => (
              <div key={item.size} className="rounded-2xl border-[1.5px] border-surface-100 bg-surface-50 p-6">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue ring-1 ring-ink-900/[0.06]">
                  <Ruler size={20} />
                </div>
                <h3 className="font-display text-[2rem] font-extrabold uppercase tracking-[-0.02em] text-ink-900">
                  {item.size}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.6] text-grey-600">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Technical specs + brochure ── */}
      <MotionSection className="bg-surface-50 py-24" id="brochure">
        <div className="ars-container">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
            <div>
              <SectionKicker variant="brand">Technical &amp; Downloads</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">
                Specifications and brochure.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.8] text-steel-700">
              Jump straight to the technical detail for each grade, or request the product brochure for
              your records.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {techLinks.map((t) => (
                <a
                  key={t.title}
                  href={t.href}
                  className="focus-ring group flex flex-col rounded-2xl border-[1.5px] border-surface-100 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <FileText size={20} className="text-brand-blue" />
                  <h3 className="mt-5 text-[15px] font-bold text-ink-900">{t.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.6] text-grey-600">{t.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-all duration-200 group-hover:gap-2.5">
                    Open <ArrowRight size={12} />
                  </span>
                </a>
              ))}
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-brand-blue p-8">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-red/40 bg-brand-red/25 text-brand-red">
                  <Download size={20} />
                </div>
                <h3 className="mt-6 font-display text-[20px] font-bold text-white">Product brochure</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-white/70">
                  The full ARS product brochure is being prepared. Request a copy and the sales team will
                  share it directly.
                </p>
              </div>
              <a
                href="/request-quote"
                className="focus-ring mt-7 inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                Request brochure <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── CTA banner ── */}
      <MotionSection className="relative overflow-hidden bg-brand-blue py-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(222,18,26,0.7) 0%, transparent 55%)" }}
        />
        <div className="ars-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <SectionKicker variant="light">Ready to choose</SectionKicker>
              <h2 className="mb-3 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Find the right ARS grade for your build.
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.7] text-white/70">
                Estimate your requirement, compare grades, or request a quote — every path starts here.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a
                href="/request-quote"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-brand-red px-6 py-3.5 text-[14px] font-bold text-white transition hover:opacity-90"
              >
                <FileText size={15} /> Request quote
              </a>
              <a
                href="/tmt-calculator"
                className="focus-ring inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-white/30 px-6 py-3.5 text-[14px] font-semibold text-white/85 transition hover:bg-white/[0.15]"
              >
                <Calculator size={15} /> Calculate steel
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <SiteFooter />
    </main>
  );
}
