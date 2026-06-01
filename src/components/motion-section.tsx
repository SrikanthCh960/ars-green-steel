"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function MotionSection({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      {...props}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
