import Image from 'next/image'
import { shared } from '../data/content'
import Reveal from './Reveal'

export default function About({ t }) {
  const isAr = t.about.title === 'من نحن'

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__top">
          <Reveal className="about__text">
            <span className="eyebrow">About SICCO</span>
            <h2 className="section__title">{t.about.title}</h2>
            <h3 className="about__heading">{t.about.heading}</h3>
            <p className="about__body">{t.about.body}</p>
          </Reveal>

          <Reveal className="about__media" delay={120}>
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
        </div>

        <ol className="about__depts">
          {t.about.departments.map((dept, i) => (
            <Reveal as="li" key={dept.name} className="dept" delay={i * 140}>
              <span className="dept__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <strong className="dept__name">{dept.name}</strong>
              <span className="dept__desc">{dept.desc}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
