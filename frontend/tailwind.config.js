/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          light: '#1e40af',
        },
        accent: {
          DEFAULT: '#059669',
          light: '#10b981',
        },
      },
    },
  },
  plugins: [],
}