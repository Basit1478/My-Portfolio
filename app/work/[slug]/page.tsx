import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerShell, PageFooter } from "@/components/editorial/InnerShell";
import { ProjectArtwork } from "@/components/work/ProjectArtwork";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const project = getProject((await params).slug); return project ? { title: `${project.title} — Basit Ali`, description: project.summary } : {}; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug); if (!project) notFound();
  const current = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(current + 1) % projects.length];
  return <InnerShell><article className="case-study gallery-case"><header className="case-study-hero"><div><span data-page-intro>{project.index} / CASE STUDY</span><h1 data-page-intro>{project.title}</h1><p data-page-intro>{project.shortTitle}</p><div data-page-intro className="project-links"><a href={project.github} target="_blank" rel="noreferrer">VIEW GITHUB ↗</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">VIEW LIVE ↗</a>}</div></div><dl data-page-intro><div><dt>DISCIPLINE</dt><dd>{project.discipline}</dd></div><div><dt>YEAR</dt><dd>{project.year}</dd></div><div><dt>ROLE</dt><dd>AI &amp; FULL-STACK DEVELOPMENT</dd></div></dl></header><div data-page-reveal className="case-study-art"><ProjectArtwork project={project} large /></div><section data-page-reveal className="case-thesis"><span>THE THESIS</span><h2>{project.thesis}</h2></section><section className="case-narrative"><article data-page-reveal><span>01 / CHALLENGE</span><h3>Finding the useful signal.</h3><p>{project.challenge}</p></article><article data-page-reveal><span>02 / RESPONSE</span><h3>One system, clearly expressed.</h3><p>{project.response}</p></article><article data-page-reveal><span>03 / OUTCOME</span><h3>A foundation built to evolve.</h3><p>{project.outcome}</p></article></section><Link data-page-reveal className="next-project" href={`/work/${next.slug}`}><span>NEXT CASE STUDY</span><h2>{next.title}</h2><b>→</b></Link></article><PageFooter /></InnerShell>;
}
