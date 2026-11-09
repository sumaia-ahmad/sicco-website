import Image from 'next/image'
import { shared } from '../data/content'

export default function Hero({ t }) {
  // Flagship packshot (Super White) carries the hero visual.
  const heroProduct = shared.products[0].image

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {t.hero.badge}
          </span>
          <h1 className="hero__title">
            {t.hero.titleLines.map((line, i) => (
              <span key={line} className="hero__title-line">
                {i > 0 && ' '}
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>

          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">
              {t.hero.ctaProducts}
              <svg className="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--outline">{t.hero.ctaContact}</a>
          </div>
        </div>

        <div className="hero__visual">
          <span className="hero__glow" aria-hidden="true" />
          <div className="hero__ring hero__ring--1" aria-hidden="true" />
          <div className="hero__ring hero__ring--2" aria-hidden="true" />
          <Image
            src={heroProduct}
            alt="Super White"
            width={514}
            height={600}
            priority
            className="hero__product"
          />

          {/* floating premium cards */}
          <div className="hero__float hero__float--top">
            <span className="hero__float-badge" aria-hidden="true">✦</span>
            <div>
              <strong>ISO 9001</strong>
              <small>{t.about.title === 'من نحن' ? 'جودة معتمدة' : 'Certified quality'}</small>
            </div>
          </div>
          <div className="hero__float hero__float--bottom">
            <strong>+30</strong>
            <small>{t.about.title === 'من نحن' ? 'سنة خبرة' : 'years'}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
