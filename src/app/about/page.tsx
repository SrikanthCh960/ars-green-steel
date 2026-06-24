import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  Factory,
  Handshake,
  Leaf,
  Network,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { MotionSection } from "@/components/motion-section";
import { SiteHeader } from "@/components/site-header";
import { verifiedContactDetails } from "@/data/business-verification";

export const metadata: Metadata = {
  title: "About ARS Green Steel",
  description:
    "Learn about ARS Green Steel's manufacturing strength, quality systems, dealer network, and trusted TMT steel legacy.",
};

const proofMetrics = [
  {
    kicker: "building trust since",
    value: "1992",
    label: "A long-running steel brand built around reliability, supply confidence, and construction trust.",
  },
  {
    kicker: "steel making capacity",
    value: "2.5L MT",
    label: "Manufacturing capability designed to support regional demand and project timelines.",
  },
  {
    kicker: "high-strength grade",
    value: "550D",
    label: "Product clarity for home owners, engineers, contractors, and procurement teams.",
  },
  {
    kicker: "quality proof",
    value: "SGS+",
    label: "Certification, quality systems, green readiness, and dealer confidence in one brand story.",
  },
];

const trustCards = [
  {
    title: "Manufacturing strength",
    text: "ARS should make plant capability, process discipline, and supply reliability visible before the sales conversation.",
    icon: Factory,
  },
  {
    title: "Certified quality",
    text: "Quality proof, certifications, and technical clarity help engineers and procurement teams verify the brand quickly.",
    icon: ShieldCheck,
  },
  {
    title: "Dealer confidence",
    text: "A visible dealer network supports faster local discovery, stronger enquiries, and easier purchase decisions.",
    icon: Network,
  },
];

const timeline = [
  {
    year: "1992",
    title: "Foundation of trust",
    text: "ARS begins building its reputation around dependable steel supply and construction confidence.",
  },
  {
    year: "550D",
    title: "Product clarity",
    text: "High-strength ductile TMT steel becomes the core proof point for safer residential and commercial structures.",
  },
  {
    year: "SGS",
    title: "Proof before claims",
    text: "Certification and quality checks become central to how ARS earns confidence from technical buyers.",
  },
  {
    year: "Next",
    title: "Green steel leadership",
    text: "The brand story expands toward sustainability, EPD readiness, and future-ready construction standards.",
  },
];

const commitments = [
  "Make product proof easier to find before visitors submit an enquiry.",
  "Support home owners, engineers, contractors, dealers, and procurement teams with clear pathways.",
  "Keep price, calculator, dealer, and quote actions close to every major trust section.",
];

const recoveredProof = [
  {
    title: "Product proof",
    text: "ARS 550D and ARS CRS 550D bring technical specs, physical and chemical properties, and FAQs into the product experience.",
  },
  {
    title: "Certification proof",
    text: "SGS, ISO, EPD, GRIHA, PWD, NHAI, renewal, and award proof make trust easier to evaluate.",
  },
  {
    title: "Testing proof",
    text: "Bend/rebend, martensite/ring, tensile, spectrometer, lab, and free on-site testing content remain critical.",
  },
  {
    title: "Buyer proof",
    text: "Price, calculator, dealer locator, quote, client proof, and project proof should stay close to each trust section.",
  },
];

const contactRecovery = [
  {
    title: "Customer helpline",
    value: verifiedContactDetails.mobile,
    note: "Primary customer and sales support number.",
    icon: Phone,
  },
  {
    title: "Project enquiry",
    value: verifiedContactDetails.mobile,
    note: "Use the sales helpline for project and bulk enquiries.",
    icon: ClipboardList,
  },
  {
    title: "Office and plant",
    value: "Corporate office and steel plant",
    note: "Address details are available on the Contact page.",
    icon: Building2,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-50 text-ink-900">
      <SiteHeader />

      <section className="relative flex min-h-[78vh] items-end overflow-hidden text-white">
        <div className="absolute inset-0 bg-ink-950">
          <div className="hero-video-placeholder absolute inset-0 h-full w-full" />
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-64"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/ars-intro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/78 to-ink-950/28" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,14,0.1),rgba(11,13,14,0.86))]" />
        </div>

        <div className="ars-container relative z-10 pb-16 pt-32">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_0.24fr] lg:items-end">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-grey-300 backdrop-blur">
                <span className="size-2 rounded-full bg-brand-blue" />
                About ARS Green Steel
              </div>
              <h1 className="max-w-6xl font-display text-[clamp(3rem,7.2vw,7.2rem)] font-black uppercase leading-[0.92] tracking-normal text-white">
                Built on trust.
                <span className="block">
                  Proven by <span className="font-serif italic text-brand-red">steel.</span>
                </span>
              </h1>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-grey-300 backdrop-blur">
                <ShieldCheck size={16} className="shrink-0 text-brand-blue" />
                Manufacturing, quality, and dealer proof
              </div>
              <p className="text-base leading-8 text-grey-300">
                ARS Green Steel should be understood through what serious buyers look for:
                reliable supply, certified quality, product clarity, and practical enquiry support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark" href="#contact">
                  Talk to sales <ArrowRight size={18} />
                </a>
                <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-white/35 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900" href="#manufacturing">
                  View manufacturing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-[#f8f9fb] py-24">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
            <div>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Track record
                </p>
              </div>
              <h2 className="max-w-full break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
                Confidence,{" "}
                <span className="mx-4 font-serif italic font-bold text-brand-red">earned</span>
                {" "}
                over time.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              The About page works like a trust gateway: enough history, proof, and
              capability to help serious visitors feel ready to enquire.
            </p>
          </div>

          <div className="grid border-y border-ink-900/14 md:grid-cols-4">
            {proofMetrics.map((metric) => (
              <article
                key={metric.kicker}
                className="border-b border-ink-900/14 px-0 py-9 md:border-b-0 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0"
              >
                <div className="mb-7 flex items-center gap-2">
                  <span className="text-brand-blue">→</span>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-grey-600">
                    {metric.kicker}
                  </p>
                </div>
                <p className="font-display text-[clamp(3.2rem,5vw,6.2rem)] font-black leading-none text-ink-900">
                  {metric.value}
                </p>
                <p className="mt-6 max-w-xs text-base leading-7 text-steel-700">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Company story
                </p>
              </div>
              <h2 className="break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal">
                A steel brand made for real structures.
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="text-xl leading-9 text-steel-700">
                ARS Green Steel is positioned as a modern industrial steel brand with a clear promise:
                give every buyer the proof, product clarity, and supply confidence they need before
                they commit.
              </p>
              <div className="grid gap-5 md:grid-cols-3">
                {trustCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article key={card.title} className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
                      <span className="mb-8 inline-flex size-12 items-center justify-center rounded-[8px] bg-white text-brand-blue ring-1 ring-ink-900/8">
                        <Icon size={21} />
                      </span>
                      <h3 className="font-display text-2xl font-black tracking-normal text-ink-900">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-steel-700">{card.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f8f9fb] py-24">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Critical recovered proof
                </p>
              </div>
              <h2 className="max-w-5xl break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal">
                Trust content that cannot be lost.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              The About page should make the business-critical proof visible without turning into
              a document archive. Detailed pages can carry the full data.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {recoveredProof.map((item, index) => (
              <article key={item.title} className="rounded-[8px] border border-ink-900/10 bg-white p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue">
                    0{index + 1}
                  </span>
                  <ShieldCheck size={20} className="text-green-steel" />
                </div>
                <h3 className="font-display text-2xl font-black tracking-normal text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-steel-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#fffdfa] py-24" id="manufacturing">
        <div className="ars-container">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
            <div>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Manufacturing strength
                </p>
              </div>
              <h2 className="max-w-full break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal">
                Capability that supports trust at scale.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-steel-700">
              Manufacturing should not be hidden behind generic company copy. It is one of the
              strongest proof points for engineers, contractors, dealers, and procurement users.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-h-[440px] overflow-hidden rounded-[8px] bg-ink-950">
              <video className="h-full w-full object-cover opacity-78" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                <source src="/videos/ars-intro.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="grid gap-5">
              {commitments.map((item, index) => (
                <article key={item} className="rounded-[8px] border border-ink-900/10 bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue">
                      0{index + 1}
                    </span>
                    <BadgeCheck size={20} className="text-green-steel" />
                  </div>
                  <p className="text-lg font-semibold leading-8 text-ink-900">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24">
        <div className="ars-container">
          <div className="mb-14 max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-brand-blue" />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                Operating philosophy
              </p>
            </div>
            <h2 className="break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal">
              Proof before claims.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.title} className="flex min-h-[290px] flex-col justify-between rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-7">
                <div>
                  <p className="font-display text-5xl font-black leading-none text-ink-900">
                    {item.year}
                  </p>
                  <h3 className="mt-8 font-display text-2xl font-black tracking-normal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-steel-700">{item.text}</p>
                </div>
                <span className="mt-8 h-[2px] w-12 bg-brand-blue" />
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#f8f9fb] py-24">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[8px] border border-ink-900/10 bg-white p-8">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-brand-blue" />
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                    Dealer and green steel confidence
                  </p>
                </div>
                <h2 className="break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal">
                  Built for buyers who need clarity.
                </h2>
              </div>
              <p className="mt-8 text-lg leading-8 text-steel-700">
                ARS should connect its brand story to practical buyer confidence: local dealer
                access, technical proof, and green steel readiness.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { title: "Dealer network", icon: Handshake, text: "Supports local purchase confidence and faster enquiry-to-supply movement." },
                { title: "Green readiness", icon: Leaf, text: "Positions ARS for projects where sustainability and documentation matter." },
                { title: "Technical confidence", icon: ShieldCheck, text: "Helps engineers and procurement teams verify claims before the pitch." },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-[8px] border border-ink-900/10 bg-white p-6">
                    <Icon size={24} className="text-brand-blue" />
                    <h3 className="mt-10 font-display text-2xl font-black tracking-normal">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-steel-700">{item.text}</p>
                    <a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-blue" href="#contact">
                      Start conversation <ArrowRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-24" id="contact-proof">
        <div className="ars-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-blue" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
                  Contact access
                </p>
              </div>
              <h2 className="break-words font-display text-[clamp(2.15rem,3.6vw,3.5rem)] font-bold leading-[1.04] tracking-normal">
                Trust should end with a real path to ARS.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-steel-700">
                Strong contact access matters for buyers who are ready to discuss product,
                dealer, office, plant, or project requirements.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {contactRecovery.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
                    <Icon size={22} className="text-brand-blue" />
                    <h3 className="mt-8 font-display text-2xl font-black tracking-normal text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-lg font-semibold leading-7 text-ink-900">{item.value}</p>
                    <p className="mt-3 text-sm leading-6 text-steel-700">{item.note}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </MotionSection>

      <ContactCta
        eyebrow="Talk to ARS"
        headline="Ready to verify the right steel partner?"
        body="Contact the ARS team for product guidance, technical support, dealer information, or project enquiry support."
        primaryLabel="Talk to sales"
        primaryHref="/contact"
        secondaryLabel="Request quote"
        secondaryHref="/request-quote"
      />
    </main>
  );
}
