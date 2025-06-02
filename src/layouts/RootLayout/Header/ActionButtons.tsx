import { Box, Button, Flex, rem, type BoxProps } from "@mantine/core"

export const ActionButtons = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Flex gap={rem(20)} justify="center">
        <Button>Add Chain</Button>

        <Button>Buy $Token</Button>
      </Flex>
    </Box>
  )
}
