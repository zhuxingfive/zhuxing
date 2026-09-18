import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCategory,
  getProductsByCategory,
  productCategories
} from "@/lib/products";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import TrustPillars from "@/components/TrustPillars";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description
  };
}

export default function ProductCategoryPage({
  params
}: {
  params: { slug: string };
}) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.slug);
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product-category" },
    { name: category.name, href: `/product-category/${category.slug}` }
  ];

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              breadcrumbItems.map((i) => ({ name: i.name, url: `${site.url}${i.href}` }))
            )
          )
        }}
      />
      <Breadcrumb items={breadcrumbItems} />
      <h1>{category.name}</h1>
      <p className="category-tagline">{category.tagline}</p>
      <p className="category-desc">{category.description}</p>

      <div className="product-grid">
        {categoryProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <TrustPillars />
    </div>
  );
}
