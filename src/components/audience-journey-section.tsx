"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionKicker } from "@/components/section-kicker";

const audienceCards = [
  {
    title: "Home owners",
    body: "Build safer homes with certified ARS steel.",
    href: "/tmt-steel-bar-guide-homeowners",
    cta: "Explore guide",
    image: "/ars-assets/home-owner-banner-1.png",
  },
  {
    title: "Engineers",
    body: "Technical specifications, testing, and certifications.",
    href: "/tmt-steel-bar-guide-engineers-architects",
    cta: "View technical hub",
    image: "/ars-assets/our-quality-1.png",
  },
  {
    title: "Dealers",
    body: "Grow local demand with ARS support.",
    href: "/steel-distributors-dealers",
    cta: "Dealer network",
    image: "/ars-assets/products-all.png",
  },
  {
    title: "Contractors",
    body: "Project pricing, quantity planning, and support.",
    href: "/tmt-steel-bar-guide-civil-contractors",
    cta: "Contractor solutions",
    image: "/ars-assets/ARSHOME4.jpg",
  },
];

const cardTransition = {
  type: "spring" as const,
  stiffness: 105,
  damping: 26,
  mass: 0.75,
};

const fadeTransition = {
  duration: 0.26,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function AudienceJourneySection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-white py-24 lg:py-28" id="audiences">
      <div className="ars-container">
        <div className="mb-12 max-w-4xl">
          <SectionKicker className="mb-5">Audience paths</SectionKicker>
          <h2 className="font-display text-[clamp(2.25rem,3.1vw,3.5rem)] font-bold leading-[1.06] tracking-normal text-ink-900">
            Choose Your ARS Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">
            Find the right steel solutions based on your project needs.
          </p>
        </div>

        <div
          className="grid gap-4 md:grid-cols-2 lg:flex lg:h-[552px] lg:items-stretch"
          onMouseLeave={() => setActiveIndex(2)}
        >
          {audienceCards.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                className="min-w-0"
                style={{ flexBasis: 0, flexShrink: 1 }}
                animate={{ flexGrow: isActive ? 2.22 : 1 }}
                initial={false}
                transition={cardTransition}
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
              >
                <Link
                  href={item.href}
                  aria-label={`${item.title}: ${item.cta}`}
                  className="focus-ring group relative block h-[430px] overflow-hidden rounded-[16px] bg-bg-dark text-white shadow-[0_22px_60px_rgba(6,13,30,0.12)] lg:h-full"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} ARS journey`}
                    fill
                    sizes={isActive ? "(min-width: 1024px) 38vw, 100vw" : "(min-width: 1024px) 18vw, 100vw"}
                    className="object-cover opacity-95 transition duration-700 ease-out group-hover:scale-[1.035]"
                    priority={index === 2}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.08)_0%,rgba(6,13,30,0.2)_46%,rgba(6,13,30,0.88)_100%)]" />

                  <motion.span
                    className="absolute right-5 top-5 hidden size-11 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-md ring-1 ring-white/20 lg:inline-flex"
                    animate={{
                      opacity: isActive ? 1 : 0,
                      rotate: isActive ? -45 : 0,
                      scale: isActive ? 1 : 0.92,
                    }}
                    transition={fadeTransition}
                    aria-hidden="true"
                  >
                    <ArrowRight size={18} />
                  </motion.span>

                  <div className="relative flex h-full flex-col justify-end p-6 lg:p-7">
                    <div className="mb-5 inline-flex w-fit rounded-[8px] border border-white/22 bg-white/18 px-4 py-3 text-white shadow-[0_16px_36px_rgba(0,0,0,0.18)] backdrop-blur-md">
                      <p className="font-technical text-xs font-bold uppercase tracking-[0.14em]">{item.title}</p>
                    </div>

                    <h3 className="font-display text-[clamp(1.45rem,4.2vw,1.7rem)] font-bold leading-[1.18] tracking-normal lg:hidden">
                      {item.body}
                    </h3>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-white lg:hidden">
                      <span>{item.cta}</span>
                      <ArrowRight size={16} />
                    </div>

                    <motion.h3
                      className="hidden max-w-xl font-display text-[clamp(1.45rem,1.7vw,1.7rem)] font-bold leading-[1.18] tracking-normal lg:block"
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                      transition={fadeTransition}
                    >
                      {item.body}
                    </motion.h3>

                    <motion.div
                      className="mt-5 hidden items-center gap-2 text-sm font-bold text-white/86 lg:flex"
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                      transition={fadeTransition}
                    >
                      <span>{item.cta}</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
