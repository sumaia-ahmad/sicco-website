import { Tajawal, Readex_Pro } from 'next/font/google'

// Fonts are shared by both language layouts (and the 404 page).
// Tajawal: clean Arabic + Latin body text.
export const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
})

// Readex Pro: bold, wide display face for headings.
export const readex = Readex_Pro({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700'],
  variable: '--font-readex',
  display: 'swap',
})

export const fontClasses = `${tajawal.variable} ${readex.variable}`
