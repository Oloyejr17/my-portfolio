"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi"; // Email icon
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const email = "oloyejr01@gmail.com";
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine if link is active
  const isActive = (link: string) => pathname === link;

  return (
    <nav
      className={`relative w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center text-white gap-8">
          {pathname === "/" && (
            <span className="font-medium uppercase tracking-wide text-lg">
              OLOYE JR
            </span>
          )}

          {/* About */}
          <Link href="/" className="relative group">
            <span className="text-lg font-medium">ABOUT</span>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          {/* Work */}
          <Link href="/work" className="relative group">
            <span className="text-lg font-medium">WORK</span>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                isActive("/work") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </div>

        {/* Right Section - Gmail Link */}
        <div className="ml-auto flex items-center">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            aria-label="Email via Gmail"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </nav>
  );
}
