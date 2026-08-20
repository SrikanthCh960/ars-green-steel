"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackMetaPageView,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

function inferLinkLocation(anchor: HTMLAnchorElement) {
  if (anchor.dataset.analyticsLocation) return anchor.dataset.analyticsLocation;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  return "site";
}

export function AnalyticsInteractions() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    trackMetaPageView();
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const whatsappAnchor = event.target.closest<HTMLAnchorElement>(
        'a[data-analytics-event="whatsapp_click"]',
      );

      if (whatsappAnchor) {
        trackWhatsAppClick({
          pagePath: window.location.pathname,
          linkLocation:
            whatsappAnchor.dataset.analyticsLocation ?? "floating_whatsapp",
          linkText: whatsappAnchor.dataset.analyticsLabel ?? "chat_on_whatsapp",
        });
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!anchor) return;

      trackPhoneClick({
        pagePath: window.location.pathname,
        linkLocation: inferLinkLocation(anchor),
        linkText: anchor.dataset.analyticsLabel ?? "call_ars",
        phoneContext: anchor.dataset.analyticsContext ?? "business_phone",
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
