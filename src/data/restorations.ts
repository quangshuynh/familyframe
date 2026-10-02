import type { Dictionary } from '../i18n/types';

export type PairId = keyof Dictionary['pairs'];
export type RestorationCategory = keyof Dictionary['gallery']['categories'];
export type Technique = keyof Dictionary['gallery']['techniques'];
export type Orientation = 'portrait' | 'landscape';
export type ImageKind = 'before' | 'after';

/**
 * Registers the original onto the restoration so a slider lines up. Measured
 * per pair against the restored frame: the original is scaled about the
 * centre, then shifted by x / y percent of the frame.
 */
export type Alignment = { scale: number; x: number; y: number };

export type Restoration = {
  /** Folder name under public/restorations/ and key in every locale's `pairs` dictionary. */
  id: PairId;
  category: RestorationCategory;
  /** Orientation of the restored photo. Its 3:4 or 4:3 frame is shared by both panels. */
  orientation: Orientation;
  /**
   * `slider` only when the two photos line up spatially (after `align`).
   * Everything else is shown as two equal panels side by side.
   */
  presentation: 'slider' | 'pair';
  align?: Alignment;
  /** Work done, shown as small chips (max 3). Omit when the category says enough. */
  techniques?: readonly Technique[];
  /** CSS object-position for the restored photo when a frame crops it. Defaults to center. */
  afterPosition?: string;
  /** CSS object-position for the original in a paired panel. Defaults to `afterPosition`. */
  beforePosition?: string;
};

/**
 * Keep in sync with WIDTHS in scripts/optimize-images.mjs.
 * Restored photos are 1086×1448 (portrait) or 1448×1086 (landscape).
 */
export const IMAGE_WIDTHS: Record<Orientation, number[]> = {
  portrait: [480, 768, 1080],
  landscape: [480, 768, 1080, 1440],
};

export const INTRINSIC_SIZE: Record<Orientation, { width: number; height: number }> = {
  portrait: { width: 1086, height: 1448 },
  landscape: { width: 1448, height: 1086 },
};

/** The pair frame: the restored photo's own aspect ratio. */
export const FRAME_RATIO: Record<Orientation, number> = {
  portrait: 3 / 4,
  landscape: 4 / 3,
};

const all = [
  {
    id: '01_fairground',
    category: 'rephotographed',
    orientation: 'portrait',
    presentation: 'pair',
  },
  {
    id: '02_wedding_preparations',
    category: 'wedding',
    orientation: 'landscape',
    presentation: 'pair',
    beforePosition: '40% 50%',
  },
  {
    id: '03_tropical_garden',
    category: 'blackWhite',
    orientation: 'portrait',
    presentation: 'pair',
  },
  { id: '04_buddha_family', category: 'family', orientation: 'portrait', presentation: 'pair' },
  {
    id: '05_two_friends_full_length',
    category: 'blackWhite',
    orientation: 'portrait',
    presentation: 'slider',
    align: { scale: 1.09, x: 2.25, y: -7.5 },
  },
  {
    id: '06_two_women_garden',
    category: 'blackWhite',
    orientation: 'portrait',
    presentation: 'slider',
    align: { scale: 1.005, x: -0.5, y: -3.5 },
  },
  { id: '07_group_under_tree', category: 'damaged', orientation: 'portrait', presentation: 'pair' },
  {
    id: '08_badminton_portrait_scan_1',
    category: 'blackWhite',
    orientation: 'landscape',
    presentation: 'slider',
    align: { scale: 1.005, x: 2.75, y: -1.5 },
  },
  {
    id: '09_two_women_closeup',
    category: 'blackWhite',
    orientation: 'landscape',
    presentation: 'pair',
  },
  {
    id: '10_chien_thang_group',
    category: 'family',
    orientation: 'portrait',
    presentation: 'slider',
    afterPosition: '50% 40%',
  },
  {
    id: '11_rooftop_portrait',
    category: 'blackWhite',
    orientation: 'portrait',
    presentation: 'slider',
    align: { scale: 0.985, x: -1.5, y: -1 },
  },
  {
    id: '12_village_portrait',
    category: 'blackWhite',
    orientation: 'landscape',
    presentation: 'slider',
    align: { scale: 1.015, x: 2.5, y: -2.75 },
    afterPosition: '50% 62%',
  },
  {
    id: '13_badminton_portrait_scan_2',
    category: 'blackWhite',
    orientation: 'landscape',
    presentation: 'pair',
  },
  {
    id: '14_two_girls_studio',
    category: 'blackWhite',
    orientation: 'portrait',
    presentation: 'pair',
    techniques: ['colorization', 'cleanup', 'objectRemoval'],
  },
  {
    id: '15_mother_and_child',
    category: 'faded',
    orientation: 'landscape',
    presentation: 'pair',
    techniques: ['fadeRestoration', 'cleanup', 'eyeCorrection'],
    afterPosition: '60% 50%',
    beforePosition: '50% 40%',
  },
  {
    id: '16_couple_with_baby',
    category: 'faded',
    orientation: 'landscape',
    presentation: 'pair',
    techniques: ['fadeRestoration', 'recrop', 'personRemoval'],
  },
  {
    id: '17_wedding_closeup',
    category: 'wedding',
    orientation: 'landscape',
    presentation: 'slider',
    align: { scale: 0.99, x: 0.25, y: -1.25 },
    afterPosition: '50% 35%',
  },
  {
    id: '18_wedding_with_parents',
    category: 'wedding',
    orientation: 'portrait',
    presentation: 'slider',
    align: { scale: 1.065, x: 4, y: -6.5 },
    afterPosition: '50% 30%',
  },
  {
    id: '19_wedding_four_people',
    category: 'wedding',
    orientation: 'portrait',
    presentation: 'slider',
    align: { scale: 1.1, x: 7.25, y: -6.5 },
  },
  {
    id: '20_lakeside_family',
    category: 'damaged',
    orientation: 'landscape',
    presentation: 'slider',
    align: { scale: 1.18, x: 0.25, y: -2.75 },
    afterPosition: '70% 60%',
  },
  { id: '21_two_boys_hedge', category: 'damaged', orientation: 'landscape', presentation: 'pair' },
  { id: '22_boy_sky', category: 'rephotographed', orientation: 'portrait', presentation: 'pair' },
  {
    id: '23_elephant_monument',
    category: 'rephotographed',
    orientation: 'portrait',
    presentation: 'pair',
  },
  {
    id: '24_smiling_girl',
    category: 'rephotographed',
    orientation: 'portrait',
    presentation: 'pair',
  },
  {
    id: '25_coastal_woman',
    category: 'rephotographed',
    orientation: 'portrait',
    presentation: 'pair',
  },
  {
    id: '26_woman_with_two_boys',
    category: 'rephotographed',
    orientation: 'portrait',
    presentation: 'pair',
  },
  {
    id: '27_double_happiness_portrait',
    category: 'faded',
    orientation: 'portrait',
    presentation: 'slider',
    align: { scale: 1.065, x: 4.5, y: -6 },
  },
] as const satisfies readonly Restoration[];

export const restorations: Record<PairId, Restoration> = Object.fromEntries(
  all.map((item) => [item.id, item]),
) as Record<PairId, Restoration>;

const pick = (ids: PairId[]) => ids.map((id) => restorations[id]);

/**
 * Page layout. Each slot lists pair ids, so re-curating the gallery is a
 * one-line change here. 13_badminton_portrait_scan_2 is a second scan of 08
 * and is intentionally unused. Slider slots (hero, featureRows, immersive)
 * must use pairs with `presentation: 'slider'`.
 */
export const layout = {
  hero: restorations['17_wedding_closeup'],
  /** Two rows of large sliders: [landscape, portrait] then [portrait, landscape]. */
  featureRows: [
    pick(['08_badminton_portrait_scan_1', '19_wedding_four_people']),
    pick(['27_double_happiness_portrait', '20_lakeside_family']),
  ],
  immersive: restorations['12_village_portrait'],
  rephotographed: pick(['24_smiling_girl', '22_boy_sky', '26_woman_with_two_boys']),
  /**
   * Pair cards. On wide screens a landscape pair fills a row and portrait
   * pairs sit two to a row, so keep portrait ids in twos between landscapes.
   */
  more: pick([
    '16_couple_with_baby',
    '14_two_girls_studio',
    '10_chien_thang_group',
    '02_wedding_preparations',
    '06_two_women_garden',
    '05_two_friends_full_length',
    '15_mother_and_child',
    '11_rooftop_portrait',
    '23_elephant_monument',
    '21_two_boys_hedge',
    '03_tropical_garden',
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

/** Every pair the lightbox can step through, in page order. One step = one pair. */
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

/** object-position for one photo of a pair inside its frame. */
export function objectPosition(item: Restoration, kind: ImageKind): string {
  const position =
    kind === 'before' ? (item.beforePosition ?? item.afterPosition) : item.afterPosition;
  return position ?? '50% 50%';
}

/** "40% 62%" -> [0.4, 0.62]. Only two percentages are supported. */
export function positionFractions(position: string): [number, number] {
  const match = /^(\d+(?:\.\d+)?)% (\d+(?:\.\d+)?)%$/.exec(position);
  if (!match) throw new Error(`Unsupported object-position: ${position}`);
  return [Number(match[1]) / 100, Number(match[2]) / 100];
}

/**
 * Transforms that register the original onto the restoration inside a
 * slider. `zoom` enlarges both photos just enough that the shifted original
 * still covers the whole frame, so no empty edge shows.
 */
export function sliderTransforms(align: Alignment | undefined) {
  if (!align) return { zoom: 1, before: undefined };
  const { scale, x, y } = align;
  const cover = (shift: number) => 1 / (scale - (2 * Math.abs(shift)) / 100);
  return {
    zoom: Math.round(Math.max(1, cover(x), cover(y)) * 1000) / 1000,
    before: `translate(${x}%, ${y}%) scale(${scale})`,
  };
}
