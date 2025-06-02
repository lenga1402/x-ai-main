import { Section } from "@/components/Section"

import { NavMenu } from "../NavMenu"
import { RoadMap } from "./RoadMap"
import { TotalSupply } from "./TotalSupply"
import { XAiBot } from "./XAiBot"

export const IdeasWrapper = () => {
  return (
    <Section>
      <NavMenu />
      <XAiBot />
      <TotalSupply />
      <RoadMap />
    </Section>
  )
}
