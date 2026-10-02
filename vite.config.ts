/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';

/**
 * Injects canonical + og:url tags only when VITE_SITE_URL is configured,
 * so local builds never ship a wrong canonical URL.
 */
function siteUrlTags(siteUrl: string | undefined): Plugin {
  return {
    name: 'familyframe-site-url',
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      const url = siteUrl.replace(/\/?$/, '/');
      return html.replace(
        '<!--site-url-->',
        `<link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n    <meta property="og:image" content="${url}og-image.jpg" />`,
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  return {
    plugins: [react(), siteUrlTags(env.VITE_SITE_URL)],
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      css: false,
    },
  };
});
