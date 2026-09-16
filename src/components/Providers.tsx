"use client";

import { CustomCursor } from "@/components/CustomCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
