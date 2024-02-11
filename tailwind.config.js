/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './public/index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Adjust the value for desired height
        },
      },
      animation: {
        'up-down': 'upDown 1s ease-in-out infinite',
      },
      width: {
        '789px': '789px',
      },
      height: {
        '549px': '549px',
      },
      boxShadow: {
        'inset': '0px 4px 4px 0px #00000040 inset',
      },
    },
  },
  plugins: [],
}