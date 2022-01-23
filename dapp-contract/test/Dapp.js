const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Dapp contract', function () {
  it('get string', async function () {
    const Dapp = await ethers.getContractFactory('Dapp')
    const hardhatToken = await Dapp.deploy()
    const str = await hardhatToken.getStr()
    expect(str).to.equal('Hardhat Dapp Starter')
  })
})
