import {
  AvatarJupiterBot,
  AvatarSaturnBot,
  AvatarUranusBot,
} from "@/assets/images"

export type RingsDataProps = (typeof ringsData)[0]

export const ringsData = [
  {
    title: "SaturnBot: Your\n Conversational Guide.",
    avatarTitle: AvatarSaturnBot,
    bot: "With wisdom and clarity, SaturnBot engages in meaningful\n conversations, providing personalized assistance and valuable\n insights.",
    link: "https://t.me/saturnbotsaturnbot",
    buttonTitle: "Meet SaturnBot",
  },
  {
    title: "JupiterBot: Empowering\n Trading Success",
    avatarTitle: AvatarJupiterBot,
    bot: "JupiterBot navigates the complex world of trading, enabling you\n to seize opportunities and make informed decisions.",
    link: "https://whitepaper.xaibot.org/x-ai-cosmos-breakdown/jupiter-trading-bot",
    buttonTitle: "Meet JupiterBot",
  },
  {
    title: "UranusBot: Discover\n Airdrop Treasures",
    avatarTitle: AvatarUranusBot,
    bot: "UranusBot simplifies and automates airdrop farming for\n enthusiasts. By effortlessly setting up wallets and executing\n tailored airdrop farming strategies, UranusBot empowers airdrop\n farmers to maximize their rewards with ease and efficiency.",
    link: "https://whitepaper.xaibot.org/x-ai-cosmos-breakdown/uranus-airdrop-bot",
    buttonTitle: "Meet UranusBot",
  },
]
