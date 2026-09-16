"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const pointer = { x: 0, y: 0 };
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
      pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
    };

    const project = (x: number, y: number, z: number, tiltX: number, tiltY: number) => {
      const rx = x + tiltX * 80;
      const ry = y + tiltY * 40;
      const perspective = 520;
      const scale = perspective / (perspective + z);
      return {
        x: width / 2 + rx * scale,
        y: height * 0.42 + ry * scale,
      };
    };

    const draw = () => {
      const scrollTilt = Math.min(0.45, window.scrollY / 900);
      mouse.tx = pointer.x;
      mouse.ty = pointer.y + scrollTilt;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      ctx.clearRect(0, 0, width, height);

      const cols = 18;
      const rows = 12;
      const spacing = 78;
      const originZ = 40;

      ctx.strokeStyle = "rgba(244,241,234,0.22)";
      ctx.lineWidth = 1;

      for (let r = 0; r < rows; r += 1) {
        ctx.beginPath();
        for (let c = 0; c < cols; c += 1) {
          const x = (c - (cols - 1) / 2) * spacing;
          const z = originZ + r * 64;
          const p = project(x, 90, z, mouse.x, mouse.y);
          if (c === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      for (let c = 0; c < cols; c += 1) {
        ctx.beginPath();
        for (let r = 0; r < rows; r += 1) {
          const x = (c - (cols - 1) / 2) * spacing;
          const z = originZ + r * 64;
          const p = project(x, 90, z, mouse.x, mouse.y);
          if (r === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      const nodes = [
        { x: -180, y: -70, z: 180 },
        { x: 40, y: -140, z: 240 },
        { x: 210, y: -40, z: 160 },
        { x: -40, y: 10, z: 90 },
        { x: 120, y: -20, z: 320 },
      ];

      ctx.strokeStyle = "rgba(200,245,66,0.28)";
      nodes.forEach((node, index) => {
        const a = project(node.x, node.y, node.z, mouse.x, mouse.y);
        const next = nodes[(index + 1) % nodes.length];
        const b = project(next.x, next.y, next.z, mouse.x, mouse.y);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      nodes.forEach((node, index) => {
        const p = project(node.x, node.y, node.z, mouse.x, mouse.y);
        ctx.beginPath();
        ctx.fillStyle = index === 1 ? "#c8f542" : "rgba(244,241,234,0.85)";
        ctx.arc(p.x, p.y, index === 1 ? 3.4 : 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduced) frame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (reduced) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
