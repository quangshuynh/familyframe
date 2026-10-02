import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { LOCALES, localeNames, type Locale } from '../i18n/config';
import { useI18n } from '../i18n/context';
import { CheckIcon, ChevronIcon, GlobeIcon } from './icons';
import './LanguageSelector.css';

type Props = {
  /** "menu": compact button with popover. "list": always-visible list (mobile menu, footer). */
  variant?: 'menu' | 'list';
  /** Popover direction for the menu variant. */
  placement?: 'down' | 'up';
  onSelect?: () => void;
};

export function LanguageSelector({ variant = 'menu', placement = 'down', onSelect }: Props) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const choose = (next: Locale) => {
    setLocale(next);
    setOpen(false);
    onSelect?.();
    if (variant === 'menu') buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onDocPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onDocPointer);
    // Move focus to the current language when the menu opens.
    rootRef.current?.querySelector<HTMLButtonElement>('[aria-current="true"]')?.focus();
    return () => document.removeEventListener('pointerdown', onDocPointer);
  }, [open]);

  const onOptionKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const list = event.currentTarget.closest('ul');
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLButtonElement>('button'));
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    let next = -1;
    if (event.key === 'ArrowDown') next = (index + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else if (event.key === 'Escape' && variant === 'menu') {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (next >= 0) {
      event.preventDefault();
      items[next].focus();
    }
  };

  const list = (
    <ul
      id={listId}
      role="list"
      className={`lang__list lang__list--${variant} lang__list--${placement}`}
      aria-label={t.nav.language}
    >
      {LOCALES.map((code) => (
        <li key={code}>
          <button
            type="button"
            className="lang__option"
            lang={code}
            aria-current={code === locale ? 'true' : undefined}
            onClick={() => choose(code)}
            onKeyDown={onOptionKeyDown}
          >
            <span>{localeNames[code].native}</span>
            {code === locale && <CheckIcon size={16} />}
          </button>
        </li>
      ))}
    </ul>
  );

  if (variant === 'list') return <div className="lang lang--list">{list}</div>;

  return (
    <div className="lang" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="lang__button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <GlobeIcon size={17} />
        <span className="visually-hidden">{t.nav.language}: </span>
        <span lang={locale}>{localeNames[locale].short}</span>
        <ChevronIcon size={14} direction="down" />
      </button>
      {open && list}
    </div>
  );
}
