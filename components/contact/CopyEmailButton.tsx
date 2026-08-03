"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function CopyEmailButton({ email }: { email: string }) {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied", { description: email, duration: 2200 });
    } catch {
      toast.error("Couldn’t copy the email", { description: "Select the address and copy it manually.", duration: 3000 });
    }
  }

  return <Button type="button" variant="outline" onClick={copyEmail}>Copy email</Button>;
}
