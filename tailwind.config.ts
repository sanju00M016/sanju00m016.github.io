import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        accent: { DEFAULT: "#00E5A0", dim: "#00E5A033", glow: "#00E5A066" },
        secondary: { DEFAULT: "#00B4D8" },
        surface: { DEFAULT: "#0A0F1C", raised: "#111827", overlay: "#1F2937" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,229,160,0.15)",
        "glow-lg": "0 0 40px rgba(0,229,160,0.2)",
        card: "0 4px 30px rgba(0,0,0,0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse_glow: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        pulse_glow: "pulse_glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
