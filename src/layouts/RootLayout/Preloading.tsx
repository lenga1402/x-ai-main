import { useState } from "react"
import {
  Box,
  Divider,
  Flex,
  Progress,
  rem,
  Text,
  Transition,
} from "@mantine/core"
import { useInterval } from "usehooks-ts"

import { fonts } from "@/assets/fonts"
import { AnimLogo } from "@/components/AnimLogo"

export const Preloading = ({ isLoading }: { isLoading: boolean }) => {
  const [value, setValue] = useState(0)

  useInterval(
    () => {
      setValue((val) => val + 1)
    },
    value < 100 ? 20 : null
  )

  const activeGoUp = value >= 99

  return (
    <Transition
      mounted={isLoading}
      transition="slide-up"
      duration={1000}
      timingFunction="ease"
    >
      {(styles) => (
        <Box
          style={styles}
          sx={{ zIndex: 100 }}
          pos="fixed"
          h="100vh"
          fz={rem(200)}
          tt="uppercase"
          fw="bold"
          top={0}
          left={0}
          right={0}
          bg="linear-gradient(180deg, #572B7A 0%, #191120 100%)"
          c="#fff"
          py={rem(100)}
        >
          <Progress value={value} color="#C483F6" mb={rem(45)} bg="#583177" />

          <AnimLogo />

          <Divider color="#fff" opacity={0.1} size={rem(2)} my={rem(50)} />

          <Flex justify="space-between" align="center" px={rem(100)}>
            <Box sx={{ overflow: "hidden" }} h={rem(160)}>
              <Box
                sx={
                  activeGoUp
                    ? {
                        transform: `translateY(${rem(-200)})`,
                        transition: "all 1s ease-in-out",
                      }
                    : {}
                }
              >
                <Text lh="1em" ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}>
                  0
                </Text>
                <Text lh="1em" ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}>
                  1
                </Text>
              </Box>
            </Box>

            <Box sx={{ overflow: "hidden" }} h={rem(160)}>
              <Box
                sx={
                  activeGoUp
                    ? {
                        transform: `translateY(${rem(-200)})`,
                        transition: "all 1s ease-in-out",
                      }
                    : {}
                }
              >
                <Text lh="1em" ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}>
                  {value < 10 ? 0 : ""}
                  {value === 100 ? 99 : value}
                </Text>
                <Text lh="1em" ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}>
                  00
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </Transition>
  )
}
