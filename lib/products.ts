// Product data source. Following the "27+ products" pattern from the handbook:
// each product carries its own SEO keywords, category, spec table, and image paths.
// TODO: Replace the sample entries with your real product catalogue.

export type ProductCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // path under /public/icons
  heroImage: string; // path under /public/products
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  tagline: string;
  description: string;
  keywords: string[]; // SEO long-tail keywords this product page should rank for
  images: string[];
  features: string[];
  specs: Record<string, string>;
  downloads?: { label: string; href: string }[];
  relatedSlugs?: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "category-one",
    name: "TODO Category One",
    tagline: "TODO one-line category positioning",
    description: "TODO 2-3 sentence category description for SEO.",
    icon: "/icons/icon-category-one.png",
    heroImage: "/products/category-one-hero.jpg"
  },
  {
    slug: "category-two",
    name: "TODO Category Two",
    tagline: "TODO one-line category positioning",
    description: "TODO 2-3 sentence category description for SEO.",
    icon: "/icons/icon-category-two.png",
    heroImage: "/products/category-two-hero.jpg"
  }
];

export const products: Product[] = [
  {
    slug: "sample-product-1",
    categorySlug: "category-one",
    name: "TODO Product Name",
    tagline: "TODO short selling point",
    description:
      "TODO full product description, 2-4 paragraphs, written for both buyers and search engines.",
    keywords: ["TODO keyword 1", "TODO keyword 2"],
    images: ["/products/sample-product-1/1.jpg"],
    features: ["TODO feature 1", "TODO feature 2", "TODO feature 3"],
    specs: {
      "TODO Spec Name": "TODO Value"
    },
    downloads: [],
    relatedSlugs: []
  }
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
