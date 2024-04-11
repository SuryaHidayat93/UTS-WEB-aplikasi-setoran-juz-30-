/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        abu: '#828282',
        abumuda: '#E0E0E0',
        abuabu: '#F7F7F7'
      }
    },
    plugins: [],
  }
}
