"use client";

import { useState } from "react";
import { Arrow } from "@/components/Arrow";
import { LineReveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState("01");

  return (
    <section id="services" className="relative border-t border-line py-24 md:py-32">
      <div className="site-shell">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <LineReveal as="h2" className="display subhead" lines={["Capabilities,", "not catalogs."]} />
          <p className="meta md:mb-3">01 — 06</p>
        </div>
        <ul>
          {services.map((service) => (
            <li key={service.index}>
              <button
                type="button"
                className={cn("service-row w-full text-left", active === service.index && "is-open")}
                onMouseEnter={() => setActive(service.index)}
                onFocus={() => setActive(service.index)}
                onClick={() => setActive(service.index)}
                data-cursor="open"
              >
                <span
                  className={cn(
                    "font-mono text-sm tracking-[0.16em] transition-colors duration-500",
                    active === service.index ? "text-accent" : "text-ink-faint",
                  )}
                >
                  {service.index}
                </span>
                <span>
                  <span className="display block text-[clamp(1.8rem,3.4vw,3.4rem)]">{service.title}</span>
                  <span className="service-copy mt-3 block max-w-xl text-[0.98rem] leading-7 text-ink-muted">
                    {service.description}
                  </span>
                </span>
                <span className="hidden items-center gap-6 md:flex">
                  <span className="meta">{service.keywords}</span>
                  <Arrow className={cn("w-8 transition-transform duration-500", active === service.index && "translate-x-2 text-accent")} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
