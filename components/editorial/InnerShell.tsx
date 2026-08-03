"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatedWordmark } from "@/components/navigation/AnimatedWordmark";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { SiteNav } from "@/components/navigation/SiteNav";

export function InnerShell({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-page-intro]", { y: 24, autoAlpha: 0, duration: .9, stagger: .065, ease: "expo.out" });
    gsap.utils.toArray<HTMLElement>("[data-page-reveal]").forEach((element) => gsap.from(element, { y: 24, autoAlpha: 0, duration: .78, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 87%", once: true } }));
  }, { scope: root, dependencies: [pathname], revertOnUpdate: true });

  return (
    <div ref={root} className="inner-shell gallery-inner">
      <header className="inner-header">
        <AnimatedWordmark />
        <SiteNav />
        <div className="header-actions"><ThemeToggle /><p><i /> OPEN TO WORK</p></div>
      </header>
      <main className="inner-main">{children}</main>
    </div>
  );
}

export function PageFooter() {
  return (
    <footer className="page-footer">
      <span>BASIT ALI © 2026</span>
      <span>KARACHI, PAKISTAN</span>
      <Link href="/#contact">START A CONVERSATION <b>→</b></Link>
    </footer>
  );
}
