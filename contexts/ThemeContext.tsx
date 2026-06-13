"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

export const themeTokens = {
  page: "bg-background text-foreground",

  card: "bg-content1 text-foreground border border-divider rounded-xl shadow-sm",
  cardHover:
    "bg-content1 text-foreground border border-divider rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all",

  panel: "bg-content2 text-foreground rounded-xl",

  dropdown:
    "bg-content1 text-foreground border border-divider rounded-lg shadow-lg",
  dropdownItem:
    "hover:bg-content2 data-[hover=true]:bg-content2 rounded-md transition-colors",

  select:
    "bg-content1 text-foreground border border-divider rounded-lg focus:border-primary",

  link: "text-primary hover:text-primary-600 dark:hover:text-primary-300 underline-offset-4 hover:underline transition-colors",
  linkMuted: "text-foreground/70 hover:text-primary transition-colors",

  buttonPrimary:
    "bg-primary text-primary-foreground hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors",
  buttonSecondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-600 dark:hover:bg-secondary-500 transition-colors",
  buttonOutline:
    "border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
  buttonGhost: "text-foreground hover:bg-content2 transition-colors",

  navbar: "bg-content1/90 backdrop-blur border-b border-divider",

  hero: "bg-legacy-gradient text-white",

  badge: "bg-secondary text-secondary-foreground",
  badgeOutline: "border border-secondary text-secondary",

  divider: "border-divider",

  input:
    "bg-content1 text-foreground border border-divider rounded-lg focus:border-primary focus:outline-none",
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  tokens: typeof themeTokens;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setThemeState(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setThemeState("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme, tokens: themeTokens }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
