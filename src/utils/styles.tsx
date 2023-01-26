import { useMantineTheme } from "@mantine/core"
import { useDarkMode } from "../hooks"

const TxtStyles = () => {
  const { colorScheme } = useDarkMode()
  const theme = useMantineTheme()

  return {
    color:
      colorScheme === "light" ? theme.colors.brand[0] : theme.colors.gray[4],
    backgroundColor: colorScheme === "light" ? "white" : theme.colors.dark[7],
  }
}

const BgStyles = () => {
  const { colorScheme } = useDarkMode()
  const theme = useMantineTheme()

  return {
    backgroundColor: colorScheme === "light" ? "white" : theme.colors.dark[7],
  }
}

const shadowStyles = () => {
  const { colorScheme } = useDarkMode()
  const theme = useMantineTheme()

  return {
    boxShadow:
      colorScheme === "light"
        ? "0 0 0.375rem 0.25rem rgba(161, 172, 184, 0.1)"
        : "",
  }
}

export { shadowStyles, TxtStyles, BgStyles }
