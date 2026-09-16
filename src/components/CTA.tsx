"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "@/components/Arrow";
import { LetsTalkButton } from "@/components/LetsTalkButton";
import { LineReveal } from "@/components/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current || reduced) return;
      gsap.fromTo(
        "[data-cta-arrow]",
        { x: -20, opacity: 0.4 },
        {
          x: 12,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        },
      );
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <section ref={ref} className="relative border-t border-line py-28 md:py-40">
      <div className="site-shell">
        <p className="meta mb-8">Next</p>
        <LineReveal as="h2" className="display headline" lines={["Have an", "idea?", "Let's build", "it."]} />
        <LetsTalkButton className="mt-12 inline-flex items-center gap-6 text-accent">
          <span className="text-lg">Start a conversation</span>
          <span data-cta-arrow>
            <Arrow className="h-16 w-16 md:h-24 md:w-24" />
          </span>
        </LetsTalkButton>
      </div>
    </section>
  );
}
