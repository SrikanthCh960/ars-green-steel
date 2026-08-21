"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 } as const;

type HomepageSectionMotionProps = Omit<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
>;

type HomepageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function reveal(reduceMotion: boolean | null, delay = 0, y = 18) {
  return {
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: reduceMotion ? { duration: 0 } : { duration: 0.58, delay, ease },
  };
}

/**
 * Page-scoped reveal for the homepage's editorial sections. Keeping this
 * separate from MotionSection lets the homepage establish its own measured
 * rhythm without changing motion on interior pages.
 */
export function HomepageSectionMotion({
  children,
  className = "",
  ...props
}: HomepageSectionMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      {...props}
      className={className}
      data-homepage-motion="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={shouldReduceMotion ? undefined : { duration: 0.64, ease }}
    >
      {children}
    </motion.section>
  );
}

/** Homepage-only content layer reveal. */
export function HomepageReveal({ children, className, delay = 0, y = 18 }: HomepageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div className={className} data-homepage-motion="content" {...reveal(shouldReduceMotion, delay, y)}>
      {children}
    </motion.div>
  );
}

/** Homepage-only visual reveal for imagery and media. */
export function HomepageImageReveal({ children, className, delay = 0 }: Omit<HomepageRevealProps, "y">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-homepage-motion="image"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.008 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.68, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
