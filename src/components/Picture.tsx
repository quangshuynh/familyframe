import { imageSources, type ImageKind, type Restoration } from '../data/restorations';

type Props = {
  item: Restoration;
  kind: ImageKind;
  alt: string;
  sizes: string;
  className?: string;
  /** Hero only: load eagerly with high fetch priority. */
  priority?: boolean;
};

/** Responsive AVIF/WebP picture with intrinsic size to prevent layout shift. */
export function Picture({ item, kind, alt, sizes, className, priority = false }: Props) {
  const src = imageSources(item, kind);
  return (
    <picture>
      <source type="image/avif" srcSet={src.avif} sizes={sizes} />
      <source type="image/webp" srcSet={src.webp} sizes={sizes} />
      <img
        className={className}
        src={src.fallback}
        width={src.width}
        height={src.height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        draggable={false}
        style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
      />
    </picture>
  );
}
