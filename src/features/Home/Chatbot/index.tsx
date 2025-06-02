import { useEffect } from "react"
import { Grid, rem } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

import { Section } from "@/components/Section"

import { AnimTitle } from "./AnimTitle"
import { ChatbotCard } from "./ChatbotCard"
import { chatbotData } from "./data"

export const Chatbot = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".home-chatbot-data")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      if (index === 1 || index === 4) {
        const to = gsap.to(_section, {
          y: rem(300),
          scrollTrigger: {
            trigger: _section,
            toggleActions: "play none reverse reset",
            scrub: true,
            // markers: true,
          },
        })

        toList.push(to)
      }
    })

    return () => {
      toList.forEach((to) => {
        to.revert()
      })
    }
  }, [])

  return (
    <Section>
      <AnimTitle />

      <Grid pb="40vh">
        {chatbotData.map((data, index) => (
          <Grid.Col
            span={
              index === chatbotData.length - 1 ||
              index === chatbotData.length - 2
                ? 6
                : 4
            }
            key={nanoid()}
            className="home-chatbot-data"
          >
            <ChatbotCard data={data} />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}
