import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LanguageSelector } from '../components/LanguageSelector';
import { I18nProvider } from '../i18n/I18nProvider';
import { Contact } from './Contact';

const draft = (link: HTMLElement) => {
  const href = link.getAttribute('href') ?? '';
  const url = new URL(href);
  return {
    protocol: url.protocol,
    to: url.pathname,
    subject: decodeURIComponent(/subject=([^&]*)/.exec(href)?.[1] ?? ''),
    body: decodeURIComponent(/body=([^&]*)/.exec(href)?.[1] ?? ''),
  };
};

describe('Contact CTA', () => {
  it('opens a localized email draft that follows the language switch', async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <LanguageSelector />
        <Contact />
      </I18nProvider>,
    );

    const vi = screen.getByRole('link', { name: 'Gửi ảnh để xem trước' });
    expect(vi).not.toHaveAttribute('target');
    expect(draft(vi)).toMatchObject({
      protocol: 'mailto:',
      to: 'quang@quanghuynh.com',
      subject: 'Yêu cầu phục hồi ảnh FamilyFrame',
    });
    expect(draft(vi).body).toMatch(/^Chào Quang,/);

    await user.click(screen.getByRole('button', { name: /Ngôn ngữ/ }));
    await user.click(screen.getByRole('button', { name: 'English' }));
    const en = screen.getByRole('link', { name: 'Send photos for review' });
    expect(draft(en).subject).toBe('FamilyFrame photo restoration inquiry');
    expect(draft(en).body).toMatch(/^Hi Quang,/);

    await user.click(screen.getByRole('button', { name: /Language/ }));
    await user.click(screen.getByRole('button', { name: '中文（繁體）' }));
    const hant = screen.getByRole('link', { name: '傳相片畀我睇吓' });
    expect(draft(hant).subject).toBe('FamilyFrame 舊相修復查詢');

    await user.click(screen.getByRole('button', { name: /語言/ }));
    await user.click(screen.getByRole('button', { name: '中文（简体）' }));
    const hans = screen.getByRole('link', { name: '发送照片看看' });
    expect(draft(hans).subject).toBe('FamilyFrame 老照片修复咨询');
    expect(draft(hans).to).toBe('quang@quanghuynh.com');
  });
});
