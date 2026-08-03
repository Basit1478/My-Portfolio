"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const navLinks = [
  ["Projects", "/#live"],
  ["Approach", "/#approach"],
  ["About", "/#about"],
  ["Philosophy", "/philosophy"],
  ["Experience", "/experience"],
  ["Contact", "/#contact"],
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const renderLink = ([label, href]: (typeof navLinks)[number], mobile = false) => {
    const isAnchor = href.startsWith("/#");
    const active = !isAnchor && pathname.startsWith(href);
    const className = active ? "active" : undefined;
    const onClick = mobile ? () => setOpen(false) : undefined;

    if (isAnchor && pathname === "/") {
      return <a key={href} href={href.slice(1)} className={className} onClick={onClick}>{label}</a>;
    }

    return <Link key={href} href={href} className={className} onClick={onClick}>{label}</Link>;
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus());
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => renderLink(link))}
      </nav>
      <button
        ref={toggleRef}
        type="button"
        className="site-nav-toggle"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
      </button>
      <div ref={panelRef} className={`site-nav-panel${open ? " open" : ""}`} id={menuId} hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => renderLink(link, true))}
        </nav>
      </div>
    </>
  );
}
