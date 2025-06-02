import React from "react"
import { AspectRatio, Flex, rem } from "@mantine/core"

import { TextSaturnChatbot } from "@/assets/vectors"
import { useAnimMove } from "@/hooks/useAnimMove"

export const AnimTitle = () => {
  const { triggerRef: title1Ref } = useAnimMove({
    target: "#home-chatbot-title-1",
    // markers: true,
    vars: { x: rem(-500) },
    variant: "from",
    end: "top 20%",
  })
  const { triggerRef: title2Ref } = useAnimMove({
    target: "#home-chatbot-title-2",
    // markers: true,
    vars: { x: rem(500) },
    variant: "from",
    end: "top 20%",
  })

  return (
    <Flex
      direction="column"
      gap={rem(60)}
      mb={rem(180)}
      pos="sticky"
      top={0}
      py={rem(100)}
      ref={title1Ref}
      sx={{ overflowX: "hidden" }}
    >
      <AspectRatio
        ratio={3908 / 350}
        miw={3908}
        ml={rem(110)}
        id="home-chatbot-title-1"
        ref={title2Ref}
      >
        <TextSaturnChatbot />
      </AspectRatio>

      <AspectRatio
        ratio={3908 / 350}
        miw={3908}
        ml={rem(-2070)}
        id="home-chatbot-title-2"
      >
        <TextSaturnChatbot />
      </AspectRatio>
    </Flex>
  )
}
