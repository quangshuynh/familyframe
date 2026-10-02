import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { I18nProvider } from './i18n/I18nProvider';

/** Renders the Vietnamese page to static HTML at build time (see scripts/prerender.mjs). */
export function render(): string {
  return renderToString(
    <StrictMode>
      <I18nProvider initialLocale="vi">
        <App />
      </I18nProvider>
    </StrictMode>,
  );
}
