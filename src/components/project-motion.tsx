"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

export function ProjectSectionMotion({ children, className = "", ...props }: HTMLMotionProps<"section">) {
  const reduceMotion = useReducedMotion();
  return <motion.section {...props} className={className} data-project-motion initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-72px" }} transition={reduceMotion ? { duration: 0 } : { duration: 0.62, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.section>;
}
