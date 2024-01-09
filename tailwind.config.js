/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'buttonBlue':'#458FF6',
        'deepBlue':'#233348',
        'normalGray':'#7D7987',
        'linkBlue':'#4089ED',
        'leftGradient':'#67C3F3',
        'rightGradient': '#5A98F2',
        'transparentWhite':'rgba(255, 255, 255, 0.90)'
      },
      fontFamily:{
        'mulish':['Mulish', "sans-serif"]
      }
    },
  },
  plugins: [],
}