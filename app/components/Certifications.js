import Image from 'next/image'
import { shared } from '../data/content'
import Reveal from './Reveal'

export default function Certifications({ t }) {
  return (
    <section id="certs" className="section section--tint">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Quality &amp; Trust</span>
          <h2 className="section__title">{t.certs.title}</h2>
          <p className="section__subtitle">{t.certs.subtitle}</p>
        </Reveal>

        <div className="certs__grid">
          {t.certs.items.map((cert, i) => {
            const logo = shared.certLogos[i]
            return (
              <Reveal as="div" key={cert.code} className="cert" delay={(i % 4) * 100}>
                <span className={`cert__badge ${logo ? 'cert__badge--logo' : ''}`} aria-hidden="true">
                  {logo ? (
                    <Image src={logo} alt={cert.code} width={64} height={64} style={{ objectFit: 'contain' }} />
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="cert__code">{cert.code}</span>
                <span className="cert__label">{cert.label}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
