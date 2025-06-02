import { useEffect, useRef } from "react"
// import { RoadMapContent } from "@/constants/RoadMapContent"
import { Box, Flex, rem } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import gsap from "gsap"

import {
  HomeHeroAvatar,
  PicScroll1,
  PicScroll2,
  PicScroll7,
  PicScroll8,
} from "@/assets/images"
import { UranusText } from "@/assets/vectors"

import { CardText } from "./component/CardText"

export const Uranus = () => {
  const scroller = useRef(null)
  // const skills = useRef(null)
  const isPc = useMediaQuery("(min-width: 1200)")
  useEffect(() => {
    const skillSet = gsap.utils.toArray(".uranus")
    let speed = 0

    if (isPc) {
      speed = 1000
    }

    const to = gsap.to(skillSet, {
      xPercent: () => -45,
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,

        scrub: 1,
        // invalidateOnRefresh: true,
        // anticipatePin: 0.2,
        start: "top top",

        // snap: 1 / (skillSet.length - 1),

        end: () => "+=" + (window.innerWidth - speed).toString(), //toc do scroll
      },
    })

    return () => {
      to.kill()
    }
  }, [])

  const data = [
    {
      title:
        "Supports a wide range of objectives, including Airdrop Farming and other automated tasks.",
      img: PicScroll1,
    },
    {
      title: "Support interactions and tasks across a diverse set of chains",
      img: PicScroll2,
    },
    {
      title: "Automates your airdrop participation.",
      img: PicScroll7,
    },
    {
      title: "Prioritizes the security of your assets.",
      img: PicScroll8,
    },
  ]

  return (
    <Box h={{ base: "150vw", lg: "150vw" }} bg={"#22073e"} pos={"relative"}>
      <Box
        pos={"absolute"}
        top={rem(-250)}
        w={rem(100)}
        h={rem(100)}
        // bg={"red"}
        id="test"
      />
      <Box top={0} pos={"sticky"}>
        <Flex
          pos={"relative"}
          ref={scroller}
          w={{ base: "100vw", lg: rem(2800) }}
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
            className="uranus"
          ></Flex>

          <CardText
            width={3204}
            svgRatio={3204 / 840}
            svgText={<UranusText />}
            data={data}
            className="uranus"
            imgWhite={HomeHeroAvatar}
            titleWhite="Streamlined On-Chain Automation"
          />
        </Flex>
      </Box>

      <Box mx={20} display={{ base: "block", lg: "none" }}></Box>
    </Box>
  )
}
