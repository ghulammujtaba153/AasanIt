import { LineReveal, Reveal } from "@/components/Reveal";

const nodes = [
  { id: "users", label: "Users", x: 18, y: 22 },
  { id: "product", label: "Product", x: 82, y: 18 },
  { id: "data", label: "Data", x: 90, y: 58 },
  { id: "cloud", label: "Cloud", x: 70, y: 88 },
  { id: "apis", label: "APIs", x: 28, y: 86 },
  { id: "ops", label: "Ops", x: 12, y: 52 },
];

export function SystemsSection() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="site-shell grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <LineReveal
            as="h2"
            className="display subhead"
            lines={["Digital", "solutions,", "end to end."]}
          />
          <Reveal className="mt-8 max-w-md">
            <p className="text-[1.05rem] leading-8 text-ink-muted">
              Interfaces, APIs, data and cloud — built as one system. We engineer the whole
              solution, not a pile of disconnected parts.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative aspect-square w-full max-w-[560px] justify-self-end">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              role="img"
              aria-label="System map connecting users, product, data, cloud, APIs and operations"
            >
              <g stroke="rgba(244,241,234,0.18)" strokeWidth="0.25" fill="none">
                {nodes.map((node) => (
                  <line key={node.id} x1="50" y1="50" x2={node.x} y2={node.y} className="ai-line" />
                ))}
                <circle cx="50" cy="50" r="18" stroke="rgba(200,245,66,0.45)" />
              </g>
              <text x="50" y="51.2" textAnchor="middle" fill="#c8f542" fontSize="3.2" letterSpacing="0.4">
                SYSTEM
              </text>
              {nodes.map((node) => (
                <text
                  key={node.id}
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#8d8c84"
                  fontSize="3"
                  className="uppercase"
                  style={{ letterSpacing: "0.35px" }}
                >
                  {node.label}
                </text>
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
