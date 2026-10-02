import { buildMailtoHref } from '../lib/mailto';

/**
 * Contact channels for every "Gửi ảnh" call to action.
 *
 * There is no upload backend yet. The main CTA opens a pre-filled email draft
 * in the visitor's language (subject and body live in each locale's `contact`
 * dictionary). VITE_CONTACT_EMAIL can override the recipient (see `.env.example`).
 * Zalo and Messenger buttons only appear when their URL is configured.
 */
export const DEFAULT_CONTACT_EMAIL = 'quang@quanghuynh.com';

export const contact = {
  email: import.meta.env.VITE_CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL,
  zaloUrl: import.meta.env.VITE_CONTACT_ZALO_URL ?? '',
  messengerUrl: import.meta.env.VITE_CONTACT_MESSENGER_URL ?? '',
};

/** The localized "send photos" email draft. */
export function emailHref(subject: string, body: string): string {
  return buildMailtoHref({ email: contact.email, subject, body });
}
