"use client";

import { useEffect, useMemo, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSmooth(!motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    gsap.registerPlugin(ScrollTrigger);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      html.style.scrollBehavior = previous;
      cancelAnimationFrame(id);
    };
  }, []);

  const options = useMemo(
    () => ({
      lerp: 0.22,
      wheelMultiplier: 0.9,
      syncTouch: false,
      autoRaf: true,
      anchors: smooth,
      smoothWheel: smooth,
    }),
    [smooth],
  );

  return (
    <ReactLenis root options={options}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
