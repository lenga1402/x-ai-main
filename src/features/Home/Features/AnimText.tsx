import { useEffect } from "react"
import { Box, rem, Text } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

const text =
  "UranusBot, the Telegram bot, simplifies on-chain interactions and serves as a streamlined frontend for numerous chains. With its user-friendly interface, anyone can create or follow automated tasks, including Airdrop Farming, to efficiently achieve their objectives across multiple chains."

const splitWord = text.split(" ")

export const AnimText = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".home-features-word")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        opacity: 1,
        scrollTrigger: {
          trigger: "#home-features-text",
          start: `top ${90 - index * 3}%`,
          end: `top ${89 - index * 3}%`,
          toggleActions: "play none reverse reset",
          scrub: true,
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
    <Text fz={rem(80)} lh="1em" id="home-features-text">
      {splitWord.map((letter) => (
        <Box
          key={nanoid()}
          display="inline-block"
          opacity={0.2}
          className="home-features-word"
          px="xs"
        >
          {letter}
        </Box>
      ))}
    </Text>
  )
}
