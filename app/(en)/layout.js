import '../globals.css'
import { fontClasses } from '../fonts'
import { siteMetadata } from '../lib/metadata'

// Root layout for the English site ("/en").
export const metadata = siteMetadata('en')

export default function EnglishLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={fontClasses}>
      <body>{children}</body>
    </html>
  )
}
