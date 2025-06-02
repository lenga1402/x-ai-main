import React from "react"
import Image, { type StaticImageData } from "next/image"
import { AspectRatio, Box, Flex, Paper, rem, Text } from "@mantine/core"

type Props = {
  skills?: React.MutableRefObject<null>
  img: StaticImageData
  index: number
  title: string
}

export const CardComponent: React.FC<Props> = ({ img, index, title }) => {
  return (
    <Box px={"6vw"} h={"100vw"} mt={rem(-100)}>
      <Paper
        mt={index % 2 == 0 ? rem(315) : rem(103)}
        bg="rgba(187, 131, 242, 0.25)"
        w={rem(380)}
        mx="auto"
        p={rem(12)}
        radius="xs"
        id="home-hero-avatar-text"
        sx={{ borderRadius: "20px" }}
      >
        <Flex align={"center"} direction={"column"} gap={rem(12)}>
          <AspectRatio ratio={356 / 269} w={rem(356)}>
            <Image alt="" fill src={img} />
          </AspectRatio>

          <Text c="white" fz={rem(18)} fw={500}>
            {title}
          </Text>
        </Flex>
      </Paper>
    </Box>
  )
}
