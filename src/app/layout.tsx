import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { AnalyticsInteractions } from "@/components/analytics-interactions";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { analyticsConfig } from "@/lib/analytics-config";
import { defaultSocialImage, isProductionSite, productionDomain, toProductionUrl } from "@/lib/site-metadata";
import { SiteFooter } from "@/components/site-footer";

const gaId = analyticsConfig.ga4.measurementId;
const gtmId = analyticsConfig.gtm.containerId;
const metaPixelId = analyticsConfig.metaPixel.pixelId;
const gaEnabled = analyticsConfig.ga4.enabled && Boolean(gaId);
const gtmEnabled = analyticsConfig.gtm.enabled && Boolean(gtmId);
const metaPixelEnabled = analyticsConfig.metaPixel.enabled && Boolean(metaPixelId);
const analyticsEnabled = gaEnabled || gtmEnabled || metaPixelEnabled;

export const metadata: Metadata = {
  metadataBase: new URL(productionDomain),
  title: {
    default: "ARS Group | Certified TMT Steel",
    // Page titles in the migrated application already include the brand suffix.
    template: "%s",
  },
  description:
    "Modern website prototype for ARS Group, focused on certified TMT steel, dealer discovery, pricing, and construction confidence.",
  applicationName: "ARS Green Steel",
  openGraph: {
    title: "ARS Group | Certified TMT Steel",
    description:
      "Certified TMT steel, dealer discovery, pricing, and construction confidence from ARS Green Steel.",
    url: productionDomain,
    siteName: "ARS Green Steel",
    type: "website",
    images: [{ url: toProductionUrl(defaultSocialImage) }],
  },
  twitter: {
    card: "summary_large_image",
    images: [toProductionUrl(defaultSocialImage)],
  },
  robots: {
    index: isProductionSite,
    follow: isProductionSite,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {metaPixelEnabled && metaPixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`}
          </Script>
        ) : null}
      </head>
      {gtmEnabled && gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="min-h-full">
        {gtmEnabled && gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`}
              height="0"
              width="0"
              className="hidden invisible"
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        {metaPixelEnabled && metaPixelId ? (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              height="1"
              width="1"
              className="hidden"
              src={`https://www.facebook.com/tr?id=${encodeURIComponent(metaPixelId)}&ev=PageView&noscript=1`}
            />
          </noscript>
        ) : null}
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content">{children}</div>
        <SiteFooter />
        <FloatingWhatsAppButton />
        {analyticsEnabled ? (
          <Suspense fallback={null}>
            <AnalyticsInteractions />
          </Suspense>
        ) : null}
      </body>
      {gaEnabled && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
