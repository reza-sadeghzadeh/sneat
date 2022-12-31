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
  BiCubeAlt,
  BiDockTop,
  BiHomeCircle,
  BiLayout,
  BiLockOpenAlt,
} from "react-icons/bi"
import { useDarkMode } from "../../hooks"
import { BgStyles, shadowStyles, TxtStyles } from "../../utils"
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
      <Box className="flex items-center justify-start mt-2 px-2 py-3.5">
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
            label={t("side_nav.layouts._")}
            basePath="/layouts"
            childRoutes={[
              {
                label: t("side_nav.layouts.with_out_menu"),
                to: "/with-out-menu",
              },
              {
                label: t("side_nav.layouts.with_out_navbar"),
                to: "/with-out-navbar",
              },
              {
                label: t("side_nav.layouts.container"),
                to: "/container",
              },
              {
                label: t("side_nav.layouts.fluid"),
                to: "/fluid",
              },
              {
                label: t("side_nav.layouts.blank"),
                to: "/blank",
              },
            ]}
          />
        </li>
      </Box>
      <p className="text-xs mt-7 px-5 mb-3.5 opacity-80 uppercase side-line">
        {t("side_nav.pages._")}
      </p>
      <Box
        component="ul"
        sx={{
          color:
            colorScheme === "light"
              ? theme.colors.brand[0]
              : theme.colors.gray[4],
        }}
      >
        {/* account_settings */}
        <li className="nav-item-link-holder">
          <NavItemExpansible
            icon={<BiDockTop />}
            label={t("side_nav.pages.account_settings._")}
            basePath="/pages/account-settings"
            childRoutes={[
              {
                label: t("side_nav.pages.account_settings.account"),
                to: "/account",
              },
              {
                label: t("side_nav.pages.account_settings.notifications"),
                to: "/notifications",
              },
              {
                label: t("side_nav.pages.account_settings.connections"),
                to: "/connections",
              },
            ]}
          />
        </li>
        {/* authentications */}
        <li className="nav-item-link-holder">
          <NavItemExpansible
            icon={<BiLockOpenAlt />}
            label={t("side_nav.pages.authentications._")}
            basePath="/pages/auth"
            childRoutes={[
              {
                label: t("side_nav.pages.authentications.login"),
                to: "/login",
              },
              {
                label: t("side_nav.pages.authentications.register"),
                to: "/register",
              },
              {
                label: t("side_nav.pages.authentications.forgot_password"),
                to: "/forgot-password",
              },
            ]}
          />
        </li>

        {/* misc */}
        <li className="nav-item-link-holder">
          <NavItemExpansible
            icon={<BiCubeAlt />}
            label={t("side_nav.pages.misc._")}
            basePath="/pages/misc"
            childRoutes={[
              {
                label: t("side_nav.pages.misc.error"),
                to: "/error",
              },
              {
                label: t("side_nav.pages.misc.under_maintenance"),
                to: "/under-maintenance",
              },
            ]}
          />
        </li>
      </Box>
    </Navbar>
  )
}

export default SideNav
