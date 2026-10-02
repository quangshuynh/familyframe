import { useI18n } from '../i18n/context';
import './Trust.css';

export function Trust() {
  const { t } = useI18n();
  return (
    <section className="section trust" aria-labelledby="trust-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{t.trust.eyebrow}</p>
          <h2 id="trust-title" className="section-title">
            {t.trust.title}
          </h2>
        </header>
        <ul role="list" className="trust__list">
          {t.trust.items.map((item) => (
            <li key={item.title} className="trust__item" data-reveal>
              <h3 className="trust__title">{item.title}</h3>
              <p className="muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
