import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leather: {
          DEFAULT: "#3b2418",
          dark: "#241309",
          light: "#5a3823",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e8cd82",
          dark: "#8a6d2f",
        },
        paper: {
          DEFAULT: "#f6f1e6",
          dark: "#ece3d0",
          shadow: "#d9cdb2",
        },
        ink: {
          DEFAULT: "#241f1a",
          light: "#4a4038",
        },
      },
      fontFamily: {
        serif: ["Georgia", "'Playfair Display'", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      boxShadow: {
        book: "0 60px 120px -20px rgba(0,0,0,0.7), 0 30px 60px -30px rgba(0,0,0,0.6)",
        page: "0 0 20px rgba(0,0,0,0.15)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        flicker: "flicker 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;