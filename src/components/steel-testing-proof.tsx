import { ShieldCheck } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionKicker } from "@/components/section-kicker";

const tests = [
  {
    title: "Bend & Rebend Test",
    body: "Assesses flexibility and ductility by bending a bar to a specified angle and straightening it again, confirming its ability to withstand physical stress without cracking.",
    src: "/ars-assets/Sizes/Bend_RebendTest.mp4",
  },
  {
    title: "Martensite & Ring Test",
    body: "Reviews hardness and microstructural composition, including martensite formation, to support assessment of strength and wear resistance.",
    src: "/ars-assets/Sizes/Martensite_RingTest.mp4",
  },
  {
    title: "Tensile Test",
    body: "Applies tension until the bar breaks to assess maximum load capacity and elongation behaviour under tension.",
    src: "/ars-assets/Sizes/TensileTest.mp4",
  },
] as const;

export function SteelTestingProof() {
  return (
    <MotionSection className="bg-white py-20 md:py-24">
      <div className="ars-container">
        <SectionKicker variant="brand">TESTED FOR CONFIDENCE</SectionKicker>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink-900">See the quality checks behind ARS steel.</h2>
          <p className="text-[15px] leading-[1.8] text-steel-700">Review the local test recordings that demonstrate bendability, microstructure, strength, and elongation—key characteristics considered in reinforcement steel quality.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {tests.map((test) => (
            <article key={test.title} className="border border-ink-900/10 bg-surface-50 p-4 md:p-5">
              <div className="overflow-hidden bg-ink-950">
                <video className="aspect-video w-full object-cover" controls playsInline preload="metadata" aria-label={`ARS ${test.title} video`}>
                  <source src={test.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="px-1 pb-1 pt-5">
                <ShieldCheck size={20} className="text-brand-red" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[1.3rem] font-bold text-ink-900">{test.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.75] text-steel-700">{test.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
