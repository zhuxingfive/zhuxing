"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { productCategories, getProductsByCategory } from "@/lib/products";

const VISIBLE = 4;

function CategoryCarousel({ categorySlug }: { categorySlug: string }) {
  const category = productCategories.find((c) => c.slug === categorySlug);
  const items = getProductsByCategory(categorySlug);
  const [start, setStart] = useState(0);

  if (!category || items.length === 0) return null;

  const canCarousel = items.length > VISIBLE;
  // Build the visible window, looping around when there are more than VISIBLE items.
  const visible = Array.from({ length: Math.min(VISIBLE, items.length) }, (_, i) => {
    return items[(start + i) % items.length];
  });

  const move = (dir: number) => {
    setStart((prev) => (prev + dir + items.length) % items.length);
  };

  return (
    <div className="featured-cat">
      <div className="featured-cat-head">
        <div>
          <h3>{category.name}</h3>
          <p>{category.tagline}</p>
        </div>
        <div className="featured-cat-actions">
          <Link href={`/product-category/${category.slug}`} className="featured-cat-viewall">
            View all &rarr;
          </Link>
          {canCarousel && (
            <div className="carousel-arrows">
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => move(-1)}
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Next products"
                onClick={() => move(1)}
              >
                &#8250;
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="featured-cat-grid">
        {visible.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="featured-product-card"
          >
            <div className="featured-product-image">
              <Image src={product.images[0]} alt={product.name} width={320} height={320} />
            </div>
            <h4>{product.model}</h4>
            <p>{product.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedCategories() {
  return (
    <section className="featured-categories">
      <div className="container">
        <h2 className="featured-title">Explore Our Product Range</h2>
        {productCategories.map((cat) => (
          <CategoryCarousel key={cat.slug} categorySlug={cat.slug} />
        ))}
      </div>
    </section>
  );
}
