import { useEffect } from "react"
import { AspectRatio, Flex, rem } from "@mantine/core"
import gsap from "gsap"

// import { nanoid } from "nanoid"

import { EveryWhereText } from "@/assets/vectors"

export const EveryWhere = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".EveryWhere")

    sections.forEach((section) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        opacity: 1,
        scrollTrigger: {
          trigger: "#everywhere",
          start: `top ${100}%`,
          end: `top ${30}%`,
          toggleActions: "play none reverse reset",
          scrub: true,
          markers: false,
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
    <Flex pos={"relative"}>
      <AspectRatio
        className="EveryWhere"
        opacity={0.2}
        w={{ base: rem(1800), lg: rem(1800) }}
        ratio={1839 / 232}
      >
        <EveryWhereText />
      </AspectRatio>
    </Flex>
  )
}
