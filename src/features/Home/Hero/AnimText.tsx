import { useEffect } from "react"
import { Box, rem, Text } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

const text =
  "X-AI believes in the potential of AI as a tool designed to aid and enhance, rather than to destroy. By demystifying AI and fostering trust, X-AI strives to empower individuals and organizations to unlock new opportunities and address challenges."

const splitWord = text.split(" ")

export const AnimText = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".home-hero-word")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        opacity: 1,
        scrollTrigger: {
          trigger: "#home-hero-avatar-text",
          start: `top ${70 - index * 3}%`,
          end: `top ${69 - index * 3}%`,
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
    <Text fz={rem(80)} lh="1em">
      {splitWord.map((letter) => (
        <Box
          key={nanoid()}
          display="inline-block"
          opacity={0.2}
          className="home-hero-word"
          px="xs"
        >
          {letter}
        </Box>
      ))}
    </Text>
  )
}
