import '../globals.css'
import { fontClasses } from '../fonts'
import { siteMetadata } from '../lib/metadata'

// Root layout for the Arabic site ("/"). The <html> tag is rendered on the
// server with lang/dir already set, so no JavaScript is needed for direction.
export const metadata = siteMetadata('ar')

export default function ArabicLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={fontClasses}>
      <body>{children}</body>
    </html>
  )
}
