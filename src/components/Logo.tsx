import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("font-display text-[1.05rem] tracking-[-0.04em]", className)} aria-label="AasanIt home">
      Aasan<span className="text-accent">It</span>
    </Link>
  );
}
