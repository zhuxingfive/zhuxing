import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/Breadcrumb";

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
    description: post.description,
    keywords: post.keywords
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blog" },
    { name: post.category, href: `/blog/${post.slug}` }
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
              dateModified: post.dateModified,
              image: `${site.url}${post.cover}`
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faq)) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <article className="post-article">
        <span className="blog-tag">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="post-meta">
          {new Date(post.datePublished).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}{" "}
          · {post.readingTime}
        </p>

        <div className="post-cover">
          <Image src={post.cover} alt={post.title} width={1200} height={600} priority />
        </div>

        <div className="tldr-summary">
          <p className="tldr-label">TL;DR</p>
          <ul>
            {post.tldr.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="post-body">
          {post.body.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="post-faq">
          <h2>Frequently Asked Questions</h2>
          {post.faq.map((item) => (
            <div key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>

        <div className="post-cta">
          <p>{post.cta}</p>
          <Link href="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>
      </article>
    </div>
  );
}
