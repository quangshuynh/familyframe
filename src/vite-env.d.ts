/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CONTACT_ZALO_URL?: string;
  readonly VITE_CONTACT_MESSENGER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
