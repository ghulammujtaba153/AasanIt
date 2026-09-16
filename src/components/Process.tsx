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
            end: () => `+=${distance() * 1.2}`,
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
        <div className="site-shell relative flex flex-col pt-[calc(var(--nav-h)+1.25rem)] pb-16 md:h-full md:pb-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display subhead max-w-[10ch]">
              From idea
              <br />
              to production.
            </h2>
            <p className="meta hidden text-accent-ink/50 md:block" aria-live="polite">
              {steps[active].index} / 04
            </p>
          </div>
          <span className="relative mt-6 hidden h-px bg-accent-ink/15 md:block">
            <span
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-accent-ink"
            />
          </span>

          <div
            ref={trackRef}
            className="process-track mt-10 flex min-h-0 flex-col items-stretch md:h-full md:flex-row"
          >
            {steps.map((step) => (
              <article
                key={step.index}
                className="process-panel flex min-h-0 flex-col justify-start border-t border-accent-ink/10 py-10 first:border-t-0 md:h-full md:justify-end md:border-l md:border-t-0 md:px-2 md:py-0 md:pr-20 md:first:border-l-0"
              >
                <p className="font-display text-[clamp(5rem,18vw,12rem)] leading-[0.8] tracking-[-0.07em] text-accent-ink/12">
                  {step.index}
                </p>
                <h3 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.05em]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-md text-[1.05rem] leading-8 text-accent-ink/65">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
