import { DashboardLayout } from "@/layouts/DashboardLayout"
import { Box, rem } from "@mantine/core"

export default function Mint() {
  return (
    <DashboardLayout>
      <Box p={{ base: 15, sm: 25, lg: rem(50) }}>Mint</Box>
    </DashboardLayout>
  )
}
