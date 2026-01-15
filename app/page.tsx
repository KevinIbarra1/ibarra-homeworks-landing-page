import StickyHeader from "@/components/StickyHeader";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <StickyHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Home Remodeling &amp; Repairs in Bayamón
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                Quality work. Fair prices. Free estimates.
              </p>

              {/* Simple trust indicators */}
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-white">
                <span className="flex items-center gap-2">
                  <CheckIcon /> Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon /> 15+ Years Experience
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phoneDigits}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-100"
                >
                  <PhoneIcon />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-600"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-6 shadow-2xl md:p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Get Your Free Estimate
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services - Simple Grid */}
      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What We Do
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-6">
            {siteConfig.services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
              >
                <p className="font-medium text-gray-900">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Just 3 Reviews */}
      <section id="reviews" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What Customers Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteConfig.testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-700">&quot;{testimonial.text}&quot;</p>
                <p className="mt-4 text-sm font-medium text-gray-900">
                  — {testimonial.name}, {testimonial.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-blue-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Call or message us today for a free, no-obligation estimate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneDigits}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-gray-100"
            >
              <PhoneIcon />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-600"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-semibold text-white">{siteConfig.businessName}</p>
          <p className="mt-1 text-sm text-gray-400">
            Serving Bayamón, San Juan, Guaynabo &amp; surrounding areas
          </p>
          <p className="mt-4 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}
          </p>
        </div>
      </footer>
    </>
  );
}
