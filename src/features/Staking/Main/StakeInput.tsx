import Image from "next/image"
import { AspectRatio, Group, NumberInput, rem, Text } from "@mantine/core"

import { TokenXAIBOT } from "@/assets/images"

import { useInputAmount } from "../hooks/useInputAmount"

export const StakeInput = () => {
  const { value, setValue } = useInputAmount()

  return (
    <Group>
      <NumberInput
        variant="unstyled"
        precision={2}
        min={0}
        placeholder="0.00"
        value={value}
        onChange={(value) => setValue(Number(value))}
        sx={{
          flexGrow: 1,
          input: {
            fontSize: rem(28),
            fontWeight: 500,
          },
        }}
      />

      <Group spacing={rem(8)}>
        <AspectRatio ratio={39 / 36} w={rem(40)}>
          <Image alt="" fill src={TokenXAIBOT} />
        </AspectRatio>

        <Text c="#C3C2D4" fw={600} fz={{ sm: rem(20) }}>
          xAIBOT
        </Text>
      </Group>
    </Group>
  )
}
