"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineReveal } from "@/components/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const statements = [
  "AI from day one.",
  "Design that serves the product.",
  "Engineering built for production.",
  "Cloud without the complexity.",
  "Product thinking, not just code.",
];

export function Differentiators() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current || reduced) return;
      const lines = ref.current.querySelectorAll("[data-diff]");
      gsap.fromTo(
        lines,
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        },
      );
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <section ref={ref} className="relative border-t border-line py-24 md:py-32">
      <div className="site-shell">
        <LineReveal as="h2" className="display subhead" lines={["Why", "we build", "different."]} />
        <ul className="mt-16 space-y-4 md:mt-24">
          {statements.map((statement, index) => (
            <li
              key={statement}
              data-diff
              className="display border-b border-line py-4 text-[clamp(1.5rem,4.2vw,3.6rem)]"
            >
              <span className="mr-4 font-mono text-sm text-accent">0{index + 1}</span>
              {statement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
