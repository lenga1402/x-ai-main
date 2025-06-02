import { type StaticImageData } from "next/image"
import { rem, type BoxProps, type PaperProps } from "@mantine/core"

import {
  HomeChatbotBanner1,
  HomeChatbotBanner2,
  HomeChatbotBanner3,
  HomeChatbotBanner4,
  HomeChatbotBanner5,
} from "@/assets/images"

export interface IChatbotData {
  title: string
  image: StaticImageData
  description: string
  ratio: number
  innerProps?: PaperProps
  ctnProps?: BoxProps
}

export const chatbotData: IChatbotData[] = [
  {
    title: "Trained ChatBot",
    image: HomeChatbotBanner1,
    description:
      "Tired of repetitive queries? Embed our custom-trained AI chatbot, SaturnBot, on your website and provide your audience with intelligent automated responses. SaturnBot saves you from answering the same questions repeatedly, offering insightful and personalized interactions that enhance user experiences.",
    ratio: 458 / 466,
    innerProps: {
      bg: "#fff",
      sx: { "*": { color: "#000 !important" } },
    },
    ctnProps: {
      w: rem(550),
    },
  },
  {
    title: "Custom prompts",
    image: HomeChatbotBanner2,
    description:
      "Infuse your chatbot with personality by customizing chatbot prompts. SaturnBot allows you to shape its responses and create a unique conversational experience that resonates with your audience.",
    ratio: 317 / 237,
    innerProps: {},
    ctnProps: {
      w: rem(400),
      mt: rem(50),
    },
  },
  {
    title: "Public or private",
    image: HomeChatbotBanner3,
    description:
      "SaturnBot offers versatile deployment options. Keep it private for a personalized edge, share it for customer support, or deploy it exclusively for internal resource navigation.",
    ratio: 433 / 422,
    innerProps: {},
    ctnProps: {
      w: rem(520),
      mt: rem(150),
    },
  },
  {
    title: "Hyperspeed iteration",
    image: HomeChatbotBanner4,
    description:
      "Our unique interface allow you to add data sources, remove them, change your chat prompts and settings all without ever leaving the chatbot for superfast experimentation to get the absolute best results.",
    ratio: 399 / 371,
    innerProps: {},
    ctnProps: {
      w: rem(480),
      mx: "auto",
      mt: rem(100),
    },
  },
  {
    title: "Multiple data sources",
    image: HomeChatbotBanner5,
    description:
      "Train your SaturnBot assistant on docs, pdfs, text, or have it crawl entire websites.",
    ratio: 410 / 274,
    innerProps: {
      bg: "#fff",
      sx: { "*": { color: "#000 !important" } },
    },
    ctnProps: {
      w: rem(490),
      mx: "auto",
      mt: rem(130),
    },
  },
]
