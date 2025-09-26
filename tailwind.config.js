/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 this is IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
