// SEO metadata for each language. Each page declares the other as its
// alternate (hreflang), so Google indexes the Arabic and English pages
// separately and shows the right one to each visitor.

const alternates = {
  ar: { canonical: '/', languages: { ar: '/', en: '/en', 'x-default': '/' } },
  en: { canonical: '/en', languages: { ar: '/', en: '/en', 'x-default': '/' } },
}

const copy = {
  ar: {
    title: 'SICCO | الشركة السورية للصناعات الكيميائية والمنظفات',
    description:
      'SICCO — الشركة السورية للصناعات الكيميائية والمنظفات. رائدون في صناعة المنظفات عالية الجودة منذ أكثر من 30 عاماً. علاماتنا: Super White و Prince و Fami.',
    ogDescription: 'رائدون في صناعة المنظفات عالية الجودة منذ أكثر من 30 عاماً.',
    ogLocale: 'ar_SY',
  },
  en: {
    title: 'SICCO | Syrian Company for Chemical Industries & Detergents',
    description:
      'SICCO — Syrian Company for Chemical Industries & Detergents. Leaders in high-quality detergent manufacturing for over 30 years. Our brands: Super White, Prince and Fami.',
    ogDescription: 'Leaders in high-quality detergent manufacturing for over 30 years.',
    ogLocale: 'en_US',
  },
}

export function siteMetadata(locale) {
  const c = copy[locale]
  return {
    metadataBase: new URL('https://sicco-sy.com'),
    title: c.title,
    description: c.description,
    keywords: ['SICCO', 'منظفات', 'سوريا', 'Super White', 'Prince', 'Fami', 'detergents', 'Syria'],
    alternates: alternates[locale],
    openGraph: {
      title: c.title,
      description: c.ogDescription,
      type: 'website',
      locale: c.ogLocale,
      url: alternates[locale].canonical,
      images: ['/images/brand-banner.jpg'],
    },
  }
}
