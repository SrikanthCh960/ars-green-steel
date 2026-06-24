"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Calculator, Factory, Home, MapPin, ShieldCheck, Store } from "lucide-react";
import { useState } from "react";
import { SectionKicker } from "@/components/section-kicker";

const audienceData = [
  {
    label: "Home owners",
    eyebrow: "Build with confidence",
    headline: "Know what steel your home is built on.",
    body: "Simple product guidance, today’s price, quantity estimation, and nearby dealer discovery for first-time builders.",
    quote: "I need steel that my engineer trusts, my contractor can source, and my family can depend on.",
    cards: [
      { title: "Home build guide", value: "550D", text: "Recommended grade for safer residential construction." },
      { title: "Requirement estimate", value: "TMT calculator", text: "Turn project size into a practical steel estimate." },
    ],
    stats: ["Clear pricing", "Dealer near site", "Engineer-ready proof"],
    icon: Home,
  },
  {
    label: "Engineers",
    eyebrow: "Technical confidence",
    headline: "Every recommendation backed by proof.",
    body: "Fast access to grades, test standards, certifications, applications, and compliance details for specification decisions.",
    quote: "I want product data, certificates, and performance claims in one place before I specify a material.",
    cards: [
      { title: "Technical proof", value: "SGS", text: "Certification and testing context surfaced early." },
      { title: "Specification support", value: "CRS 550D", text: "Corrosion-resistant use cases for coastal projects." },
    ],
    stats: ["Grade data", "Certificates", "Applications"],
    icon: ShieldCheck,
  },
  {
    label: "Dealers",
    eyebrow: "Business visibility",
    headline: "A clearer path from enquiry to supply.",
    body: "Dealer pages should support availability, sales enquiries, regional visibility, and distributor confidence.",
    quote: "I need quick enquiries, clear product demand, and a brand experience that supports local sales.",
    cards: [
      { title: "Retail flow", value: "Quote-ready", text: "Turn site visitors into dealer enquiries." },
      { title: "Network presence", value: "Locator", text: "Make nearby dealers easy to find and contact." },
    ],
    stats: ["Lead capture", "Region filter", "WhatsApp-ready"],
    icon: Store,
  },
  {
    label: "Contractors",
    eyebrow: "Site-ready decisions",
    headline: "Move faster from planning to procurement.",
    body: "Contractors need price, stock confidence, bar sizes, quantity support, and direct contact routes without digging through pages.",
    quote: "When I am planning a site, I need price, size, availability, and a contact path fast.",
    cards: [
      { title: "Procurement flow", value: "Price + dealer", text: "Connect price checks to dealer discovery." },
      { title: "Site planning", value: "Sizes", text: "Make bar size and usage decisions easier." },
    ],
    stats: ["Fast quote", "Bar sizes", "Bulk enquiry"],
    icon: Factory,
  },
];

export function AudiencePaths() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = audienceData[activeIndex];
  const Icon = active.icon;

  return (
    <section className="bg-[#f8f9fb] py-24 text-ink-900">
      <div className="ars-container">
        <div className="mb-14 max-w-4xl">
          <SectionKicker>Audience paths</SectionKicker>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-normal sm:text-5xl">
            One website, four clear journeys.
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel-700">
            Route each visitor to the proof, tools, and actions they need without making them decode the same generic pages.
          </p>
        </div>

        <div className="mb-14 border-b border-ink-900/14">
          <div className="grid gap-0 md:grid-cols-4">
            {audienceData.map((item, index) => (
              <button
                key={item.label}
                className="group relative px-3 py-5 text-left text-base font-semibold text-steel-700 transition hover:text-brand-blue md:text-center"
                type="button"
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-[-1px] left-0 h-[3px] bg-brand-blue transition-all duration-300 md:left-1/2 md:-translate-x-1/2 ${
                    activeIndex === index ? "w-full md:w-[78%]" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.label}
            className="grid gap-7 lg:grid-cols-[1.05fr_0.82fr_0.72fr] lg:items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-ink-950 shadow-[0_24px_70px_rgba(21,23,25,0.12)]">
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-72"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/ars-intro.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-ink-950/72 via-ink-950/36 to-brand-blue/24" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-2 text-sm backdrop-blur">
                  <Icon size={16} className="text-white" />
                  {active.eyebrow}
                </div>
                <h3 className="max-w-xl font-display text-4xl font-bold leading-tight">{active.headline}</h3>
              </div>
            </div>

            <div className="grid gap-5">
              {active.cards.map((card) => (
                <article key={card.title} className="rounded-[8px] border border-ink-900/10 bg-white p-6 text-ink-900 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
                  <div className="mb-8 flex items-center justify-between text-sm font-semibold text-steel-700">
                    <span>{card.title}</span>
                    <BadgeCheck size={18} className="text-brand-blue" />
                  </div>
                  <p className="font-display text-3xl font-bold">{card.value}</p>
                  <p className="mt-4 text-sm leading-6 text-steel-700">{card.text}</p>
                </article>
              ))}
              <div className="rounded-[8px] border border-ink-900/10 bg-white/70 p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-foundation-blue">
                  <Calculator size={17} />
                  Recommended next steps
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.stats.map((stat) => (
                    <span key={stat} className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-sm font-semibold text-steel-700">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-[8px] border border-ink-900/12 bg-white p-8">
              <p className="text-5xl leading-none text-brand-blue">“</p>
              <p className="mt-8 font-serif text-3xl leading-tight text-steel-700">{active.quote}</p>
              <a className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand-blue" href="#buying-assistant">
                View this journey <ArrowRight size={17} />
              </a>
              <div className="mt-10 border-t border-ink-900/10 pt-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-steel-700">
                  <MapPin size={17} className="text-brand-blue" />
                  Connects to pricing, calculator, dealer locator, and enquiry.
                </div>
              </div>
            </aside>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
