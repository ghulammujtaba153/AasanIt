"use client";

import { LineReveal, Reveal } from "@/components/Reveal";

const nodes = [
  { id: "data", label: "Data", x: 18, y: 22 },
  { id: "models", label: "Models", x: 82, y: 18 },
  { id: "tools", label: "Tools", x: 90, y: 58 },
  { id: "memory", label: "Memory", x: 70, y: 88 },
  { id: "workflows", label: "Workflows", x: 28, y: 86 },
  { id: "users", label: "Users", x: 8, y: 52 },
];

export function AISection() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="site-shell grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <LineReveal as="h2" className="display subhead" lines={["AI isn't", "a feature.", "It's", "infrastructure."]} />
          <Reveal className="mt-8 max-w-md">
            <p className="text-[1.05rem] leading-8 text-ink-muted">
              We build intelligent systems around real business workflows — from AI agents and RAG
              applications to automation and decision-support tools.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative aspect-square w-full max-w-[560px] justify-self-end">
            <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="System map connecting data, models, tools, memory, workflows and users">
              <g stroke="rgba(244,241,234,0.18)" strokeWidth="0.25" fill="none">
                {nodes.map((node) => (
                  <line key={node.id} x1="50" y1="50" x2={node.x} y2={node.y} className="ai-line" />
                ))}
                <circle cx="50" cy="50" r="18" stroke="rgba(200,245,66,0.45)" />
              </g>
              <circle cx="50" cy="50" r="1.6" fill="#c8f542" />
              <text x="50" y="51.2" textAnchor="middle" fill="#c8f542" fontSize="3.2" letterSpacing="0.4">
                SYSTEM
              </text>
              {nodes.map((node) => (
                <g key={node.id}>
                  <circle cx={node.x} cy={node.y} r="1.3" fill="#f4f1ea" />
                  <text
                    x={node.x}
                    y={node.y - 3.4}
                    textAnchor="middle"
                    fill="#8d8c84"
                    fontSize="3"
                    className="uppercase"
                    style={{ letterSpacing: "0.35px" }}
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
            <ul className="mt-6 grid grid-cols-2 gap-2 md:hidden">
              {nodes.map((node) => (
                <li key={node.id} className="meta border border-line px-3 py-2">
                  {node.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
