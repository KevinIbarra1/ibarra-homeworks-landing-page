"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

function QuoteIcon() {
  return (
    <svg className="h-8 w-8 text-orange-500/20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += speed;

      // Reset when we've scrolled half (since content is duplicated)
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Double the testimonials for seamless infinite loop
  const testimonials = [...siteConfig.testimonials, ...siteConfig.testimonials];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient masks for smooth fade effect on edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

      {/* Scrolling container */}
      <div ref={scrollRef} className="flex will-change-transform">
        {testimonials.map((review, index) => (
          <figure
            key={index}
            className="group mx-3 w-[350px] flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg sm:mx-4 sm:w-[400px] sm:p-8"
          >
            {/* Quote icon */}
            <div className="mb-4">
              <QuoteIcon />
            </div>

            {/* Review text */}
            <blockquote className="text-[#374151] leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="mt-6">
              <p className="font-semibold text-[#111827]">{review.name}</p>
              <p className="text-sm text-[#374151]">{review.city}</p>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
