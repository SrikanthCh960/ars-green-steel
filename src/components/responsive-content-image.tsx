import Image, { type ImageProps } from "next/image";

type ResponsiveContentImageProps = Omit<ImageProps, "sizes" | "src"> & {
  avifSrcSet: string;
  fallbackSrc: string;
  pictureClassName?: string;
  sizes: string;
  webpSrcSet: string;
};

/**
 * Uses pre-generated sources for responsive content photography while the
 * production deployment intentionally serves public assets without Next's
 * runtime image optimizer.
 */
export function ResponsiveContentImage({
  alt,
  avifSrcSet,
  fallbackSrc,
  pictureClassName = "",
  sizes,
  webpSrcSet,
  ...imageProps
}: ResponsiveContentImageProps) {
  return (
    <picture className={`absolute inset-0 block h-full w-full ${pictureClassName}`}>
      <source srcSet={avifSrcSet} sizes={sizes} type="image/avif" />
      <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" />
      <Image {...imageProps} src={fallbackSrc} alt={alt} sizes={sizes} />
    </picture>
  );
}
