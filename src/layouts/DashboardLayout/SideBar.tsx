import Link from "next/link"
import { dashboardMenu } from "@/constants/menus"
import { Flex, Group, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { LogoBrand } from "@/components/LogoBrand"
import { Section } from "@/components/Section"

export const SideBar = () => {
  return (
    <Section
      h="100vh"
      display={{ base: "none", lg: "block" }}
      w={rem(250)}
      bg="#000"
      c="#fff"
      sx={{ overflow: "auto" }}
      pos="sticky"
      top={0}
      withPadding={false}
      p={rem(25)}
    >
      <Group position="center" mb={rem(50)}>
        <LogoBrand />
      </Group>

      <Flex direction="column" gap={rem(10)}>
        {dashboardMenu.map(({ link, title }) => (
          <Link key={nanoid()} href={link}>
            <Text c="#fff">{title}</Text>
          </Link>
        ))}
      </Flex>
    </Section>
  )
}
