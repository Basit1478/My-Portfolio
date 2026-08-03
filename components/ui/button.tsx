import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("shadcn-button", {
  variants: {
    variant: {
      default: "shadcn-button-default",
      outline: "shadcn-button-outline",
    },
    size: {
      default: "shadcn-button-size-default",
      sm: "shadcn-button-size-sm",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
