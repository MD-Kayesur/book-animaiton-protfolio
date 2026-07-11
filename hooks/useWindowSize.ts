"use client";

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function update() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = size.width > 0 && size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1200;

  return { ...size, isMobile, isTablet };
}
