import { useEffect } from "react"
import Image from "next/image"
import { api, formatPrice } from "@/utils"
import { AspectRatio, Grid, Group, Paper, rem, Text } from "@mantine/core"

import { TokenXAIBOT } from "@/assets/images"

import { useStaking } from "./hooks/useStaking"

export const Overview = () => {
  const { data: unstakeFee } = api.staking.getUnstakeFee.useQuery()
  const { data: totalStakedAmount } =
    api.staking.getTotalStakedAmount.useQuery()
  const { getUserStakeList } = useStaking()

  useEffect(() => {
    void getUserStakeList()
  }, [getUserStakeList, totalStakedAmount])

  return (
    <Grid>
      <Grid.Col span={6}>
        <Paper
          radius="md"
          p="lg"
          withBorder
          bg="rgba(255, 255, 255, 0.04) !important"
          sx={{ borderColor: "rgba(255, 255, 255, 0.10) !important" }}
        >
          <Group position="apart" fz={{ sm: rem(20) }} fw={500}>
            <Text c="#C3C2D4">Total Staked:</Text>

            <Group spacing={rem(10)}>
              <Text c="#C3C2D4">{formatPrice(totalStakedAmount || 0)}</Text>

              <AspectRatio ratio={1} w={rem(30)}>
                <Image alt="" fill src={TokenXAIBOT} />
              </AspectRatio>
            </Group>
          </Group>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper
          h="100%"
          radius="md"
          p="lg"
          withBorder
          bg="rgba(255, 255, 255, 0.04) !important"
          sx={{ borderColor: "rgba(255, 255, 255, 0.10) !important" }}
        >
          <Group position="apart" fz={{ sm: rem(20) }} fw={500}>
            <Text c="#C3C2D4">Unstake Fee:</Text>

            <Text>{unstakeFee || 0}%</Text>
          </Group>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}
