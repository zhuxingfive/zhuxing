import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(10,12,20,0.85), rgba(10,12,20,0.45)), url('/banners/hero.jpg')"
      }}
    >
      <div className="container hero-inner">
        <p className="hero-eyebrow">{site.tagline}</p>
        <h1>Fireworks Firing Systems, Cold Spark Machines &amp; Display Equipment — Factory Direct</h1>
        <p className="hero-sub">{site.description}</p>
        <div className="hero-actions">
          <Link href="/product-category" className="btn btn-primary">
            View Our Catalogue
          </Link>
          <Link href="/contact" className="btn btn-outline-light">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
