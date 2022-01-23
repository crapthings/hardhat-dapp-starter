const fs = require('fs')

async function main () {
  const Dapp = await ethers.getContractFactory('Dapp')
  const dapp = await Dapp.deploy()
  console.log('your dapp address:', dapp.address)
  const contractsAddr = JSON.stringify({
    DappAddr: dapp.address
  }, null, 2)
  fs.writeFileSync(`${process.cwd()}/dapp-ui/src/contracts.json`, contractsAddr)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
