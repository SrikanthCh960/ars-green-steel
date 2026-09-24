"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import type { CurrentCareerOpening } from "@/data/careers";

const maxResumeSize = 5 * 1024 * 1024;

export function CareerApplicationForm({ opening, enabled }: { opening: CurrentCareerOpening; enabled: boolean }) {
  const [summary, setSummary] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const submissionId = useRef("");
  const controlClass = "h-12 w-full min-w-0 rounded-md border border-brand-blue/20 bg-surface-50 px-4 text-base font-normal text-ink-900 outline-2 outline-offset-2 outline-transparent transition focus:border-brand-blue focus-visible:!outline-brand-blue";
  const labelClass = "grid gap-2 text-sm font-bold text-ink-900";

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileName("");
    setFileError("");
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf") || (file.type && file.type !== "application/pdf")) {
      setFileError("Please choose a PDF résumé.");
      event.target.value = "";
      return;
    }
    if (file.size > maxResumeSize) {
      setFileError("The PDF must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }
    setFileName(file.name);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || status === "submitting" || status === "success" || fileError) return;

    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    const form = new FormData(event.currentTarget);
    form.set("openingId", opening.id);
    form.set("submissionId", submissionId.current);
    setStatus("submitting");
    setMessage("");

    try {
      const result = await fetch("/api/career-applications", { method: "POST", body: form });
      const body: { ok?: boolean; message?: string } = await result.json();
      if (!result.ok || !body.ok) {
        setStatus("error");
        setMessage(body.message ?? "We could not save your application. Please try again later.");
        return;
      }
      setStatus("success");
      setMessage(body.message ?? "Thank you. Your application has been received by ARS Careers.");
    } catch {
      setStatus("error");
      setMessage("We could not save your application. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-brand-blue/15 bg-white p-7 shadow-[0_16px_38px_rgba(13,43,110,0.08)] md:p-9" role="status">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">Application received</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink-900">Thank you for applying.</h2>
        <p className="mt-4 text-base leading-7 text-steel-700">{message}</p>
        <p className="mt-2 text-base leading-7 text-steel-700">Our team will review your application for {opening.title} in {opening.region}.</p>
        <Link href="/careers#current-openings" className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-brand-blue hover:text-brand-blue-dark">View current openings <ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
    );
  }

  return (
    <div className="min-w-0 rounded-xl border border-brand-blue/10 bg-white p-5 shadow-[0_16px_38px_rgba(13,43,110,0.08)] sm:p-7 md:p-9">
      {!enabled && <div id="career-preview-notice" className="border-l-2 border-brand-blue bg-surface-50 px-4 py-3 text-sm leading-6 text-steel-700">
        <strong className="text-ink-900">Form preview.</strong> Online submissions are not active yet. Information entered here is not saved or sent.
      </div>}
      <div className={`${enabled ? "" : "mt-8 "}border-b border-brand-blue/10 pb-7`}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">Application details</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight text-ink-900">Tell us about yourself.</h2>
        <p className="mt-3 text-base leading-7 text-steel-700">Enter your contact details, briefly describe your experience, and attach your résumé as a PDF.</p>
      </div>

      <form method="post" data-lead-form onSubmit={handleSubmit} aria-describedby={enabled ? "career-submit-feedback" : "career-preview-notice"} className="mt-8 grid gap-6">
        <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="career-company-website">Company website</label><input id="career-company-website" name="companyWebsite" type="text" autoComplete="off" tabIndex={-1} /></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass} htmlFor="career-full-name">Full name <span className="sr-only">required</span><input id="career-full-name" name="fullName" autoComplete="name" required maxLength={100} placeholder="Your full name" className={controlClass} /></label>
          <label className={labelClass} htmlFor="career-email">Email address <span className="sr-only">required</span><input id="career-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className={controlClass} /></label>
        </div>
        <label className={labelClass} htmlFor="career-phone">Mobile number <span className="sr-only">required</span><input id="career-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={30} placeholder="+91 98765 43210" className={controlClass} /></label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass} htmlFor="career-role">Selected role<input id="career-role" name="role" value={opening.title} readOnly className={`${controlClass} cursor-default bg-surface-100/60 font-semibold`} /></label>
          <label className={labelClass} htmlFor="career-region">Region<input id="career-region" name="region" value={opening.region} readOnly className={`${controlClass} cursor-default bg-surface-100/60 font-semibold`} /></label>
        </div>

        <div>
          <label className={labelClass} htmlFor="career-summary">Relevant experience <span className="sr-only">required</span></label>
          <p id="career-summary-hint" className="mt-2 text-sm leading-6 text-steel-700">Briefly describe your experience and why this role interests you.</p>
          <textarea id="career-summary" name="summary" value={summary} onChange={(event) => setSummary(event.target.value)} maxLength={500} required rows={5} placeholder="Share your relevant experience in a few sentences…" aria-describedby="career-summary-hint career-summary-count" className={`${controlClass} mt-3 h-auto min-h-32 resize-y py-3`} />
          <p id="career-summary-count" className="mt-2 text-right text-xs text-steel-700">{summary.length} / 500 characters</p>
        </div>

        <div>
          <label className={labelClass} htmlFor="career-resume">Upload résumé (PDF) <span className="sr-only">required</span></label>
          <p id="career-resume-hint" className="mt-2 text-sm leading-6 text-steel-700">One PDF file, up to 5 MB.</p>
          <input id="career-resume" name="resume" type="file" accept=".pdf,application/pdf" required aria-describedby="career-resume-hint career-resume-feedback" onChange={handleResumeChange} className="mt-3 block min-h-12 w-full rounded-md border border-brand-blue/20 bg-surface-50 px-3 py-2 text-sm text-steel-700 outline-2 outline-offset-2 outline-transparent file:mr-4 file:rounded file:border-0 file:bg-brand-blue file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white focus-visible:!outline-brand-blue" />
          <div id="career-resume-feedback" aria-live="polite" className="mt-2 min-h-6 text-sm">
            {fileError ? <p className="text-brand-red">{fileError}</p> : fileName ? <p className="flex items-center gap-2 text-brand-blue"><FileText size={16} aria-hidden="true" /> {fileName}</p> : null}
          </div>
        </div>

        <p className="text-sm leading-6 text-steel-700">ARS will use these details to review your application and contact you about this role. See the <Link href="/privacy-policy" className="focus-ring font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-blue-dark">Privacy Policy</Link>.</p>
        <button type="submit" disabled={!enabled || status === "submitting" || Boolean(fileError)} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-55">{status === "submitting" ? "Submitting application…" : "Submit application"} <ArrowRight size={17} aria-hidden="true" /></button>
        <p id="career-submit-feedback" role={status === "error" ? "alert" : "status"} aria-live="polite" className={`text-center text-sm ${status === "error" ? "text-brand-red" : "text-steel-700"}`}>{message || (!enabled ? "Submission will be enabled after secure application storage is configured." : "")}</p>
      </form>
    </div>
  );
}
