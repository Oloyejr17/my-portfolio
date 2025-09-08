"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiCopy, FiCheck } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "oloyejr01@gmail.com";
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-white">LET&apos;S CONNECT</span>
          <div className="flex items-center bg-white hover:bg-gray-200 transition-colors duration-300 rounded-full px-4 py-1 relative">
            <button
              onClick={handleCopy}
              className="flex items-center text-[#0b1e4a] text-base font-medium"
            >
              {email}
              <span className="ml-2">{copied ? <FiCheck className="text-green-500" /> : <FiCopy />}</span>
            </button>
            {copied && (
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-white">
                Email copied!
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
