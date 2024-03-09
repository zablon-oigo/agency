/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGray':'#404040',
        'brandPrimary':'#4CAF4F',
        'neutralGray':'#717171',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

