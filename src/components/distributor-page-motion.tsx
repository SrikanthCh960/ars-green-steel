"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
export function DistributorPageReveal({ children, delay = 0, y = 18 }: { children: ReactNode; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return <motion.div data-distributor-motion initial={reduce ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={reduce ? { duration: 0 } : { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
