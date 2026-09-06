"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatedWordmark } from "@/components/navigation/AnimatedWordmark";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { SiteNav } from "@/components/navigation/SiteNav";
import { LazySignalSculpture } from "@/components/editorial/LazySignalSculpture";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";

const Arrow = () => (
  <svg className="gallery-arrow" aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M4 12 12 4M6 4h6v6" />
  </svg>
);

const liveBuilds = [
  { title: "Veyra", type: "Editorial e-commerce experience", url: "https://veyra-ecommerce-store.vercel.app/", image: "/projects/veyra-ecommerce.png", alt: "Veyra e-commerce opening screen in deep green with an Azadi Edition presentation" },
  { title: "Velora", type: "Immersive restaurant experience", url: "https://velora-restaurent.vercel.app/", image: "/projects/velora-restaurant-branded.png", alt: "Velora restaurant wordmark across a dark atmospheric opening screen" },
  { title: "Morrow Dental", type: "Calm, editorial dental practice website", url: "https://morrow-dental.vercel.app/", image: "/projects/morrow-dental.png", alt: "Morrow Dental opening screen with an illustrated dental motif" },
  { title: "Acmeem", type: "Event management & business consulting", url: "https://acmeem.vercel.app", image: "/projects/acmeem.png", alt: "Acmeem projects page for industry conferences and events" },
  { title: "Blazon 360", type: "Independent marketing agency build", url: "https://blazon360.vercel.app", image: "/projects/blazon360.png", alt: "Blazon 360 agency website loading screen and brand mark" },
  { title: "Ali Rent a Car", type: "Car rental website · Karachi", url: "https://ali-rent-a-car.vercel.app", image: "/projects/ali-rent-a-car.png", alt: "Ali Rent a Car homepage featuring its vehicle booking experience" },
  { title: "Infology", type: "Publishing & ideas platform", url: "https://infology.vercel.app", image: "/projects/infology.png", alt: "Infology publishing platform homepage" },
] as const;

const labProjects = [
  { title: "PRD Generator", type: "Product requirements tool", url: "https://prd-generator-1.vercel.app/", image: "/projects/prd-generator.webp", alt: "PRD Generator landing page with a Generate PRD action" },
  { title: "Avion", type: "Furniture commerce website", url: "https://avion-website.vercel.app/", image: "/projects/avion.webp", alt: "Avion furniture brand homepage" },
  { title: "Personal Library", type: "Collection manager", url: "https://personal-library-manager-000basit.streamlit.app/", image: "/projects/personal-library.webp", alt: "Personal Library Manager add-book interface" },
  { title: "Secure Data", type: "Encryption utility", url: "https://encryption-secure-data00.streamlit.app/", image: "/projects/secure-encryption.webp", alt: "Secure Data Encryption reauthorization interface" },
  { title: "Password Strength", type: "Security utility", url: "https://password-strength-meter000-basit.streamlit.app/", image: "/projects/password-strength.webp", alt: "Password Strength Meter interface" },
  { title: "Countdown Timer", type: "Time utility", url: "https://count-down-timer-op-basit.streamlit.app/", image: "/projects/countdown-timer.webp", alt: "Countdown Timer controls" },
  { title: "QR Encoder", type: "Generator and decoder", url: "https://qr-code-generator-oi0-basit.streamlit.app/", image: "/projects/qr-generator.webp", alt: "QR Code Encoder and Decoder interface" },
  { title: "Rock Paper Scissors", type: "Interactive game", url: "https://rps-game-rps0-basit.streamlit.app/", image: "/projects/rps-game.webp", alt: "Rock Paper Scissors game interface" },
  { title: "Password Generator", type: "Security utility", url: "https://password-generator-asd8-basit.streamlit.app/", image: "/projects/password-generator.webp", alt: "Secure Password Generator controls" },
  { title: "Guess the Number", type: "User versus user game", url: "https://guess-the-number-game-user-8op-basit.streamlit.app/", image: "/projects/guess-number-user.webp", alt: "User versus user Guess the Number game" },
  { title: "Computer Guess", type: "Computer guessing game", url: "https://guess-the-number-game-computer-8op-basit.streamlit.app/", image: "/projects/guess-number-computer.webp", alt: "Computer Guess the Number game" },
  { title: "Mad Libs", type: "Word game", url: "https://mad-libs-game-890k-basit.streamlit.app/", image: "/projects/mad-libs.webp", alt: "Mad Libs Generator interface" },
  { title: "BMI Calculator", type: "Health utility", url: "https://bmi-calculator-8ghj-basit.streamlit.app/", image: "/projects/bmi-calculator.webp", alt: "BMI Calculator inputs" },
  { title: "Hangman", type: "Python word game", url: "https://basit1478-hangman-game-game-jpnqjs.streamlit.app/", image: "/projects/hangman.webp", alt: "Live Hangman game interface", source: "https://github.com/Basit1478/Hangman-game" },
  { title: "Unit Converter", type: "Conversion utility", url: "https://unit-converter-8jpux-basit.streamlit.app/", image: "/projects/unit-converter.webp", alt: "Unit Converter controls" },
  { title: "Growth Mindset", type: "Learning challenge", url: "https://growth-mindset-challenge-basit.streamlit.app/", image: "/projects/growth-mindset.webp", alt: "Growth Mindset Challenge login interface" },
] as const;

const liveProjects = [...liveBuilds, ...labProjects] as const;

export default function Page() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap
      .timeline({ defaults: { ease: "expo.out" } })
      .from("[data-gallery-intro]", { y: 18, autoAlpha: 0, duration: .72, stagger: .055 })
      .from(".gallery-portrait-frame", { clipPath: "inset(100% 0 0 0)", duration: .92 }, .04);

    gsap.utils.toArray<HTMLElement>("[data-gallery-reveal]").forEach((item) => {
      if (item.classList.contains("gallery-project")) {
        const copy = item.querySelector(".gallery-project-copy");
        const artwork = item.querySelector(".gallery-project-art");
        gsap.timeline({ scrollTrigger: { trigger: item, start: "top 82%", once: true } })
          .from(copy, { y: 18, autoAlpha: 0, duration: .64, ease: "expo.out" })
          .from(artwork, { clipPath: "inset(0 0 12% 0)", autoAlpha: .7, duration: .72, ease: "expo.out" }, .05);
        return;
      }

      gsap.from(item, {
        y: 16,
        autoAlpha: 0,
        duration: .62,
        ease: "expo.out",
        scrollTrigger: { trigger: item, start: "top 88%", once: true },
      });
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".gallery-portrait", { yPercent: -5, ease: "none", scrollTrigger: { trigger: ".gallery-hero", start: "top top", end: "bottom top", scrub: 0.8 } });
      gsap.to(".gallery-name", { yPercent: -4, ease: "none", scrollTrigger: { trigger: ".gallery-hero", start: "top top", end: "bottom top", scrub: 0.8 } });
    });
    return () => mm.revert();
  }, { scope: root });

  return <div ref={root} className="gallery-page">
    <header className="gallery-header [&:has([data-scrolled])]:backdrop-blur-md">
      <AnimatedWordmark href="#top" collapseOnScroll />
      <SiteNav />
      <div className="gallery-header-end"><ThemeToggle /><span><i /> Open to work</span></div>
    </header>

    <main id="top">
      <section className="gallery-hero">
        <div className="gallery-name" aria-label="Basit Ali"><span data-gallery-intro>BASIT</span><span data-gallery-intro>ALI<em>.</em></span></div>
        <div className="gallery-portrait" data-gallery-intro>
          <div className="gallery-portrait-frame">
            <img className="gallery-character" src="/basit-character-720.webp" srcSet="/basit-character-480.webp 480w, /basit-character-720.webp 720w, /basit-character.webp 854w" sizes="(max-width: 600px) 92vw, (max-width: 900px) 72vw, 42vw" width="854" height="1842" fetchPriority="high" decoding="async" alt="Editorial character portrait of Basit Ali" />
            <div className="gallery-portrait-caption"><span>AI / CODE / DESIGN</span><span>KARACHI · PK</span></div>
          </div>
        </div>
        <div className="gallery-statement" data-gallery-intro><span>AI ENGINEER / FULL-STACK DEVELOPER</span><p>I make complex technology feel <em>clear, useful,</em> and worth caring about.</p><div className="gallery-hero-actions"><a href="#live">Explore live projects <Arrow /></a><a href="/resume.pdf" target="_blank" rel="noreferrer">View CV <Arrow /></a><a href="mailto:ba876943@gmail.com">Start a conversation</a></div></div>
        <div className="gallery-hero-meta" data-gallery-intro><span>KARACHI, PAKISTAN</span><span>AVAILABLE FOR SELECT PROJECTS</span></div>
      </section>

      <section id="live" className="gallery-live">
        <div className="gallery-live-intro" data-gallery-reveal><h2>Live work,<br /><em>shown as built.</em></h2><p>Twenty-three working websites across commerce, hospitality, healthcare, business, product thinking, utilities and interactive games. Every project is paired with a direct capture of its deployed interface.</p></div>
        <div className="gallery-site-ledger">
          {liveProjects.map((project, index) => <article className="gallery-project gallery-site-row" key={project.url} data-gallery-reveal>
            <div className="gallery-project-copy"><span>{String(index + 1).padStart(2, "0")} / LIVE DEPLOYMENT</span><h3>{project.title}</h3><p>{project.type}</p><div><a href={project.url} target="_blank" rel="noreferrer">Open website <Arrow /></a>{"source" in project && project.source && <a href={project.source} target="_blank" rel="noreferrer">View code <Arrow /></a>}</div></div>
            <div className="gallery-project-art"><a className="gallery-project-capture" href={project.url} target="_blank" rel="noreferrer"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 58vw" /><span>Live website <Arrow /></span></a></div>
          </article>)}
        </div>
      </section>

      <section id="approach" className="gallery-approach">
        <div className="gallery-approach-title" data-gallery-reveal><h2>Attention is<br />the real <em>technology.</em></h2><p className="gallery-section-meta">How I work</p><div className="gallery-system-object"><LazySignalSculpture /><span>Connected systems / live object</span></div></div>
        <div className="gallery-approach-steps"><article data-gallery-reveal><b>01</b><h3>Find the tension</h3><p>Understand the human problem, the technical constraint and the uncomfortable edge case.</p></article><article data-gallery-reveal><b>02</b><h3>Give it shape</h3><p>Turn invisible decisions into a system people can see, test and discuss.</p></article><article data-gallery-reveal><b>03</b><h3>Make it hold</h3><p>Build the product surface, model behavior, data flow and infrastructure as one whole.</p></article></div>
      </section>

      <section id="about" className="gallery-about"><div data-gallery-reveal><h2>Engineer by practice.<br /><em>Designer by instinct.</em></h2><p className="gallery-section-meta">About Basit</p></div><div data-gallery-reveal><p>I’m based in Karachi and building Codizzz and AgentHubPK while developing agentic AI systems through GIAIC. I care about the invisible details that make intelligent software understandable.</p><div className="gallery-about-links"><a href="/experience">Experience <Arrow /></a><a href="/resume.pdf" target="_blank" rel="noreferrer">View CV <Arrow /></a></div></div></section>

      <section id="contact" className="gallery-contact"><div data-gallery-reveal><h2>Bring the hard part.<br /><em>I’ll bring attention.</em></h2><p className="gallery-contact-note">Let’s make something useful.</p><div className="gallery-contact-actions"><a className="gallery-contact-email" href="mailto:ba876943@gmail.com">ba876943@gmail.com <Arrow /></a><CopyEmailButton email="ba876943@gmail.com" /></div></div><footer><span>BASIT ALI © 2026</span><span>KARACHI / PAKISTAN</span><a href="https://github.com/Basit1478" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/basit-ali-baloch-738285253/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></footer></section>
    </main>
  </div>;
}
