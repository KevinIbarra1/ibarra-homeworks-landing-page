export const siteConfig = {
  businessName: "Ibarra HomeWorks",
  primaryService: "Remodeling & Repairs",
  city: "Bayamón, PR",
  phoneDisplay: "(939) 387-1485",
  phoneDigits: "9393871485",
  whatsappDigits: "19393871485",
  hours: "Mon–Sat 8am–6pm",
  responseTime: "Replies within 1 hour",

  hero: {
    headline: "Remodeling & Repairs in Bayamón, PR — Transform Your Home Today",
    subheadline:
      "Professional home improvement services you can trust. Quality workmanship, fair prices, and results that last.",
    benefits: [
      "Expert craftsmanship with attention to detail",
      "Transparent pricing with no hidden fees",
      "Fully licensed and insured professionals",
    ],
  },

  trustChips: [
    { icon: "shield", label: "Licensed" },
    { icon: "check", label: "Insured" },
    { icon: "dollar", label: "Free Estimates" },
    { icon: "clock", label: "Fast Response" },
  ],

  credibilityBar: [
    { icon: "star", value: "500+", label: "Projects Completed" },
    { icon: "users", value: "15+", label: "Years Experience" },
    { icon: "thumbsUp", value: "4.9", label: "Customer Rating" },
    { icon: "clock", value: "24hr", label: "Response Time" },
    { icon: "award", value: "100%", label: "Satisfaction" },
  ],

  services: [
    {
      title: "Kitchen Remodeling",
      description:
        "Complete kitchen renovations including cabinets, countertops, flooring, and modern fixtures.",
    },
    {
      title: "Bathroom Renovation",
      description:
        "Transform your bathroom with new tiles, vanities, showers, and elegant finishes.",
    },
    {
      title: "General Repairs",
      description:
        "From minor fixes to major repairs, we handle all your home maintenance needs.",
    },
    {
      title: "Painting Services",
      description:
        "Interior and exterior painting with premium paints and professional finish.",
    },
    {
      title: "Flooring Installation",
      description:
        "Hardwood, tile, laminate, and vinyl flooring installed with precision.",
    },
    {
      title: "Custom Carpentry",
      description:
        "Built-in shelves, custom closets, trim work, and woodworking projects.",
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Contact Us",
      description: "Call, WhatsApp, or fill out our form to tell us about your project.",
    },
    {
      step: 2,
      title: "Get a Free Quote",
      description: "We'll assess your needs and provide a detailed, no-obligation estimate.",
    },
    {
      step: 3,
      title: "We Get It Done",
      description: "Our team completes your project on time and to your satisfaction.",
    },
  ],

  testimonials: [
    {
      name: "María González",
      city: "Bayamón",
      text: "Excellent work on our kitchen remodel! The team was professional, clean, and finished on time. Highly recommend!",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      city: "Guaynabo",
      text: "They transformed our bathroom completely. Great attention to detail and fair pricing. Will definitely use again.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      city: "Cataño",
      text: "Fast response and quality repairs. Fixed multiple issues in our home in just one visit. Very satisfied!",
      rating: 5,
    },
    {
      name: "José Rivera",
      city: "Toa Baja",
      text: "Professional painting service. They protected everything and left the house spotless. Beautiful results!",
      rating: 4,
    },
    {
      name: "Laura Díaz",
      city: "San Juan",
      text: "Custom carpentry work exceeded our expectations. Built exactly what we envisioned. True craftsmen!",
      rating: 5,
    },
    {
      name: "Pedro Sánchez",
      city: "Bayamón",
      text: "Reliable and honest. They showed up when they said they would and the price was exactly as quoted.",
      rating: 5,
    },
  ],

  gallery: [
    { id: 1, label: "Kitchen Before/After" },
    { id: 2, label: "Bathroom Renovation" },
    { id: 3, label: "Living Room Update" },
    { id: 4, label: "Exterior Painting" },
    { id: 5, label: "Custom Shelving" },
    { id: 6, label: "Floor Installation" },
    { id: 7, label: "Deck Construction" },
    { id: 8, label: "Cabinet Refinishing" },
  ],

  serviceAreas: [
    "Bayamón",
    "San Juan",
    "Guaynabo",
    "Cataño",
    "Toa Baja",
    "Toa Alta",
    "Dorado",
    "Vega Alta",
    "Naranjito",
    "Comerío",
  ],

  faqs: [
    {
      q: "Do you offer free estimates?",
      a: "Yes! We provide free, no-obligation estimates for all projects. Contact us to schedule a visit.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Absolutely. We are fully licensed and insured in Puerto Rico, giving you peace of mind with every project.",
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on scope. A bathroom renovation typically takes 1-2 weeks, while a full kitchen remodel may take 3-4 weeks. We'll provide a detailed timeline with your estimate.",
    },
    {
      q: "Do you provide materials or should I buy them?",
      a: "We can handle everything including materials, or work with materials you provide. We have relationships with local suppliers and can often get better prices.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve Bayamón and the greater San Juan metropolitan area, including Guaynabo, Cataño, Toa Baja, and surrounding municipalities.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash, checks, ATH Móvil, and major credit cards. Payment terms are discussed and agreed upon before starting any project.",
    },
    {
      q: "Do you offer warranties on your work?",
      a: "Yes, we stand behind our work with a satisfaction guarantee. Specific warranty terms depend on the type of project and materials used.",
    },
    {
      q: "Can you work with my existing contractor or designer?",
      a: "Of course! We're happy to collaborate with other professionals to bring your vision to life.",
    },
  ],

  finalCta: {
    headline: "Ready to Transform Your Home?",
    subheadline: "Get your free estimate today. No obligation, no pressure.",
  },

  footer: {
    tagline: "Quality Home Services in Puerto Rico",
    privacyNote:
      "We respect your privacy. Your information is never shared with third parties.",
  },
};

export type SiteConfig = typeof siteConfig;
