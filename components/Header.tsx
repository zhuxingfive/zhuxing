import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { productCategories } from "@/lib/products";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Image src={site.logo} alt={site.brand} width={40} height={40} className="brand-logo" />
          <span>{site.brand}</span>
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
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/contact" className="nav-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
