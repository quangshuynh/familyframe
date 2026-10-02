import { describe, expect, it } from 'vitest';
import { dictionaries, LOCALES } from '../i18n/config';
import {
  galleryOrder,
  IMAGE_WIDTHS,
  INTRINSIC_SIZE,
  FRAME_RATIO,
  imageSources,
  layout,
  objectPosition,
  positionFractions,
  restorations,
  sliderTransforms,
} from './restorations';

const all = Object.values(restorations);
// Lazy glob: only the matching file names are needed, nothing is loaded.
const publicFiles = new Set(
  Object.keys(import.meta.glob('/public/restorations/*/*.{avif,webp}')).map((file) =>
    file.replace('/public', ''),
  ),
);

describe('restoration data', () => {
  it('has unique ids that match their key', () => {
    for (const [key, item] of Object.entries(restorations)) expect(item.id).toBe(key);
    expect(new Set(all.map((item) => item.id)).size).toBe(all.length);
  });

  it('every pair has optimized before and after files for every width', () => {
    for (const item of all) {
      for (const kind of ['before', 'after'] as const) {
        for (const width of IMAGE_WIDTHS[item.orientation]) {
          for (const ext of ['avif', 'webp']) {
            const file = `/restorations/${item.id}/${kind}-${width}.${ext}`;
            expect(publicFiles.has(file), file).toBe(true);
          }
        }
        expect(imageSources(item, kind).fallback).toMatch(new RegExp(`/${item.id}/${kind}-`));
      }
    }
  });

  it('frames and intrinsic sizes agree on the aspect ratio', () => {
    for (const orientation of ['portrait', 'landscape'] as const) {
      const { width, height } = INTRINSIC_SIZE[orientation];
      expect(width / height).toBeCloseTo(FRAME_RATIO[orientation], 2);
    }
  });

  it('object positions are valid percentage pairs', () => {
    for (const item of all) {
      for (const kind of ['before', 'after'] as const) {
        const [x, y] = positionFractions(objectPosition(item, kind));
        expect(x, item.id).toBeGreaterThanOrEqual(0);
        expect(x, item.id).toBeLessThanOrEqual(1);
        expect(y, item.id).toBeGreaterThanOrEqual(0);
        expect(y, item.id).toBeLessThanOrEqual(1);
      }
    }
    expect(() => positionFractions('center top')).toThrow();
  });

  it('alignments are small, plausible corrections', () => {
    for (const item of all) {
      if (!item.align) continue;
      expect(item.presentation, item.id).toBe('slider');
      expect(item.align.scale, item.id).toBeGreaterThan(0.9);
      expect(item.align.scale, item.id).toBeLessThan(1.25);
      expect(Math.abs(item.align.x), item.id).toBeLessThan(10);
      expect(Math.abs(item.align.y), item.id).toBeLessThan(10);
    }
  });

  it('slider zoom always lets the shifted original cover the frame', () => {
    for (const item of all) {
      const { zoom } = sliderTransforms(item.align);
      expect(zoom).toBeGreaterThanOrEqual(1);
      expect(zoom, item.id).toBeLessThan(1.1);
      if (!item.align) continue;
      const { scale, x, y } = item.align;
      for (const shift of [x, y]) {
        // Half the original's size, minus its shift, must reach the frame edge after zoom.
        expect(scale / 2 - Math.abs(shift) / 100 + 1e-3).toBeGreaterThanOrEqual(0.5 / zoom);
      }
    }
    expect(sliderTransforms(undefined)).toEqual({ zoom: 1, before: undefined });
  });

  it('only uses sliders where the photos line up', () => {
    const sliderSlots = [layout.hero, layout.immersive, ...layout.featureRows.flat()];
    for (const item of sliderSlots) expect(item.presentation, item.id).toBe('slider');
  });

  it('shows at most three techniques that exist in every locale', () => {
    for (const item of all) {
      expect((item.techniques ?? []).length, item.id).toBeLessThanOrEqual(3);
      for (const technique of item.techniques ?? []) {
        for (const locale of LOCALES) {
          expect(dictionaries[locale].gallery.techniques[technique].trim()).not.toBe('');
        }
      }
    }
  });

  it('every pair has a title, alt text and (where given) a description in every locale', () => {
    for (const locale of LOCALES) {
      for (const item of all) {
        const pair = dictionaries[locale].pairs[item.id];
        expect(pair.title.trim(), `${locale}:${item.id}`).not.toBe('');
        expect(pair.alt.trim(), `${locale}:${item.id}`).not.toBe('');
        const hasDescription = 'description' in dictionaries.vi.pairs[item.id];
        expect('description' in pair, `${locale}:${item.id}`).toBe(hasDescription);
      }
    }
  });

  it('describes the corrected restorations accurately', () => {
    const en = dictionaries.en.pairs;
    expect(en['16_couple_with_baby']).toMatchObject({
      description: expect.stringMatching(/recropped.*removed distracting people.*centered/),
    });
    expect(en['15_mother_and_child']).toMatchObject({
      description: expect.stringMatching(/eye alignment/),
    });
    expect(en['15_mother_and_child'].description).not.toMatch(/rebuil|reconstruct|replac/i);
    expect(en['14_two_girls_studio']).toMatchObject({
      description: expect.stringMatching(/Colorized.*upper-right/),
    });
  });

  it('lists each gallery pair once', () => {
    const ids = galleryOrder.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
