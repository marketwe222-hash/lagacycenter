// app/providers.tsx — keep only things that genuinely apply to EVERY route
"use client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ToastContainer from "@/components/toast/ToastContainer";
import AnimatedBackground from "@/components/layout/AnimatedBackground";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <AnimatedBackground />
          {children}
          <ToastContainer />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
