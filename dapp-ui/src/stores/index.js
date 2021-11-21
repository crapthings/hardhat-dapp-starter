import { ethers } from 'ethers'
import create from 'zustand'

import DappArtifact from '../../../dapp-contract/artifacts/contracts/Dapp.sol/Dapp.json'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const contract = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', DappArtifact.abi, provider)

console.log(contract)
console.log(await contract.getStr())

export default create((set) => ({
  str: null,
  async getStr () {
    set({ str: await contract.getStr() })
  }
}))
