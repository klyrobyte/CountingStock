import { Suspense, useState, useEffect } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme.tsx";
import { isTokenValid } from "@/lib/auth";
import { PageSkeleton } from "@/components/dashboard/PageSkeleton";

import appCss from "../styles.css?url";

const queryClient = new QueryClient();

// ── Auth guard ─────────────────────────────────────────────────────────────
// Public paths: /login and / (landing page visible to everyone)
// All other routes: require valid token or redirect to /login
function AuthGuard({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR & Hydration: we cannot securely check auth state yet.
  // Rendering a neutral loader guarantees ZERO UI leak of protected content
  // and ensures the initial client render matches the server perfectly.
  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground/20 border-t-[#c05c30]" />
      </div>
    );
  }

  const pathname = window.location.pathname;
  const isPublic =
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/login/") ||
    // Station paths use their own separate session guard — not user auth
    pathname === "/station/login" ||
    pathname.startsWith("/station/dashboard");

  // Protected route + no valid token → redirect to /login, render nothing
  if (!isPublic && !isTokenValid()) {
    window.location.replace("/login");
    return null;
  }

  return <>{children}</>;
}


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sugity Creatives — Stock Scan Dashboard" },
      {
        name: "description",
        content: "Manage dan Buat QR stock codes dengan dashboard",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      // ASCII art signature — async, zero perf impact, removable by deleting
      // public/ascii-signature.js and this entry. SHA256 guarded by guardian.js
      { src: "/ascii-signature.js", async: true, defer: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthGuard>
          {/* Suspense catches async route chunks — shows layout-matched skeleton */}
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </AuthGuard>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
