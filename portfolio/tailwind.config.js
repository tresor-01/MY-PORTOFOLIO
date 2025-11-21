/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet': 'hsl(0, 0%, 22%)',
        'onyx': 'hsl(240, 1%, 17%)',
        'eerie-black-1': 'hsl(240, 2%, 13%)',
        'eerie-black-2': 'hsl(240, 2%, 12%)',
        'smoky-black': 'hsl(0, 0%, 7%)',
        'white-1': 'hsl(0, 0%, 100%)',
        'white-2': 'hsl(0, 0%, 98%)',
        'orange-yellow-crayola': 'hsl(45, 100%, 72%)',
        'vegas-gold': 'hsl(45, 54%, 58%)',
        'light-gray': 'hsl(0, 0%, 84%)',
        'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
        'bittersweet-shimmer': 'hsl(0, 43%, 51%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        '2': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
        '3': '0 16px 40px hsla(0, 0%, 0%, 0.25)',
        '4': '0 25px 50px hsla(0, 0%, 0%, 0.15)',
        '5': '0 24px 80px hsla(0, 0%, 0%, 0.25)',
      },
    },
  },
  plugins: [],
}