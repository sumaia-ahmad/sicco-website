# SICCO — Company Website

A modern, fully bilingual (Arabic RTL ⇄ English LTR) marketing website for **SICCO — the Syrian Company for Chemical Industries & Detergents**, rebuilt from WordPress into a fast, static **Next.js** application.

The site presents the company's brands, products, production divisions, quality certifications and contact channels in a clean, editorial design that works on every screen size.

---

## ✨ Features

- **Bilingual, one toggle** — the whole page flips between Arabic (RTL) and English (LTR), text and layout direction included.
- **Editorial, responsive design** — a split hero with the flagship product, a soft mesh-gradient background, and a consistent card system.
- **Scroll reveals & animated counters** — content fades in on scroll; stats count up when they enter view.
- **Product filtering** — browse products by brand (Super White / Prince / Fami).
- **Real credibility** — company photo, and real accreditation logos (SGS ISO 9001, SNS).
- **Working contact** — a form that sends via **WhatsApp** or **email** (no backend needed) plus a floating WhatsApp button and an embedded map.
- **SEO-ready** — metadata, Open Graph tags and a favicon.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + React
- JavaScript (no TypeScript)
- `next/font` for self-hosted fonts (**Cairo** for headings, **Tajawal** for body)
- `next/image` for optimized images
- Plain CSS with a custom design-token system (no UI framework)

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run the dev server (http://localhost:3000)
npm run dev

# production build
npm run build && npm start
```

---

## 📁 Project Structure

```
app/
├─ layout.js            # <html> shell, fonts, SEO metadata
├─ page.js              # single-page composition + language state
├─ globals.css          # design tokens + all component styles
├─ icon.png             # favicon
├─ data/
│  └─ content.js        # ALL site text (ar/en) + shared data — edit here
└─ components/          # Header, Hero, Stats, Brands, About, Products,
                        # WhyUs, Certifications, Partners, Contact, Footer, …
public/images/          # logo, product packshots, factory photo, cert logos
```

## ✏️ Editing content

All copy and data live in **`app/data/content.js`**, keyed by language (`ar` / `en`).
Change text, phone numbers, products or stats there — the components never need editing.

### Placeholders to replace before going live
- `shared.whatsapp` — the real company WhatsApp number.
- The "happy clients" figure in `hero.stats`.
- Partner logos in `public/images/` (the Partners section currently uses placeholder tiles).

---

Built with Next.js · Design & development by Sumaia Ahmad.
