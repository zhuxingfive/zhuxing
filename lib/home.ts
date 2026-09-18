// Homepage section content for Zhuxing Pyrotechnics.

export const promoBanner = {
  eyebrow: "Factory Direct — OEM / ODM Welcome",
  title: "Wholesale Pyrotechnic & Stage Effect Equipment",
  body: "Buy direct from the manufacturer: cold spark machines, wireless firing systems, electric igniters, mortar tubes and gender-reveal effects. Competitive factory pricing, custom branding and worldwide shipping.",
  cta: { label: "Request a Quote", href: "/contact" }
};

export const customerNotice = {
  title: "Complete Firing Solutions Under One Roof",
  body: "From igniters and connect wire to firing systems, mortar tubes and racks — source a full professional display kit from a single factory.",
  link: { label: "Browse all products", href: "/product-category" }
};

export const showcaseBlocks = [
  {
    eyebrow: "Wedding & Stage Effects",
    title: "Smokeless Cold Spark Fountains for Indoor Celebrations",
    body: "Cold spark machines, wireless fountain firing systems and handheld sparklers that deliver bright, flameless effects safe to fire metres from your guests.",
    cta: { label: "View Cold Sparklers", href: "/product-category/wedding-cold-sparklers" },
    image: "/banners/gallery.jpg"
  },
  {
    eyebrow: "Gender Reveal",
    title: "Vivid Pink & Blue Smoke and Powder Effects",
    body: "Color smoke machines, refill smoke fluid and long-range powder cannons engineered for photogenic, foolproof reveal moments.",
    cta: { label: "View Gender Reveal", href: "/product-category/gender-reveal" },
    image: "/products/color-smoke-machine/color-smoke-machine-2.jpg"
  },
  {
    eyebrow: "Fireworks Display",
    title: "Firing Systems, Igniters, Mortar Tubes & Racks",
    body: "Professional-grade wireless firing systems, e-match igniters, fiberglass mortar tubes and aluminum racks for safe, synchronized large-scale displays.",
    cta: { label: "View Display Equipment", href: "/product-category/fireworks-display" },
    image: "/banners/display.jpg"
  }
];

export type EventItem = {
  day: string;
  month: string;
  year: string;
  name: string;
  detail: string;
  country: string;
  city: string;
};

export const upcomingEvents: EventItem[] = [];

export const socialPosts: { image: string; caption: string; date: string }[] = [];
