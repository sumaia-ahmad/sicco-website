'use client'

import { useState, useEffect } from 'react'
import { content } from './data/content'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Brands from './components/Brands'
import About from './components/About'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Certifications from './components/Certifications'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import WhatsAppFab from './components/WhatsAppFab'

export default function Home() {
  // The whole site is one page. `locale` drives which language object we read
  // and which direction the page flows. Default is Arabic (matches the server render).
  const [locale, setLocale] = useState('ar')
  const t = content[locale]

  // Keep the <html> lang/dir in sync with the chosen language so RTL/LTR and
  // screen readers behave correctly when the user toggles.
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = t.dir
  }, [locale, t.dir])

  const toggleLocale = () => setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'))

  return (
    <>
      <Header t={t} onToggleLocale={toggleLocale} />
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
