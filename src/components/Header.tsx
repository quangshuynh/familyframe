import { useEffect, useId, useRef, useState } from 'react';
import { href } from '../config/sections';
import { useI18n } from '../i18n/context';
import { CloseIcon, MenuIcon } from './icons';
import { LanguageSelector } from './LanguageSelector';
import { Logo } from './Logo';
import './Header.css';

const LINKS = ['gallery', 'services', 'pricing', 'process', 'faq'] as const;

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock scroll, close on Escape, close when resizing to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    document.documentElement.classList.add('is-locked');
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = () => desktop.matches && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onChange);
    return () => {
      document.documentElement.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}
    >
      <div className="site-header__bar">
        <a className="site-header__logo" href="#top" aria-label={t.nav.home} onClick={close}>
          <Logo />
        </a>

        <nav className="site-header__nav" aria-label={t.nav.primary}>
          <ul role="list">
            {LINKS.map((key) => (
              <li key={key}>
                <a href={href(key)}>{t.nav[key]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <LanguageSelector />
          <a className="button button--primary button--sm site-header__cta" href={href('contact')}>
            {t.nav.cta}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
            <span className="visually-hidden">{menuOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          </button>
        </div>
      </div>

      <div id={menuId} className="site-header__panel" hidden={!menuOpen}>
        <nav aria-label={t.nav.primary}>
          <ul role="list" className="site-header__panel-links">
            {LINKS.map((key) => (
              <li key={key}>
                <a href={href(key)} onClick={close}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__panel-lang">
          <p className="site-header__panel-label">{t.nav.language}</p>
          <LanguageSelector variant="list" onSelect={close} />
        </div>
        <a
          className="button button--primary site-header__panel-cta"
          href={href('contact')}
          onClick={close}
        >
          {t.hero.ctaPrimary}
        </a>
      </div>
    </header>
  );
}
