import { AppShell, Overlay, Paper, useMantineTheme } from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

import SearchHeader from "../components/main/SearchHeader"
import SideNav from "../components/main/sideNav/SideNav"
import { useDarkMode } from "../hooks"

const MainLayout = () => {
  const [opened, setOpened] = useState(false)
  const [scrollLocked, setScrollLocked] = useScrollLock()
  const theme = useMantineTheme()
  const location = useLocation()
  const { colorScheme } = useDarkMode()

  useEffect(() => {
    setOpened(false)
  }, [location.pathname])

  useEffect(() => {
    setScrollLocked(opened)
  }, [opened])

  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            colorScheme === "light"
              ? theme.colors.brand[1]
              : theme.colors.dark[5],
        },
      })}
      navbarOffsetBreakpoint="lg"
      navbar={<SideNav menuToggle={{ opened, setOpened }} />}
      classNames={{
        main: " py-3",
      }}
    >
      <div className="px-2">
        <div className="strict-width">
          <SearchHeader menuToggle={{ opened, setOpened }} />
          {opened && (
            <Overlay
              onClick={() => setOpened(false)}
              sx={{ zIndex: 101, backgroundColor: theme.colors.gray[7] }}
            />
          )}
          {/* outlet */}
          <Paper bg={"transparent"} component="main" className="mt-6">
            <Outlet />
          </Paper>
        </div>
      </div>
    </AppShell>
  )
}

export default MainLayout
