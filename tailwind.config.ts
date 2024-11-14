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
        'screen/1.5': '75%',
        'screen/3': '33.33333%',
        'screen/4': '25%',
        'screen/5': '20%',
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
        neutral: {
          350: '#B3B3B3',
        },
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
        '106': '1.06', // Added comma
        '107': '1.07',
      },
      blur: {
        '3xl': '2000px',
      },
      height: {
        'screen/2': '50vh',
        'screen/1.5': '80vh',
        'screen/3': '33.33333vh',
        'screen/4': '25vh',
        'screen/5': '20vh',
      },
      margin: {
        '-mt-6': '-5rem',
        '-mt-[15vh]': '-15vh'
      },
      boxShadow: {
        'inner-standard': 'inset 0 0px 12px rgba(0,0,0,0.15)',
        'mild': '1px 1px 15px rgba(0,0,0,0.1)',
        'standard': '1px 1px 12px rgba(0,0,0,0.3)',
        'strong': '2px 2px 8px rgba(0,0,0,0.8)',
        'standard-hover': '0px 5px 20px rgba(0,0,0,0.3)',
      },
    },
  },
  corePlugins: {
    aspectRatio: false, // Disabling built-in aspect ratio plugin
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Custom aspect ratio plugin
  ],
}

export default config;
