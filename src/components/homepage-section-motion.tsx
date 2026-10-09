import type { ComponentPropsWithoutRef, ReactNode } from "react";

type HomepageSectionMotionProps = ComponentPropsWithoutRef<"section">;

type HomepageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Server-rendered homepage wrapper. CSS view-timeline motion is progressive
 * enhancement only, keeping content visible without hydration or observers.
 */
export function HomepageSectionMotion({
  children,
  className = "",
  ...props
}: HomepageSectionMotionProps) {
  return (
    <section
      {...props}
      className={className}
      data-homepage-motion="section"
    >
      {children}
    </section>
  );
}

/** Homepage content wrapper; delay and y remain accepted for API compatibility. */
export function HomepageReveal({ children, className }: HomepageRevealProps) {
  return (
    <div className={className} data-homepage-motion="content">
      {children}
    </div>
  );
}

/** Homepage visual wrapper with an optional CSS-only scale enhancement. */
export function HomepageImageReveal({ children, className }: Omit<HomepageRevealProps, "y">) {
  return (
    <div className={className} data-homepage-motion="image">
      {children}
    </div>
  );
}
