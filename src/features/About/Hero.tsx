import { Flex, rem } from "@mantine/core"

import { TextXAiBot2 } from "@/assets/vectors"
import { Section } from "@/components/Section"

export const Hero = () => {
  return (
    <Section withPadding>
      <Flex
        direction="column"
        align="center"
        gap={rem(60)}
        maw={rem(1340)}
        mx="auto"
      >
        <TextXAiBot2 />
        {/* <Flex w="100%" gap={rem(24)}>
          <Button h={rem(60)} radius={rem(50)} fz={rem(28)} sx={{ flex: 1 }}>
            Ideas
          </Button>
          <Button h={rem(60)} radius={rem(50)} fz={rem(28)} sx={{ flex: 1 }}>
            People
          </Button>
        </Flex> */}
      </Flex>
    </Section>
  )
}
