import React from "react"
import Image from "next/image"
import {
  AspectRatio,
  Box,
  Paper,
  rem,
  Text,
  type BoxProps,
} from "@mantine/core"

import { type IChatbotData } from "./data"

type ChatbotCardProps = BoxProps & {
  data: IChatbotData
}

export const ChatbotCard = ({
  data: { description, image, ratio, ctnProps, title, innerProps },
  ...componentProps
}: ChatbotCardProps) => {
  return (
    <Box {...ctnProps} {...componentProps}>
      <Text fz={rem(50)}>{title}</Text>

      <Paper
        bg={"rgba(187, 131, 242, 0.25)"}
        p={rem(10)}
        radius="lg"
        style={{
          backdropFilter: "blur(4px)",
        }}
        {...innerProps}
      >
        <AspectRatio ratio={ratio}>
          <Image alt="" fill src={image} />
        </AspectRatio>

        {description && (
          <Text fz={rem(18)} fw={500} mt={rem(12)}>
            {description}
          </Text>
        )}
      </Paper>
    </Box>
  )
}
