import { useEffect, useRef } from 'react';
import type { Restoration } from '../data/restorations';
import { format } from '../i18n/config';
import { useI18n } from '../i18n/context';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ChevronIcon, CloseIcon } from './icons';
import { PairDiptych } from './PairDiptych';
import { TechniqueList } from './TechniqueList';
import './Lightbox.css';

type Props = {
  items: Restoration[];
  /** Index of the open item, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
};

/**
 * Native <dialog> lightbox: modal focus handling, Escape to close and focus
 * restoration come from the platform.
 */
export function Lightbox({ items, index, onChange }: Props) {
  const { t } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const item = index === null ? null : items[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('is-locked');
    } else if (!item && dialog.open) {
      dialog.close();
    }
  }, [item]);

  // Clicks on the backdrop (the dialog element itself, not its content) close it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };
    dialog.addEventListener('click', onClick);
    return () => dialog.removeEventListener('click', onClick);
  }, []);

  const step = (delta: number) => {
    if (index === null) return;
    onChange((index + delta + items.length) % items.length);
  };

  const pair = item ? t.pairs[item.id] : null;
  // Only some pairs carry a description of the work done.
  const description = pair && 'description' in pair ? String(pair.description) : null;
  const titleId = 'lightbox-title';

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby={titleId}
      onClose={() => {
        document.documentElement.classList.remove('is-locked');
        onChange(null);
      }}
    >
      {item && pair && (
        <div className="lightbox__inner">
          <div className="lightbox__top">
            <div className="lightbox__heading">
              <p className="lightbox__category">{t.gallery.categories[item.category]}</p>
              <h2 id={titleId} className="lightbox__title">
                {pair.title}
              </h2>
              {description && <p className="lightbox__description">{description}</p>}
              <TechniqueList item={item} className="lightbox__techniques" />
            </div>
            <button
              type="button"
              className="lightbox__icon-button"
              onClick={() => dialogRef.current?.close()}
              aria-label={t.lightbox.close}
            >
              <CloseIcon />
            </button>
          </div>

          {/* One restoration at a time: a slider when the photos line up, otherwise both panels. */}
          <div
            className={[
              'lightbox__media',
              `lightbox__media--${item.orientation}`,
              `lightbox__media--${item.presentation}`,
              (description || item.techniques) && 'lightbox__media--detailed',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {item.presentation === 'slider' ? (
              <BeforeAfterSlider
                key={item.id}
                item={item}
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            ) : (
              <PairDiptych
                key={item.id}
                item={item}
                sizes="(min-width: 640px) 45vw, 100vw"
                className="lightbox__diptych"
              />
            )}
          </div>

          <div className="lightbox__nav">
            <button type="button" className="lightbox__icon-button" onClick={() => step(-1)}>
              <ChevronIcon direction="left" />
              <span className="visually-hidden">{t.lightbox.previous}</span>
            </button>
            <p className="lightbox__counter" aria-live="polite">
              {format(t.lightbox.counter, { current: (index ?? 0) + 1, total: items.length })}
            </p>
            <button type="button" className="lightbox__icon-button" onClick={() => step(1)}>
              <ChevronIcon direction="right" />
              <span className="visually-hidden">{t.lightbox.next}</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
