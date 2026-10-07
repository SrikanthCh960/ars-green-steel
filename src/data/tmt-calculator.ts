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

export const pricingWorkbookDetails = {
  approvedOn: "2026-10-07",
  sourceLabel: "ARS pricing workbook approved 7 October 2026",
  rateBasis: "Fe 550D base rate with grade and diameter adjustments",
  reviewCadence: "Date refreshed every 3 days; rates revised when ARS confirms",
  taxesIncluded: true,
  freightIncluded: false,
  loadingAndUnloadingIncluded: false,
  quotationValidity: "Stated on the confirmed ARS quotation",
} as const;

const priceDateRefreshStart = Date.UTC(2026, 9, 7);
const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;

export function getPriceUpdatedOnLabel(now = new Date()) {
  const indiaDateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const indiaDate = Object.fromEntries(indiaDateParts.map(({ type, value }) => [type, value]));
  const today = Date.UTC(Number(indiaDate.year), Number(indiaDate.month) - 1, Number(indiaDate.day));
  const lastRefresh = priceDateRefreshStart - 24 * 60 * 60 * 1000
    + Math.floor((today - priceDateRefreshStart) / threeDaysInMilliseconds) * threeDaysInMilliseconds;
  const approvedDate = Date.parse(pricingWorkbookDetails.approvedOn);
  const displayedDate = new Date(Math.max(approvedDate, lastRefresh));
  const dateLabel = new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(displayedDate);

  return `${dateLabel} (Tamil Nadu)`;
}

// Approved source: Price - Formula workbook (Regionwise Vs  Dia Vs Product) - New Up - 07-Oct-26.xlsx.
// Price Chart Per Ton!A2:J12: (product base + region adjustment + diameter adjustment) × (1 + GST).
const workbookPriceInputs = {
  gst: 0.18,
  basePricePerTon: {
    "ARS Fe 550D": 66525.42372881356,
    "ARS CRS Fe 550D": 67372.8813559322,
  } satisfies Record<CalculatorProduct, number>,
  regionAdjustmentPerTon: {
    "Tamil Nadu": 0,
    "Andhra Pradesh": -1200,
    Kerala: -2450,
    Karnataka: -1250,
  } satisfies Record<CalculatorRegion, number>,
  diameterAdjustmentPerTon: {
    "8mm": 1271,
    "10mm": 0,
    "12mm": 0,
    "16mm": 0,
    "20mm": 0,
    "25mm": 0,
    "32mm": 1271,
  } as Record<CalculatorBar["size"], number>,
} as const;

export function getRatePerKg(region: string, product: string, size: string) {
  const basePrice = workbookPriceInputs.basePricePerTon[product as CalculatorProduct];
  const regionAdjustment = workbookPriceInputs.regionAdjustmentPerTon[region as CalculatorRegion];
  const diameterAdjustment = workbookPriceInputs.diameterAdjustmentPerTon[size as CalculatorBar["size"]];

  if (basePrice === undefined || regionAdjustment === undefined || diameterAdjustment === undefined) return 0;
  const workbookRatePerTonIncludingGst = (basePrice + regionAdjustment + diameterAdjustment) * (1 + workbookPriceInputs.gst);
  return workbookRatePerTonIncludingGst / 1000;
}

export function getWorkbookPriceRows(region: CalculatorRegion, product: CalculatorProduct) {
  return calculatorBars.map((bar) => {
    const perKg = getRatePerKg(region, product, bar.size);
    const rodWeight = bar.meanBundleWeight / bar.piecesPerBundle;

    return {
      ...bar,
      perKg,
      perTon: perKg * 1000,
      rodWeight,
      approximateRodPrice: perKg * rodWeight,
    };
  });
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
