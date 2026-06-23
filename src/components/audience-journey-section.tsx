"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Home as HomeIcon, ShieldCheck, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const audienceCards = [
  {
    title: "Home owners",
    body: "Build safer homes with certified ARS steel.",
    href: "/tmt-steel-bar-guide-homeowners",
    cta: "Explore guide",
    image: "/ars-assets/home-owner-banner-1.png",
    icon: HomeIcon,
  },
  {
    title: "Engineers",
    body: "Technical specifications, testing, and certifications.",
    href: "/tmt-steel-bar-guide-engineers-architects",
    cta: "View technical hub",
    image: "/ars-assets/our-quality-1.png",
    icon: ShieldCheck,
  },
  {
    title: "Dealers",
    body: "Grow local demand with ARS support.",
    href: "/steel-distributors-dealers",
    cta: "Dealer network",
    image: "/ars-assets/Contact_banner.png",
    icon: Store,
  },
  {
    title: "Contractors",
    body: "Project pricing, quantity planning, and support.",
    href: "/tmt-steel-bar-guide-civil-contractors",
    cta: "Contractor solutions",
    image: "/ars-assets/ARSHOME4.jpg",
    icon: Factory,
  },
];

const audienceStats = [
  {
    value: "50,000+",
    label: "Homes built safer",
    detail: "With ARS steel",
    icon: HomeIcon,
  },
  {
    value: "500+",
    label: "Certified projects",
    detail: "Engineered with trust",
    icon: ShieldCheck,
  },
  {
    value: "1000+",
    label: "Dealer network",
    detail: "Growing together",
    icon: Store,
  },
  {
    value: "200+",
    label: "Infrastructure projects",
    detail: "Building the nation",
    icon: Factory,
  },
];

const cardTransition = {
  type: "spring" as const,
  stiffness: 95,
  damping: 24,
  mass: 0.75,
};

export function AudienceJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-surface-50 py-24" id="audiences">
      <div className="ars-container">
        <div className="mb-11 max-w-4xl">
          <div className="section-kicker-row mb-5">
            <span className="section-kicker-line" />
            <p className="section-kicker">
              Audience paths
            </p>
          </div>
          <h2 className="font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.02] tracking-normal text-ink-900">
            Choose Your ARS Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">
            Find the right steel solutions based on your project needs.
          </p>
        </div>

        <div className="grid gap-5 lg:flex lg:h-[520px] lg:items-stretch" onMouseLeave={() => setActiveIndex(0)}>
          {audienceCards.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                className="min-w-0"
                style={{ flexBasis: 0, flexShrink: 1 }}
                animate={{ flexGrow: isActive ? 1.78 : 1 }}
                initial={false}
                transition={cardTransition}
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
              >
                <Link
                  href={item.href}
                  className="audience-journey-card focus-ring group relative block h-[440px] overflow-hidden rounded-[20px] bg-bg-dark p-6 text-white shadow-[0_22px_64px_rgba(13,43,110,0.18)] lg:h-full"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} ARS journey`}
                    fill
                    sizes={isActive ? "(min-width: 1024px) 36vw, 100vw" : "(min-width: 1024px) 20vw, 100vw"}
                    className="object-cover opacity-90"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.02)_0%,rgba(13,43,110,0.2)_42%,rgba(6,13,30,0.95)_100%)]" />

                  <motion.span
                    className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                    animate={{ rotate: isActive ? -45 : 0, scale: isActive ? 1.04 : 1 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ArrowRight size={19} />
                  </motion.span>

                  <div className="relative flex h-full flex-col justify-end">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-white shadow-[0_12px_30px_rgba(13,43,110,0.28)]">
                      <Icon size={17} />
                      <p className="font-technical text-xs font-bold uppercase tracking-[0.08em]">{item.title}</p>
                    </div>

                    <h3 className="max-w-sm font-display text-[clamp(1.55rem,2vw,2.35rem)] font-bold leading-[1.12] tracking-normal">
                      {item.body}
                    </h3>

                    <div className="mt-8 flex items-center gap-4 text-sm font-bold text-white">
                      <span className="shrink-0">{item.cta}</span>
                      <motion.span
                        className="h-px bg-white/80"
                        animate={{ width: isActive ? 128 : 76 }}
                        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <ArrowRight size={22} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:grid-cols-4">
          {audienceStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group flex items-center gap-5 px-8 py-7 transition duration-300 hover:bg-[#f8fbff] ${index > 0 ? "lg:border-l lg:border-ink-900/10" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-ink-900/10 lg:border-l" : ""} ${index > 1 ? "border-t border-ink-900/10 lg:border-t-0" : ""}`}
              >
                <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-[14px] bg-[#eef4ff] text-brand-blue transition duration-300 group-hover:-translate-y-1 group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={30} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block font-display text-3xl font-bold leading-none text-brand-blue">{stat.value}</span>
                  <span className="mt-2 block text-sm font-bold leading-5 text-ink-900">{stat.label}</span>
                  <span className="mt-1 block text-sm leading-5 text-steel-700">{stat.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
