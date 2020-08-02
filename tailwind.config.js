

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#009245',
        },
        secondary: {
          default: '#fff927'
        },
        'off-white': {
          default: '#ffffef'
        }
      }
    }
  },
}