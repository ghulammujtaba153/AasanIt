"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Arrow } from "@/components/Arrow";
import { HeroCanvas } from "@/components/HeroCanvas";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      const lines = ref.current.querySelectorAll("[data-hero-line]");
      gsap.fromTo(
        lines,
        { y: "110%" },
        { y: "0%", duration: 1.15, stagger: 0.09, ease: "power3.out", delay: 0.12 },
      );
      gsap.fromTo(
        "[data-hero-meta]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.15 },
      );
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-[calc(var(--nav-h)+2rem)] md:pb-14"
    >
      <HeroCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />
      <div className="site-shell relative z-10">
        <p data-hero-meta className="meta mb-8">
          Digital solutions studio
        </p>
        <h1 className="display headline max-w-[18ch] text-ink" aria-label="We build digital solutions that work in the real world.">
          {["We build", "digital solutions", "that work in", "the real world."].map((line) => (
            <span key={line} className="block overflow-hidden">
              <span data-hero-line className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div className="mt-10 flex max-w-xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p data-hero-meta className="max-w-sm text-[1.02rem] leading-7 text-ink-muted">
            Web, mobile, cloud and product engineering for ambitious digital products.
          </p>
          <div data-hero-meta className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#work" className="link-arrow inline-flex" data-cursor="open">
              View selected work
              <Arrow />
            </Link>
            <Link href="/contact" className="link-arrow inline-flex text-ink-muted" data-cursor="talk">
              Start a project
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
