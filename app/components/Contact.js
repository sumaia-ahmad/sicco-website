import { shared } from '../data/content'
import Reveal from './Reveal'
import ContactForm from './ContactForm'

export default function Contact({ t }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="section__subtitle">{t.contact.subtitle}</p>
        </Reveal>

        <div className="contact__grid">
          {/* Company info */}
          <Reveal className="contact__info">
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">📍</span>
              <div>
                <span className="contact__label">{t.contact.addressLabel}</span>
                <span className="contact__value">{t.contact.address}</span>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">🕒</span>
              <div>
                <span className="contact__label">{t.contact.hoursLabel}</span>
                <span className="contact__value">{t.contact.hours}</span>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">📞</span>
              <div>
                <span className="contact__label">{t.contact.phoneLabel}</span>
                <a className="contact__value" href={`tel:${shared.phoneHref}`} dir="ltr">{shared.phone}</a>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">📠</span>
              <div>
                <span className="contact__label">{t.contact.faxLabel}</span>
                <span className="contact__value" dir="ltr">{shared.fax}</span>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">✉️</span>
              <div>
                <span className="contact__label">{t.contact.emailLabel}</span>
                <a className="contact__value" href={`mailto:${shared.email}`} dir="ltr">{shared.email}</a>
              </div>
            </div>
          </Reveal>

          {/*
            Working contact form. To make it send real emails, create a free
            form on https://formspree.io and paste your endpoint into `action`
            (replace YOUR_ID). No backend/server needed.
          */}
          <Reveal delay={120}>
            <ContactForm t={t} />
          </Reveal>
        </div>

        <Reveal className="contact__map">
          <span className="contact__map-label">{t.contact.mapLabel}</span>
          <iframe
            title={t.contact.mapLabel}
            src={`https://www.google.com/maps?q=${encodeURIComponent(shared.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}
