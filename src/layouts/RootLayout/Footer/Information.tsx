import { Group, rem, Text } from "@mantine/core"

import { fonts } from "@/assets/fonts"

export const Information = () => {
  return (
    <Group fz={rem(13)} position="apart" mb={rem(32)}>
      <Text ff={fonts.INTER.style.fontFamily}>STAY TUNED!</Text>

      <Text tt="uppercase" ta="center" ff={fonts.INTER.style.fontFamily}>
        get in touch
        <br /> right now
      </Text>

      <Text ta="end" ff={fonts.INTER.style.fontFamily}>
        SUBSCRIBE TO OUR
        <br /> WEEKLY NEWSLETTER
      </Text>
    </Group>
  )
}
