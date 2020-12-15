module.exports = {
  purge: [
    './public/**/*.html',
    '*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito', 'sans-serif'],
        secondary: ['Raleway', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
