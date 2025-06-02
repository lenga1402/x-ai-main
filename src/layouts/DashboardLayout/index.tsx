import { Box, Flex } from "@mantine/core"

import { Header } from "./Header"
import { SideBar } from "./SideBar"

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return (
    <Flex>
      <SideBar />

      <Box pos="relative" sx={{ flex: 1 }}>
        <Header />

        {children}
      </Box>
    </Flex>
  )
}
