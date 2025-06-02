import {
  HomeFeaturesBanner1,
  HomeFeaturesBanner2,
  HomeFeaturesBanner3,
} from "@/assets/images"

export type FeaturesDataProps = (typeof featuresData)[0]

export const featuresData = [
  {
    image: HomeFeaturesBanner1,
    title: "Airdrop Farming",
    description:
      "UranusBot offers a powerful Airdrop Farming feature designed to help users automate their airdrop participation and maximize rewards across multiple projects and protocols. In this article, we explore how UranusBot's Airdrop Farming simplifies the process, saving users time and effort while optimizing their airdrop strategy",
  },
  {
    image: HomeFeaturesBanner2,
    title: "Airdrop Tracking",
    description:
      "UranusBot's Airdrop Tracking feature revolutionizes how users manage their airdrop farming strategy. With comprehensive airdrop participation history, real-time reward updates, and upcoming airdrop reminders, UranusBot empowers users with the tools they need to optimize their airdrop farming and achieve success in the dynamic world of crypto airdrops.",
  },
  {
    image: HomeFeaturesBanner3,
    title: "Sybil Attack Protection",
    description:
      "By leveraging advanced identification algorithms, multi-parameter analysis, threshold-based detection, and proactive risk management, UranusBot effectively mitigates the risks associated with Sybil attacks, ensuring the long-term sustainability and success of our ecosystem.",
  },
]
