"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import DesignProcess from "@/components/DesignProcess";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-black"
    >
      <Navbar />
      <Hero />
      <HeroSection />

      {/* Code Image */}
      <div className="w-full flex justify-center py-16">
        <Image
          src="/images/code.jpg"
          alt="Code Illustration"
          width={900}
          height={600}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Professional Statement */}
      <div className="px-6 md:px-12 lg:px-20 text-center mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed max-w-3xl mx-auto">
          I deliver{" "}
          <span className="text-yellow-400">scalable and efficient solutions</span>{" "}
          by combining technical expertise with{" "}
          <span className="text-yellow-400">data-driven insights</span>.
        </h2>
      </div>

      <DesignProcess />
      <Experience />

      {/* Video + Socials Section */}
      <section className="relative w-full px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Video */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            <video
  src="/images/Herov.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-auto h-full object-contain video-tornado"
/>



            {/* Edge Blur Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black/50 to-transparent" />
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-3xl font-semibold text-white mb-6">Socials</h3>
            <div className="flex justify-center md:justify-start items-center gap-8 text-white text-2xl">
              <a
                href="https://github.com/oloyejr17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/azubike-oloye-41b740382/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
