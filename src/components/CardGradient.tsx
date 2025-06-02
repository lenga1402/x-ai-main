import { Box, rem, Text, Title, type BoxProps } from "@mantine/core"

import { fonts } from "@/assets/fonts"

type CardGradientProps = BoxProps & {
  title: string
  content: string
}

export const CardGradient: React.FC<CardGradientProps> = ({
  title,
  content,
  ...props
}) => {
  return (
    <Box pos="relative" px={rem(32)} py={rem(20)} {...props}>
      <Box
        h="100%"
        sx={{
          borderRadius: rem(40),
          border: "2px solid transparent",
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5)) border-box",
          "-webkit-mask":
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          "-webkit-mask-composite": "xor",
        }}
        c="#fff"
        pos="absolute"
        top={0}
        left={0}
        right={0}
      />

      <Box pos="relative">
        <Title
          fz={rem(40)}
          fw={700}
          ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}
          tt="uppercase"
          ta="center"
        >
          {title}
        </Title>
        <Text mt={rem(8)} c="#fff" fz={rem(28)} tt="uppercase" ta="center">
          {content}
        </Text>
      </Box>
    </Box>
  )
}
