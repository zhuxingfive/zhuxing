import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProduct, getCategory, getRelatedProducts, products } from "@/lib/products";
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
    description: product.description.split("\n")[0],
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
  const related = getRelatedProducts(product);
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product-category" },
    ...(category
      ? [{ name: category.name, href: `/product-category/${category.slug}` }]
      : []),
    { name: product.model, href: `/product/${product.slug}` }
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
            <Image
              key={i}
              src={src}
              alt={`${product.name} - image ${i + 1}`}
              width={600}
              height={600}
              priority={i === 0}
            />
          ))}
        </div>

        <div className="product-info">
          <p className="product-model">Model: {product.model}</p>
          <h1>{product.name}</h1>
          <p className="product-tagline">{product.tagline}</p>

          <ul className="product-features">
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-primary add-to-quote">
            Add to Quote / Request Price
          </Link>
        </div>
      </div>

      <section className="product-tabs">
        <div className="tab-block">
          <h2>Product Description</h2>
          {product.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="tab-block">
          <h2>Technical Specifications</h2>
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

        <div className="tab-block">
          <h2>Applications</h2>
          <div className="app-tags">
            {product.applications.map((a) => (
              <span key={a} className="app-tag">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-products">
          <h2>Related Products</h2>
          <div className="product-grid">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/product/${rp.slug}`} className="product-card">
                <div className="product-card-image">
                  <Image src={rp.images[0]} alt={rp.name} width={400} height={400} />
                </div>
                <h4>{rp.model}</h4>
                <p>{rp.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="product-inquiry">
        <h2>Request a Quote for the {product.model}</h2>
        <InquiryForm defaultProduct={`${product.model} — ${product.name}`} />
      </section>
    </div>
  );
}
