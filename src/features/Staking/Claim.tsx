import { Box, Title } from "@mantine/core"

import { Guard } from "./components/Guard"
import { TableStake } from "./components/TableStake"
import { useClaimList } from "./hooks/useClaimList"

export const Claim = () => {
  const { value } = useClaimList()

  return (
    <Box>
      <Title order={3} mb="sm">
        Claim
      </Title>

      <Guard>
        <TableStake dataSource={value} />
      </Guard>
    </Box>
  )
}
