import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3AB0FF",
          DEFAULT: "#1E90FF",
          dark: "#0057B7",
        },
      },
    },
  },
  plugins: [],
};

export default config;
