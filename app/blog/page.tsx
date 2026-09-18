import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blogs — Buying Guides & Industry Insights",
  description:
    "Expert guides on cold spark machines, fireworks firing systems, gender reveal effects and factory-direct sourcing from Zhuxing Pyrotechnics."
};

export default function BlogIndexPage() {
  return (
    <div className="container blog-index">
      <h1>Blogs</h1>
      <p className="category-desc">
        Buying guides, technical explainers and sourcing advice for event professionals, display
        companies and resellers — written by a pyrotechnic equipment manufacturer.
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-image">
              <Image src={post.cover} alt={post.title} width={640} height={360} />
            </div>
            <div className="blog-card-body">
              <span className="blog-tag">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <span className="blog-meta">{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
