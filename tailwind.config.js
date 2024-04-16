/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        '3': '3px',
      },

      right: {
        '100' : '400px'
      },

      keyframes: {
        slideOpen: {
          '0%': {
            transform: 'translateX(-22rem)'
          },
          '100%': {
            left: '0',
            display: 'fixed',
            top: '0,'
          }
        }
      },

      animation: {
        slideOpen: 'slideOpen .8s ease-in-out 0s 1 normal none',
      }
    },
  },
  plugins: [],
};
