import Image from 'next/image'
import { shared } from '../data/content'
import Reveal from './Reveal'

export default function About({ t }) {
  const isAr = t.about.title === 'من نحن'

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">About SICCO</span>
          <h2 className="section__title">{t.about.title}</h2>
        </Reveal>

        <div className="about__top">
          <Reveal className="about__media">
            <Image
              src={shared.factory}
              alt={isAr ? 'مقر الشركة السورية للصناعات الكيميائية' : 'SICCO headquarters'}
              width={700}
              height={700}
              className="about__photo"
            />
            <span className="about__media-badge">
              <strong>1991</strong>
              <small>{isAr ? 'عام التأسيس' : 'Established'}</small>
            </span>
          </Reveal>

          <Reveal className="about__text">
            <h3 className="about__heading">{t.about.heading}</h3>
            <p className="about__body">{t.about.body}</p>
          </Reveal>
        </div>

        <div className="about__depts">
          {t.about.departments.map((dept, i) => (
            <Reveal as="div" key={i} className="dept-card" delay={i * 90}>
              <span className="dept-card__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <strong className="dept-card__name">{dept.name}</strong>
              <span className="dept-card__desc">{dept.desc}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
