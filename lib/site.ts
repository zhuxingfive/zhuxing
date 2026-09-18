// Global site configuration.
// TODO: Replace ALL placeholder values below with real brand data once provided.
// This mirrors the lib/site.ts pattern described in the technical handbook:
// change brand / contact / SEO defaults in ONE place only.

export const site = {
  brand: "YOUR BRAND NAME", // TODO
  domain: "example.com", // TODO
  url: "https://www.example.com", // TODO
  tagline: "YOUR ONE-LINE POSITIONING STATEMENT", // TODO, e.g. "Spectacular Reliability"
  description:
    "TODO: 150-160 character meta description covering what you make, for whom, and your key differentiator.",
  logo: "/logo.svg", // TODO
  whatsapp: "+00 000 0000 0000", // TODO
  email: "sales@example.com", // TODO
  phone: "+00 000 0000 0000", // TODO
  moq: "TBD", // TODO, e.g. "50 pcs"
  address: {
    company: "TODO Company Legal Name",
    line1: "TODO Street Address",
    city: "TODO City",
    postalCode: "TODO",
    country: "TODO Country"
  },
  businessHours: "Mon - Fri: 9:00-18:00 (TODO adjust to your timezone)",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: ""
  },
  nav: {
    products: "Products",
    company: "Company",
    resources: "Resources"
  }
} as const;

export type Site = typeof site;
