import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href"
  >;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-semibold hover:bg-white/90 active:bg-white/80",
  secondary:
    "border border-white/20 text-white/80 font-medium hover:border-white/40 hover:text-white",
  ghost:
    "text-white/50 hover:text-white font-medium",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-sm px-7 py-3",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded transition-colors duration-150",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
