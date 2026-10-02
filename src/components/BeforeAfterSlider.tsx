import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import type { Restoration } from '../data/restorations';
import { format } from '../i18n/config';
import { useI18n } from '../i18n/context';
import { ExpandIcon } from './icons';
import { Picture } from './Picture';
import './BeforeAfterSlider.css';

type Props = {
  item: Restoration;
  /** `sizes` attribute for both images. */
  sizes: string;
  /** Initial divider position, 0–100. */
  initial?: number;
  priority?: boolean;
  /** Shows the small "drag to compare" hint until the first interaction. */
  hint?: boolean;
  /** When provided, renders an expand button that opens a larger view. */
  onExpand?: () => void;
  className?: string;
  /** Optional CSS aspect-ratio override, e.g. "16 / 9". Defaults to the photo's own ratio. */
  aspectRatio?: string;
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));
const KEY_STEP = 2;
const PAGE_STEP = 10;
/** Movement (px) before a touch counts as a horizontal drag rather than a tap. */
const TOUCH_SLOP = 6;

/**
 * Two stacked photos with a draggable divider. The original sits underneath;
 * the restoration is revealed to the right of the divider.
 *
 * - Mouse / pen: press anywhere to jump, drag to scrub.
 * - Touch: `touch-action: pan-y` lets vertical swipes scroll the page;
 *   only horizontal drags (or a tap) move the divider.
 * - Keyboard: the handle is a focusable `role="slider"`.
 */
export function BeforeAfterSlider({
  item,
  sizes,
  initial = 50,
  priority = false,
  hint = false,
  onExpand,
  className,
  aspectRatio,
}: Props) {
  const { t } = useI18n();
  const [position, setPosition] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ id: number; x: number; y: number; moved: boolean } | null>(null);

  const pair = t.pairs[item.id];
  const ratio = aspectRatio ?? (item.orientation === 'landscape' ? '4 / 3' : '3 / 4');

  const positionFromClientX = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
    setTouched(true);
    if (event.pointerType !== 'touch') {
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
      positionFromClientX(event.clientX);
      event.preventDefault();
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || g.id !== event.pointerId) return;
    if (event.pointerType === 'touch' && !g.moved) {
      const dx = Math.abs(event.clientX - g.x);
      const dy = Math.abs(event.clientY - g.y);
      if (dx < TOUCH_SLOP || dx < dy) return;
      g.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    g.moved = true;
    positionFromClientX(event.clientX);
  };

  const endGesture = (event: PointerEvent<HTMLDivElement>, commitTap: boolean) => {
    const g = gesture.current;
    if (!g || g.id !== event.pointerId) return;
    // A touch tap without movement jumps the divider to that point.
    if (commitTap && event.pointerType === 'touch' && !g.moved) positionFromClientX(event.clientX);
    gesture.current = null;
    setDragging(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? PAGE_STEP : KEY_STEP;
    const next: Record<string, number> = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      PageDown: position - PAGE_STEP,
      PageUp: position + PAGE_STEP,
      Home: 0,
      End: 100,
    };
    if (event.key in next) {
      event.preventDefault();
      setTouched(true);
      setPosition(clamp(next[event.key]));
    }
  };

  const rounded = Math.round(position);
  const style = { '--pos': `${position}%`, aspectRatio: ratio } as CSSProperties;

  return (
    <div className={['compare', className].filter(Boolean).join(' ')}>
      <div
        ref={frameRef}
        className={`compare__frame${dragging ? ' is-dragging' : ''}`}
        style={style}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endGesture(e, true)}
        onPointerCancel={(e) => endGesture(e, false)}
      >
        <Picture
          item={item}
          kind="before"
          alt={`${t.compare.before}: ${pair.alt}`}
          sizes={sizes}
          priority={priority}
          className="compare__img"
        />
        <div className="compare__after">
          <Picture
            item={item}
            kind="after"
            alt={`${t.compare.after}: ${pair.alt}`}
            sizes={sizes}
            priority={priority}
            className="compare__img"
          />
        </div>

        <span
          className="compare__label compare__label--before"
          aria-hidden="true"
          data-hidden={position < 18}
        >
          {t.compare.before}
        </span>
        <span
          className="compare__label compare__label--after"
          aria-hidden="true"
          data-hidden={position > 82}
        >
          {t.compare.after}
        </span>

        <div className="compare__divider">
          <div
            className="compare__handle"
            role="slider"
            tabIndex={0}
            aria-label={`${t.compare.slider}: ${pair.title}`}
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={rounded}
            aria-valuetext={format(t.compare.valueText, { value: 100 - rounded })}
            onKeyDown={onKeyDown}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
              <path
                d="M9 6l-5 6 5 6M15 6l5 6-5 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {hint && (
          <span className="compare__hint" aria-hidden="true" data-hidden={touched}>
            {t.compare.hint}
          </span>
        )}
      </div>

      {onExpand && (
        <button
          type="button"
          className="compare__expand"
          onClick={onExpand}
          aria-label={format(t.compare.expand, { title: pair.title })}
        >
          <ExpandIcon />
        </button>
      )}
    </div>
  );
}
