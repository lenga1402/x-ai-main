import { env } from "process"
import { Box, Group, Paper, rem } from "@mantine/core"

export const ResponsiveIndicator = () => {
  return (
    <Paper
      display={env.NEXT_PUBLIC_NODE_ENV === "development" ? "block" : "none"}
      radius="xl"
      pos="fixed"
      bottom={rem(10)}
      left={rem(10)}
      bg="#000"
      c="#fff"
      fz={rem(12)}
      w={rem(35)}
      h={rem(35)}
      withBorder
      fw="bold"
      sx={{ zIndex: 10 }}
    >
      <Group position="center" h="100%">
        <Box display={{ xs: "none" }}>base</Box>
        <Box display={{ base: "none", xs: "block", sm: "none" }}>xs</Box>
        <Box display={{ base: "none", sm: "block", md: "none" }}>sm</Box>
        <Box display={{ base: "none", md: "block", lg: "none" }}>md</Box>
        <Box display={{ base: "none", lg: "block", xl: "none" }}>lg</Box>
        <Box display={{ base: "none", xl: "block" }}>xl</Box>
      </Group>
    </Paper>
  )
}
