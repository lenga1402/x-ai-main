import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AspectRatio, Box, Flex, rem, Text } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

import {
  Article1,
  Article2,
  Article3,
  Article4,
  Article5,
  Article6,
  Article7,
  Article8,
} from "@/assets/images"

import { EveryWhere } from "../EveryWhere"

type Props = {
  className: string
}

export const ArticleComponent: React.FC<Props> = ({ className }) => {
  const data = [
    {
      pic: Article1,
      title: "The Rise of xAIBOT: Revolutionizing AI in Crypto Solutions",
      link: "https://medium.com/@xaibot/the-rise-of-xaibot-revolutionizing-ai-in-crypto-solutions-d772cb3e296d",
    },
    {
      pic: Article2,
      title:
        "Airdrop Tracking Made Easy: Unleashing xAIBOT’s Powerful Features",
      link: "https://medium.com/@xaibot/airdrop-tracking-made-easy-unleashing-xaibots-powerful-features-975f6fb4a6f9",
    },
    {
      pic: Article3,
      title:
        "Unlocking the Potential: How xAIBOT Enhances Your Crypto Experience",
      link: "https://medium.com/@xaibot/unlocking-the-potential-how-xaibot-enhances-your-crypto-experience-3903c46a1dab",
    },
    {
      pic: Article4,
      title: "Smart and Secure: Discover xAIBOT’s Advanced AI Technology",
      link: "https://medium.com/@xaibot/smart-and-secure-discover-xaibots-advanced-ai-technology-b358dcf15a67",
    },
    {
      pic: Article5,
      title:
        "Empowering Financial Freedom: xAIBOT’s Personalized Support for Users",
      link: "https://medium.com/@xaibot/empowering-financial-freedom-xaibots-personalized-support-for-users-e35536a1c032",
    },
    {
      pic: Article6,
      title: "Crypto Innovation Unleashed: xAIBOT’s Impact on the Market",
      link: "https://medium.com/@xaibot/crypto-innovation-unleashed-xaibots-impact-on-the-market-c02538e6c95",
    },
    {
      pic: Article7,
      title: "Building the Future: xAIBOT’s Vision for the Crypto Landscape",
      link: "https://medium.com/@xaibot/building-the-future-xaibots-vision-for-the-crypto-landscape-42d9289dc38",
    },
    {
      pic: Article8,
      title: "Smart Trading Strategies: Leveraging xAIBOT’s AI-driven Insights",
      link: "https://medium.com/@xaibot/smart-trading-strategies-leveraging-xaibots-ai-driven-insights-128a9dfeaf75",
    },
  ]

  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".article")

    sections.forEach((section) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        top: 0,
        scrollTrigger: {
          trigger: "#everywhere",
          start: `top ${100}%`,
          end: `top ${30}%`,
          toggleActions: "play none reverse reset",
          scrub: true,
          // markers: true,
        },
      })

      toList.push(to)
    })

    return () => {
      toList.forEach((to) => {
        to.revert()
      })
    }
  }, [])

  return (
    <Box
      sx={{
        overflow: "hidden",
      }}
      w={"100vw"}
      py={rem(50)}
    >
      <EveryWhere />
      <Box pos={"relative"} w={rem(11000)} h={"100%"} className={className}>
        <Flex
          className="article"
          pos={"relative"}
          top={rem(300)}
          gap={rem(120)}
        >
          {data.map((item) => (
            <Link
              key={nanoid()}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                p={rem(12)}
                sx={{ borderRadius: "18px" }}
                bg={"rgba(187, 131, 242, 0.25)"}
                h={rem(585)}
                w={rem(669)}
              >
                <AspectRatio mb={rem(12)} w={"100%"} ratio={645 / 465}>
                  <Image src={item.pic} alt="" fill />
                </AspectRatio>

                <Text c={"white"} fz={rem(18)}>
                  {item.title}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
