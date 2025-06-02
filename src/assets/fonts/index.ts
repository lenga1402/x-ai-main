import { Inter, Space_Grotesk } from "next/font/google"
import localFont from "next/font/local"

const INTER = Inter({
  subsets: ["latin"],
})

const SPACE_GROTESK = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
})

const OFFBIT_TRIAL_DOT = localFont({
  src: [{ path: "./OffBitTrial-101.woff2", weight: "700" }],
})

const OFFBIT_TRIAL_DOT_BOLD = localFont({
  src: [{ path: "./OffBitTrial-Bold.woff2", weight: "700" }],
})

const GENERAL_SANS = localFont({
  src: [
    {
      path: "./GeneralSans-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "./GeneralSans-Light.woff2",
      weight: "300",
    },
    {
      path: "./GeneralSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "./GeneralSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "./GeneralSans-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./GeneralSans-Bold.woff2",
      weight: "700",
    },
  ],
})

export const fonts = {
  GENERAL_SANS,
  INTER,
  SPACE_GROTESK,
  OFFBIT_TRIAL_DOT,
  OFFBIT_TRIAL_DOT_BOLD,
}
