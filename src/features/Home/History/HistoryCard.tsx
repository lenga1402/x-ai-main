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

import { type IHistoryData } from "./data"

type HistoryCardProps = BoxProps & {
  data: IHistoryData
}

export const HistoryCard = ({
  data: { description, image, ratio, year, props, ctnProps },
  ...componentProps
}: HistoryCardProps) => {
  return (
    <Box {...ctnProps} {...componentProps}>
      <Text fz={rem(80)}>{year}</Text>

      <Paper
        bg={"rgba(187, 131, 242, 0.25)"}
        p={rem(10)}
        radius="lg"
        style={{
          backdropFilter: "blur(4px)",
        }}
        {...props}
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
