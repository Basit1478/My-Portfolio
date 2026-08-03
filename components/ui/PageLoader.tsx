"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type LoaderState = "visible" | "leaving" | "hidden";

export function PageLoader() {
  const pathname = usePathname();
  const [state, setState] = useState<LoaderState>("visible");

  useEffect(() => {
    const startedAt = performance.now();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minimumVisibleTime = 2000;
    const exitTime = reduceMotion ? 160 : 180;
    let hasStartedExit = false;
    let leaveTimer = 0;
    let hideTimer = 0;

    setState("visible");
    document.documentElement.dataset.pageLoading = "true";

    const beginExit = () => {
      if (hasStartedExit) return;
      hasStartedExit = true;
      const remaining = Math.max(0, minimumVisibleTime - (performance.now() - startedAt));

      leaveTimer = window.setTimeout(() => {
        setState("leaving");
        delete document.documentElement.dataset.pageLoading;
        hideTimer = window.setTimeout(() => setState("hidden"), exitTime);
      }, remaining);
    };

    if (document.readyState === "complete") beginExit();
    else window.addEventListener("load", beginExit, { once: true });

    const safetyTimer = window.setTimeout(beginExit, minimumVisibleTime);

    return () => {
      window.removeEventListener("load", beginExit);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(safetyTimer);
      delete document.documentElement.dataset.pageLoading;
    };
  }, [pathname]);

  if (state === "hidden") return null;

  return (
    <div className="page-loader" data-state={state} role="status" aria-live="polite" aria-label="Loading Basit Ali portfolio">
      <div className="page-loader-stage" aria-hidden="true">
        <div className="page-loader-lenses">
          <i /><i /><i /><i /><i />
        </div>
        <p className="page-loader-copy">
          <strong>BASIT ALI</strong>
          <small>AI · DEVELOPMENT · DESIGN</small>
        </p>
      </div>
    </div>
  );
}
