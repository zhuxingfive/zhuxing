import Link from "next/link";
import { productCategories } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";
import TrustPillars from "@/components/TrustPillars";

export const metadata = {
  title: "Products"
};

export default function ProductCategoryIndexPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Products", href: "/product-category" }]} />
      <h1>All Product Categories</h1>
      <div className="category-grid">
        {productCategories.map((cat) => (
          <Link key={cat.slug} href={`/product-category/${cat.slug}`} className="category-card">
            <h3>{cat.name}</h3>
            <p>{cat.tagline}</p>
          </Link>
        ))}
      </div>
      <TrustPillars />
    </div>
  );
}
