"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { clientLogos } from "@/data/client-logos";

/**
 * Renders one semantic logo list on the server, then adds the visual-only copy
 * required for a seamless desktop loop after hydration. This avoids shipping
 * the duplicate list in the homepage HTML or RSC payload.
 */
export function HomepageClientMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    const group = track?.firstElementChild;
    if (!track || !group || track.children.length > 1) return;

    const duplicate = group.cloneNode(true) as HTMLElement;
    duplicate.setAttribute("aria-hidden", "true");
    track.append(duplicate);
    track.classList.add("marquee-right");

    return () => {
      duplicate.remove();
      track.classList.remove("marquee-right");
    };
  }, []);

  return (
    <div className="homepage-client-marquee" aria-label="ARS clients">
      <div className="marquee-frame">
        <div ref={trackRef} className="marquee-track">
          <ul className="homepage-client-marquee-group">
            {clientLogos.map((client) => (
              <li
                key={client.name}
                className="flex h-20 w-44 shrink-0 items-center justify-center rounded-[10px] border border-ink-900/8 bg-white p-3"
              >
                <Image
                  src={client.homepageSrc}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="max-h-12 max-w-32 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
