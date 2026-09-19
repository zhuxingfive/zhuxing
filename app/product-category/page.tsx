import Link from "next/link";
import Image from "next/image";
import { productCategories, getProductsByCategory } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";
import TrustPillars from "@/components/TrustPillars";

export const metadata = {
  title: "Products",
  description:
    "Browse Zhuxing Pyrotechnics product categories: wedding cold sparklers, gender reveal effects and professional fireworks display equipment."
};

export default function ProductCategoryIndexPage() {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/product-category" }
        ]}
      />
      <h1>Our Product Range</h1>
      <p className="category-desc">
        Choose a category to see all models. Every product ships factory-direct with wholesale pricing.
      </p>
      <div className="category-grid">
        {productCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/product-category/${cat.slug}`}
            className="category-card"
          >
            <div className="category-card-image">
              <Image src={cat.heroImage} alt={cat.name} width={640} height={360} />
            </div>
            <h3>{cat.name}</h3>
            <p>{cat.tagline}</p>
            <span className="link-arrow">
              {getProductsByCategory(cat.slug).length} products &rarr;
            </span>
          </Link>
        ))}
      </div>
      <TrustPillars />
    </div>
  );
}
