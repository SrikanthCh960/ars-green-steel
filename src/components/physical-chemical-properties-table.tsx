type PropertyRow = readonly [property: string, unit: string, standard: string, ars: string];

type PhysicalChemicalPropertiesTableProps = {
  grade: "Fe 550D" | "Fe 550D CRS";
  chemicalRows: readonly PropertyRow[];
  physicalRows: readonly PropertyRow[];
};

const presentationRows = {
  "Fe 550D": {
    chemical: [
      ["Carbon", "%", "0.25 Max", "0.25 Max"],
      ["Phosphorous", "%", "0.04 Max", "0.04 Max"],
      ["Sulphur", "%", "0.04 Max", "0.04 Max"],
      ["P + S", "%", "0.075 Max", "0.070 Max"],
      ["*CE (Carbon equivalent)", "%", "0.42 Min", "0.35 Min"],
    ],
    physical: [
      ["Yield Strength", "N/mm2", "550 Min", "560 Min"],
      ["Tensile Strength", "N/mm2", "600 Min", "630 Min"],
      ["TS / YS", "Ratio", "1.08 Min", "1.10 Min"],
      ["Elongation", "%", "14.5 Min", "16 Min 22 Max"],
    ],
  },
  "Fe 550D CRS": {
    chemical: [
      ["Carbon", "%", "0.25 Max", "0.25 Max"],
      ["Phosphorous", "%", "0.04 Max", "0.04 Max"],
      ["Sulphur", "%", "0.04 Max", "0.04 Max"],
      ["P + S", "%", "0.075 Max", "0.070 Max"],
      ["*CRE (Cr+Cu+Mo+Ni)", "%", "Not Less than 0.4%", "Not less than 0.40%"],
    ],
    physical: [
      ["Yield Strength", "N/mm2", "550 Min", "560 Min"],
      ["Tensile Strength", "N/mm2", "600 Min", "630 Min"],
      ["TS / YS", "Ratio", "1.08 Min", "1.10 Min"],
      ["Elongation", "%", "14.5 Min", "16 Min"],
    ],
  },
} as const satisfies Record<PhysicalChemicalPropertiesTableProps["grade"], { chemical: readonly PropertyRow[]; physical: readonly PropertyRow[] }>;

function PropertiesTable({
  label,
  grade,
  rows,
}: {
  label: "CHEMICAL PROPERTIES" | "PHYSICAL PROPERTIES";
  grade: PhysicalChemicalPropertiesTableProps["grade"];
  rows: readonly PropertyRow[];
}) {
  return (
    <div className="min-w-0 overflow-x-auto">
      <table className="min-w-[560px] w-full border-collapse text-left text-black">
        <caption className="bg-brand-blue p-4 text-center text-[clamp(1.25rem,2.2vw,1.7rem)] font-extrabold text-white">{label}</caption>
        <thead>
          <tr className="align-middle text-center text-[clamp(0.95rem,1.65vw,1.25rem)] font-extrabold leading-[1.1]">
            <th scope="col" className="w-[36%] px-3 py-4">Properties</th>
            <th scope="col" className="w-[13%] px-3 py-4">Unit</th>
            <th scope="col" className="w-[22%] px-3 py-4">IS 1786 – 2008</th>
            <th scope="col" className="w-[29%] bg-[#fff900] px-3 py-4">ARS {grade}</th>
          </tr>
        </thead>
        <tbody className="text-[clamp(0.92rem,1.55vw,1.2rem)] leading-[1.18]">
          {rows.map(([property, unit, standard, ars], index) => (
            <tr key={property} className={index % 2 === 0 ? "bg-white" : "bg-surface-50"}>
              <th scope="row" className="px-3 py-3 font-medium">{property}</th>
              <td className="px-3 py-3 text-center">{unit}</td>
              <td className="px-3 py-3 text-center">{standard}</td>
              <td className="bg-[#fff900] px-3 py-3 text-center font-extrabold">{ars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PhysicalChemicalPropertiesTable({ grade }: Pick<PhysicalChemicalPropertiesTableProps, "grade">) {
  const rows = presentationRows[grade];

  return (
    <section className="overflow-hidden border border-brand-blue/20 bg-white p-4 text-ink-900 shadow-[0_10px_24px_rgba(6,13,30,0.1)] sm:p-6" aria-label={`Physical and chemical properties for ARS ${grade}`}>
      <header className="bg-ink-950 px-4 py-5 text-center text-[clamp(2rem,4.2vw,3.5rem)] font-serif font-bold leading-none text-white">
        Physical &amp; Chemical Properties
      </header>
      <h3 className="bg-surface-50 py-5 text-center text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-none text-brand-blue">{grade}</h3>
      <div className="grid gap-6 xl:grid-cols-2">
        <PropertiesTable label="CHEMICAL PROPERTIES" grade={grade} rows={rows.chemical} />
        <PropertiesTable label="PHYSICAL PROPERTIES" grade={grade} rows={rows.physical} />
      </div>
      {grade === "Fe 550D CRS" ? <p className="mt-5 text-[clamp(0.95rem,1.5vw,1.2rem)] font-medium">*Corrosion resistant equivalent</p> : null}
    </section>
  );
}
