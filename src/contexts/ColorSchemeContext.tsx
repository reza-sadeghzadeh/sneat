import { ColorScheme, ColorSchemeProvider } from "@mantine/core"
import { useColorScheme, useLocalStorage } from "@mantine/hooks"
import { createContext, ReactNode, useState } from "react"

interface IColorSchemeContext {
  toggleColorScheme: Function
  colorScheme: string
}

export const ColorSchemeContext = createContext<Partial<IColorSchemeContext>>(
  {}
)

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
