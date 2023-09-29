/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [],
};
