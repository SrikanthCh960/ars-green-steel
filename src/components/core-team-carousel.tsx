"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface CoreTeamMember {
  name: string;
  role: string;
  photo: string;
}

interface CoreTeamCarouselProps {
  members: readonly CoreTeamMember[];
}

export function CoreTeamCarousel({ members }: CoreTeamCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const move = (step: number) => {
    setDirection(step);
    setActiveIndex((current) => (current + step + members.length) % members.length);
  };

  const visibleMembers = [members[activeIndex], members[(activeIndex + 1) % members.length]];

  return (
    <div aria-roledescription="carousel" aria-label="ARS Core Team">
      <div className="overflow-hidden">
        <motion.div
          key={activeIndex}
          className="grid gap-6 md:grid-cols-2"
          initial={reduceMotion ? false : { opacity: 0.35, x: direction * 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          {visibleMembers.map((member, index) => (
            <article
              key={member.name}
              className={`${index === 1 ? "hidden md:grid" : "grid"} overflow-hidden border border-ink-900/10 bg-surface-50 sm:grid-cols-[minmax(160px,0.85fr)_minmax(0,1.15fr)]`}
            >
              <div className="relative aspect-[270/293] w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role} at ARS Green Steel`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-48 flex-col justify-center p-6 md:p-7">
                <h3 className="font-display text-xl font-bold leading-tight text-ink-900">{member.name}</h3>
                <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.05em] text-steel-700">
                  {member.role}
                </p>
                <span className="mt-6 h-0.5 w-16 bg-brand-red" aria-hidden="true" />
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => move(-1)}
            className="focus-ring inline-flex size-12 items-center justify-center rounded-full border border-brand-blue/20 bg-white text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white"
            aria-label="Show previous core team members"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="focus-ring inline-flex size-12 items-center justify-center rounded-full bg-brand-blue text-white transition hover:bg-[#0a235b]"
            aria-label="Show next core team members"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2" aria-label="Choose core team carousel position">
          {members.map((member, index) => (
            <button
              key={member.name}
              type="button"
              onClick={() => {
                setDirection(index >= activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`focus-ring h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-10 bg-brand-red" : "w-6 bg-brand-blue/15 hover:bg-brand-blue/35"
              }`}
              aria-label={`Show core team members starting with ${member.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <p className="text-xs font-semibold tracking-[0.12em] text-steel-700" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(members.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
