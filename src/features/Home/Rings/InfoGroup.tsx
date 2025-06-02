import Image from "next/image"
import { AspectRatio, Box, Button, Flex, Group, rem, Text } from "@mantine/core"

import { JupiterBotAvatar3 } from "@/assets/images"
import { HybridLink } from "@/components/HybridLink"

import { type RingsDataProps } from "./data"

type InfoGroupProps = RingsDataProps & {
  className?: string
}

export const InfoGroup = ({
  avatarTitle,
  bot,
  title,
  className,
  buttonTitle,
  link,
}: InfoGroupProps) => {
  return (
    <Flex direction="column" gap={rem(16)} className={className} mt="40vh">
      <Group
        noWrap
        bg="#fff"
        px={rem(14)}
        py={rem(12)}
        sx={{ borderRadius: rem(18) }}
        spacing={rem(12)}
        w="fit-content"
      >
        <AspectRatio ratio={1} w={rem(56)}>
          <Image alt="" fill src={avatarTitle} />
        </AspectRatio>

        <Text fw={500} c="#000" sx={{ whiteSpace: "pre-line" }}>
          {title}
        </Text>
      </Group>

      <Group
        noWrap
        bg="rgba(187, 131, 242, 0.25)"
        px={rem(14)}
        py={rem(12)}
        sx={{ borderRadius: rem(18) }}
        spacing={rem(12)}
        w="fit-content"
      >
        <AspectRatio ratio={1} w={rem(56)}>
          <Image alt="" fill src={JupiterBotAvatar3} />
        </AspectRatio>

        <Text fw={500} sx={{ whiteSpace: "pre-line" }}>
          {bot}
        </Text>
      </Group>

      <Box w="fit-content" mt={rem(50)}>
        <HybridLink href={link}>
          <Button variant="white" color="dark" radius="xl" size="lg">
            {buttonTitle}
          </Button>
        </HybridLink>
      </Box>
    </Flex>
  )
}
