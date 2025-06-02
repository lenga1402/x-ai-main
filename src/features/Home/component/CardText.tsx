import React from "react"
import Image, { type StaticImageData } from "next/image"
import { type HorizonScrollDataProbs } from "@/types"
import { AspectRatio, Box, Flex, Group, Paper, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { CardComponent } from "./CardComponent"

type Props = {
  imgWhite: StaticImageData
  titleWhite: string
  className: string
  data: Array<HorizonScrollDataProbs>
  svgText: React.ReactNode
  svgRatio: number
  width: number
}

export const CardText: React.FC<Props> = ({
  className,
  titleWhite,
  imgWhite,
  data,
  svgText,
  svgRatio,
  width,
}) => {
  return (
    <Box
      w={"100vw"}
      sx={{
        overflow: "hidden",
      }}
      pos={"relative"}
      px={"3vw"}
      py={rem(40)}
    >
      <Box pos={"relative"} w={rem(width)} h={"100%"} className={className}>
        <AspectRatio w={"100%"} ratio={svgRatio}>
          {svgText}
        </AspectRatio>

        <Flex
          // bg={"red"}
          pos={"absolute"}
          left={0}
          top={rem(250)}
          w={"100%"}
          gap={"0vw"}
        >
          <Box px={"3vw"} h={"100vw"}>
            <Paper
              mt={rem(130)}
              bg="#fff"
              w={rem(340)}
              mx="auto"
              px={rem(13)}
              py={rem(15)}
              radius="lg"
              id="home-hero-avatar-text"
            >
              <Group noWrap spacing={rem(12)}>
                <Paper radius="md" bg="#232323">
                  <AspectRatio ratio={1} w={rem(55)}>
                    <Image alt="" fill src={imgWhite} />
                  </AspectRatio>
                </Paper>

                <Text c="#232323" fz={rem(18)} fw={500}>
                  {titleWhite}
                </Text>
              </Group>
            </Paper>
          </Box>

          {data.map((item, index) => (
            <Box key={nanoid()}>
              <CardComponent title={item.title} index={index} img={item.img} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
