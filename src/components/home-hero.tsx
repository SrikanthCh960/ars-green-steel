"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    word: "STRENGTH",
    eyebrow: "550D TMT steel",
    title: "Stronger bars. Safer structures.",
    copy: "High-strength ductile TMT bars for residential, commercial, and infrastructure projects.",
    proof: "550D grade · 8mm to 32mm range",
    image: "/ars-assets/products-all.png",
  },
  {
    word: "SAFETY",
    eyebrow: "Tested quality",
    title: "Quality checks before site decisions.",
    copy: "Ductility, bendability, and testing support better decisions for engineers and site teams.",
    proof: "Bend, rebend, tensile and quality checks",
    image: "/ars-assets/our-quality-1.png",
  },
  {
    word: "TRUST",
    eyebrow: "Since 1992",
    title: "Proof buyers can act on.",
    copy: "Product proof, certification routes, dealer support, and quote guidance in one ARS journey.",
    proof: "Certification, capacity and dealer support",
    image: "/ars-assets/awards-certificates-img3.png",
  },
  {
    word: "GREEN STEEL",
    eyebrow: "Responsible construction",
    title: "Lower-impact steel choices.",
    copy: "ARS Green Steel supports modern construction with sustainability-led manufacturing confidence.",
    proof: "EPD, green-building and process readiness",
    image: "/ars-assets/ARS-GREEN-STEEL-Logo.png",
    imageFit: "contain",
  },
];

const cycleMs = 4200;

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = heroSlides[activeIndex];

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, cycleMs);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      aria-label="ARS Green Steel hero"
      data-active-word={active.word}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden text-white"
    >
      <div className="absolute inset-0 h-full w-full bg-ink-950">
        <div className="hero-video-placeholder absolute inset-0 h-full w-full" />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-82"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/ars-intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/78 to-ink-950/24" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,14,0.12),rgba(11,13,14,0.9))]" />
      </div>

      <div className="ars-container relative z-10 flex min-h-[100svh] flex-col justify-center py-24 sm:py-28 lg:justify-end lg:pb-14 lg:pt-32">
        <div className="grid min-w-0 gap-7 sm:gap-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(420px,0.54fr)] lg:items-end lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-grey-300 backdrop-blur sm:mb-7">
              <span className="size-2 rounded-full bg-brand-blue" />
              Since 1992 · Certified TMT steel
            </div>
            <h1 className="max-w-[760px] font-display text-[clamp(2.4rem,9vw,3rem)] font-black uppercase leading-[0.95] tracking-normal text-white sm:text-[clamp(3rem,5vw,4rem)]">
              <span className="sr-only" aria-live="polite">
                We Build {active.word} Structures.
              </span>
              <span aria-hidden="true">
                We Build
                <span className="relative block min-h-[0.98em] overflow-hidden text-[#F76369]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={active.word}
                      className="hero-feature-word block"
                      initial={reduceMotion ? false : { y: "82%", opacity: 0, rotateX: -18 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { y: "-82%", opacity: 0, rotateX: 18 }}
                      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {active.word}
                    </motion.span>
                  </AnimatePresence>
                </span>
                Structures.
              </span>
            </h1>
            <p className="mt-5 max-w-[590px] text-base leading-7 text-grey-200 sm:mt-6 sm:text-lg sm:leading-9">
              {active.copy}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark" href="/steel-price-today">
                Check today&apos;s price <ArrowRight size={18} />
              </Link>
              <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900" href="#products">
                Explore products <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="w-full justify-self-start lg:max-w-[520px] lg:self-end lg:justify-self-end">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={active.word}
                data-card-title={active.title}
                className="relative aspect-[1.45/1] min-h-[210px] overflow-hidden rounded-[16px] border border-white/20 bg-ink-900 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:aspect-[1.48/1] sm:min-h-[320px] lg:min-h-[280px]"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: -12 }}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={active.image}
                  alt={`${active.word.toLowerCase()} proof for ARS Green Steel`}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className={active.imageFit === "contain" ? "object-contain p-12 opacity-95" : "object-cover opacity-92"}
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/92 via-ink-950/28 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink-950/28 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="font-display text-2xl font-black uppercase leading-none tracking-normal text-white sm:text-[2rem]">
                    {active.eyebrow}
                  </p>
                  <p className="mt-2 max-w-[520px] text-base leading-6 text-white/88 sm:mt-3 sm:text-lg sm:leading-7">
                    {active.title}
                  </p>
                  <p className="mt-3 inline-flex rounded-full border border-white/16 bg-white/10 px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/84 backdrop-blur sm:text-xs sm:tracking-[0.16em]">
                    {active.proof}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
