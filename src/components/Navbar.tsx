"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Arrow } from "@/components/Arrow";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

gsap.registerPlugin(useGSAP);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useGSAP(
    () => {
      if (!open) return;
      gsap.fromTo(
        "[data-menu-item]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.7, ease: "power3.out" },
      );
    },
    { dependencies: [open] },
  );

  return (
    <>
      <header className={cn("nav-bar", scrolled && "is-scrolled")}>
        <div className="site-shell grid h-full grid-cols-2 items-center md:grid-cols-3">
          <Logo />
          <nav className="hidden items-center justify-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="meta underline-anim text-ink" data-cursor="open">
                {link.label}
              </Link>
            ))}
          </nav>
            <div className="flex items-center justify-end">
          <Link
            href="/contact"
            className="link-arrow hidden text-sm md:inline-flex"
            data-cursor="talk"
          >
            Let&apos;s Talk
            <Arrow />
          </Link>
          <button
            type="button"
            className="meta text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
          </div>
        </div>
      </header>

      {open ? (
        <div id="mobile-menu" className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mb-auto flex items-center justify-between pt-2">
            <Logo />
            <button type="button" className="meta" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-4 pb-10" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-menu-item
                className="display text-[clamp(2.6rem,12vw,5.2rem)] leading-[0.92]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              data-menu-item
              className="display text-[clamp(2.6rem,12vw,5.2rem)] leading-[0.92] text-accent"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </nav>
          <p data-menu-item className="meta pb-6">
            {site.email}
          </p>
        </div>
      ) : null}
    </>
  );
}
