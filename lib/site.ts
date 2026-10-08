// Global site configuration — single source of truth for brand, contact, SEO.
// Company: Yueyang Zhuxing Technology Co., Ltd.
// Canonical host is www; the apex domain 308-redirects to it at the edge.

export const site = {
  brand: "Zhuxing Pyrotechnics",
  legalName: "Yueyang Zhuxing Technology Co., Ltd.",
  domain: "www.yueyangzhuxing.com",
  url: "https://www.yueyangzhuxing.com",
  tagline: "Pyrotechnic & Stage Effect Equipment Manufacturer",
  description:
    "Yueyang Zhuxing Technology is a China-based manufacturer of fireworks firing systems, electric igniters, mortar tubes, cold spark machines and gender-reveal effects for event and pyrotechnic professionals worldwide.",
  logo: "/logo.jpg",
  whatsapp: "+86 15386488523",
  email: "five@yueyangzhuxing.com",
  phone: "+86 15386488523",
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
