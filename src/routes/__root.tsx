import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

const APP_NAME = "BIQ Brain Studios";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: "Event management and online elections for organisations in Ghana.",
      },
      { name: "theme-color", content: "#12203A" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <Toaster />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 text-3xl font-semibold">This page is not on the map</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The address does not match a public page or a workspace section.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground"
      >
        Back to home
      </Link>
    </main>
  );
}
