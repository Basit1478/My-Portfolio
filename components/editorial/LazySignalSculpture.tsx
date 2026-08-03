"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SignalSculpture = dynamic(
  () => import("./SignalSculpture").then((m) => ({ default: m.SignalSculpture })),
  { ssr: false },
);

export function LazySignalSculpture() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const desktop = window.matchMedia("(min-width: 901px)");
    const saveData = window.matchMedia("(prefers-reduced-data: reduce)");
    if (!desktop.matches || saveData.matches) return;

    const activate = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(activate, { timeout: 1800 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = globalThis.setTimeout(activate, 900);
    return () => globalThis.clearTimeout(timer);
  }, [reducedMotion]);

  if (!enabled) return null;
  return <SignalSculpture />;
}
