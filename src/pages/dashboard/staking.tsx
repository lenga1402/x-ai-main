import { TokenProvider } from "@/contexts/tokenContext"
import {
  ButtonStake,
  Claim,
  Overview,
  StakeInfo,
  StakeInput,
  StakeOptions,
  Unstake,
  UserBalance,
} from "@/features/Staking"
import { DashboardLayout } from "@/layouts/DashboardLayout"
import { Box, Flex, Grid, rem } from "@mantine/core"

export default function Staking() {
  return (
    <DashboardLayout>
      <TokenProvider>
        <Box p={{ base: 15, sm: 25, lg: rem(50) }}>
          <Grid gutter="xl">
            <Grid.Col span={12} lg={6}>
              <Flex direction="column" gap="lg">
                <UserBalance />

                <StakeOptions />

                <StakeInput />

                <StakeInfo />

                <ButtonStake />
              </Flex>
            </Grid.Col>

            <Grid.Col span={12} lg={6}>
              <Flex direction="column" gap="lg">
                <Overview />

                <Claim />

                <Unstake />
              </Flex>
            </Grid.Col>
          </Grid>
        </Box>
      </TokenProvider>
    </DashboardLayout>
  )
}
