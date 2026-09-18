import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="hero-eyebrow">{site.tagline}</p>
        <h1>{site.description}</h1>
        <div className="hero-actions">
          <Link href="/product-category" className="btn btn-primary">
            View Our Catalogue
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
