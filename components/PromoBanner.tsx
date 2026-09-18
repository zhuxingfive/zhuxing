import Link from "next/link";
import { promoBanner } from "@/lib/home";

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="container">
        <p className="promo-eyebrow">{promoBanner.eyebrow}</p>
        <h2>{promoBanner.title}</h2>
        <p className="promo-body">{promoBanner.body}</p>
        <Link href={promoBanner.cta.href} className="btn btn-primary">
          {promoBanner.cta.label}
        </Link>
      </div>
    </section>
  );
}
