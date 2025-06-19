import plugin from 'tailwindcss/plugin'

export default plugin(function({ addComponents }) {
  addComponents({
    '.glass': {
      '@apply border-b-1 border-r-1 border-white/35 shadow-glass-border': {},
    },
    '.glass-sm': {
      '@apply border-t-1.5 border-l-1 border-transparent dark:border-white/25 shadow-glass-border-sm': {},
    },

    '.glass-xs': {
      '@apply border-t-1 border-transparent dark:border-white/15 shadow-glass-border-sm': {},
    },
    '.glass-strong': {
      '@apply border-t-1.5 border-l-1 border-transparent dark:border-white/45 shadow-glass-border': {},
    },
    '.glass-sidecontainer': {
      '@apply border-t-1.5 border-l-1 border-white/35 shadow-glass-border-sm': {},
    },
  })
}) 