"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-medium text-gray-900">{faq.q}</span>
            <span className="ml-4 flex-shrink-0">
              <svg
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-gray-600">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
