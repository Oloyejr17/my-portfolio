"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import DesignProcess from "@/components/DesignProcess";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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

      {/* Socials + Video Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Video */}
        <div className="relative w-48 md:w-48 h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <video
            src="/images/herov.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
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
        <div className="w-full md:w-auto text-center md:text-left">
          <h3 className="text-3xl font-semibold text-white mb-6">Socials</h3>
          <div className="flex justify-center md:justify-start items-center gap-8 text-white text-2xl">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaTwitter />
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
      </section>

      <Footer />
    </motion.main>
  );
}
