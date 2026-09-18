// Structured data (JSON-LD) generators.
// Per the handbook: "the website's digital ID card" — covers Organization,
// Product, Article (BreadcrumbList + Speakable), and FAQ schema.

import { site } from "./site";
import type { Product } from "./products";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    sameAs: Object.values(site.social).filter(Boolean)
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${site.url}${img}`),
    brand: {
      "@type": "Brand",
      name: site.brand
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: `${site.url}/product/${product.slug}`
    }
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: params.image ? [params.image] : undefined,
    publisher: {
      "@type": "Organization",
      name: site.brand,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}${site.logo}`
      }
    },
    // Speakable markup for voice search (Google Assistant), per handbook 3.2.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".tldr-summary", "h1"]
    }
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
