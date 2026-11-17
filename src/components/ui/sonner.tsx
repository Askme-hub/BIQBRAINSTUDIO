import type { ComponentProps } from "react";
import { Toaster as Sonner } from "sonner";

function Toaster(props: ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast border border-border bg-card text-card-foreground shadow-elevated",
          description: "text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
