import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getProduct, getCategory, products } from "@/lib/products";
import { site } from "@/lib/site";
import { productSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import InquiryForm from "@/components/InquiryForm";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    keywords: product.keywords
  };
}

export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product-category" },
    ...(category
      ? [{ name: category.name, href: `/product-category/${category.slug}` }]
      : []),
    { name: product.name, href: `/product/${product.slug}` }
  ];

  return (
    <div className="container product-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product)) }}
      />
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

      <div className="product-detail-grid">
        <div className="product-gallery">
          {product.images.map((src, i) => (
            <Image key={i} src={src} alt={`${product.name} ${i + 1}`} width={600} height={600} />
          ))}
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-tagline">{product.tagline}</p>

          <ul className="product-features">
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <p className="product-description">{product.description}</p>
        </div>
      </div>

      <section className="product-tabs">
        <div className="tab-block">
          <h2>Technical Details</h2>
          <table className="specs-table">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {product.downloads && product.downloads.length > 0 && (
          <div className="tab-block">
            <h2>Downloads</h2>
            <ul>
              {product.downloads.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer">
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="product-inquiry">
        <h2>Interested in this product?</h2>
        <InquiryForm defaultProduct={product.name} />
      </section>
    </div>
  );
}
