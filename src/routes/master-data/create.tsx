import { useState, useRef, useCallback, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowLeft, Upload, X, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  useCreateMasterPart,
  useUpdateMasterPart,
  useMasterParts,
} from "@/hooks/use-master-parts";
import { CategoryApi, ModelApi, CustomerApi, FactoryApi } from "@/hooks/use-master-data";
import { useMesin } from "@/hooks/use-mesin";
import { ChevronDown } from "lucide-react";

// Optional search param: editId for editing an existing part
const searchSchema = z.object({
  editId: z.number().optional(),
});

export const Route = createFileRoute("/master-data/create")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Buat Part Baru — Sugity Creatives" },
      { name: "description", content: "Tambah Master Part baru ke database" },
    ],
  }),
  component: CreateMasterPartPage,
});

// ── Label + input wrapper ─────────────────────────────────────────────────
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-foreground">
        {label}
        {required && (
          <span className="ml-0.5 text-[#c05c30]"> *</span>
        )}
      </label>
      {children}
    </div>
  );
}

const INPUT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:border-[#c05c30]/60 dark:bg-card-elevated";

const SELECT =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-smooth focus:border-[#c05c30]/60 appearance-none cursor-pointer dark:bg-card-elevated";

// ── Page ──────────────────────────────────────────────────────────────────
function CreateMasterPartPage() {
  const navigate = useNavigate();
  const { editId } = Route.useSearch();
  const isEdit = !!editId;

  const { data: allParts = [] } = useMasterParts();
  const editPart = isEdit ? allParts.find((p) => p.id === editId) : null;

  const createPart = useCreateMasterPart();
  const updatePart = useUpdateMasterPart();

  // Form state
  const [partNumber, setPartNumber] = useState("");
  const [partName, setPartName] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [customer, setCustomer] = useState("");
  const [factoryOrigin, setFactoryOrigin] = useState("");
  const [machine, setMachine] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");

  const { data: mesinList = [] } = useMesin();
  const { data: categories = [] } = CategoryApi.useGetAll();
  const { data: models = [] } = ModelApi.useGetAll();
  const { data: customers = [] } = CustomerApi.useGetAll();
  const { data: factories = [] } = FactoryApi.useGetAll();
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-fill for edit mode
  useEffect(() => {
    if (editPart) {
      setPartNumber(editPart.part_number);
      setPartName(editPart.part_name);
      setCategory(editPart.category ?? "");
      setModel(editPart.model ?? "");
      setCustomer(editPart.customer ?? "");
      setFactoryOrigin(editPart.factory_origin ?? "");
      setMachine(editPart.machine ?? "");
      setStatus(editPart.status);
      if (editPart.image_base64) {
        setImagePreview(editPart.image_base64);
        setImageBase64(editPart.image_base64);
      }
    }
  }, [editPart]);

  // Image file handling
  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setImageError(null);

      const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setImageError("Format tidak didukung. Gunakan jpeg, png, jpg, atau gif.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setImageError("Ukuran file melebihi 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (ev) => {
        const base64 = ev.target?.result as string;
        setImageBase64(base64);
        setImagePreview(base64);
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const removeImage = useCallback(() => {
    setImageBase64(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  // Submit
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitError(null);

      const payload = {
        partNumber: partNumber.trim(),
        partName: partName.trim(),
        category: category.trim(),
        model: model.trim(),
        customer: customer.trim(),
        factoryOrigin: factoryOrigin.trim(),
        machine: machine.trim() || undefined,
        qtyPerPallet: 1,
        unit: "PCS",
        status,
        imageBase64,
      };

      if (isEdit && editId) {
        updatePart.mutate(
          { id: editId, ...payload },
          {
            onSuccess: () => {
              setSuccess(true);
              setTimeout(() => navigate({ to: "/master-data" }), 900);
            },
            onError: (err) => setSubmitError(err.message),
          }
        );
      } else {
        createPart.mutate(payload, {
          onSuccess: () => {
            setSuccess(true);
            setTimeout(() => navigate({ to: "/master-data" }), 900);
          },
          onError: (err) => setSubmitError(err.message),
        });
      }
    },
    [
      partNumber, partName, category, model, customer, factoryOrigin, machine,
      status, imageBase64,
      isEdit, editId, createPart, updatePart, navigate,
    ]
  );

  const isPending = createPart.isPending || updatePart.isPending;

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl animate-in fade-in duration-300">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {isEdit ? "Edit Part" : "Tambah Part"}
            </span>
            <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {isEdit ? "Edit Master Part" : "Add New Master Part"}
            </h1>
          </div>
          <Link
            to="/master-data"
            className="text-sm font-semibold text-[#c05c30] transition-smooth hover:opacity-80"
          >
            Back to List
          </Link>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Part Number */}
            <Field label="Part Number" required>
              <input
                id="input-part-number"
                type="text"
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value)}
                placeholder="e.g. PN-12345"
                required
                className={INPUT}
              />
            </Field>

            {/* Part Name */}
            <Field label="Part Name" required>
              <input
                id="input-part-name"
                type="text"
                value={partName}
                onChange={(e) => setPartName(e.target.value)}
                placeholder="e.g. Resin Part A"
                required
                className={INPUT}
              />
            </Field>

            {/* Category */}
            <Field label="Category">
              <div className="relative">
                <select
                  id="input-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Kategori</option>
                  {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Model */}
            <Field label="Model">
              <div className="relative">
                <select
                  id="input-model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Model</option>
                  {models.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Customer */}
            <Field label="Customer">
              <div className="relative">
                <select
                  id="input-customer"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Customer</option>
                  {customers.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Machine Origin */}
            <Field label="Machine Origin">
              <div className="relative">
                <select
                  id="input-machine-origin"
                  value={machine}
                  onChange={(e) => setMachine(e.target.value)}
                  className={SELECT}
                >
                  <option value="">— Tidak ada —</option>
                  {mesinList.map((m) => (
                    <option key={m.id} value={m.machine_code}>
                      {m.machine_code} — {m.machine_name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Factory Origin */}
            <Field label="Factory Origin">
              <div className="relative">
                <select
                  id="input-factory"
                  value={factoryOrigin}
                  onChange={(e) => setFactoryOrigin(e.target.value)}
                  className={SELECT}
                >
                  <option value="" disabled>Pilih Factory</option>
                  {factories.map(f => <option key={f.id} value={f.name}>{f.name}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>

            {/* Status */}
            <Field label="Status" required>
              <div className="relative">
                <select
                  id="input-status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
                  className={SELECT}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  ▾
                </div>
              </div>
            </Field>

          </div>

          {/* Part Image — full width */}
          <div className="mt-5">
            <Field label="Part Image">
              {imagePreview ? (
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="Part preview"
                    className="h-32 w-32 rounded-xl border border-border object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-white shadow-md transition-smooth hover:bg-red-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="file-part-image"
                    className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-border bg-card-elevated px-4 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-accent"
                  >
                    <Upload className="h-4 w-4" />
                    Browse…
                  </label>
                  <input
                    id="file-part-image"
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/jpg,image/gif"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <p className="text-[11.5px] text-muted-foreground">
                    Format: jpeg, png, jpg, gif (Max 2MB)
                  </p>
                </div>
              )}
              {imageError && (
                <div className="mt-1 flex items-center gap-1.5 text-xs text-destructive">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {imageError}
                </div>
              )}
            </Field>
          </div>

          {/* Error message */}
          {submitError && (
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3.5 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {submitError}
            </div>
          )}

          {/* Success message */}
          {success && (
            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Part berhasil {isEdit ? "diperbarui" : "disimpan"}! Mengalihkan…
            </div>
          )}

          {/* Actions */}
          <div className="mt-7 flex justify-end gap-3">
            <Link
              to="/master-data"
              className="inline-flex items-center rounded-xl border border-border bg-card-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:bg-accent"
            >
              Cancel
            </Link>
            <button
              id="btn-save-part"
              type="submit"
              disabled={isPending || success}
              className="inline-flex items-center gap-2 rounded-xl bg-[#c05c30] px-6 py-2.5 text-sm font-bold text-white transition-smooth hover:brightness-110 disabled:opacity-50"
            >
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              {isEdit ? "Update Part" : "Save Part"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
