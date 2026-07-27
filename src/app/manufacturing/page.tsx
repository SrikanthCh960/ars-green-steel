import { ArrowRight, BadgeCheck, Box, Factory, Flame, Leaf, Recycle, Scissors, Settings2, Truck, Waves, Wind, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Manufacturing | ARS Green Steel",
  description:
    "Explore ARS Green Steel manufacturing, facility capabilities, process flow, responsible production, and recognised industry standards.",
  path: "/manufacturing",
});

const facilityCapabilities = [
  {
    title: "Integrated Manufacturing",
    text: "Steel Making • Billet Casting • Rolling Mill • TMT Process • Quality Control • Dispatch — all managed within a single integrated facility.",
  },
  {
    title: "Advanced Manufacturing Technology",
    text: "Modern rolling mills, automated process controls, and precision equipment ensure consistent production across every batch.",
  },
  {
    title: "Production Capacity",
    text: "Built to support residential, commercial, industrial, and infrastructure projects with reliable manufacturing and uninterrupted supply.",
  },
  {
    title: "Supply & Distribution",
    text: "Strong dealer network and efficient logistics ensure timely deliveries across South India, with a growing presence nationwide.",
  },
  {
    title: "Product Range",
    text: "Manufacturing Fe500, Fe550, Fe550D, and CRS 550D TMT bars in multiple diameters to suit diverse construction needs.",
  },
  {
    title: "Process Excellence",
    text: "Standardised manufacturing practices, continuous process monitoring, and controlled production at every stage for consistent results.",
  },
];

const processStages = [
  { title: "Raw Material", icon: Recycle },
  { title: "Steel Making", icon: Flame },
  { title: "Continuous Casting", icon: Waves },
  { title: "Billet Formation", icon: Box },
  { title: "Rolling Mill", icon: Settings2 },
  { title: "Thermo Mechanical Treatment", icon: Zap },
  { title: "Cooling Bed", icon: Wind },
  { title: "Cutting & Bundling", icon: Scissors },
  { title: "Dispatch", icon: Truck },
];

const responsibleManufacturing = [
  {
    icon: Leaf,
    title: "Lower Carbon Production",
    text: "Our manufacturing process is designed to reduce carbon emissions by adopting cleaner steelmaking practices and improving energy efficiency across production.",
  },
  {
    icon: Recycle,
    title: "Responsible Use of Resources",
    text: "Recycled steel and efficient resource management help reduce the demand for virgin raw materials while supporting more sustainable manufacturing.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Operations",
    text: "Every improvement in energy efficiency contributes to lowering the environmental impact of steel manufacturing without affecting production performance.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Green Steel",
    text: "Our environmental performance is supported by internationally recognised certifications, including EPD, GreenPro, and SGBC Leader-rated Green Product certification.",
  },
];

const certifications = [
  { title: "BIS Certification", image: "/ars-assets/certifications/previews/tmt-renewal.png" },
  { title: "ISO 9001:2015", image: "/ars-assets/certifications/previews/iso-9001.png" },
  { title: "ISO 14001:2015", image: "/ars-assets/certifications/previews/iso-14001.png" },
  { title: "EPD", image: "/ars-assets/certifications/previews/epd-certificate.png" },
  { title: "GreenPro", icon: Leaf },
  { title: "SGBC Leader Rated Green Product (4-Ticks)", image: "/ars-assets/certifications/previews/sgbc-certificate.png" },
  { title: "GRIHA Listed", image: "/ars-assets/certifications/previews/griha-certificate.png" },
  { title: "NISST Green Steel Taxonomy Certificate", image: "/ars-assets/certifications/previews/nisst-green-steel-certificate.png" },
];

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero relative flex min-h-[560px] items-end overflow-hidden bg-ink-950 md:min-h-[600px] lg:h-[680px] lg:max-h-[680px] lg:min-h-[680px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,#060D1E_0%,#0D2B6E_68%,#123B8B_100%)]" />
          <div className="absolute -right-[12%] top-[8%] h-[78%] w-[62%] -skew-x-12 border-l border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_64%)]" />
          <div className="absolute -bottom-[32%] right-[4%] size-[clamp(22rem,54vw,48rem)] rounded-full border border-white/10" />
          <div className="absolute -bottom-[20%] right-[14%] size-[clamp(15rem,38vw,34rem)] rounded-full border border-white/8" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060D1E]/80 to-transparent" />
        </div>

        <div className="ars-container relative z-10 w-full pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.08] px-3 py-1.5">
              <Factory aria-hidden="true" size={12} className="text-white/60" />
              <span className="text-[11px] font-semibold tracking-[0.06em] text-white/70">
                ARS Manufacturing
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.65rem,6vw,4.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white">
              Built with
              <br />
              <span className="italic text-brand-red">precision.</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-white/72 md:text-lg">
              Every ARS TMT bar is manufactured in our integrated facility, where advanced technology,
              process discipline, and decades of expertise come together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" id="facility">
        <div className="ars-container">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
            <div>
              <SectionKicker variant="brand">Our facility</SectionKicker>
              <h2 className="section-title">Built to Deliver at Scale.</h2>
              <p className="section-copy max-w-2xl">
                Every ARS TMT bar is manufactured at our integrated steel facility, where every stage—from
                steel making to dispatch—is managed with precision. The result is consistent production,
                dependable supply, and the capability to support projects of every size.
              </p>
            </div>

            <figure className="relative mx-auto w-full max-w-[588px] overflow-hidden rounded-[20px] border border-brand-blue/10 bg-surface-50 shadow-[var(--shadow-soft)]">
              <Image
                src="/ars-assets/right-about-us.png-compress.webp"
                alt="Aerial view of the ARS plant with a steelmaking inset"
                width={588}
                height={539}
                loading="eager"
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 70vw, calc(100vw - 40px)"
                className="h-auto w-full"
              />
            </figure>
          </div>

          <div className="mt-14 grid border-l border-t border-brand-blue/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {facilityCapabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="relative border-b border-r border-brand-blue/12 bg-white p-6 md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-technical text-xs font-black tracking-[0.18em] text-brand-red"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-ink-900">
                  {capability.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel-700">{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 lg:py-28" id="process-flow">
        <div className="ars-container">
          <div className="max-w-4xl">
            <SectionKicker variant="brand">Process flow</SectionKicker>
            <h2 className="section-title">How ARS Steel Takes Shape.</h2>
            <p className="section-copy">
              Every ARS TMT bar follows a carefully planned manufacturing process that transforms high-quality
              raw materials into steel designed for strength, durability, and dependable performance.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
            <figure className="relative min-h-64 overflow-hidden rounded-[20px] bg-ink-950 md:min-h-[360px]">
              <Image
                src="/ars-assets/blog-banners/demystifying-manufacturing-process-of-tmt-bars/demystifying.webp"
                alt="Heated ribbed steel bar moving through rolling equipment"
                fill
                sizes="(min-width: 768px) 54vw, calc(100vw - 40px)"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
            </figure>
            <figure className="relative min-h-64 overflow-hidden rounded-[20px] bg-ink-950 md:min-h-[360px]">
              <Image
                src="/ars-assets/blog-banners/manufacturing-process-of-tmt-bar/tmt-bars-manufacturing.jpeg"
                alt="Hot steel bar passing through the rolling process"
                fill
                sizes="(min-width: 768px) 46vw, calc(100vw - 40px)"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
            </figure>
          </div>

          <ol className="relative mt-8 flex snap-x snap-mandatory gap-0 overflow-x-auto pb-4 pt-2 [scrollbar-width:thin] lg:overflow-visible lg:pb-0">
            {processStages.map((stage, index) => {
              const Icon: LucideIcon = stage.icon;
              return (
                <li key={stage.title} className="relative flex w-52 shrink-0 snap-start flex-col pr-5 last:pr-0 lg:w-[11.111%] lg:min-w-0 lg:pr-0">
                  <div className="relative z-10 flex items-center">
                    <span className="inline-flex size-12 items-center justify-center rounded-full border-4 border-surface-50 bg-brand-blue text-white shadow-[var(--shadow-soft)]"><Icon size={20} aria-hidden="true" /></span>
                    {index < processStages.length - 1 && <span className="h-px flex-1 bg-brand-blue/25" aria-hidden="true" />}
                  </div>
                  <div className="mt-5 pr-5 lg:pr-4">
                    <span className="font-technical text-[11px] font-black tracking-[0.16em] text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 font-display text-lg font-bold leading-tight text-ink-900">{stage.title}</h3>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-blue py-20 text-white lg:py-28" id="responsible-manufacturing">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(255,255,255,0.11),transparent_30%),linear-gradient(135deg,#0D2B6E,#08245F)]" />
        <div className="ars-container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <SectionKicker variant="light">Responsible manufacturing</SectionKicker>
              <h2 className="section-title section-title-light max-w-3xl">
                Building Better Steel Starts with How It&apos;s Made.
              </h2>
            </div>
            <p className="section-copy section-copy-light section-copy-flush max-w-2xl lg:justify-self-end">
              The environmental impact of steel is shaped long before it reaches a construction site. At ARS,
              we focus on making every stage of manufacturing more efficient—using cleaner production methods,
              responsible resource management, and lower-emission processes to produce Green Steel for the
              future of construction.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-white/15 bg-white/15 md:grid-cols-2">
            {responsibleManufacturing.map((item) => {
              const Icon: LucideIcon = item.icon;
              return (
              <article key={item.title} className="bg-brand-blue/90 p-6 md:p-8 lg:p-10">
                <div className="flex size-12 items-center justify-center border border-white/20 bg-white/[0.08] text-brand-red"><Icon size={22} aria-hidden="true" /></div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/70">{item.text}</p>
              </article>
              );
            })}
          </div>

          <Link
            href="/green-steel"
            className="focus-ring mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-brand-red px-6 text-base font-bold text-white transition hover:bg-brand-red-dark"
          >
            <span>Because stronger buildings deserve steel that&apos;s made responsibly.</span>
            <ArrowRight aria-hidden="true" className="shrink-0" size={20} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" id="standards">
        <div className="ars-container">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <SectionKicker variant="brand">Built to global standards</SectionKicker>
              <h2 className="section-title max-w-4xl">Manufactured to Recognised Industry Standards.</h2>
            </div>
            <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
              Every stage of manufacturing follows established systems and recognised industry standards that
              support consistency, responsible production, and continuous improvement. These certifications
              reflect how we manufacture—not just what we produce.
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-[20px] border border-brand-blue/12 bg-surface-50">
            <Link
              href="/certifications"
              aria-label="View certifications and awards"
              className="focus-ring absolute right-5 top-5 z-10 inline-flex size-11 items-center justify-center rounded-full bg-brand-blue text-white shadow-[var(--shadow-soft)] transition hover:translate-x-1"
            >
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <ul className="flex gap-px overflow-x-auto bg-brand-blue/12 p-0 [scrollbar-width:thin] lg:grid lg:grid-cols-4 lg:overflow-visible">
              {certifications.map((certification) => {
                const Icon = certification.icon ?? BadgeCheck;
                return (
                  <li key={certification.title} className="flex min-h-44 w-52 shrink-0 flex-col items-center justify-center bg-white p-5 text-center lg:w-auto">
                    <div className="relative flex h-16 w-full max-w-28 items-center justify-center overflow-hidden">
                      {certification.image ? <Image src={certification.image} alt="" fill sizes="112px" className="object-contain" /> : <Icon size={34} className="text-[#2f8f5b]" aria-hidden="true" />}
                    </div>
                    <span className="mt-4 font-display text-sm font-bold leading-snug text-ink-900">{certification.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(13,43,110,0.65),transparent_34%)]" />
        <div className="ars-container relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2.25rem,4.4vw,3.8rem)] font-bold leading-[1.05] text-white">
              See the Manufacturing Behind the Steel.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              Whether you&apos;re planning a home, a commercial development, or a large infrastructure project,
              our team can help you understand our manufacturing capabilities, production capacity, and supply
              network.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/contact?enquiry=plant-visit#enquiry"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-red-dark"
            >
              Schedule a Plant Visit <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href="/contact#enquiry"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/24 px-8 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
