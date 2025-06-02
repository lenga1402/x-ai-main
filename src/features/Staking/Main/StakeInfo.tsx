import { useMemo } from "react"
import Image from "next/image"
import { api, formatPrice } from "@/utils"
import { AspectRatio, Box, Flex, Group, rem, Text } from "@mantine/core"

import { TokenXAIBOT } from "@/assets/images"

import { useInputAmount } from "../hooks/useInputAmount"
import { useSelectOption } from "../hooks/useSelectOption"
import { StakeOptions } from "./StakeOptions"

export const StakeInfo = () => {
  const { data: options } = api.staking.getOptions.useQuery()
  const { value: selectedOptionId } = useSelectOption()
  const { value: stakeAmount } = useInputAmount()

  const selectedOption = useMemo(() => {
    if (options && options.length && selectedOptionId) {
      const result = options.find(({ id }) => selectedOptionId === id)

      return result
    }
  }, [options, selectedOptionId])

  const estimatedReward = useMemo(() => {
    if (!stakeAmount || !selectedOption) return 0

    const duration = 12 / (selectedOption.duration / 60 / 60 / 24 / 30)

    const APY = selectedOption.apy / 100

    return ((stakeAmount * APY) / duration).toFixed(2)
  }, [selectedOption, stakeAmount])

  return (
    <>
      <Flex direction="column" gap={rem(8)} sx={{ "*": { color: "#C3C2D4" } }}>
        <Group spacing={0}>
          <Text fz={{ base: "sm", lg: "lg" }}>APY</Text>

          <Box
            h={rem(1.5)}
            sx={{ flex: 1 }}
            bg="rgba(170, 170, 170, 0.13)"
            w="100%"
          />

          <StakeOptions />
        </Group>

        <Group spacing={0}>
          <Text fz={{ base: "sm", lg: "lg" }}>Estimated Rewards</Text>

          <Box
            h={rem(1.5)}
            sx={{ flex: 1 }}
            bg="rgba(170, 170, 170, 0.13)"
            w="100%"
          />

          <Group spacing={rem(10)}>
            <Text fz={{ base: "sm", lg: "lg" }}>
              {formatPrice(estimatedReward)}
            </Text>

            <AspectRatio ratio={1} w={rem(30)}>
              <Image alt="" fill src={TokenXAIBOT} />
            </AspectRatio>
          </Group>
        </Group>
      </Flex>
    </>
  )
}
