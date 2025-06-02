import { IdeasWrapper } from "@/features/About"
import { RootLayout } from "@/layouts/RootLayout"

export default function About() {
  return (
    <RootLayout withHeader={false} bg="#22073E">
      {/* <Hero /> */}
      <IdeasWrapper />
    </RootLayout>
  )
}
