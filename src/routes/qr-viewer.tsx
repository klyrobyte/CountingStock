import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { useCallback } from "react";

export const Route = createFileRoute("/qr-viewer")({
  validateSearch: (search: Record<string, unknown>) => ({
    img: (search.img as string) || "",
    label: (search.label as string) || "QR Code",
  }),
  head: () => ({
    meta: [
      { title: "QR Viewer — Scan Dashboard" },
      { name: "description", content: "Full-size QR code viewer for printing." },
    ],
  }),
  component: QrViewerPage,
});

function QrViewerPage() {
  const { img, label } = Route.useSearch();

  const handleDownload = useCallback(() => {
    if (!img) return;
    const link = document.createElement("a");
    link.href = img;
    link.download = `${label.replace(/\s+/g, "-")}-QR.png`;
    link.click();
  }, [img, label]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  if (!img) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">No QR image provided.</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Print-friendly card */}
      <div
        id="qr-print-card"
        className="rounded-3xl border border-border bg-card p-8 flex flex-col items-center gap-6 max-w-sm w-full shadow-xl print:border-none print:shadow-none print:bg-white"
      >
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground print:text-black">
            Sugity Creatives — Factory QR
          </span>
          <h1 className="mt-1 text-lg font-semibold text-foreground print:text-black">{label}</h1>
        </div>

        {/* QR Image */}
        <div className="rounded-2xl bg-white p-4 shadow-inner">
          <img
            src={img}
            alt={`QR code for ${label}`}
            className="h-64 w-64 object-contain"
          />
        </div>

        <p className="text-center text-[11px] text-muted-foreground print:text-gray-600">
          Scan to view live IN/OUT status. Token never expires.
        </p>
      </div>

      {/* Controls — hidden when printing */}
      <div className="mt-6 flex gap-3 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
      </div>
    </div>
  );
}
