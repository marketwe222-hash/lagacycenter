"use client";
import { useToast } from "@/hooks/useToast";
import ToastItem from "./ToastItem";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
      ))}
    </div>
  );
}
