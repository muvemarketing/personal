# Matthew Willey — Personal Website (Next.js + Tailwind)

A fast, modern personal website built with Next.js 14 (App Router) and Tailwind CSS.

## Preview

Sections: Hero, About, Experience (timeline), Skills, Portfolio, Contact, Footer — with neon + Stripe-inspired animations and mesh gradients.

## Getting started

1. Ensure you have Node.js 18+ installed.
2. Extract this folder and run in your terminal:

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Customize

- **Public assets**
  - Replace `/public/images/profile.svg` with a real headshot (same filename) or update the path in `components/About.tsx`.
  - Replace `/public/images/portfolio-*.svg` with real screenshots.
  - Replace `/public/resume.pdf` with your actual résumé PDF.
- **Contact form**
  - `/app/api/contact/route.ts` currently returns success and logs the payload. Wire it to your email service, CRM, or Formspree.
  - The UI also provides a `mailto:` fallback – change to your email in `components/Contact.tsx` and `Footer.tsx`.
- **SEO**
  - Update `metadataBase` and URLs in `app/layout.tsx`. Replace `https://example.com` with your domain.
  - `public/robots.txt` and `public/sitemap.xml` include placeholders.
- **Brand**
  - Fine-tune colors in `tailwind.config.ts` and `app/globals.css` if you want different neon hues.
- **Deployment**
  - Works on Vercel out of the box: push to GitHub and import the repo at Vercel.

## Stack choices

- **Next.js + Tailwind** provides performance, flexibility, and future-proofing. The codebase mirrors the requested design language (neon, mesh gradients, subtle motions).
- If you prefer **Webflow**, this design can be re-authored there, but this repo gives you a production-grade baseline you fully control.

---

Built from the provided build spec.
