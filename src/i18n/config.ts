import en from './locales/en';
import vi from './locales/vi';
import zhHans from './locales/zh-Hans';
import zhHant from './locales/zh-Hant';
import type { Dictionary } from './types';

export const LOCALES = ['vi', 'en', 'zh-Hant', 'zh-Hans'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'vi';
export const STORAGE_KEY = 'familyframe.locale';

export const dictionaries: Record<Locale, Dictionary> = {
  vi,
  en,
  'zh-Hant': zhHant,
  'zh-Hans': zhHans,
};

/** Names are shown in their own language so every visitor can find theirs. */
export const localeNames: Record<Locale, { native: string; short: string; og: string }> = {
  vi: { native: 'Tiếng Việt', short: 'VI', og: 'vi_VN' },
  en: { native: 'English', short: 'EN', og: 'en_US' },
  'zh-Hant': { native: '中文（繁體）', short: '繁', og: 'zh_HK' },
  'zh-Hans': { native: '中文（简体）', short: '简', og: 'zh_CN' },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** Reads ?lang= first (shareable links), then localStorage. Falls back to Vietnamese. */
export function readPreferredLocale(): Locale {
  try {
    const fromQuery = new URLSearchParams(window.location.search).get('lang');
    if (isLocale(fromQuery)) return fromQuery;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Storage can be blocked (private mode, disabled cookies). Vietnamese is the safe default.
  }
  return DEFAULT_LOCALE;
}

export function storeLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore: the choice simply won't persist.
  }
}

/** Replaces {placeholders} in a dictionary string. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
