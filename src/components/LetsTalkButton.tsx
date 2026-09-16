"use client";

import Link from "next/link";
import { Arrow } from "@/components/Arrow";

type LetsTalkButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  "data-menu-item"?: boolean | string;
};

export function LetsTalkButton({ className, children, onClick, ...props }: LetsTalkButtonProps) {
  return (
    <Link href="/book" className={className} data-cursor="talk" onClick={onClick} {...props}>
      {children ?? (
        <>
          Let&apos;s Talk
          <Arrow />
        </>
      )}
    </Link>
  );
}
