export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  }).format(new Date(iso));
}

export function bandScore(score: number, max: number): string {
  const pct = score / max;
  if (pct >= 0.87) return "8.5–9.0";
  if (pct >= 0.75) return "7.0–8.0";
  if (pct >= 0.60) return "6.0–6.5";
  if (pct >= 0.45) return "5.0–5.5";
  return "< 5.0";
}
