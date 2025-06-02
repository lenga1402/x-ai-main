import { type AppType } from "next/app"
import Head from "next/head"
import { LayerWarning } from "@/layouts/RootLayout/LayerWarning"
import { useMediaQuery } from "@mantine/hooks"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "@/config/Theme"
import { WalletConnectProvider } from "@/config/WalletConnect"
import { api } from "@/utils/api"
import { RenderWrapper } from "@/components/RenderWrapper"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const largerThanXs = useMediaQuery("(min-width: 30em)")

  return (
    <>
      <Head>
        <title>xAIBOT</title>
        <meta
          name="description"
          content="X-AI believes in the potential of AI as a tool designed to aid and enhance, rather than to destroy. By demystifying AI and fostering trust, X-AI strives to empower individuals and organizations to unlock new opportunities and address challenges."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/feature.jpg" />
        <meta property="og:url" content="https://xaibot.org/" />
        <meta property="og:title" content="xAIBOT" />
        <meta property="og:image:alt" content="xAIBOT" />
        <meta
          property="og:description"
          content="X-AI believes in the potential of AI as a tool designed to aid and enhance, rather than to destroy. By demystifying AI and fostering trust, X-AI strives to empower individuals and organizations to unlock new opportunities and address challenges."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="xAIBOT" />
      </Head>

      <SessionProvider session={session}>
        <ThemeProvider>
          <WalletConnectProvider>
            {!largerThanXs ? (
              <RenderWrapper>
                <LayerWarning />
              </RenderWrapper>
            ) : (
              <Component {...pageProps} />
            )}
          </WalletConnectProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
