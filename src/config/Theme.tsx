import { em, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"

import { fonts } from "@/assets/fonts"
import { ResponsiveIndicator } from "@/components/ResponsiveIndicator"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme: "dark",
      focusRing: "never",
      breakpoints: {
        lg: em(1200),
        xl: em(1600),
      },
      fontFamily: fonts.GENERAL_SANS.style.fontFamily,
      globalStyles: () => ({
        html: {
          // [theme.fn.largerThan("lg")]: {
          fontSize: "0.834vw",
          // },
        },
        body: {
          backgroundColor: "#22073e",
          overflowX: "hidden",
          // "&::-webkit-scrollbar": {
          //   display: "none",
          // },
        },
        a: {
          color: "unset",
          textDecoration: "none",
        },
      }),
      components: {
        Text: {
          styles: {
            root: {
              color: "#fff",
            },
          },
        },
      },
    }}
  >
    {children}

    <Notifications />

    <ResponsiveIndicator />
  </MantineProvider>
)
