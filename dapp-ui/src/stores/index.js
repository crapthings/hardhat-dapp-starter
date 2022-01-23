import { ethers } from 'ethers'
import create from 'zustand'

import ContractAddrs from '../contracts.json'
import DappArtifact from '../../../dapp-contract/artifacts/contracts/Dapp.sol/Dapp.json'

const ethereum = window.ethereum

// get your contract deployed address then replace this by run `npm run contract:deploy`
const dappAddr = ContractAddrs.DappAddr
const provider = ethereum ? new ethers.providers.Web3Provider(ethereum) : null
const dappContract = ethereum ? new ethers.Contract(dappAddr, DappArtifact.abi, provider.getSigner()) : null

const stores = create((set) => ({
  account: null,
  str: null,
  async getStr () {
    set({ str: await dappContract.getStr() })
  },

  async setStr (str) {
    await dappContract.setStr(str)
  },
}))

try {
  ethereum.on('accountsChanged', setAccount)
  ethereum.request({ method: 'eth_accounts' }).then(setAccount)

  dappContract.on('changeStr', (str) => {
    stores.setState({ str })
  })
} catch (ex) {

}

function setAccount ([account]) {
  stores.setState({ account })
}

export default stores
