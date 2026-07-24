"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type FocusEvent, type KeyboardEvent, useEffect, useState } from "react";
import { SectionKicker } from "@/components/section-kicker";

const cycleDuration = 6000;

const audiencePaths = [
  {
    title: "Homeowners",
    label: "Building a home",
    body: "Plan a safer home with certified TMT steel, practical construction guidance, and quantity tools.",
    href: "/tmt-steel-bar-guide-homeowners",
    cta: "Plan your home",
    image: "/ars-assets/home-owner-banner-1.png",
    imageAlt: "Residential construction supported by ARS steel",
  },
  {
    title: "Engineers & Architects",
    label: "Specifying a project",
    body: "Review product specifications, testing information, and certification routes for confident design decisions.",
    href: "/tmt-steel-bar-guide-engineers-architects",
    cta: "View technical resources",
    image: "/ars-assets/our-quality-1.png",
    imageAlt: "ARS quality and testing documentation",
  },
  {
    title: "Contractors",
    label: "Delivering on site",
    body: "Move from quantity planning and pricing to dependable product selection and project support.",
    href: "/tmt-steel-bar-guide-civil-contractors",
    cta: "Explore project support",
    image: "/ars-assets/ARSHOME4.jpg",
    imageAlt: "ARS TMT steel for construction projects",
  },
  {
    title: "Dealers & Distributors",
    label: "Growing the network",
    body: "Explore the ARS product range, dealer support, and opportunities to serve demand in your market.",
    href: "/steel-distributors-dealers",
    cta: "Join the dealer network",
    image: "/ars-assets/products-all.png",
    imageAlt: "ARS TMT steel product range",
  },
];

export function AudienceJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycleVersion, setCycleVersion] = useState(0);
  const reduceMotion = useReducedMotion();
  const activePath = audiencePaths[activeIndex];

  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % audiencePaths.length);
    }, cycleDuration);

    return () => window.clearTimeout(timer);
  }, [activeIndex, cycleVersion, isPaused, reduceMotion]);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % audiencePaths.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + audiencePaths.length) % audiencePaths.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = audiencePaths.length - 1;
    }

    if (nextIndex === undefined) return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    document.getElementById(`audience-tab-${nextIndex}`)?.focus();
  }

  function handleSectionBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
      setCycleVersion((current) => current + 1);
    }
  }

  return (
    <section className="bg-surface-50 py-20 lg:py-28" id="audiences">
      <div className="ars-container">
        <div className="mb-12 max-w-4xl">
          <SectionKicker className="mb-5">Who we support</SectionKicker>
          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,4vw,4.2rem)] font-bold leading-[0.98] tracking-normal text-ink-900">
            Built for every construction decision.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">
            Explore ARS products, technical resources, planning tools, and project support based on
            your role.
          </p>
        </div>

        <div
          className="grid overflow-hidden rounded-[22px] border border-brand-blue/10 bg-brand-blue shadow-[0_28px_90px_rgba(13,43,110,0.2)] lg:min-h-[590px] lg:grid-cols-[0.42fr_0.58fr]"
          onBlurCapture={handleSectionBlur}
          onFocusCapture={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setCycleVersion((current) => current + 1);
          }}
        >
          <div
            aria-label="Choose your role"
            className="flex flex-col p-5 sm:p-7 lg:justify-center lg:p-10"
            role="tablist"
          >
            {audiencePaths.map((path, index) => {
              const isActive = activeIndex === index;
              const number = String(index + 1).padStart(2, "0");

              return (
                <button
                  key={path.title}
                  aria-controls="audience-panel"
                  aria-selected={isActive}
                  className={`focus-ring group relative grid min-h-[92px] w-full grid-cols-[44px_minmax(0,1fr)_28px] items-center gap-3 overflow-hidden border-b border-white/10 px-2 py-5 text-left transition first:border-t ${
                    isActive ? "text-white" : "text-white/52 hover:text-white"
                  }`}
                  id={`audience-tab-${index}`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <span className={`font-technical text-xs font-bold tracking-[0.16em] ${isActive ? "text-brand-red" : "text-white/32"}`}>
                    {number}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold leading-tight sm:text-xl">
                      {path.title}
                    </span>
                    <span className={`mt-1 block text-xs leading-5 ${isActive ? "text-white/58" : "text-white/32"}`}>
                      {path.label}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className={`transition ${isActive ? "translate-x-0 text-brand-red" : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-white"}`}
                    size={19}
                  />
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className={`audience-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-red ${
                        isPaused ? "audience-progress-paused" : ""
                      }`}
                      key={`${activeIndex}-${cycleVersion}`}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`audience-tab-${activeIndex}`}
            className="relative min-h-[480px] overflow-hidden lg:min-h-full"
            id="audience-panel"
            role="tabpanel"
            tabIndex={0}
          >
            <Image
              key={activePath.title}
              src={activePath.image}
              alt={activePath.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,30,0.08)_0%,rgba(6,13,30,0.24)_40%,rgba(6,13,30,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <p className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-white/54">
                {activePath.label}
              </p>
              <h3 className="mt-4 max-w-xl font-display text-[clamp(2rem,3.4vw,3.6rem)] font-bold leading-[0.98] text-white">
                {activePath.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                {activePath.body}
              </p>
              <Link
                className="focus-ring mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-brand-red-dark"
                href={activePath.href}
              >
                {activePath.cta} <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
