import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from 'react';
import {
  DEFAULT_LOCALE,
  dictionaries,
  localeNames,
  readPreferredLocale,
  storeLocale,
  type Locale,
} from './config';
import { I18nContext } from './context';

type Props = {
  children: ReactNode;
  /** Locale for the first render. The prerendered HTML is always Vietnamese. */
  initialLocale?: Locale;
};

export function I18nProvider({ children, initialLocale = DEFAULT_LOCALE }: Props) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Runs after hydration but before paint, so a saved locale replaces the
  // prerendered Vietnamese without a visible flash.
  useLayoutEffect(() => {
    const preferred = readPreferredLocale();
    // Intentional one-time sync from storage after hydration (server HTML is always Vietnamese).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (preferred !== initialLocale) setLocaleState(preferred);
  }, [initialLocale]);

  const t = dictionaries[locale];

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.meta.description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', localeNames[locale].og);
  }, [locale, t]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
    // Keep shared links honest: drop a stale ?lang= once the visitor chooses.
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        window.history.replaceState(null, '', url);
      }
    } catch {
      // Non-critical.
    }
  }, []);

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, t, setLocale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
