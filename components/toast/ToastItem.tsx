"use client";
import { Toast } from "@/types";
import { useToast } from "@/hooks/useToast";

const styles: Record<Toast["type"], string> = {
  success: "bg-green-600 text-white",
  error:   "bg-red-600 text-white",
  warning: "bg-yellow-500 text-white",
  info:    "bg-blue-600 text-white",
};

export default function ToastItem({ toast }: { toast: Toast }) {
  const { removeToast } = useToast();
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm min-w-[240px] ${styles[toast.type]}`}>
      <span className="flex-1">{toast.message}</span>
      <button onClick={() => removeToast(toast.id)} className="opacity-70 hover:opacity-100">✕</button>
    </div>
  );
}
