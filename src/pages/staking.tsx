import { TokenProvider } from "@/contexts/tokenContext"
import { NavMenu } from "@/features/About/NavMenu"
import {
  ButtonConnect,
  ButtonStake,
  Claim,
  Overview,
  StakeInfo,
  StakeInput,
  Unstake,
  UserBalance,
} from "@/features/Staking"
import { RootLayout } from "@/layouts/RootLayout"
import { Divider, Flex, Paper, rem, type PaperProps } from "@mantine/core"

import { Section } from "@/components/Section"

export default function Staking() {
  return (
    <TokenProvider>
      <RootLayout withHeader={false}>
        <NavMenu />

        <Section>
          <Flex direction="column" gap={rem(25)}>
            <Container>
              <Overview />
            </Container>

            <Container>
              <Flex direction="column" gap={rem(20)}>
                <Container py={rem(15)}>
                  <Flex direction="column" gap={rem(20)}>
                    <UserBalance />

                    <StakeInput />
                  </Flex>
                </Container>

                <ButtonConnect />

                <StakeInfo />

                <ButtonStake />

                <Divider color="#ffffff15" />

                <Claim />

                <Divider color="#ffffff15" />

                <Unstake />
              </Flex>
            </Container>
          </Flex>
        </Section>
      </RootLayout>
    </TokenProvider>
  )
}

const Container = (props: PaperProps) => (
  <Paper
    py={rem(20)}
    px={rem(25)}
    bg="rgba(255, 255, 255, 0.04)"
    sx={{
      border: `${rem(1)} solid rgba(255, 255, 255, 0.20)`,
      borderRadius: rem(16),
    }}
    {...props}
  />
)
