import { useEffect, useState } from "react"
import Link from "next/link"
import { links } from "@/constants/links"
import { menuSocial, rootMenuHeader } from "@/constants/menus"
import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  Grid,
  Group,
  Input,
  rem,
  Text,
  Title,
} from "@mantine/core"
import { nanoid } from "nanoid"
import { useLockedBody } from "usehooks-ts"

import { fonts } from "@/assets/fonts"
import { ArrowRight, IconArrowRightLong, Logo } from "@/assets/vectors"
import { HybridLink } from "@/components/HybridLink"

// import styles from "./button.module.css"

export const NavMenu = () => {
  const [opened, setOpened] = useState(false)
  const [, setLocked] = useLockedBody(false, "root")

  useEffect(() => {
    if (opened) setLocked(true)
    else setLocked(false)
  }, [opened, setLocked])

  return (
    <>
      <Group
        fw={600}
        pos="absolute"
        top={0}
        left={0}
        right={0}
        px={rem(40)}
        py={rem(50)}
      >
        <Box sx={{ zIndex: 8, flex: 1 }}>
          <Box w="fit-content">
            <HybridLink href={"https://t.me/xaibotxaibot"}>
              <Text
                opacity={0}
                c="#572B7A"
                px={rem(40)}
                py={rem(12)}
                bg="#ffffff10"
                fw={600}
                fz={rem(20)}
                sx={{
                  border: `${rem(1)} solid #572B7A`,
                  borderRadius: rem(16),
                  transition: "all 0.25s",
                  "&:hover": {
                    backgroundColor: "#ffffff50",
                  },
                }}
              >
                MEET xAIBOT
              </Text>
            </HybridLink>
          </Box>
        </Box>

        <Flex
          direction="column"
          gap={rem(8)}
          align="center"
          justify="center"
          h={rem(30)}
          sx={{ cursor: "pointer", zIndex: 10 }}
          onClick={() => {
            setOpened((val) => !val)
            scrollTo({ behavior: "smooth", top: 0 })
          }}
        >
          <Box
            bg={opened ? "#fff" : "white"}
            h={rem(2)}
            w={rem(opened ? 40 : 30)}
            sx={{
              transform: `rotate(${opened ? 215 : 0}deg)`,
              transition: "all 0.5s ease-in-out",
              transformOrigin: "50% 200%",
            }}
          />

          <Box
            bg={opened ? "#fff" : "white"}
            h={rem(2)}
            w={rem(opened ? 40 : 30)}
            sx={{
              transform: `rotate(${opened ? -217 : 0}deg)`,
              transition: "all 0.5s ease-in-out",
              transformOrigin: "50% -90%",
            }}
          />
        </Flex>

        <Group position="right" sx={{ zIndex: 8, flex: 1 }}>
          <Box w="fit-content">
            <HybridLink href={links.DEXVIEW}>
              <Text
                opacity={0}
                c="#572B7A"
                px={rem(40)}
                py={rem(12)}
                bg="#ffffff10"
                fw={600}
                fz={rem(20)}
                sx={{
                  border: `${rem(1)} solid #572B7A`,
                  borderRadius: rem(16),
                  transition: "all 0.25s",
                  "&:hover": {
                    backgroundColor: "#ffffff50",
                  },
                }}
              >
                BUY $xAIBOT
              </Text>
            </HybridLink>
          </Box>
        </Group>
      </Group>

      <Flex
        direction="column"
        pos="fixed"
        top={0}
        left={0}
        right={0}
        h="100vh"
        opacity={opened ? 1 : 0}
        sx={{
          transition: "all 0.5s ease-in-out",
          zIndex: 9,
          backgroundColor: "#00000050",
          backdropFilter: "blur(30px)",
          ...(opened
            ? {}
            : {
                pointerEvents: "none",
              }),
        }}
      >
        <Box
          sx={{
            transform: "translate(-50%,-100%)",
          }}
          pos={"absolute"}
          top={"50%"}
          // w={100}
          // h={100}
          left={"50%"}
          // className={styles["buttons"]}
        >
          <Link href={links.DEXVIEW} target="_blank" rel="noopener noreferrer">
            <Box
              py={rem(16)}
              px={rem(60)}
              sx={{ borderRadius: "70px" }}
              bg={"white"}
            >
              <Group>
                <Title fz={rem(24)} c={"black"} fw={600}>
                  XAIBOT
                </Title>
                <AspectRatio ratio={1} w={rem(16)}>
                  <ArrowRight />
                </AspectRatio>
              </Group>
            </Box>
          </Link>
        </Box>

        <Group spacing={rem(20)} px={rem(40)} py={rem(40)}>
          <AspectRatio ratio={45 / 40} w={rem(60)}>
            <Logo />
          </AspectRatio>

          <Text
            ff={fonts.OFFBIT_TRIAL_DOT.style.fontFamily}
            fz={rem(50)}
            lh="1em"
            mb={rem(-13)}
          >
            xAIBOT
          </Text>
        </Group>

        <Flex px={rem(20)} mt={rem(50)} sx={{ flex: 1 }}>
          <Box sx={{ flex: 1 }} pt={rem(50)}>
            <Box w={rem(500)}>
              {rootMenuHeader.map(({ link, title }, index) => (
                <HybridLink href={link} key={nanoid()}>
                  <Box
                    sx={{
                      "&:hover .line-active": {
                        width: "100%",
                      },
                    }}
                    onClick={() => setOpened(false)}
                  >
                    <Grid gutter={0} align="center" py={rem(20)}>
                      <Grid.Col span={3}>
                        <Text lh="1em" fz={rem(14)} fw={500}>
                          ({index + 1})
                        </Text>
                      </Grid.Col>

                      <Grid.Col span={6}>
                        <Text
                          tt="uppercase"
                          fw={500}
                          fz={rem(30)}
                          lh="1em"
                          pt={rem(5)}
                        >
                          {title}
                        </Text>
                      </Grid.Col>

                      <Grid.Col span={3}>
                        <Text fz={rem(40)} lh="1em" ta="end">
                          +
                        </Text>
                      </Grid.Col>
                    </Grid>

                    <Box pos="relative">
                      <Box h={rem(1)} w="100%" bg="rgba(235, 227, 224, 0.20)" />
                      <Box
                        className="line-active"
                        w={0}
                        h={rem(1)}
                        bg="#fff"
                        pos="absolute"
                        top={0}
                        left={0}
                        sx={{ transition: "all 0.5s ease-in-out" }}
                      />
                    </Box>
                  </Box>
                </HybridLink>
              ))}
            </Box>
          </Box>

          <Group position="right" sx={{ flex: 1 }} pr={rem(160)}>
            <Flex
              w={rem(220)}
              direction="column"
              justify="space-between"
              h="100%"
              pb={rem(200)}
            >
              <Flex direction="column" fz={rem(13)} fw={500} gap={rem(40)}>
                <Box>
                  <Text mb={rem(13)}>E:</Text>

                  <Text tt="uppercase" td="underline">
                    hello@xaibot.org
                  </Text>
                </Box>

                <Box>
                  <Text mb={rem(13)}>C.M:</Text>

                  {menuSocial.map(({ link, title }) => (
                    <HybridLink href={link} key={nanoid()}>
                      <span> </span>
                      <Text tt="uppercase" td="underline" display="inline">
                        {title}
                      </Text>
                      <span>,</span>
                    </HybridLink>
                  ))}
                </Box>
              </Flex>

              <Box>
                <Input
                  variant="unstyled"
                  placeholder="CONTACT US"
                  sx={{
                    "input, input::placeholder": {
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: rem(13),
                    },
                  }}
                  rightSection={
                    <AspectRatio
                      ratio={32 / 9}
                      w={rem(32)}
                      sx={{ cursor: "pointer" }}
                    >
                      <IconArrowRightLong />
                    </AspectRatio>
                  }
                />

                <Divider color="#fff" />
              </Box>
            </Flex>
          </Group>
        </Flex>
      </Flex>
    </>
  )
}
