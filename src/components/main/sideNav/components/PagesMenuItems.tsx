import { Box, useMantineTheme } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { BiCubeAlt, BiDockTop, BiLockOpenAlt } from "react-icons/bi"
import { useDarkMode } from "../../../../hooks"
import NavItemExpansible from "../../../shared/NavItemExpansible"

const PagesMenuItems = () => {
  const theme = useMantineTheme()
  const { colorScheme } = useDarkMode()
  const { t } = useTranslation()

  return (
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
  )
}

export default PagesMenuItems
