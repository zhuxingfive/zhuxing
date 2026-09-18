import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";
import TldrBox from "@/components/TldrBox";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` }
  ];

  return (
    <div className="container blog-post">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.description,
              url: `${site.url}/blog/${post.slug}`,
              datePublished: post.datePublished,
              dateModified: post.dateModified
            })
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              breadcrumbItems.map((i) => ({ name: i.name, url: `${site.url}${i.href}` }))
            )
          )
        }}
      />
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faq)) }}
        />
      )}

      <Breadcrumb items={breadcrumbItems} />
      <h1>{post.title}</h1>

      <TldrBox points={post.tldr} />

      <article className="post-body">{post.content}</article>

      {post.faq && post.faq.length > 0 && (
        <section className="post-faq">
          <h2>FAQ</h2>
          {post.faq.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
