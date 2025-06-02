import Image from "next/image"
import {
  AspectRatio,
  Box,
  Flex,
  rem,
  Text,
  Title,
  type BoxProps,
} from "@mantine/core"

import { fonts } from "@/assets/fonts"

import { type FeaturesDataProps } from "./data"

type FeaturesCardProps = BoxProps & {
  data: FeaturesDataProps
}

export const FeaturesCard = ({
  data: { description, image, title },
  ...props
}: FeaturesCardProps) => {
  return (
    <Box {...props}>
      <Flex direction="column" justify="center" align="center">
        <AspectRatio ratio={1} w={rem(140)}>
          <Image alt="" fill src={image} />
        </AspectRatio>

        <Title order={3} ta="center" fz={rem(24)} mt={rem(28)} mb={rem(18)}>
          {title}
        </Title>

        <Text
          ta="center"
          c="rgba(255, 255, 255, 0.70)"
          ff={fonts.SPACE_GROTESK.style.fontFamily}
        >
          {description}
        </Text>
      </Flex>
    </Box>
  )
}
