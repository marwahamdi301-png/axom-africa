import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        axom: {
          gold: "#D4A017",
          "gold-light": "#F2C94C",
          "gold-dark": "#B8860B",
          black: "#0A0A0A",
          "black-light": "#1A1A2E",
          "black-mid": "#16213E",
          dark: "#0F0F23",
          white: "#FAFAFA",
          cream: "#FFF8E7",
          green: "#27AE60",
          red: "#E74C3C",
          blue: "#2980B9",
          orange: "#F39C12",
          purple: "#8E44AD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
