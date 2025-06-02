/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Paper, rem, Text } from "@mantine/core"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount } from "wagmi"

export const ButtonConnect = () => {
  const { open } = useWeb3Modal()
  const { address } = useAccount()

  const handleClick = () => {
    void open()
  }

  return (
    <Paper
      bg="#AA6ADC"
      ta="center"
      p={rem(16)}
      onClick={handleClick}
      radius="md"
      sx={{ cursor: "pointer" }}
    >
      <Text fw={500}>{!address ? "CONNECT WALLET" : `${address}`}</Text>
    </Paper>
  )
}
