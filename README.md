# zhuxing — B2B Independent Site (Scaffold)

Tech stack and module layout combine two references:

1. **Technical architecture** — from the internal handbook (Next.js 14 App
   Router, Vercel, Cloudflare R2, Resend, Namecheap, GitHub Private).
2. **Page/module layout** — from explo.at (Hero, Trust Pillars, Product
   Category grid, Product detail with Technical Details/Downloads tabs,
   Downloads Center, Gallery, Contact with intent-driven inquiry form).

## Status: SCAFFOLD — placeholder content only

Every brand-specific value (brand name, logo, products, contact info,
images, blog content) is marked `TODO` in the source. **Nothing here is
real business content.** Replace before going live:

- [`lib/site.ts`](lib/site.ts) — brand name, domain, contact info, address
- [`lib/products.ts`](lib/products.ts) — product categories and catalogue
- [`lib/downloads.ts`](lib/downloads.ts) — catalogue PDF / manuals / media kit
- [`lib/posts.ts`](lib/posts.ts) — buying-guide articles (2000+ words each)
- `public/` — logo, product images, gallery photos, downloadable PDFs
- `app/globals.css` — `--color-primary` and other brand colors

## Directory structure

```
app/                  Route pages (App Router)
  page.tsx              Home
  product-category/     Category listing + [slug] detail
  product/[slug]/        Product detail (specs, downloads, inquiry)
  gallery/               Image gallery
  downloads/             Manuals / firmware / media kit
  blog/                  Buying guides (SEO/GEO long-form content)
  contact/               Contact + inquiry form
  api/inquiry/            Inquiry submission endpoint (Resend + log backup)
  robots.ts / sitemap.ts  SEO infrastructure
components/           Reusable UI (Header, Footer, Hero, InquiryForm, etc.)
lib/
  site.ts               Global brand config — single source of truth
  products.ts           Product catalogue data
  schema.ts             JSON-LD structured data generators
  inquiry-intents.ts    Intent-driven inquiry form presets
  downloads.ts          Downloads center data
  posts.ts              Blog content data
public/
  llms.txt              GEO: AI search engine entry point
```

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` once the
sending domain's DKIM/SPF/DMARC records are verified.

## Deployment

Connect this repo to Vercel for "commit = deploy". Before going live:

1. Fill in all `TODO` values across `lib/` and `public/`.
2. Configure DNS (Namecheap) with DKIM / SPF / DMARC for Resend.
3. Set `RESEND_API_KEY` in Vercel project environment variables.
4. Run `npm run build` locally to confirm all static pages generate cleanly.
5. Submit the sitemap to Google Search Console and request indexing for new
   pages.
