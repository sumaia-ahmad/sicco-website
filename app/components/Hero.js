import Image from 'next/image'
import { shared } from '../data/content'

export default function Hero({ t }) {
  const isAr = t.dir === 'rtl'

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
          {/* Brand banner: most of the product range next to the SICCO logo. */}
          <Image
            src={shared.brandBanner}
            alt={isAr ? 'منتجات SICCO بجانب شعار الشركة' : 'SICCO products next to the company logo'}
            width={2200}
            height={1333}
            priority
            // Rendered ~92% of the screen width on phones/tablets, ~560px on desktop.
            sizes="(max-width: 1000px) 92vw, 560px"
            className="hero__banner"
          />

          {/* floating premium cards — pinned to the banner's left corners so
              they never cover the SICCO logo on its right side */}
          <div className="hero__float hero__float--top">
            <span className="hero__float-badge" aria-hidden="true">✦</span>
            <div>
              <strong>ISO 9001</strong>
              <small>{isAr ? 'جودة معتمدة' : 'Certified quality'}</small>
            </div>
          </div>
          <div className="hero__float hero__float--bottom">
            <strong>+30</strong>
            <small>{isAr ? 'سنة خبرة' : 'years'}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
