import { useEffect, useRef } from "react"
import Image from "next/image"
import { textSplit } from "@/utils"
import { AspectRatio, Box, Flex, rem, Text } from "@mantine/core"
import { gsap } from "gsap"
import { nanoid } from "nanoid"

import {
  JupiterBotAvatar4,
  JupiterBotAvatar5,
  JupiterBotImg,
  JupiterBotImg2,
} from "@/assets/images"

const text =
  "JupiterBot is a powerful trading bot designed to revolutionize your trading endeavors. With its advanced algorithms and strategic insights, JupiterBot navigates the complex world of trading, helping you identify profitable opportunities and make informed decisions."

export const JupiterBotPinSection = () => {
  const triggerRef = useRef(null)
  const triggerRef2 = useRef(null)
  const cardRef = useRef(null)
  const cardRef2 = useRef(null)
  const imgRef = useRef(null)
  const img2Ref = useRef(null)

  useEffect(() => {
    const toList: gsap.core.Tween[] = []

    const sections = gsap.utils.toArray(".text-2")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const to = gsap.to(_section, {
        opacity: 1,
        scrollTrigger: {
          trigger: "#text-animation-2",
          start: `top ${55 - index * 3}%`,
          end: `top ${54 - index * 3}%`,
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
          // markers: true,
          toggleActions: "play none none reverse",
          // pinSpacing: true,
          scrub: 1,
          // anticipatePin: 1,
        },
      }
    )

    const to1 = gsap.fromTo(
      cardRef.current,
      {
        y: "-500%",
        rotate: -20,
      },
      {
        y: "-900%",
        rotate: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: `+=${rem(1500)}`,
          scrub: 1,
          toggleActions: "play none reverse reset",
          // markers: true,
        },
      }
    )

    const to2 = gsap.fromTo(
      cardRef2.current,
      {
        opacity: 0,
        y: "-500%",
      },
      {
        opacity: 1,
        y: "-1050%",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${rem(800)}`,
          scrub: 1,
          toggleActions: "play none reverse reset",
          // markers: true,
        },
      }
    )

    const to3 = gsap.fromTo(
      img2Ref.current,
      {
        y: "100%",
      },
      {
        y: "-30%",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "top -150%",
          scrub: 3,
          // markers: true,
        },
      }
    )

    return () => {
      to.revert()
      to1.revert()
      to2.revert()
      to3.revert()
    }
  }, [])

  return (
    <Box id="text-animation-2" py={rem(60)}>
      <Box px={rem(60)}>
        {textSplit(text).map((item) => (
          <Text
            key={nanoid()}
            span
            opacity={0.2}
            fz={{ base: 35, md: rem(80) }}
            className="text-2"
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
          <Image src={JupiterBotImg} alt="box" />
        </AspectRatio>
      </Box>
      <Flex
        direction="column"
        align="flex-start"
        maw={rem(400)}
        mx="auto"
        ref={triggerRef2}
        mt="100vh"
        sx={{ transform: "translateX(50%)" }}
      >
        {/* card 1 */}
        <Flex
          ref={cardRef}
          maw={rem(400)}
          gap={12}
          p={rem(12)}
          bg="rgba(255, 255, 255, 0.10)"
          sx={{
            backdropFilter: "blur(67px)",
            borderRadius: rem(18),
          }}
        >
          <AspectRatio ratio={1} maw={rem(56)} mah={56} sx={{ flex: 1 }}>
            <Image src={JupiterBotAvatar4} alt="avatar" />
          </AspectRatio>
          <Text sx={{ flex: 3 }}>
            What if I told you that AI carries the potential to significantly
            improve the wellbeing of humankind?
          </Text>
        </Flex>
        {/* card 2 */}
        <Flex
          ref={cardRef2}
          maw={rem(230)}
          gap={12}
          p={rem(12)}
          bg="#fff"
          sx={{
            backdropFilter: "blur(67px)",
            borderRadius: rem(18),
          }}
        >
          <AspectRatio ratio={1} maw={rem(56)} mah={56} sx={{ flex: 1 }}>
            <Image src={JupiterBotAvatar5} alt="avatar" />
          </AspectRatio>
          <Text sx={{ flex: 3 }} c="#000" fz={rem(18)}>
            Doesn&#8217;t sound so bad, isn&#8217;t it?
          </Text>
        </Flex>
      </Flex>
      <AspectRatio
        ref={img2Ref}
        ratio={1809 / 343}
        w="100%"
        h={rem(343)}
        mt={rem(120)}
        mx="auto"
      >
        <Image src={JupiterBotImg2} alt="box" />
      </AspectRatio>
    </Box>
  )
}
