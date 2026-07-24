import Link from "next/link";
import { ArrowRight, ChevronRight, CircleGauge, ShieldCheck, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type ProjectTypePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  rationale: { title: string; body: string };
  applicationsSection: { eyebrow: string; title: string };
  applications: { title: string; body: string }[];
  considerationsSection: { eyebrow: string; title: string };
  considerations: { title: string; body: string; icon: LucideIcon }[];
  relatedSection: { eyebrow: string; title: string; body: string };
  relatedLinks: { label: string; href: string }[];
  faqSection: { eyebrow: string; title: string };
  faq: { question: string; answer: string }[];
};

/**
 * Shared project-type architecture for Road, Bridges & Flyovers, and Institutional
 * Projects. Each route supplies verified, project-specific content and actions.
 */
export function ProjectTypePage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  rationale,
  applicationsSection,
  applications,
  considerationsSection,
  considerations,
  relatedSection,
  relatedLinks,
  faqSection,
  faq,
}: ProjectTypePageProps) {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white md:py-28">
        <div className="steel-grid absolute inset-0 opacity-35" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-[64%] bg-[radial-gradient(circle_at_center,rgba(13,43,110,0.76),transparent_64%)]" aria-hidden="true" />
        <div className="ars-container relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="focus-ring hover:text-white">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <Link href="/industries" className="focus-ring hover:text-white">Solutions</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span>Project Types</span>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </nav>

          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(18rem,0.25fr)] lg:items-end">
            <div>
              <SectionKicker variant="light">{eyebrow}</SectionKicker>
              <h1 className="max-w-5xl font-display text-[clamp(3rem,6.5vw,6.4rem)] font-black uppercase leading-[0.94] tracking-normal">
                {title}
              </h1>
            </div>
            <div className="border-l border-white/20 pl-6 lg:pb-2">
              <p className="text-lg leading-8 text-slate-200">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href={primaryCta.href} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
                  {primaryCta.label} <ArrowRight size={18} />
                </Link>
                <Link href={secondaryCta.href} className="focus-ring inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/35 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-ink-900">
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <div>
            <SectionKicker>Engineering rationale</SectionKicker>
            <h2 className="section-title">{rationale.title}</h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-steel-700">{rationale.body}</p>
        </div>
      </section>

      <section className="bg-[#e8ecf4] py-20 md:py-28">
        <div className="ars-container">
          <SectionKicker>{applicationsSection.eyebrow}</SectionKicker>
          <h2 className="section-title max-w-3xl">{applicationsSection.title}</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {applications.map((application, index) => (
              <article key={application.title} className="bg-[#f4f7ff] p-7 md:p-8">
                <p className="font-technical text-xs font-bold tracking-[0.22em] text-brand-red">0{index + 1}</p>
                <h3 className="mt-12 font-display text-3xl font-black leading-tight text-ink-900">{application.title}</h3>
                <p className="mt-5 text-base leading-7 text-steel-700">{application.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="ars-container">
          <SectionKicker>{considerationsSection.eyebrow}</SectionKicker>
          <h2 className="section-title max-w-3xl">{considerationsSection.title}</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {considerations.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-ink-900/10 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)]">
                  <Icon className="text-brand-blue" size={28} aria-hidden="true" />
                  <h3 className="mt-12 font-display text-2xl font-black text-ink-900">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-steel-700">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-dark py-20 text-white md:py-28">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div>
            <SectionKicker variant="light">{relatedSection.eyebrow}</SectionKicker>
            <h2 className="section-title section-title-light">{relatedSection.title}</h2>
            <p className="section-copy section-copy-light max-w-2xl">{relatedSection.body}</p>
          </div>
          <div className="grid gap-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring flex min-h-16 items-center justify-between border border-white/20 bg-white/6 px-5 text-sm font-bold transition hover:bg-white hover:text-ink-900">
                {link.label} <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <SectionKicker>{faqSection.eyebrow}</SectionKicker>
            <h2 className="section-title">{faqSection.title}</h2>
          </div>
          <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
            {faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="focus-ring cursor-pointer list-none pr-10 text-lg font-bold leading-7 text-ink-900 marker:content-none">
                  {item.question}
                  <span className="float-right -mr-8 text-brand-blue transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-steel-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}

export const roadProjectPage = {
  eyebrow: "Solutions · Project types",
  title: "TMT bars for road projects",
  description: "ARS 550D CRS Steel TMT Bars for road infrastructure designed to withstand traffic, environmental stresses, and long-term use.",
  primaryCta: { label: "Request project quote", href: "/request-quote" },
  secondaryCta: { label: "View CRS 550D", href: "/products/ars-crs-550d" },
  rationale: {
    title: "Durability and safety begin with the right reinforcement decision.",
    body: "Road construction calls for materials that can endure heavy traffic, environmental stresses, and long-term wear. TMT steel bars provide strength, flexibility, and resistance to degradation for reinforced road components where durability and safety matter.",
  },
  applicationsSection: {
    eyebrow: "Road applications",
    title: "Reinforcement considerations across the road network.",
  },
  applications: [
    { title: "Bridges and culverts", body: "Road networks rely on reinforced structures that can accommodate loads and vibration from continual traffic." },
    { title: "Retaining walls", body: "Reinforcement supports retaining walls that help manage lateral soil pressure in uneven landscapes near roadways." },
    { title: "Highways and expressways", body: "High-use road infrastructure requires material selection that accounts for long-term wear and demanding operating conditions." },
  ],
  considerations: [
    { title: "Seismic resistance", body: "Ductility and tensile strength help road structures absorb and dissipate seismic forces where those conditions are relevant.", icon: CircleGauge },
    { title: "Corrosion resistance", body: "Road projects in high-rainfall, saline, or marine conditions need reinforcement considered for corrosion exposure.", icon: Waves },
    { title: "Quality review", body: "Confirm the product grade and applicable project specifications with the ARS team before final selection.", icon: ShieldCheck },
  ],
  considerationsSection: {
    eyebrow: "Project conditions",
    title: "Specify for the demands your road project must meet.",
  },
  relatedSection: {
    eyebrow: "Product and quality review",
    title: "Bring the right product information into the project conversation.",
    body: "Review ARS CRS 550D product information alongside the project’s design, environmental, and specification requirements.",
  },
  relatedLinks: [
    { label: "View CRS 550D", href: "/products/ars-crs-550d" },
    { label: "Explore quality information", href: "/certifications" },
    { label: "Explore bridges and flyovers", href: "/bridges-projects-tmt-steel-bars" },
    { label: "Explore institutional projects", href: "/institutions-projects-tmt-steel-bars" },
  ],
  faqSection: {
    eyebrow: "Frequently asked questions",
    title: "Road-project questions, answered.",
  },
  faq: [
    { question: "Why are ARS TMT steel bars used for road construction projects?", answer: "The original ARS road-project content identifies strength, durability, and corrosion resistance as relevant qualities for roads, highways, and expressways, especially in demanding environments." },
    { question: "How can TMT bars support seismic resistance in road structures?", answer: "The source material explains that ductility and tensile strength can help structures such as bridges and culverts absorb and dissipate seismic forces, reducing the risk of structural damage." },
    { question: "What should be considered for marine and harsh environments?", answer: "For road work near marine areas or in high-humidity conditions, corrosion exposure should be part of the reinforcement review. Discuss the project conditions and product requirements with ARS before specifying." },
  ],
} satisfies ProjectTypePageProps;

export const bridgesFlyoversProjectPage = {
  eyebrow: "Solutions · Project types",
  title: "TMT bars for bridges and flyovers",
  description: "ARS TMT Bars for bridge and flyover construction where load, environmental conditions, and long-term structural performance must be considered.",
  primaryCta: { label: "Request project quote", href: "/request-quote" },
  secondaryCta: { label: "View CRS 550D", href: "/products/ars-crs-550d" },
  rationale: {
    title: "Plan reinforcement around load, span, and environmental conditions.",
    body: "Bridge and flyover design calls for precise engineering and planning. The original ARS content identifies load-bearing capability, resistance to environmental stressors, tensile strength, and resilience as key considerations for road and railway bridges, as well as high-traffic flyovers.",
  },
  applicationsSection: {
    eyebrow: "Bridge and flyover applications",
    title: "Reinforcement for structures with distinct functional demands.",
  },
  applications: [
    { title: "Road and railway bridges", body: "Bridge construction can require a review of span, load, structural integrity, and exposure to environmental stressors." },
    { title: "Bridge structures", body: "Beam bridges and suspension bridges serve different geographical and functional needs, with reinforcement selected to support their structural requirements." },
    { title: "Flyovers and interchanges", body: "Flyovers, overpasses, and interchanges support urban mobility and must account for continual traffic volumes and environmental wear." },
  ],
  considerationsSection: {
    eyebrow: "Project conditions",
    title: "Address the forces and exposure that shape bridge and flyover performance.",
  },
  considerations: [
    { title: "Load and ductility", body: "High tensile strength and ductility are identified in the source material as considerations for resilience against heavy loads.", icon: CircleGauge },
    { title: "Corrosion exposure", body: "For humid climates and varied terrain, corrosion resistance and bonding strength should be reviewed against the project conditions.", icon: Waves },
    { title: "Long-life planning", body: "Align the material review with span, traffic, environmental pressures, and the intended long-term use of the structure.", icon: ShieldCheck },
  ],
  relatedSection: {
    eyebrow: "Product, quality, and manufacturing review",
    title: "Continue the specification conversation with the relevant ARS information.",
    body: "Use the product, quality, and manufacturing pages to support a project-specific discussion with the ARS team; final grade selection depends on the project requirements.",
  },
  relatedLinks: [
    { label: "View CRS 550D", href: "/products/ars-crs-550d" },
    { label: "Explore quality information", href: "/certifications" },
    { label: "Explore manufacturing", href: "/manufacturing" },
    { label: "Explore road projects", href: "/road-projects-tmt-steel-bars" },
    { label: "Explore institutional projects", href: "/institutions-projects-tmt-steel-bars" },
  ],
  faqSection: {
    eyebrow: "Frequently asked questions",
    title: "Bridge and flyover questions, answered.",
  },
  faq: [
    { question: "Why are TMT bars relevant to bridge and flyover construction?", answer: "The existing ARS source identifies tensile strength and ductility as relevant to resilience against heavy loads and environmental stresses in bridge and flyover construction." },
    { question: "What should be reviewed for bridge and flyover projects?", answer: "The original content highlights project-specific requirements such as load capacity, span length, and environmental conditions. Discuss these requirements with ARS before selecting a grade." },
    { question: "Why does environmental exposure matter?", answer: "The source material identifies humid climates and varied terrain as conditions where corrosion resistance and bonding strength are relevant to the project review." },
  ],
} satisfies ProjectTypePageProps;

export const institutionalProjectPage = {
  eyebrow: "Solutions · Project types",
  title: "TMT bars for institutional projects",
  description: "ARS TMT Bars for institutional construction where schools, hospitals, universities, and government buildings require a considered project-material review.",
  primaryCta: { label: "Request project quote", href: "/request-quote" },
  secondaryCta: { label: "View product specifications", href: "/products/ars-550d#specifications" },
  rationale: {
    title: "Support the safety and durability requirements of essential facilities.",
    body: "Institutional construction—including schools, hospitals, universities, and government buildings—requires material selection to be considered alongside safety, durability, and structural-integrity requirements. The project context and intended use should guide the final specification review.",
  },
  applicationsSection: {
    eyebrow: "Institutional applications",
    title: "Construction contexts with long-term public use in mind.",
  },
  applications: [
    { title: "Schools and universities", body: "Education facilities need a project review that accounts for safety, durability, environmental conditions, and long-term use." },
    { title: "Hospitals", body: "Hospital projects can involve large, complex structures and require material selection to be reviewed against the facility’s requirements." },
    { title: "Government buildings", body: "Government facilities, colleges, and other institutions may need to withstand heavy use and environmental challenges over time." },
  ],
  considerationsSection: {
    eyebrow: "Project conditions",
    title: "Review the requirements that matter across institutional construction.",
  },
  considerations: [
    { title: "Safety and durability", body: "Prioritise the safety and durability requirements of facilities that serve students, patients, staff, and the public.", icon: ShieldCheck },
    { title: "Complex structures", body: "For large or complex facilities, align the material discussion with the structure’s design and operating requirements.", icon: CircleGauge },
    { title: "Environmental conditions", body: "Include local environmental stresses and expected use in the project-specific specification review.", icon: Waves },
  ],
  relatedSection: {
    eyebrow: "Product, quality, and manufacturing review",
    title: "Bring the relevant ARS information into the project conversation.",
    body: "Review product specifications, quality information, and manufacturing context with ARS before finalising a project-specific selection.",
  },
  relatedLinks: [
    { label: "View ARS 550D specifications", href: "/products/ars-550d#specifications" },
    { label: "Compare ARS products", href: "/products" },
    { label: "Explore quality information", href: "/certifications" },
    { label: "Explore manufacturing", href: "/manufacturing" },
    { label: "Explore road projects", href: "/road-projects-tmt-steel-bars" },
    { label: "Explore bridges and flyovers", href: "/bridges-projects-tmt-steel-bars" },
  ],
  faqSection: {
    eyebrow: "Frequently asked questions",
    title: "Institutional-project questions, answered.",
  },
  faq: [
    { question: "Why are TMT steel bars considered for institutional projects?", answer: "The existing ARS source identifies schools, hospitals, and government buildings as institutional construction contexts where safety, durability, and structural integrity are material-selection considerations." },
    { question: "What should be reviewed for an institutional facility?", answer: "Review the facility type, its intended use, project design, environmental conditions, and the applicable product requirements with ARS before selecting a grade." },
    { question: "How do different institution types affect the review?", answer: "Schools, hospitals, universities, and government buildings have different operational contexts. The existing source identifies public use, large or complex structures, and environmental stresses as considerations to discuss during project planning." },
  ],
} satisfies ProjectTypePageProps;
