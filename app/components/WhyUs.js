import Reveal from './Reveal'

// Clean line icons (one per feature, in the same order as content.why.items).
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const icons = [
  // 1 — high quality (shield check)
  <svg key="q" viewBox="0 0 24 24" width="26" height="26"><path {...stroke} d="M12 3l7 3v5c0 4.6-3.1 7.8-7 9-3.9-1.2-7-4.4-7-9V6l7-3z" /><path {...stroke} d="M9 12l2 2 4-4" /></svg>,
  // 2 — customer trust (heart)
  <svg key="h" viewBox="0 0 24 24" width="26" height="26"><path {...stroke} d="M12 20.5S4.5 16 4.5 10.3A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7.5 2.3C19.5 16 12 20.5 12 20.5z" /></svg>,
  // 3 — competitive prices (tag)
  <svg key="p" viewBox="0 0 24 24" width="26" height="26"><path {...stroke} d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-6.6-6.6A2 2 0 0 1 3.4 12V5.4A2 2 0 0 1 5.4 3.4H12a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.2z" /><circle cx="7.8" cy="7.8" r="1.1" fill="currentColor" stroke="none" /></svg>,
  // 4 — fast delivery (truck)
  <svg key="d" viewBox="0 0 24 24" width="26" height="26"><path {...stroke} d="M3 7h10v8H3zM13 10h4l3 3v2h-7z" /><circle {...stroke} cx="7" cy="18" r="1.6" /><circle {...stroke} cx="17" cy="18" r="1.6" /></svg>,
  // 5 — support (headset)
  <svg key="s" viewBox="0 0 24 24" width="26" height="26"><path {...stroke} d="M5 13v-1a7 7 0 0 1 14 0v1" /><path {...stroke} d="M5 13h2.5v5H6a1 1 0 0 1-1-1zM19 13h-2.5v5H18a1 1 0 0 0 1-1z" /></svg>,
  // 6 — advanced formulas (flask)
  <svg key="f" viewBox="0 0 24 24" width="26" height="26"><path {...stroke} d="M9 3h6M10 3v6.5L5.4 17a1.8 1.8 0 0 0 1.5 2.8h10.2A1.8 1.8 0 0 0 18.6 17L14 9.5V3" /><path {...stroke} d="M7.5 14h9" /></svg>,
]

export default function WhyUs({ t }) {
  return (
    <section id="why" className="section why">
      <div className="container why__layout">
        <Reveal className="why__intro">
          <span className="eyebrow">Why SICCO</span>
          <h2 className="section__title">{t.why.title}</h2>
          <p className="section__subtitle">{t.why.subtitle}</p>
          <a href="#contact" className="btn btn--primary why__cta">{t.hero.ctaContact}</a>
        </Reveal>

        <ul className="why__list">
          {t.why.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="why__item" delay={i * 80}>
              <span className="why__icon" aria-hidden="true">{icons[i]}</span>
              <div>
                <h3 className="why__name">{item.title}</h3>
                <p className="why__desc">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
