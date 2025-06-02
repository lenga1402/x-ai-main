import { useEffect, useRef } from "react"
// import { RoadMapContent } from "@/constants/RoadMapContent"
import { Box, Flex, rem } from "@mantine/core"
import gsap from "gsap"

import { ArticleComponent } from "./component/ArticleComponent"

export const Article = () => {
  const scroller = useRef(null)
  // const skills = useRef(null)

  useEffect(() => {
    const skillSet = gsap.utils.toArray(".article")

    const to = gsap.to(skillSet, {
      xPercent: () => -20,
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,

        scrub: 1,
        start: "top top",
        // snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth.toString(),
      },
    })

    return () => {
      to.kill()
    }
  }, [])

  return (
    <Box
      h={"170vw"}
      bg={"linear-gradient(0deg, #091337 0%, #160825 95.83%, #22073e 100%)"}
      px={rem(50)}
      pos={"relative"}
    >
      <Box
        pos={"absolute"}
        top={rem(200)}
        w={rem(100)}
        h={rem(100)}
        // bg={"red"}
        id="everywhere"
      />
      <Box top={0} pos={"sticky"}>
        <Flex
          pos={"relative"}
          ref={scroller}
          w={{ base: "96vw", lg: rem(3000) }}
          h={"100vh"}
        >
          <Flex
            bg={"#0E0E0E"}
            w={"0vw"}
            // h={"100%"}
            direction={"column"}
            justify={"center"}
            align={"center"}
            display={"inline-block"}
            className="uranus"
          ></Flex>

          <ArticleComponent className="article" />
        </Flex>
      </Box>

      <Box mx={20} display={{ base: "block", lg: "none" }}></Box>
    </Box>
  )
}
