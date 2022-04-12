import _ from 'lodash'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ethers } from 'ethers'

import { render } from 'react-dom'

import Fallback from './components/fallback'

dayjs.extend(relativeTime)

window._ = _
window.dayjs = dayjs

;(() => {
  const app = document.querySelector('.app')

  if (!window.ethereum) {
    render(Fallback(), app)
    return
  }

  init(app)
})()

function init (app) {
  Promise.all([
    fetch('/static/contracts.json').then((resp) => resp.json()),
    fetch('/static/abi/Dapp.json').then((resp) => resp.json())
  ]).then(([
    ContractAddrs,
    DappContract,
  ]) => {
    window.ContractAddrs = ContractAddrs
    window.DappContract = DappContract

    import('./router').then((module) => {
      render(module.default(), app)
    })
  })
}
