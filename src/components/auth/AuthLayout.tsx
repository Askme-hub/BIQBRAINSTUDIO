import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function AuthLayout({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-navy text-navy-foreground lg:flex lg:flex-col lg:justify-end lg:p-14">
        <div className="grid-fade absolute inset-0" />
        <div className="relative">
          <p className="max-w-md font-display text-3xl font-semibold leading-tight">
            One account for your events and your elections.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-navy-foreground/75">
            {[
              "Separate workspaces for events and voting",
              "Mobile Money and card payments in GHS",
              "Built for churches, schools, associations and businesses",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-sidebar-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AuthNotice() {
  return (
    <p className="mt-4 rounded-lg border bg-muted px-3 py-3 text-xs leading-relaxed text-muted-foreground">
      Sign-in is not connected yet. These forms are the design for email and password accounts. They do not
      create a session or store a password.
    </p>
  );
}
