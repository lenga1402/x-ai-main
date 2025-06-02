import { AspectRatio, Box, rem } from "@mantine/core"

import { Logo } from "@/assets/vectors"

import { paths } from "../constants/paths"
import { HybridLink } from "./HybridLink"

export const LogoBrand = () => {
  return (
    <Box w="fit-content">
      <HybridLink href={paths.HOME}>
        <AspectRatio ratio={1} w={{ base: 40, lg: rem(40) }}>
          <Logo />
        </AspectRatio>
      </HybridLink>
    </Box>
  )
}
