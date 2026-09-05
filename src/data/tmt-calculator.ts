export const calculatorRegions = ["Tamil Nadu", "Andhra Pradesh", "Kerala", "Karnataka"] as const;
export type CalculatorRegion = (typeof calculatorRegions)[number];

export const calculatorCities: Record<CalculatorRegion, readonly string[]> = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Tirunelveli", "Erode", "Vellore"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati", "Nellore", "Kurnool", "Rajahmundry"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Kannur", "Alappuzha"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi", "Davanagere", "Ballari"],
};

export const calculatorProducts = ["ARS CRS Fe 550D", "ARS Fe 550D"] as const;
export type CalculatorProduct = (typeof calculatorProducts)[number];

export const requirementModes = ["Rods", "Bundles", "Weight (Kgs)"] as const;
export type RequirementMode = (typeof requirementModes)[number];

export const calculatorBars = [
  { size: "8mm", piecesPerBundle: 10, meanBundleWeight: 46.482 },
  { size: "10mm", piecesPerBundle: 7, meanBundleWeight: 50.856 },
  { size: "12mm", piecesPerBundle: 5, meanBundleWeight: 52.826 },
  { size: "16mm", piecesPerBundle: 3, meanBundleWeight: 56.3825 },
  { size: "20mm", piecesPerBundle: 2, meanBundleWeight: 59.365 },
  { size: "25mm", piecesPerBundle: 1, meanBundleWeight: 46.2625 },
  { size: "32mm", piecesPerBundle: 1, meanBundleWeight: 75.829 },
] as const;

export type CalculatorBar = (typeof calculatorBars)[number];
export type CalculatorInputs = Record<string, number>;

// Approved source: Price - Formula workbook (Regionwise Vs Dia Vs Product) - New.xlsx.
// Values mirror the workbook's base price, region adjustment, diameter adjustment, and GST formula.
const workbookPriceInputs = {
  gst: 0.18,
  basePricePerTon: {
    "ARS Fe 550D": 58050.84745762712,
    "ARS CRS Fe 550D": 60169.491525423735,
  } satisfies Record<CalculatorProduct, number>,
  regionAdjustmentPerTon: {
    "Tamil Nadu": 0,
    "Andhra Pradesh": -1200,
    Kerala: -2450,
    Karnataka: -1250,
  } satisfies Record<CalculatorRegion, number>,
  diameterAdjustmentPerTon: {
    "8mm": 847.5,
    "10mm": 0,
    "12mm": 0,
    "16mm": 0,
    "20mm": 0,
    "25mm": 0,
    "32mm": 847.5,
  } as Record<CalculatorBar["size"], number>,
} as const;

export function getRatePerKg(region: string, product: string, size: string) {
  const basePrice = workbookPriceInputs.basePricePerTon[product as CalculatorProduct];
  const regionAdjustment = workbookPriceInputs.regionAdjustmentPerTon[region as CalculatorRegion];
  const diameterAdjustment = workbookPriceInputs.diameterAdjustmentPerTon[size as CalculatorBar["size"]];

  if (basePrice === undefined || regionAdjustment === undefined || diameterAdjustment === undefined) return 0;
  return ((basePrice + regionAdjustment + diameterAdjustment) * (1 + workbookPriceInputs.gst)) / 1000;
}

export function calculateBar(bar: CalculatorBar, mode: RequirementMode, input: number) {
  const safeInput = Number.isFinite(input) && input > 0 ? input : 0;
  const rods = mode === "Bundles"
    ? safeInput * bar.piecesPerBundle
    : mode === "Weight (Kgs)"
      ? Math.round((safeInput / bar.meanBundleWeight) * bar.piecesPerBundle)
      : safeInput;
  const bundles = rods < bar.piecesPerBundle ? 0 : Math.floor(rods / bar.piecesPerBundle);
  const remainingRods = bundles === 0 ? rods : rods - bundles * bar.piecesPerBundle;
  const kilograms = (rods / bar.piecesPerBundle) * bar.meanBundleWeight;

  return { input: safeInput, rods, bundles, remainingRods, kilograms };
}

export const calculatorNotes = [
  "The above prices are inclusive of all taxes.",
  "Each piece is 12 m long.",
  "All dimensions are subject to BIS tolerances. Customers should satisfy themselves, as far as the number of pieces are concerned, at the time of delivery.",
  "Delivery Charges will be extra (Transportation & Loading /Un-loading).",
];

export const calculatorFaqs = [
  [
    "How does the TMT calculator calculate requirements?",
    "Choose a region, product, requirement mode, and diameter-wise quantity. The calculator applies the approved bundle-piece, mean-weight, and GST-inclusive rate rules for every selected diameter.",
  ],
  [
    "Can I calculate by rods, bundles, or weight?",
    "Yes. Rod and bundle quantities are converted to rods using the approved pieces-per-bundle values. Weight inputs are converted to whole rods using the approved mean-weight rounding rule.",
  ],
  [
    "Does the displayed rate include tax and delivery?",
    "The displayed rate is inclusive of all taxes. Delivery Charges will be extra (Transportation & Loading /Un-loading).",
  ],
] as const;
