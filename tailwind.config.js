/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#39FF14",
          dark: "#0B0F0E"
        }
      },
      boxShadow: {
        glow: "0 0 25px rgba(57,255,20,0.35)"
      }
    },
  },
  plugins: [],
}