import { Box, useMantineTheme } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { BiBox, BiCopy, BiCrown, BiDetail, BiTable } from "react-icons/bi"
import { useDarkMode } from "../../../../hooks"
import NavItem from "../../../shared/NavItem"
import NavItemExpansible from "../../../shared/NavItemExpansible"

interface IComponentsMenuItems {
  accordion: {
    openAccord: string | null
    setOpenAccord: React.Dispatch<React.SetStateAction<string | null>>
  }
}

const FormsMenuItems: React.FC<IComponentsMenuItems> = ({ accordion }) => {
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
        <NavItemExpansible
          accordion={accordion}
          icon={<BiDetail />}
          label={t("side_nav.forms_&_tables.form_elements._")}
          basePath="/forms-&-tables/form-elements"
          childRoutes={[
            {
              label: t("side_nav.forms_&_tables.form_elements.basic_inputs"),
              to: "/perfect-scrollbar",
            },
            {
              label: t("side_nav.forms_&_tables.form_elements.input_groups"),
              to: "/text-devider",
            },
          ]}
        />
      </li>
      <li className="nav-item-link-holder">
        <NavItemExpansible
          accordion={accordion}
          icon={<BiDetail />}
          label={t("side_nav.forms_&_tables.form_layouts._")}
          basePath="/forms-&-tables/form-layouts"
          childRoutes={[
            {
              label: t("side_nav.forms_&_tables.form_layouts.vertical_form"),
              to: "/vertical-form",
            },
            {
              label: t("side_nav.forms_&_tables.form_layouts.horizontal_form"),
              to: "/horizontal-form",
            },
          ]}
        />
      </li>
      <li className="nav-item-link-holder">
        <NavItem
          icon={<BiTable />}
          label={t("side_nav.forms_&_tables.tables")}
          to="/tables"
        />
      </li>
    </Box>
  )
}

export default FormsMenuItems
