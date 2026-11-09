import Counter from './Counter'
import Reveal from './Reveal'

/** Impact-numbers band shown right under the hero. */
export default function Stats({ t }) {
  return (
    <section className="stats-band" aria-label="SICCO in numbers">
      <div className="container stats-band__grid">
        {t.hero.stats.map((s, i) => (
          <Reveal as="div" key={s.label} className="stat-item" delay={i * 90}>
            <span className="stat-item__value"><Counter to={s.value} /></span>
            <span className="stat-item__label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
