import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  ClipboardCheck,
  Factory,
  FileText,
  FlaskConical,
  Handshake,
  Home,
  IndianRupee,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  TestTube2,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";

type AudienceGuideSlug =
  | "tmt-steel-bar-guide-homeowners"
  | "tmt-steel-bar-guide-engineers-architects"
  | "tmt-steel-bar-guide-civil-contractors"
  | "steel-distributors-dealers";

type AudienceCard = {
  title: string;
  body: string;
  icon: LucideIcon;
  image: string;
  href?: string;
  cta?: string;
};

type AudienceGuideConfig = {
  eyebrow: string;
  heroBadge: string;
  heroTitle: string;
  heroAccent: string;
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: { value: string; label: string }[];
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  featurePanels: AudienceCard[];
  carousel: AudienceCard[];
  proof: {
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    badge: string;
    items: { title: string; body: string; icon: LucideIcon }[];
  };
  resources: AudienceCard[];
  resourceSection: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  support: {
    eyebrow: string;
    title: string;
    body: string;
    phoneLabel: string;
    phone: string;
    phoneHref: string;
    phoneNote: string;
    tags: string[];
    image: string;
    imageAlt: string;
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

const homeownerRail = "mx-auto w-[min(100%-40px,1180px)]";
const homeownerSectionTitle =
  "font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.16] text-ink-900";
const homeownerSectionCopy = "mt-5 max-w-2xl text-base leading-8 text-steel-700";

const audienceGuides: Record<AudienceGuideSlug, AudienceGuideConfig> = {
  "tmt-steel-bar-guide-homeowners": {
    eyebrow: "Homeowner guide",
    heroBadge: "Homeowner guide",
    heroTitle: "Your dream home deserves steel",
    heroAccent: "you can trust.",
    heroBody:
      "Thermo-Mechanically Treated steel bars help homeowners understand product choice, quality, dealer access, and construction planning.",
    heroImage: "/ars-assets/home-owner-banner-1.png",
    heroImageAlt: "Homeowners standing outside a completed home",
    primaryCta: { label: "Explore products", href: "/products" },
    secondaryCta: { label: "Find a dealer", href: "/dealer-locator" },
    stats: [
      { value: "550D", label: "Home-ready strength" },
      { value: "SGS", label: "Quality proof" },
      { value: "8-32", label: "Bar size range" },
      { value: "1", label: "Simple enquiry path" },
    ],
    intro: {
      eyebrow: "Why ARS",
      title: "Why ARS TMT steel bars are the right choice for your home.",
      body:
        "Choosing the right materials makes all the difference in quality, reliability, performance, and long-term structural confidence.",
    },
    featurePanels: [
      {
        title: "Your dream home deserves quality you can trust.",
        body:
          "Every family deserves a foundation of trust. ARS Steel helps protect structural integrity through tested, consistent TMT bars.",
        icon: Home,
        image: "/ars-assets/home-owner-banner-1.png",
      },
      {
        title: "A true partner in bringing your dream home to life.",
        body:
          "ARS supports homeowners with product clarity, dealer routes, quantity planning, and quality proof before purchase decisions.",
        icon: Handshake,
        image: "/ars-assets/ARSHOME1.jpg",
      },
    ],
    carousel: [
      {
        title: "Quality assurance",
        body:
          "Advanced manufacturing, rigorous testing, and certification help homeowners trust the steel inside their structure.",
        icon: BadgeCheck,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "Enhanced durability",
        body:
          "Strength, flexibility, corrosion resistance, and better concrete bonding improve the life of foundations, beams, and pillars.",
        icon: ShieldCheck,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "Cost savings",
        body:
          "Use the construction calculator to plan requirements before discussing product selection with a dealer or contractor.",
        icon: IndianRupee,
        image: "/ars-assets/ARSHOME4.jpg",
      },
      {
        title: "Home construction cost calculator",
        body: "Estimate requirements by project type, bar size, floors, and built-up area before speaking with sales.",
        icon: Calculator,
        image: "/ars-assets/Contact_banner.png",
        href: "/tmt-calculator",
        cta: "Open calculator",
      },
      {
        title: "SGS certified assurance",
        body:
          "Independent testing and certification cues give homeowners added confidence before choosing a product.",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
      },
      {
        title: "Home building tips",
        body: "Use simple guidance before finalizing steel grade, bar size, quantity, and dealer support.",
        icon: Ruler,
        image: "/ars-assets/ARSHOME2.jpg",
        href: "/blog.html",
        cta: "Read guides",
      },
    ],
    proof: {
      eyebrow: "Home strength",
      title: "Everything you need to make the right decision for your home.",
      body:
        "ARS keeps the steel decision simple by connecting product proof, construction guidance, testing confidence, and expert support in one homeowner journey.",
      image: "/ars-assets/ARSHOME1.jpg",
      imageAlt: "ARS construction support for residential projects",
      badge: "Better steel choices at every stage of home construction.",
      items: [
        {
          title: "Strong foundations",
          body:
            "TMT bars provide tensile strength and flexibility to withstand loads, moisture, and long-term stresses.",
          icon: Ruler,
        },
        {
          title: "Stronger beams",
          body: "Quality steel rods improve load distribution and help beams perform reliably over time.",
          icon: Wrench,
        },
        {
          title: "Dependable pillars",
          body:
            "High-strength TMT bars support vertical loads and help protect the structural framework of the home.",
          icon: Factory,
        },
      ],
    },
    resources: [
      {
        title: "Build with the future in mind",
        body: "Plan for durability, expansion, energy efficiency, and modern amenities before construction begins.",
        href: "/blog.html",
        icon: Sparkles,
        image: "/ars-assets/ARSHOME2.jpg",
      },
      {
        title: "High quality materials, higher returns",
        body: "The right steel decision protects structural performance and long-term value.",
        href: "/products",
        icon: ShieldCheck,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Trust the experts",
        body: "Get guidance before finalizing steel grade, size, quantity, and source.",
        href: "/contact",
        icon: Phone,
        image: "/ars-assets/Contact_banner.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Helpful next steps for homeowners.",
      body:
        "Keep product clarity, planning tools, and guidance in one place while you evaluate the right steel path for your home.",
      ctaLabel: "View all products",
      ctaHref: "/products",
    },
    support: {
      eyebrow: "Support",
      title: "Get support from the ARS team.",
      body:
        "Our steel support team can help with product selection, construction guidance, dealer discovery, and site-level questions before you finalize materials.",
      phoneLabel: "Phone",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For product, dealer, and project enquiries",
      tags: ["Technical queries", "Order tracking", "Site assistance", "Dealer support"],
      image: "/ars-assets/home-owner-banner-1.png",
      imageAlt: "ARS support for homeowners choosing steel",
    },
    finalCta: {
      eyebrow: "Homeowner support",
      headline: "Ready to choose the right steel for your home?",
      body:
        "Talk to ARS for product selection, dealer discovery, quantity planning, and quote support.",
      primaryLabel: "Request quote",
      primaryHref: "/request-quote",
      secondaryLabel: "Talk to sales",
      secondaryHref: "/contact",
    },
  },
  "tmt-steel-bar-guide-engineers-architects": {
    eyebrow: "Engineers & architects",
    heroBadge: "Technical proof first",
    heroTitle: "A true partner in your pursuit",
    heroAccent: "of excellence.",
    heroBody:
      "ARS TMT bars support engineers and architects with product, manufacturing, and quality information for design-stage discussions.",
    heroImage: "/ars-assets/our-quality-1.png",
    heroImageAlt: "ARS steel quality testing and technical review",
    primaryCta: { label: "View specifications", href: "/products/ars-550d#specifications" },
    secondaryCta: { label: "Request technical support", href: "/contact" },
    stats: [
      { value: "550D", label: "Fe-550D grade" },
      { value: "IS", label: "IS 1786:2008" },
      { value: "SGS", label: "Certification proof" },
      { value: "CRS", label: "Corrosion option" },
    ],
    intro: {
      eyebrow: "Technical clarity",
      title: "Superior strength and true dependability for specification-led work.",
      body:
        "Structural integrity depends on steel that can prove its composition, manufacturing process, ductility, bonding, and traceability.",
    },
    featurePanels: [
      {
        title: "Precision in chemical composition.",
        body:
          "ARS TMT bars are produced with controlled chemistry to balance strength, ductility, and corrosion resistance for demanding projects.",
        icon: FlaskConical,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "Advanced TMT process and quenching discipline.",
        body:
          "Controlled heating and cooling create a tough exterior and flexible core, improving resilience and safety in modern construction.",
        icon: Factory,
        image: "/ars-assets/products-all.png",
      },
    ],
    carousel: [
      {
        title: "Innovative quenching process",
        body:
          "Rapid surface cooling with a softer core helps create high tensile strength without making the bar brittle.",
        icon: Waves,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Precision rib creation",
        body:
          "Rib patterns improve bonding with concrete, helping anchorage and long-term structural stability.",
        icon: Ruler,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "Distinctive logo mold",
        body:
          "Product marking supports authenticity, traceability, and confidence that the steel used is genuine ARS material.",
        icon: BadgeCheck,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Physical properties",
        body:
          "Fe-550D benchmark values and ARS product data should be reviewed against the latest test certificate before final publishing.",
        icon: FileText,
        image: "/ars-assets/awards-certificates-img3.png",
        href: "/products/ars-550d#specifications",
        cta: "View specs",
      },
      {
        title: "Chemical properties",
        body:
          "Chemical composition details are preserved from the source content and remain a client-verification item before launch.",
        icon: TestTube2,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "Mobile steel patrol",
        body:
          "On-road testing support helps engineers verify material quality closer to the project site.",
        icon: Truck,
        image: "/ars-assets/Contact_banner.png",
        href: "/steel-testing",
        cta: "View testing",
      },
    ],
    proof: {
      eyebrow: "Proof system",
      title: "Bring specification, certification, and site confidence into one flow.",
      body:
        "For engineers and architects, ARS connects product specifications, certification cues, testing support, and grade choice into a simpler review path.",
      image: "/ars-assets/awards-certificates-img3.png",
      imageAlt: "ARS product certification and quality proof",
      badge: "Specification support with certification-led confidence.",
      items: [
        {
          title: "Product specifications",
          body: "Use the ARS 550D and CRS 550D pages for grade-level technical review.",
          icon: FileText,
        },
        {
          title: "Testing transparency",
          body: "Quality and testing pages keep proof close to engineering decisions.",
          icon: TestTube2,
        },
        {
          title: "Project collaboration",
          body: "ARS can support grade selection, product verification, and technical enquiry handoff.",
          icon: Handshake,
        },
      ],
    },
    resources: [
      {
        title: "ARS 550D specifications",
        body: "Review the core grade for yield, UTS, elongation, sizes, and project fit.",
        href: "/products/ars-550d",
        icon: FileText,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "ARS CRS 550D",
        body: "Use CRS for coastal, humid, exposed, and long-life construction conditions.",
        href: "/products/ars-crs-550d",
        icon: Waves,
        image: "/ars-assets/CRS.png",
      },
      {
        title: "Quality certifications",
        body: "Keep SGS, IS, and environmental proof close to technical review.",
        href: "/certifications",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Tools and proof for specification-led decisions.",
      body:
        "Keep product data, corrosion guidance, and certification proof close to design reviews, consultant discussions, and technical sign-off.",
      ctaLabel: "View all products",
      ctaHref: "/products",
    },
    support: {
      eyebrow: "Technical support",
      title: "Get support from the ARS technical team.",
      body:
        "Use ARS for grade selection guidance, certification review, testing questions, and product clarification before you finalize specifications.",
      phoneLabel: "Technical desk",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For technical review, product proof, and project enquiries",
      tags: ["Specification help", "Test certificates", "Grade guidance", "Project review"],
      image: "/ars-assets/our-quality-1.png",
      imageAlt: "ARS technical and quality support",
    },
    finalCta: {
      eyebrow: "Technical support",
      headline: "Need specification support for a project?",
      body:
        "Share your requirement and let ARS help with grade selection, testing proof, and quote routing.",
      primaryLabel: "Request technical support",
      primaryHref: "/request-quote",
      secondaryLabel: "Talk to sales",
      secondaryHref: "/contact",
    },
  },
  "tmt-steel-bar-guide-civil-contractors": {
    eyebrow: "Civil Circle / Contractors",
    heroBadge: "Site-ready support",
    heroTitle: "Superior quality for superior",
    heroAccent: "infrastructure.",
    heroBody:
      "ARS supports civil contractors with product guidance, quantity-planning tools, dealer access, and a clear project-enquiry route.",
    heroImage: "/ars-assets/ARSHOME1.jpg",
    heroImageAlt: "Construction site requiring dependable TMT steel",
    primaryCta: { label: "Request project quote", href: "/request-quote" },
    secondaryCta: { label: "Calculate requirement", href: "/tmt-calculator" },
    stats: [
      { value: "8-32", label: "Bar size range" },
      { value: "550D", label: "Project grade" },
      { value: "SGS", label: "Quality proof" },
      { value: "Site", label: "Testing support" },
    ],
    intro: {
      eyebrow: "Project support",
      title: "Unmatched strength, delivered with extra support.",
      body:
        "Contractors need steel that is dependable in quality and practical in supply. ARS brings product proof, testing support, and quantity guidance into the buying journey.",
    },
    featurePanels: [
      {
        title: "Partnering for excellence in civil construction.",
        body:
          "Safe, durable, and efficient projects rely on material choices that match technical requirements and site execution realities.",
        icon: Handshake,
        image: "/ars-assets/ARSHOME1.jpg",
      },
      {
        title: "Spectrometer analysis for steel confidence.",
        body:
          "Testing support helps verify chemical composition and consistency so contractors can move with more confidence.",
        icon: FlaskConical,
        image: "/ars-assets/our-quality-1.png",
      },
    ],
    carousel: [
      {
        title: "Ductility test result",
        body:
          "High elongation and flexibility help TMT bars absorb stress and deformation without compromising site confidence.",
        icon: ShieldCheck,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "Bendability test",
        body:
          "Bend and rebend testing confirms that bars can withstand handling without visible cracks or loss of integrity.",
        icon: Wrench,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Martensite test",
        body:
          "Testing the quenched outer layer helps validate hardness, strength, and resistance to wear and impact.",
        icon: TestTube2,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "On-site spectrometer testing",
        body:
          "Mobile testing support gives immediate chemical analysis at the construction site when required.",
        icon: Truck,
        image: "/ars-assets/Contact_banner.png",
        href: "/steel-testing",
        cta: "View testing",
      },
      {
        title: "TMT calculation assistance",
        body:
          "ARS can help translate project needs into bar-size, quantity, strength, and ductility conversations.",
        icon: Calculator,
        image: "/ars-assets/ARSHOME4.jpg",
        href: "/tmt-calculator",
        cta: "Calculate steel",
      },
      {
        title: "Quality certifications",
        body:
          "Certification and product proof help contractors support client and consultant conversations.",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
        href: "/certifications",
        cta: "View proof",
      },
    ],
    proof: {
      eyebrow: "Site confidence",
      title: "A practical support path for civil project teams.",
      body:
        "ARS helps contractors reduce uncertainty across product selection, quantity planning, quality checks, and quote handoff.",
      image: "/ars-assets/Contact_banner.png",
      imageAlt: "ARS project support contact interface",
      badge: "From requirement planning to steel supply enquiry.",
      items: [
        {
          title: "Requirement clarity",
          body: "Calculator and quote routes help structure project needs before sales conversation.",
          icon: ClipboardCheck,
        },
        {
          title: "Quality assurance",
          body: "Testing and certification cues support contractor confidence.",
          icon: BadgeCheck,
        },
        {
          title: "Project handoff",
          body: "Contact and quote paths keep the next step clear for site teams.",
          icon: ArrowRight,
        },
      ],
    },
    resources: [
      {
        title: "Project quote",
        body: "Share product, quantity, site, and project details in one structured request.",
        href: "/request-quote",
        icon: FileText,
        image: "/ars-assets/Contact_banner.png",
      },
      {
        title: "TMT calculator",
        body: "Estimate requirement by project type, built-up area, floors, and bar size.",
        href: "/tmt-calculator",
        icon: Calculator,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Steel testing",
        body: "Review testing support and quality verification before high-volume procurement.",
        href: "/steel-testing",
        icon: TestTube2,
        image: "/ars-assets/our-quality-1.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Project tools that keep site decisions moving.",
      body:
        "Bring steel planning, testing support, and quote handoff into a cleaner contractor workflow without losing the proof behind the product.",
      ctaLabel: "Request project quote",
      ctaHref: "/request-quote",
    },
    support: {
      eyebrow: "Contractor support",
      title: "Get support from the ARS project team.",
      body:
        "Speak with ARS for quantity planning, site testing support, dealer coordination, and project-led product discussions.",
      phoneLabel: "Project support",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For project requirements, testing, and supply enquiries",
      tags: ["Quantity planning", "Site testing", "Order support", "Dealer routing"],
      image: "/ars-assets/ARSHOME1.jpg",
      imageAlt: "ARS support for civil contractors",
    },
    finalCta: {
      eyebrow: "Contractor support",
      headline: "Need reliable steel support for your next site?",
      body:
        "Share your project requirement and move from planning to quote with product proof close by.",
      primaryLabel: "Request quote",
      primaryHref: "/request-quote",
      secondaryLabel: "Call ARS",
      secondaryHref: "/contact",
    },
  },
  "steel-distributors-dealers": {
    eyebrow: "Dealer guide",
    heroBadge: "Dealer growth path",
    heroTitle: "Construction excellence,",
    heroAccent: "safely delivered.",
    heroBody:
      "ARS helps dealers and distributors build local demand with dependable product quality, proof-backed supply, and a clearer enquiry path.",
    heroImage: "/ars-assets/Contact_banner.png",
    heroImageAlt: "ARS dealer and support communication",
    primaryCta: { label: "Become a dealer", href: "/become-a-dealer" },
    secondaryCta: { label: "Find dealer support", href: "/contact" },
    stats: [
      { value: "ARS", label: "Trusted product" },
      { value: "550D", label: "Core demand" },
      { value: "CRS", label: "Premium option" },
      { value: "B2B", label: "Dealer support" },
    ],
    intro: {
      eyebrow: "Dealer confidence",
      title: "Build local demand with product proof and ARS support.",
      body:
        "Dealers need more than product availability. They need quality confidence, clear product stories, technical proof, and a dependable route for enquiries.",
    },
    featurePanels: [
      {
        title: "Let us build excellence together.",
        body:
          "A strong dealer relationship depends on consistent quality, clear communication, and products that customers can trust.",
        icon: Handshake,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "High-quality TMT bars support safer construction.",
        body:
          "High-quality TMT bars provide strength, durability, and flexibility that help dealers recommend ARS with confidence.",
        icon: Store,
        image: "/ars-assets/TMT-Bars.png",
      },
    ],
    carousel: [
      {
        title: "Product confidence",
        body:
          "ARS 550D and CRS 550D product stories help dealers answer customer questions with clearer proof.",
        icon: ShieldCheck,
        image: "/ars-assets/TMT-Bars.png",
        href: "/products",
        cta: "View products",
      },
      {
        title: "Quality and certification proof",
        body:
          "SGS and certification-led content supports dealer conversations with builders, contractors, and homeowners.",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
        href: "/certifications",
        cta: "View proof",
      },
      {
        title: "Local demand routing",
        body:
          "Dealer locator and enquiry paths help connect product interest to local buying support.",
        icon: MapPin,
        image: "/ars-assets/Contact_banner.png",
        href: "/dealer-locator",
        cta: "Dealer locator",
      },
      {
        title: "Dealer partnership",
        body:
          "The dealer route creates a dedicated path for business interest, product supply, and local sales support.",
        icon: Store,
        image: "/ars-assets/ARSHOME4.jpg",
        href: "/become-a-dealer",
        cta: "Apply now",
      },
      {
        title: "Steel price support",
        body:
          "Prepared price guidance helps dealers and buyers move toward an informed sales conversation.",
        icon: IndianRupee,
        image: "/ars-assets/products-all.png",
        href: "/steel-price-today",
        cta: "Check price",
      },
      {
        title: "Contractor confidence",
        body:
          "High-quality TMT bars support safer, more resilient projects for dealer customers.",
        icon: Wrench,
        image: "/ars-assets/ARSHOME1.jpg",
      },
    ],
    proof: {
      eyebrow: "Dealer network",
      title: "A clearer route from local demand to ARS product confidence.",
      body:
        "The dealer page should help prospective partners understand the product story, trust proof, and next step without forcing them through generic contact copy.",
      image: "/ars-assets/products-all.png",
      imageAlt: "ARS TMT bars for dealer distribution",
      badge: "Product proof, demand support, and dealer enquiry in one flow.",
      items: [
        {
          title: "Product range clarity",
          body: "ARS 550D and CRS 550D help dealers serve different site conditions.",
          icon: Store,
        },
        {
          title: "Trust-led selling",
          body: "Certification and testing pages give sales teams better proof points.",
          icon: BadgeCheck,
        },
        {
          title: "Business enquiry path",
          body: "Dedicated dealer CTAs separate partnership interest from buyer enquiries.",
          icon: Handshake,
        },
      ],
    },
    resources: [
      {
        title: "Become a dealer",
        body: "Use the dedicated dealer enquiry path for partnership interest.",
        href: "/become-a-dealer",
        icon: Store,
        image: "/ars-assets/Contact_banner.png",
      },
      {
        title: "Dealer locator",
        body: "See how local buying routes connect product interest to dealer discovery.",
        href: "/dealer-locator",
        icon: MapPin,
        image: "/ars-assets/ARSHOME4.jpg",
      },
      {
        title: "Product range",
        body: "Review ARS 550D and CRS 550D before a dealer conversation.",
        href: "/products",
        icon: ShieldCheck,
        image: "/ars-assets/products-all.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Dealer tools that support local demand and product confidence.",
      body:
        "Bring partnership information, product proof, dealer discovery, and price support into one cleaner business path.",
      ctaLabel: "Become a dealer",
      ctaHref: "/become-a-dealer",
    },
    support: {
      eyebrow: "Dealer support",
      title: "Get support from the ARS dealer team.",
      body:
        "Talk to ARS about partnership onboarding, product confidence, price guidance, and routing local buyer interest to the right next step.",
      phoneLabel: "Dealer desk",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For dealership, product, and business enquiries",
      tags: ["Product support", "Price guidance", "Territory enquiry", "Partner onboarding"],
      image: "/ars-assets/Contact_banner.png",
      imageAlt: "ARS dealer communication and support",
    },
    finalCta: {
      eyebrow: "Dealer programme",
      headline: "Ready to grow with ARS Green Steel?",
      body:
        "Start the dealer enquiry path and let the ARS team guide partnership, product, and territory conversations.",
      primaryLabel: "Become a dealer",
      primaryHref: "/become-a-dealer",
      secondaryLabel: "Talk to sales",
      secondaryHref: "/contact",
    },
  },
};

function AudienceSectionHeading({
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
      <SectionKicker variant={light ? "light" : "brand"}>{eyebrow}</SectionKicker>
      <h2 className={light ? "section-title section-title-light" : "section-title"}>{title}</h2>
      <p className={light ? "section-copy section-copy-light" : "section-copy"}>{body}</p>
    </div>
  );
}

function AudienceFeaturePanel({ card }: { card: AudienceCard }) {
  const Icon = card.icon;

  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-[18px] border border-ink-900/10 bg-brand-blue shadow-[0_22px_65px_rgba(15,23,42,0.08)]">
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/94 via-[#0D2B6E]/62 to-[#0D2B6E]/12" />
      <div className="relative flex min-h-[320px] flex-col justify-end p-7 md:p-9">
        <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/24 bg-white/14 text-white backdrop-blur">
          <Icon size={20} />
        </span>
        <h3 className="mt-7 max-w-xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">
          {card.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/76 md:text-base">{card.body}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
          Learn more <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );
}

function AudienceCarouselCard({ card }: { card: AudienceCard }) {
  const Icon = card.icon;
  const content = (
    <article className="group flex h-full min-h-[440px] flex-col overflow-hidden rounded-[14px] border border-brand-blue/14 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_24px_70px_rgba(13,43,110,0.14)]">
      <div className="relative h-44 shrink-0 overflow-hidden bg-[#eef2f7]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="320px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/36 to-transparent" />
        <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_14px_36px_rgba(6,13,30,0.18)]">
          <Icon size={21} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-ink-900">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel-700">{card.body}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue">
          {card.cta ?? "Learn more"} <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );

  return card.href ? (
    <Link className="focus-ring block w-[82vw] max-w-[330px] shrink-0 snap-start" href={card.href}>
      {content}
    </Link>
  ) : (
    <div className="w-[82vw] max-w-[330px] shrink-0 snap-start">{content}</div>
  );
}

function HomeownerAutoScrollCard({ card, hidden = false }: { card: AudienceCard; hidden?: boolean }) {
  const Icon = card.icon;
  const cardContent = (
    <article className="group flex min-h-[360px] w-[310px] flex-col overflow-hidden rounded-[16px] border border-brand-blue/12 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:w-[340px]">
      <div className="relative h-40 shrink-0 overflow-hidden bg-surface-50">
        <Image
          src={card.image}
          alt={hidden ? "" : card.title}
          fill
          sizes="340px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/20 to-transparent" />
        <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_14px_36px_rgba(6,13,30,0.14)]">
          <Icon size={21} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-ink-900">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel-700">{card.body}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue">
          {card.cta ?? "Learn more"} <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );

  if (hidden || !card.href) {
    return (
      <div className="shrink-0" aria-hidden={hidden}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link className="focus-ring block shrink-0" href={card.href}>
      {cardContent}
    </Link>
  );
}

function ProductPathStrip() {
  const products = [
    {
      title: "ARS 550D",
      label: "Core TMT range",
      body: "High-strength ductile TMT bars for residential, commercial, and everyday structural work.",
      image: "/ars-assets/TMT-Bars.png",
      href: "/products/ars-550d",
    },
    {
      title: "ARS CRS 550D",
      label: "Corrosion resistant",
      body: "CRS steel for coastal, humid, exposed, and durability-focused construction conditions.",
      image: "/ars-assets/CRS.png",
      href: "/products/ars-crs-550d",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={homeownerRail}>
        <div className="mb-12 max-w-4xl">
          <SectionKicker>Product paths</SectionKicker>
          <h2 className="section-title">Two product paths for stronger decisions.</h2>
          <p className="section-copy">
            Keep product choice simple: standard high-strength TMT for everyday structures, or
            corrosion-resistant steel for exposed conditions.
          </p>
        </div>

        <div className="grid gap-5">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="focus-ring group grid overflow-hidden rounded-[16px] border border-brand-blue/18 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-brand-blue/45 md:grid-cols-[0.42fr_1fr_auto]"
            >
              <div className="relative min-h-[210px] bg-surface-50">
                <Image
                  src={product.image}
                  alt={`${product.title} product logo`}
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                  {product.label}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold text-ink-900 md:text-4xl">
                  {product.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700">{product.body}</p>
              </div>
              <div className="flex items-center px-6 pb-6 md:px-8 md:pb-0">
                <span className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-bold text-white transition group-hover:bg-brand-red">
                  View product <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeownerProductRange() {
  const products = [
    {
      title: "ARS 550D",
      subtitle: "High Strength TMT Bar",
      grade: "Fe 550D",
      badge: "Core TMT grade",
      badgeColor: "bg-brand-blue",
      image: "/ars-assets/products-all.png",
      href: "/products/ars-550d",
      tags: ["High strength", "Ductility"],
    },
    {
      title: "ARS CRS 550D",
      subtitle: "Corrosion Resistant TMT Bar",
      grade: "CRS 550D",
      image: "/ars-assets/CRS.png",
      href: "/products/ars-crs-550d",
      tags: ["Corrosion resistance", "Exposed conditions"],
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={homeownerRail}>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <SectionKicker>Product range</SectionKicker>
            <h2 className={homeownerSectionTitle}>Useful ARS resources</h2>
            <p className={homeownerSectionCopy}>
              Compare the two available ARS TMT product paths before discussing the project with a
              contractor or dealer.
            </p>
          </div>
          <Link
            href="/products"
            className="focus-ring inline-flex h-12 w-fit items-center justify-center gap-3 rounded-[4px] border-2 border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            View All Products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[16px] border border-brand-blue/12 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,43,110,0.12)]"
            >
              <Link href={product.href} className="focus-ring block">
                <div className="relative h-56 overflow-hidden bg-surface-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/22 to-transparent" />
                  {product.badge ? (
                    <span
                      className={`absolute left-5 top-5 rounded-[4px] px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-white ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  ) : null}
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-steel-600">{product.subtitle}</p>
                  </div>
                  <span className="shrink-0 rounded-[5px] bg-brand-blue/7 px-3 py-2 text-sm font-bold text-brand-blue">
                    {product.grade}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-50 px-3 py-2 text-xs font-bold text-steel-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/request-quote"
                    className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-[5px] bg-surface-50 px-4 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                  >
                    Request product information
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeownerSupportSection() {
  const supportItems = ["Technical queries", "Order tracking", "Site assistance", "Dealer support"];

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-28">
      <div className={`${homeownerRail} grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center`}>
        <div>
          <SectionKicker>Support</SectionKicker>
          <h2 className={homeownerSectionTitle}>Get support from the ARS team.</h2>
          <p className={homeownerSectionCopy}>
            Our steel support team can help with product selection, construction guidance, dealer
            discovery, and site-level questions before you finalize materials.
          </p>

          <a
            href="tel:+919710411111"
            className="focus-ring mt-9 flex max-w-xl items-center gap-5 rounded-[14px] border border-brand-blue/10 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.04)] transition hover:border-brand-blue/30"
          >
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-brand-blue/7 text-brand-blue">
              <Phone size={22} />
            </span>
            <span>
              <span className="block font-technical text-xs font-black uppercase tracking-[0.18em] text-steel-500">
                Phone
              </span>
              <span className="mt-1 block font-display text-2xl font-bold text-ink-900">
                +91 97104 11111
              </span>
              <span className="mt-1 block text-sm font-semibold text-steel-500">
                For product, dealer, and project enquiries
              </span>
            </span>
          </a>

          <div className="mt-5 flex max-w-xl flex-wrap gap-3">
            {supportItems.map((item) => (
              <span
                key={item}
                className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-brand-blue/10 bg-white px-4 text-sm font-bold text-steel-700"
              >
                <BadgeCheck size={16} className="text-brand-blue" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[20px] shadow-[0_26px_75px_rgba(15,23,42,0.16)] lg:min-h-[520px]">
          <Image
            src="/ars-assets/home-owner-banner-1.png"
            alt="ARS support for homeowners choosing steel"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/18 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function AudienceResourceSection({ config }: { config: AudienceGuideConfig }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={homeownerRail}>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <SectionKicker>{config.resourceSection.eyebrow}</SectionKicker>
            <h2 className={homeownerSectionTitle}>{config.resourceSection.title}</h2>
            <p className={homeownerSectionCopy}>{config.resourceSection.body}</p>
          </div>
          <Link
            href={config.resourceSection.ctaHref}
            className="focus-ring inline-flex h-12 w-fit items-center justify-center gap-3 rounded-[4px] border-2 border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            {config.resourceSection.ctaLabel} <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {config.resources.map((resource) => (
            <article
              key={resource.title}
              className="group overflow-hidden rounded-[16px] border border-brand-blue/12 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,43,110,0.12)]"
            >
              <Link href={resource.href ?? "/contact"} className="focus-ring block">
                <div className="relative h-56 overflow-hidden bg-surface-50">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/22 to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_14px_36px_rgba(6,13,30,0.14)]">
                    <resource.icon size={21} />
                  </span>
                </div>
              </Link>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">
                  {resource.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-steel-700">{resource.body}</p>

                <div className="mt-6">
                  <Link
                    href={resource.href ?? "/contact"}
                    className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-[5px] bg-surface-50 px-4 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                  >
                    {resource.cta ?? "Open resource"} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSupportSection({ config }: { config: AudienceGuideConfig }) {
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-28">
      <div className={`${homeownerRail} grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center`}>
        <div>
          <SectionKicker>{config.support.eyebrow}</SectionKicker>
          <h2 className={homeownerSectionTitle}>{config.support.title}</h2>
          <p className={homeownerSectionCopy}>{config.support.body}</p>

          <a
            href={config.support.phoneHref}
            className="focus-ring mt-9 flex max-w-xl items-center gap-5 rounded-[14px] border border-brand-blue/10 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.04)] transition hover:border-brand-blue/30"
          >
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-brand-blue/7 text-brand-blue">
              <Phone size={22} />
            </span>
            <span>
              <span className="block font-technical text-xs font-black uppercase tracking-[0.18em] text-steel-500">
                {config.support.phoneLabel}
              </span>
              <span className="mt-1 block font-display text-2xl font-bold text-ink-900">
                {config.support.phone}
              </span>
              <span className="mt-1 block text-sm font-semibold text-steel-500">
                {config.support.phoneNote}
              </span>
            </span>
          </a>

          <div className="mt-5 flex max-w-xl flex-wrap gap-3">
            {config.support.tags.map((item) => (
              <span
                key={item}
                className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-brand-blue/10 bg-white px-4 text-sm font-bold text-steel-700"
              >
                <BadgeCheck size={16} className="text-brand-blue" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[20px] shadow-[0_26px_75px_rgba(15,23,42,0.16)] lg:min-h-[520px]">
          <Image
            src={config.support.image}
            alt={config.support.imageAlt}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/18 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function AudienceGuideAlignedContent({ config }: { config: AudienceGuideConfig }) {
  return (
    <>
      <section className="bg-white py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker>{config.intro.eyebrow}</SectionKicker>
            <h2 className={homeownerSectionTitle}>{config.intro.title}</h2>
            <p className={homeownerSectionCopy}>{config.intro.body}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {config.featurePanels.map((card) => (
              <AudienceFeaturePanel key={card.title} card={card} />
            ))}
          </div>

          <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden">
            <div className="marquee-frame rounded-none">
              <div className="marquee-track marquee-right py-1">
                {config.carousel.map((card) => (
                  <HomeownerAutoScrollCard key={card.title} card={card} />
                ))}
                {config.carousel.map((card) => (
                  <HomeownerAutoScrollCard key={`${card.title}-duplicate`} card={card} hidden />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-28">
        <div className={homeownerRail}>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <SectionKicker>{config.proof.eyebrow}</SectionKicker>
              <h2 className={homeownerSectionTitle}>{config.proof.title}</h2>
              <div className="mt-7 max-w-2xl space-y-6 text-base leading-8 text-steel-700 lg:text-lg">
                <p>{config.proof.body}</p>
                <p>{config.proof.badge}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {config.proof.items.map((item) => (
                  <span
                    key={item.title}
                    className="rounded-full bg-brand-blue/7 px-5 py-3 text-sm font-bold text-brand-blue"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[20px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                <Image
                  src={config.proof.image}
                  alt={config.proof.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/62 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[170px] overflow-hidden rounded-[18px]">
                  <Image
                    src={config.featurePanels[0]?.image ?? config.proof.image}
                    alt={config.featurePanels[0]?.title ?? config.proof.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/18" />
                </div>
                <div className="flex min-h-[170px] flex-col justify-between rounded-[18px] bg-brand-blue p-6 text-white">
                  <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/62">
                    {config.heroBadge}
                  </p>
                  <p className="font-display text-5xl font-bold">{config.stats[0]?.value ?? "ARS"}</p>
                  <p className="text-sm font-semibold leading-6 text-white/70">
                    {config.stats[0]?.label ?? "Support built into the buying path."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceResourceSection config={config} />

      <AudienceSupportSection config={config} />
    </>
  );
}

function HomeownerFigmaContent({ config }: { config: AudienceGuideConfig }) {
  const keyCards = [
    {
      title: "What makes ARS 550D right for a home?",
      body:
        "A simple guide to strength grade, ductility, concrete bonding, and why certified TMT bars matter inside foundations, beams, and pillars.",
      image: "/ars-assets/TMT-Bars.png",
      href: "/products/ars-550d",
      cta: "View ARS 550D",
    },
    {
      title: "Why CRS 550D matters for exposed conditions.",
      body:
        "For coastal, humid, and corrosion-prone construction zones, CRS steel adds a clearer durability path for long-life homes.",
      image: "/ars-assets/CRS.png",
      href: "/products/ars-crs-550d",
      cta: "Explore CRS 550D",
    },
  ];

  return (
    <>
      <section className="bg-white py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker>Home owners</SectionKicker>
            <h2 className={homeownerSectionTitle}>Key information for confident steel decisions.</h2>
            <p className={homeownerSectionCopy}>
              Get clear product guidance, proof points, and buying tools before choosing steel for your
              home.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {keyCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="focus-ring group relative min-h-[300px] overflow-hidden rounded-[18px] bg-brand-blue shadow-[0_24px_70px_rgba(13,43,110,0.14)]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/92 via-[#0D2B6E]/72 to-[#0D2B6E]/28" />
                <div className="relative flex min-h-[300px] flex-col justify-end p-7 md:p-8">
                  <span className="mb-5 inline-flex w-fit rounded-full border border-white/24 bg-white/12 px-4 py-2 font-technical text-xs font-black uppercase tracking-[0.18em] text-white">
                    Product proof
                  </span>
                  <h3 className="max-w-xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 md:text-base">{card.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                    {card.cta} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden">
            <div className="marquee-frame rounded-none">
              <div className="marquee-track marquee-right py-1">
                {config.carousel.map((card) => (
                  <HomeownerAutoScrollCard key={card.title} card={card} />
                ))}
                {config.carousel.map((card) => (
                  <HomeownerAutoScrollCard key={`${card.title}-duplicate`} card={card} hidden />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-28">
        <div className={homeownerRail}>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <SectionKicker>Additional information</SectionKicker>
              <h2 className={homeownerSectionTitle}>{config.proof.title}</h2>
              <div className="mt-7 max-w-2xl space-y-6 text-base leading-8 text-steel-700 lg:text-lg">
                <p>
                  Building a home is one of the most important investments a family makes. ARS
                  brings product proof, construction guidance, and expert support into one clear steel
                  decision journey.
                </p>
                <p>
                  From choosing the right grade of TMT bars to understanding requirements,
                  certifications, and dealer access, ARS helps homeowners move forward with confidence.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Technical guides", "Product specifications", "Construction tips", "Cost calculator"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-brand-blue/7 px-5 py-3 text-sm font-bold text-brand-blue"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[20px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                <Image
                  src={config.proof.image}
                  alt={config.proof.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/62 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[170px] overflow-hidden rounded-[18px]">
                  <Image
                    src="/ars-assets/products-all.png"
                    alt="ARS home construction guidance"
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/18" />
                </div>
                <div className="flex min-h-[170px] flex-col justify-between rounded-[18px] bg-brand-blue p-6 text-white">
                  <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/62">
                    Since
                  </p>
                  <p className="font-display text-3xl font-bold">ARS</p>
                  <p className="text-sm font-semibold leading-6 text-white/70">Guidance for steel choices at home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeownerProductRange />

      <HomeownerSupportSection />
    </>
  );
}

export function AudienceGuidePage({ slug }: { slug: AudienceGuideSlug }) {
  const config = audienceGuides[slug];
  const isHomeownerGuide = slug === "tmt-steel-bar-guide-homeowners";

  return (
    <main className="min-h-screen overflow-hidden bg-white text-ink-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#060D1E] text-white">
        <div className="absolute inset-0">
          <Image
            src={config.heroImage}
            alt={config.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/92 via-[#0D2B6E]/66 to-[#0D2B6E]/16" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/92 via-transparent to-[#060D1E]/8" />
        </div>

        <div className={`${homeownerRail} relative flex h-[56vh] min-h-[500px] max-h-[620px] items-end pb-9 pt-24 md:pt-28 lg:pb-11`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/78 backdrop-blur">
              <span className="size-2 rounded-full bg-brand-red" />
              {config.heroBadge}
            </div>
            <h1 className="mt-5 font-display text-[clamp(2.25rem,4.1vw,4.25rem)] font-bold uppercase leading-[1.03] tracking-normal [overflow-wrap:normal]">
              {config.heroTitle}
              <span className="sr-only"> </span>
              <span className="block text-brand-red">{config.heroAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/76 md:text-base">
              {config.heroBody}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-3 rounded-full bg-brand-red px-6 text-sm font-bold text-white shadow-[0_18px_44px_rgba(222,18,26,0.24)] transition hover:-translate-y-0.5 hover:bg-[#c90f16] md:text-base"
                href={config.primaryCta.href}
              >
                {config.primaryCta.label} <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/28 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-blue md:text-base"
                href={config.secondaryCta.href}
              >
                {config.secondaryCta.label} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isHomeownerGuide ? (
        <HomeownerFigmaContent config={config} />
      ) : (
        <AudienceGuideAlignedContent config={config} />
      )}

      <ContactCta
        eyebrow={config.finalCta.eyebrow}
        headline={config.finalCta.headline}
        body={config.finalCta.body}
        primaryLabel={config.finalCta.primaryLabel}
        primaryHref={config.finalCta.primaryHref}
        secondaryLabel={config.finalCta.secondaryLabel}
        secondaryHref={config.finalCta.secondaryHref}
      />
    </main>
  );
}
