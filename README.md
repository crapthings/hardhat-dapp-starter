# Hardhat Dapp Starter

## Getting Started

```bash
git clone https://github.com/crapthings/hardhat-dapp-starter
cd hardhat-dapp-starter
npm i
npm run dev
```

## Requirements

> You should have MetaMask Installed [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)

[MetaMask](https://metamask.io/) A crypto wallet & gateway to blockchain apps.

## FAQ

#### connect to your contract address

> run command to get your dapp address.

```bash
npm run dev
npm run contract:compile
npm run contract:deploy
```

> find your contract addresses with dapp-ui/src/contracts.json

#### generating localhost ssl certificate

```bash
npx devcert-cli generate localhost
```

## CLI

```json
{
  "contract:dev": "npx hardhat node",
  "contract:compile": "npx hardhat compile",
  "contract:deploy": "npx hardhat run dapp-contract/scripts/deploy.js --network localhost",
  "contract:test": "npx hardhat test",
  "ui:dev": "snowpack dev",
  "ui:build": "snowpack build",
  "dev": "concurrently \"npm run contract:dev\" \"npm run ui:dev\""
}
```

## Docs

[Hardhat](https://hardhat.org/) Ethereum development environment for professionals.

[Snowpack](https://www.snowpack.dev/) Snowpack is a lightning-fast frontend build tool, designed for the modern web.

[Ethers](https://docs.ethers.io/) The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.

[React](https://reactjs.org/) A JavaScript library for building user interfaces.

[Zustand](https://github.com/pmndrs/zustand/) A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy api based on hooks, isn't boilerplatey or opinionated.

[React Router](https://reactrouter.com/) React client-side routing.

[React Hook Form](https://www.react-hook-form.com/) Performant, flexible and extensible forms with easy-to-use validation.

[React Icons](https://react-icons.github.io/react-icons/) Include popular icons in your React projects easily with react-icons.

[Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[Daisy UI](https://daisyui.com/) Tailwind CSS Components.

[Lodash](https://lodash.com/) A modern JavaScript utility library delivering modularity, performance & extras.

[Day.js](https://day.js.org/) Fast 2kB alternative to Moment.js with the same modern API.

## TODOS

- [x] Load contract address automatically
- [ ] Add IPFS support
- [ ] Add backend for off-chain data
