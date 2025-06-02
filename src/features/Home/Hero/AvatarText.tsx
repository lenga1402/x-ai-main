import React from "react"
import Image from "next/image"
import { AspectRatio, Group, Paper, rem, Text } from "@mantine/core"

import { HomeHeroAvatar } from "@/assets/images"
import { useAnimMove } from "@/hooks/useAnimMove"

export const AvatarText = () => {
  const { triggerRef } = useAnimMove({
    variant: "to",
    target: "#home-hero-avatar-text",
    vars: { y: rem(-300), rotateZ: "0deg" },
    end: "top 80%",
    start: "top 150%",
  })

  return (
    <Paper
      ref={triggerRef}
      id="home-hero-avatar-text"
      bg="#fff"
      w={rem(300)}
      mx="auto"
      px={rem(13)}
      py={rem(15)}
      radius="lg"
      sx={{ transform: "rotate(50deg)" }}
    >
      <Group noWrap spacing={rem(12)}>
        <Paper radius="md" bg="#232323">
          <AspectRatio ratio={1} w={rem(55)}>
            <Image alt="" fill src={HomeHeroAvatar} />
          </AspectRatio>
        </Paper>

        <Text c="#232323" fz={rem(18)} fw={500}>
          Illuminating the Path to Intelligent Collaboration.
        </Text>
      </Group>
    </Paper>
  )
}
