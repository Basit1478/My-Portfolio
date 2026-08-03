import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Live Projects — Basit Ali", description: "Live websites and interactive tools built by Basit Ali." };

export default function WorkPage() {
  redirect("/#live");
}
