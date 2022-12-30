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
import { BiChevronLeft, BiCollection, BiHomeCircle } from "react-icons/bi"
import NavItem from "../shared/NavItem"
import { useTranslation } from "react-i18next"

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
  return (
    <Navbar
      sx={{
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
        <Text fw={"bold"} size={28} className="text-brand-mainTextColor">
          sneat
        </Text>
      </Box>
      {/* drawer close button in small screens */}
      <MediaQuery largerThan={"lg"} styles={{ display: "none" }}>
        <Box
          sx={{ padding: 7 }}
          right={-20}
          className="absolute top-6 h-10 w-10 bg-white rounded-full"
        >
          <button
            className="bg-brand-primaryTextColor rounded-full w-full h-full flex justify-center items-center"
            onClick={() => menuToggle.setOpened(false)}
          >
            <BiChevronLeft size={28} className="text-white rtl:rotate-180" />
          </button>
        </Box>
      </MediaQuery>

      {/* menu items */}
      <Box>
        <ul>
          <li className="nav-item-link-holder">
            <NavItem
              icon={<BiHomeCircle />}
              name={t("side_nav.dashboard")}
              to="/"
            />
          </li>
          <li className="nav-item-link-holder">
            <NavItem
              icon={<BiCollection />}
              name={t("side_nav.cards")}
              to="/cards"
            />
          </li>
        </ul>
      </Box>
    </Navbar>
  )
}

export default SideNav
