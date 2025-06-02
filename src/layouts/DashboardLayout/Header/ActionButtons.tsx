import { useMetamask } from "@/contexts/metamaskContext"
import { shortenWalletAddress } from "@/utils"
import { Box, Button, Flex, rem, type BoxProps } from "@mantine/core"

export const ActionButtons = (props: BoxProps) => {
  const { address, connect, setupDefaultNetwork } = useMetamask()

  return (
    <Box {...props}>
      <Flex gap={rem(20)} justify="center">
        <Button onClick={() => void setupDefaultNetwork()}>Add Chain</Button>

        <Button onClick={connect}>
          {address ? shortenWalletAddress(address) : "Connect Wallet"}
        </Button>
      </Flex>
    </Box>
  )
}
