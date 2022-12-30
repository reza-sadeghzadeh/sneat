import { createEmotionCache, MantineProvider } from "@mantine/core"
import { ReactNode, useEffect, useState } from "react"
import rtlPlugin from "stylis-plugin-rtl"
import { RTLContextProvider } from "../contexts/RTLContext"
import { useRTL } from "../hooks"

import defaultTheme from "./customTheme"

const RTLProvider = ({ children }: { children: ReactNode }) => {
  const { RTL } = useRTL()

  const rtlCache = createEmotionCache({
    key: "mantine-rtl",
    stylisPlugins: [rtlPlugin],
  })

  useEffect(() => {
    document.documentElement.setAttribute("dir", RTL ? "rtl" : "ltr")
    document.documentElement.setAttribute("lang", RTL ? "fa" : "en")
  }, [RTL])

  return (
    <MantineProvider
      emotionCache={RTL ? rtlCache : undefined}
      theme={{ ...defaultTheme, dir: RTL ? "rtl" : "ltr" }}
    >
      {children}
    </MantineProvider>
  )
}

export default RTLProvider
