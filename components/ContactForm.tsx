"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-7 w-7 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#111827]">Message Sent!</h3>
        <p className="mt-1 text-[#374151]">We&apos;ll call you within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#111827] placeholder-[#374151]/60 transition-colors focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Phone number"
          className="w-full rounded-lg border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#111827] placeholder-[#374151]/60 transition-colors focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      <div>
        <label htmlFor="service" className="sr-only">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full appearance-none rounded-lg border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#111827] transition-colors focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        >
          <option value="" disabled>
            What do you need help with?
          </option>
          <option value="kitchen">Kitchen Remodeling</option>
          <option value="bathroom">Bathroom Renovation</option>
          <option value="repairs">General Repairs</option>
          <option value="painting">Painting</option>
          <option value="flooring">Flooring</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Additional details (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us more (optional)"
          className="w-full resize-none rounded-lg border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-[#111827] placeholder-[#374151]/60 transition-colors focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-orange-500 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-xl active:scale-[0.98]"
      >
        Get Free Quote
      </button>

      <p className="text-center text-xs text-[#374151]/60">
        No spam. We respect your privacy.
      </p>
    </form>
  );
}
