import { ethers } from 'ethers'
import create from 'zustand'

import DappArtifact from '../../../dapp-contract/artifacts/contracts/Dapp.sol/Dapp.json'

const ethereum = window.ethereum

// get your contract deployed address then replace this by run `npm run contract:deploy`
const dappAddr = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
const provider = ethereum ? new ethers.providers.Web3Provider(ethereum) : null
const contract = ethereum ? new ethers.Contract(dappAddr, DappArtifact.abi, provider) : null

const stores = create((set) => ({
  account: null,
  str: null,
  async getStr () {
    set({ str: await contract.getStr() })
  }
}))

try {
  ethereum.on('accountsChanged', setAccount)
  ethereum.request({ method: 'eth_accounts' }).then(setAccount)
} catch (ex) {

}

function setAccount ([account]) {
  stores.setState({ account })
}

export default stores
