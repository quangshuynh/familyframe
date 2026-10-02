import { ArrowIcon } from '../components/icons';
import { Picture } from '../components/Picture';
import { contact, emailHref } from '../config/contact';
import { SECTION_IDS } from '../config/sections';
import { layout } from '../data/restorations';
import { useI18n } from '../i18n/context';
import './Contact.css';

export function Contact() {
  const { t } = useI18n();
  const item = layout.contact;

  return (
    <section id={SECTION_IDS.contact} className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel" data-reveal>
          <div className="contact__copy">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 id="contact-title" className="section-title contact__title">
              {t.contact.title}
            </h2>
            <p className="lead">{t.contact.lead}</p>

            <div className="contact__actions">
              <a
                className="button button--primary contact__cta"
                href={emailHref(t.contact.emailSubject, t.contact.emailBody)}
              >
                {t.contact.cta}
                <ArrowIcon />
              </a>
              {contact.zaloUrl && (
                <a
                  className="button button--ghost"
                  href={contact.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contact.zalo}
                </a>
              )}
              {contact.messengerUrl && (
                <a
                  className="button button--ghost"
                  href={contact.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contact.messenger}
                </a>
              )}
            </div>

            <ul role="list" className="contact__notes">
              <li>{t.contact.attachNote}</li>
              <li>{t.contact.reassurance}</li>
            </ul>
            {contact.email && (
              <p className="contact__email">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            )}
          </div>

          <div className="contact__media">
            <Picture
              item={item}
              kind="after"
              alt={`${t.compare.after}: ${t.pairs[item.id].alt}`}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="contact__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
