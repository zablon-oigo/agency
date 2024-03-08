/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGray':'#4O4D4O',
        'brandPrimary':'#4CAF4F',
        'neutralGray':'#717171',
      }
    },
  },
  plugins: [],
}

