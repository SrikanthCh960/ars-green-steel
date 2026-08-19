import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { AnalyticsInteractions } from "@/components/analytics-interactions";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { defaultSocialImage, isProductionSite, productionDomain, toProductionUrl } from "@/lib/site-metadata";
import { SiteFooter } from "@/components/site-footer";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaEnabled = process.env.NEXT_PUBLIC_GA_ENABLED === "true" && Boolean(gaId);
const gtmEnabled = process.env.NEXT_PUBLIC_GTM_ENABLED === "true" && Boolean(gtmId);
const analyticsEnabled = gaEnabled || gtmEnabled;

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
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content">{children}</div>
        <SiteFooter />
        <FloatingWhatsAppButton />
        {analyticsEnabled ? <AnalyticsInteractions /> : null}
      </body>
      {gaEnabled && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
