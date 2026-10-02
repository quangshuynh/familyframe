import { useState } from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ExpandIcon } from '../components/icons';
import { Lightbox } from '../components/Lightbox';
import { PairDiptych } from '../components/PairDiptych';
import { Picture } from '../components/Picture';
import { SECTION_IDS } from '../config/sections';
import { galleryOrder, layout, type Restoration } from '../data/restorations';
import { format } from '../i18n/config';
import { useI18n } from '../i18n/context';
import './Gallery.css';

export function Gallery() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const open = (item: Restoration) => setOpenIndex(galleryOrder.indexOf(item));
  const moreItems = showAll ? layout.more : layout.more.slice(0, layout.moreInitial);
  const meta = (item: Restoration) => (
    <figcaption className="gallery__meta">
      <span className="gallery__category">{t.gallery.categories[item.category]}</span>
      <span className="gallery__title">{t.pairs[item.id].title}</span>
    </figcaption>
  );

  return (
    <section id={SECTION_IDS.gallery} className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="section-head gallery__head" data-reveal>
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h2 id="gallery-title" className="section-title">
            {t.gallery.title}
          </h2>
          <p className="lead">{t.gallery.lead}</p>
          <p className="gallery__hint">{t.gallery.hint}</p>
        </header>

        {layout.featureRows.map((row, rowIndex) => (
          <div key={rowIndex} className="gallery__feature-row">
            {row.map((item) => (
              <figure
                key={item.id}
                className={`gallery__feature gallery__feature--${item.orientation}`}
                data-reveal
              >
                <BeforeAfterSlider
                  item={item}
                  sizes={
                    item.orientation === 'landscape'
                      ? '(min-width: 900px) 62vw, 100vw'
                      : '(min-width: 900px) 36vw, 100vw'
                  }
                  onExpand={() => open(item)}
                />
                {meta(item)}
              </figure>
            ))}
          </div>
        ))}
      </div>

      {/* Immersive editorial example */}
      <div className="gallery__immersive-wrap">
        <figure className="gallery__immersive" data-reveal>
          <BeforeAfterSlider
            item={layout.immersive}
            sizes="(min-width: 1360px) 1360px, 100vw"
            aspectRatio="var(--immersive-ratio)"
            initial={38}
            onExpand={() => open(layout.immersive)}
            className="gallery__immersive-slider"
          />
          <figcaption className="gallery__immersive-copy">
            <p className="eyebrow">{t.gallery.immersive.eyebrow}</p>
            <p className="heading">{t.gallery.immersive.title}</p>
            <p className="gallery__immersive-body">{t.gallery.immersive.body}</p>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        {/* Phone snapshots: shown side by side because the framing changes. */}
        <div className="gallery__rephoto">
          <div className="gallery__rephoto-copy" data-reveal>
            <span className="pill">{t.gallery.categories.rephotographed}</span>
            <h3 className="heading">{t.gallery.rephoto.title}</h3>
            <p className="muted">{t.gallery.rephoto.body}</p>
          </div>
          <ul role="list" className="gallery__rephoto-list">
            {layout.rephotographed.map((item) => (
              <li key={item.id} className="gallery__rephoto-item" data-reveal>
                <PairDiptych
                  item={item}
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 50vw"
                />
                {/* Overlay button: its name isn't contradicted by the visible photo labels. */}
                <button
                  type="button"
                  className="gallery__overlay-button"
                  onClick={() => open(item)}
                  aria-label={format(t.gallery.open, { title: t.pairs[item.id].title })}
                />
                <p className="gallery__title gallery__title--small">{t.pairs[item.id].title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* More examples: compact cards with the original inset like a print. */}
        <div className="gallery__more">
          <h3 className="heading gallery__more-title">{t.gallery.more.title}</h3>
          <ul role="list" className="gallery__grid" id="gallery-more">
            {moreItems.map((item) => (
              <li key={item.id} className={`gallery__card gallery__card--${item.orientation}`}>
                <button
                  type="button"
                  className="gallery__card-button"
                  onClick={() => open(item)}
                  aria-label={format(t.gallery.open, { title: t.pairs[item.id].title })}
                >
                  <span className="gallery__card-media">
                    <Picture
                      item={item}
                      kind="after"
                      alt=""
                      sizes={
                        item.orientation === 'landscape'
                          ? '(min-width: 900px) 50vw, 100vw'
                          : '(min-width: 900px) 25vw, 50vw'
                      }
                      className="gallery__card-img"
                    />
                    <span className="gallery__card-inset">
                      <Picture
                        item={item}
                        kind="before"
                        alt=""
                        sizes="120px"
                        className="gallery__card-inset-img"
                      />
                    </span>
                    <span className="gallery__card-expand" aria-hidden="true">
                      <ExpandIcon size={16} />
                    </span>
                  </span>
                </button>
                <div className="gallery__meta">
                  <span className="gallery__category">{t.gallery.categories[item.category]}</span>
                  <span className="gallery__title">{t.pairs[item.id].title}</span>
                </div>
              </li>
            ))}
          </ul>
          {layout.more.length > layout.moreInitial && (
            <div className="gallery__more-actions">
              <button
                type="button"
                className="button button--ghost"
                aria-expanded={showAll}
                aria-controls="gallery-more"
                onClick={() => setShowAll((value) => !value)}
              >
                {showAll ? t.gallery.more.showLess : t.gallery.more.showMore}
              </button>
            </div>
          )}
        </div>
      </div>

      <Lightbox items={galleryOrder} index={openIndex} onChange={setOpenIndex} />
    </section>
  );
}
