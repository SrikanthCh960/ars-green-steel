import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

type ContactCtaProps = {
  eyebrow?: string;
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ContactCta({
  eyebrow = "Contact ARS",
  headline = "Ready to move from planning to supply?",
  body = "Start with a quote, call sales, or find the right dealer path for your site.",
  primaryLabel = "Request quote",
  primaryHref = "/request-quote",
  secondaryLabel = "Call sales",
  secondaryHref = "tel:+919710411111",
}: ContactCtaProps) {
  return (
    <section className="border-t border-ink-900/10 bg-white py-16 text-ink-900" id="contact">
      <div className="ars-container">
        <div className="grid gap-10 border-b border-ink-900/10 pb-12 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div>
            <p className="font-technical text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
              {eyebrow}
            </p>
            <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,4.7vw,5.5rem)] font-black uppercase leading-[0.94] tracking-normal">
              {headline}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-700">
              {body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 font-semibold text-white transition hover:bg-brand-blue-dark" href={primaryHref}>
              <MessageCircle size={18} /> {primaryLabel}
            </a>
            <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/15 px-5 font-semibold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue" href={secondaryHref}>
              <Phone size={18} /> {secondaryLabel}
              {secondaryHref.startsWith("/") ? <ArrowRight size={16} /> : null}
            </a>
          </div>
        </div>

        <SiteFooter />
        <div className="mt-10 border-t border-ink-900/10 pt-6 text-sm text-steel-700">
          ARS Green Steel · Built for trust, engineered for stronger structures.
        </div>
      </div>
    </section>
  );
}
