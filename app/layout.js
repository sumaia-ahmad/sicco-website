import { Tajawal, Readex_Pro } from 'next/font/google'
import './globals.css'

// Tajawal: a clean Arabic + Latin font for body text. Self-hosted via next/font.
const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
})

// Readex Pro: a bold, wide display face used for headings — gives the brand a
// strong, confident presence next to the body font.
const readex = Readex_Pro({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700'],
  variable: '--font-readex',
  display: 'swap',
})

// SEO metadata. Arabic is the default language, so the base title/description
// are Arabic. Open Graph tags make the link look good when shared on social.
export const metadata = {
  metadataBase: new URL('https://sicco-sy.com'),
  title: 'SICCO | الشركة السورية للصناعات الكيميائية والمنظفات',
  description:
    'SICCO — الشركة السورية للصناعات الكيميائية والمنظفات. رائدون في صناعة المنظفات عالية الجودة منذ أكثر من 30 عاماً. علاماتنا: Super White و Prince و Fami.',
  keywords: ['SICCO', 'منظفات', 'سوريا', 'Super White', 'Prince', 'Fami', 'detergents', 'Syria'],
  openGraph: {
    title: 'SICCO | الشركة السورية للصناعات الكيميائية والمنظفات',
    description: 'رائدون في صناعة المنظفات عالية الجودة منذ أكثر من 30 عاماً.',
    type: 'website',
    locale: 'ar_SY',
    images: ['/images/og.jpg'],
  },
}

export default function RootLayout({ children }) {
  // lang/dir default to Arabic (RTL). The language toggle updates these on the
  // client; the server render stays Arabic so search engines index Arabic.
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${readex.variable}`}>
      <body>{children}</body>
    </html>
  )
}
