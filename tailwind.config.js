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
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
