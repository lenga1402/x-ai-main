import Image from "next/image"
import { AspectRatio, Flex, Group, keyframes, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"
import Marquee from "react-fast-marquee"

import { MobileResponsive } from "@/assets/images"
import { TextXAiBot } from "@/assets/vectors"

const rotate = keyframes({
  "0%": {
    transform: "rotate(0)",
  },
  "20%": {
    transform: "rotate(90deg)",
  },
  "50%": {
    transform: "rotate(90deg)",
  },
  "75%": {
    transform: "rotate(90deg)",
  },
  "90%": {
    transform: "rotate(0deg)",
  },
})

// const displayAni = keyframes({
//   "0%": {
//     visibility: "hidden",
//   },
//   "100%": {
//     visibility: "unset",
//   },
// })

export const LayerWarning = () => {
  return (
    <Flex
      direction="column"
      align="center"
      py={rem(150)}
      sx={{ overflowX: "hidden", height: "calc(100vh - 80px)" }}
    >
      <AspectRatio
        ratio={1}
        w={rem(300)}
        sx={{ animation: `${rotate} 3s linear 1s infinite` }}
      >
        <Image src={MobileResponsive} alt="mobile" />
      </AspectRatio>
      <Flex direction="column" justify="center" sx={{ flex: 1 }}>
        <Marquee>
          <Group spacing={rem(400)}>
            {Array(3)
              .fill(null)
              .map(() => (
                <AspectRatio
                  key={nanoid()}
                  ratio={1000 / 240}
                  w={rem(1920)}
                  mx="auto"
                  sx={{ "*": { fill: "#fff" } }}
                >
                  <TextXAiBot />
                </AspectRatio>
              ))}
          </Group>
        </Marquee>
        B
      </Flex>

      <Text
        tt="uppercase"
        fz="3vw"
        fw="bold"
        ta="center"
        sx={{ borderTop: `${rem(1)} solid #fff` }}
        pt={rem(100)}
      >
        For the best experience, please rotate your phone
      </Text>
    </Flex>
  )
}
