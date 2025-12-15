import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F3EFE7",
        beigeDark: "#E6DFC8",
        gold: "#C9A24D",
        goldLight: "#E6C87A",
        ivory: "#FFFFFF",
        charcoal: "#2A2A2A"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
