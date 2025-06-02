import {
  Chatbot,
  Features,
  Hero,
  History,
  JupiterBot,
  JupiterBotPinSection,
  Jurpiter,
  PinSection,
  Rings,
  XAiBot,
} from "@/features/Home"
import { Article } from "@/features/Home/Article"
import { How } from "@/features/Home/How"
import { Meet } from "@/features/Home/Meet"
import { Uranus } from "@/features/Home/Uranus"
import { RootLayout } from "@/layouts/RootLayout"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  return (
    <RootLayout withHeader={false} isMainFooter>
      <Hero />
      <History />
      <How />
      <Meet />
      <Rings />
      <Chatbot />
      <PinSection />
      <Jurpiter />
      <JupiterBot />
      <JupiterBotPinSection />
      <Uranus />
      <Features />
      <Article />
      <XAiBot />
    </RootLayout>
  )
}
