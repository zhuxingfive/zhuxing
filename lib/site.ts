// Global site configuration — single source of truth for brand, contact, SEO.
// Company: Yueyang Zhuxing Technology Co., Ltd.
// NOTE: contact email/phone/WhatsApp are placeholders pending confirmation from the owner.

export const site = {
  brand: "Zhuxing Pyrotechnics",
  legalName: "Yueyang Zhuxing Technology Co., Ltd.",
  domain: "zhuxing.vercel.app",
  url: "https://zhuxing.vercel.app",
  tagline: "Pyrotechnic & Stage Effect Equipment Manufacturer",
  description:
    "Yueyang Zhuxing Technology is a China-based manufacturer of fireworks firing systems, electric igniters, mortar tubes, cold spark machines and gender-reveal effects for event and pyrotechnic professionals worldwide.",
  logo: "/logo.jpg",
  whatsapp: "+86 000 0000 0000", // TODO: confirm real WhatsApp number
  email: "sales@example.com", // TODO: confirm real sales email
  phone: "+86 000 0000 0000", // TODO: confirm real phone
  moq: "Contact us",
  address: {
    company: "Yueyang Zhuxing Technology Co., Ltd.",
    line1: "Yueyang City", // TODO: full street address
    city: "Yueyang",
    postalCode: "", // TODO
    country: "Hunan, China"
  },
  businessHours: "Mon - Fri: 9:00-18:00 (GMT+8)",
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
