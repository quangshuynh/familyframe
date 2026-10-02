import type { Restoration } from '../data/restorations';
import { useI18n } from '../i18n/context';
import { Picture } from './Picture';
import './PairDiptych.css';

type Props = {
  item: Restoration;
  sizes: string;
  className?: string;
};

/** Original and restoration side by side, each with its own label. */
export function PairDiptych({ item, sizes, className }: Props) {
  const { t } = useI18n();
  const pair = t.pairs[item.id];
  return (
    <div
      className={['diptych', `diptych--${item.orientation}`, className].filter(Boolean).join(' ')}
    >
      {(['before', 'after'] as const).map((kind) => (
        <figure key={kind} className={`diptych__panel diptych__panel--${kind}`}>
          <Picture
            item={item}
            kind={kind}
            alt={`${t.compare[kind]}: ${pair.alt}`}
            sizes={sizes}
            className="diptych__img"
          />
          <figcaption className="diptych__label">{t.compare[kind]}</figcaption>
        </figure>
      ))}
    </div>
  );
}
