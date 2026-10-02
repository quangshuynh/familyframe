type MailtoParts = {
  email: string;
  subject: string;
  body: string;
};

/**
 * Builds a mailto: link with a pre-filled subject and body.
 *
 * Each part is encoded with encodeURIComponent, so Vietnamese diacritics,
 * Chinese characters, "&" and "?" survive intact. Line breaks become CRLF,
 * as RFC 6068 asks for, so every mail client keeps the paragraphs.
 */
export function buildMailtoHref({ email, subject, body }: MailtoParts): string {
  const params = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body.replace(/\r?\n/g, '\r\n'))}`,
  ];
  return `mailto:${encodeURIComponent(email).replace(/%40/g, '@')}?${params.join('&')}`;
}
