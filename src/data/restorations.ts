import type { Dictionary } from '../i18n/types';

export type PairId = keyof Dictionary['pairs'];
export type RestorationCategory = keyof Dictionary['gallery']['categories'];
export type Orientation = 'portrait' | 'landscape';
export type ImageKind = 'before' | 'after';

export type Restoration = {
  /** Folder name under public/restorations/ and key in every locale's `pairs` dictionary. */
  id: PairId;
  category: RestorationCategory;
  orientation: Orientation;
  /**
   * True when the original and restoration share the same framing, so a
   * slider comparison lines up. Phone snapshots of prints (skewed, with the
   * table visible) are shown side by side instead.
   */
  aligned: boolean;
  /** CSS object-position used when a frame crops the photo. Defaults to center. */
  objectPosition?: string;
};

/**
 * Keep in sync with WIDTHS in scripts/optimize-images.mjs.
 * Source pairs are 1086×1448 (portrait) or 1448×1086 (landscape).
 */
export const IMAGE_WIDTHS: Record<Orientation, number[]> = {
  portrait: [480, 768, 1080],
  landscape: [480, 768, 1080, 1440],
};

export const INTRINSIC_SIZE: Record<Orientation, { width: number; height: number }> = {
  portrait: { width: 1086, height: 1448 },
  landscape: { width: 1448, height: 1086 },
};

const all = [
  { id: '01_fairground', category: 'rephotographed', orientation: 'portrait', aligned: false },
  { id: '02_wedding_preparations', category: 'wedding', orientation: 'landscape', aligned: true },
  { id: '03_tropical_garden', category: 'blackWhite', orientation: 'portrait', aligned: true },
  { id: '04_buddha_family', category: 'family', orientation: 'portrait', aligned: false },
  {
    id: '05_two_friends_full_length',
    category: 'blackWhite',
    orientation: 'portrait',
    aligned: true,
  },
  { id: '06_two_women_garden', category: 'blackWhite', orientation: 'portrait', aligned: true },
  { id: '07_group_under_tree', category: 'damaged', orientation: 'portrait', aligned: false },
  {
    id: '08_badminton_portrait_scan_1',
    category: 'blackWhite',
    orientation: 'landscape',
    aligned: true,
  },
  { id: '09_two_women_closeup', category: 'blackWhite', orientation: 'landscape', aligned: true },
  {
    id: '10_chien_thang_group',
    category: 'family',
    orientation: 'portrait',
    aligned: true,
    objectPosition: '50% 40%',
  },
  { id: '11_rooftop_portrait', category: 'blackWhite', orientation: 'portrait', aligned: true },
  {
    id: '12_village_portrait',
    category: 'blackWhite',
    orientation: 'landscape',
    aligned: true,
    objectPosition: '50% 62%',
  },
  {
    id: '13_badminton_portrait_scan_2',
    category: 'blackWhite',
    orientation: 'landscape',
    aligned: true,
  },
  { id: '14_two_girls_studio', category: 'blackWhite', orientation: 'portrait', aligned: true },
  {
    id: '15_mother_and_child',
    category: 'faded',
    orientation: 'landscape',
    aligned: true,
    objectPosition: '60% 50%',
  },
  { id: '16_couple_with_baby', category: 'faded', orientation: 'landscape', aligned: true },
  {
    id: '17_wedding_closeup',
    category: 'wedding',
    orientation: 'landscape',
    aligned: true,
    objectPosition: '50% 35%',
  },
  {
    id: '18_wedding_with_parents',
    category: 'wedding',
    orientation: 'portrait',
    aligned: true,
    objectPosition: '50% 30%',
  },
  { id: '19_wedding_four_people', category: 'wedding', orientation: 'portrait', aligned: true },
  {
    id: '20_lakeside_family',
    category: 'damaged',
    orientation: 'landscape',
    aligned: true,
    objectPosition: '70% 60%',
  },
  { id: '21_two_boys_hedge', category: 'damaged', orientation: 'landscape', aligned: false },
  { id: '22_boy_sky', category: 'rephotographed', orientation: 'portrait', aligned: false },
  {
    id: '23_elephant_monument',
    category: 'rephotographed',
    orientation: 'portrait',
    aligned: false,
  },
  { id: '24_smiling_girl', category: 'rephotographed', orientation: 'portrait', aligned: false },
  { id: '25_coastal_woman', category: 'rephotographed', orientation: 'portrait', aligned: false },
  {
    id: '26_woman_with_two_boys',
    category: 'rephotographed',
    orientation: 'portrait',
    aligned: false,
  },
  { id: '27_double_happiness_portrait', category: 'faded', orientation: 'portrait', aligned: true },
] as const satisfies readonly Restoration[];

export const restorations: Record<PairId, Restoration> = Object.fromEntries(
  all.map((item) => [item.id, item]),
) as Record<PairId, Restoration>;

const pick = (ids: PairId[]) => ids.map((id) => restorations[id]);

/**
 * Page layout. Each slot lists pair ids, so re-curating the gallery is a
 * one-line change here. 13_badminton_portrait_scan_2 is a second scan of 08
 * and is intentionally unused.
 */
export const layout = {
  hero: restorations['17_wedding_closeup'],
  /** Two rows of large sliders: [landscape, portrait] then [portrait, landscape]. */
  featureRows: [
    pick(['02_wedding_preparations', '14_two_girls_studio']),
    pick(['19_wedding_four_people', '16_couple_with_baby']),
  ],
  immersive: restorations['12_village_portrait'],
  rephotographed: pick(['24_smiling_girl', '22_boy_sky', '26_woman_with_two_boys']),
  more: pick([
    '08_badminton_portrait_scan_1',
    '10_chien_thang_group',
    '06_two_women_garden',
    '20_lakeside_family',
    '05_two_friends_full_length',
    '27_double_happiness_portrait',
    '15_mother_and_child',
    '11_rooftop_portrait',
    '23_elephant_monument',
    '03_tropical_garden',
    '21_two_boys_hedge',
    '04_buddha_family',
    '25_coastal_woman',
    '07_group_under_tree',
    '01_fairground',
  ]),
  /** Number of "more" cards shown before "Show more". */
  moreInitial: 6,
  philosophy: restorations['09_two_women_closeup'],
  contact: restorations['18_wedding_with_parents'],
};

/** Every pair the lightbox can step through, in page order. */
export const galleryOrder: Restoration[] = [
  ...layout.featureRows.flat(),
  layout.immersive,
  ...layout.rephotographed,
  ...layout.more,
];

export function imageSources(item: Restoration, kind: ImageKind) {
  const base = `/restorations/${item.id}/${kind}`;
  const widths = IMAGE_WIDTHS[item.orientation];
  const srcSet = (ext: string) => widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
  return {
    avif: srcSet('avif'),
    webp: srcSet('webp'),
    fallback: `${base}-${widths[1]}.webp`,
    ...INTRINSIC_SIZE[item.orientation],
  };
}
