module.exports = {
  mode: 'jit',
  purge: ['./dapp-ui/**/*.html', './dapp-ui/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ]
}
