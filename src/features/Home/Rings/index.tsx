import { useEffect } from "react"
import { Flex, rem } from "@mantine/core"
import gsap from "gsap"
import { nanoid } from "nanoid"

import { Section } from "@/components/Section"

import { AnimRings } from "./AnimRings"
import { ringsData } from "./data"
import { InfoGroup } from "./InfoGroup"

export const Rings = () => {
  useEffect(() => {
    const ringList: gsap.core.Tween[] = []
    const innerList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".home-ring-data")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const ring = gsap.to(`#home-ring-${index + 1}`, {
        borderColor: "#fff",
        scrollTrigger: {
          trigger: _section,
          toggleActions: "play none reverse reset",
          scrub: true,
          // markers: true,
          end: "top 50%",
        },
      })

      const inner = gsap.to(`#home-ring-inner-${index + 1}`, {
        opacity: 1,
        scrollTrigger: {
          trigger: _section,
          toggleActions: "play none reverse reset",
          scrub: true,
          // markers: true,
          end: "top 50%",
        },
      })

      ringList[ringList.length - 1]?.reverse()

      ringList.push(ring)
      innerList.push(inner)
    })

    return () => {
      for (let i = 0; i < sections.length; i++) {
        ringList[i]?.revert()
        innerList[i]?.revert()
      }
    }
  }, [])

  return (
    <Section px={rem(100)}>
      <AnimRings />

      <Flex direction="column" gap={rem(120)} pb="40vh">
        {ringsData.map((data) => (
          <InfoGroup key={nanoid()} className="home-ring-data" {...data} />
        ))}
      </Flex>
    </Section>
  )
}
