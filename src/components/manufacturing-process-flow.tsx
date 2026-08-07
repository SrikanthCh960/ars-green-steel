import Image from "next/image";

type ManufacturingProcessFlowProps = {
  stages: readonly string[];
};

const iconByStage: Record<string, string> = {
  "Raw Material": "/ars-assets/manufacturing/Raw_Material.svg",
  "Steel Making": "/ars-assets/manufacturing/Steel_Making.svg",
  "Continuous Casting": "/ars-assets/manufacturing/Continuous_Casting.svg",
  "Billet Formation": "/ars-assets/manufacturing/Billet_Formation.svg",
  "Rolling Mill": "/ars-assets/manufacturing/Rolling_Mill.svg",
  "Thermo Mechanical Treatment": "/ars-assets/manufacturing/Thermo_Mechanical_Treatment.svg",
  "Cooling Bed": "/ars-assets/manufacturing/Cooling_Bed.svg",
  "Cutting & Bundling": "/ars-assets/manufacturing/Cutting_&_Bundling.svg",
  Dispatch: "/ars-assets/manufacturing/Dispatch.svg",
};

export function ManufacturingProcessFlow({ stages }: ManufacturingProcessFlowProps) {
  const rows = [stages.slice(0, 3), stages.slice(3, 6), stages.slice(6, 9)];

  return (
    <ol className="manufacturing-process-flow mt-14 list-none">
      {rows.map((row, rowIndex) => (
        <li key={rowIndex} className="manufacturing-process-row relative grid list-none gap-8 lg:grid-cols-3 lg:gap-[108px]">
          {row.map((stage, columnIndex) => {
            const index = rowIndex * 3 + columnIndex;

            return (
              <div key={stage} className="relative">
                <div className="manufacturing-process-step relative flex min-h-36 items-center gap-5 rounded-[16px] border border-brand-blue/10 bg-white px-6 py-6 shadow-[0_10px_28px_rgba(13,43,110,0.07)] md:min-h-40 md:px-8 lg:min-h-[152px] lg:gap-5 lg:px-7">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-[58px] shrink-0 items-center justify-center rounded-full border-2 border-brand-blue font-technical text-[20px] font-medium tracking-[-0.04em] text-brand-blue"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={iconByStage[stage]}
                    alt=""
                    width={84}
                    height={84}
                    className="size-[78px] shrink-0 object-contain"
                  />
                  <h3 className="min-w-0 font-display text-lg font-bold leading-[1.1] text-ink-900 lg:text-[25px]">
                    {stage}
                  </h3>
                </div>
                {columnIndex < 2 ? <span aria-hidden="true" className="manufacturing-process-arrow" /> : null}
              </div>
            );
          })}
        </li>
      ))}
    </ol>
  );
}
