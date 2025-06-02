import { Box, Paper, rem } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import { useAnimMove } from "@/hooks/useAnimMove"

export const AnimRings = () => {
  const isPc = useMediaQuery("(min-width: 1200px)")
  const { triggerRef: ring1Ref } = useAnimMove({
    target: "#home-ring-1",
    variant: "to",
    vars: {
      x: rem(300),
      width: rem(745),
      height: rem(745),
    },
    start: "top 90%",
  })
  const { triggerRef: ring2Ref } = useAnimMove({
    target: "#home-ring-2",
    variant: "to",
    vars: {
      x: isPc ? rem(300) : rem(20),
      y: rem(185),
      width: rem(560),
      height: rem(560),
    },
    start: "top 90%",
  })
  const { triggerRef: ring3Ref } = useAnimMove({
    target: "#home-ring-3",
    variant: "to",
    vars: {
      x: isPc ? rem(300) : rem(115),
      y: rem(375),
      width: rem(370),
      height: rem(370),
    },
    start: "top 90%",
  })

  return (
    <Box pos="sticky" top={0} w="fit-content" mx="auto" h="100vh" pt={rem(100)}>
      <Box
        id="home-ring-1"
        ref={ring1Ref}
        sx={{ borderRadius: "100%", border: `${rem(2)} solid #ffffff25` }}
        w={rem(1200)}
        h={rem(1200)}
      >
        <Paper
          fw={500}
          px={rem(14)}
          py={rem(10)}
          w="fit-content"
          mx="auto"
          mt={rem(30)}
          radius="lg"
          bg="#fff"
          c="#000"
          opacity={0}
          id="home-ring-inner-1"
        >
          SaturnBot
        </Paper>
      </Box>

      <Box
        ref={ring2Ref}
        id="home-ring-2"
        sx={{
          borderRadius: "100%",
          border: `${rem(2)} solid #ffffff25`,
          transform: "translateX(-50%)",
        }}
        w={rem(1015)}
        h={rem(1015)}
        pos="absolute"
        top={rem(100)}
        left="50%"
      >
        <Paper
          fw={500}
          px={rem(14)}
          py={rem(10)}
          w="fit-content"
          mx="auto"
          mt={rem(40)}
          radius="lg"
          bg="#fff"
          c="#000"
          opacity={0}
          id="home-ring-inner-2"
        >
          JupiterBot
        </Paper>
      </Box>

      <Box
        ref={ring3Ref}
        id="home-ring-3"
        sx={{
          borderRadius: "100%",
          border: `${rem(2)} solid #ffffff25`,
          transform: "translateX(-50%)",
        }}
        w={rem(825)}
        h={rem(825)}
        pos="absolute"
        top={rem(100)}
        left="50%"
      >
        <Paper
          fw={500}
          px={rem(14)}
          py={rem(10)}
          w="fit-content"
          mx="auto"
          mt={rem(50)}
          radius="lg"
          bg="#fff"
          c="#000"
          opacity={0}
          id="home-ring-inner-3"
        >
          UranusBot
        </Paper>
      </Box>
    </Box>
  )
}
