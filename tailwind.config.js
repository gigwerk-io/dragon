module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          dominant: '#43a554',
          hover: '#71ba7d',
          active: '#2c954c'
        },
      },
      width: {
        '1/7': '14.2657143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
