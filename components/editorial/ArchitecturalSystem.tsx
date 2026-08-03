"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function ArchitecturalSystem() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 20 });
  const layerX = useTransform(springX, [-1, 1], [-12, 12]);
  const layerY = useTransform(springY, [-1, 1], [-8, 8]);
  const middleX = useTransform(layerX, value => value * -0.5);
  const middleY = useTransform(layerY, value => value * -0.5);

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div className="studio-sketch" aria-label="A system sketch showing an idea becoming a shipped AI experience">
      <motion.div className="sketch-paper sketch-back" style={reduceMotion ? undefined : { x: layerX, y: layerY }} />
      <motion.div className="sketch-paper sketch-middle" style={reduceMotion ? undefined : { x: middleX, y: middleY }} />
      <motion.div className="sketch-paper sketch-front" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}>
        <div className="sketch-label">A SMALL SYSTEM SKETCH</div>
        <svg viewBox="0 0 600 420" role="img" aria-label="Intent flows into reasoning, tools and a shipped experience">
          <path className="sketch-line" pathLength="1" d="M90 125 C180 78 205 102 270 160 S390 190 480 110" />
          <path className="sketch-line secondary" pathLength="1" d="M110 305 C190 250 228 270 300 235 S420 250 500 310" />
          <path className="sketch-line faint" pathLength="1" d="M175 105 L185 330 M300 142 L300 285 M432 95 L420 325" />
          <circle className="sketch-dot active" cx="90" cy="125" r="8" /><circle className="sketch-dot" cx="270" cy="160" r="6" /><circle className="sketch-dot active" cx="480" cy="110" r="8" />
          <circle className="sketch-dot" cx="110" cy="305" r="6" /><circle className="sketch-dot active" cx="300" cy="235" r="8" /><circle className="sketch-dot" cx="500" cy="310" r="6" />
          <text x="62" y="95">INTENT</text><text x="242" y="132">REASON</text><text x="447" y="80">TOOLS</text><text x="270" y="211">VERIFY</text><text x="455" y="342">SHIP</text>
          <path className="sketch-arrow" d="M471 106 l-14 -7 m14 7 l-8 12" />
        </svg>
        <div className="sketch-footer"><span>UNDERSTAND</span><span>DESIGN</span><span>BUILD</span><span>VERIFY</span></div>
      </motion.div>
      <div className="sketch-note note-one">01 / ASK BETTER QUESTIONS</div>
      <div className="sketch-note note-two">02 / MAKE THE NEXT STEP OBVIOUS</div>
      <motion.div className="sketch-signal" animate={reduceMotion ? undefined : { opacity: [0, 1, 1, 0], x: [0, 210] }} transition={{ duration: 2.1, delay: 1.15, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
    </div>
  );
}
