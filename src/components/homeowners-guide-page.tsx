import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Factory,
  Home,
  IndianRupee,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SiteHeader } from "@/components/site-header";

const decisionCards = [
  {
    title: "Quality assurance",
    body: "Every family deserves a home built on verified steel quality and consistent production standards.",
    icon: BadgeCheck,
    image: "/ars-assets/our-quality-1.png",
  },
  {
    title: "Enhanced durability",
    body: "Strength, flexibility, corrosion resistance, and better bonding with concrete help protect the structure for years.",
    icon: ShieldCheck,
    image: "/ars-assets/products-all.png",
  },
  {
    title: "Cost savings",
    body: "Higher yield strength can mean smarter material usage while keeping safety and long-term value intact.",
    icon: IndianRupee,
    image: "/ars-assets/ARSHOME4.jpg",
  },
  {
    title: "Check our home construction cost calculator",
    body: "Plan smarter. Estimate steel requirements before a single brick is laid: free, fast, and accurate.",
    icon: Calculator,
    image: "/ars-assets/Contact_banner.png",
    href: "/tmt-calculator",
  },
  {
    title: "RSS certified assurance",
    body: "Every product carries Rajasthan State Standard certification, giving homeowners independent product confidence.",
    icon: BadgeCheck,
    image: "/ars-assets/awards-certificates-img2.png",
  },
  {
    title: "For homes meant to last",
    body: "Structures built with ARS steel are engineered to withstand time, weather, and seismic activity.",
    icon: Home,
    image: "/ars-assets/home-owner-banner-1.png",
  },
  {
    title: "Home building tips",
    body: "Use practical guidance before choosing steel grade, size, quantity, and dealer support for your build.",
    icon: Ruler,
    image: "/ars-assets/ARSHOME1.jpg",
    href: "/blog.html",
  },
  {
    title: "Build with the futuristic mind",
    body: "Plan for durability, expansion, and material confidence from the first stage of construction.",
    icon: Sparkles,
    image: "/ars-assets/ARSHOME2.jpg",
  },
];

const strengthItems = [
  {
    title: "Strong foundations",
    body: "TMT bars provide tensile strength and flexibility to withstand loads, moisture, and long-term stresses.",
    icon: Ruler,
  },
  {
    title: "Stronger beams",
    body: "Quality steel rods improve load distribution and help beams perform reliably over time.",
    icon: Wrench,
  },
  {
    title: "Dependable pillars",
    body: "High-strength TMT bars support vertical loads and help protect the structural framework of the home.",
    icon: Factory,
  },
];

const resources = [
  {
    title: "Build with the future in mind",
    body: "Plan for energy efficiency, possible expansion, and modern amenities before construction begins.",
    href: "/blog.html",
  },
  {
    title: "High quality materials, higher returns",
    body: "The right steel decision protects structural performance and long-term value.",
    href: "/products",
  },
  {
    title: "Trust the experts",
    body: "Get guidance from experienced professionals before finalizing steel grade, size, and quantity.",
    href: "/contact",
  },
];

function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <div className="section-intro">
      <div className="section-kicker-row">
        <span className={light ? "section-kicker-line bg-white/70" : "section-kicker-line"} />
        <p className={light ? "section-kicker section-kicker-light" : "section-kicker"}>{eyebrow}</p>
      </div>
      <h2 className={light ? "section-title section-title-light" : "section-title"}>{title}</h2>
      <p className={light ? "section-copy section-copy-light" : "section-copy"}>{body}</p>
    </div>
  );
}

export function HomeownersGuidePage() {
  return (
    <main className="overflow-hidden bg-white">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#06244d] pt-22 text-white lg:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(247,99,105,0.2),transparent_30%),linear-gradient(135deg,#061a39_0%,#004b9b_58%,#06244d_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#061a39] to-transparent lg:h-28" />
        <div className="ars-container relative grid min-h-[60vh] items-center gap-7 pb-8 pt-6 lg:h-[60vh] lg:min-h-[60vh] lg:grid-cols-[1fr_0.78fr] lg:gap-8 lg:pb-6 lg:pt-2">
          <div className="max-w-3xl lg:max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/78 backdrop-blur">
              <span className="size-2 rounded-full bg-brand-red" />
              Trusted since 1987
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,5vw,4rem)] font-black uppercase leading-[0.96] tracking-normal">
              Your dream home deserves quality{" "}
              <span className="block font-serif italic text-brand-red">you can trust</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/78 lg:max-w-lg lg:text-[1.05rem]">
              ARS Green Steel delivers superior quality TMT steel bars engineered for strength,
              durability, and safety, giving every homeowner the foundation it deserves.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-white px-5 text-sm font-bold text-brand-blue transition hover:-translate-y-0.5 hover:bg-white/92"
                href="/products"
              >
                Explore products <ArrowRight size={17} />
              </Link>
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-white/30 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-blue"
                href="/dealer-locator"
              >
                Find a dealer <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative lg:self-center">
            <div className="absolute -left-3 top-6 z-10 hidden rounded-[14px] border border-white/18 bg-white/12 px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">SGS certified</p>
              <p className="mt-1 text-sm font-bold text-white">Quality assured steel</p>
            </div>
            <div className="relative overflow-hidden rounded-[20px] border border-white/16 bg-white/10 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.28)] lg:p-2.5">
              <div className="relative h-[260px] overflow-hidden rounded-[16px] bg-[#102d58] sm:h-[300px] lg:h-[250px]">
                <Image
                  src="/ars-assets/home-owner-banner-1.png"
                  alt="Homeowners standing outside a completed home"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a39]/88 via-[#061a39]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-4 lg:left-4 lg:right-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Dream home</p>
                  <p className="mt-2 max-w-sm font-display text-xl font-black leading-tight text-white lg:text-[1.45rem]">
                    Safer homes begin with verified steel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="ars-container">
          <SectionHeading
            eyebrow="Why ARS"
            title="Key information for confident steel decisions."
            body="Eight things every homeowner should know before choosing their construction steel — clear, honest, and relevant."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="group relative min-h-[300px] overflow-hidden rounded-[18px] border border-ink-900/10 bg-[#06244d] shadow-[0_22px_65px_rgba(15,23,42,0.08)]">
              <Image
                src="/ars-assets/home-owner-banner-1.png"
                alt="Residential home built with trusted steel"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/92 via-[#003777]/58 to-[#003777]/12" />
              <div className="relative flex min-h-[300px] flex-col justify-end p-7 md:p-9">
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-brand-red/30 bg-brand-red/12 text-brand-red">
                  <Home size={18} />
                </span>
                <h3 className="mt-7 max-w-lg font-display text-xl font-bold leading-snug text-white md:text-2xl">
                  Your dream home deserves quality you can trust.
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-white/78">
                  Every family deserves a foundation of trust. ARS Steel ensures structural integrity that stands the test of time.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red">
                  Learn more <ArrowRight size={15} />
                </span>
              </div>
            </article>

            <article className="group relative min-h-[300px] overflow-hidden rounded-[18px] border border-ink-900/10 bg-[#061a39] shadow-[0_22px_65px_rgba(15,23,42,0.08)]">
              <Image
                src="/ars-assets/products-all.png"
                alt="ARS TMT steel bars for home construction"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003777]/94 via-[#003777]/62 to-[#003777]/16" />
              <div className="relative flex min-h-[300px] flex-col justify-end p-7 md:p-9">
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-brand-red/30 bg-brand-red/12 text-brand-red">
                  <ShieldCheck size={18} />
                </span>
                <h3 className="mt-7 max-w-lg font-display text-xl font-bold leading-snug text-white md:text-2xl">
                  Why ARS TMT steel bars are the right choice for your home construction.
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-white/78">
                  ARS TMT bars use advanced thermo-mechanical treatment, delivering strength and ductility for residential builds.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-red">
                  Learn more <ArrowRight size={15} />
                </span>
              </div>
            </article>
          </div>

          <div
            className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Homeowner decision cards carousel"
          >
            {decisionCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <article className="group flex h-full min-h-[411px] flex-col overflow-hidden rounded-[14px] border border-ink-900/10 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-[0_24px_70px_rgba(0,75,155,0.12)]">
                  <div className="relative h-40 shrink-0 overflow-hidden bg-[#eef2f7]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="300px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/22 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="inline-flex size-9 items-center justify-center rounded-[12px] bg-brand-blue/8 text-brand-blue">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink-900">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-steel-700">{card.body}</p>
                    <span className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold ${card.href === "/tmt-calculator" ? "text-brand-red" : "text-brand-blue"}`}>
                      {card.href === "/tmt-calculator" ? "Open calculator" : "Learn more"} <ArrowRight size={15} />
                    </span>
                  </div>
                </article>
              );

              return card.href ? (
                <Link
                  key={card.title}
                  className="focus-ring block w-[78vw] max-w-[300px] shrink-0 snap-start"
                  href={card.href}
                >
                  {content}
                </Link>
              ) : (
                <div key={card.title} className="w-[78vw] max-w-[300px] shrink-0 snap-start">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] py-20 lg:py-28">
        <div className="ars-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Home strength"
              title="Everything you need to make the right decision for your home."
              body="ARS keeps the steel decision simple by connecting product proof, construction guidance, testing confidence, and expert support in one homeowner journey."
            />
            <div className="grid gap-4">
              {strengthItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-4 rounded-[16px] border border-ink-900/10 bg-white p-5 shadow-[0_14px_44px_rgba(15,23,42,0.04)]">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-brand-blue/10 text-brand-blue">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-steel-700">{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[1.12] overflow-hidden rounded-[18px]">
                <Image
                  src="/ars-assets/ARSHOME1.jpg"
                  alt="ARS construction site"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a39]/78 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[16px] border border-white/20 bg-white/14 p-5 text-white backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/72">A true partner</p>
                  <p className="mt-2 text-2xl font-bold leading-tight">
                    Better steel choices at every step of home construction.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 grid rounded-[18px] bg-white p-5 shadow-[0_24px_68px_rgba(0,75,155,0.16)] sm:left-8">
              <span className="font-display text-5xl font-black leading-none text-brand-blue">1987</span>
              <span className="mt-2 text-sm font-bold text-steel-700">trusted manufacturing legacy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061a39] py-20 text-white lg:py-28">
        <div className="ars-container">
          <SectionHeading
            eyebrow="Useful ARS resources"
            title="Home building guidance, product proof, and expert help."
            body="These resources help homeowners move from early planning to confident enquiry without getting lost in technical language."
            light
          />
          <div className="grid gap-5 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                className="focus-ring group rounded-[18px] border border-white/12 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                href={resource.href}
              >
                <Sparkles className="text-brand-red" size={24} />
                <h3 className="mt-8 font-display text-2xl font-bold leading-tight text-white">{resource.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{resource.body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">
                  Open resource <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="ars-container grid gap-10 rounded-[24px] bg-[#f4f8fc] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="section-kicker-row">
              <span className="section-kicker-line" />
              <p className="section-kicker">Talk to ARS</p>
            </div>
            <h2 className="section-title">Get support from the ARS team.</h2>
            <p className="section-copy">
              Reach the team for product selection, dealer discovery, steel quantity planning, or site-level support before you finalize your home construction materials.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Product guidance", "Dealer support", "Site assistance", "Quantity planning"].map((item) => (
                <span key={item} className="rounded-full border border-brand-blue/14 bg-white px-4 py-2 text-sm font-bold text-brand-blue">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark" href="tel:+919710411111">
                <Phone size={17} /> +91 9710411111
              </a>
              <Link className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/12 bg-white px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue" href="/request-quote">
                Request quote <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#dbeafe]">
            <Image
              src="/ars-assets/Contact_banner.png"
              alt="ARS support and contact"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a39]/72 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[16px] border border-white/20 bg-white/14 p-5 text-white backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Homeowner support</p>
              <p className="mt-2 text-2xl font-bold leading-tight">From steel choice to enquiry, keep the path simple.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
