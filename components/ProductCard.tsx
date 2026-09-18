import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div className="product-card-image">
        <Image
          src={product.images[0] ?? "/products/placeholder.jpg"}
          alt={product.name}
          width={400}
          height={400}
        />
      </div>
      <h4>{product.model}</h4>
      <p>{product.tagline}</p>
      <span className="link-arrow">View details &amp; quote &rarr;</span>
    </Link>
  );
}
