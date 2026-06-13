"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

// Each blob config
const blobs = [
  {
    id: 1,
    className: "w-[500px] h-[500px]",
    initialX: "-10%",
    initialY: "-10%",
    animate: { x: ["-10%", "5%", "-10%"], y: ["-10%", "15%", "-10%"] },
    duration: 18,
    light: "bg-rose-300/40",
    dark: "bg-red-900/30",
  },
  {
    id: 2,
    className: "w-[600px] h-[600px]",
    initialX: "60%",
    initialY: "-20%",
    animate: { x: ["60%", "50%", "60%"], y: ["-20%", "5%", "-20%"] },
    duration: 22,
    light: "bg-amber-200/40",
    dark: "bg-amber-700/20",
  },
  {
    id: 3,
    className: "w-[450px] h-[450px]",
    initialX: "-5%",
    initialY: "60%",
    animate: { x: ["-5%", "10%", "-5%"], y: ["60%", "50%", "60%"] },
    duration: 20,
    light: "bg-red-200/40",
    dark: "bg-rose-900/25",
  },
  {
    id: 4,
    className: "w-[550px] h-[550px]",
    initialX: "55%",
    initialY: "55%",
    animate: { x: ["55%", "45%", "55%"], y: ["55%", "65%", "55%"] },
    duration: 25,
    light: "bg-orange-200/40",
    dark: "bg-red-800/25",
  },
  {
    id: 5,
    className: "w-[350px] h-[350px]",
    initialX: "35%",
    initialY: "30%",
    animate: { x: ["35%", "40%", "35%"], y: ["30%", "25%", "30%"] },
    duration: 15,
    light: "bg-yellow-100/40",
    dark: "bg-amber-900/20",
  },
];

// Deterministic particle positions, rounded to fixed precision
// so server and client produce byte-identical style strings
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const round = (n: number, decimals = 2) => Number(n.toFixed(decimals));

const particles = Array.from({ length: 20 }, (_, i) => {
  const seed = i + 1;
  const size = round(seededRandom(seed * 1.17) * 4 + 2); // 2px - 6px
  const x = round(seededRandom(seed * 2.31) * 100); // 0% - 100%
  const y = round(seededRandom(seed * 3.79) * 100); // 0% - 100%
  const duration = round(seededRandom(seed * 4.23) * 10 + 8); // 8s - 18s
  const delay = round(seededRandom(seed * 5.77) * 5); // 0s - 5s
  const floatY = round(seededRandom(seed * 6.89) * 30 + 10); // 10px - 40px float range

  return {
    id: i,
    size,
    x,
    y,
    duration,
    delay,
    floatY,
  };
});

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Gate purely-decorative, randomized elements until after mount.
  // SSR + first client render both show nothing here, so they match
  // exactly; particles then mount in a client-only update.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* ── Base background color ── */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: isDark ? "#04040f" : "#ffffff",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* ── Aurora blobs ── */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`
            absolute rounded-full blur-[100px] 
            ${blob.className}
            ${isDark ? blob.dark : blob.light}
          `}
          style={{
            left: blob.initialX,
            top: blob.initialY,
          }}
          animate={{
            x: blob.animate.x,
            y: blob.animate.y,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      ))}

      {/* ── Noise/grain texture overlay ── */}
      <div
        className={`
          absolute inset-0 
          ${isDark ? "opacity-[0.03]" : "opacity-[0.015]"}
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Floating particles (client-only after mount) ── */}
      {mounted &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className={`
              absolute rounded-full
              ${isDark ? "bg-white/20" : "bg-slate-400/25"}
            `}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [-p.floatY / 2, p.floatY / 2, -p.floatY / 2],
              opacity: isDark ? [0.1, 0.5, 0.1] : [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* ── Subtle grid overlay (dark only) ── */}
      {isDark && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      )}
    </div>
  );
}
