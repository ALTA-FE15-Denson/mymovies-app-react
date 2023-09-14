/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'outline': '#E0E0E0',
        'primary' : '#165BAA'
      }
    },
  },
  plugins: [],
}

