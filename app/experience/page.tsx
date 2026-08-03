import type { Metadata } from "next";
import { InnerShell, PageFooter } from "@/components/editorial/InnerShell";

export const metadata: Metadata = { title: "Experience — Basit Ali", description: "Experience across frontend engineering, product design and intelligent systems." };

const experience = [
  ["ONGOING", "Founder & AI Engineer — Codizzz", "Founded an AI solutions agency delivering automation and agentic products from requirements through cloud deployment."],
  ["ONGOING", "Founder — AgentHubPK", "Building a multi-agent platform unifying HR, marketing and strategic-planning workflows for companies."],
  ["1.5+ YEARS", "GIAIC — Agentic AI", "Training in Python, TypeScript, Next.js, OpenAI Agents SDK, Claude Code, OpenClaw and agentic system development."],
];

export default function ExperiencePage() {
  return <InnerShell><section className="page-hero experience-hero"><span data-page-intro>EXPERIENCE / PRACTICE</span><h1 data-page-intro>Agentic systems.<br /><em>Built end to end.</em></h1><p data-page-intro>I work from specification and workflow design through implementation, containerization and cloud deployment.</p></section><section className="experience-ledger">{experience.map(([year, role, copy], index) => <article data-page-reveal key={role}><span>0{index + 1}</span><time>{year}</time><h2>{role}</h2><p>{copy}</p></article>)}</section><section className="capability-field"><div data-page-reveal><span>CORE CAPABILITIES</span><h2>From agent logic<br />to deployed product.</h2></div><div className="capability-list"><p data-page-reveal><b>AI</b> OpenAI Agents SDK, agentic workflows, RAG and tool integration</p><p data-page-reveal><b>Engineering</b> Python, TypeScript, Next.js, React, FastAPI and APIs</p><p data-page-reveal><b>Infrastructure</b> Docker, Kubernetes, AWS, Azure, Kafka and PostgreSQL</p><p data-page-reveal><b>Design</b> Graphic design, responsive interfaces and visual communication</p></div></section><PageFooter /></InnerShell>;
}
