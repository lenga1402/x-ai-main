import { useToken } from "@/contexts/tokenContext"
import { formatPrice } from "@/utils"
import {
  AspectRatio,
  Group,
  Paper,
  rem,
  Text,
  type PaperProps,
} from "@mantine/core"
import { type PolymorphicComponentProps } from "@mantine/utils"

import { IconReload, IconWallet } from "@/assets/vectors"

import { useInputAmount } from "../hooks/useInputAmount"

export const UserBalance = () => {
  const { balance } = useToken()
  const { setValue } = useInputAmount()

  return (
    <Group position="apart">
      <Group>
        <FeatureButton onClick={() => setValue(0)} miw={rem(50)}>
          <AspectRatio ratio={1} w={rem(25)} mx="auto">
            <IconReload />
          </AspectRatio>
        </FeatureButton>

        <FeatureButton onClick={() => setValue(balance / 2)} miw={rem(70)}>
          Half
        </FeatureButton>

        <FeatureButton onClick={() => setValue(balance)} miw={rem(70)}>
          Max
        </FeatureButton>
      </Group>

      <Group spacing={rem(6)}>
        <AspectRatio ratio={1} w={rem(25)}>
          <IconWallet />
        </AspectRatio>

        <Text c="#C3C2D4" fw={500}>
          {formatPrice(balance)}
        </Text>
      </Group>
    </Group>
  )
}

const FeatureButton = (props: PolymorphicComponentProps<"div", PaperProps>) => (
  <Paper
    sx={{
      borderColor: "rgba(255, 255, 255, 0.16) !important",
      cursor: "pointer",
      transition: "all 0.25s",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.25) !important",
      },
    }}
    radius="md"
    withBorder
    p={rem(8)}
    ta="center"
    bg="transparent !important"
    c="rgba(255, 255, 255, 0.92) !important"
    fw={500}
    {...props}
  />
)
