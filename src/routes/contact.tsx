import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BIQ Brain Studios" },
      { name: "description", content: "Contact BIQ Brain Studios in Accra about events, ticketing or elections." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your next gathering"
        description="Tell us whether you are planning an event, a conference or an election. Message delivery is not connected yet."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <ul className="space-y-6">
          {[
            { icon: MapPin, title: "Location", text: "Accra, Ghana" },
            { icon: Clock, title: "Hours", text: "Monday to Friday, 9:00–17:00 (Africa/Accra)" },
            { icon: MessageCircle, title: "WhatsApp and phone", text: "A public number will be published at launch." },
          ].map((item) => (
            <li key={item.title} className="flex gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                <item.icon className="size-5" />
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <form
          className="space-y-5 rounded-2xl border bg-card p-6 shadow-card sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            toast.message("This form is not sending yet", {
              description: "There is no inbox connected. Your message was not stored.",
            });
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" autoComplete="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="024 123 4567" autoComplete="tel" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">How can we help?</Label>
            <Textarea id="msg" name="message" required />
          </div>
          <Button type="submit">Send message</Button>
          <p className="text-xs text-muted-foreground">
            Submitting shows a notice only. Nothing is emailed or saved.
          </p>
        </form>
      </div>
    </SiteLayout>
  );
}
