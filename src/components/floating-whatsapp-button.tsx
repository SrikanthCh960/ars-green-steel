"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { verifiedContactDetails } from "@/data/business-verification";

const whatsappMessage =
  "Hello ARS, I would like assistance with TMT steel for my project.";

export function FloatingWhatsAppButton() {
  const [footerIsVisible, setFooterIsVisible] = useState(false);
  const [blockingSurfaceIsOpen, setBlockingSurfaceIsOpen] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const footerElement = footer;

    let frameId = 0;

    function updateFooterVisibility() {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const footerBounds = footerElement.getBoundingClientRect();
        setFooterIsVisible(
          footerBounds.top < window.innerHeight && footerBounds.bottom > 0,
        );
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => setFooterIsVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );

    observer.observe(footerElement);
    window.addEventListener("resize", updateFooterVisibility);
    window.addEventListener("scroll", updateFooterVisibility, { passive: true });
    updateFooterVisibility();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", updateFooterVisibility);
      window.removeEventListener("scroll", updateFooterVisibility);
    };
  }, []);

  useEffect(() => {
    function updateBlockingSurfaceState() {
      setBlockingSurfaceIsOpen(
        Boolean(
          document.querySelector(
            'header [aria-expanded="true"][aria-controls], [aria-modal="true"], dialog[open]',
          ),
        ),
      );
    }

    const observer = new MutationObserver(updateBlockingSurfaceState);
    observer.observe(document.body, {
      attributeFilter: ["aria-expanded", "aria-modal", "open"],
      attributes: true,
      childList: true,
      subtree: true,
    });
    updateBlockingSurfaceState();

    return () => observer.disconnect();
  }, []);

  if (footerIsVisible || blockingSurfaceIsOpen) return null;

  const whatsappNumber = verifiedContactDetails.mobile.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pointer-events-none fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-40 md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] md:right-[calc(1.5rem+env(safe-area-inset-right))]">
      <a
        aria-label="Chat with ARS on WhatsApp"
        className="focus-ring group pointer-events-auto relative inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(6,13,30,0.24)] transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-[0_14px_34px_rgba(6,13,30,0.3)] active:translate-y-0 active:scale-95"
        data-analytics-event="whatsapp_click"
        data-analytics-label="chat_on_whatsapp"
        data-analytics-location="floating_whatsapp"
        href={whatsappHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaWhatsapp aria-hidden="true" className="size-8" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-[var(--bg-dark)] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100 md:block"
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
