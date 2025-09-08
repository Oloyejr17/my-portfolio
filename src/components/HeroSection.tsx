"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative">
      {/* Left: Intro Text */}
      <div className="flex-1 text-center md:text-left space-y-6 mt-20 md:mt-0">
        <motion.h5
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide"
          style={{ y }}
        >
          Hi there,
        </motion.h5>

        <motion.p
          className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed"
          style={{ y }}
        >
          I’m <span className="text-white font-semibold">Oloye</span>, a
          Full-Stack Web Developer and Freelance Software Engineer. I craft
          scalable and efficient web and mobile applications using{" "}
          <span className="text-yellow-400 font-medium">React.js</span>,{" "}
          <span className="text-yellow-400 font-medium">React Native</span>, and
          modern JavaScript technologies. My focus is on delivering
          high-performance, visually engaging, and user-centric digital
          experiences.
        </motion.p>

        <motion.p
          className="text-gray-400 max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed text-sm sm:text-base md:text-lg"
          style={{ y }}
        >
          With a strong background in both design and development, I bridge the
          gap between beautiful interfaces and robust functionality, helping
          clients bring their ideas to life efficiently and elegantly.
        </motion.p>
      </div>

      {/* Right: Hero Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0"
        style={{ y }}
      >
        <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-[440px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/hero.jpeg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
