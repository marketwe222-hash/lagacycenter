import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "legacy-gradient":
          "linear-gradient(135deg, #1A0E10 0%, #5C141C 50%, #A11D2C 100%)",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            /* ...your Legacy red/gold tokens... */
          },
        },
        dark: {
          colors: {
            /* ...your Legacy red/gold tokens... */
          },
        },
      },
    }),
  ],
} satisfies Config;
