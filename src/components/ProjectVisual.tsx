import type { ProjectVisual as VisualKind } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectVisual({ kind, className }: { kind: VisualKind; className?: string }) {
  return (
    <div className={cn("project-visual relative aspect-[16/10] w-full", className)}>
      <div className="project-media absolute inset-0 grid-bg opacity-70" />
      <svg viewBox="0 0 800 500" className="project-media absolute inset-0 h-full w-full" aria-hidden>
        {kind === "lattice" ? <Lattice /> : null}
        {kind === "orbit" ? <Orbit /> : null}
        {kind === "bars" ? <Bars /> : null}
        {kind === "nodes" ? <Nodes /> : null}
      </svg>
      <span className="meta absolute bottom-4 left-4 rounded-sm border border-line bg-bg/70 px-2 py-1">
        Placeholder visual
      </span>
    </div>
  );
}

function Lattice() {
  return (
    <g fill="none" stroke="#f4f1ea" strokeWidth="1">
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={`v-${i}`} d={`M${80 + i * 80} 40 V460`} opacity={0.16} />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={`h-${i}`} d={`M40 ${70 + i * 70} H760`} opacity={0.16} />
      ))}
      <circle cx="400" cy="240" r="72" stroke="#c8f542" />
      <circle cx="400" cy="240" r="4" fill="#c8f542" stroke="none" />
      <path d="M180 140 L400 240 L620 140" stroke="#c8f542" opacity="0.7" />
      <path d="M180 360 L400 240 L620 360" stroke="#f4f1ea" opacity="0.35" />
    </g>
  );
}

function Orbit() {
  return (
    <g fill="none" stroke="#f4f1ea">
      <ellipse cx="400" cy="250" rx="240" ry="90" opacity="0.2" />
      <ellipse cx="400" cy="250" rx="160" ry="160" opacity="0.15" />
      <ellipse cx="400" cy="250" rx="90" ry="240" opacity="0.18" />
      <circle cx="400" cy="250" r="8" fill="#c8f542" stroke="none" />
      <circle cx="620" cy="220" r="6" fill="#f4f1ea" stroke="none" />
      <circle cx="250" cy="330" r="5" fill="#c8f542" stroke="none" />
      <path d="M400 250 L620 220 M400 250 L250 330" stroke="#c8f542" opacity="0.55" />
    </g>
  );
}

function Bars() {
  const heights = [90, 160, 120, 220, 150, 280, 190, 240, 130, 200];
  return (
    <g>
      {heights.map((h, i) => (
        <rect
          key={h + i}
          x={90 + i * 62}
          y={420 - h}
          width="28"
          height={h}
          fill={i === 5 ? "#c8f542" : "#f4f1ea"}
          opacity={i === 5 ? 0.9 : 0.18}
        />
      ))}
      <path d="M80 80 H720" stroke="#f4f1ea" opacity="0.12" />
    </g>
  );
}

function Nodes() {
  const points = [
    [160, 140],
    [400, 90],
    [640, 150],
    [220, 300],
    [500, 280],
    [380, 400],
  ];
  return (
    <g stroke="#f4f1ea">
      <path
        d="M160 140 L400 90 L640 150 L500 280 L380 400 L220 300 Z M400 90 L500 280 M160 140 L220 300"
        fill="none"
        opacity="0.28"
      />
      {points.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i === 1 ? 7 : 5} fill={i === 1 ? "#c8f542" : "#f4f1ea"} stroke="none" />
      ))}
    </g>
  );
}
