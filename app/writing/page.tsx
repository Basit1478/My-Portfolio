import type { Metadata } from "next";
import Link from "next/link";
import { InnerShell, PageFooter } from "@/components/editorial/InnerShell";

export const metadata: Metadata = { title: "Writing — Basit Ali", description: "Notes on intelligent interfaces, frontend engineering and design systems." };

const notes: string[][] = [];

export default function WritingPage() {
  return <InnerShell><section className="page-hero writing-hero"><span data-page-intro>DOCUMENTATION / FIELD NOTES</span><h1 data-page-intro>Systems explained,<br /><em>not just shipped.</em></h1><p data-page-intro>Field notes are being curated for the next release.</p></section>{notes.length > 0 ? <section className="notes-index">{notes.map(([date, title, excerpt, meta, url], index) => <a data-page-reveal key={title} href={url} target="_blank" rel="noreferrer"><span>0{index + 1}</span><time>{date}</time><div><small>{meta}</small><h2>{title}</h2><p>{excerpt}</p></div></a>)}</section> : <section className="notes-empty"><p>New writing is being prepared.</p><Link href="/#live">Explore live projects</Link></section>}<PageFooter /></InnerShell>;
}
