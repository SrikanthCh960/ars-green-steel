import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arsgroup.in"),
  title: "ARS Group | Certified TMT Steel",
  description:
    "Modern website prototype for ARS Group, focused on certified TMT steel, dealer discovery, pricing, and construction confidence.",
  applicationName: "ARS Green Steel",
  openGraph: {
    title: "ARS Group | Certified TMT Steel",
    description:
      "Certified TMT steel, dealer discovery, pricing, and construction confidence from ARS Green Steel.",
    url: "https://arsgroup.in",
    siteName: "ARS Green Steel",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
