"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

export function AnimatedWordmark({ href = "/", compact = false, collapseOnScroll = false }: { href?: string; compact?: boolean; collapseOnScroll?: boolean }) {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [scrollState, setScrollState] = useState({ scrolled: false, collapsed: false });

  useEffect(() => {
    const y = window.scrollY;
    setScrollState({ scrolled: y > 0, collapsed: collapseOnScroll && y > 20 });
  }, [collapseOnScroll]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = { scrolled: latest > 0, collapsed: collapseOnScroll && latest > 20 };
    setScrollState((current) =>
      current.scrolled === next.scrolled && current.collapsed === next.collapsed ? current : next,
    );
  });

  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 38, mass: 0.72 };

  const fade = reduceMotion
    ? { duration: 0 }
    : { duration: 0.16, ease: [0.23, 1, 0.32, 1] as const };

  const collapsed = scrollState.collapsed;

  return (
    <Link
      className={`animated-wordmark ${compact ? "compact" : ""}`}
      href={href}
      aria-label="Basit Ali, home"
      data-scrolled={scrollState.scrolled || undefined}
      data-collapsed={collapsed || undefined}
    >
      <span className="wordmark-slot" aria-hidden="true">
        <motion.span
          className="wordmark-lockup"
          initial={false}
          animate={{ transform: collapsed ? "scale(1.015)" : "scale(1)" }}
          transition={spring}
        >
          <span className="wordmark-anchor">B</span>
          <motion.span
            className="wordmark-segment"
            initial={false}
            animate={{
              width: collapsed ? 0 : "auto",
              opacity: collapsed ? 0 : 1,
              transform: collapsed ? "translateX(-0.24em) scaleX(0.9)" : "translateX(0em) scaleX(1)",
              filter: collapsed ? "blur(1.5px)" : "blur(0px)",
            }}
            transition={{ width: spring, transform: spring, opacity: fade, filter: fade }}
          >
            ASIT&nbsp;
          </motion.span>
          <span className="wordmark-anchor">A</span>
          <motion.span
            className="wordmark-segment"
            initial={false}
            animate={{
              width: collapsed ? 0 : "auto",
              opacity: collapsed ? 0 : 1,
              transform: collapsed ? "translateX(-0.16em) scaleX(0.9)" : "translateX(0em) scaleX(1)",
              filter: collapsed ? "blur(1.5px)" : "blur(0px)",
            }}
            transition={{ width: spring, transform: spring, opacity: fade, filter: fade }}
          >
            LI
          </motion.span>
          <span className="wordmark-signal" />
        </motion.span>
      </span>
    </Link>
  );
}
