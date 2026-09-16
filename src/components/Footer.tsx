import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-8">
      <div className="site-shell grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Logo className="text-xl" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-ink-muted">{site.tagline}</p>
        </div>
        <div>
          <p className="meta mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline-anim" data-cursor="open">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="underline-anim" data-cursor="talk">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="meta mb-4">Services</p>
          <ul className="space-y-2 text-sm text-ink-muted">
            {services.slice(0, 4).map((service) => (
              <li key={service.index}>{service.title.replace(" & ", " / ")}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="meta mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="underline-anim" data-cursor="talk">
                {site.email}
              </a>
            </li>
            <li className="text-ink-muted">{site.location}</li>
          </ul>
          <ul className="mt-6 flex gap-4 text-sm">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-anim"
                  data-cursor="open"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-shell mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name}</p>
        <div className="flex gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
