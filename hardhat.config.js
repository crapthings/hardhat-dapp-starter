require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  paths: {
    root: './dapp-contract'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
  }
}
