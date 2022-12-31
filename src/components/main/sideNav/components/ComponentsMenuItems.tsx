import { Box, useMantineTheme } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { BiBox, BiCollection, BiCopy, BiCrown, BiLayout } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDarkMode } from "../../../../hooks"
import NavItem from "../../../shared/NavItem"
import NavItemExpansible from "../../../shared/NavItemExpansible"

interface IComponentsMenuItems {
  accordion: {
    openAccord: string | null
    setOpenAccord: React.Dispatch<React.SetStateAction<string | null>>
  }
}

const ComponentsMenuItems: React.FC<IComponentsMenuItems> = ({ accordion }) => {
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
          icon={<BiCollection />}
          label={t("side_nav.components.cards")}
          to="/cards"
        />
      </li>
      <li className="nav-item-link-holder">
        <NavItemExpansible
          accordion={accordion}
          icon={<BiCopy />}
          label={t("side_nav.components.user_interface._")}
          basePath="/components"
          childRoutes={[
            {
              label: t("side_nav.components.user_interface.alerts"),
              to: "/alerts",
            },
            {
              label: t("side_nav.components.user_interface.badges"),
              to: "/badges",
            },
            {
              label: t("side_nav.components.user_interface.buttons"),
              to: "/buttons",
            },
            {
              label: t("side_nav.components.user_interface.carousel"),
              to: "/carousel",
            },
            {
              label: t("side_nav.components.user_interface.collapse"),
              to: "/collapse",
            },
            {
              label: t("side_nav.components.user_interface.dropdowns"),
              to: "/dropdowns",
            },
            {
              label: t("side_nav.components.user_interface.footer"),
              to: "/footer",
            },
            {
              label: t("side_nav.components.user_interface.list_groups"),
              to: "/list_groups",
            },
            {
              label: t("side_nav.components.user_interface.modals"),
              to: "/modals",
            },
            {
              label: t("side_nav.components.user_interface.offcanvas"),
              to: "/offcanvas",
            },
            {
              label: t(
                "side_nav.components.user_interface.Pagination_&_breadcrumbs"
              ),
              to: "/Pagination-&-breadcrumbs",
            },
            {
              label: t("side_nav.components.user_interface.progress"),
              to: "/progress",
            },
            {
              label: t("side_nav.components.user_interface.spiners"),
              to: "/spiners",
            },
            {
              label: t("side_nav.components.user_interface.tabs_&_pills"),
              to: "/tabs-&-pills",
            },
            {
              label: t("side_nav.components.user_interface.toasts"),
              to: "/toasts",
            },
            {
              label: t(
                "side_nav.components.user_interface.tooltips_&_popovers"
              ),
              to: "/tooltips-&-popovers",
            },
            {
              label: t("side_nav.components.user_interface.typography"),
              to: "/typography",
            },
          ]}
        />
      </li>
      <li className="nav-item-link-holder">
        <NavItemExpansible
          accordion={accordion}
          icon={<BiBox />}
          label={t("side_nav.components.extended_ui._")}
          basePath="/components"
          childRoutes={[
            {
              label: t("side_nav.components.extended_ui.perfect_scrollbar"),
              to: "/perfect-scrollbar",
            },
            {
              label: t("side_nav.components.extended_ui.text_devider"),
              to: "/text-devider",
            },
          ]}
        />
      </li>
      <li className="nav-item-link-holder">
        <a
          target={"_blank"}
          href="https://react-icons.github.io/react-icons/icons?name=bi"
          onClick={(e) => e.stopPropagation()}
        >
          <NavItem
            icon={<BiCrown />}
            label={t("side_nav.components.box_icons")}
            to="/box-icons"
          />
        </a>
      </li>
    </Box>
  )
}

export default ComponentsMenuItems
