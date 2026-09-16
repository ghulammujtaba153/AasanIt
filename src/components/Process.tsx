"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineReveal } from "@/components/Reveal";
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
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current || reduced) return;
      const items = ref.current.querySelectorAll("[data-step]");
      gsap.fromTo(
        items,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 72%", once: true },
        },
      );
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <section ref={ref} className="relative bg-paper py-24 text-accent-ink md:py-32">
      <div className="site-shell">
        <LineReveal
          as="h2"
          className="display subhead text-accent-ink"
          lines={["From idea", "to production."]}
        />
        <ol className="mt-16 grid gap-10 md:mt-24 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li key={step.index} data-step className="border-t border-accent-ink/15 pt-6">
              <p className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-none tracking-[-0.06em] text-accent-ink/15">
                {step.index}
              </p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-accent-ink/65">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
