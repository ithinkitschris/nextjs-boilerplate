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
      width: {
        62: '15.5rem',
      },
      borderWidth: {
        1: '1px',
        1.5: '1.5px',
      },
      spacing: {
        18: "4.5rem",
        54: "13.5rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        midground: "var(--midground)",
      },
      scale: {
        '120': '1.20',
        '93': '0.93',
        '96': '0.96',
        '97': '0.97',
        '98': '0.98',
        '99': '0.99',
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
      },
      blur: {
        '3xl': '2000px',
      },
      height: {
        'screen/2': '50vh',
      },
    },
  },
  plugins: [],
};

export default config;
