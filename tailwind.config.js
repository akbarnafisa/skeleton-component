module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ['DM Serif Display'],
      body: ['Open Sans'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
