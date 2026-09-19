import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-sections";
import { SiteHeader } from "@/components/site-header";
import { SectionKicker } from "@/components/section-kicker";
import { ContactCta } from "@/components/contact-cta";
import { YoutubeFilm } from "@/components/youtube-film";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "TV Commercials | ARS Green Steel",
  description: "Watch the official ARS CRS Fe 550D and ARS Fe 550D television commercials. Explore the films and discover the products behind the campaigns.",
  path: "/tv-commercials",
  image: "/ars-assets/home/rahul_.jpg",
});

const films = [
  {
    id: "bvR053aWjnY",
    product: "ARS CRS Fe 550D",
    title: "Say Goodbye to Rust",
    description: "Meet ARS CRS Fe 550D in our corrosion-fighter campaign. Watch the film, then explore the steel behind the story.",
    href: "/product-crs-550d",
    theme: "Corrosion resistance",
  },
  {
    id: "3vljw7mpeKU",
    product: "ARS Fe 550D",
    title: "Know the Truth",
    description: "Don’t buy TMT bars blindly. Our ARS Fe 550D commercial puts informed steel selection at the heart of the conversation.",
    href: "/product-550d",
    theme: "Choose with confidence",
  },
] as const;

export default function TvCommercialsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />
      <PageHero
        eyebrow="Press Media"
        title="TV Commercials"
        body="The stories behind our steel. Watch the official ARS product films and discover the campaigns that bring our commitment to quality to life."
        backgroundImageSrc="/ars-assets/home/rahul_.jpg"
        backgroundImagePosition="65% top"
        primaryLabel="Watch commercials"
        primaryHref="#commercials"
        secondaryLabel="Explore products"
        secondaryHref="/products"
      />
      <section id="commercials" aria-labelledby="films-heading" className="scroll-mt-28 py-16 md:py-24">
        <div className="ars-container">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-ink-900/15 pb-9 md:flex-row md:items-end">
            <div><SectionKicker>On screen</SectionKicker><h2 id="films-heading" className="section-title mt-5">Our products. Their stories.</h2></div>
            <p className="max-w-sm text-base leading-7 text-steel-700">Two films from ARS Green Steel. Select a commercial to open the player.</p>
          </div>
          <div className="space-y-14 md:space-y-20">
            {films.map((film, index) => (
              <article key={film.id} aria-labelledby={`film-${film.id}`} className="grid items-center gap-7 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
                <YoutubeFilm videoId={film.id} title={`${film.product} — ${film.title}`} />
                <div>
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.15em] text-steel-700">0{index + 1} <span className="mx-2 text-brand-red" aria-hidden="true">/</span> {film.theme}</p>
                  <h3 id={`film-${film.id}`} className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">{film.product}</h3>
                  <p className="mt-3 font-display text-xl font-semibold text-brand-blue">{film.title}</p>
                  <p className="mt-5 text-base leading-8 text-steel-700">{film.description}</p>
                  <div className="mt-6 flex flex-col items-start gap-2">
                    <Link href={film.href} className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-bold text-brand-blue">Explore {film.product}<ArrowRight size={17} aria-hidden="true" /></Link>
                    <a href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-steel-700">Watch on YouTube<ExternalLink size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCta eyebrow="From the screen to your project" headline="Find the right steel for your build." body="Explore the ARS product range or speak with our team about your project requirements." primaryLabel="Explore products" primaryHref="/products" secondaryLabel="Talk to ARS" secondaryHref="/contact" tone="solid" />
    </main>
  );
}
