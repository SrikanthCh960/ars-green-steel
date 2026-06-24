import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
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

export function ContactCta(props: ContactCtaProps) {
  const eyebrow = props.eyebrow ?? "Get started today";
  const headline = props.headline ?? "Ready to source quality green steel?";
  const body =
    props.body ??
    "Talk to our team, check today's price, or find your nearest certified ARS dealer, all in one step.";
  const primaryLabel = props.primaryLabel ?? "Check today's price";
  const primaryHref = props.primaryHref ?? "/steel-price-today";
  const secondaryLabel = props.secondaryLabel ?? "Talk to sales";
  const secondaryHref = props.secondaryHref ?? "/contact";

  return (
    <>
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-brand-blue text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_16%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(13,43,110,1),rgba(16,53,132,0.96))]" />
        <div className="ars-container relative z-10 grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/42">
              {eyebrow}
            </p>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.3rem,4.2vw,4.5rem)] font-bold leading-[1.04] tracking-normal text-white">
              {props.headline ? (
                headline
              ) : (
                <>
                  Ready to source quality <span className="text-brand-red">green steel?</span>
                </>
              )}
            </h2>
            <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/58 md:text-lg">
              {body}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href={primaryHref}
              className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand-red px-8 text-base font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-[#c90f16]"
            >
              {primaryLabel} <ArrowRight size={19} />
            </Link>
            <Link
              href={secondaryHref}
              className="focus-ring inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/22 bg-white/[0.03] px-8 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-white/36 hover:bg-white/[0.08]"
            >
              <Phone size={18} /> {secondaryLabel}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
