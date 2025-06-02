import { Box, Flex, rem, Title } from "@mantine/core"
import { nanoid } from "nanoid"

import { fonts } from "@/assets/fonts"
import { CardGradient } from "@/components/CardGradient"

const supply = [
  {
    title: "Initial Token Supply",
    content: "23,800,000 $xAIBOT",
  },
  {
    title: "Token Sale",
    content: "15,000,000 $xAIBOT",
  },
  {
    title: "Liquidity",
    content: "8,800,000 $xAIBOT",
  },
]

const utility = [
  {
    title: "Governance and  Decision-Making",
    content: "23,800,000 $xAIBOT",
  },
  {
    title: "Access to Premium Features",
    content: "3,500,000 $xAIBOT",
  },
  {
    title: "Staking and Rewards",
    content: "8,000,000 $xAIBOT",
  },
  {
    title: "Fee Reductions and Discounts",
    content: "6,500,000 $xAIBOT",
  },
]

const economic = [
  {
    title: "Token Burning and Deflationary Mechanisms",
    content: "7,500,000 $xAIBOT",
  },
  {
    title: "Ecosystem Development",
    content: "11,000,000 $xAIBOT",
  },
  {
    title: "Community and User Incentives",
    content: "8,200,000 $xAIBOT",
  },
]

const marketing = [
  {
    title: "Project Development",
    content: "12,000,000 $xAIBOT",
  },
  {
    title: "Partnerships",
    content: "5,000,000 $xAIBOT",
  },
  {
    title: "Ecosystem Growth",
    content: "4,500,000 $xAIBOT",
  },
]

export const TotalSupply = () => {
  return (
    <Box mt={rem(140)}>
      {/* section 1 */}
      <Box>
        <Title
          fz={rem(60)}
          fw={700}
          ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}
          ta="center"
          tt="uppercase"
        >
          TOTAL SUPPLY: 100,000,000
        </Title>
        <Flex justify="center" gap={rem(20)}>
          {supply.map(({ title, content }) => (
            <CardGradient
              key={nanoid()}
              title={title}
              content={content}
              mt={rem(60)}
            />
          ))}
        </Flex>
      </Box>
      {/* section 2 */}
      <Box mt={rem(80)}>
        <Title
          fz={rem(60)}
          fw={700}
          ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}
          ta="center"
          tt="uppercase"
        >
          Utility and Functionality
        </Title>
        <Flex justify="center" gap={rem(20)}>
          {utility.map(({ title, content }) => (
            <CardGradient
              key={nanoid()}
              title={title}
              content={content}
              mt={rem(60)}
            />
          ))}
        </Flex>
      </Box>
      {/* section 3 */}
      <Box mt={rem(80)}>
        <Title
          fz={rem(60)}
          fw={700}
          ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}
          ta="center"
          tt="uppercase"
        >
          Token Economics and Sustainability
        </Title>
        <Flex justify="center" gap={rem(20)}>
          {economic.map(({ title, content }) => (
            <CardGradient
              key={nanoid()}
              title={title}
              content={content}
              mt={rem(60)}
            />
          ))}
        </Flex>
      </Box>
      {/* section 4 */}
      <Box mt={rem(80)}>
        <Title
          fz={rem(60)}
          fw={700}
          ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}
          ta="center"
          tt="uppercase"
        >
          Marketing and Partnerships
        </Title>
        <Flex justify="center" gap={rem(20)}>
          {marketing.map(({ title, content }) => (
            <CardGradient
              key={nanoid()}
              title={title}
              content={content}
              mt={rem(60)}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
