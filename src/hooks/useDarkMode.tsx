import { ColorScheme, ColorSchemeProvider } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import { ReactNode, useContext, useState } from "react"
import { ColorSchemeContext } from "../contexts"

const useDarkMode = () => {
  const { colorScheme, toggleColorScheme } = useContext(ColorSchemeContext)

  return { colorScheme: colorScheme!, toggleColorScheme: toggleColorScheme! }
}

export default useDarkMode
