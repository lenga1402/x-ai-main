/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useMemo } from "react"
import { env } from "@/env.mjs"
import { Button, Center, Paper, rem } from "@mantine/core"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount, useNetwork } from "wagmi"

export const Guard = ({ children }: { children: React.ReactNode }) => {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { chain } = useNetwork()

  const isCorrectNetwork = useMemo(
    () => chain?.id === Number(env.NEXT_PUBLIC_CHAIN_ID),
    [chain?.id]
  )

  const buttonText = useMemo(() => {
    if (!isConnected) return "Connect Wallet"

    return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME}`
  }, [isConnected])

  const handleClick = () => {
    void open()
  }

  return (
    <Paper
      withBorder
      p="md"
      bg="transparent !important"
      sx={{ borderColor: "#ffffff20 !important" }}
    >
      {!isConnected || !isCorrectNetwork ? (
        <Center h={rem(200)}>
          <Button onClick={handleClick} color="violet">
            {buttonText}
          </Button>
        </Center>
      ) : (
        children
      )}
    </Paper>
  )
}
