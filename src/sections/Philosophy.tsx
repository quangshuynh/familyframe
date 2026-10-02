import { PairDiptych } from '../components/PairDiptych';
import { layout } from '../data/restorations';
import { useI18n } from '../i18n/context';
import './Philosophy.css';

/**
 * Light "paper" section: what restoration means, and its honest limits.
 *
 * Desktop: intro and notes share the left column, the stacked pair sits on the
 * right. Mobile: intro, pair, then notes (`.philosophy__text` becomes
 * `display: contents` so its children join the single-column grid).
 */
export function Philosophy() {
  const { t } = useI18n();
  const item = layout.philosophy;
  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container philosophy__grid">
        <div className="philosophy__text">
          <div className="philosophy__intro" data-reveal>
            <p className="eyebrow philosophy__eyebrow">{t.philosophy.eyebrow}</p>
            <h2 id="philosophy-title" className="section-title philosophy__title">
              {t.philosophy.title.map((line) => (
                <span key={line} className="philosophy__title-line">
                  {line}{' '}
                </span>
              ))}
            </h2>
            <p className="philosophy__body">{t.philosophy.body}</p>
          </div>

          <div className="philosophy__notes" data-reveal>
            <h3 className="philosophy__notes-title">{t.philosophy.notesTitle}</h3>
            <dl className="philosophy__list">
              {t.philosophy.notes.map((note) => (
                <div key={note.title} className="philosophy__note">
                  <dt>{note.title}</dt>
                  <dd>{note.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="philosophy__media" data-reveal>
          <PairDiptych
            item={item}
            sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, (min-width: 600px) 46vw, calc(100vw - 32px)"
            className="philosophy__diptych"
          />
          <figcaption className="philosophy__caption">{t.pairs[item.id].title}</figcaption>
        </figure>
      </div>
    </section>
  );
}
