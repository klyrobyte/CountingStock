import { Suspense } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme.tsx";
import { isTokenValid } from "@/lib/auth";
import { PageSkeleton } from "@/components/dashboard/PageSkeleton";

import appCss from "../styles.css?url";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 30s matches the explicit staleTime already on useMasterParts, useMesin,
      // useUsers, usePrivilegeStations - now applied globally as the baseline.
      staleTime: 30_000,
      // Keep cached data for 5 minutes so background revalidation can work
      // without re-fetching from scratch on every component remount.
      gcTime: 5 * 60 * 1000,
      // 3 retries (library default) causes ~15s hangs on network errors.
      // 1 retry is enough to survive a transient hiccup.
      retry: 1,
    },
  },
});

// ── Auth guard ─────────────────────────────────────────────────────────────
// Public paths: /login and / (landing page visible to everyone)
// All other routes: require valid token or redirect to /login
function AuthGuard({ children }: { children: React.ReactNode }) {
  // SSR/Hydration safety: before `window` exists we cannot read localStorage.
  // Return children directly on SSR — RootComponent always renders the same
  // tree shape (AuthGuard → children), preventing the hydration mismatch where
  // SSR emitted a bare <div> while the client expected a <Suspense> boundary.
  if (typeof window === "undefined") {
    return <>{children}</>;
  }

  const pathname = window.location.pathname;
  const isPublic =
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/login/") ||
    // Station paths use their own separate session guard - not user auth
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
      { title: "Sugity Creatives - Stock Scan Dashboard" },
      {
        name: "description",
        content: "Manage dan Buat QR stock codes dengan dashboard",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
          {/* Suspense catches async route chunks - shows layout-matched skeleton.
              Kept inside AuthGuard so the tree shape is identical on SSR and client. */}
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </AuthGuard>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
