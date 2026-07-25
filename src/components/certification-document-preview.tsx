"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CertificationDocumentPreviewProps = {
  title: string;
  image: string;
};

export function CertificationDocumentPreview({
  title,
  image,
}: CertificationDocumentPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closePreview() {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="focus-ring group relative block aspect-[4/3] w-full overflow-hidden bg-surface-100 text-left"
        aria-label={`Enlarge ${title}`}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
        />
        <span className="absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-brand-blue shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
          Enlarge document <Expand size={16} />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setIsOpen(false);
          requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        onCancel={(event) => {
          event.preventDefault();
          closePreview();
        }}
        className="m-auto max-h-[92vh] w-[min(92vw,980px)] overflow-hidden bg-transparent p-0 backdrop:bg-ink-950/85"
        aria-label={title}
      >
        <div className="relative flex max-h-[92vh] flex-col bg-white p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-display text-xl font-bold text-ink-900">{title}</h2>
            <button
              type="button"
              onClick={closePreview}
              className="focus-ring flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:bg-surface-100"
              aria-label="Close document preview"
            >
              <X size={20} />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto bg-surface-100 p-3">
            <Image
              src={image}
              alt={title}
              width={1100}
              height={1500}
              className="mx-auto h-auto max-h-[76vh] w-auto object-contain"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
