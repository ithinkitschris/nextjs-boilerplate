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
        '19' : '4.75rem',
        '26' : '6.5rem',
        '30' : '7.5rem',
        'screen/1.5': '75%',
        'screen/2': '50%',
        'screen/3': '33.33333%',
        'screen/4': '25%',
        'screen/5': '20%',
        '120': '30rem',
        '135': '34rem',
        '150': '37.5rem',
        '200': '42rem',
      },
      maxWidth: {
        '8xl' : '96rem',
        '9xl' : '120rem',
        '10xl' : '144rem',
      },
      borderWidth: {
        1: '1px',
        1.5: '1.5px',
        1.6: '1.6px',
        1.7: '1.7px',
      },
      spacing: {
        1.75: '0.4375rem',
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
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
      fontSize: {
        'xxs': '0.65rem',
        '7.5xl': '5.5rem',
        '4.5xl': '2.5rem',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-sans)", "monospace"],
        script: ["var(--font-breathing)", "script"],
        script2: ["var(--font-modernline)", "script"],
      },
      wordSpacing: {
        tighter: '-0.03em',
        tight: '-0.05em',
        normal: '0',
        wide: '0.1em',
      },
      rotate: {
        3: '3deg',
      },
      letterSpacing: {
        tightest: '-0.08em', // Adjust the value as needed
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
        '3xl': '300px',
      },
      height: {
        'screen/2': '50vh',
        'screen/1.2': '69vh',
        'screen/1.5': '80vh',
        'screen/3': '33.33333vh',
        'screen/4': '25vh',
        'screen/5': '20vh',
        '120': '30rem',
        '135': '34rem',
        '150': '37.5rem',
        '200': '42rem',
      },
      margin: {
        '-mt-6': '-5rem',
        '-mt-[15vh]': '-15vh'
      },
      inset: {
        '1/6': '16.6667%',
      },
      boxShadow: {
        'inner-standard': 'inset 5px 5px 20px rgba(0,0,0,0.1)',
        'mild': '5px 1px 15px rgba(0,0,0,0.1)',
        'standard': '1px 1px 12px rgba(0,0,0,0.3)',
        'strong': '2px 2px 8px rgba(0,0,0,0.8)',
        'standard-hover': '0px 5px 20px rgba(0,0,0,0.3)',
      },
      lineHeight: {
        'tighter' : '0.92',
        'tightest' : '0.6',
        '11' : '2.7rem',
        '12' : '3.25rem',
        '13' : '3.5rem',
        '14' : '3.75rem',
        '15' : '4rem',
      },
      transitionProperty: {
        'non-color': ' filter, transform, box-shadow, opacity', // Excludes color
      },
    },
  },
  // corePlugins: {
  //   aspectRatio: false, // Disabling built-in aspect ratio plugin
  // },
  // plugins: [
  //   require('@tailwindcss/aspect-ratio'), // Custom aspect ratio plugin
  // ],
}

export default config;