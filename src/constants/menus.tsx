import { type IconType } from "react-icons/lib"

import {
  ButtonDiscord,
  ButtonMedium,
  ButtonTelegram,
  ButtonTwitter,
  ButtonYoutube,
} from "@/assets/vectors"

import { links } from "./links"
import { paths } from "./paths"

export const dashboardMenu = [
  {
    title: "Mint",
    link: paths.MINT,
  },
  {
    title: "Staking",
    link: paths.STAKING,
  },
]

export const rootMenuHeader = [
  {
    title: "Home",
    link: paths.HOME,
  },
  {
    title: "About",
    link: paths.ABOUT,
  },
  {
    title: "Staking",
    link: paths.STAKING,
  },
  {
    title: "$xAIBOT",
    link: paths.TOKEN,
  },
  {
    title: "COLLAB",
    link: paths.COLLAB,
  },
  {
    title: "WHITEPAPER",
    link: links.WHITEPAPER,
  },
]

export const rootMenuFooter = [
  {
    title: "About",
    link: paths.ABOUT,
  },
  {
    title: "Bots",
    link: "https://t.me/xaibotxaibot",
  },
  {
    title: "Docs",
    link: links.WHITEPAPER,
  },
]

export const menuSocial = [
  {
    icon: ButtonTwitter as IconType,
    title: "Twitter",
    link: links.TWITTER,
  },
  {
    icon: ButtonTelegram as IconType,
    title: "Telegram",
    link: links.TELEGRAM,
  },
  {
    icon: ButtonYoutube as IconType,
    title: "Youtube",
    link: links.YOUTUBE,
  },
  {
    icon: ButtonMedium as IconType,
    title: "Medium",
    link: links.MEDIUM,
  },
  {
    icon: ButtonDiscord as IconType,
    title: "Discord",
    link: links.DISCORD,
  },
]
