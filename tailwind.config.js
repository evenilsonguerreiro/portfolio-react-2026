/** @type {import('tailwindcss').Config} */

export default {
  // O "content" diz ao Tailwind onde procurar suas classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'accent-blue': '#00d2ff',
        'accent-purple': '#9d50bb',
      },
    },
  },
  plugins: [],
}
