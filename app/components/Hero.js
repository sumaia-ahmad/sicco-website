'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { shared } from '../data/content'

const SLIDE_MS = 5000

// One showcase slide per brand: its signature product and a tint for the hero background.
const showcase = [
  { brand: 'super-white', image: '/images/products/product1.png', accent: '#1b84d3' },
  { brand: 'prince', image: '/images/products/product4.png', accent: '#d6457a' },
  { brand: 'fami', image: '/images/products/product5.png', accent: '#d9a300' },
]

export default function Hero({ t }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [warm, setWarm] = useState(false)
  const stageRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Fetch the other brands' images only after the page has finished loading,
  // so on slow connections they don't compete with the first product (the LCP).
  useEffect(() => {
    if (document.readyState === 'complete') {
      setWarm(true)
      return
    }
    const onLoad = () => setWarm(true)
    window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [])

  // Pause the autoplay while the tab is in the background.
  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  // Autoplay is driven by the progress bar's CSS animation (no per-frame
  // JavaScript): when the bar finishes filling, move to the next brand.
  const next = () => setActive((i) => (i + 1) % showcase.length)

  const onMove = (e) => {
    if (reduced || !stageRef.current) return
    const r = stageRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    stageRef.current.style.setProperty('--ry', `${x * 14}deg`)
    stageRef.current.style.setProperty('--rx', `${-y * 10}deg`)
  }
  const onLeave = () => {
    setPaused(false)
    stageRef.current?.style.setProperty('--ry', '0deg')
    stageRef.current?.style.setProperty('--rx', '0deg')
  }

  const current = showcase[active]
  const isAr = t.dir === 'rtl'
  let word = 0

  return (
    <section id="home" className="hero" style={{ '--accent': current.accent }}>
      {showcase.map((s, i) => (
        <span
          key={s.brand}
          className={`hero__tint hero__tint--${s.brand} ${i === active ? 'hero__tint--on' : ''}`}
          aria-hidden="true"
        />
      ))}

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge hero__intro" style={{ '--d': '0ms' }}>
            <span className="hero__badge-dot" aria-hidden="true" />
            {t.hero.badge}
          </span>
          <h1 className="hero__title">
            {t.hero.titleLines.map((line, li) => (
              <span key={line} className="hero__title-line">
                {li > 0 && ' '}
                {line.split(' ').map((w, wi) => (
                  <Fragment key={wi}>
                    {wi > 0 && ' '}
                    <span className="hero__word" style={{ '--i': word++ }}>{w}</span>
                  </Fragment>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero__subtitle hero__intro" style={{ '--d': '650ms' }}>{t.hero.subtitle}</p>

          <div className="hero__actions hero__intro" style={{ '--d': '800ms' }}>
            <a href="#products" className="btn btn--primary">
              {t.hero.ctaProducts}
              <svg className="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--outline">{t.hero.ctaContact}</a>
          </div>
        </div>

        <div
          className="showcase"
          role="region"
          aria-roledescription={isAr ? 'عرض العلامات' : 'brand showcase'}
          aria-label={t.brands.title}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={onLeave}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="showcase__stage" ref={stageRef} onMouseMove={onMove}>
            <span className="showcase__disc" aria-hidden="true" />
            {showcase.map((s, i) => (
              <div
                key={s.brand}
                className={`showcase__slide ${i === active ? 'showcase__slide--on' : ''}`}
                aria-hidden={i !== active}
              >
                {(i === 0 || warm || i === active) && (
                  <Image
                    src={s.image}
                    alt={`${t.brands.items[s.brand].name} — ${t.brands.items[s.brand].desc}`}
                    width={514}
                    height={600}
                    priority={i === 0}
                    sizes="(max-width: 760px) 70vw, 400px"
                    className="showcase__img"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="showcase__caption" aria-live={paused ? 'polite' : 'off'}>
            <Image
              key={current.brand}
              src={shared.brands.find((b) => b.id === current.brand).logo}
              alt={t.brands.items[current.brand].name}
              width={192}
              height={126}
              className="showcase__logo"
            />
            <p key={`d-${current.brand}`} className="showcase__desc">{t.brands.items[current.brand].desc}</p>
          </div>

          <div className="showcase__tabs">
            {showcase.map((s, i) => (
              <button
                key={s.brand}
                type="button"
                className={`showcase__tab ${i === active ? 'showcase__tab--on' : ''}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="showcase__tab-name">{t.brands.items[s.brand].name}</span>
                <span className="showcase__bar" aria-hidden="true">
                  {i === active && (
                    <span
                      className={`showcase__fill ${reduced ? '' : 'showcase__fill--run'}`}
                      style={{ '--slide-ms': `${SLIDE_MS}ms`, animationPlayState: paused || hidden ? 'paused' : 'running' }}
                      onAnimationEnd={next}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
