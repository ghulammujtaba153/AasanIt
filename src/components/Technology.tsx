import { LineReveal } from "@/components/Reveal";
import { marqueeItems, techGroups } from "@/data/technologies";

export function Technology() {
  return (
    <section className="relative border-t border-line py-24 md:py-32">
      <div className="site-shell mb-16 md:mb-20">
        <LineReveal as="h2" className="display subhead" lines={["Built with", "the right", "tools."]} />
      </div>
      <div className="marquee border-y border-line py-6">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`} className="display px-6 text-[clamp(1.6rem,4vw,3.6rem)] text-ink/80">
                  {item}
                  <span className="ml-6 text-accent">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="site-shell mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {techGroups.map((group) => (
          <div key={group.label}>
            <p className="meta mb-4">{group.label}</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
