module.exports = {
  root: './dapp-ui',
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    jsxInject: 'import React from \'react\''
  }
}
