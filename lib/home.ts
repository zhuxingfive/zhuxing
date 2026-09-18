// Homepage section content, structured to mirror the explo.at layout.
// TODO: replace all placeholder copy/images with real brand content.

export const promoBanner = {
  eyebrow: "Limited-Time Offer",
  title: "TODO: Seasonal Promotion Headline",
  body: "TODO: Describe your current promotion — e.g. a discount window, price lock, or bundle offer with start/end dates.",
  cta: { label: "Learn More", href: "/contact" }
};

export const customerNotice = {
  title: "TODO: Customer Information Notice",
  body: "TODO: Short product update / firmware / service notice. Link to details below.",
  link: { label: ">> Downloads section", href: "/downloads" }
};

// Alternating image/text showcase blocks — one per product category.
export const showcaseBlocks = [
  {
    eyebrow: "Category One",
    title: "TODO: Compelling headline for category one",
    body: "TODO: 1-2 sentence value proposition for this category.",
    cta: { label: "View Our Catalogue", href: "/product-category/category-one" },
    image: "/products/category-one-hero.jpg"
  },
  {
    eyebrow: "Category Two",
    title: "TODO: Compelling headline for category two",
    body: "TODO: 1-2 sentence value proposition for this category.",
    cta: { label: "View Our Catalogue", href: "/product-category/category-two" },
    image: "/products/category-two-hero.jpg"
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

// Upcoming trade shows / events.
export const upcomingEvents: EventItem[] = [
  {
    day: "TBD",
    month: "TODO",
    year: "2027",
    name: "TODO: Trade Show Name",
    detail: "TODO: dates and booth number",
    country: "TODO Country",
    city: "TODO City"
  }
];

// Social feed placeholders (replace with real embed or curated posts later).
export const socialPosts = [
  { image: "/social/placeholder-1.jpg", caption: "TODO: social post caption", date: "TODO" },
  { image: "/social/placeholder-2.jpg", caption: "TODO: social post caption", date: "TODO" },
  { image: "/social/placeholder-3.jpg", caption: "TODO: social post caption", date: "TODO" }
];
