"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const documents = [
  {
    title: "Quality Management System",
    detail: "ISO 9001:2015",
    image: "/ars-assets/awards-certificates-img2.png",
  },
  {
    title: "Independent Testing Report",
    detail: "Quality verification reference",
    image: "/ars-assets/awards-certificates-img3.png",
  },
];

export function QualityDocumentGallery() {
  const [activeDocument, setActiveDocument] = useState<(typeof documents)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeDocument && !dialog.open) dialog.showModal();
    if (!activeDocument && dialog.open) dialog.close();
  }, [activeDocument]);

  return (
    <>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {documents.map((document) => (
          <button
            key={document.title}
            type="button"
            onClick={() => setActiveDocument(document)}
            className="focus-ring group grid min-h-56 overflow-hidden border border-brand-blue/10 bg-white text-left shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-brand-blue/30 md:grid-cols-[0.72fr_1.28fr]"
            aria-label={`Enlarge ${document.title}`}
          >
            <span className="relative min-h-64 overflow-hidden bg-surface-100">
              <Image
                src={document.image}
                alt=""
                fill
                sizes="(min-width: 768px) 24vw, 100vw"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </span>
            <span className="flex flex-col justify-between p-7">
              <span>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-red">
                  Quality document
                </span>
                <strong className="mt-4 block font-display text-[1.5rem] leading-tight text-ink-900">
                  {document.title}
                </strong>
                <span className="mt-2 block text-[14px] text-grey-600">{document.detail}</span>
              </span>
              <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-bold text-brand-blue">
                Enlarge document <Expand size={16} />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveDocument(null)}
        onCancel={() => setActiveDocument(null)}
        className="m-auto max-h-[92vh] w-[min(92vw,980px)] overflow-hidden bg-transparent p-0 backdrop:bg-ink-950/85"
        aria-label={activeDocument?.title ?? "Quality document"}
      >
        {activeDocument ? (
          <div className="relative flex max-h-[92vh] flex-col bg-white p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-[1.1rem] font-bold text-ink-900">{activeDocument.title}</p>
                <p className="text-[13px] text-grey-600">{activeDocument.detail}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveDocument(null)}
                className="focus-ring flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:bg-surface-100"
                aria-label="Close document preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 overflow-auto bg-surface-100 p-3">
              <Image
                src={activeDocument.image}
                alt={`${activeDocument.title} — ${activeDocument.detail}`}
                width={1100}
                height={1500}
                className="mx-auto h-auto max-h-[76vh] w-auto object-contain"
              />
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
