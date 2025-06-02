import { useMemo } from "react"
import { useRouter } from "next/router"
import { dashboardMenu } from "@/constants/menus"
import { Flex, rem, Title } from "@mantine/core"

import { Section } from "@/components/Section"

import { ActionButtons } from "./ActionButtons"

export const Header = () => {
  const { pathname } = useRouter()

  const textTitle = useMemo(() => {
    const menuItem = dashboardMenu.find(({ link }) => link === pathname)

    if (menuItem) return menuItem.title

    return "Dashboard"
  }, [pathname])

  return (
    <Section
      pos="sticky"
      top={0}
      left={0}
      right={0}
      py={{ base: 20, lg: rem(15) }}
      bg="#fff"
      sx={{ borderBottom: "1px solid #00000025", zIndex: 10 }}
    >
      <Flex align="center" justify="space-between">
        <Title order={2}>{textTitle}</Title>

        <ActionButtons />
      </Flex>
    </Section>
  )
}
