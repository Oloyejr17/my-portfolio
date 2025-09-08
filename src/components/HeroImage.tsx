"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 300], [200, 0]);

  return (
    <motion.div
      style={{ y: heroImageY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[330px] h-[400px] md:w-[440px] md:h-[560px] rounded-2xl overflow-hidden mx-auto shadow-lg"
    >
      <Image
        src="/images/hero.jpeg"
        alt="Portrait of Oloye Jr"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 330px, (max-width: 1200px) 440px, 440px"
      />
    </motion.div>
  );
}
