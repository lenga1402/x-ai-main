import { AspectRatio, Box, rem } from "@mantine/core"

import { TextHistory } from "@/assets/vectors"
import { useAnimMove } from "@/hooks/useAnimMove"

export const AnimTitle = () => {
  const { triggerRef: effectRef } = useAnimMove({
    target: "#home-history-title",
    variant: "to",
    vars: {
      opacity: 1,
    },
    start: "top 80%",
    end: "top -100%",
    // markers: true,
  })

  return (
    <Box pos="sticky" top={0} pt={rem(150)}>
      <AspectRatio
        ref={effectRef}
        id="home-history-title"
        ratio={1760 / 353}
        w={rem(1760)}
        mx="auto"
        opacity={0}
      >
        <TextHistory />
      </AspectRatio>
    </Box>
  )
}
