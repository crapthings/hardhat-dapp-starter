import _ from 'lodash'
import { render } from 'react-dom'

import Fallback from './components/fallback'

window._ = _

;(() => {
  const app = document.querySelector('.app')

  if (!window.ethereum) {
    render(Fallback(), app)
    return
  }

  import('./router').then((module) => {
    render(module.default(), app)
  })
})()
