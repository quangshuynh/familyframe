import { PairDiptych } from '../components/PairDiptych';
import { layout } from '../data/restorations';
import { useI18n } from '../i18n/context';
import './Philosophy.css';

/** Light "paper" section: what restoration means, and its honest limits. */
export function Philosophy() {
  const { t } = useI18n();
  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container philosophy__grid">
        <div className="philosophy__intro" data-reveal>
          <p className="eyebrow philosophy__eyebrow">{t.philosophy.eyebrow}</p>
          <h2 id="philosophy-title" className="section-title">
            {t.philosophy.title}
          </h2>
          <p className="philosophy__body">{t.philosophy.body}</p>
        </div>

        <figure className="philosophy__media" data-reveal>
          <PairDiptych
            item={layout.philosophy}
            sizes="(min-width: 1024px) 30vw, 50vw"
            className="philosophy__diptych"
          />
          <figcaption className="philosophy__caption">
            {t.pairs[layout.philosophy.id].title}
          </figcaption>
        </figure>

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
    </section>
  );
}
