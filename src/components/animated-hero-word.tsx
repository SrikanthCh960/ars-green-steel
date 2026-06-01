"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["STRENGTH", "SAFETY", "TRUST", "GREEN STEEL"];

export function AnimatedHeroWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="relative block min-h-[0.95em] overflow-hidden text-[#F76369]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="hero-feature-word block"
          initial={{ y: "100%", opacity: 0, rotateX: -40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: "-100%", opacity: 0, rotateX: 40 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
