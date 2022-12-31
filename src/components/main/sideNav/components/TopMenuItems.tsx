import { Box, useMantineTheme } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { BiHomeCircle, BiLayout } from "react-icons/bi"
import { useDarkMode } from "../../../../hooks"
import NavItem from "../../../shared/NavItem"
import NavItemExpansible from "../../../shared/NavItemExpansible"

interface ITopMenuItems {
  accordion: {
    openAccord: string | null
    setOpenAccord: React.Dispatch<React.SetStateAction<string | null>>
  }
}

const TopMenuItems: React.FC<ITopMenuItems> = ({ accordion }) => {
  const theme = useMantineTheme()
  const { colorScheme } = useDarkMode()
  const { t } = useTranslation()

  return (
    <Box
      pl={"md"}
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
          accordion={accordion}
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
  )
}

export default TopMenuItems
