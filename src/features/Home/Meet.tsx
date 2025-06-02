import { useEffect, useRef } from "react"
import { paths } from "@/constants/paths"
// import { RoadMapContent } from "@/constants/RoadMapContent"
import { Box, Flex, rem } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import gsap from "gsap"

import {
  HomeHeroAvatar,
  PicScroll1,
  PicScroll2,
  PicScroll3,
  PicScroll4,
} from "@/assets/images"
import { LargeText } from "@/assets/vectors"
import { useScrollToSection } from "@/hooks/useScrollToSection"

import { CardText } from "./component/CardText"

export const Meet = () => {
  const { targetRef } = useScrollToSection(paths.FUTURE)
  const scroller = useRef(null)
  // const skills = useRef(null)
  const isPc = useMediaQuery("(min-width: 1200px)")
  useEffect(() => {
    const skillSet = gsap.utils.toArray(".skill-set")
    let speed = 0

    if (isPc) {
      speed = 1000
    }

    const to = gsap.to(skillSet, {
      xPercent: () => -40,
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,

        scrub: 1,

        start: "top top",

        end: () => "+=" + (window.innerWidth - speed).toString(),
      },
    })

    return () => {
      to.kill()
    }
  }, [])

  const data = [
    {
      title: "Intelligent insights through advanced algorithms and analytics.",
      img: PicScroll1,
    },
    {
      title: "Seamless integration for synergistic performance.",
      img: PicScroll2,
    },
    {
      title: "Future-focused adaptability for ongoing innovation.",
      img: PicScroll3,
    },
    {
      title: "Boundless potential and unprecedented innovation.",
      img: PicScroll4,
    },
  ]

  return (
    <Box h={{ base: "150vw", lg: "150vw" }} pos={"relative"} ref={targetRef}>
      <Box
        pos={"absolute"}
        top={rem(-250)}
        w={rem(100)}
        h={rem(100)}
        id="how"
      />
      <Box top={0} pos={"sticky"}>
        <Flex
          pos={"relative"}
          id="skills"
          ref={scroller}
          w={{ base: "100vw", lg: rem(3000) }}
          h={"100vh"}
        >
          <Flex
            bg={"#0E0E0E"}
            w={"0vw"}
            h={"100%"}
            direction={"column"}
            justify={"center"}
            align={"center"}
            display={"inline-block"}
            className="skill-set"
          ></Flex>

          <CardText
            width={2969}
            svgRatio={2969 / 840}
            svgText={<LargeText />}
            data={data}
            className="skill-set"
            imgWhite={HomeHeroAvatar}
            titleWhite="Centralized bot management and coordination."
          />
        </Flex>
      </Box>

      <Box mx={20} display={{ base: "block", lg: "none" }}></Box>
    </Box>
  )
}
