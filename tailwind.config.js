/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: {
        'vertical-lr': 'vertical-lr',
      },
      colors: {
        bluePrimary: "#4085cb"
      }
    },
  },
  plugins: [],
}

