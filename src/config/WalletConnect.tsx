/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react"
import * as ethereum from "@web3modal/ethereum"
import * as react from "@web3modal/react"
import { bsc } from "viem/chains"
import { configureChains, createConfig, WagmiConfig } from "wagmi"

const chains = [bsc]
const projectId = "d7514991cb75e5213f4b9a9c30471c24"

const { publicClient } = configureChains(chains, [
  ethereum.w3mProvider({ projectId }),
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: ethereum.w3mConnectors({ projectId, chains }),
  publicClient,
})

const ethereumClient = new ethereum.EthereumClient(wagmiConfig, chains)

export const WalletConnectProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>

      <react.Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
