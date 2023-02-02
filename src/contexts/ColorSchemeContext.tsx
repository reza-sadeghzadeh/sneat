import { ColorScheme, ColorSchemeProvider } from "@mantine/core"
import { useColorScheme, useLocalStorage } from "@mantine/hooks"
import { createContext, ReactNode, useEffect, useState } from "react"

interface IColorSchemeContext {
  toggleColorScheme: Function
  colorScheme: string
}

export const ColorSchemeContext = createContext<Partial<IColorSchemeContext>>(
  {}
)

const DARK_MODE_CLASS_NAME = "dark-mode"

export const ColorSchemeContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "sneat-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })

  // performance penalty here!
  useEffect(() => {
    if (colorScheme === "dark")
      document.body.classList.add(DARK_MODE_CLASS_NAME)
    else document.body.classList.remove(DARK_MODE_CLASS_NAME)
  }, [colorScheme])

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  return (
    <ColorSchemeContext.Provider value={{ toggleColorScheme, colorScheme }}>
      <ColorSchemeProvider
        toggleColorScheme={toggleColorScheme}
        colorScheme={colorScheme}
      >
        {children}
      </ColorSchemeProvider>
    </ColorSchemeContext.Provider>
  )
}
