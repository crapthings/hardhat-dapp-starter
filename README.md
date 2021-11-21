# Hardhat Dapp Starter

### Getting Started

```bash
git clone https://github.com/crapthings/hardhat-dapp-starter
cd hardhat-dapp-starter
npm i
npm run dev
```

### FAQ

- connect to your contract address

```bash
contract:compile
contract:deploy
```

after you run above command, you will get "your dapp address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512".
then copy your dapp address, replace the "dappAddr" in stores/index.js with new one.


### CLI

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

### Docs

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

### TODOS

- [ ] Load contract address automatically
