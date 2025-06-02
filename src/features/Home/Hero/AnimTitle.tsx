import { useEffect, useState } from "react"
import { keys } from "@/constants/keys"
import { AspectRatio, Box, rem, type BoxProps } from "@mantine/core"

import { TextXAiBot } from "@/assets/vectors"

export const AnimTitle = (props: BoxProps) => {
  const [activeGoDown, setActiveGoDown] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveGoDown(true)
    }, keys.PRELOADING_TIMEOUT - 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Box pos="sticky" top={0} pt={rem(150)} {...props}>
      <Box sx={{ overflow: "hidden" }}>
        <AspectRatio
          ratio={1000 / 240}
          w={rem(1000)}
          mx="auto"
          sx={{
            transform: `translateY(${rem(activeGoDown ? 0 : -250)})`,
            transition: "all 1s ease-in-out",
          }}
        >
          <TextXAiBot />
        </AspectRatio>
      </Box>
    </Box>
  )
}
