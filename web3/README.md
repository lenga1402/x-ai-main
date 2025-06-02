# Let's deploy your own contracts!

## Docs

- [Hardhat](https://hardhat.org/docs)
- [Typechain](https://github.com/dethcrypto/TypeChain)
- [Solidity](https://docs.soliditylang.org/en/v0.8.19/)

## Preface

- I have already defined 2 network in file `hardhat.config.ts`, which are `BSC` and `BNB Testnet`.
- There are 3 example contracts in folder `contracts`. You can copy them and change by your purpose.
- There are also 3 deploy files defined in folder `scripts` corresponding to 3 given contract files. You can copy them and change by your purpose.
- When you run the `deploy` command, the hardhat will compile all `.sol` file for you, you don't need to run the command `hardhat-compile`!
- There are also 3 commands defined in file `package.json` to deploy these 3 contracts to `BNB Testnet`. You can copy them and change by your purpose. If you want to deploy to `BSC`, just change all string `bnbt` belonged to that command to `bnb`.
- You can define more prefix link in file `scripts/deploy.ts` and edit the function `getPrefixLink` corresponding to your new networks that you want to add.
- You SHOULD write the contract file's name exactly same as the contract name (capitalize also).
- The param `contractName` of function `deploy` must be exactly same as the contract name you want to deploy.
- In the deploy command I have already written, i also remove folder `temp`, which contains folder `artifacts` and `cache` of the latest deployment. I do it because if I want to make a new deployment, I want all my `.sol` files to be compiled again and generate new `typechain` stuffs. I can do like me or not, it's up to you!

## Commands

### Compile all `.sol` files:

```
yarn hardhat-compile
```

### Clean all artifacts and cache of the latest deployment:

```
yarn hardhat-clean
```
