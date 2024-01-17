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
        'Linear1': '#FFE5E5',
        'Linear2': '#FAF4F3',
      },
      fontSize: {
        '5xl': '1.375rem',
      },
      boxShadow: {
        'around': "rgba(43, 52, 69, 0.1) 0px 4px 16px",
        'aroundSmall': "rgba(3, 0, 71, 0.09) 0px 1px 5px",
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}