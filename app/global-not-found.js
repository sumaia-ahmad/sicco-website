import './globals.css'
import { fontClasses } from './fonts'

// Shown for any URL that matches no page. With two root layouts (Arabic and
// English) there is no single layout to build a 404 from, so this page
// renders its own <html> (see experimental.globalNotFound in next.config).
export const metadata = {
  title: '404 | SICCO',
  robots: { index: false },
}

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={fontClasses}>
      <body>
        <main className="notfound">
          <span className="notfound__code">404</span>
          <h1 className="notfound__title">الصفحة غير موجودة</h1>
          <p className="notfound__text" lang="en" dir="ltr">Page not found</p>
          <div className="notfound__actions">
            <a href="/" className="btn btn--primary">العودة للرئيسية</a>
            <a href="/en" className="btn btn--outline" lang="en" dir="ltr">Back to home</a>
          </div>
        </main>
      </body>
    </html>
  )
}
