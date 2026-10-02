import { useState } from 'react';
import { PlusIcon } from '../components/icons';
import { SECTION_IDS } from '../config/sections';
import { useI18n } from '../i18n/context';
import './Faq.css';

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={SECTION_IDS.faq} className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <header className="section-head faq__head" data-reveal>
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 id="faq-title" className="section-title">
            {t.faq.title}
          </h2>
        </header>

        <div className="faq__list">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            const buttonId = `faq-q-${index}`;
            const panelId = `faq-a-${index}`;
            return (
              <div key={index} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <h3 className="faq__question">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <PlusIcon size={18} />
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} className="faq__panel">
                  <div className="faq__panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
