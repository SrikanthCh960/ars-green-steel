import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";

const audiencePaths = [
  {
    title: "Homeowners",
    label: "Building a home",
    body: "Build smarter with durable, corrosion-resistant TMT steel for your dream home.",
    href: "/tmt-steel-bar-guide-homeowners",
    cta: "Bar for My Home",
    image: "/ars-assets/home/home-owners.jpg",
    imageAlt: "Residential construction supported by ARS steel",
  },
  {
    title: "Engineers & Architects",
    label: "Specifying a project",
    body: "Technical specifications, certifications, and structural performance resources in one place.",
    href: "/our-certification",
    cta: "Specs & Certs",
    image: "/ars-assets/home/engineers-architects.jpg",
    imageAlt: "ARS quality and testing documentation",
  },
  {
    title: "Contractors",
    label: "Delivering on site",
    body: "Reliable TMT steel solutions for residential, commercial, and infrastructure projects.",
    href: "/tmt-steel-calculator",
    cta: "Estimate Steel",
    image: "/ars-assets/home/Contractors.jpg",
    imageAlt: "ARS TMT steel for construction projects",
  },
  {
    title: "Dealers",
    label: "Growing the network",
    body: "Explore products, dealer benefits, pricing support, and business opportunities.",
    href: "/steel-distributors-dealers",
    cta: "Become a Dealer",
    image: "/ars-assets/home/Distributors.jpg",
    imageAlt: "ARS TMT steel product range",
  },
];

export function AudienceJourneySection() {
  return (
    <section className="bg-surface-50 py-20 lg:py-28" id="audiences">
      <div className="ars-container">
        <div className="mb-12 max-w-4xl">
          <SectionKicker className="mb-5">Audience Paths</SectionKicker>
          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,4vw,4.2rem)] font-bold leading-[0.98] tracking-normal text-ink-900">
            Choose Your ARS Journey
          </h2>
          <p className="section-copy mt-6 max-w-3xl">
            Explore steel solutions, technical resources, and product recommendations tailored to your role in construction.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {audiencePaths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className="focus-ring group relative aspect-square overflow-hidden bg-ink-950 shadow-[0_14px_34px_rgba(13,43,110,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(13,43,110,0.24)] focus-visible:-translate-y-1 focus-visible:shadow-[0_24px_54px_rgba(13,43,110,0.24)]"
            >
              <Image
                src={path.image}
                alt={path.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.26)_0%,rgba(6,13,30,0.42)_42%,rgba(6,13,30,0.9)_100%)]" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white sm:p-7">
                <p className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-white/78">
                  {path.label}
                </p>
                <div>
                  <h3 className="font-display text-[clamp(1.55rem,2vw,2rem)] font-bold leading-[1.02]">{path.title}</h3>
                  <p className="mt-3 text-sm leading-5 text-white/78">{path.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                    {path.cta} <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </div>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-0.5">
                <span className="w-1/2 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transform-none" />
                <span className="w-1/2 origin-left scale-x-0 bg-brand-blue transition-transform duration-300 delay-150 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transform-none" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
