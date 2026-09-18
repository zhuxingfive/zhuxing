import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Resources & Buying Guides"
};

export default function BlogIndexPage() {
  return (
    <div className="container">
      <h1>Resources &amp; Buying Guides</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
