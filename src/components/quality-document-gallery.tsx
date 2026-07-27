"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const documents = [
  {
    title: "Quality Management System",
    detail: "ISO 9001:2015",
    image: "/ars-assets/certifications/previews/iso-9001.png",
  },
  {
    title: "Independent Testing Report",
    detail: "Quality verification reference",
    image: "/ars-assets/certifications/previews/tmt-renewal.png",
  },
  {
    title: "Environmental Management System",
    detail: "ISO 14001:2015",
    image: "/ars-assets/certifications/previews/iso-14001.png",
  },
  {
    title: "Environmental Product Declaration",
    detail: "EPD Verified",
    image: "/ars-assets/certifications/previews/epd-certificate.png",
  },
  {
    title: "Green Steel Taxonomy",
    detail: "NISST certification",
    image: "/ars-assets/certifications/previews/nisst-green-steel-certificate.png",
  },
  {
    title: "GRIHA Product Listing",
    detail: "Green building material recognition",
    image: "/ars-assets/certifications/previews/griha-certificate.png",
  },
  {
    title: "SGBC Leader Rating",
    detail: "Green product certification",
    image: "/ars-assets/certifications/previews/sgbc-certificate.png",
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
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {documents.map((document) => (
          <button
            key={document.title}
            type="button"
            onClick={() => setActiveDocument(document)}
            className="focus-ring group flex min-h-60 w-56 shrink-0 snap-start flex-col overflow-hidden border border-brand-blue/10 bg-white text-left shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-brand-blue/30"
            aria-label={`Enlarge ${document.title}`}
          >
            <span className="relative h-32 shrink-0 overflow-hidden bg-surface-100">
              <Image
                src={document.image}
                alt=""
                fill
                sizes="224px"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </span>
            <span className="flex flex-1 flex-col justify-between p-5">
              <span>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-red">
                  Quality document
                </span>
                <strong className="mt-3 block font-display text-lg leading-tight text-ink-900">
                  {document.title}
                </strong>
                <span className="mt-2 block text-[14px] text-grey-600">{document.detail}</span>
              </span>
              <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-brand-blue">
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
