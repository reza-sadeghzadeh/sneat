import {
  Box,
  Image,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { useTranslation } from "react-i18next"
import {
  BiChevronLeft,
  BiCollection,
  BiHomeCircle,
  BiLayout,
} from "react-icons/bi"
import { useLocation, parsePath } from "react-router-dom"
import { useDarkMode } from "../../hooks"
import { BgStyles, TxtStyles, shadowStyles } from "../../utils"
import NavItem from "../shared/NavItem"
import NavItemExpansible from "../shared/NavItemExpansible"

interface SearchHeaderProps {
  menuToggle: {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const SideNav: React.FC<SearchHeaderProps> = ({ menuToggle }) => {
  const { t } = useTranslation()
  const theme = useMantineTheme()
  const matches = useMediaQuery(`(min-width:${theme.breakpoints.lg}px)`)
  const { colorScheme } = useDarkMode()

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
      {/* logo */}
      <Box className="flex items-center justify-start mt-2 px-1 py-3">
        <Image
          height={36}
          width={22}
          withPlaceholder
          alt="logo"
          src={"/logo.svg"}
          className="mx-2"
        />
        <Text fw={"bold"} sx={{}} size={28}>
          sneat
        </Text>
      </Box>
      {/* drawer close button in small screens */}
      <MediaQuery largerThan={"lg"} styles={{ display: "none" }}>
        <Box
          sx={{ padding: 7, ...BgStyles() }}
          right={-20}
          className="absolute top-6 h-10 w-10 rounded-full"
        >
          <button
            className="bg-brand-primaryTextColor rounded-full w-full h-full flex justify-center items-center"
            onClick={() => menuToggle.setOpened(false)}
          >
            <BiChevronLeft size={28} className="rtl:rotate-180 text-white" />
          </button>
        </Box>
      </MediaQuery>

      {/* menu items */}
      <Box
        component="ul"
        sx={{
          color:
            colorScheme === "light"
              ? theme.colors.brand[0]
              : theme.colors.gray[4],
        }}
      >
        <li className="nav-item-link-holder">
          <NavItem
            icon={<BiHomeCircle />}
            label={t("side_nav.dashboard")}
            to="/"
          />
        </li>
        <li className="nav-item-link-holder">
          <NavItemExpansible
            icon={<BiLayout />}
            label={t("side_nav.layouts")}
            basePath="/layouts"
            childRoutes={[
              {
                label: "karaj",
                to: "/a",
              },
              {
                label: "tehran",
                to: "/b",
              },
            ]}
          />
        </li>
        <li className="nav-item-link-holder">
          <NavItem
            icon={<BiCollection />}
            label={t("side_nav.cards")}
            to="/cards"
          />
        </li>
      </Box>
    </Navbar>
  )
}

export default SideNav
