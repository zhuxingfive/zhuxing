import Link from "next/link";
import { site } from "@/lib/site";
import { productCategories } from "@/lib/products";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          {site.brand}
        </Link>
        <nav className="main-nav">
          <div className="nav-dropdown">
            <span>{site.nav.products}</span>
            <div className="dropdown-menu">
              {productCategories.map((cat) => (
                <Link key={cat.slug} href={`/product-category/${cat.slug}`}>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/gallery">Gallery</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/blog">Resources</Link>
          <Link href="/contact" className="nav-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
