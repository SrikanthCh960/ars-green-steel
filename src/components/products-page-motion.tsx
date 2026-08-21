"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 } as const;

type ProductsSectionMotionProps = Omit<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
>;

type ProductsRevealProps = {
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

/** Page-scoped editorial reveal treatment for the products listing. */
export function ProductsSectionMotion({
  children,
  className = "",
  ...props
}: ProductsSectionMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      {...props}
      className={className}
      data-products-motion="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={shouldReduceMotion ? undefined : { duration: 0.64, ease }}
    >
      {children}
    </motion.section>
  );
}

/** Page-scoped content layer reveal for the Products route. */
export function ProductsReveal({ children, className, delay = 0, y = 18 }: ProductsRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div className={className} data-products-motion="content" {...reveal(shouldReduceMotion, delay, y)}>
      {children}
    </motion.div>
  );
}
