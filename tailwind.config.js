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
            left: '0'
          }
        },

        slideClose: {
          '0%': {
            left: '0'
          },
          '100%': {
            transform: 'translateX(-22rem)'
          }
        },

        slideBottom: {
          '0%' :{
            transform: 'translateY(-30px)',
            opacity: '.4'
            },
          
            '100%' : {
            transform: 'translateY(20px)',
            opacity: '1'
            }
        },

        slideTop: {
          '0%' :{
            transform: 'translateY(20px)',
            opacity: '1'
            },
          
            '100%' : {
            transform: 'translateY(-30px)',
            opacity: '0'
            }
        },

        bounce: {
          '0%': {
            animationTimingFunction: 'ease-in',
            opacity: 1,
            transform: 'translateY(-13px)'
          },
          '24%': {
            opacity: 1
          },
          '40%': {
            animationTimingFunction: 'ease-in',
            transform: 'translateY(-6px)'
          },
          '65%': {
            animationTimingFunction: 'ease-in',
            transform: 'translateY(-2px)'
          },
          '82%': {
            animationTimingFunction: 'ease-in',
            transform: 'translateY(-0.8px)'
          },
          '93%': {
            animationTimingFunction: 'ease-in',
            transform: 'translateY(-0.1px)'
          },
          '25%': {
            animationTimingFunction: 'ease-out',
            transform: 'translateY(0px)'
          },
          '55%': {
            animationTimingFunction: 'ease-out',
            transform: 'translateY(0px)'
          },
          '75%': {
            animationTimingFunction: 'ease-out',
            transform: 'translateY(0px)'
          },
          '87%': {
            animationTimingFunction: 'ease-out',
            transform: 'translateY(0px)'
          },
          '100%': {
            animationTimingFunction: 'ease-out',
            opacity: 1,
            transform: 'translateY(0px)'
          }
        }
      },

      animation: {
        'slideOpen': 'slideOpen .8s ease-in-out 0s 1 normal none',
       'slideClose': 'slideClose .8s ease-in-out 0s 1 normal none',
        'bounce': 'bounce .7s ease-in 0s 1  normal backwards',
        'slideBottom': 'slideBottom .4s ease-in-out 0s 1 normal forwards',
        'slideTop': 'slideTop .4s ease-in-out 0s 1 normal forwards',
      }, 
     
    },
  },
  plugins: [],
};
