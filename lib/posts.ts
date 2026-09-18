// Blog / buying-guide content matrix.
// Per the handbook (3.1): each article should exceed 2000 words, cover
// long-tail keywords, and include a TL;DR summary box for GEO (section 3.2).
// TODO: Replace with real long-form buying guides once niche/keywords are set.

export type Post = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  tldr: string[]; // bullet-point summary for the TL;DR box (AI search extraction)
  coverImage: string;
  content: string; // markdown or plain text body
  faq?: { question: string; answer: string }[];
};

export const posts: Post[] = [
  {
    slug: "sample-buying-guide",
    title: "TODO: [Product] Buying Guide (Year)",
    description: "TODO 150-char meta description for this guide.",
    datePublished: "2026-01-01",
    tldr: [
      "TODO key takeaway 1",
      "TODO key takeaway 2",
      "TODO key takeaway 3"
    ],
    coverImage: "/blog/sample-buying-guide.jpg",
    content: "TODO: full 2000+ word article body goes here.",
    faq: [
      { question: "TODO question 1?", answer: "TODO answer 1." }
    ]
  }
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
