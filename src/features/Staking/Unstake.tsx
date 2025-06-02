import { Box, Title } from "@mantine/core"

import { Guard } from "./components/Guard"
import { TableStake } from "./components/TableStake"
import { useUnstakeList } from "./hooks/useUnstakeList"

export const Unstake = () => {
  const { value } = useUnstakeList()

  return (
    <Box>
      <Title order={3} mb="sm">
        Unstake
      </Title>

      <Guard>
        <TableStake dataSource={value} />
      </Guard>
    </Box>
  )
}
