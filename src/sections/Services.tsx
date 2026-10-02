import { SECTION_IDS } from '../config/sections';
import { useI18n } from '../i18n/context';
import './Services.css';

export function Services() {
  const { t } = useI18n();
  return (
    <section
      id={SECTION_IDS.services}
      className="section services"
      aria-labelledby="services-title"
    >
      <div className="container services__grid">
        <header className="section-head services__head" data-reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 id="services-title" className="section-title">
            {t.services.title}
          </h2>
          <p className="lead">{t.services.lead}</p>
        </header>

        <ol role="list" className="services__list">
          {t.services.items.map((item, index) => (
            <li key={index} className="services__item" data-reveal>
              <span className="services__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="services__body">
                <h3 className="services__title">{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
