import { content } from '../data/content'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import Brands from './Brands'
import About from './About'
import Products from './Products'
import WhyUs from './WhyUs'
import Certifications from './Certifications'
import Partners from './Partners'
import Contact from './Contact'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import WhatsAppFab from './WhatsAppFab'

// The whole one-page site for one language. This is a server component:
// it is rendered to HTML at build time, and only the interactive pieces
// (menu, product filter, contact form, counters, reveals) ship JavaScript.
export default function SitePage({ locale }) {
  const t = content[locale]

  return (
    <>
      <Header t={t} />
      <main>
        <Hero t={t} />
        <Stats t={t} />
        <Brands t={t} />
        <About t={t} />
        <Products t={t} />
        <WhyUs t={t} />
        <Certifications t={t} />
        <Partners t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppFab />
      <ScrollTop />
    </>
  )
}
