import { shared } from '../data/content'
import Reveal from './Reveal'
import ContactForm from './ContactForm'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" width="22" height="22">{children}</svg>
)
const icons = {
  address: <Icon><path {...stroke} d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle {...stroke} cx="12" cy="9.5" r="2.5" /></Icon>,
  hours: <Icon><circle {...stroke} cx="12" cy="12" r="9" /><path {...stroke} d="M12 7v5l3 2" /></Icon>,
  phone: <Icon><path {...stroke} d="M5 4h3.5l1.8 4.4-2.2 1.4a11 11 0 0 0 6.1 6.1l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4z" /></Icon>,
  fax: <Icon><path {...stroke} d="M7 9V3.5h10V9" /><rect {...stroke} x="3.5" y="9" width="17" height="8.5" rx="2" /><path {...stroke} d="M7 14.5h10V21H7z" /></Icon>,
  email: <Icon><rect {...stroke} x="3" y="5" width="18" height="14" rx="2" /><path {...stroke} d="M3.5 6.5L12 13l8.5-6.5" /></Icon>,
}

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
              <span className="contact__icon" aria-hidden="true">{icons.address}</span>
              <div>
                <span className="contact__label">{t.contact.addressLabel}</span>
                <span className="contact__value">{t.contact.address}</span>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">{icons.hours}</span>
              <div>
                <span className="contact__label">{t.contact.hoursLabel}</span>
                <span className="contact__value">{t.contact.hours}</span>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">{icons.phone}</span>
              <div>
                <span className="contact__label">{t.contact.phoneLabel}</span>
                <a className="contact__value" href={`tel:${shared.phoneHref}`} dir="ltr">{shared.phone}</a>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">{icons.fax}</span>
              <div>
                <span className="contact__label">{t.contact.faxLabel}</span>
                <span className="contact__value" dir="ltr">{shared.fax}</span>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon" aria-hidden="true">{icons.email}</span>
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
