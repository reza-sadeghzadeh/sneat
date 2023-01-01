import { Accordion, Navbar, ScrollArea, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { BiCollection } from "react-icons/bi"
import { BgStyles, shadowStyles, TxtStyles } from "../../../utils"
import NavItem from "../../shared/NavItem"
import ComponentsMenuItems from "./components/ComponentsMenuItems"
import Devider from "./components/Devider"
import DrawerCloser from "./components/DrawerCloser"
import FormsMenuItems from "./components/FormsMenuItems"
import LogoSec from "./components/LogoSec"
import MiscMenuItems from "./components/MiscMenuItems"
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
    >
      <LogoSec />
      <DrawerCloser setOpened={menuToggle.setOpened} />
      <ScrollArea
        style={{ height: "100%", width: "100%", paddingBottom: 12 }}
        scrollbarSize={1}
        className="overflow-x-hidden"
        scrollHideDelay={500}
      >
        <TopMenuItems accordion={{ openAccord, setOpenAccord }} />
        <Devider title={t("side_nav.pages._")} />
        <PagesMenuItems accordion={{ openAccord, setOpenAccord }} />
        <Devider title={t("side_nav.components._")} />
        <ComponentsMenuItems accordion={{ openAccord, setOpenAccord }} />
        <Devider title={t("side_nav.forms_&_tables._")} />
        <FormsMenuItems accordion={{ openAccord, setOpenAccord }} />
        <Devider title={t("side_nav.misc._")} />
        <MiscMenuItems accordion={{ openAccord, setOpenAccord }} />
      </ScrollArea>
    </Navbar>
  )
}

export default SideNav
