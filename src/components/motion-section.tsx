"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

export function MotionSection({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"section">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      {...props}
      className={className}
      initial={false}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
