"use client";

import { useEffect, useState } from "react";

export function useIsTouch() {
  const [touch, setTouch] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setTouch(media.matches || navigator.maxTouchPoints > 0);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return touch;
}
