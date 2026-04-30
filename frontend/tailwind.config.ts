import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4A017",
        darkbg: "#0A0F0D",
        brown: "#5C4033",
        gold: "#E8C670",
        success: "#00C853",
        danger: "#FF3B30",
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #D4A017, #F5E8B3)',
        'dark-gradient': 'linear-gradient(180deg, #0A0F0D, #111A14)',
      },
    },
  },
  plugins: [],
};

export default config;
