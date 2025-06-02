import { useEffect, useRef } from "react"
// import { RoadMapContent } from "@/constants/RoadMapContent"
import { Box, Flex, rem } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import gsap from "gsap"

import {
  HomeHeroAvatar,
  PicScroll1,
  PicScroll2,
  PicScroll5,
  PicScroll6,
} from "@/assets/images"
import { JupiterText } from "@/assets/vectors"

import { CardText } from "./component/CardText"

export const Jurpiter = () => {
  const scroller = useRef(null)
  const isPc = useMediaQuery("(min-width: 1200)")
  useEffect(() => {
    const skillSet = gsap.utils.toArray(".jurpiter")
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
      title: "DCA: Buy and take profit in one time.",
      img: PicScroll1,
    },
    {
      title: "Rebalancing: Create your own index",
      img: PicScroll2,
    },
    {
      title: "Real-time market analysis",
      img: PicScroll5,
    },
    {
      title: "Identifies buying and selling opportunities",
      img: PicScroll6,
    },
  ]

  return (
    <Box h={{ base: "160vw", lg: "150vw" }} bg={"#22073e"} pos={"relative"}>
      <Box pos={"sticky"} top={0}>
        <Flex
          pos={"relative"}
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
            className="jurpiter"
          ></Flex>
          <CardText
            width={2986}
            svgRatio={2986 / 840}
            svgText={<JupiterText />}
            data={data}
            className="jurpiter"
            imgWhite={HomeHeroAvatar}
            titleWhite="Buys low and sells high in the crypto market automatically."
          />
        </Flex>
      </Box>

      <Box mx={20} display={{ base: "block", lg: "none" }}></Box>
    </Box>
  )
}
