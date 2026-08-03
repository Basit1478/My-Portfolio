"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const whatsappUrl = "https://wa.me/923703168969?text=Hi%20Basit%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

export function WhatsAppWidget() {
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const visibleFooters = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleFooters.add(entry.target);
        else visibleFooters.delete(entry.target);
      }
      setFooterVisible(visibleFooters.size > 0);
    });

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll("footer").forEach((footer) => observer.observe(footer));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      setFooterVisible(false);
    };
  }, [pathname]);

  return (
    <a
      className="whatsapp-widget"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Basit Ali on WhatsApp"
      title="Contact Basit Ali on WhatsApp"
      data-footer-visible={footerVisible || undefined}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
        <path d="M26.6 15.5a10.6 10.6 0 0 1-15.7 9.3L5.4 26.3l1.5-5.2a10.6 10.6 0 1 1 19.7-5.6Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M11.2 10.5c.3-.6.7-.6 1.1-.6h.6c.2 0 .5.1.7.7l1 2.4c.1.4.1.7-.1 1l-.8 1c-.2.2-.3.4-.1.8.7 1.3 1.7 2.4 3 3.1.4.2.7.2.9-.1l1.1-1.3c.3-.3.6-.3 1-.2l2.5 1.2c.4.2.7.4.7.7 0 .4-.2 1.8-1.1 2.6-.8.8-1.9 1.2-3.2.9-1.4-.3-3.2-1-5.3-2.8-2.5-2.1-4.1-4.8-4.5-6.3-.4-1.4.2-2.5.7-3.1Z" fill="currentColor" />
      </svg>
    </a>
  );
}
