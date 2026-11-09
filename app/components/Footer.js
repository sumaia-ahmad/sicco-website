import Image from 'next/image'
import { shared } from '../data/content'

const navKeys = ['home', 'about', 'brands', 'products', 'why', 'contact']

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Image src={shared.logo} alt="SICCO" width={130} height={46} className="footer__logo" />
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <nav className="footer__col">
          <h4 className="footer__title">{t.footer.linksTitle}</h4>
          <div className="footer__nav">
            {navKeys.map((key) => (
              <a key={key} href={`#${key}`}>{t.nav[key]}</a>
            ))}
          </div>
        </nav>

        <div className="footer__col">
          <h4 className="footer__title">{t.footer.contactTitle}</h4>
          <ul className="footer__contact">
            <li>
              <a href={`tel:${shared.phoneHref}`} dir="ltr">{shared.phone}</a>
            </li>
            <li>
              <a href={`mailto:${shared.email}`} dir="ltr">{shared.email}</a>
            </li>
            <li>{t.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  )
}
