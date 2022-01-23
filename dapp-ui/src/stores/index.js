import { ethers } from 'ethers'
import create from 'zustand'

import ContractAddrs from '../contracts.json'
import DappContract from '../../../dapp-contract/artifacts/contracts/Dapp.sol/Dapp.json'

const stores = create((set) => ({
  account: null,

  str: null,
  balance: 0,

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

// A Provider (in ethers) is a class which provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.

// The "any" network will allow spontaneous network changes
const provider = new ethers.providers.Web3Provider(ethereum, 'any')

// A Signer is a class which (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations.

const signer = provider.getSigner()

// A Contract is an abstraction which represents a connection to a specific contract on the Ethereum Network, so that applications can use it like a normal JavaScript object.

const dappContract = new ethers.Contract(ContractAddrs.DappAddr, DappContract.abi, signer)

// provider events

// Force page refreshes on network changes
provider.on('network', (newNetwork, oldNetwork) => {
  // When a Provider makes its initial connection, it emits a "network"
  // event with a null oldNetwork along with the newNetwork. So, if the
  // oldNetwork exists, it represents a changing network
  if (oldNetwork) {
    window.location.reload()
  }
})

ethereum.on('accountsChanged', setAccount)

ethereum.request({ method: 'eth_accounts' }).then(setAccount)

// contract events

dappContract.on('changeStr', (str) => {
  stores.setState({ str })
})

function setAccount ([account]) {
  stores.setState({ account })
}

export default stores
