const words = ["STRENGTH", "SAFETY", "TRUST", "GREEN STEEL"];

export function AnimatedHeroWord() {
  return (
    <span className="hero-word-rotator relative block min-h-[0.95em] overflow-hidden text-brand-red" aria-label="strength safety trust green steel">
      {words.map((word, index) => (
        <span
          key={word}
          className="hero-feature-word hero-word-item absolute inset-0 block"
          style={{ animationDelay: `${index * 1.9}s` }}
          aria-hidden={index !== 0}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
