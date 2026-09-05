import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import type { CareerJob } from "@/data/careers";

type CareerOpeningsProps = {
  jobs: CareerJob[];
};

export function CareerOpenings({ jobs }: CareerOpeningsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {jobs.map((job) => (
        <article key={job.slug} className="group flex min-h-[310px] flex-col border border-ink-900/10 bg-white p-6 transition duration-300 hover:border-brand-blue/35 md:p-8">
          <div className="flex items-start justify-between gap-5">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[8px] bg-brand-blue/7 text-brand-blue ring-1 ring-brand-blue/10">
              <BriefcaseBusiness size={21} aria-hidden="true" />
            </span>
            <span className="text-right text-xs font-bold uppercase tracking-[0.12em] text-steel-700">Previous role profile</span>
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">{job.department}</p>
          <h3 className="mt-3 font-display text-[1.7rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink-900">{job.shortTitle}</h3>
          <p className="mt-2 text-sm font-semibold text-steel-700">{job.experience} experience</p>
          <p className="mt-5 flex-1 text-base leading-7 text-steel-700">{job.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {job.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full bg-surface-50 px-3 py-1.5 text-xs font-semibold text-steel-700">{highlight}</span>
            ))}
          </div>
          <Link href={`/careers/${job.slug}`} className="focus-ring mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-brand-blue transition group-hover:gap-3">
            View role details <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  );
}
