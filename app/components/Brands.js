import Image from 'next/image'
import { shared } from '../data/content'
import Reveal from './Reveal'

export default function Brands({ t }) {
  return (
    <section id="brands" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Our Brands</span>
          <h2 className="section__title">{t.brands.title}</h2>
          <p className="section__subtitle">{t.brands.subtitle}</p>
        </Reveal>

        <div className="brands__grid">
          {shared.brands.map((brand, i) => {
            const info = t.brands.items[brand.id]
            return (
              <Reveal as="article" key={brand.id} className="brand-card" delay={i * 120}>
                <span className="brand-card__bar" aria-hidden="true" />
                <div className="brand-card__logo">
                  <Image src={brand.logo} alt={info.name} width={160} height={90} style={{ objectFit: 'contain' }} />
                </div>
                <h3 className="brand-card__name">{info.name}</h3>
                <p className="brand-card__desc">{info.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
