/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'HeaderColor': '#393280',
        'FooterColor': '#ED553B',
        'LinearColor': '#FFE5E5',
        'TextColor1': '#393280',
        'TextColor2': '#888888',
        'TextColor3': '#ED553B',
      },
      fontSize: {
        '5xl': '1.375rem',
      }
    },
  },
  plugins: [],
}