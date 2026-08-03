import type { Metadata } from "next";
import { WhatsAppWidget } from "@/components/contact/WhatsAppWidget";
import { PageLoader } from "@/components/ui/PageLoader";
import { SiteToaster } from "@/components/ui/SiteToaster";
import "./globals.css";
export const metadata: Metadata = { title: "Basit Ali — Agentic AI Engineer", description: "Agentic AI engineer and full-stack developer in Karachi building AI agents, RAG systems, intelligent workflows and cloud-deployed automation." };
const themeScript = `(function(){try{var saved=localStorage.getItem('basit-theme');var theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){}})()`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><PageLoader />{children}<WhatsAppWidget /><SiteToaster /></body></html>; }
