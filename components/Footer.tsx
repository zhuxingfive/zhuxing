import Link from "next/link";
import { site } from "@/lib/site";
import { productCategories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>{site.brand}</h4>
          <p>{site.address.company}</p>
          <p>{site.address.line1}</p>
          <p>
            {site.address.city} {site.address.postalCode}
          </p>
          <p>{site.address.country}</p>
          <p>{site.businessHours}</p>
          <p>Tel: {site.phone}</p>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <div>
          <h5>Products</h5>
          <ul>
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/product-category/${cat.slug}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li>
              <Link href="/downloads">Downloads</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Sales &amp; Account</h5>
          <ul>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {site.address.company}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
