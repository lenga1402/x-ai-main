import { useEffect, useRef } from "react"
import Image from "next/image"
import { textSplit } from "@/utils"
import { AspectRatio, Box, Flex, rem, Text } from "@mantine/core"
import { gsap } from "gsap"
import { nanoid } from "nanoid"

import {
  PinSectionAvatar,
  PinSectionImg,
  PinSectionImg2,
} from "@/assets/images"

const text =
  "SaturnBot is your trusted conversational guide, harnessing the wisdom and knowledge of the cosmos. With its intelligent algorithms and intuitive responses, SaturnBot offers a seamless and enriching conversational experience."

export const PinSection = () => {
  const imgRef = useRef(null)
  const triggerRef = useRef(null)
  const cardRef = useRef(null)
  const img2Ref = useRef(null)

  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".text")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        opacity: 1,
        scrollTrigger: {
          trigger: "#text-animation",
          start: `top ${85 - index * 3}%`,
          end: `top ${84 - index * 3}%`,
          toggleActions: "play none reverse reset",
          scrub: true,
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

  useEffect(() => {
    const to = gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 2,
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `top -100%`,
          // pin: true,
          //   markers: true,
          toggleActions: "play none reverse reset",
          // pinSpacing: true,
          scrub: 1,
          // anticipatePin: 1,
        },
      }
    )

    const to1 = gsap.fromTo(
      cardRef.current,
      {
        rotate: -20,
        y: "-600%",
      },
      {
        rotate: 0,
        y: "-800%",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom 20%",
          scrub: 2,
          toggleActions: "play none reverse reset",
        },
      }
    )

    const to2 = gsap.fromTo(
      img2Ref.current,
      {
        y: "50%",
      },
      {
        y: "-150%",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: `+=${rem(5000)}`,
          scrub: 3,
          toggleActions: "play none reverse reset",
        },
      }
    )

    return () => {
      to.revert()
      to1.revert()
      to2.revert()
    }
  }, [])

  return (
    <Box id="text-animation" py={rem(60)}>
      <Box px={rem(60)}>
        {textSplit(text).map((item) => (
          <Text
            key={nanoid()}
            span
            opacity={0.2}
            fz={{ base: 35, md: rem(80) }}
            className="text"
          >
            {item}{" "}
          </Text>
        ))}
      </Box>
      <Box
        pos="sticky"
        top={0}
        ref={triggerRef}
        w="100%"
        sx={{ overflow: "hidden" }}
      >
        <AspectRatio
          ref={imgRef}
          ratio={1}
          w={rem(1000)}
          h={rem(1000)}
          mt={rem(80)}
          mx="auto"
        >
          <Image src={PinSectionImg} alt="box" />
        </AspectRatio>
      </Box>
      <Flex
        ref={cardRef}
        align="flex-end"
        maw={rem(400)}
        gap={12}
        mx="auto"
        p={rem(12)}
        bg="rgba(255, 255, 255, 0.10)"
        sx={{
          backdropFilter: "blur(67px)",
          borderRadius: rem(18),
        }}
        mt="100vh"
      >
        <AspectRatio ratio={1} maw={rem(56)} mah={56} sx={{ flex: 1 }}>
          <Image src={PinSectionAvatar} alt="avatar" />
        </AspectRatio>
        <Text sx={{ flex: 3 }}>
          You can say it&#8217;s just an algorithm in a computer. But when it
          comes to today&#8217;s internet, AI is already here.
        </Text>
      </Flex>
      <AspectRatio ref={img2Ref} ratio={1} w="100%" h={rem(168)} mx="auto">
        <Image src={PinSectionImg2} alt="box" />
      </AspectRatio>
    </Box>
  )
}
