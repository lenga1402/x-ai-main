import Image from "next/image"
import { AspectRatio, Box, Center, Flex, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { XAiBotEllipse } from "@/assets/images"
import { Text$XAiBot } from "@/assets/vectors"

const data = [
  {
    title: "Governance and Voting",
    content:
      "$XAIBOT token holders have governance rights, giving them a say in the future development and direction of the XAIBOT platform. Through voting on proposals and protocol upgrades, token holders actively shape the ecosystem, fostering a decentralized and community-driven approach.",
  },
  {
    title: "Access to Premium Features",
    content:
      "Holding $XAIBOT tokens grants users access to premium features within the XAIBOT ecosystem. These features unlock advanced functionalities, AI-driven tools, and exclusive services, enhancing the overall user experience and maximizing the value proposition for token holders.",
  },
  {
    title: "Transaction Fee Discounts",
    content:
      "Using $XAIBOT tokens for transactions within the XAIBOT platform entitles users to fee reductions and discounts. This cost-effective feature encourages token adoption and usage, promoting seamless interactions and engagement within the ecosystem.",
  },
  {
    title: "Platform Incentives and Rewards",
    content:
      "To foster community engagement and reward active participants, XAIBOT implements various incentive programs. These initiatives may include referral bonuses, loyalty rewards, and airdrops, providing additional benefits to token holders and promoting continued involvement.",
  },
]

export const XAiBot = () => {
  return (
    <Box>
      <Center>
        <Text$XAiBot />
      </Center>
      <Box px={rem(40)}>
        {data.map(({ title, content }) => (
          <Flex key={nanoid()} w="100%" gap={rem(100)} mt={rem(100)}>
            <Text fz={rem(48)} fw={600} sx={{ flex: 2 }}>
              {title}
            </Text>
            <Text fz={rem(46)} sx={{ flex: 3 }}>
              {content}
            </Text>
          </Flex>
        ))}
      </Box>
      <AspectRatio ratio={984 / 609} w={rem(984)} mt={rem(70)} mx="auto">
        <Image src={XAiBotEllipse} alt="ellipse" />
      </AspectRatio>
    </Box>
  )
}
