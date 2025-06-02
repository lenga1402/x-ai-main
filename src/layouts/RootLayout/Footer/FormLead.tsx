import React from "react"
import { AspectRatio, Box, Group, Input, rem } from "@mantine/core"

import { fonts } from "@/assets/fonts"
import {
  FrameButtonSubmit,
  FrameEmail,
  IconArrowTopRightWithBracket,
} from "@/assets/vectors"

export const FormLead = () => {
  return (
    <Group position="apart" spacing={rem(0)}>
      <Box pos="relative">
        <Input
          sx={{
            zIndex: 1,
            input: {
              fontSize: rem(71),
              fontFamily: fonts.INTER.style.fontFamily,
              height: "100%",
              textAlign: "center",
              color: "#fff",
              "&::placeholder": {
                color: "#fff",
              },
            },
          }}
          placeholder="Youremail@gmail.com"
          pos="absolute"
          variant="unstyled"
          top={rem(1)}
          left={rem(1)}
          right={rem(1)}
          bottom={rem(2)}
        />

        <AspectRatio ratio={1338 / 260} w={rem(1338)}>
          <FrameEmail />
        </AspectRatio>
      </Box>

      <Box pos="relative" sx={{ cursor: "pointer" }}>
        <AspectRatio
          ratio={146 / 189}
          w={rem(146)}
          pos="absolute"
          left="50%"
          top="50%"
          sx={{ transform: "translate(-50%,-50%)" }}
        >
          <IconArrowTopRightWithBracket />
        </AspectRatio>

        <AspectRatio ratio={426 / 260} w={rem(426)}>
          <FrameButtonSubmit />
        </AspectRatio>
      </Box>
    </Group>
  )
}
