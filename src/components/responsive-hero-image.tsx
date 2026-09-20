import type { CSSProperties } from "react";

type ResponsiveHeroImageProps = {
  alt: string;
  desktopSrc: string;
  mobileSrc: string;
  className?: string;
  pictureClassName?: string;
  style?: CSSProperties;
};

/**
 * Serves pre-generated mobile and desktop hero assets without relying on the
 * runtime image optimizer. This keeps the existing direct-asset deployment
 * policy while allowing the browser to download only the appropriate source.
 */
export function ResponsiveHeroImage({
  alt,
  desktopSrc,
  mobileSrc,
  className = "object-cover",
  pictureClassName = "",
  style,
}: ResponsiveHeroImageProps) {
  return (
    <picture className={`absolute inset-0 block h-full w-full ${pictureClassName}`}>
      <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
      {/* Pre-generated assets make <picture> the correct art-direction primitive here. */}
      <img
        src={desktopSrc}
        alt={alt}
        decoding="async"
        fetchPriority="high"
        loading="eager"
        className={`h-full w-full ${className}`}
        style={style}
      />
    </picture>
  );
}
