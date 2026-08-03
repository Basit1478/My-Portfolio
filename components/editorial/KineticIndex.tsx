"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

export function KineticIndex({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();
  return <div className="kinetic-index" aria-label="Selected projects">
    {projects.map((project, index) => <motion.a key={project.slug} className={`kinetic-row kinetic-${project.tone}`} href={`/work/${project.slug}`} whileHover={reduceMotion ? undefined : { x: 12 }} transition={{ duration: .18, ease: [.23, 1, .32, 1] }}>
      <span className="kinetic-number">0{index + 1}</span><span className="kinetic-title">{project.title}</span><span className="kinetic-discipline">{project.discipline}</span><span className="kinetic-arrow">↗</span>
    </motion.a>)}
  </div>;
}
