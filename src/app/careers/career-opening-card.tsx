"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type CareerOpeningCardProps = {
  id: string;
  number: number;
  title: string;
  region: string;
  positions: number;
  description: string;
};

export function CareerOpeningCard({ id, number, title, region, positions, description }: CareerOpeningCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionId = useId();

  return (
    <li className="rounded-xl border border-brand-blue/15 bg-white p-5 shadow-[0_16px_38px_rgba(13,43,110,0.08)] transition-shadow hover:shadow-[0_20px_42px_rgba(13,43,110,0.12)] md:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_96px] items-center gap-x-4 gap-y-5 md:grid-cols-[40px_minmax(0,1.45fr)_minmax(0,0.95fr)_94px] lg:grid-cols-[40px_minmax(0,1.5fr)_minmax(0,0.85fr)_94px_190px_105px] lg:gap-x-5">
        <span className="col-span-2 text-sm font-bold text-brand-blue/70 md:col-span-1">{String(number).padStart(2, "0")}</span>
        <div className="col-span-2 min-w-0 md:col-span-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue">Role</p>
          <h3 className="mt-1 font-display text-lg font-bold leading-6 text-ink-900">{title}</h3>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue">Region</p>
          <p className="mt-1 text-sm font-medium leading-5 text-steel-700">{region}</p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue">Positions</p>
          <p className="mt-1 text-sm font-bold text-brand-blue">{positions}</p>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={descriptionId}
          onClick={() => setIsOpen((current) => !current)}
          className="focus-ring col-span-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand-blue/20 px-2 text-[11px] font-bold text-brand-blue transition-colors hover:border-brand-blue/45 hover:bg-surface-50 focus-visible:!outline-brand-blue md:col-span-2 md:text-sm lg:col-span-1"
        >
          <span>{isOpen ? "Hide Job Description" : "View Job Description"}</span>
          <ChevronDown size={16} aria-hidden="true" className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <Link
          href={`/careers/apply?opening=${encodeURIComponent(id)}`}
          aria-label={`Apply for ${title} in ${region}`}
          title={`Apply for ${title} in ${region}`}
          className="focus-ring col-span-1 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-blue px-4 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark md:col-span-2 lg:col-span-1"
        >
          Apply
        </Link>
      </div>
      <div id={descriptionId} hidden={!isOpen} className="mt-5 border-t border-brand-blue/10 pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">Job Description</p>
        <p className="mt-2 max-w-3xl text-base leading-7 text-steel-700">{description}</p>
      </div>
    </li>
  );
}
