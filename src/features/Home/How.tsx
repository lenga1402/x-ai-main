import { useEffect } from "react"
import { AspectRatio, Flex, rem } from "@mantine/core"
import gsap from "gsap"

// import { nanoid } from "nanoid"

import { LetterH, LetterO, LetterQuestion, LetterW } from "@/assets/vectors"

export const How = () => {
  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".who")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        top: 0,
        scrollTrigger: {
          trigger: "#how",
          start: `top ${100 - index * 10}%`,
          end: `top ${54 - index * 10}%`,
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
    <Flex pt={rem(300)} pb={rem(100)} px={rem(100)} gap={rem(50)}>
      <AspectRatio
        pos={"relative"}
        top={200}
        className="who"
        w={rem(333)}
        ratio={333 / 479}
      >
        <LetterH />
      </AspectRatio>

      <AspectRatio
        pos={"relative"}
        top={200}
        className="who"
        w={rem(406)}
        ratio={406 / 479}
      >
        <LetterO />
      </AspectRatio>

      <AspectRatio
        pos={"relative"}
        top={200}
        className="who"
        w={rem(626)}
        ratio={626 / 479}
      >
        <LetterW />
      </AspectRatio>

      <AspectRatio
        pos={"relative"}
        top={200}
        className="who"
        w={rem(273)}
        ratio={273 / 479}
      >
        <LetterQuestion />
      </AspectRatio>
    </Flex>
  )
}
