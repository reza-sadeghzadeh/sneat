import { Navbar, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { BgStyles, shadowStyles, TxtStyles } from "../../../utils"
import Devider from "./components/Devider"
import DrawerCloser from "./components/DrawerCloser"
import LogoSec from "./components/LogoSec"
import PagesMenuItems from "./components/PagesMenuItems"
import TopMenuItems from "./components/TopMenuItems"

interface SearchHeaderProps {
  menuToggle: {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const SideNav: React.FC<SearchHeaderProps> = ({ menuToggle }) => {
  const theme = useMantineTheme()
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.lg}px)`)

  return (
    <Navbar
      sx={{
        ...BgStyles(),
        ...TxtStyles(),
        ...shadowStyles(),
        left: matches ? "0" : menuToggle.opened ? "0" : "-100%",
        zIndex: 102,
      }}
      width={{ base: 260 }}
      hiddenBreakpoint="lg"
      className="shadow border-none transition-all"
      pl={"md"}
    >
      <LogoSec />
      <DrawerCloser setOpened={menuToggle.setOpened} />
      <TopMenuItems />
      <Devider title="side_nav.pages._" />
      <PagesMenuItems />
    </Navbar>
  )
}

export default SideNav
