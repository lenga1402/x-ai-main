import { useEffect } from "react"
import { paths } from "@/constants/paths"
import { Box, Grid, rem } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

import { useScrollToSection } from "@/hooks/useScrollToSection"
import { Section } from "@/components/Section"

import { AnimTitle } from "./AnimTitle"
import { historyData } from "./data"
import { HistoryCard } from "./HistoryCard"

export const History = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".home-history-data")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      if (index === 1 || index === 4 || index === 7 || index === 9) {
        const to = gsap.to(_section, {
          y: rem(200),
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
    <Section withPadding={false} pt={rem(108)} pb={rem(80)} px={rem(80)}>
      <AnimTitle />

      <ScrollPoint />

      <Grid mt={rem(150)} gutter={rem(50)}>
        {historyData.map((item, index) => (
          <Grid.Col
            span={index === historyData.length - 1 ? 12 : 4}
            key={nanoid()}
            className="home-history-data"
          >
            <HistoryCard data={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}

const ScrollPoint = () => {
  const { targetRef } = useScrollToSection(paths.PAST)

  return <Box ref={targetRef} />
}
