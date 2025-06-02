import { rootMenuHeader } from "@/constants/menus"
import { Flex, rem, Text, type FlexProps } from "@mantine/core"
import { nanoid } from "nanoid"

import { HybridLink } from "@/components/HybridLink"

export const NavMenu = (props: FlexProps) => {
  return (
    <Flex
      align={{ lg: "center" }}
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 10, sm: 20, lg: rem(40) }}
      {...props}
    >
      {rootMenuHeader.map((item) => (
        <MenuItem key={nanoid()} {...item} />
      ))}
    </Flex>
  )
}

type MenuItemProps = (typeof rootMenuHeader)[0]

const MenuItem = ({ title, link }: MenuItemProps) => {
  return (
    <HybridLink href={link}>
      <Text c="#fff" tt="uppercase" fw="bold">
        {title}
      </Text>
    </HybridLink>
  )
}
