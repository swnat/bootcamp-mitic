/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: '#9ca3af',
        darkgray: '#323a45',
        dark: 'rgb(33 38 42)',
        white: 'rgb(232 230 227)'
      }
    },
  },
  plugins: [],
}
