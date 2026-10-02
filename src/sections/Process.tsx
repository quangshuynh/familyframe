import { ArrowIcon } from '../components/icons';
import { href, SECTION_IDS } from '../config/sections';
import { useI18n } from '../i18n/context';
import './Process.css';

export function Process() {
  const { t } = useI18n();
  return (
    <section id={SECTION_IDS.process} className="process" aria-labelledby="process-title">
      <div className="container">
        <div className="process__panel" data-reveal>
          <div className="process__head">
            <p className="eyebrow process__eyebrow">{t.process.eyebrow}</p>
            <h2 id="process-title" className="section-title">
              {t.process.title}
            </h2>
          </div>

          <ol role="list" className="process__steps">
            {t.process.steps.map((step, index) => (
              <li key={index} className="process__step">
                <span className="process__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__body">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="process__foot">
            <div className="process__notes">
              <div className="process__note process__note--payment">
                <p className="process__note-title">{t.process.payment.title}</p>
                <p>{t.process.payment.body}</p>
              </div>
              <div className="process__note">
                <p className="process__note-title">{t.process.tip.title}</p>
                <p>{t.process.tip.body}</p>
              </div>
            </div>
            <a className="button button--light" href={href('contact')}>
              {t.process.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
