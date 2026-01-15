"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a
          href="#"
          className={`text-lg font-bold transition-colors ${
            scrolled ? "text-[#111827]" : "text-white"
          }`}
        >
          {siteConfig.businessName}
        </a>

        {/* Single CTA */}
        <a
          href={`tel:${siteConfig.phoneDigits}`}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
            scrolled
              ? "bg-orange-500 text-white hover:bg-orange-400"
              : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
          }`}
        >
          Get Free Quote
        </a>
      </nav>
    </header>
  );
}
