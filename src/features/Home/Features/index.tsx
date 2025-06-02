import { AspectRatio, Grid, Group, rem, Text } from "@mantine/core"
import { nanoid } from "nanoid"

import { IconArrowTopRight } from "@/assets/vectors"
import { HybridLink } from "@/components/HybridLink"
import { Section } from "@/components/Section"

import { AnimText } from "./AnimText"
import { featuresData } from "./data"
import { FeaturesCard } from "./FeaturesCard"

export const Features = () => {
  return (
    <Section bg="#22073e" sx={{ zIndex: 1 }} pos="relative">
      <AnimText />

      <Grid
        gutter={0}
        my={rem(100)}
        sx={{
          border: `${rem(1)} solid rgba(255, 255, 255, 0.10)`,
          borderRadius: rem(12),
        }}
      >
        {featuresData.map((data, index) => (
          <Grid.Col
            px={rem(45)}
            py={rem(60)}
            span={4}
            key={nanoid()}
            sx={
              index !== featuresData.length - 1
                ? {
                    borderRight: `${rem(1)} solid rgba(255, 255, 255, 0.10)`,
                  }
                : {}
            }
          >
            <FeaturesCard data={data} />
          </Grid.Col>
        ))}
      </Grid>

      <HybridLink href="https://t.me/xAIBOT_xAIBOT">
        <Group
          position="center"
          spacing={rem(25)}
          py={rem(70)}
          bg="linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%)"
          sx={{ borderRadius: rem(36) }}
        >
          <Text fz={rem(79)}>Meet UranusBot</Text>

          <AspectRatio ratio={79 / 91} w={rem(90)}>
            <IconArrowTopRight />
          </AspectRatio>
        </Group>
      </HybridLink>
    </Section>
  )
}
