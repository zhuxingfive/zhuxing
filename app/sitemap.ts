import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { productCategories, products } from "@/lib/products";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/product-category", "/about", "/gallery", "/blog", "/downloads", "/contact"].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date()
    })
  );

  const categoryRoutes = productCategories.map((c) => ({
    url: `${site.url}/product-category/${c.slug}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((p) => ({
    url: `${site.url}/product/${p.slug}`,
    lastModified: new Date()
  }));

  const postRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...postRoutes];
}
