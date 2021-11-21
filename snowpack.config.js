module.exports = {
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
    jsxInject: 'import React, { useEffect } from \'react\''
  },
  root: './dapp-ui',
  workspaceRoot: './',
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ]
}
