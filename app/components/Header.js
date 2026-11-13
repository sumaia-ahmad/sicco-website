'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { shared } from '../data/content'

// Links point to section ids on the same page (#home, #about, ...).
const navKeys = ['home', 'about', 'brands', 'products', 'why', 'contact']
const sectionIds = {
  home: 'home',
  about: 'about',
  brands: 'brands',
  products: 'products',
  why: 'why',
  contact: 'contact',
}

export default function Header({ t }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Shrink the header and add a shadow once the page scrolls a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <Image src={shared.logo} alt="SICCO" width={120} height={42} priority className="brand__logo" />
        </a>

        <nav className={open ? 'nav nav--open' : 'nav'}>
          {navKeys.map((key) => (
            <a key={key} href={`#${sectionIds[key]}`} onClick={() => setOpen(false)}>
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#contact" className="btn btn--primary order-btn" onClick={() => setOpen(false)}>
            {t.orderNow}
          </a>
          {/* The other language is its own page (/ ⇄ /en), so this is a real link. */}
          <a href={t.langHref} hrefLang={t.langCode} lang={t.langCode} className="lang-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            {t.langButton}
          </a>
          <button
            type="button"
            className={`menu-btn ${open ? 'menu-btn--open' : ''}`}
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
