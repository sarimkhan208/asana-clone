/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      helvetica : ["Helvetica Neue Light"]
    },
    screens: {
      'tablet': '450px',   
      'laptop': '850px',   
      'desktop': '1280px',
    },
  },
  plugins: [],
}