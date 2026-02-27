/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#C8C8C8',
        'gray-200': '#A2A2A2',
        'black-100': '#464646',
        'white-100': '#FFFFFF',
        'white-200': '#F5F5F5',
        'blue-100': '#EAF2FD',
        'blue-120': '#D4E4FA',
        'blue-150': '#619bec',
        'blue-200': '#5595E9',
        'blue-300': '#2A7AE4',
        'bg-primary': 'rgb(var(--bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-soft': 'rgb(var(--surface-soft) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'border-soft': 'rgb(var(--border-soft) / <alpha-value>)',
        'accent-primary': 'rgb(var(--accent-primary) / <alpha-value>)',
        'accent-secondary': 'rgb(var(--accent-secondary) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 8px 30px -16px rgba(15, 23, 42, 0.28)',
        glow: '0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 22px rgba(37, 99, 235, 0.26)',
      },
      fontFamily: {
        script: ['Tangerine', 'cursive'],
      },
    },
  },
  plugins: [],
};
