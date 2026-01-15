import React from "react";
import StickyHeader from "@/components/StickyHeader";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { siteConfig } from "@/lib/siteConfig";

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Service Icons
function KitchenIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
    </svg>
  );
}

function BathroomIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function RepairsIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}

function FlooringIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function CarpentryIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

const serviceIcons: { [key: string]: () => React.ReactElement } = {
  "Kitchen Remodeling": KitchenIcon,
  "Bathroom Renovation": BathroomIcon,
  "General Repairs": RepairsIcon,
  "Painting Services": PaintIcon,
  "Flooring Installation": FlooringIcon,
  "Custom Carpentry": CarpentryIcon,
};

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#111827]">
        <StickyHeader />

        {/* Sophisticated background layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#111827] to-[#1a202c]" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent blur-3xl" />

          {/* Accent orbs */}
          <div className="absolute top-1/3 left-[15%] h-72 w-72 rounded-full bg-orange-500/8 blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-[10%] h-96 w-96 rounded-full bg-blue-500/5 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Main content */}
        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pt-20 pb-24">

          {/* Location badge */}
          <div className="animate-fade-in-up mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Serving Bayamón & Greater San Juan</span>
            </div>
          </div>

          {/* Main headline with accent */}
          <div className="animate-fade-in-up text-center" style={{ animationDelay: "100ms" }}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Home Remodeling</span>
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">&</span>
                <span> Repairs</span>
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Done Right
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-center text-lg text-gray-400 sm:text-xl" style={{ animationDelay: "200ms" }}>
            Transform your home with confidence. Professional craftsmanship,
            transparent pricing, and results that last.
          </p>

          {/* Trust indicators */}
          <div className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" style={{ animationDelay: "300ms" }}>
            {[
              { icon: "clock", label: "15+ Years Experience" },
              { icon: "star", label: "100+ Projects Done" },
              { icon: "check", label: "Free Estimates" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-gray-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10">
                  {item.icon === "clock" && (
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {item.icon === "star" && (
                    <svg className="h-4 w-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                  {item.icon === "check" && (
                    <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up mt-12 flex flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: "400ms" }}>
            {/* Primary CTA - Phone */}
            <a
              href={`tel:${siteConfig.phoneDigits}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-3">
                <PhoneIcon className="h-6 w-6 transition-transform group-hover:rotate-12" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </span>
            </a>

            {/* Secondary CTA - WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border-2 border-green-500/50 bg-green-500/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400 hover:bg-green-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative flex items-center gap-3">
                <WhatsAppIcon className="h-6 w-6 text-green-400 transition-transform group-hover:scale-110" />
                <span>WhatsApp Us</span>
              </span>
            </a>
          </div>

          {/* Response time badge */}
          <div className="animate-fade-in-up mt-8 text-center" style={{ animationDelay: "500ms" }}>
            <p className="inline-flex items-center gap-2 text-sm text-gray-400">
              <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>No obligation • We respond within 1 hour</span>
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
              <div className="h-10 w-6 rounded-full border-2 border-gray-600 p-1">
                <div className="h-2 w-1.5 rounded-full bg-gray-500 animate-bounce-subtle mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Services
              </h2>
              <p className="mt-2 text-3xl font-bold text-[#111827] sm:text-4xl">
                What We Do
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-[#374151]">
                From small repairs to complete renovations, we deliver quality craftsmanship on every project.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const IconComponent = serviceIcons[service.title] || RepairsIcon;
              return (
                <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 80}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 sm:p-8">
                    {/* Gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon container */}
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                        <IconComponent />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-[#111827] transition-colors duration-300 group-hover:text-orange-600">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-relaxed text-[#374151]">
                        {service.description}
                      </p>

                      {/* Arrow indicator */}
                      <div className="mt-4 flex items-center text-sm font-medium text-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <span>Learn more</span>
                        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* CTA under services */}
          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="mt-12 text-center">
              <p className="text-[#374151]">
                Don&apos;t see what you need?{" "}
                <a href={`tel:${siteConfig.phoneDigits}`} className="font-semibold text-orange-500 underline-offset-2 hover:underline">
                  Give us a call
                </a>
                {" "}— we do it all.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* REVIEWS CAROUSEL SECTION */}
      <section className="border-y border-gray-100 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Testimonials
              </h2>
              <p className="mt-2 text-3xl font-bold text-[#111827] sm:text-4xl">
                What Our Clients Say
              </p>
              <p className="mx-auto mt-4 max-w-xl text-[#374151]">
                Hear from homeowners who trusted us with their projects.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Full-width carousel */}
        <div className="mt-12">
          <TestimonialCarousel />
        </div>

        {/* Stats bar */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#111827] sm:text-4xl">100+</p>
              <p className="mt-1 text-sm text-[#374151]">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#111827] sm:text-4xl">15+</p>
              <p className="mt-1 text-sm text-[#374151]">Years Experience</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative overflow-hidden bg-[#111827] py-24 sm:py-32">
        {/* Sophisticated background */}
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Radial glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-b from-orange-500/15 via-orange-500/5 to-transparent blur-3xl" />
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px] animate-float" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 text-center">
          {/* Badge */}
          <AnimateOnScroll animation="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
              <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium text-orange-400">Let&apos;s Talk About Your Project</span>
            </div>
          </AnimateOnScroll>

          {/* Headline with gradient */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Ready to</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Get Started?
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
              Give us a call today for a free estimate. No pressure, no obligation — just honest advice for your home project.
            </p>
          </AnimateOnScroll>

          {/* CTA Buttons */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* Primary CTA - Phone */}
              <a
                href={`tel:${siteConfig.phoneDigits}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6 transition-transform group-hover:rotate-12" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </span>
              </a>

              {/* Secondary CTA - WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border-2 border-green-500/50 bg-green-500/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400 hover:bg-green-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative flex items-center gap-3">
                  <WhatsAppIcon className="h-6 w-6 text-green-400 transition-transform group-hover:scale-110" />
                  <span>WhatsApp Us</span>
                </span>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Trust line */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Free Estimates
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Quick Response
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Quality Guaranteed
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-semibold text-[#111827]">{siteConfig.businessName}</p>
          <p className="mt-1 text-sm text-[#374151]">
            Serving Bayamón, San Juan, Guaynabo & surrounding areas
          </p>
          <p className="mt-6 text-xs text-gray-400">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
