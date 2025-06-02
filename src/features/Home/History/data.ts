import { type StaticImageData } from "next/image"
import { rem, type BoxProps, type PaperProps } from "@mantine/core"

import {
  HomeHistoryBanner1,
  HomeHistoryBanner2,
  HomeHistoryBanner3,
  HomeHistoryBanner4,
  HomeHistoryBanner5,
  HomeHistoryBanner6,
  HomeHistoryBanner7,
  HomeHistoryBanner8,
  HomeHistoryBanner9,
  HomeHistoryBanner10,
} from "@/assets/images"

export interface IHistoryData {
  year: string
  image: StaticImageData
  description: string
  ratio: number
  props?: PaperProps
  ctnProps?: BoxProps
  gsapVars?: gsap.TweenVars
}

export const historyData: IHistoryData[] = [
  {
    year: "1943",
    image: HomeHistoryBanner1,
    description:
      "Warren McCulloch and Walter Pitts proposed a model of artificial neurons in Chicago.",
    ratio: 438 / 530,
    props: {
      bg: "#fff",
      sx: { "*": { color: "#000 !important" } },
    },
    ctnProps: {
      w: rem(458),
      ml: rem(64),
    },
  },
  {
    year: "1956",
    image: HomeHistoryBanner2,
    description:
      'John McCarthy coined the term "artificial intelligence" at Dartmouth Conference.',
    ratio: 360 / 270,
    props: {},
    ctnProps: {
      w: rem(380),
      mt: rem(50),
    },
  },
  {
    year: "1969",
    image: HomeHistoryBanner3,
    description:
      "Shakey the Robot demonstrated reasoning abilities at SRI International.",
    ratio: 360 / 480,
    props: {},
    ctnProps: {
      w: rem(380),
      mt: rem(150),
    },
  },
  {
    year: "1980s",
    image: HomeHistoryBanner4,
    description:
      "First expert systems were developed, using human knowledge to solve problems.",
    ratio: 338 / 480,
    props: {},
    ctnProps: {
      w: rem(358),
      ml: "auto",
      mt: rem(100),
    },
  },
  {
    year: "1990s",
    image: HomeHistoryBanner5,
    description: "Neural networks and machine learning gaining popularity.",
    ratio: 194 / 173,
    props: {},
    ctnProps: {
      w: rem(214),
      ml: "auto",
      mt: rem(290),
    },
  },
  {
    year: "1997",
    image: HomeHistoryBanner6,
    description:
      "Chess computer Deep Blue defeats grandmaster Garry Kasparov, beating a human chess pro for the first time.",
    ratio: 440 / 312,
    props: {
      bg: "#fff",
      sx: { "*": { color: "#000 !important" } },
    },
    ctnProps: {
      w: rem(460),
      mt: rem(150),
    },
  },
  {
    year: "2011",
    image: HomeHistoryBanner7,
    description:
      "IBM Watson won Jeopardy! using natural language processing and machine learning.",
    ratio: 340 / 227,
    props: {},
    ctnProps: {
      w: rem(360),
      ml: rem(80),
      mt: rem(135),
    },
  },
  {
    year: "2012",
    image: HomeHistoryBanner8,
    description:
      "Google's neural network achieved breakthrough results in image recognition.",
    ratio: 333 / 290,
    props: {
      bg: "#fff",
      sx: { "*": { color: "#000 !important" } },
    },
    ctnProps: {
      w: rem(353),
      mt: rem(70),
      ml: rem(-130),
    },
  },
  {
    year: "2016",
    image: HomeHistoryBanner9,
    description:
      "AlphaGo, capable of machine learning, beats go master Lee Sedol in the game no grandmaster lost to a machine before.",
    ratio: 467 / 490,
    props: {},
    ctnProps: {
      w: rem(487),
      mt: rem(-100),
    },
  },
  {
    year: "2020s",
    image: HomeHistoryBanner10,
    description:
      "Various AI models are being integrated into a wide range of applications, from healthcare to finance.",
    ratio: 490 / 422,
    props: {
      bg: "#fff",
      sx: { "*": { color: "#000 !important" } },
    },
    ctnProps: {
      w: rem(510),
      mx: "auto",
      mt: rem(46),
    },
  },
]
