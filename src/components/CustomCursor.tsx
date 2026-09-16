"use client";

import { useEffect, useRef, useState } from "react";
import { useIsTouch } from "@/hooks/useIsTouch";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const touch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const [mode, setMode] = useState<"default" | "hover" | "view">("default");
  const [label, setLabel] = useState("");
  const enabled = !touch && !reduced;

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const resolve = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const cursor = target?.closest?.("[data-cursor]");
      const interactive = target?.closest?.("a, button, summary, [data-cursor]");
      const value = cursor?.getAttribute("data-cursor");

      if (value === "view") {
        setMode("view");
        setLabel("View");
      } else if (value === "talk") {
        setMode("hover");
        setLabel("Let's talk");
      } else if (interactive) {
        setMode("hover");
        setLabel(value === "open" ? "Open →" : "Open →");
      } else {
        setMode("default");
        setLabel("");
      }
    };

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.22;
      pos.y += (mouse.y - pos.y) * 0.22;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", resolve);
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", resolve);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className={cn("custom-cursor", mode === "hover" && "is-hover", mode === "view" && "is-view")}
      aria-hidden
    >
      <span className="custom-cursor-label">{label}</span>
    </div>
  );
}
