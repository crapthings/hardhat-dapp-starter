const fs = require('fs')

const cert = fs.readFileSync('./localhost.cert')
const key = fs.readFileSync('./localhost.key')

module.exports = {
  mount: {
    'dapp-ui': '/',
    'dapp-ui/static': {
      url: '/static',
      resolve: false,
      static: true
    }
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
    secure: {
      cert,
      key
    }
  },
  buildOptions: {
    jsxInject: 'import React, { useState, useEffect, useLayoutEffect, useRef } from \'react\''
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
