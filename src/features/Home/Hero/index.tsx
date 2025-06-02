import { BackgroundImage, Box, Flex, rem } from "@mantine/core"

import { HomeHeroBg } from "@/assets/images"
import { Section } from "@/components/Section"

import { AnimText } from "./AnimText"
import { AnimTitle } from "./AnimTitle"
import { AvatarText } from "./AvatarText"
import { NavMenu } from "./NavMenu"

export const Hero = () => {
  return (
    <BackgroundImage
      src={HomeHeroBg.src}
      sx={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
      pos="relative"
    >
      <Section
        h={rem(1920)}
        withPadding={false}
        pos="relative"
        sx={{ zIndex: 1 }}
        px={rem(40)}
        pb={rem(50)}
      >
        <NavMenu />

        <Flex direction="column" h="100%">
          <Box sx={{ flex: 1 }}>
            <AnimTitle />
          </Box>

          <Box mt={rem(400)}>
            <AvatarText />

            <AnimText />
          </Box>
        </Flex>
      </Section>

      <Box
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        h={rem(1111)}
        bg="linear-gradient(180deg, rgba(8, 8, 8, 0.00) 0%, #22073E 100%)"
      />
    </BackgroundImage>
  )
}
