import { Box, useMantineTheme } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { BiFile, BiSupport } from "react-icons/bi"
import { useDarkMode } from "../../../../hooks"
import NavItem from "../../../shared/NavItem"

interface IMiscMenuItems {
  accordion: {
    openAccord: string | null
    setOpenAccord: React.Dispatch<React.SetStateAction<string | null>>
  }
}

const MiscMenuItems: React.FC<IMiscMenuItems> = ({ accordion }) => {
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
          icon={<BiSupport />}
          label={t("side_nav.misc.support")}
          to="/misc/support"
        />
      </li>
      <li className="nav-item-link-holder">
        <NavItem
          icon={<BiFile />}
          label={t("side_nav.misc.documentaion")}
          to="/misc/documentaion"
        />
      </li>
    </Box>
  )
}

export default MiscMenuItems
