import { AppShell, MediaQuery, Overlay, useMantineTheme } from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

import SearchHeader from "../components/main/SearchHeader"
import SideNav from "../components/main/SideNav"

const MainLayout = () => {
  const [opened, setOpened] = useState(false)
  const [scrollLocked, setScrollLocked] = useScrollLock()
  const theme = useMantineTheme()
  const location = useLocation()

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
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint="lg"
      navbar={<SideNav menuToggle={{ opened, setOpened }} />}
      classNames={{
        main: "bg-brand-bodyColor py-3",
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
          <section className="mt-6">
            <Outlet />
          </section>
        </div>
      </div>
    </AppShell>
  )
}

export default MainLayout
