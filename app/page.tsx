import StickyHeader from "@/components/StickyHeader";
import ContactForm from "@/components/ContactForm";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

// Minimal, purposeful icons
function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

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

function CheckCircleIcon() {
  return (
    <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  // Only show top 3 testimonials for social proof
  const featuredReviews = siteConfig.testimonials.slice(0, 3);

  return (
    <div className="bg-slate-50">
      {/*
        HERO SECTION
        - Full viewport height for impact
        - Strong visual hierarchy: Headline > Subhead > CTA
        - Form above the fold for immediate conversion opportunity
      */}
      <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <StickyHeader />

        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:pt-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Value Proposition */}
            <div className="flex flex-col justify-center">
              {/* Trust badge - Small, unobtrusive */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-300">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </span>
                <span>500+ Happy Customers</span>
              </div>

              {/*
                HEADLINE
                - Largest text on page (visual hierarchy)
                - Clear value proposition
                - Location for local SEO
              */}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Transform Your Home with Expert Remodeling
              </h1>

              {/*
                SUBHEADLINE
                - Supporting info, smaller than headline
                - Addresses key concerns: quality, trust, ease
              */}
              <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Professional renovations in Bayamón. Licensed, insured, and committed to quality craftsmanship.
              </p>

              {/*
                VALUE PROPS
                - Quick-scan bullet points (Gestalt: proximity)
                - Addresses objections before they arise
              */}
              <ul className="mt-8 space-y-3">
                {["Free estimates, no obligation", "Licensed & fully insured", "15+ years of experience"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/*
                CTAs - Desktop
                - Primary action: Phone (high intent)
                - Secondary: WhatsApp (lower friction)
                - Large touch targets (Fitts's Law: 48px min)
              */}
              <div className="mt-10 hidden flex-col gap-4 sm:flex sm:flex-row">
                <a
                  href={`tel:${siteConfig.phoneDigits}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 active:scale-[0.98]"
                >
                  <PhoneIcon />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/*
              Right: Contact Form
              - Above the fold for immediate conversion
              - Card design creates visual separation
              - Reduced fields = reduced friction
            */}
            <div className="flex items-center">
              <div className="w-full rounded-2xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    Get Your Free Quote
                  </h2>
                  <p className="mt-1 text-slate-500">
                    We respond within 2 hours
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        SERVICES SECTION
        - Simple, scannable list
        - No descriptions = faster comprehension
        - Visual hierarchy through spacing
      */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Services
            </h2>
            <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              What We Do
            </p>
          </div>

          {/*
            Service grid
            - Even spacing creates visual harmony (Gestalt: proximity)
            - Hover states provide interactivity feedback
          */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {siteConfig.services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-5 text-center transition-all hover:border-amber-200 hover:shadow-md sm:p-6"
              >
                <p className="font-semibold text-slate-800 transition-colors group-hover:text-amber-600">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        SOCIAL PROOF SECTION
        - Reviews build trust near conversion points
        - Only 3 reviews = digestible, not overwhelming
        - Star ratings provide quick visual validation
      */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Reviews
            </h2>
            <p className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Trusted by Homeowners
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {featuredReviews.map((review, index) => (
              <figure
                key={index}
                className="rounded-2xl bg-slate-50 p-6 sm:p-8"
              >
                {/* Star rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-slate-700">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-slate-900">{review.name}</span>
                  <span className="text-slate-400"> · </span>
                  <span className="text-slate-500">{review.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/*
        FINAL CTA SECTION
        - Creates urgency without being pushy
        - Repeats value prop for skimmers
        - High contrast for attention
      */}
      <section className="bg-slate-900 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Get a free estimate today. No pressure, no obligation.
          </p>

          {/*
            CTA buttons
            - Primary: High contrast amber
            - Large touch targets for thumb-friendliness
          */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneDigits}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-xl active:scale-[0.98]"
            >
              <PhoneIcon />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-500 hover:shadow-xl active:scale-[0.98]"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/*
        FOOTER
        - Minimal, functional
        - Only essential info
      */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-semibold text-slate-900">{siteConfig.businessName}</p>
          <p className="mt-1 text-sm text-slate-500">
            Serving Bayamón, San Juan, Guaynabo & surrounding areas
          </p>
          <p className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile floating CTA - Always accessible (Fitts's Law) */}
      <MobileFloatingCTA />
    </div>
  );
}
