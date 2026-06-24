type SectionKickerVariant = "brand" | "light" | "green";
type SectionKickerAlign = "start" | "center";

type SectionKickerProps = {
  children: string;
  variant?: SectionKickerVariant;
  align?: SectionKickerAlign;
  className?: string;
  showEndLine?: boolean;
};

const variantClasses: Record<SectionKickerVariant, { line: string; text: string }> = {
  brand: {
    line: "section-kicker-line-red",
    text: "section-kicker-red",
  },
  light: {
    line: "section-kicker-line-light",
    text: "section-kicker-light",
  },
  green: {
    line: "section-kicker-line-green",
    text: "section-kicker-green",
  },
};

export function SectionKicker({
  children,
  variant = "brand",
  align = "start",
  className = "",
  showEndLine = false,
}: SectionKickerProps) {
  const styles = variantClasses[variant];
  const alignment = align === "center" ? "justify-center" : "";

  return (
    <div className={`section-kicker-row ${alignment} ${className}`.trim()}>
      <span className={`section-kicker-line ${styles.line}`} />
      <p className={`section-kicker ${styles.text}`}>{children}</p>
      {showEndLine ? <span className={`section-kicker-line ${styles.line}`} /> : null}
    </div>
  );
}
