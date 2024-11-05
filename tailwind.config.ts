import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
      1: '1px',
      1.5: '1.5px',
      },
      spacing: {
        18: "4.5rem",
        54: "13.5rem", // Customize this value as needed
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midground: "var(--midground)",
      },
      scale: {
        '120':'1.20',
      }
    },
  },
  plugins: [],
};
export default config;
