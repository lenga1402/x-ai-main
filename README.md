# Base T3 Web3

## Checkout Docs:

### T3gg Stack:

- [T3gg](https://create.t3.gg/en/introduction)
- [Next.js](https://nextjs.org/docs)
- [React.js](https://react.dev/)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [TRPC](https://trpc.io/docs)
- [Prisma](https://www.prisma.io/docs)

### UI Libraries

- [Mantine](https://mantine.dev/pages/getting-started/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Embla Carousel](https://www.embla-carousel.com/get-started/)
- [AOS - Animated On Scroll](https://michalsnik.github.io/aos/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/docs/)
- [React Fast Marquee](https://www.react-fast-marquee.com/documentation)

### Other Libraries

- [Moment.js](https://momentjs.com/docs/)
- [Ethers v5](https://docs.ethers.org/v5/)

## Command

### Check lint:

```sh
yarn lint
```

## Metamask Feature

### If you want to use Metamask Feature, add code below to `.env` file:

```sh
NEXT_PUBLIC_WALLET="metamask"
```

### If you want to setup default network, add these codes below to `.env` file (these codes below is just an example, you can edit them):

```sh
NEXT_PUBLIC_NETWORK_NAME="Binance Smart Chain"
NEXT_PUBLIC_CHAIN_ID="56"
NEXT_PUBLIC_NEW_RPC_URL=" https://bsc-dataseed.binance.org/"
NEXT_PUBLIC_SYMBOL="BNB"
NEXT_PUBLIC_CURRENCY_DECIMALS="18"
```

## Solidity Smart Contract Features

### If you use some Solidity Smart Contracts which are not deployed inside this project, just paste your abis file (\*.json) in folder `src/abis`, and then enter the terminal the command below, the abi types and classes will be generated in the folder `src/typechain-non-owned`:

```sh
yarn typechain
```
