import { ethers } from 'ethers'
import create from 'zustand'

const stores = create((set) => ({
  // init: false,
  account: null,

  str: null,
  balance: 0,

  async connect () {
    ethereum.request({ method: 'eth_requestAccounts' })
  },

  async getStr () {
    set({ str: await dappContract.getStr() })
  },

  async setStr (str) {
    await dappContract.setStr(str)
  },

  async getBalance (account) {
     set({ balance: ethers.utils.formatEther(await provider.getBalance(account)) })
  },
}))

const ethereum = window.ethereum

const provider = new ethers.providers.Web3Provider(ethereum, 'any')

provider.on('network', (newNetwork, oldNetwork) => {
  if (oldNetwork) {
    window.location.reload()
  }
})

const signer = provider.getSigner()

window.dappContract = new ethers.Contract(ContractAddrs.DappAddr, DappContract.abi, signer)

ethereum.on('accountsChanged', reloadPage)
ethereum.on('chainChanged', reloadPage)

dappContract.on('changeStr', (str) => {
  console.log('changeStr', str)
  stores.setState({ str })
})

ethereum.request({ method: 'eth_accounts' }).then(setAccount)

function reloadPage () {
  window.location.reload()
}

function setAccount ([account]) {
  if (!account) return
  stores.setState({ account })
}

export default stores
