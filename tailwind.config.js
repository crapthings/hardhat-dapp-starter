module.exports = {
  mode: 'jit',
  content: ['./dapp-ui/**/*.html', './dapp-ui/**/*.{js,jsx}'],
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
