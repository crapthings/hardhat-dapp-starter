import { ethers } from 'ethers'
import create from 'zustand'

import DappArtifact from '../../../dapp-contract/artifacts/contracts/Dapp.sol/Dapp.json'

// get your contract deployed address then replace this by run `npm run contract:deploy`
const dappAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const contract = new ethers.Contract(dappAddr, DappArtifact.abi, provider)

export default create((set) => ({
  str: null,
  async getStr () {
    set({ str: await contract.getStr() })
  }
}))
