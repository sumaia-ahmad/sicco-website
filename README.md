# SICCO — Company Website

A modern, fully bilingual (Arabic RTL ⇄ English LTR) marketing website for **SICCO — the Syrian Company for Chemical Industries & Detergents**, rebuilt from WordPress into a fast, static **Next.js** application.

The site presents the company's brands, products, production divisions, quality certifications and contact channels in a clean, editorial design that works on every screen size.

---

## ✨ Features

- **Bilingual, two real pages** — Arabic at `/` (RTL) and English at `/en` (LTR), both pre-rendered and linked with `hreflang` so Google indexes each language.
- **Editorial, responsive design** — a split hero with an auto-rotating brand showcase (pauses on hover/focus, respects reduced motion), a soft mesh-gradient background, and a consistent card system.
- **Scroll reveals & animated counters** — content fades in on scroll; stats count up when they enter view.
- **Product filtering** — browse products by brand (Super White / Prince / Fami).
- **Real credibility** — company photo, and real accreditation logos (SGS ISO 9001, SNS).
- **Working contact** — a form that sends via **WhatsApp** or **email** (no backend needed) plus a floating WhatsApp button and an embedded map.
- **SEO-ready** — per-language metadata, canonical + hreflang tags, Open Graph, favicon and a 404 page.
- **Lighthouse** — 100 for Accessibility, Best Practices and SEO; Performance ~99 on desktop and ~87–90 on throttled mobile.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router) + React
- JavaScript (no TypeScript)
- `next/font` for self-hosted fonts (**Cairo** for headings, **Tajawal** for body)
- `next/image` for optimized images
- Plain CSS with a custom design-token system (no UI framework)
- Playwright for unit and end-to-end tests

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
├─ (ar)/layout.js       # Arabic root layout  → <html lang="ar" dir="rtl">, page "/"
├─ (ar)/page.js
├─ (en)/layout.js       # English root layout → <html lang="en" dir="ltr">, page "/en"
├─ (en)/en/page.js
├─ global-not-found.js  # bilingual 404 for unknown URLs
├─ fonts.js             # Readex Pro (headings) + Tajawal (body)
├─ globals.css          # design tokens + all component styles
├─ icon.png             # favicon
├─ data/
│  └─ content.js        # ALL site text (ar/en) + shared data — edit here
├─ lib/
│  ├─ metadata.js       # SEO title/description, hreflang alternates per language
│  └─ contactLinks.js   # builds WhatsApp / email links (unit-tested)
└─ components/          # SitePage (server) + sections; only interactive parts
                        # (menu, product filter, form, counters) ship JavaScript
public/images/          # logo, product packshots, factory photo, cert logos
tests/                  # Playwright unit + end-to-end tests
```

## 🧪 Testing

Automated tests use [Playwright](https://playwright.dev/) and run against the real
production build in Google Chrome (the locally installed Chrome — no extra browser download).

```bash
npm test              # builds the site, starts it on port 3100, runs all tests
npm run test:report   # opens the HTML report of the last run
```

**24 tests** in two files:

| File | Type | What it checks |
|------|------|----------------|
| `tests/contact-links.spec.js` | Unit | WhatsApp & email links are built correctly (Arabic text, new lines and symbols are URL-encoded) |
| `tests/site.spec.js` | End-to-end | Page loads with no console errors · starts in Arabic/RTL · hero image loads · language button switches `/` ⇄ `/en` · English page is fully server-rendered · hreflang tags present · unknown URLs return a 404 · each brand filter shows only its products · every header/footer link reaches an existing section · contact form builds the right WhatsApp message · empty form is blocked · phone/fax/email shown · mobile: no horizontal scroll and the menu opens/closes |

Expected values are read from `app/data/content.js`, so the tests keep working when the content changes.

---

## ✏️ Editing content

All copy and data live in **`app/data/content.js`**, keyed by language (`ar` / `en`).
Change text, phone numbers, products or stats there — the components never need editing.

### Placeholders to replace before going live
- `shared.whatsapp` — the real company WhatsApp number.
- The "happy clients" figure in `hero.stats`.
- Partner logos in `public/images/` (the Partners section currently uses placeholder tiles).

---

Built with Next.js · Design & development by Sumaia Ahmad.
