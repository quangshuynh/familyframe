/** Anchor ids use Vietnamese slugs because Vietnamese is the primary locale. */
export const SECTION_IDS = {
  main: 'noi-dung',
  gallery: 'truoc-va-sau',
  services: 'dich-vu',
  pricing: 'bang-gia',
  process: 'cach-hoat-dong',
  faq: 'cau-hoi',
  contact: 'lien-he',
} as const;

export const href = (id: keyof typeof SECTION_IDS) => `#${SECTION_IDS[id]}`;
