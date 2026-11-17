import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content> & { side?: "left" | "right" }
>(({ className, children, side = "right", ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed z-50 flex h-full w-72 flex-col gap-4 bg-background p-6 shadow-elevated",
        side === "right" ? "inset-y-0 right-0 border-l" : "inset-y-0 left-0 border-r",
        className,
      )}
      {...props}
    >
      {children}
      <Dialog.Close className="absolute right-4 top-4 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
        <X className="size-4" />
        <span className="sr-only">Close</span>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
));
SheetContent.displayName = "SheetContent";

function SheetTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof Dialog.Title>) {
  return <Dialog.Title className={cn("font-display text-base font-semibold", className)} {...props} />;
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetTitle };
