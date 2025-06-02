import { rootMenuFooter } from "@/constants/menus"
import { AspectRatio, Grid, Group, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { fonts } from "@/assets/fonts"
import { IconArrowTopRight } from "@/assets/vectors"
import { HybridLink } from "@/components/HybridLink"

export const CategoryMenu = () => {
  return (
    <Grid gutter={0} mt={rem(30)} mb={rem(50)} fz={rem(13)}>
      <Grid.Col span={3}>
        <Text>(07)</Text>
      </Grid.Col>

      <Grid.Col span={6}>
        <Group spacing={rem(200)}>
          {rootMenuFooter.map(({ link, title }) => (
            <HybridLink key={nanoid()} href={link}>
              <Text tt="uppercase" ff={fonts.INTER.style.fontFamily}>
                (
                <AspectRatio
                  ratio={1}
                  w={rem(14)}
                  mb={rem(-1)}
                  mr={rem(5)}
                  display="inline-block"
                >
                  <IconArrowTopRight />
                </AspectRatio>
                {title} )
              </Text>
            </HybridLink>
          ))}
        </Group>
      </Grid.Col>

      <Grid.Col span={3} pl={rem(170)}>
        <Text>(03)</Text>
      </Grid.Col>
    </Grid>
  )
}
