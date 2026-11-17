import { Tajawal, Readex_Pro } from 'next/font/google'

// Fonts are shared by both language layouts (and the 404 page).
// Tajawal: clean Arabic + Latin body text.
export const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  // 500 is unused (fewer weights = fewer font files competing with the hero image).
  weight: ['400', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
  // Note: preload:false here raised the mobile score ~2 points but caused a
  // visible text jump on load (CLS 0 -> 0.045), so it stays preloaded.
})

// Readex Pro: bold, wide display face for headings.
export const readex = Readex_Pro({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700'],
  variable: '--font-readex',
  display: 'swap',
})

export const fontClasses = `${tajawal.variable} ${readex.variable}`
