import { describe, expect, it } from 'vitest';
import { contact, DEFAULT_CONTACT_EMAIL, emailHref } from '../config/contact';
import { dictionaries, LOCALES } from '../i18n/config';
import { buildMailtoHref } from './mailto';

/** Splits a mailto: href back into its decoded parts. */
function parse(href: string) {
  const match = /^mailto:([^?]*)\?(.*)$/.exec(href);
  if (!match) throw new Error(`Not a mailto link with a query: ${href}`);
  const [, recipient, query] = match;
  const params = query.split('&').map((pair) => {
    const [key, value, ...rest] = pair.split('=');
    expect(rest, `stray "=" in ${pair}`).toEqual([]);
    return [key, decodeURIComponent(value)] as const;
  });
  return { recipient: decodeURIComponent(recipient), query, params: Object.fromEntries(params) };
}

describe('buildMailtoHref', () => {
  it('encodes subject and body with one "?" and one "&"', () => {
    const href = buildMailtoHref({
      email: 'quang@quanghuynh.com',
      subject: 'Tom & Jerry? 100%',
      body: 'a=b&c\nline two #1',
    });
    expect(href.startsWith('mailto:quang@quanghuynh.com?subject=')).toBe(true);
    expect(href.match(/\?/g)).toHaveLength(1);
    expect(href.match(/&/g)).toHaveLength(1);
    expect(href).not.toMatch(/[\s#+]/);
    const { params } = parse(href);
    expect(params.subject).toBe('Tom & Jerry? 100%');
    expect(params.body).toBe('a=b&c\r\nline two #1');
  });

  it('writes line breaks as CRLF (RFC 6068)', () => {
    const href = buildMailtoHref({ email: 'a@b.c', subject: 's', body: 'one\ntwo\r\nthree' });
    expect(href).toContain('one%0D%0Atwo%0D%0Athree');
    expect(href).not.toMatch(/%0D%0D|[^D]%0A/);
  });
});

describe('localized contact email', () => {
  it('defaults the recipient to quang@quanghuynh.com', () => {
    expect(DEFAULT_CONTACT_EMAIL).toBe('quang@quanghuynh.com');
    expect(contact.email).toBe('quang@quanghuynh.com');
  });

  const expected = {
    vi: {
      subject: 'Yêu cầu phục hồi ảnh FamilyFrame',
      body: ['Chào Quang,', 'báo giá trước khi làm nha.', 'Cảm ơn!'],
    },
    en: {
      subject: 'FamilyFrame photo restoration inquiry',
      body: ['Hi Quang,', 'the estimated price before starting?', 'Thank you!'],
    },
    'zh-Hant': {
      subject: 'FamilyFrame 舊相修復查詢',
      body: ['Hi Quang，', '屋企嘅舊相', '多謝！'],
    },
    'zh-Hans': {
      subject: 'FamilyFrame 老照片修复咨询',
      body: ['Quang 你好，', '家里的老照片', '谢谢！'],
    },
  } as const;

  for (const locale of LOCALES) {
    it(`${locale}: recipient, subject and body survive encoding`, () => {
      const { emailSubject, emailBody } = dictionaries[locale].contact;
      const href = emailHref(emailSubject, emailBody);
      const { recipient, query, params } = parse(href);

      expect(recipient).toBe('quang@quanghuynh.com');
      expect(Object.keys(params)).toEqual(['subject', 'body']);
      expect(params.subject).toBe(expected[locale].subject);
      expect(params.body).toBe(emailBody.replace(/\n/g, '\r\n'));
      for (const fragment of expected[locale].body) expect(params.body).toContain(fragment);

      // Only ASCII on the wire, nothing left unencoded, no accidental values.
      expect(query).toMatch(/^[\x21-\x7e]+$/);
      expect(href).not.toMatch(/undefined|null|\?\?|&&|\?&|&$/);
    });
  }

  it('keeps Vietnamese diacritics and Chinese characters intact', () => {
    const vi = parse(emailHref(dictionaries.vi.contact.emailSubject, '')).params.subject;
    expect(vi).toBe('Yêu cầu phục hồi ảnh FamilyFrame');
    expect(vi.normalize('NFC')).toBe(vi);
    const zh = parse(emailHref(dictionaries['zh-Hant'].contact.emailSubject, '')).params.subject;
    expect(zh).toContain('舊相修復');
  });
});
