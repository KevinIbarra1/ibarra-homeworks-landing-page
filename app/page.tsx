import StickyHeader from "@/components/StickyHeader";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

function StarIcon() {
  return (
    <svg className="h-4 w-4 fill-orange-500" viewBox="0 0 20 20">
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

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  const featuredReviews = siteConfig.testimonials.slice(0, 3);

  return (
    <div className="bg-[#FAFAFA]">
      {/* HERO SECTION - Clean, focused on CTA */}
      <section className="relative min-h-[85vh] bg-[#111827]">
        <StickyHeader />

        <div className="absolute inset-0 bg-gradient-to-br from-[#374151]/20 to-transparent" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center">
          {/* Trust badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-gray-300">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span>500+ Happy Customers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Home Remodeling & Repairs Done Right
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
            Professional renovations in Bayamón. Licensed, insured, and ready to transform your home.
          </p>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <CheckIcon />
              Free Estimates
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              15+ Years Experience
            </span>
          </div>

          {/* CTAs - Prominent call buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneDigits}`}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.98]"
            >
              <PhoneIcon className="h-6 w-6" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:shadow-xl active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Response time */}
          <p className="mt-6 text-sm text-gray-500">
            We respond within 1 hour
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Services
            </h2>
            <p className="mt-2 text-3xl font-bold text-[#111827] sm:text-4xl">
              What We Do
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {siteConfig.services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-200 bg-white p-5 text-center transition-all hover:border-orange-200 hover:shadow-md sm:p-6"
              >
                <p className="font-semibold text-[#111827] transition-colors group-hover:text-orange-500">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="border-y border-gray-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Reviews
            </h2>
            <p className="mt-2 text-3xl font-bold text-[#111827] sm:text-4xl">
              Trusted by Homeowners
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {featuredReviews.map((review, index) => (
              <figure
                key={index}
                className="rounded-2xl bg-[#FAFAFA] p-6 sm:p-8"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="mt-4 text-[#374151]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-[#111827]">{review.name}</span>
                  <span className="text-gray-400"> · </span>
                  <span className="text-[#374151]">{review.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#111827] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Give us a call today. Free estimates, no obligation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneDigits}`}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-xl active:scale-[0.98]"
            >
              <PhoneIcon className="h-6 w-6" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:shadow-xl active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span>WhatsApp</span>
            </a>
          </div>
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

      <MobileFloatingCTA />
    </div>
  );
}
