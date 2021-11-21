async function main () {
  const Dapp = await ethers.getContractFactory('Dapp')
  const dapp = await Dapp.deploy()
  console.log('your dapp address:', dapp.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
