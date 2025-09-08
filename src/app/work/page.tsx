"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "A modern food delivery app with real-time tracking, clean UI, and seamless user experience.",
    image: "/images/project1.jpg",
    github: "https://github.com/yourusername/food-delivery-app",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Scalable e-commerce solution featuring product management, cart system, and secure payments.",
    image: "/images/project2.png",
    github: "https://github.com/Oloyejr17/shopwest-e-commerce-web-app.git",
  },
  {
    id: 3,
    title: "Online Banking App",
    description:
      "Robust online banking platform featuring account management, secure transactions, and real-time financial insights.",
    image: "/images/project3.gif",
    github: "https://github.com/Oloyejr17/Banking-web-app-with-nextjs-typescript.git",
  },
];

export default function Work() {
  return (
    <motion.main
      key="work"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white"
    >
      <Navbar />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Selected Works
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full md:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.a>

              {/* Text */}
              <div className="md:w-1/2 space-y-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold cursor-pointer">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-400 text-lg">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
