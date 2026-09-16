"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    index: "01",
    title: "Discover",
    copy: "Understand the product, users and business problem before a line of code is written.",
  },
  {
    index: "02",
    title: "Design",
    copy: "Define the experience, architecture and interaction as one system.",
  },
  {
    index: "03",
    title: "Build",
    copy: "Engineer the product with scalable technology, clear interfaces and production discipline.",
  },
  {
    index: "04",
    title: "Launch",
    copy: "Deploy, monitor and iterate. Shipping is the start of the work, not the end.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const pin = pinRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!pin || !track || reduced) return;

      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        const viewport = track.parentElement;
        if (!viewport) return;
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${Math.max(viewport.clientWidth, distance()) * 1.35}`,
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = Math.min(
                steps.length - 1,
                Math.round(self.progress * (steps.length - 1)),
              );
              setActive(index);
              if (progress) {
                gsap.set(progress, { scaleX: self.progress });
              }
            },
          },
        });

        return () => tween.kill();
      });

      return () => media.revert();
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-paper text-accent-ink"
      aria-label="From idea to production"
    >
      <div ref={pinRef} className="process-pin">
        <div className="site-shell relative flex h-full min-h-0 flex-col pt-[calc(var(--nav-h)+1rem)] pb-8">
          <div className="flex shrink-0 items-end justify-between gap-6">
            <h2 className="display subhead relative z-10 max-w-[10ch]">
              From idea
              <br />
              to production.
            </h2>
            <p className="meta hidden text-accent-ink/50 md:block" aria-live="polite">
              {steps[active].index} / 04
            </p>
          </div>
          <span className="relative mt-5 hidden h-px shrink-0 bg-accent-ink/15 md:block">
            <span
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-accent-ink"
            />
          </span>

          <div className="process-viewport mt-6 min-h-0 flex-1 overflow-x-hidden md:overflow-hidden">
            <div ref={trackRef} className="process-track flex h-full flex-col md:flex-row">
              {steps.map((step) => (
                <article
                  key={step.index}
                  className="process-panel flex flex-col justify-start border-t border-accent-ink/10 py-10 first:border-t-0 md:justify-end md:border-l md:border-t-0 md:px-2 md:py-0 md:pr-20 md:first:border-l-0"
                >
                  <p className="process-index font-display tracking-[-0.07em] text-accent-ink/12">
                    {step.index}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(2rem,4.2vw,3.75rem)] tracking-[-0.05em]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[1.05rem] leading-8 text-accent-ink/65">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
