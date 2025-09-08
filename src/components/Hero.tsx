"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll-based transforms
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -150]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Hero Text */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative text-center px-6 md:px-12 z-10"
      >
        <h1 className="text-[3rem] md:text-[6rem] font-bold leading-tight">
          Fullstack Developer©
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-2xl mt-4 text-gray-300">
          I love making cool things and solving complex problems for people —
          like you!
        </p>
      </motion.div>
    </section>
  );
}
