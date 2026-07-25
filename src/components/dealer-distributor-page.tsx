import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PackageCheck, Phone, ShieldCheck } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

const products = [
  {
    title: "ARS 550D",
    body: "Ideal for general residential, commercial, and infrastructure construction where high strength, excellent ductility, and reliable performance are essential.",
    href: "/products/ars-550d",
    image: "/ars-assets/TMT-Bars.png",
  },
  {
    title: "ARS CRS 550D",
    body: "Designed for projects exposed to high moisture, high salinity, and corrosive environments where enhanced corrosion resistance helps improve structural durability.",
    href: "/products/ars-crs-550d",
    image: "/ars-assets/CRS.png",
  },
];

export function DealerDistributorPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-[#060D1E] text-white">
        <div className="absolute inset-0">
          <Image
            src="/ars-assets/Contact_banner.png"
            alt="ARS team available for dealer and distributor enquiries"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/94 via-[#0D2B6E]/72 to-[#0D2B6E]/22" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/90 via-transparent to-[#060D1E]/12" />
        </div>

        <div className="ars-page-hero-content h-full ars-container relative flex items-end pb-10 pt-28 lg:pb-12">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-2 font-technical text-xs font-black uppercase tracking-[0.18em] text-white/78 backdrop-blur">
              <span className="size-2 rounded-full bg-brand-red" /> For Dealers &amp; Distributors
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.65rem,6vw,4.5rem)] font-bold uppercase leading-[1.03] tracking-normal">
              Grow Your Business with a
              <span className="block text-brand-red">Trusted TMT Steel Brand</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/76 md:text-base">
              Whether you operate a steel retail outlet, distribution network, or building materials business,
              partnering with the right TMT steel manufacturer can help you serve customers better, strengthen
              your reputation, and grow your business with confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex h-12 items-center justify-center gap-3 rounded-full bg-brand-red px-6 text-sm font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-[#c90f16] md:text-base"
              >
                Become a Dealer <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="focus-ring inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/28 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-blue md:text-base"
              >
                View product range <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <SectionKicker>Dealer Insights</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
              What Dealers Should Look for in a TMT Steel Brand
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-steel-700 lg:text-lg">
            The success of a dealership depends not only on competitive pricing, but also on consistent product
            quality, reliable supply, customer trust, and long-term business support. Choosing the right
            manufacturing partner helps you build lasting relationships with builders, contractors, engineers,
            and homeowners.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className="ars-container">
          <div className="max-w-3xl">
            <SectionKicker>ARS Products</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
              Products Your Customers Can Trust
            </h2>
            <p className="mt-5 text-base leading-8 text-steel-700">
              Offer customers a range of reinforcement solutions backed by consistent manufacturing quality and
              recognised certifications.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="focus-ring group grid overflow-hidden rounded-[8px] border border-ink-900/10 bg-white transition hover:border-brand-blue/40 md:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-48 bg-surface-50">
                  <Image src={product.image} alt={`${product.title} TMT steel bar`} fill sizes="180px" className="object-contain p-7" />
                </div>
                <div className="flex flex-col p-7">
                  <PackageCheck size={21} className="text-brand-blue" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel-700">{product.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
                    View product information <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionKicker>Quality information</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.08] text-ink-900">
              Review product and quality information before you enquire.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel-700">
              The approved source identifies product quality as important to construction decisions. ARS product and quality pages provide the appropriate detail; unverified certification and performance claims are not repeated here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/our-quality" className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/15 px-5 text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/5">
                Explore quality information <ArrowRight size={16} />
              </Link>
              <Link href="/manufacturing" className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/15 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue">
                Explore manufacturing <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="border-y border-ink-900/10 bg-surface-50 p-7 md:p-9">
            <ShieldCheck size={28} className="text-brand-blue" aria-hidden="true" />
            <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">What to expect from an enquiry</h3>
            <p className="mt-4 text-base leading-8 text-steel-700">
              Contact ARS with basic information about your interest. Partnership requirements, onboarding, commercial terms, and any Dealer or Distributor distinction need ARS business confirmation.
            </p>
            <a href="tel:+919710411111" className="focus-ring mt-7 inline-flex h-12 items-center gap-3 text-sm font-bold text-brand-blue hover:text-brand-blue-dark">
              <Phone size={18} /> Call ARS: +91 97104 11111
            </a>
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Partner enquiry"
        headline="Let's Build Better Business Together"
        body="Whether you're expanding your dealership or looking for a trusted TMT steel manufacturer, contact ARS to discuss product supply and the next steps for a commercial partnership."
        primaryLabel="Become a Dealer"
        primaryHref="/contact"
        secondaryLabel="View product range"
        secondaryHref="/products"
      />
    </main>
  );
}
