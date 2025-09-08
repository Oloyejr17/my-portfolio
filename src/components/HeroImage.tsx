"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  const { scrollY } = useScroll();

  const heroImageY = useTransform(scrollY, [0, 300], [200, 0]);

  return (
    <motion.div
      style={{ y: heroImageY }}
      className="relative w-[330px] h-[400px] md:w-[440px] md:h-[560px] rounded-2xl overflow-hidden mx-auto"
    >
      <Image
        src="/images/hero.jpeg"
        alt="Hero Portrait"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
