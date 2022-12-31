import { Accordion, Navbar, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

  const [openAccord, setOpenAccord] = useState<string | null>(null)

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
      <TopMenuItems accordion={{ openAccord, setOpenAccord }} />
      <Devider title={t("side_nav.pages._")} />
      <PagesMenuItems accordion={{ openAccord, setOpenAccord }} />
      <Devider title={t("side_nav.components._")} />
    </Navbar>
  )
}

export default SideNav
