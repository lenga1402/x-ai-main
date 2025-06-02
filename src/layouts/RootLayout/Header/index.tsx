import { Box, Flex, Group, rem } from "@mantine/core"

import { LogoBrand } from "@/components/LogoBrand"
import { Section } from "@/components/Section"

import { ActionButtons } from "./ActionButtons"
import { NavMenu } from "./NavMenu"
import { OffCanvasMenu } from "./OffCanvasMenu"

export const Header = () => {
  return (
    <Section
      pos="absolute"
      top={0}
      left={0}
      right={0}
      py={{ base: 20, lg: rem(20) }}
      sx={{
        zIndex: 10,
        borderBottom: "1px solid #ffffff020",
      }}
    >
      <Flex align="center">
        <Box sx={{ flex: 1 }}>
          <LogoBrand />
        </Box>

        <Box display={{ base: "none", lg: "block" }}>
          <NavMenu />
        </Box>

        <Group position="right" sx={{ flex: 1 }}>
          <ActionButtons display={{ base: "none", lg: "block" }} />

          <OffCanvasMenu display={{ base: "block", lg: "none" }} />
        </Group>
      </Flex>
    </Section>
  )
}
