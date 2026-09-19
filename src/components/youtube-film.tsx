"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

/** Lightweight poster until the visitor explicitly loads the YouTube player. */
export function YoutubeFilm({ videoId, title }: { videoId: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-ink-950">
      {active ? (
        <iframe
          onLoad={(event) => event.currentTarget.focus()}
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&rel=0`}
          title={title}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Load video: ${title}`}
          className="group absolute inset-0 flex size-full cursor-pointer items-center justify-center focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          <Image src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" fill unoptimized sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover" />
          <span className="absolute inset-0 bg-ink-950/20 transition group-hover:bg-ink-950/35" />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg transition group-hover:bg-brand-blue-dark md:size-20">
            <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 left-4 bg-ink-950/90 px-3 py-2 text-xs font-semibold text-white md:bottom-6 md:left-6">Watch commercial</span>
        </button>
      )}
    </div>
  );
}
