import type { Restoration } from '../data/restorations';
import { useI18n } from '../i18n/context';
import './TechniqueList.css';

/** Up to three small chips naming the work done on a pair. */
export function TechniqueList({ item, className }: { item: Restoration; className?: string }) {
  const { t } = useI18n();
  if (!item.techniques?.length) return null;
  return (
    <ul role="list" className={['techniques', className].filter(Boolean).join(' ')}>
      {item.techniques.slice(0, 3).map((technique) => (
        <li key={technique} className="techniques__item">
          {t.gallery.techniques[technique]}
        </li>
      ))}
    </ul>
  );
}
