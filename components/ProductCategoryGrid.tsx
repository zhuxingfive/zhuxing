import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/lib/products";

export default function ProductCategoryGrid() {
  return (
    <section className="category-grid-section">
      <div className="container">
        <h2>Our Product Range</h2>
        <div className="category-grid">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/product-category/${cat.slug}`}
              className="category-card"
            >
              <div className="category-card-image">
                <Image
                  src={cat.heroImage}
                  alt={cat.name}
                  width={640}
                  height={360}
                />
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.tagline}</p>
              <span className="link-arrow">View Catalogue &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
