import { createFileRoute } from "@tanstack/react-router";
import { RequireAccount } from "@/components/auth/RequireAccount";

export const Route = createFileRoute("/app")({
  component: RequireAccount,
});
