import { describe, expect, it } from 'vitest';
import { restorations } from '../data/restorations';
import { dictionaries, format, LOCALES } from './config';

type Shape = string | number | boolean | null | Shape[] | { [key: string]: Shape };

/** Flattens a dictionary to "path -> value" pairs, including array lengths. */
function flatten(value: Shape, prefix = ''): Record<string, string> {
  if (Array.isArray(value)) {
    return value.reduce<Record<string, string>>(
      (acc, item, index) => ({ ...acc, ...flatten(item, `${prefix}[${index}]`) }),
      { [`${prefix}.length`]: String(value.length) },
    );
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).reduce<Record<string, string>>(
      (acc, [key, child]) => ({ ...acc, ...flatten(child, prefix ? `${prefix}.${key}` : key) }),
      {},
    );
  }
  return { [prefix]: String(value) };
}

const source = flatten(dictionaries.vi as unknown as Shape);
const placeholders = (text: string) => (text.match(/\{\w+\}/g) ?? []).sort().join(',');

describe('locale dictionaries', () => {
  for (const locale of LOCALES) {
    const flat = flatten(dictionaries[locale] as unknown as Shape);

    it(`${locale} has exactly the same keys and list lengths as Vietnamese`, () => {
      expect(Object.keys(flat).sort()).toEqual(Object.keys(source).sort());
    });

    it(`${locale} has no empty strings and keeps every {placeholder}`, () => {
      for (const [key, value] of Object.entries(flat)) {
        expect(value.trim(), key).not.toBe('');
        expect(placeholders(value), key).toBe(placeholders(source[key]));
      }
    });
  }

  it('every restoration pair has copy in every locale', () => {
    for (const locale of LOCALES) {
      for (const id of Object.keys(restorations)) {
        expect(dictionaries[locale].pairs, `${locale}:${id}`).toHaveProperty(id);
      }
    }
  });

  it('Chinese locales do not fall back to English text', () => {
    for (const locale of ['zh-Hant', 'zh-Hans'] as const) {
      const flat = flatten(dictionaries[locale] as unknown as Shape);
      const en = flatten(dictionaries.en as unknown as Shape);
      const copied = Object.keys(flat).filter(
        (key) => !key.endsWith('.length') && flat[key] === en[key] && /[a-z]{4,}/i.test(flat[key]),
      );
      expect(copied.filter((key) => !key.startsWith('footer.copyright'))).toEqual([]);
    }
  });
});

describe('process copy', () => {
  const processStrings = (locale: (typeof LOCALES)[number]) => {
    const { process } = dictionaries[locale];
    return [
      process.eyebrow,
      process.title,
      ...process.steps.flatMap((step) => [step.title, step.body]),
      process.payment.title,
      process.payment.body,
      process.tip.title,
      process.tip.body,
      process.cta,
    ];
  };

  it('has four steps plus payment, tip and CTA copy in every locale', () => {
    for (const locale of LOCALES) {
      const { process } = dictionaries[locale];
      expect(process.steps, locale).toHaveLength(4);
      for (const value of processStrings(locale)) expect(value.trim(), locale).not.toBe('');
    }
  });

  it('does not reuse English process copy in other locales', () => {
    const en = processStrings('en');
    for (const locale of LOCALES.filter((l) => l !== 'en')) {
      processStrings(locale).forEach((value, index) => {
        expect(value, `${locale}[${index}]`).not.toBe(en[index]);
      });
    }
  });

  it('keeps Chinese process copy free of English words other than PNG', () => {
    for (const locale of ['zh-Hant', 'zh-Hans'] as const) {
      for (const value of processStrings(locale)) {
        expect(value.replace(/PNG/g, ''), locale).not.toMatch(/[a-z]{2,}/i);
      }
    }
  });

  it('keeps Vietnamese process copy in Vietnamese', () => {
    for (const value of processStrings('vi')) {
      expect(value).toMatch(/[ăâđêôơưàáảãạèéẻẽẹìíỉĩịòóỏõọùúủũụỳýỷỹỵ]/i);
    }
  });

  it('does not publish payment handles or account details', () => {
    for (const locale of LOCALES) {
      const { payment } = dictionaries[locale].process;
      expect(`${payment.title} ${payment.body}`, locale).not.toMatch(
        /zelle|venmo|paypal|@|\d{4,}/i,
      );
    }
  });
});

describe('format', () => {
  it('replaces placeholders and leaves unknown ones', () => {
    expect(format('Ảnh {current} / {total}', { current: 2, total: 9 })).toBe('Ảnh 2 / 9');
    expect(format('{missing}', {})).toBe('{missing}');
  });
});
