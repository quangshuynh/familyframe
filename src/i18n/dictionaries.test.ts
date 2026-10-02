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

describe('format', () => {
  it('replaces placeholders and leaves unknown ones', () => {
    expect(format('Ảnh {current} / {total}', { current: 2, total: 9 })).toBe('Ảnh 2 / 9');
    expect(format('{missing}', {})).toBe('{missing}');
  });
});
