import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground",
        className,
      )}
      aria-hidden
    >
      B
    </span>
  );
}

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label="BIQ Brain Studios home">
      <LogoMark />
      <span
        className={cn(
          "font-display text-sm font-semibold tracking-tight",
          inverted ? "text-navy-foreground" : "text-foreground",
        )}
      >
        BIQ{" "}
        <span className={inverted ? "text-navy-foreground/65" : "text-muted-foreground"}>Brain Studios</span>
      </span>
    </Link>
  );
}
