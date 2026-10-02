import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LanguageSelector } from '../components/LanguageSelector';
import { STORAGE_KEY } from './config';
import { useI18n } from './context';
import { I18nProvider } from './I18nProvider';

function Title() {
  const { t } = useI18n();
  return <h1>{t.hero.title}</h1>;
}

const renderApp = () =>
  render(
    <I18nProvider>
      <Title />
      <LanguageSelector />
    </I18nProvider>,
  );

describe('I18nProvider', () => {
  it('defaults to Vietnamese', () => {
    renderApp();
    expect(screen.getByRole('heading')).toHaveTextContent('Giữ lại những tấm ảnh');
    expect(document.documentElement.lang).toBe('vi');
  });

  it('restores a saved locale', () => {
    window.localStorage.setItem(STORAGE_KEY, 'zh-Hant');
    renderApp();
    expect(screen.getByRole('heading')).toHaveTextContent('留住那些無法再影一次的相片');
    expect(document.documentElement.lang).toBe('zh-Hant');
  });

  it('ignores an invalid saved locale', () => {
    window.localStorage.setItem(STORAGE_KEY, 'fr');
    renderApp();
    expect(document.documentElement.lang).toBe('vi');
  });

  it('switches and persists the locale from the selector', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: /Ngôn ngữ/ }));
    await user.click(screen.getByRole('button', { name: 'English' }));
    expect(screen.getByRole('heading')).toHaveTextContent('Keep the photos');
    expect(window.localStorage.getItem(STORAGE_KEY)).toBe('en');
    expect(document.title).toContain('Restoring');
  });
});
