import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ArrowIcon } from '../components/icons';
import { href } from '../config/sections';
import { layout } from '../data/restorations';
import { useI18n } from '../i18n/context';
import './Hero.css';

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="display hero__title">
            {t.hero.title}
          </h1>
          <p className="lead hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={href('contact')}>
              {t.hero.ctaPrimary}
              <ArrowIcon />
            </a>
            <a className="button button--ghost" href={href('gallery')}>
              {t.hero.ctaSecondary}
            </a>
          </div>
          <ul role="list" className="hero__chips" aria-label={t.hero.chipsLabel}>
            {t.hero.chips.map((chip) => (
              <li key={chip} className="pill">
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero__media">
          <BeforeAfterSlider
            item={layout.hero}
            sizes="(min-width: 1024px) 58vw, 100vw"
            initial={44}
            priority
            hint
            aspectRatio="4 / 3"
          />
          <figcaption className="hero__caption">{t.hero.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
