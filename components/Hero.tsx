import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(115deg, rgba(11,18,32,0.92) 0%, rgba(11,18,32,0.72) 45%, rgba(11,18,32,0.45) 100%), url('/banners/hero.jpg')"
      }}
    >
      <div className="container hero-inner">
        <p className="hero-eyebrow">Pyrotechnic &amp; Stage Effect Equipment Manufacturer</p>
        <h1>Professional Firing Systems &amp; Stage Effect Equipment, Factory Direct</h1>
        <p className="hero-sub">
          Cold spark machines, firing systems, igniters, mortar tubes and event effects for
          distributors, production teams and display professionals.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
          <Link href="/product-category" className="btn btn-outline-light">
            Explore Products
          </Link>
        </div>
        <div className="hero-proof">
          <span>Factory Direct</span>
          <span className="dot" />
          <span>Wholesale Supply</span>
          <span className="dot" />
          <span>Technical Support</span>
        </div>
      </div>
    </section>
  );
}
