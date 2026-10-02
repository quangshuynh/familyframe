import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import './styles/tokens.css';
import './styles/base.css';
import { App } from './App';
import { I18nProvider } from './i18n/I18nProvider';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>
);

// Production HTML is prerendered (Vietnamese); hydrate it. The dev server serves an empty root.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
