import { LanguageSelector } from '../components/LanguageSelector';
import { Logo } from '../components/Logo';
import { href } from '../config/sections';
import { format } from '../i18n/config';
import { useI18n } from '../i18n/context';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: href('gallery'), label: t.nav.gallery },
    { href: href('pricing'), label: t.nav.pricing },
    { href: href('faq'), label: t.nav.faq },
    { href: href('contact'), label: t.footer.contact },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p className="muted">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.nav}>
          <ul role="list" className="footer__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSelector placement="up" />
      </div>
      <div className="container">
        <p className="footer__copyright">
          {format(t.footer.copyright, { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
