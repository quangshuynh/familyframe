/**
 * Contact channels for every "Gửi ảnh" call to action.
 *
 * There is no upload backend yet. The main CTA opens a pre-filled email draft
 * in the visitor's language. Set the values in `.env` (see `.env.example`).
 * Zalo and Messenger buttons only appear when their URL is configured.
 */
export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL ?? '',
  zaloUrl: import.meta.env.VITE_CONTACT_ZALO_URL ?? '',
  messengerUrl: import.meta.env.VITE_CONTACT_MESSENGER_URL ?? '',
};

export function emailHref(subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which some mail clients show literally.
  return `mailto:${contact.email}?${params.toString().replace(/\+/g, '%20')}`;
}
