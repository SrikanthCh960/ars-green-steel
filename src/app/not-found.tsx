import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Calculator, MapPin, MessageSquare } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page Not Found | ARS Green Steel",
  robots: {
    index: false,
    follow: true,
  },
};

const recoveryLinks = [
  { label: "Find a Dealer", href: "/our-network", icon: MapPin },
  { label: "TMT Calculator", href: "/tmt-steel-calculator", icon: Calculator },
  { label: "Explore Projects", href: "/projects", icon: Building2 },
  { label: "Contact ARS", href: "/contact", icon: MessageSquare },
] as const;

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-76px)] overflow-hidden bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="relative isolate flex min-h-[calc(100vh-76px)] items-center overflow-hidden py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="absolute inset-x-[8%] inset-y-0 border-x border-brand-blue/[0.06]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-[18%] h-px bg-brand-blue/[0.06]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-[16%] h-px bg-brand-blue/[0.06]" />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(12rem,34vw,36rem)] font-extrabold leading-none tracking-[-0.09em] text-brand-red/[0.055]"
        >
          404
        </p>

        <div className="ars-container relative z-10 w-full">
          <div className="mx-auto max-w-3xl text-center">
            <SectionKicker align="center" variant="brand">Page not found</SectionKicker>
            <h1 className="mx-auto mt-7 text-ink-900">
              We couldn&apos;t find that page.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-steel-700 sm:text-lg sm:leading-9">
              The link may be outdated, or the page may no longer be available. Continue exploring
              ARS Green Steel.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[6px] bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                href="/"
              >
                Back to Homepage
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[6px] border border-brand-blue/25 bg-white px-6 py-3 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-surface-100"
                href="/products"
              >
                Explore Products
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>

          <nav aria-labelledby="recovery-links-heading" className="mx-auto mt-14 max-w-4xl border-t border-brand-blue/15 pt-7 sm:mt-16">
            <p
              id="recovery-links-heading"
              className="text-center font-technical text-[11px] font-bold uppercase tracking-[0.2em] text-steel-700"
            >
              Continue your journey
            </p>
            <ul className="mt-5 grid border-y border-brand-blue/15 sm:grid-cols-2 sm:divide-x sm:divide-brand-blue/15 lg:grid-cols-4">
              {recoveryLinks.map(({ label, href, icon: Icon }, index) => (
                <li
                  key={href}
                  className={
                    index === 0
                      ? ""
                      : index === 1 || index === 3
                        ? "border-t border-brand-blue/15 sm:border-t-0"
                        : "border-t border-brand-blue/15 lg:border-t-0"
                  }
                >
                  <Link
                    className="focus-ring group flex min-h-14 items-center gap-3 px-1 py-4 text-sm font-bold text-brand-blue transition-colors duration-200 ease-out hover:text-brand-blue-dark focus-visible:text-brand-blue-dark sm:px-4 lg:justify-center"
                    href={href}
                  >
                    <Icon
                      aria-hidden="true"
                      className="shrink-0 text-brand-blue transition-colors duration-200 ease-out group-hover:text-brand-blue-dark group-focus-visible:text-brand-blue-dark"
                      size={17}
                    />
                    <span className="min-w-0 flex-1">{label}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="shrink-0 text-brand-red transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-brand-red-dark group-focus-visible:translate-x-1 group-focus-visible:text-brand-red-dark"
                      size={15}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
