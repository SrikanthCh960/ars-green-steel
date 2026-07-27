"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type AboutJourneyTimelineProps = {
  milestones: readonly Milestone[];
};

export function AboutJourneyTimeline({ milestones }: AboutJourneyTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const containerInset = Math.max(20, (viewportWidth - 1440) / 2);
  const finalCardOffset = (milestones.length - 1) * 340 + 300;
  const railTravel = viewportWidth - containerInset * 2 - finalCardOffset;
  const railX = useTransform(scrollYProgress, [0, 1], [0, railTravel]);

  return (
    <>
      <section ref={sectionRef} className="relative hidden h-[220vh] xl:block" aria-label="ARS journey timeline">
        <div className="sticky top-[76px] h-[calc(100vh-76px)] min-h-[650px] overflow-hidden">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 -translate-y-1/2" aria-hidden="true">
            <div className="absolute inset-x-0 top-1/2 h-px bg-brand-blue/20" />
            <Image
              src="/ars-assets/TMT_Rod-CRS.png"
              alt=""
              width={3725}
              height={107}
              sizes="100vw"
              className="relative h-auto w-[1800px] max-w-none opacity-95"
            />
          </div>
          <motion.ol style={{ x: prefersReducedMotion ? 0 : railX }} className="relative h-full min-w-[3100px]" aria-label="Milestones from 1990 to today">
            {milestones.map((milestone, index) => {
              const above = index % 2 === 0;
              const position = `calc(max(20px, 50vw - 720px) + ${index * 340}px)`;
              return (
                <li
                  key={milestone.year}
                  className={`absolute min-h-[280px] w-[300px] ${above ? "bottom-[calc(50%+3rem)]" : "top-[calc(50%+3rem)]"}`}
                  style={{ left: position }}
                >
                  <article className="relative z-20 h-full min-h-[280px] border-l-2 border-brand-red bg-white p-5 shadow-[0_18px_42px_rgba(6,13,30,0.1)]">
                    <p className="font-technical text-xs font-black tracking-[0.16em] text-brand-red">{milestone.year}</p>
                    <h3 className="mt-3 font-display text-lg font-bold leading-tight text-ink-900">{milestone.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-steel-700">{milestone.description}</p>
                  </article>
                  <span className={`absolute left-0 z-0 w-[2px] bg-brand-red ${above ? "top-full h-12" : "bottom-full h-12"}`} aria-hidden="true" />
                </li>
              );
            })}
          </motion.ol>
          <p className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-steel-700">
            Scroll to explore
          </p>
        </div>
      </section>

      <ol className="relative grid gap-7 border-l border-brand-blue/20 pl-7 xl:hidden" aria-label="Milestones from 1990 to today">
        {milestones.map((milestone) => (
          <li key={milestone.year} className="relative">
            <span className="absolute -left-[35px] top-1.5 size-4 border-4 border-surface-50 bg-brand-red" aria-hidden="true" />
            <p className="font-technical text-xs font-black tracking-[0.16em] text-brand-red">{milestone.year}</p>
            <h3 className="mt-2 font-display text-lg font-bold leading-tight text-ink-900">{milestone.title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-steel-700">{milestone.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
