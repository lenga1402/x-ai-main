import { useEffect, useRef, type RefObject } from "react"
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Image,
  rem,
  Text,
  type FlexProps,
} from "@mantine/core"
import { gsap } from "gsap"
import { nanoid } from "nanoid"

import {
  JupiterBotAvatar,
  JupiterBotAvatar2,
  JupiterBotAvatar3,
  JupiterBotTitle,
  JupiterBotTitle2,
  JupiterBotTitle3,
  JupiterBotTitle4,
} from "@/assets/images"
import { Section } from "@/components/Section"

const dataLeft = [
  {
    avatar: JupiterBotAvatar.src,
    content:
      "JupiterBot, your exclusive trading bot, harnesses the power of automation to help you buy low and sell high in the crypto markets.",
  },
  {
    maxW: 400,
    avatar: JupiterBotAvatar2.src,
    content:
      "Experience the power of JupiterBot and let it be your trusted companion in navigating the dynamic realm of crypto trading.",
  },
]

const dataRight = [
  {
    maxW: 420,
    title: {
      image: JupiterBotTitle.src,
      ratio: 300 / 88,
      width: 300,
    },
    avatar: JupiterBotAvatar3.src,
    content:
      "With the DCA Bot feature, JupiterBot enables you to automate your investment approach by regularly buying assets at fixed intervals, regardless of market fluctuations.",
  },
  {
    maxW: 440,
    title: {
      image: JupiterBotTitle2.src,
      ratio: 470 / 176,
      width: 470,
    },
    avatar: JupiterBotAvatar3.src,
    content:
      "With this powerful tool, JupiterBot automates the process of portfolio rebalancing, ensuring your investments stay aligned with your desired asset allocation.",
  },
  {
    maxW: 480,
    title: {
      image: JupiterBotTitle3.src,
      ratio: 520 / 176,
      width: 520,
    },
    avatar: JupiterBotAvatar3.src,
    content:
      "With this functionality, JupiterBot scans multiple exchanges in real-time, identifying price discrepancies and executing arbitrage opportunities for potential profit.",
  },
  {
    maxW: 440,
    title: {
      image: JupiterBotTitle4.src,
      ratio: 464 / 176,
      width: 464,
    },
    avatar: JupiterBotAvatar3.src,
    content:
      "JupiterBot conducts comprehensive market analysis, providing valuable insights and data-driven recommendations to enhance your trading decisions.",
  },
]

export const JupiterBot = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const cardRef2 = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t1 = gsap.fromTo(
      cardRef.current,
      {
        rotate: -12,
        opacity: 0.1,
        y: rem(100),
      },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        // duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 90%",
          end: `+=${rem(350)}`,
          // markers: true,
          scrub: 6,
          toggleActions: "play none reverse reset",
        },
      }
    )
    const t2 = gsap.fromTo(
      cardRef2.current,
      {
        rotate: -12,
        opacity: 0.1,
        y: rem(100),
      },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        // duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: `+=${rem(500)}`,
          // markers: true,
          scrub: 6,
          toggleActions: "play none reverse reset",
        },
      }
    )

    const toList: gsap.core.Tween[] = []
    const sections = gsap.utils.toArray(".card-right")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const fromTo = gsap.fromTo(
        _section,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          delay: 2,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `top ${90 - index * 20}%`,
            end: "+=400",
            toggleActions: "play none reverse reset",
            scrub: 1,
            // markers: index === 3 ? true : false,
          },
        }
      )

      toList.push(fromTo)
    })

    return () => {
      t1.revert()
      t2.revert()
      toList.forEach((item) => {
        item.revert()
      })
    }
  }, [])

  return (
    <Section bg="#22073e" sx={{ zIndex: 1 }} pos="relative">
      <Flex gap={rem(50)} ref={triggerRef} pos="relative">
        <Flex
          direction="column"
          justify="space-between"
          align="flex-end"
          sx={{ flex: 1 }}
        >
          {dataLeft.map(({ avatar, content, maxW }, index) => (
            <CardBot
              key={nanoid()}
              pos="sticky"
              mb={index === 0 ? 150 : 0}
              top={index === 0 ? 40 : "unset"}
              cardRef={index === 0 ? cardRef : cardRef2}
              avatar={avatar}
              content={content}
              color="#000"
              maxW={maxW}
              bg="#fff"
            />
          ))}
        </Flex>
        <Box sx={{ flex: 2 }}>
          <Grid mx={0}>
            {dataRight.map(({ title, avatar, content, maxW }) => (
              <Grid.Col md={6} key={nanoid()} className={`card-right`}>
                {title && (
                  <AspectRatio
                    ratio={title.ratio}
                    w={rem(title.width)}
                    mb={rem(15)}
                  >
                    <Image src={title.image} alt="title" />
                  </AspectRatio>
                )}
                <CardBot
                  avatar={avatar}
                  content={content}
                  maxW={maxW}
                  color="#fff"
                  bg="rgba(187, 131, 242, 0.25)"
                />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Section>
  )
}

type CardBotProps = FlexProps & {
  avatar: string
  content: string
  title?:
    | {
        image: string
        ratio: number
        width: number
      }
    | string
  color: string
  maxW?: number
  cardRef?: RefObject<HTMLDivElement>
  cn?: string
}

export const CardBot: React.FC<CardBotProps> = ({
  avatar,
  content,
  color,
  maxW,
  cardRef,
  cn,
  ...props
}) => {
  return (
    <Flex
      ref={cardRef}
      w={rem(maxW)}
      p={rem(12)}
      gap={rem(12)}
      {...props}
      sx={{ borderRadius: rem(8) }}
      className={cn}
    >
      <AspectRatio ratio={1} maw={rem(56)} mah={rem(56)} sx={{ flex: 1 }}>
        <Image src={avatar} alt="avatar" />
      </AspectRatio>
      <Text fz={{ base: 16, md: rem(18) }} c={color} sx={{ flex: 2 }}>
        {content}
      </Text>
    </Flex>
  )
}
