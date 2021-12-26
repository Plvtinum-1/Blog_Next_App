module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs' : '375px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
