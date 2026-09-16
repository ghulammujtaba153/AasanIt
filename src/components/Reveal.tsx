"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

function register() {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  once?: boolean;
};

export function Reveal({ children, className, y = 36, delay = 0, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    register();
    if (!ref.current || reduced) return;
    const tween = gsap.fromTo(
      ref.current,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced, y, delay, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type LineRevealProps = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
};

export function LineReveal({ lines, as: Tag = "h2", className, lineClassName }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const label = lines.join(" ");

  useEffect(() => {
    register();
    const root = ref.current;
    if (!root || reduced) return;
    const items = root.querySelectorAll("[data-line]");
    const tween = gsap.fromTo(
      items,
      { y: "110%" },
      {
        y: "0%",
        duration: 1.05,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced, label]);

  return (
    <Tag ref={ref as never} className={className} aria-label={label}>
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden">
          <span data-line className={cn("block will-change-transform", lineClassName)}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
