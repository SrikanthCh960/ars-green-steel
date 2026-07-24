export const productCatalog = [
  {
    slug: "ars-550d",
    name: "ARS 550D",
    route: "/products/ars-550d",
    homeEyebrow: "High-strength TMT bars",
    overviewTag: "Core TMT grade",
    description: "Engineered for high strength, superior ductility, and dependable performance, ARS 550D TMT Bars are built for modern construction.",
    homePoints: ["High strength", "Ductility and bendability", "Fe-550D · IS 1786:2008"],
    overviewPoints: ["High ductility", "Strong bendability", "Fe-550D · IS 1786:2008"],
    image: "/ars-assets/TMT-Bars.png",
  },
  {
    slug: "ars-crs-550d",
    name: "ARS CRS 550D",
    route: "/products/ars-crs-550d",
    homeEyebrow: "Corrosion-resistant TMT bars",
    overviewTag: "Corrosion-resistant grade",
    description: "Engineered for high-salinity, humid, and demanding environments, ARS CRS 550D combines superior corrosion resistance with high strength and ductility for durable reinforced concrete construction.",
    homePoints: ["Corrosion resistance", "Coastal and humid conditions", "Fe-550D · IS 1786:2008"],
    overviewPoints: ["Corrosion resistance", "Durability focus", "Fe-550D · IS 1786:2008"],
    image: "/ars-assets/CRS.png",
  },
] as const;

export const productComparisonRows = [
  { attr: "Best fit", standard: "General construction", crs: "Exposed and coastal sites" },
  { attr: "Environment", standard: "Standard conditions", crs: "Salt, humidity, and water exposure" },
  { attr: "Corrosion resistance", standard: "Standard TMT", crs: "Corrosion-resistant (CRS)" },
  { attr: "Grade and standard", standard: "Fe-550D · IS 1786:2008", crs: "Fe-550D · IS 1786:2008" },
] as const;

export const missingProductLeafletMessage =
  "The approved ARS 550D CRS product leaflet is not yet available for download.";
