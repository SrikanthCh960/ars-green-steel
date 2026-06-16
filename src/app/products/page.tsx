import type { Metadata } from "next";
import { BadgeCheck, Building2, Factory, Ruler, ShieldCheck, Waves } from "lucide-react";
import { ContentBand, PageShell, ProofMetrics, SectionIntro } from "@/components/page-sections";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "Products | ARS Green Steel",
  description: "Explore ARS 550D, ARS CRS 550D, TMT bar sizes, applications, and product proof.",
};

const productCards = [
  {
    title: "ARS 550D",
    text: "High-strength ductile TMT bars for residential, commercial, and infrastructure construction.",
    href: "/products/ars-550d",
    icon: ShieldCheck,
    imageSrc: "/ars-assets/TMT-Bars.png",
    imageAlt: "ARS 550D TMT bars product photograph",
    points: ["High ductility", "Strong bendability", "Tested quality"],
  },
  {
    title: "ARS CRS 550D",
    text: "Corrosion-resistant TMT bars for coastal, humid, exposed, and long-life structures.",
    href: "/products/ars-crs-550d",
    icon: Waves,
    imageSrc: "/ars-assets/CRS.png",
    imageAlt: "ARS CRS 550D product photograph",
    points: ["CRS protection", "Durability focus", "Coastal-ready use"],
  },
];

const sizes = [
  { size: "8mm", use: "Light residential members, rings, and smaller reinforcement needs." },
  { size: "10mm", use: "Slabs and residential reinforcement; approx. 0.617 kg/m." },
  { size: "12mm", use: "Beams, slabs, and general construction; approx. 0.890 kg/m." },
  { size: "16mm", use: "Columns, beams, and medium-load reinforcement; approx. 1.580 kg/m." },
  { size: "20mm", use: "Heavy columns, beams, and commercial members; approx. 2.470 kg/m." },
  { size: "25mm", use: "Large structures and heavy-load reinforcement; approx. 3.850 kg/m." },
  { size: "32mm", use: "Mega structures, bridges, and heavy infrastructure requirements." },
];

export default function ProductsPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Product range",
        title: "Steel by grade,",
        accent: "size, site.",
        body: "The product experience gives buyers a quick route from grade selection to rod size, technical proof, calculator, dealer, and quote.",
        primaryLabel: "Calculate steel",
        primaryHref: "/tmt-calculator",
        secondaryLabel: "Request quote",
        secondaryHref: "/request-quote",
      }}
    >
      <ProofMetrics
        metrics={[
          { kicker: "main grade", value: "550D", label: "High-strength ductile TMT steel for safer modern structures." },
          { kicker: "corrosion option", value: "CRS", label: "Durability-led product path for coastal and exposed conditions." },
          { kicker: "rod sizes", value: "8-32", label: "Common bar-size journey for buying decisions." },
          { kicker: "proof", value: "SGS", label: "Certification and testing routes remain connected to product choice." },
        ]}
      />

      <ContentBand
        id="specifications"
        eyebrow="Core products"
        title="Two product paths, one proof standard."
        body="ARS product pages should help visitors choose based on structural need, environment, and technical confidence."
        cards={productCards}
      />

      <MotionSection className="bg-white py-24" id="sizes">
        <div className="ars-container">
          <SectionIntro
            eyebrow="Bar sizes"
            title="Rod sizes buyers already search for."
            body="The size table gives buyers quick context before checking price, estimating quantity, or requesting a quote."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sizes.map((item) => (
              <article key={item.size} className="rounded-[8px] border border-ink-900/10 bg-[#f8f9fb] p-6">
                <div className="mb-8 inline-flex size-12 items-center justify-center rounded-[8px] bg-white text-brand-blue ring-1 ring-ink-900/8">
                  <Ruler size={21} />
                </div>
                <h3 className="font-display text-4xl font-black uppercase text-ink-900">{item.size}</h3>
                <p className="mt-4 text-base leading-7 text-steel-700">{item.use}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <ContentBand
        eyebrow="Applications"
        title="Connect product proof to construction use."
        tone="warm"
        cards={[
          { title: "Homes and apartments", text: "Clear grade, size, and price routes for families and small contractors.", href: "/industries#residential", icon: Building2, imageSrc: "/ars-assets/home-owner-banner-1.png", imageAlt: "ARS home construction" },
          { title: "Commercial projects", text: "Specification-led proof for engineers, architects, and procurement teams.", href: "/industries", icon: BadgeCheck, imageSrc: "/ars-assets/products-all.png", imageAlt: "ARS product range" },
          { title: "Infrastructure", text: "Heavy-load and durability guidance for road, bridge, and institutional projects.", href: "/projects", icon: Factory, imageSrc: "/ars-assets/ARSHOME4.jpg", imageAlt: "ARS infrastructure" },
        ]}
      />
    </PageShell>
  );
}
