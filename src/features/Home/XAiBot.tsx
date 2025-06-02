import { useEffect, useRef } from "react"
import { Box, Divider, Flex, rem, Title } from "@mantine/core"
import { gsap } from "gsap"
import { nanoid } from "nanoid"

import { XAiBotAvatar, XAiBotAvatar2 } from "@/assets/images"
import { Section } from "@/components/Section"

import { CardBot } from "./JupiterBot"

const bot = {
  avatar: XAiBotAvatar.src,
  content:
    "xAIBOT harnesses the cutting-edge capabilities of artificial intelligence to transform the way we interact, learn, and innovate. With its advanced algorithms and deep understanding of various domains, xAIBOT empowers users with intelligent insights, personalized assistance, and limitless possibilities.",
}

const listBot = [
  {
    title: "What is xAIBOT?",
    avatar: XAiBotAvatar2.src,
    content:
      "xAIBOT is an advanced artificial intelligence system designed to provide intelligent insights, personalized assistance, and innovative solutions across various chains.",
    maxW: 480,
  },
  {
    title: "How do xAIBOTs work?",
    avatar: XAiBotAvatar2.src,
    content:
      "xAIBOTs utilize state-of-the-art algorithms and a vast knowledge base to understand and respond to user queries, offering intelligent and contextually relevant information.",
    maxW: 480,
  },
  {
    title: "Is xAIBOT capable of learning and improving over time?",
    avatar: XAiBotAvatar2.src,
    content:
      "xAIBOT is built on advanced machine learning techniques, enabling it to learn from user interactions and feedback. This continuous learning process helps improve its performance and enhance the quality of its responses.",
    maxW: 480,
  },
]

export const XAiBot = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const triggerRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t1 = gsap.fromTo(
      cardRef.current,
      {
        rotate: -5,
        opacity: 0.2,
      },
      {
        rotate: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 50%",
          end: "top 70%",
          scrub: 1,
          toggleActions: "play none reverse reset",
          // markers: true,
        },
      }
    )

    const lineTo = gsap.to(".divider-bottom", {
      width: "100%",
      scrollTrigger: {
        trigger: ".line-bottom",
        start: "top 30%",
        end: `+=${rem(1000)}`,
        scrub: 2,
      },
    })

    // line animation
    const toList: gsap.core.Timeline[] = []

    const sections = gsap.utils.toArray(".divider")

    sections.forEach((section, index) => {
      const _section = section as gsap.DOMTarget

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.line-section-${index}`,
          start: `top ${65 + index * 10}%`,
          end: `+=${250 * (index + 2)}`,
          toggleActions: "play none reverse reset",
          scrub: 4,
        },
      })

      const to = tl.to(_section, { width: "100%", delay: 0.3 * index })

      toList.push(to)
    })

    //card animation
    const toList2: gsap.core.Timeline[] = []
    const cards = gsap.utils.toArray(".card-bot")
    cards.forEach((card, index) => {
      const _card = card as gsap.DOMTarget

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef2.current,
          start: `top ${45 + index * 10}%`,
          end: `+=${300 * (index + 2)}`,
          toggleActions: "play none reverse reset",
          scrub: 1,
        },
      })

      const to2 = tl2.fromTo(
        _card,
        {
          opacity: 0,
          rotate: -10,
        },
        {
          delay: index === 2 ? 12 : index,
          opacity: 1,
          rotate: 0,
        }
      )

      toList2.push(to2)
    })

    //text animation
    const toList3: gsap.core.Timeline[] = []
    const texts = gsap.utils.toArray(".card-title")
    texts.forEach((text, index) => {
      const _text = text as gsap.DOMTarget

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef2.current,
          start: `top ${60 + index * 10}%`,
          end: `+=${300 * (index + 2)}`,
          toggleActions: "play none reverse reset",
          scrub: 1,
          // markers: index === 2 ? true : false,
        },
      })

      tl3.fromTo(
        _text,
        {
          opacity: 0,
        },
        {
          delay: index === 2 ? 5 : index,
          opacity: 1,
        }
      )

      toList3.push(tl3)
    })

    return () => {
      t1.revert()
      lineTo.revert()
      toList2.forEach((card) => {
        card.revert()
      })
      toList.forEach((item) => {
        item.revert()
      })
      toList3.forEach((item) => {
        item.revert()
      })
    }
  }, [])

  return (
    <Section bg="#091337" h={rem(2500)} pos="relative">
      <Box pt={rem(50)} pb={rem(120)} ref={triggerRef}>
        <CardBot
          cardRef={cardRef}
          avatar={bot.avatar}
          content={bot.content}
          maxW={550}
          mx="auto"
          color="#232323"
          bg="#fff"
        />
      </Box>
      <Box pos="sticky" top={50} ref={triggerRef2}>
        {listBot.map(({ avatar, content, title, maxW }, index) => (
          <Box className={`line-section-${index}`} key={nanoid()}>
            <Divider
              w={0}
              h={1}
              bg="rgba(255,255,255,0.25)"
              className={`divider`}
            />
            <Flex
              justify="space-around"
              align="center"
              direction={index === 1 ? "row-reverse" : "row"}
              py={rem(50)}
            >
              <Title
                maw={rem(850)}
                fz={rem(80)}
                lh={1.2}
                fw={400}
                className="card-title"
              >
                {title}
              </Title>
              <CardBot
                cn="card-bot"
                avatar={avatar}
                content={content}
                maxW={maxW}
                color="#fff"
                bg="rgba(187, 131, 242, 0.25)"
              />
            </Flex>
          </Box>
        ))}
        <Box className="line-bottom">
          <Divider
            w={0}
            h={1}
            bg="rgba(255,255,255,0.25)"
            className={`divider-bottom`}
          />
        </Box>
      </Box>
    </Section>
  )
}
