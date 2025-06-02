import { useEffect } from "react"
import { keys } from "@/constants/keys"
import { Box, type BoxProps } from "@mantine/core"
import { useLockedBody } from "usehooks-ts"

import { RenderWrapper } from "@/components/RenderWrapper"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { Preloading } from "./Preloading"

type RootLayoutProps = BoxProps & {
  withHeader?: boolean
  isMainFooter?: boolean
}

export const RootLayout = ({
  withHeader = true,
  isMainFooter,
  ...props
}: RootLayoutProps) => {
  const [locked, setLocked] = useLockedBody(true, "root")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocked(false)
    }, keys.PRELOADING_TIMEOUT)

    return () => {
      clearTimeout(timeout)
    }
  }, [setLocked])

  return (
    <>
      <RenderWrapper>
        {withHeader && <Header />}

        <Box pos="relative" bg="#22073e" sx={{ zIndex: 1 }} {...props} />

        <Footer bg={isMainFooter ? "#091337" : "#22073E"} />
      </RenderWrapper>

      <Preloading isLoading={locked} />
    </>
  )
}
