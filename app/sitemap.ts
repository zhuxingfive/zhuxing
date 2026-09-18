import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { productCategories, products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/product-category", "/about", "/gallery", "/downloads", "/contact"].map(
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

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
