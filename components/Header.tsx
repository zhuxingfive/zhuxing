"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { productCategories } from "@/lib/products";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
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
            Get a Quote
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-toggle-bar ${open ? "is-open-1" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "is-open-2" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "is-open-3" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          <span className="mobile-nav-label">Products</span>
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/product-category/${cat.slug}`}
              className="mobile-nav-sub"
              onClick={() => setOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Link href="/product-category" onClick={() => setOpen(false)}>
            All Products
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blogs
          </Link>
          <Link href="/downloads" onClick={() => setOpen(false)}>
            Downloads
          </Link>
          <Link href="/contact" className="btn btn-primary mobile-nav-cta" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
