import Reveal from './Reveal'

/**
 * "Our Partners" — a clean logo strip. The tiles are tasteful placeholders
 * (a storefront mark); replace them with real distributor logos when ready.
 */
export default function Partners({ t }) {
  const slots = Array.from({ length: t.partners.count }, (_, i) => i + 1)

  return (
    <section id="partners" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Our Partners</span>
          <h2 className="section__title">{t.partners.title}</h2>
          <p className="section__subtitle">{t.partners.subtitle}</p>
        </Reveal>

        <div className="partners__grid">
          {slots.map((n) => (
            <Reveal as="div" key={n} className="partner" delay={(n % 6) * 70}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9l1.5-4.5A1 1 0 0 1 5.5 4h13a1 1 0 0 1 .95.7L21 9M3 9v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9M3 9h18M8 20v-5h8v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Reveal>
          ))}
        </div>

        <p className="partners__note">{t.partners.note}</p>
      </div>
    </section>
  )
}
